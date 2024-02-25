<script lang="ts">
	import Bar from './Bar.svelte';
	import TimeElapsed from './TimeElapsed.svelte';

	export let startTime = '16:00';
	export let endTime = '17:00';
	export let progress = 0;

	export let type: 'base' | 'alternative' = 'base';
</script>

{#if type === 'base'}
	<div class="text-5xl">
		<div class="bar">
			<TimeElapsed value={startTime} time="start" />
			<Bar {progress} currentTime={'16:12'} />
			<TimeElapsed value={endTime} time="end" />
		</div>
	</div>
{/if}

{#if type === 'alternative'}
	<div>
		<div class="bar">
			<Bar {progress} currentTime={'16:12'} />
		</div>
		<div class="flex flex-row justify-between text-4xl">
			<TimeElapsed value={startTime} time="start" />
			<TimeElapsed value={endTime} time="end" />
		</div>
	</div>
{/if}

<style lang="scss">
	.bar {
		@apply flex flex-row gap-4 items-center;
	}
</style>
