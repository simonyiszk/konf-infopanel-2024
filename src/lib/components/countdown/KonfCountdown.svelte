<script lang="ts">
	import type { DurationObjectUnits } from 'luxon';
	import KonfCountdownElement from './KonfCountdownElement.svelte';

	export let remaining: DurationObjectUnits & { done: boolean } = {
		years: 0,
		months: 0,
		weeks: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		done: true
	};
</script>

<div class="grid grid-cols-4 gap-4">
	<KonfCountdownElement value={remaining?.days} label="nap" />
	<KonfCountdownElement value={remaining?.hours} label="óra" />
	<KonfCountdownElement value={remaining?.minutes} label="perc" />
	<KonfCountdownElement value={remaining?.seconds} label="mp" />
</div>
