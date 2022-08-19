<script setup>
	import {
		effect
	} from 'vue'
	import TabBar from '@/components/tabBar/TabBar.vue'
	import TopNav from '@/components/topNav/TopNav.vue'

	import {
		axios
	} from '@/utils/axios.js'

	// const render = effect(async() => {
	// 	const result = await axios.post({
	// 		url: '/api/user/getsuerinfo', //仅为示例，并非真实接口地址。
	// 		data: {
	// 			"telephone": '13646121025' //手机号
	// 		}
	// 	})
	// })

	const loginOut = () => {
		try {
			uni.setStorageSync('token', '');
			uni.redirectTo({
				url: '/pages/login/login',
				animationDuration: 0
			})
		} catch (e) {
			console.warn(e.message);
		}
	}
</script>

<template>

	<TopNav>
		<div class="my-header">
			/*#ifdef H5*/
			<span class="left"></span>
			/*#endif*/
			<span class="center">我的</span>
			/*#ifdef H5*/
			<div class="right">
				<uni-icons class type="chatbubble-filled" size="22"></uni-icons>
				<uni-icons class type="gear" size="22"></uni-icons>
			</div>
			/*#endif*/
		</div>
	</TopNav>

	<div class="my-wrapper">
		<div class="my-wrapper-d1"></div>
	</div>

	<TabBar currentPath="/pages/my/my"></TabBar>

</template>

<style lang="scss">
	.my-header {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		/*#ifdef H5*/
		align-items: center;

		/*#endif*/
		.left,
		.right {
			width: 100rpx;
		}

		.center {
			flex: auto;
			text-align: center;
		}
	}
	
	.my-wrapper {
		width: 100%;
		position: fixed;
		background: #ccc;
		top: 170rpx;
		/*#ifdef H5*/
		top: 88rpx;
		/*#endif*/
		bottom: 102rpx;
	}
</style>
