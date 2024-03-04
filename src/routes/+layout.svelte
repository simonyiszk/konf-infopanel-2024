<script>
	import Background from '$lib/components/Background.svelte';
	import Credits from '$lib/components/Credits.svelte';
	import '../app.scss';
	import { version } from '$app/environment';
</script>

<div class="h-[100svh] w-[100svw]">
	<Background
		color={'black'}
		image={'https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6438c3059d443cd7a78762eb_stars-bg.png'}
	>
		<div class="p-4 size-full">
			<slot />
		</div>
	</Background>
	<Credits>
		<div class="w-32 flex flex-row gap-4 justify-end opacity-70">
			<!-- svelte-ignore missing-declaration -->
			<p class="text-xl font-medium"><span class="text-base">v</span>{version}</p>
			<img class="size-full" src="/schdesign_white.svg" alt="schdesign logo" />
		</div>
	</Credits>
</div>

<style lang="postcss">
	:global(body) {
		@apply font-raleway text-white;
	}
</style>
