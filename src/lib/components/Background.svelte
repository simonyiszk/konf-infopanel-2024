<script lang="ts">
	export let color: string = 'black';
	export let image: string = '';
</script>

<div class="bg" style="--color:{color};background-image: url('{image}');">
	<slot />
</div>

<style lang="scss">
	.bg {
		@apply size-full;
		background-color: var(--color);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		z-index: -1;
	}
</style>
