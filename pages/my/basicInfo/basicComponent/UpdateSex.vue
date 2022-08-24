<script setup>
	const { popupApi } = defineProps({
		currentSex: {
			type: String,
			default: ''
		},
		statusTypes: {
			type: Array,
			default: []
		},
		popupApi: {
			type: Object,
			default: null
		}
	})
	
	const { getCurrentItem, closePopup, resultPopup} = popupApi

</script>

<template>

	<div class="popup-wrapper">
		<radio-group class="uni-list">
			<view v-for="(item, index) in statusTypes" :key="index" class="uni-list-item" @click="getCurrentItem(item)">
				<view class="uni-list-item__container">

					<label :for="item.value" class="ulable">
						<view class="uni-list-item__content">
							<text class="uni-list-item__content-title">{{ item.text }}</text>
						</view>
					</label>
					<view class="uni-list-item__extra">
						<radio :id="item.value" :checked="item.value == currentSex" />
					</view>
				</view>
			</view>
		</radio-group>

		<view class="btn-wrapper">
			<button class="button popup-info" @click="closePopup"><text class="button-text">取消</text></button>
			<button class="button" type="primary" @click="resultPopup"><text class="button-text">完成</text></button>
		</view>
	</div>

</template>

<style lang="scss" scoped>
	.popup-wrapper {
		width: 100%;
		height: 200px;
		background: #fff;

		.ulable {
			display: block;
			width: 100%;
			height: 100%;
			padding: 30rpx;
			box-sizing: border-box;
		}

		.uni-list-item {
			border-bottom-style: solid;
			border-bottom-width: 1px;
			border-bottom-color: #eee;
			font-size: 14px;
		}

		.uni-list-item__container {
			/* #ifndef APP-NVUE */
			display: flex;
			width: 100%;
			box-sizing: border-box;
			/* #endif */
			flex: 1;
			position: relative;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}

		.uni-list-item__content-title {
			font-size: 14px;
			color: #666;
		}

		.btn-wrapper {
			width: 100%;
			display: flex;
			margin-top: 60rpx;
			justify-content: center;
			align-items: center;

			.button {
				flex: 1;
				margin: 0 80rpx;
			}
		}
	}
</style>
