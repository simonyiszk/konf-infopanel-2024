<script>
	import Background from '$lib/components/Background.svelte';
	import Credits from '$lib/components/Credits.svelte';
	import '../app.scss';
</script>

<div class="h-[100svh] w-[100svw]">
	<Background
		color={'black'}
		image={'https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6438c3059d443cd7a78762eb_stars-bg.png'}
	>
		<div class="p-16">
			<slot />
		</div>
	</Background>
	<Credits>
		<div class="w-32">
			<img class="size-full" src="/schdesign_white.svg" alt="schdesign logo" />
		</div>
	</Credits>
</div>

<style lang="postcss">
	:global(body) {
		@apply font-raleway text-white;
	}
</style>
