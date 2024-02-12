<script lang="ts">
	import clsx from 'clsx';

	let className = '';
	export { className as class };
</script>

<div class={clsx('card-body', className)}>
	<slot />
</div>

<style lang="scss">
	.card-body {
		@apply h-full w-full p-8;
		border-radius: var(--border-rounding);
		background: radial-gradient(
				50.13% 157.63% at 49.87% 50.22%,
				rgba(255, 255, 255, 0.1) 14.5%,
				rgba(0, 0, 0, 0.1) 100%
			)
			#101010;

		box-shadow:
			0 0 0 1px rgba(255, 255, 255, 0.2),
			0 2px 15px rgba(255, 255, 255, 0.2);
		z-index: 1;
		position: relative;
	}
</style>
