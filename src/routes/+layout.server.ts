import { getPresentations } from '$lib/server/load';

export const load = async () => {
	const presentations = await getPresentations();

	return {
		presentations
	};
};
