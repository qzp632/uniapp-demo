<script setup>
	defineProps({
		height: {
			default: 130
		}
	})
</script>
<script>
	import { options } from './options.js'

	export default { options }
</script>
<template>
	<div class="my-wrapper-c2-item" :style="{'height':`${height}rpx`}">
		<slot></slot>
	</div>
</template>

<style lang="scss">
	.my-wrapper-c2-item {
		flex: 1;
		// height: 130rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
