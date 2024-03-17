import { getConferenceData } from '$lib/server/load';
import { dev } from '$app/environment';

export const load = async () => {
	const data = await getConferenceData();

	if (dev) {
		console.log('dev mode, modifying data');

		const now = new Date();

		const ib028 = data.presentations.filter((p) => p.room === 'IB028');

		const ib025 = data.presentations.filter((p) => p.room === 'IB025');

		const pres = [ib028, ib025].flatMap((room) => {
			return room.map((p, i) => {
				const start = new Date(now.getTime() + i * 1000 * 60 * 0.1);
				const end = new Date(now.getTime() + (i + 1) * 1000 * 60 * 0.1);

				return {
					...p,
					startTime: start,
					endTime: end
				};
			});
		});

		console.log(pres);

		return {
			...data,
			presentations: pres
		};
	}

	return {
		...data
	};
};
