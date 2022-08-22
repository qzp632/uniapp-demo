<script setup>
	import useMyContent from './useMy/use-myContent.js'
	import MyItem from './MyItem.vue'
	import MyList from './MyList.vue'

	const {
		im1Style,
		imgUrl
	} = defineProps({
		im1Style: {
			type: Object,
			default: {}
		},
		imgUrl: {
			type: String,
			default: ''
		}
	})

	const {
		iconList
	} = useMyContent()
</script>

<template>
	<div class="my-wrapper">
		<div class="im1" :style="im1Style">
			<image class="ig im1-ims" :src="imgUrl" mode=""></image>
			<span class="text1">您好， zhiq</span>
			<span class="text2">实名认证</span>
		</div>

		<div class="my-wrapper-c1">
			<MyItem>
				<span>88888</span>
				<span>余额</span>
			</MyItem>
			<MyItem>
				<span>0</span>
				<span>优惠劵</span>
			</MyItem>
			<MyItem>
				<span>20</span>
				<span>积分</span>
			</MyItem>
		</div>

		<div class="my-wrapper-c2">
			<MyItem :height="150" v-for="(item, index) in iconList" :key="index" height="150">
				<uni-icons class="icon" :type="item.icon" :size="25" color="orangered" />
				<text class="text">{{ item.text }}</text>
			</MyItem>
		</div>

		<div class="my-wrapper-c3">
			<MyList></MyList>
		</div>
		
			<div>2222</div>
	</div>

</template>

<style lang="scss">
	.my-wrapper {
		width: 100%;
		position: absolute;
		background: #ccc;
		top: 88px;
		/*#ifdef H5*/
		top: 44px;
		/*#endif*/
		bottom: 102rpx;
		overflow: auto;

		.im1 {
			width: 100%;
			position: relative;
			overflow: hidden;
			height: 400rpx;

			&-ims {
				width: 100%;
				position: absolute;
				bottom: 0;
				height: 300rpx;
			}

			.text1 {
				position: absolute;
				top: 20rpx;
				left: 20rpx;
				font-size: 38rpx;
				color: #000;
			}

			.text2 {
				position: absolute;
				bottom: 20rpx;
				right: 20rpx;
				font-size: 30rpx;
				color: #000;
				font-weight: 700;
			}
		}

		&-c1,
		&-c2,
		&-c3 {
			margin: 20rpx 20rpx 0;
			display: flex;
			background: #fff;
			border-radius: 12rpx;
		}

		&-c2 {

			.icon,
			.text {
				font-size: 26rpx;
			}
		}

		&-c3 {
			display: block;
		}
	}
</style>
