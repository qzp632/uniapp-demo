<script setup>
	import { ref } from 'vue'
	import usePushOne from './usePushOne/use-pushOne.js'
	const {
		valiForm,
		baseFormData,
		multiIndex,
		multiArray,
		bindMultiPickerColumnChange,
		bindPickerChange,
		pickerChange,
		financeStageArray,
		setImg
	} = usePushOne()
		
</script>
<script>
	import {
		options
	} from '@/utils/index.js'
	export default {
		options
	}
</script>
<template>


	<div>testtest</div>
</template>

<style lang="scss" scoped>

	.bottom-line {
		display: flex;
		font-size: 14px;
		height: 35px;
		box-sizing: border-box;
		flex-direction: row;
		align-items: center;
		// border: 2rpx solid #DCDFE6;
		justify-content: space-between;
		// border-radius: 8rpx;
		border-bottom: 2rpx solid #DCDFE6;

		.text {
			margin-left: 20rpx;
		}

		.desc {
			color: #999;
			font-size: 24rpx;
		}

		.icon {
			margin-right: 20rpx;
		}
	}

	.bottom-line1 {
		height: 180rpx;
		border: none;
		border-bottom: 2rpx solid #DCDFE6;

		.icon {
			color: blue;
		}
	}

	.push-img {
		width: 160rpx;
		height: 160rpx;
		background: #999;
	}
</style>
