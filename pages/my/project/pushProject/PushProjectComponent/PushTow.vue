<script setup>
	import { ref } from 'vue'
	import usePushTow from '@/pages/my/project/pushProject/PushProjectComponent/usePushKey/use-pushTow.js'
	import {
		formEl
	} from '@/utils/index.js'
	const {
		popup,
		valiForm,
		baseFormData,
		currentImg,
		getPopup,
		closePopup,
		setImg,
		rules,
		getImg,
		delImg,
		isLoading
	} = usePushTow()
	
	const getEl = async () => {
		return await formEl(valiForm.value)	
	}
	
	defineExpose({
	  getEl
	})
		
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


	<uni-forms class="push-wrapper-forms" :rules="rules" labelPosition="top" ref="valiForm" :modelValue="baseFormData">

			<uni-forms-item label="上传项目logo" required :labelWidth="140" name="imageValues">
				<div class="bottom-line bottom-line1">
					<image class="push-img" 
						v-for="(item, index) in baseFormData.imageValues"
						:key="index"
						:src="item"
						@click="getPopup(item, index, 'imageValues')"
					></image>
					<div v-if="baseFormData.imageValues.length < 1" class="upload-img" @click="setImg('imageValues', 1)">
						<div class="heng"></div>
						<div class="shu"></div>
					</div>
				</div>
			</uni-forms-item>

			<uni-forms-item label="上传营业执照" required :labelWidth="140" name="licenses">

				<div class="bottom-line bottom-line1">
					<image class="push-img" 
						v-for="(item, index) in baseFormData.licenses"
						:key="index"
						:src="item"
						@click="getPopup(item, index, 'licenses')"
					></image>
					<div v-if="baseFormData.licenses.length < 9" class="upload-img" @click="setImg('licenses')">
						<div class="heng"></div>
						<div class="shu"></div>
					</div>
				</div>
				
			</uni-forms-item>

			<uni-forms-item label="上传资质" required :labelWidth="140" name="certifications">

				<div class="bottom-line bottom-line1">
					<image class="push-img" 
						v-for="(item, index) in baseFormData.certifications"
						:key="index"
						:src="item"
						@click="getPopup(item, index, 'certifications')"
					></image>
					<div v-if="baseFormData.certifications.length < 9" class="upload-img" @click="setImg('certifications')">
						<div class="heng"></div>
						<div class="shu"></div>
					</div>
				</div>
			</uni-forms-item>

	</uni-forms>
	
	<uni-popup ref="popup" background-color="#fff">
		<div @click="getImg(currentImg, true)">预览</div>
		<!-- <div>重新上传</div> -->
		<div @click="delImg">删除</div>
		<!-- <div>取消</div> -->
		<!-- <UpdateSex :statusTypes="statusTypes" :currentSex="currentSex" :popupApi="popupApi"></UpdateSex> -->
	</uni-popup>
</template>

<style lang="scss" scoped>

	.bottom-line {
		display: flex;
		font-size: 14px;
		// height: 35px;
		box-sizing: border-box;
		flex-direction: row;
		align-items: center;
		justify-content: left;
		border-bottom: 2rpx solid #DCDFE6;
		flex-wrap: wrap;

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
		// height: 180rpx;
		border: none;
		border-bottom: 2rpx solid #DCDFE6;

		.icon {
			color: blue;
		}
	}

	.push-img, .upload-img {
		width: 190rpx;
		height: 190rpx;
		margin: 20rpx 10rpx ;
		background: #999;
	}
	.upload-img {
		background: #ccc;
		position: relative;
		.heng {
			position: absolute;
			width: 100%;
			height: 20rpx;
			background: #DCDFE6;
			top: 50%;
			transform: translate(0, -50%);
		}
		.shu {
			position: absolute;
			width: 20rpx;
			height: 100%;
			background: #DCDFE6;
			left: 50%;
			transform: translate(-50%, 0);
		}
	}
</style>
