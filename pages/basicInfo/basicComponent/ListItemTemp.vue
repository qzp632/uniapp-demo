<script setup>
	defineProps({
		title: {
			type: String,
			default: ''
		},
		desc: {
			type: String,
			default: ''
		},
		showArrow: {
			type: Boolean,
			default: false
		},
	})
</script>
<script>
	import { options } from '@/utils/index.js'
	export default { options }
</script>
<template>
	<uni-list-item class="l-it" :title="title" link="navigateTo" :showArrow="showArrow">
		<template v-slot:footer>
			<span class="u-t">{{ desc }}</span>
		</template>
	</uni-list-item>

</template>

<style lang="scss" scoped>
	// ::v-deep.uni-list--border-top {
	// 	background-color: transparent;
	// }
	.l-it {
		font-size: 30rpx
	}
</style>
