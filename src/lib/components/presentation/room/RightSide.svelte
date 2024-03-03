<script lang="ts">
	import type { Presenter } from '$lib/types/api';

	export let presenter: Presenter;
</script>

<div class="relative size-full rounded-3xl overflow-hidden">
	<img
		class="relative object-cover h-full w-full overflow-hidden"
		src={presenter.pictureUrl}
		alt=""
	/>
	<div
		class="absolute bottom-0 left-0 bg-black/20 backdrop-blur-2xl w-full px-4 py-2 xl:p-4 rounded-b-3xl overflow-hidden"
	>
		<h2 class="text-2xl xl:text-6xl text-center w-full font-bold">{presenter.name}</h2>
		<div class="text-md xl:text-4xl flex gap-2 flex-wrap justify-center">
			<span class="text-center">
				{[presenter.rank, presenter.company?.name].filter((e) => !!e).join(' - ')}
			</span>
		</div>
	</div>
</div>
