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

</script>

<template>
	
	<TopNav title="首页" />
	<!-- <TopNav>首页</TopNav> -->
	<view class="home">

		<HomeSwiper></HomeSwiper>

		<HomeIcon :iconList="iconList"></HomeIcon>

		<view class="content">
			<h3 class="h3">热门项目</h3>
			<HotList class="bgc" :hotList="hotList"></HotList>
			<h3 class="h3">项目优选</h3>
			<HotList :hotList="hotList"></HotList>
			<HotList :hotList="hotList"></HotList>
<!-- 			<h3 class="h3">热门项目</h3>
			<HotList :hotList="hotList"></HotList>
			<HotList :hotList="hotList"></HotList>
			<h3 class="h3">项目优选</h3>
			<HotList :hotList="hotList"></HotList>
			<HotList :hotList="hotList" :boder="0"></HotList> -->
		</view>

		<TabBar currentPath="/pages/home/home"></TabBar>
	</view>
</template>

<style lang="scss" scoped>

	.home {
		width: 100%;
		position: absolute;
		background: #ccc;
		top: 170rpx;
		/*#ifdef H5*/
		top: 88rpx;
		/*#endif*/
		bottom: 102rpx;
		overflow: auto;
		.bgc {
			background: #fff;
		}

		.content {
			margin-top: 18rpx;
			.h3 {
				padding: 10rpx;
				background: #fff;
				box-sizing: border-box;
				border-bottom: 2rpx solid #ccc;
			}
		}
	}
</style>
