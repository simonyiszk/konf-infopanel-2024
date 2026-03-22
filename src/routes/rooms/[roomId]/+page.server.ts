import type { PageServerLoad } from './$types';
import type { Presentation } from '$lib/types/api';
import { error } from '@sveltejs/kit';
import { getKonfStartdate } from '$lib/server/load';

const rooms = [
	{
		room: 'IB025',
		slug: 'ib025'
	},
	{
		room: 'IB028',
		slug: 'ib028'
	}
] satisfies {
	room: Presentation['room'];
	slug: string;
}[];

export const load: PageServerLoad = async (context) => {
	const slug = context.params.roomId;
	const presentations = (await context.parent()).presentations;
	const konfStartdate = await getKonfStartdate();

	const selectedRoom = rooms.find((room) => room.slug === slug);

	if (!selectedRoom) {
		error(404, 'Room not found');
	}

	return {
		presentations: presentations
			.filter((presentation) => presentation.room === selectedRoom.room)
			.sort((a, b) => (new Date(a.startTime) > new Date(b.startTime) ? 1 : -1)),
		konfStartdate: konfStartdate
	};
};
