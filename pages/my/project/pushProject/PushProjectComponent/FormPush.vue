<script setup>
	import {
		reactive
	} from 'vue'

	const {
		baseFormData,
		array
	} = reactive({
		baseFormData: {
			name: '',
			age: ''
		},
		array: ['个人', '企业'],
	})


	const pickChange = (item) => {
		baseFormData.name = array[item.detail.value]
	}
</script>
<script>
	import {
		options
	} from '@/utils/index.js'
	export default {
		options
	}
</script>
<template>

	<div class="push-wrapper">
		<uni-forms class="push-wrapper-forms" :modelValue="baseFormData" labelPosition="top">
			<uni-forms-item label="发布类型" required>
				<picker class="fea" :range="array" @change="pickChange">
					<uni-easyinput disabled :styles="{'disableColor':'#fff'}" v-model="baseFormData.name"
						placeholder="点击选择个人或者企业" />
				</picker>
			</uni-forms-item>
		</uni-forms>
	</div>

</template>

<style lang="scss" scoped>
	.fea ::v-deep.uni-input-input {
		color: #000 !important;
	}

	.fea ::v-deep.uni-easyinput__content-input {
		color: #000 !important;
	}

	// uni-easyinput__content-input
	.push-wrapper {
		width: 100%;
		position: absolute;
		padding: 30rpx;
		box-sizing: border-box;
		background: #fff;
		top: 88px;
		/*#ifdef H5*/
		top: 44px;
		/*#endif*/
		bottom: 0;
		overflow: auto;

		// &-forms {
		// 	margin: 35rpx;
		// }
	}

	// .title {
	// 	font-size: 14px;
	// 	font-weight: bold;
	// 	margin: 20px 0 5px 0;
	// }

	// .data-pickerview {
	// 	height: 400px;
	// 	border: 1px #e5e5e5 solid;
	// }

	// .popper__arrow {
	// 	top: -6px;
	// 	left: 50%;
	// 	margin-right: 3px;
	// 	border-top-width: 0;
	// 	border-bottom-color: #EBEEF5;
	// }

	// .popper__arrow {
	// 	top: -6px;
	// 	left: 50%;
	// 	margin-right: 3px;
	// 	border-top-width: 0;
	// 	border-bottom-color: #EBEEF5;
	// }
</style>
