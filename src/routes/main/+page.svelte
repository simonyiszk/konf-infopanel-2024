<script lang="ts">
	import { dev } from '$app/environment';
	import type { PageData } from './$types';

	export let data: PageData;
	const { giveaway } = data;

	import Carousel from '$lib/components/carousel-diy';
	import CatchyMinimal from '$lib/components/tile/CatchyMinimal.svelte';
	import MobileApp from '$lib/components/tile/MobileApp.svelte';
	import Tile from '$lib/components/tile/Tile.svelte';

	const catchyInfo = [
		{ src: '/nyeremeny/lenovo_ideatab.webp', lower: 'Lenovo Idea Tab tablet' },
		{ src: '/nyeremeny/muvolgy.svg', lower: 'Páros napijegy a 2026-os Művészetek Völgyére' },
		{ src: '/nyeremeny/lg_27g411a-b.webp', lower: 'LG UltraGear 27" 144Hz monitor' },
		{ src: '/nyeremeny/jbl_tunebuds2.webp', lower: 'JBL Tune Buds 2 vezeték nélküli fülhallgató' }
	];
</script>

<svelte:head>
	<title>Main | InfoPanel</title>
</svelte:head>

<div class="size-full flex flex-col justify-center items-center">
	<Carousel.SiemaWrapper
		autoplay={dev ? 0 : 15 * 1000}
		perPage={1}
		dots={dev}
		draggable={dev}
		controls={false}
	>
		<div class="flex flex-col justify-center items-center gap-4">
			<img src="/konf_logo.svg" alt="Konf logo" class="size-full w-[60%] object-contain" />
			<span class="text-3xl lg:text-6xl text-center font-bold"
				>Magyarország legnagyobb egyetemi hallgatók által szervezett éves technológiai
				konferenciája.</span
			>
			<span class="text-2xl lg:text-5xl">konferencia.simonyi.bme.hu</span>
		</div>
		<div class="flex flex-col justify-center items-center size-full mx-auto max-w-screen-2xl">
			<div
				class="grid gap-8 size-full justify-center items-center grid-cols-1 lg:grid-cols-3 grid-rows-2"
			>
				<Tile let:Body class="col-span-2 row-span-1 h-full">
					<Body class="grid grid-cols-2">
						<div class="col-span-2">
							<h2 class="text-6xl font-bold mb-4">{giveaway.sectionTitle}</h2>
							<div class="flex flex-col gap-2">
								{#each giveaway.description.split('***') as section, i}
									<p class="text-4xl" class:font-bold={i == 1} class:text-yellow-300={i == 1}>
										{section}<br />
									</p>
								{/each}
							</div>
						</div>
					</Body>
				</Tile>
				{#each catchyInfo as e}
					<CatchyMinimal src={e.src} lower={e.lower} />
				{/each}
			</div>
		</div>
		<div class="mx-auto max-w-screen-2xl flex flex-col justify-center items-center h-full">
			<MobileApp />
		</div>
	</Carousel.SiemaWrapper>
</div>

<style lang="postcss">
	.voucher {
		@apply absolute top-0 left-0;
		animation: rotateAnimation 3s cubic-bezier(0.25, 0.5, 0.75, 0.5) infinite alternate-reverse;
	}
	@keyframes rotateAnimation {
		from {
			transform: rotate(0deg);
			padding-top: 0px;
		}
		to {
			transform: rotate(var(--final-rotation));
			padding-top: var(--max-shift, 0px);
		}
	}
</style>
