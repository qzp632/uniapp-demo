<script setup>
	import {
		ref,
		effect
	} from 'vue'
	import {
		str
	} from '@/utils/index.js'
	import TopNav from '@/components/topNav/TopNav.vue'

	const src = ref(str)

	// effect(() => {
	// 	src.value = str
	// 	console.log('str', str);
	// })
</script>

<template>
	<TopNav :home="true" title="pdf阅读" />


	<web-view :src="src"></web-view>

</template>

<style lang="scss" scoped>

</style>
