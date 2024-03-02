<script lang="ts">
	import { dev } from '$app/environment';
	import type { PageData } from './$types';

	export let data: PageData;
	const { presentations } = data;

	import Carousel from '$lib/components/carousel-diy';
	import CatchyMinimal from '$lib/components/tile/CatchyMinimal.svelte';

	const catchyInfo = [
		{ text: '21', lower: 'előadás' },
		{ text: '21', lower: 'kiállító az expón' },
		{ text: '21', lower: 'év tapasztalat' }
	];
</script>

<div class="size-full flex flex-col justify-center items-center">
	<Carousel.SiemaWrapper
		autoplay={15 * 1000}
		perPage={1}
		dots={dev}
		draggable={dev}
		controls={false}
	>
		<div class="flex flex-col justify-center items-center gap-4">
			<img src="/konf_logo.svg" alt="Konf logo" />
			<span class="text-6xl text-center font-bold"
				>Magyarország legnagyobb egyetemi hallgatók által szervezett éves technológiai
				konferenciája.</span
			>
			<span class="text-5xl">konferencia.simonyi.bme.hu</span>
		</div>
		<div class="flex flex-col justify-center items-center size-full">
			<div
				class="grid gap-8 size-full justify-center items-center grid-cols-1 lg:grid-cols-3 grid-rows-3"
			>
				{#each catchyInfo as e}
					<CatchyMinimal text={e.text} lower={e.lower} />
				{/each}
				{#each catchyInfo as e}
					<CatchyMinimal text={e.text} lower={e.lower} />
				{/each}
				{#each catchyInfo as e}
					<CatchyMinimal text={e.text} lower={e.lower} />
				{/each}
			</div>
		</div>
	</Carousel.SiemaWrapper>
</div>

<style lang="postcss">
</style>
