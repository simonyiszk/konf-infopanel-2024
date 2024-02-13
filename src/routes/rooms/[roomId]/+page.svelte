<script lang="ts">
	import type { PageData } from './$types';
	import Tile from '$lib/components/tile/Tile.svelte';
	import { error } from '@sveltejs/kit';

	export let data: PageData;
	const { presentations } = data;

	console.log(presentations);

	if (presentations.length === 0) {
		error(404, 'No presentations found');
	}

	const selected = presentations[1];

	const { title, room, presenter } = selected;
</script>

<Tile let:Body class="size-full">
	<Body class="size-full">
		<div class="grid grid-cols-3 gap-8">
			<div class="col-span-2">
				<h1 class="text-7xl text-white font-bold">{title}</h1>
				<p class="text-4xl text-white font-medium">{room}</p>
				<p class="text-3xl">{selected.description}</p>
			</div>
			<div class="col-span-1 flex flex-col items-center gap-4">
				<img class="relative object-cover rounded-3xl" src={selected.presenter.pictureUrl} alt="" />
				<span class="text-4xl font-bold">{presenter.name}</span>
				<div class="text-2xl">
					{#if presenter.rank}
						<span>{presenter.rank}</span>
					{/if}
					{#if presenter.rank && presenter.company}
						<span> @ </span>
					{/if}
					{#if presenter.company}
						<span>{presenter.company.name}</span>
					{/if}
				</div>
			</div>
		</div>
		<div class="bg-red-400">timeprogess here</div>
	</Body>
</Tile>
