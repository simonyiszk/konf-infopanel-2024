<script lang="ts">
	import PlaybackBar from '$lib/components/playback/PlaybackBar.svelte';
	import type { Presentation } from '$lib/types/api';
	import { onMount } from 'svelte';

	import { MoveRight } from 'lucide-svelte';
	import DynamicSizeTitle from '$lib/components/DynamicSizeTitle.svelte';

	export let presentation: Presentation & { startTimeLocal: string; endTimeLocal: string };
	export let nextPresentation: Presentation | null;
	const { title, room, startTime, endTime, language, startTimeLocal, endTimeLocal } = presentation;

	let time = new Date();

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	$: progress =
		(time.getTime() - new Date(startTime).getTime()) /
		(new Date(endTime).getTime() - new Date(startTime).getTime());
</script>

<div class="col-span-1 flex flex-col justify-between order-1 xl:order-2">
	<div class="flex flex-col gap-4">
		<DynamicSizeTitle text={title} let:size>
			<h1 style="font-size: {size};" class="text-white font-bold">{title}</h1>
		</DynamicSizeTitle>
		<p class="xl:text-5xl text-3xl text-white font-medium">{room}</p>
		<PlaybackBar
			startTime={startTimeLocal}
			endTime={endTimeLocal}
			progress={progress * 100}
			type="alternative"
		/>
	</div>
	{#if nextPresentation}
		<div class="xl:text-3xl flex flex-wrap gap-4 items-center">
			<MoveRight size={36} />
			<span>Következik:</span>
			<span>{nextPresentation.title}</span>
		</div>
	{/if}
</div>
