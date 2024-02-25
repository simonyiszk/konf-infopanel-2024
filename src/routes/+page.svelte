<script>
	const routes = [
		{ name: 'Main', path: '/main' },
		{ name: 'Schedule', path: '/schedule' },
		{ name: 'Rooms', path: '/rooms' }
	];
</script>

<main class="text-8xl">
	<ul>
		{#each routes as route}
			<li>
				<a href={route.path} class="hover:text-yellow-300">{route.name}</a>
			</li>
		{/each}
	</ul>
</main>
