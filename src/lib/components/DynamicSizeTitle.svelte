<script lang="ts">
	export let text: string;
	export let options = {
		baseSize: 40,
		baseLength: 60,
		overLimitMultiplier: 10,
		baseSizeMultiplier: 10
	};

	const getFontSize = (textLength: number) => {
		const baseSize = options.baseSize;
		const baseLength = options.baseLength;
		if (textLength > baseLength) {
			return `${baseSize * (baseLength / textLength / options.overLimitMultiplier)}vw`;
		}
		return `${baseSize / options.baseSizeMultiplier}vw`;
	};
</script>

<slot size={getFontSize(text.length)} />
