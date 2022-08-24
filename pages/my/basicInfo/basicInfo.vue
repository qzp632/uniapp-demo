<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import useUpdateSex from './useBasccInfo/use-updateSex.js'
	import TabBar from '@/components/tabBar/TabBar.vue'
	import TopNav from '@/components/topNav/TopNav.vue'
	import UpdateSex from './basicComponent/UpdateSex.vue'

	const {
		popup,
		statusTypes,
		currentSex,
		setSex,
		popupApi
	} = useUpdateSex()
</script>

<template>

	<TopNav :back="true" title="基本信息" />

	<view class="basicInfo">
		<h3 class="basicInfo-title">基本信息</h3>
		<image class="basicInfo-img"
			src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.puchedu.cn%2Fuploads%2F1%2F26%2F1162697150%2F3496822432.jpg&refer=http%3A%2F%2Fimg.puchedu.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663827473&t=ffbcf7fa58081eff3b13156e9e901246">
		</image>
		<uni-list class="u-li">
			<uni-list-item title="姓名" rightText="大圣" />
			<uni-list-item title="认证实名" rightText="大圣" />
			<uni-list-item title="性别" :rightText="statusTypes[currentSex]?.text || ''" showArrow link="navigateTo"
				@click="setSex" />
			<uni-list-item title="所在城市" rightText="上海" showArrow />
			<uni-list-item title="所在行业" rightText="教育 在线教育" showArrow />
			<uni-list-item title="行业经验" rightText="一年以下" showArrow />
			<uni-list-item title="显示经历" rightText="未提供职业经历" showArrow />

		</uni-list>
		<uni-easyinput type="textarea" placeholder="请输入自我介绍" />
		<span class="desc">简单清晰的介绍, 有助于合伙人在茫茫人海中一眼找到你哦</span>

		<uni-popup ref="popup" background-color="#fff">
			<UpdateSex :statusTypes="statusTypes" :currentSex="currentSex" :popupApi="popupApi"></UpdateSex>
		</uni-popup>
	</view>
</template>

<style lang="scss" scoped>
	.basicInfo ::v-deep.uni-list--border-top {
		background-color: transparent;
	}

	.basicInfo {
		margin: 20rpx;

		&-img {
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			margin: 0 auto;
			display: block;
			border: none;
		}

		.desc {
			font-size: 24rpx;
			color: #ccc;
		}
	}
</style>
