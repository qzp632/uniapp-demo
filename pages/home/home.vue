<script setup>
	import { effect } from 'vue'
	import HomeSwiper from './homeComponent/HomeSwiper.vue'
	import HomeIcon from './homeComponent/HomeIcon.vue'
	import HotList from './homeComponent/hotList.vue'
	import TabBar from '@/components/tabBar/TabBar.vue'
	import TopNav from '@/components/topNav/TopNav.vue'
	
	import useHomeIcon from './useHome/use-homeIcon.js'
	import useHotList from './useHome/use-hotList.js'

	const {
		iconList
	} = useHomeIcon()
	const {
		hotList
	} = useHotList()

	
	const go = () => {
		console.log(111);
		// uni.scanCode({
		// 	success: function (res) {
		// 		console.log('条码类型：' + res.scanType);
		// 		console.log('条码内容：' + res.result);
		// 	}
		// });
		uni.openBluetoothAdapter({
		  success(res) {
		    console.log(res)
		  }
		})
	}

</script>

<template>
	
	<TopNav title="首页" />

	<view class="home">

		<HomeSwiper></HomeSwiper>

		<HomeIcon :iconList="iconList"></HomeIcon>

		<view class="content">
			<h3 class="h3" @click="go">热门项目</h3>
			<HotList class="bgc" :hotList="hotList"></HotList>
			<h3 class="h3">项目优选</h3>
			<HotList :hotList="hotList"></HotList>
			<HotList :hotList="hotList"></HotList>
			<h3 class="h3">热门项目</h3>
			<HotList :hotList="hotList"></HotList>
			<HotList :hotList="hotList"></HotList>
			<h3 class="h3">项目优选</h3>
			<HotList :hotList="hotList"></HotList>
			<HotList :hotList="hotList" :boder="0"></HotList>
		</view>

		<TabBar currentPath="/pages/home/home"></TabBar>
	</view>
</template>

<style lang="scss" scoped>
	.nav-bar {
		.nav-box {
			width: 100%;
			display: flex;
			justify-content: center;
			box-sizing: border-box;
			align-items: center;
		}
	}

	.home {
		width: 100%;
		height: 100%;
		position: absolute;
		background: #ccc;

		.bgc {
			background: #fff;
		}

		.content {
			margin-top: 18rpx;
			padding-bottom: 100rpx;

			.h3 {
				padding: 10rpx;
				background: #fff;
				box-sizing: border-box;
				border-bottom: 2rpx solid #ccc;
			}
		}
	}
</style>
