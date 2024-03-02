<script lang="ts">
	import Tile from './Tile.svelte';
	export let text = '';
	export let lower = '';
</script>

<Tile let:Body class="size-full">
	<Body class="flex flex-col justify-center items-center gap-2">
		<h2 class="text-8xl font-bold">{text}</h2>
		<p class="text-4xl text-center">{lower}</p>
	</Body>
</Tile>
