<script lang="ts">
	import type { PageData } from './$types';

	import Carousel from '$lib/components/carousel-diy';
	import SiemaWrapper from '$lib/components/carousel-diy/SiemaWrapper.svelte';
	import { dev } from '$app/environment';

	export let data: PageData;
	const { presentations } = data;

	const bosch = presentations.find((p) => p.presenter.company?.name === 'Bosch');

	let ib025 = presentations.filter((p) => p.room === 'IB025');
	let ib028 = presentations.filter((p) => p.room === 'IB028');

	if (bosch) {
		ib028.unshift(bosch);
	}
</script>

<div class="flex flex-col gap-4 justify-around h-full">
	{#each [ib028, ib025] as pres}
		<Carousel.SiemaWrapper autoplay={5 * 1000} perPage={2} dots={false} draggable={dev}>
			{#each pres as p}
				<div class="grid grid-cols-3 gap-4">
					<div class="cols-span-1">
						<img
							class="size-full object-cover rounded-2xl"
							src={p.presenter.pictureUrl}
							alt={p.presenter.name}
						/>
					</div>
					<div class="col-span-2">
						<h1
							class:text-4xl={p.title.length > 45}
							class:text-5xl={p.title.length <= 45}
							class="font-medium"
						>
							{p.title}
						</h1>
						<p class="text-3xl">{p.presenter.name}</p>
						{#if p.presenter.company}
							<p class="text-2xl">{p.presenter.company.name}</p>
						{/if}
					</div>
				</div>
			{/each}
		</Carousel.SiemaWrapper>
	{/each}

	<Carousel.SiemaWrapper autoplay={5 * 1000} perPage={2} dots={false} draggable={dev}>
		{#each ib025 as p}
			<div class=" p-2 text-6xl font-bold">
				<div class="p-8 flex flex-row justify-around bg-white/10 rounded-xl">
					<p>
						{p.startTime.toLocaleTimeString('hu', {
							hour: '2-digit',
							minute: '2-digit'
						})}
					</p>
					<p>
						{p.endTime.toLocaleTimeString('hu', {
							hour: '2-digit',
							minute: '2-digit'
						})}
					</p>
				</div>
			</div>
		{/each}
	</Carousel.SiemaWrapper>
</div>
