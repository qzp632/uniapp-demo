<script setup>
	import {
		reactive,
		toRefs
	} from 'vue'
	const data = reactive({
		indicatorDots: true,
		autoplay: true,
		interval: 2000,
		duration: 500,
		swiperList: [
			"https://y.qq.com/music/common/upload/MUSIC_FOCUS/4416363.png?max_age=2592000",
			"https://y.qq.com/music/common/upload/MUSIC_FOCUS/4418627.jpg?max_age=2592000",
			"https://y.qq.com/music/common/upload/MUSIC_FOCUS/4417430.jpg?max_age=2592000"
		]
	})

	const {
		indicatorDots,
		autoplay,
		interval,
		duration,
		swiperList
	} = {
		...toRefs(data)
	}
</script>

<template>
	<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
		:duration="duration">
		<swiper-item class="item" v-for="(item, index) in swiperList">
			<image class="img" :src="item" mode=""></image>
		</swiper-item>
	</swiper>
</template>

<style lang="scss" scoped>
.swiper {
	background: #fff;
	width: 100%;
	.item {
		width: 100%;
		.img {
			width: 100%;
		}
	}
}
</style>
