import { BACKEND_URL } from '$env/static/private';
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
				return {
					...e,
					startTime: new Date(e.startTime),
					endTime: new Date(e.endTime)
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
