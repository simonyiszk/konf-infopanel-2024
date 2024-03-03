<script lang="ts">
	import type { PageData } from './$types';
	import Tile from '$lib/components/tile/Tile.svelte';
	import { error } from '@sveltejs/kit';

	import PresentationRoom from '$lib/components/presentation/room';
	import Carousel from '$lib/components/carousel-diy';
	import { dev } from '$app/environment';

	export let data: PageData;
	const { presentations } = data;

	if (presentations.length === 0) {
		error(404, 'No presentations found');
	}

	const selected = presentations[0];
	const nextPresentation = presentations.at(presentations.indexOf(selected) + 1) ?? null;
	const { presenter } = selected;
	let tbPresentations = presentations;
</script>

<Tile let:Body class="size-full">
	<Body class="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-16">
		<PresentationRoom.LeftSide presentation={selected} {nextPresentation} />
		<PresentationRoom.RightSide {presenter} />
	</Body>
</Tile>

{#key tbPresentations}
	<Carousel.SiemaWrapper perPage={2} dots={dev} draggable={false} autoplay={5 * 1000}>
		{#each tbPresentations as p}
			<div class="p-2 text-base lg:text-2xl flex flex-col gap-2">
				<p class="bg-white/10 p-2 rounded-xl backdrop-blur-md">
					{p.startTimeLocal}-{p.endTimeLocal} | {p.room}
				</p>
				<p>{p.title}</p>
			</div>
		{/each}
	</Carousel.SiemaWrapper>
{/key}
