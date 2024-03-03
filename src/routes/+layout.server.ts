import { getConferenceData } from '$lib/server/load';

export const load = async () => {
	const data = await getConferenceData();

	return {
		...data
	};
};
