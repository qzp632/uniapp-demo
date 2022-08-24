<script setup>
	import {
		ref,
		effect,
		reactive
	} from 'vue'
	import TopNav from '@/components/topNav/TopNav.vue'
	import FormPush from './PushProjectComponent/FormPush.vue'
</script>

<template>

	<TopNav :back="true" title="发布项目" />

	<FormPush></FormPush>

</template>

<style lang="scss" scoped>
	
</style>
