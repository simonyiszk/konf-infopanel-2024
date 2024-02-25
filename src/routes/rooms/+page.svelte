<script lang="ts">
	import type { Presentation } from '$lib/types/api';
	import type { PageData } from './$types';

	export let data: PageData;
	const { presentations } = data;
	const rooms = ['IB025', 'IB028'] as const;
</script>

<div class="flex flex-row gap-4 justify-around items-center size-full">
	{#each rooms as room}
		<a href="/rooms/{room.toLocaleLowerCase()}" class="hover:text-yellow-300">
			<h2 class="text-8xl font-bold">{room}</h2>
		</a>
	{/each}
</div>
