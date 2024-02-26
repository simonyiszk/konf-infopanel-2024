import type { PageServerLoad } from './$types';
import type { Presentation } from '$lib/types/api';
import { error } from '@sveltejs/kit';

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

	const selectedRoom = rooms.find((room) => room.slug === slug);

	if (!selectedRoom) {
		error(404, 'Room not found');
	}

	return {
		presentations: presentations
			.filter((presentation) => presentation.room === selectedRoom.room)
			.sort((a, b) => (new Date(a.startTime) > new Date(b.startTime) ? 1 : -1))
			.map((presentation) => ({
				...presentation,
				startTimeLocal: new Date(presentation.startTime).toLocaleTimeString('hu', {
					hour: 'numeric',
					minute: 'numeric'
				}),
				endTimeLocal: new Date(presentation.endTime).toLocaleTimeString('hu', {
					hour: 'numeric',
					minute: 'numeric'
				})
			}))
	};
};
