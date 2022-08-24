<script setup>
	import { ref, effect } from 'vue'
	import {
		navigateTo
	} from '@/utils/index.js'
	import TopNav from '@/components/topNav/TopNav.vue'

	const projectList = ref([])
	
	// effect(() => {
	// 	projectList.value= [
	// 		{ id: 1, name: 'aaaa', age: 10},
	// 		{ id: 2, name: 'bbbbb', age: 20}
	// 	]
	// })
	const pushProject = () => {
		navigateTo('/pages/my/project/pushProject/pushProject')
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
		<div v-else>
			<uni-list>
				<uni-list-item 
					v-for="(item, index) in projectList"
					:key="index"
					title="餐饮招募" 
					note="包子,油条,大烧饼"
					thumb="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fg-search1.alicdn.com%2Fimg%2Fbao%2Fuploaded%2Fi1%2FTB13D7SFFXXXXakaVXXXXXXXXXX_%21%210-item_pic.jpg_300x300.jpg&refer=http%3A%2F%2Fg-search1.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663901422&t=7f7f794ff845b0388eb614148006bef8"
					thumb-size="lg"
				/>
			</uni-list>
		</div>
	</div>

</template>

<style lang="scss" scoped>
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
