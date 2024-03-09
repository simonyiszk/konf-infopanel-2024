<script lang="ts">
	import PlaybackBar from '$lib/components/playback/PlaybackBar.svelte';
	import type { Presentation } from '$lib/types/api';
	import { onMount } from 'svelte';

	import { MoveRight } from 'lucide-svelte';
	import clsx from 'clsx';

	export let presentation: Presentation;
	export let nextPresentation: Presentation | null = null;
	const { title, room, startTime, endTime } = presentation;

	let time = new Date();

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	$: progress = (time.getTime() - startTime.getTime()) / (endTime.getTime() - startTime.getTime());
</script>

<div class="col-span-1 flex flex-col justify-between order-1 xl:order-2">
	<div class="flex flex-col gap-4">
		<h1
			class={clsx(
				'text-white font-bold hyphens-auto',
				title.length > 55 ? 'text-xl lg:text-6xl' : 'text-2xl lg:text-8xl'
			)}
		>
			{title}
		</h1>
		<p class="xl:text-5xl text-3xl text-white font-medium">{room}</p>
		<PlaybackBar
			startTime={startTime.toLocaleTimeString('hu', {
				hour: '2-digit',
				minute: '2-digit'
			})}
			endTime={endTime.toLocaleTimeString('hu', {
				hour: '2-digit',
				minute: '2-digit'
			})}
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
