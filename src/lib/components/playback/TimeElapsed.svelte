<script lang="ts">
	export let value: string;
	export let time: 'start' | 'end';
</script>

<div class="elapsed" class:start={time === 'start'} class:end={time === 'end'}>
	{value}
</div>

<style lang="scss">
	.start {
		text-align: left;
	}

	.end {
		text-align: right;
	}
</style>
