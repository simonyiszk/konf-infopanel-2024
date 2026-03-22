<script>
	import Background from '$lib/components/Background.svelte';
	import Credits from '$lib/components/Credits.svelte';
	import '../app.scss';
	import { version } from '$app/environment';
</script>

<div class="h-[100svh] w-[100svw]">
	<Background color={'black'} image={'/bg.png'}>
		<div class="p-4 size-full max-w-screen-3xl mx-auto">
			<slot />
		</div>
	</Background>
	<Credits>
		<div class="h-14 flex flex-row gap-8 items-center justify-end">
			<img class="size-full" src="/schdesign_white.svg" alt="schdesign logo" />
			<p class="text-xl font-small">{version}</p>
		</div>
	</Credits>
</div>

<style lang="postcss">
	:global(body) {
		@apply font-raleway text-white;
	}
</style>
