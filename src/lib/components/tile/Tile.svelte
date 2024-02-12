<script lang="ts">
	import clsx from 'clsx';
	import Body from './Body.svelte';

	let className = '';
	export { className as class };

	const C = {
		Body
	};
</script>

<div class={clsx('tilebase', className)}>
	<slot {...C} />
</div>

<style lang="scss">
	.tilebase {
		--rotation: 150deg;
		--border-rounding: 30px;

		@apply overflow-hidden relative p-[1.5px];

		border-radius: var(--border-rounding);
		background: rgb(255, 255, 255);
		background: linear-gradient(
			calc(var(--rotation)),
			rgba(128, 128, 128, 1) 0%,
			rgba(0, 212, 255, 0) 20%
		);
		background-origin: border-box;
		background-clip: padding-box, border-box;
	}
</style>
