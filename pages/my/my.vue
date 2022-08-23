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
	import MyTopNav from './myComponent/MyTopNav.vue'
	import MyContent from './myComponent/MyContent.vue'

	import {
		axios
	} from '@/utils/axios.js'

	const topNavHeight = ref(0)
	const topImgHeight = ref(0)

	const imgUrl = ref(
		"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0120bc59142823b5b3086ed4f01256.png%402o.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663723890&t=03dcc53f86e18893ea4dbd1f76dd3ca4"
		)
		
	effect(async() => {
		const result = await axios.post({
			url: '/user/getsuerinfo', //仅为示例，并非真实接口地址。
			data: {
				"telephone": uni.getStorageSync('phone')
			}
		})
	})
		
	onMounted(async () => {
		await nextTick()
		let topN = uni.createSelectorQuery().select(".my-header");
		topN.boundingClientRect(data => {
			topNavHeight.value = data.height

		}).exec();

		let topImg = uni.createSelectorQuery().select(".img");
		topImg.boundingClientRect(r => {
			topImgHeight.value = r.height
		}).exec();
	})

	const im1Style = computed(() => {
		return {
			'height': `${topImgHeight.value - topNavHeight.value}px`
		}
	})
</script>

<template>

	<TopNav>
		<div class="my-header">
			<MyTopNav></MyTopNav>
			<image class="ig img" :src="imgUrl" mode=""></image>
		</div>
	</TopNav>

	<MyContent :im1Style="im1Style" :imgUrl="imgUrl"></MyContent>

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
			height: 300rpx;
		}
	}
</style>
