<script lang="ts">
	import type { PageData } from './$types';
	import Tile from '$lib/components/tile/Tile.svelte';
	import { error } from '@sveltejs/kit';

	import PresentationRoom from '$lib/components/presentation/room';

	export let data: PageData;
	const { presentations } = data;

	if (presentations.length === 0) {
		error(404, 'No presentations found');
	}

	const selected = presentations[0];
	const nextPresentation = presentations.at(presentations.indexOf(selected) + 1) ?? null;
	const { presenter } = selected;
</script>

<Tile let:Body class="size-full">
	<Body class="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-16">
		<PresentationRoom.LeftSide presentation={selected} {nextPresentation} />
		<PresentationRoom.RightSide {presenter} />
	</Body>
</Tile>
