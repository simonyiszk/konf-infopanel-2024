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
		{ text: '21', lower: 'előadás' },
		{ text: '21', lower: 'kiállító az expón' },
		{ text: '21', lower: 'év tapasztalat' }
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
		<div class="flex flex-col justify-center items-center gap-4 mx-auto max-w-screen-2xl">
			<img src="/konf_logo.svg" alt="Konf logo" class="size-full object-contain" />
			<span class="text-3xl lg:text-6xl text-center font-bold"
				>Magyarország legnagyobb egyetemi hallgatók által szervezett éves technológiai
				konferenciája.</span
			>
			<img src="/qr-konf.png" alt="QR code" class="size-[15%] invert mt-8" />
			<span class="text-2xl lg:text-3xl text-neutral-300" style="font-variant: small-caps;">konferencia.simonyi.bme.hu</span>
		</div>
		<div class="flex flex-col justify-center items-center size-full mx-auto max-w-screen-2xl">
			<div
				class="grid gap-8 size-full justify-center items-center grid-cols-1 lg:grid-cols-3 grid-rows-3"
			>
				{#each catchyInfo as e}
					<CatchyMinimal text={e.text} lower={e.lower} />
				{/each}
				<Tile let:Body class="col-span-2 row-span-2 h-full">
					<Body class="grid grid-cols-2">
						<div>
							<h2 class="text-6xl font-bold mb-4">{giveaway.sectionTitle}</h2>
							<div class="flex flex-col gap-2">
								{#each giveaway.description.split('***') as section, i}
									<p class="text-4xl" class:font-bold={i == 1} class:text-yellow-300={i == 1}>
										{section}
									</p>
								{/each}
							</div>
						</div>
						<div>
							<img src={giveaway.pictureUrl} alt="Nintendo" />
						</div>
					</Body>
				</Tile>
				<Tile let:Body class="h-full row-span-2">
					<Body class="flex flex-col justify-between gap-16">
						<div class="size-full relative">
							{#each Array.from(Array(3).keys()) as e, i}
								<div
									class="voucher"
									style="--max-shift: {i * -20}px; --final-rotation: -{(2 - i) * 5}deg;"
								>
									<img src="/mediamarkt_utalvany.png" alt="Nintendo" />
								</div>
							{/each}
						</div>
						<p class="text-center text-3xl font-bold">3 x 15 000 Ft értékű MediaMarkt utalvány</p>
					</Body>
				</Tile>
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
