<script lang="ts">
	import type { Presenter } from '$lib/types/api';

	export let presenter: Presenter;
</script>

<div class="relative size-full rounded-3xl overflow-hidden">
	<img
		class="relative object-cover h-full w-full rounded-3xl overflow-hidden"
		src={presenter.pictureUrl}
		alt=""
	/>
	<div
		class="absolute bottom-0 left-0 bg-black/20 backdrop-blur-2xl w-full p-4 rounded-3xl overflow-hidden"
	>
		<h2 class="text-6xl text-center w-full font-bold">{presenter.name}</h2>
		<div class="text-4xl flex gap-2 flex-wrap justify-center">
			{#if presenter.rank}
				<span>{presenter.rank}</span>
			{/if}
			{#if presenter.rank && presenter.company}
				<span> @ </span>
			{/if}
			{#if presenter.company}
				<span>{presenter.company.name}</span>
			{/if}
		</div>
	</div>
</div>
