<script setup>
	import {
		effect,
		ref,
		nextTick,
		onMounted,
		computed
	} from 'vue'
	import TabBar from '@/components/tabBar/TabBar.vue'
	import TopNav from '@/components/topNav/TopNav.vue'

	import {
		axios
	} from '@/utils/axios.js'
	
	const topNavHeight = ref(0)
	const topImgHeight = ref(0)
	
	onMounted(async() => {
		await nextTick()
		let topN = uni.createSelectorQuery().select(".my-header");
		topN.boundingClientRect( data => {
			topNavHeight.value = data.height

		}).exec();
		
		setTimeout(() => {
			let topImg = uni.createSelectorQuery().select(".img");
			topImg.boundingClientRect(r => {
				topImgHeight.value = r.height
				console.log('r.height', r.height);
			  // console.log("节点离页面顶部的距离为" + data);
			}).exec();
		}, 50)

	})
	
	const im1Style = computed(() => {
		return {
			'height': `${topImgHeight.value - topNavHeight.value}px`
		}
	})

	// const render = effect(async() => {
	// 	const result = await axios.post({
	// 		url: '/api/user/getsuerinfo', //仅为示例，并非真实接口地址。
	// 		data: {
	// 			"telephone": '13646121025' //手机号
	// 		}
	// 	})
	// })

	const loginOut = () => {

		// try {
		// 	uni.setStorageSync('token', '');
		// 	uni.redirectTo({
		// 		url: '/pages/login/login',
		// 		animationDuration: 0
		// 	})
		// } catch (e) {
		// 	console.warn(e.message);
		// }
	}
</script>

<template>

	<TopNav>
		<div class="my-header">
			<div class="my-header-d1">
				/*#ifdef H5*/
				<span class="left"></span>
				/*#endif*/
				
				/*#ifdef APP-PLUS*/
				<span class="left"></span>
				/*#endif*/
				
				<span class="center">我的</span>
				/*#ifdef H5*/
				<div class="right">
					<uni-icons class type="chatbubble-filled" size="22"></uni-icons>
					<uni-icons class type="gear" size="22"></uni-icons>
				</div>
				/*#endif*/
				
				/*#ifdef APP-PLUS*/
				<div class="right">
					<uni-icons class type="chatbubble-filled" size="22"></uni-icons>
					<uni-icons class type="gear" size="22"></uni-icons>
				</div>
				/*#endif*/
			</div>
			<img class="img" src="https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF" alt="" srcset="">
		</div>
	</TopNav>
	
	

	<div class="my-wrapper">
		<div class="im1" :style="im1Style">
			<img class="im1-ims" src="https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF" alt="" srcset="">
		
		</div>
		<!-- <div class="my-wrapper-d1" @click="loginOut">11111</div> -->
	</div>

	<TabBar currentPath="/pages/my/my"></TabBar>

</template>

<style lang="scss">
	.my-header {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;

		.img {
			top: 0;
			left: 0;
			position: absolute;
			width: 100%;
		}

		&-d1 {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			/*#ifdef H5*/
			align-items: center;
			/*#endif*/
			position: absolute;
			z-index: 1;
			background: transparent;
			.left,
			.right {
				width: 100rpx;
			}

			.center {
				flex: auto;
				text-align: center;
				margin-bottom: 22rpx;
				/*#ifdef H5*/
				margin-bottom: 0;
				/*#endif*/
			}
		}

	}

	.my-wrapper {
		width: 100%;
		position: absolute;
		background: #ccc;
		top: 170rpx;
		/*#ifdef H5*/
		top: 88rpx;
		/*#endif*/
		bottom: 102rpx;
		overflow: auto;
		.im1 {
			width: 100%;
			background: red;
			position: relative;
			overflow: hidden;
			height: 400rpx;
			&-ims {
				width: 100%;
				position: absolute;
				bottom: 0;
			}
		}
	}
</style>
