<script setup>
	defineProps({
		title: {
			type: String,
			default: undefined
		}
	})

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
</script>

<template>
	<uni-nav-bar class="nav-bar" :border="false" shadow :height="`${setPhoneHeight()}px`" fixed>
		<div class="nav-box" :style="navBoxStyle()">
			<span v-if="title" class="t1">{{ title }}</span>
			<slot v-else></slot>
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

			.t1 {
				margin-bottom: 22rpx;
				/*#ifdef H5*/
				margin-bottom: 0;
				/*#endif*/
			}
		}
	}
</style>
