<script lang="ts">
	export let currentTime: string;
	export let progress: number;
</script>

<div
	style="--progress-bar-transform:{progress}%;"
	class="bg-white w-full h-4 rounded-2xl overflow-hidden"
>
	<div class="progress"></div>
</div>

<style lang="scss">
	.progress {
		transform: translateX(calc(-100% + var(--progress-bar-transform)));
		@apply bg-yellow-300 h-full w-full;
	}
</style>
