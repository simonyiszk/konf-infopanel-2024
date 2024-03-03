<script>
	import Tile from './Tile.svelte';
	export let androidUrl = '';
	export let iosUrl = '';
</script>

<Tile let:Body>
	<Body>
		<div class="flex flex-row w-full justify-between items-center gap-8">
			<div class="h-full">
				<img src="app-screens.png" class="size-full object-fit" alt="App screens" />
			</div>
			<div>
				<div>
					<h2 class="text-7xl font-bold">KonferenciApp</h2>
					<p class="text-stone-200 text-5xl whitespace-pre-line w-full h-full items-center">
						Töltsd le a mobil appot, hogy élőben követhesd a konferencia eseményeit és kérdezhess az
						előadóktól!
					</p>
				</div>
				<div class="w-full flex flex-row justify-start lg:gap-10 gap-4 items-center mt-4">
					<a href={androidUrl} class="h-fit">
						<img class="h-[57px]" src="google-play-badge-hu.png" alt="Play Store" />
					</a>
					<a href={iosUrl}>
						<img class="h-[60px]" src="apple-store-hu-black.svg" alt="Apple Store" />
					</a>
				</div>
			</div>
		</div>
	</Body>
</Tile>
