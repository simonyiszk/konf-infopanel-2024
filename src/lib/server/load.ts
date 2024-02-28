import { BACKEND_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';
import type { Break, IndexPageData } from '$lib/types/api';

export async function getPresentations() {
	const res = await fetch(`${BACKEND_URL}/conference/index`);
	if (!res.ok) {
		console.error(res);
		error(500, 'Failed to fetch presentations');
	}
	const data = (await res.json()) as IndexPageData;

	return data.presentations.sort((a, b) =>
		new Date(a.startTime).getTime() > new Date(b.startTime).getTime() ? 1 : -1
	);
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
