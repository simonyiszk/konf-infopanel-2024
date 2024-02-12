import { BACKEND_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';
import type { IndexPageData } from '$lib/types/api';

export async function getPresentations() {
	const res = await fetch(`${BACKEND_URL}/conference/index`);
	if (!res.ok) {
		console.error(res);
		error(500, 'Failed to fetch presentations');
	}
	const data = (await res.json()) as IndexPageData;
	return data.presentations;
}
