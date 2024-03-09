<script lang="ts">
	import type { PageData } from './$types';
	import Tile from '$lib/components/tile/Tile.svelte';
	import { error } from '@sveltejs/kit';

	import PresentationRoom from '$lib/components/presentation/room';
	import Carousel from '$lib/components/carousel-diy';
	import { onMount } from 'svelte';
	import type { Presentation } from '$lib/types/api';

	export let data: PageData;
	const { presentations } = data;

	if (presentations.length === 0) {
		error(404, 'No presentations found');
	}

	let selected: Presentation | null = null;
	let nextPresentation: Presentation | null = null;
	let tbPresentations: Presentation[] = [];

	onMount(() => {
		const interval = setInterval(() => {
			const s = presentations.find(
				(p) => p.startTime.getTime() <= Date.now() && p.endTime.getTime() > Date.now()
			);

			if (s && s !== selected) {
				selected = s;
				if (selected) {
					nextPresentation = presentations.at(presentations.indexOf(selected) + 1) ?? null;
				}
			}

			if (selected && selected.endTime.getTime() < Date.now()) {
				selected = null;
				nextPresentation = null;
			}

			const pre = presentations.filter((p) => p.startTime.getTime() > Date.now());

			if (pre.length != tbPresentations.length) {
				tbPresentations = pre;
			}
		}, 1 * 1000);

		return () => clearInterval(interval);
	});
</script>

<Tile let:Body class="size-full">
	<Body class="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-16">
		{#if selected && selected.presenter}
			{#key selected}
				<PresentationRoom.LeftSide presentation={selected} {nextPresentation} />
				<PresentationRoom.RightSide presenter={selected.presenter} />
			{/key}
		{:else}
			<p>boo</p>
		{/if}
	</Body>
</Tile>

{#if tbPresentations && tbPresentations.length > 1}
	{#key tbPresentations.length}
		<Carousel.SiemaWrapper perPage={2} dots={false} draggable={false} autoplay={5 * 1000}>
			{#each tbPresentations as p}
				<div class="p-2 text-base lg:text-2xl flex flex-col gap-2">
					<p class="bg-white/10 p-2 rounded-xl backdrop-blur-md">
						{[p.startTime, p.endTime]
							.map((d) =>
								d.toLocaleTimeString('hu', {
									hour: '2-digit',
									minute: '2-digit'
								})
							)
							.join('-')} | {p.room}
					</p>
					<p>{p.title}</p>
				</div>
			{/each}
		</Carousel.SiemaWrapper>
	{/key}
{/if}
