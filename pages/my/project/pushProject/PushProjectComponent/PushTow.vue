<script setup>
	import { ref } from 'vue'
	import usePushOne from './usePushOne/use-pushOne.js'
	const {
		valiForm,
		baseFormData,
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


	<uni-forms class="push-wrapper-forms" labelPosition="top" ref="valiForm" :modelValue="baseFormData">

			<uni-forms-item label="上传项目logo" required :labelWidth="140">
				<div class="bottom-line bottom-line1">
					<image class="push-img" :src="baseFormData.imageValue"></image>

					<span class="icon" @click="setImg('imageValue')">点击上传图片</span>
				</div>
			</uni-forms-item>

			<uni-forms-item label="上传营业执照" required :labelWidth="140">
				<div class="bottom-line bottom-line1">
					<image class="push-img" :src="baseFormData.license"></image>

					<span class="icon" @click="setImg('license')">点击上传图片</span>
				</div>
			</uni-forms-item>

			<uni-forms-item label="上传资质" required :labelWidth="140">
				<div class="bottom-line bottom-line1">
					<image class="push-img" :src="baseFormData.certification"></image>

					<span class="icon" @click="setImg('certification')">点击上传图片</span>
				</div>
			</uni-forms-item>

	</uni-forms>
</template>

<style lang="scss" scoped>

	.bottom-line {
		display: flex;
		font-size: 14px;
		height: 35px;
		box-sizing: border-box;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
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
