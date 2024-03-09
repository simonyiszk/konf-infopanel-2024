import { BACKEND_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';
import type { Break, IndexPageData } from '$lib/types/api';

export async function getConferenceData() {
	const res = await fetch(`${BACKEND_URL}/conference/index`);
	if (!res.ok) {
		console.error(res);
		error(500, 'Failed to fetch conference data');
	}
	const data = (await res.json()) as IndexPageData;
	return {
		...data,
		presentations: data.presentations
			.map((e) => {
				return {
					...e,
					startTime: new Date(e.startTime),
					endTime: new Date(e.endTime)
				};
			})
			.sort((a, b) => (a.startTime.getTime() > b.startTime.getTime() ? 1 : -1))
	};
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
