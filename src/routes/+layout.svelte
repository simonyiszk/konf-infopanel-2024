<script>
	import Background from '$lib/components/Background.svelte';
	import '../app.scss';
</script>

<div class="h-screen w-screen">
	<Background
		color={'black'}
		image={'https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6438c3059d443cd7a78762eb_stars-bg.png'}
	>
		<slot />
	</Background>
</div>

<style lang="postcss">
	:global(body) {
		@apply font-raleway text-white;
	}
</style>
