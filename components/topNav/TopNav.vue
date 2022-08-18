<script setup>
	defineProps({
		title: {
			type: String,
			default: 'text'
		}
	})
	
	const phoneName = uni.getSystemInfoSync().model
	const setPhoneHeight = () => {
		/*#ifdef H5*/
		return 88
		/*#endif*/
		return 170
	}

	const navBoxStyle = () => {
		
		/*#ifdef H5*/
		return {
			'alignItems': 'center',
			'paddingBottom': '0'
		}
		/*#endif*/
		
		if (phoneName === 'iPhone X') {
			return {
				'alignItems': 'flex-end',
				'paddingBottom': '22rpx'
			}
		} else {
			return {
				'alignItems': 'flex-end',
				'paddingBottom': '20rpx'
			}
		}
	}
</script>

<template>
	<uni-nav-bar class="nav-bar" :height="`${setPhoneHeight()}rpx`" fixed>
		<div class="nav-box" :style="navBoxStyle()">{{ title }}</div>
	</uni-nav-bar>

</template>

<style lang="scss" scoped>
	.nav-bar {
		.nav-box {
			width: 100%;
			display: flex;
			justify-content: center;
			box-sizing: border-box;
			font-size: 32rpx
		}
	}

</style>
