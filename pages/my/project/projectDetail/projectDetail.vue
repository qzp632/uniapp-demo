<script setup>
	import {
		ref,
		effect
	} from 'vue'

	import {
		axios
	} from '@/utils/axios.js'
	
	import TopNav from '@/components/topNav/TopNav.vue'
	
	effect(() => {
		
	})
	
</script>

<template>

	<TopNav :back="true" title="项目详情" />
	
	<div class="detail-wrapper"></div>

</template>

<style lang="scss" scoped>
	.detail-wrapper {
		width: 100%;
		position: absolute;
		background: #fff;
		top: 88px;
		/*#ifdef H5*/
		top: 44px;
		/*#endif*/
		bottom: 0;
		overflow: auto;
	}
</style>
