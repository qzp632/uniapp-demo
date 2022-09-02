<script setup>
	import {
		redirectTo
	} from '@/utils/index.js'

	defineProps({
		title: {
			type: String,
			default: undefined
		},
		home: {
			type: Boolean,
			default: false
		},
		back: {
			type: Boolean,
			default: false
		},
		close: {
			type: Boolean,
			default: false
		},
	})
	
	const emit = defineEmits(['onClose'])


	const phoneName = uni.getSystemInfoSync().model
	const setPhoneHeight = () => {
		/*#ifdef H5*/
		return 44
		/*#endif*/
		return 88
	}

	const navBoxStyle = () => {
		/*#ifdef H5*/
		return {
			'alignItems': 'center',
			'paddingBottom': '0'
		}
		/*#endif*/
		return {
			'alignItems': 'flex-end'
		}
	}

	const goHome = () => {
		redirectTo('/pages/home/home')
	}

	const goBack = () => {
		uni.navigateBack({
			delta: 1
		});
	}
	
	const onCloseed = () => {
		emit('onClose')
		// console.log(emit);
	}
</script>

<template>
	<uni-nav-bar class="nav-bar" :border="false" shadow :height="`${setPhoneHeight()}px`" fixed>
		<div class="nav-box" :style="navBoxStyle()">

			<span v-if="title" class="t1">{{ title }}</span>
			<slot v-else></slot>

			<uni-icons v-if="home" class="home" type="home-filled" :size="25" @click="goHome" />

			<uni-icons v-if="back" class="home" type="back" :size="25" @click="goBack" />
			
			<uni-icons v-if="close" class="home" type="back" :size="25" @click="onCloseed" />
			
		</div>
	</uni-nav-bar>

</template>

<style lang="scss" scoped>
	.nav-bar {
		position: relative;

		.nav-box {
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			display: flex;
			justify-content: center;
			box-sizing: border-box;
			font-size: 32rpx;

			.home {
				position: absolute;
				left: 10rpx;
				bottom: 22rpx;
				/*#ifdef H5*/
				// bottom: 0;
				/*#endif*/
			}

			.t1 {
				margin-bottom: 22rpx;
				/*#ifdef H5*/
				margin-bottom: 0;
				/*#endif*/
			}
		}
	}
</style>
