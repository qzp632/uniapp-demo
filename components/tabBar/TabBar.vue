<script setup>
	
	const tabList = [{
			"text": "首页",
			"pagePath": "/pages/home/home",
			"url": "/static/tabbar/index.png",
			"selectedIconPath": "/static/tabbar/indexSelected.png"
		},
		{
			"text": "梦想",
			"pagePath": "/pages/dream/dream",
			"url": "/static/tabbar/shop.png",
			"selectedIconPath": "/static/tabbar/shopSelected.png"
		},
		{
			"text": "集市",
			"pagePath": "/pages/market/market",
			"url": "/static/tabbar/list.png",
			"selectedIconPath": "/static/tabbar/listSelected.png"
		},
		{
			"text": "我的",
			"pagePath": "/pages/my/my",
			"url": "/static/tabbar/my.png",
			"selectedIconPath": "/static/tabbar/mySelected.png"
		}
	]
	defineProps({
		currentPath: {
			type: String,
			default: ''
		}
	})

	const selectBar = (item) => {
		console.log(item.pagePath);
		if (item.pagePath === '/pages/dream/dream') {
			uni.redirectTo({
				url:'/pages/login/login',
				animationDuration: 0
			})
			
			return
		}
		uni.redirectTo({
			url:item.pagePath,
			animationDuration: 0
		})
	}
	
	// try {
	// 	const token = uni.getStorageSync('token');
	// 	console.log(token);
	// 	if (!token) {
	// 		uni.redirectTo({
	// 			url:'/pages/login/login',
	// 			animationDuration: 0
	// 		})
	// 	}
	// } catch (e) {
	// 	console.log(e);
	// 	// error
	// }
	
	// const token = localStorage
	// if(!token) {
	// 	uni.redirectTo({
	// 		url:'/pages/login/login',
	// 		animationDuration: 0
	// 	})
	// }
	
</script>

<template>
	<view class="tabber">
		<view class="tab-item" @click="selectBar(item, index)" v-for="(item, index) in tabList" :key="index">
			<image :src="currentPath === item.pagePath ? item.selectedIconPath : item.url" class="image" mode="aspectFill" />
			<text class="text">{{ item.text }}</text>
		</view>
		
	</view>
</template>

<style lang="scss" scoped>
	.tabber {
		width: 100%;
		height: 100rpx;
		border-top: 2rpx solid #ccc;
		display: flex;
		position: fixed;
		bottom: 0;
		background: #f2f2f2;
		.tab-item {
			flex: 1;
			display: flex;
			height: 100%;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.image {
				width: 40rpx;
				height: 40rpx;
			}

			.text {
				font-size: 26rpx
			}
		}
	}
</style>
