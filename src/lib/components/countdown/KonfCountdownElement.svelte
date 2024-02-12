<script lang="ts">
	export let value: number | undefined;
	export let label: string;
</script>

<div class="flex flex-col gap-2">
	<p class="text-7xl font-bold text-center">{String(value).padStart(2, '0')}</p>
	<p class="text-3xl text-center">{label}</p>
</div>
