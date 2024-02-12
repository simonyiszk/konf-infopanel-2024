<script lang="ts">
	import type { PageData } from './$types';
	import Tile from '$lib/components/tile/Tile.svelte';

	export let data: PageData;
	const { presentations } = data;
</script>

<Tile let:Body>
	<Body>
		<h1 class="text-6xl text-white font-bold">{presentations[0].title}</h1>
		<p class="text-4xl text-white font-medium">{presentations[0].room}</p>
	</Body>
</Tile>
