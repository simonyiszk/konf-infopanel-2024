<script lang="ts">
	import Tile from './Tile.svelte';
	export let src = '';
	export let lower = '';
</script>

<Tile let:Body class="size-full">
	<Body class="flex flex-col justify-center items-center gap-2">
		<img class="h-48 max-w-[75%]" {src} alt="tile" />
		<p class="text-4xl text-center">{lower}</p>
	</Body>
</Tile>
