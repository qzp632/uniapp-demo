<script setup>

	defineProps({
		iconList: {
			type: Array,
			default: []
		}
	})
	
	const go = (item) => {
		console.log(item);
	}
	
</script>

<template>
	<uni-grid class="icon-wrapper" :column="4" :highlight="true" :showBorder="false">
		<uni-grid-item v-for="(item, index) in iconList" @click="go(item)" :index="index" :key="index">
			<view class="grid-item-box">
				<image :src="item.url" class="image" mode="aspectFill" />
				<text class="text">{{ item.text }}</text>
			</view>
		</uni-grid-item>
	</uni-grid>
</template>

<style lang="scss" scoped>
	.icon-wrapper {
		background: #fff;
	}
	.image {
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
	}

	.text {
		font-size: 14px;
		margin-top: 5px;
	}

	.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
		background: #fff;
		box-sizing: border-box;
	}

	.grid-item-box-row {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 15px 0;

	}
</style>
