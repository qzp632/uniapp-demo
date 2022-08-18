<script setup>
	import TabBar from '@/components/tabBar/TabBar.vue'
	import TopNav from '@/components/topNav/TopNav.vue'

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
	<TopNav title="我的" />
	<div>my</div>
	<button @click="loginOut">退出</button>
	<TabBar currentPath="/pages/my/my"></TabBar>

</template>

<style lang="scss">

</style>
