import { BACKEND_URL, KONF_STARTDATE } from '$env/static/private';
import { error } from '@sveltejs/kit';
import type { Break, IndexPageData, Presentation } from '$lib/types/api';

type RawPresentation = Omit<Presentation, 'startTime' | 'endTime'> & {
	startTime: string;
	endTime: string;
};

export async function getConferenceData() {
	const res = await fetch(`${BACKEND_URL}/conference/index`);
	if (!res.ok) {
		console.error(res);
		error(500, 'Failed to fetch conference data');
	}
	const data = await res.json();
	return {
		...data,
		presentations: (data.presentations as RawPresentation[])
			.map((e) => {
				const [startHours, startMins] = e.startTime.split(':').map(Number);
				const [endHours, endMins] = e.endTime.split(':').map(Number);
				return {
					...e,
					startTime: new Date(new Date(KONF_STARTDATE).setHours(startHours - 1, startMins)),
					endTime: new Date(new Date(KONF_STARTDATE).setHours(endHours - 1, endMins))
				};
			})
			.sort((a, b) => (a.startTime.getTime() > b.startTime.getTime() ? 1 : -1))
	} as IndexPageData;
}

export async function getPresentations() {
	const data = await getConferenceData();
	return data.presentations;
}

export async function getBreaks() {
	const res = await fetch(`${BACKEND_URL}/proto/breaks`);
	if (!res.ok) {
		console.error(res);
		error(500, 'Failed to fetch breaks');
	}
	const data = (await res.json()) as Array<Break>;
	return data;
}

export async function getKonfStartdate() {
	return KONF_STARTDATE;
}
