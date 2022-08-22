<script setup>
	import {
		computed
	} from 'vue'
	const {
		boder
	} = defineProps({
		hotList: {
			type: Array,
			default: []
		},
		boder: {
			type: Number,
			default: 2
		}
	})

	const borderStyle = computed(() => {
		return {
			borderBottom: `${boder}rpx solid #ccc`
		}
	})
</script>

<template>
	<uni-grid class="icon-wrapper" :column="4" :highlight="true" :showBorder="false">
		<uni-grid-item class="u-g-item" :style="borderStyle" v-for="(item, index) in hotList" :index="index"
			:key="index">
			<view class="grid-item-box">
				<image :src="item.url" class="image" mode="aspectFill" />
				<text class="name">{{ item.name }}</text>
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

	.name {
		font-size: 30rpx;
		margin-top: 10rpx;
	}

	.text {
		font-size: 24rpx;
		font-weight: bold;
	}

	.grid-item-box {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
		/*#ifdef MP*/
		padding: 0;
		/*#endif*/
		box-sizing: border-box;

	}

	.grid-item-box-row {
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
		/*#ifdef MP*/
		padding: 0;
		/*#endif*/
		background: #fff;
		box-sizing: border-box;
	}

	.u-g-item {
		height: auto !important;
		background: #fff;
	}
</style>
