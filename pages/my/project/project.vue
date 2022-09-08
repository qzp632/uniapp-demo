<script setup>
	import {
		ref,
		effect
	} from 'vue'
	import {
		navigateTo,
		setStorage
	} from '@/utils/index.js'
	import {
		axios
	} from '@/utils/axios.js'
	import TopNav from '@/components/topNav/TopNav.vue'

	const projectList = ref([])
	const isMore = ref(false)
	const page = ref(1)

	const runder = effect(async () => {
		const result = await axios.post({
			url: '/project/getlist', //仅为示例，并非真实接口地址。
			data: {
				"publisher": uni.getStorageSync('user-id'),
				"startPage": page.value,
				"pageSize": 20
			}
		})
		uni.hideLoading();
		if (result.content.list.length) isMore.value = true
		
		projectList.value.push(...result.content.list)
		// projectList.value = result.content.list
	})

	uni.$on('getMyP', function() {
		projectList.value = []
		page.value = 1
		// runder()
	})

	const pushProject = () => {
		navigateTo('/pages/my/project/pushProject/pushProject')
	}

	const lower = (e) => {
		if (isMore.value) {
			page.value++
			isMore.value = false
			uni.showLoading({
				title: '加载中'
			});
			// runder()
		}
	}
	
	const getItem = (item) => {
		// console.log(item);
		setStorage('pro-detail', item)
		navigateTo("/pages/my/project/projectDetail/projectDetail")
	}
</script>
<template>

	<TopNav :back="true" title="我的项目" />

	<div class="project-wrapper">
		
		<div class="no-result" v-if="!projectList.length">
			<image class="no-result-img"
				src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fg-search1.alicdn.com%2Fimg%2Fbao%2Fuploaded%2Fi1%2FTB13D7SFFXXXXakaVXXXXXXXXXX_%21%210-item_pic.jpg_300x300.jpg&refer=http%3A%2F%2Fg-search1.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663901422&t=7f7f794ff845b0388eb614148006bef8" />
			<span>你还没有发布任何项目</span>
			<button class="no-result-btn" type="primary" @click="pushProject">+ 发布项目</button>
		</div>

		<scroll-view v-else scroll-y="true" class="scroll-Y" @scrolltolower="lower" lower-threshold="50">
			<uni-list>
					<uni-list-item 
						v-for="(item, index) in projectList" 
						clickable
						@click="getItem(item)"
						:key="index" 
						:title="item.projectName"
						:note="item.projectlabel" :thumb="`http://www.yiqima.vip/yqbfile/${item.logoPath}`"
						thumb-size="lg"
					/>
			</uni-list>
			<div @click="pushProject">
				<uni-fab horizontal="right" vertical="bottom" />
			</div>
		</scroll-view>

	</div>

</template>

<style lang="scss" scoped>
	.scroll-Y {
		height: 100%;
	}

	// .scroll-view-item {
	// 	height: 300rpx;
	// 	line-height: 300rpx;
	// 	text-align: center;
	// 	font-size: 36rpx;
	// }

	.project-wrapper {
		width: 100%;
		position: absolute;
		background: #fff;
		top: 88px;
		/*#ifdef H5*/
		top: 44px;
		/*#endif*/
		bottom: 0;
		overflow: auto;

		.no-result {
			width: 100%;
			text-align: center;
			font-size: 26rpx;
			color: #ccc;
			letter-spacing: 2rpx;

			&-img {
				display: block;
				width: 480rpx;
				margin: 150rpx auto 40rpx;
			}

			&-btn {
				margin: 40rpx 100rpx;
				font-size: 32rpx
			}
		}
	}
</style>
