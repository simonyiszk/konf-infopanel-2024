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
	@property --rotation {
		syntax: '<angle>';
		inherits: false;
		initial-value: 150deg;
	}

	@keyframes -global-sbin {
		0% {
			--rotation: 0deg;
		}
		10% {
			--rotation: 10deg;
		}
		20% {
			--rotation: 60deg;
		}
		30% {
			--rotation: 120deg;
		}
		40% {
			--rotation: 170deg;
		}
		50% {
			--rotation: 180deg;
		}
		60% {
			--rotation: 190deg;
		}
		70% {
			--rotation: 240deg;
		}
		80% {
			--rotation: 300deg;
		}
		90% {
			--rotation: 350deg;
		}
		100% {
			--rotation: 360deg;
		}
	}

	.tilebase {
		--rotation: 150deg;
		--border-rounding: 30px;

		@apply overflow-hidden relative p-[2px];

		&::before {
			@apply absolute inset-0;
			content: '';
			border-radius: var(--border-rounding);
			background: rgb(255, 255, 255);
			background: linear-gradient(
				calc(var(--rotation)),
				rgba(128, 128, 128, 1) 0%,
				rgba(0, 212, 255, 0) 20%
			);
			background-origin: border-box;
			background-clip: padding-box, border-box;
			animation: sbin 30s 0ms infinite linear;
		}
	}
</style>
