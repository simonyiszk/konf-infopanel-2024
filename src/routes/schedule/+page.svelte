<script lang="ts">
	import type { PageData } from './$types';

	import Carousel from '$lib/components/carousel-diy';
	import { dev } from '$app/environment';

	export let data: PageData;
	const { presentations } = data;

	const bosch = presentations.find((p) => p.presenter.company?.name === 'Bosch');

	let ib025 = presentations.filter((p) => p.room === 'IB025');
	let ib028 = presentations.filter((p) => p.room === 'IB028');

	if (bosch) {
		ib028.unshift(bosch);
	}

	const c = ib028.map((p, i) => [p, ib025[i]]);
</script>

<div class="flex flex-col justify-center items-center h-full">
	<div class="grid grid-cols-12 w-full">
		<div class="col-span-11">
			<Carousel.SiemaWrapper autoplay={3 * 1000} perPage={2} dots={false} draggable={dev}>
				{#each c as pre}
					<div class="flex flex-col gap-8">
						{#each pre as p}
							<div class="row-span-1 grid grid-cols-3 gap-4 p-2">
								<div>
									<img
										class="size-full object-cover rounded-2xl"
										src={p.presenter.pictureUrl}
										alt={p.presenter.name}
									/>
								</div>
								<div class="col-span-2">
									<h1
										class:text-3xl={p.title.length > 70}
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
						<div class="p-2">
							<div class="p-8 flex flex-row justify-between h-fit bg-white/10 rounded-xl">
								{#each [pre[1].startTime, pre[1].endTime] as t}
									<p class="text-5xl font-bold">
										{t.toLocaleTimeString('hu', {
											hour: '2-digit',
											minute: '2-digit'
										})}
									</p>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</Carousel.SiemaWrapper>
		</div>
		<div
			class="grid grid-cols-5 font-bold col-span-1 w-full justify-between gap-8"
			style="writing-mode: vertical-rl;"
		>
			{#each ['IB028', 'IB025'] as room}
				<p
					class="rounded-xl bg-white/10 col-span-2 text-6xl text-center flex justify-center items-center"
				>
					{room}
				</p>
			{/each}
		</div>
	</div>
</div>
