<script>
	import Countdown from '$lib/components/countdown/Countdown.svelte';
	import KonfCountdown from '$lib/components/countdown/KonfCountdown.svelte';
	import Tile from '$lib/components/tile/Tile.svelte';
</script>

<Tile let:Body>
	<Body class="text-white">
		<Countdown from="2024-03-19T12:30:00" zone="Europe/Budapest" let:remaining>
			<KonfCountdown {remaining} />
		</Countdown>
	</Body>
</Tile>
