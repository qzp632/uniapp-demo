<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import {
		formEl
	} from '@/utils/index.js'
	const collapse = ref(null)
	const value = ref([])
	const content = ref('adasdsadsadasdsadsad')
	const valiForm = ref(null)

	const baseFormData = reactive({
		aa: "",
		bb: "",
		cc: "",
		dd: "",
		ee1: "",
		ee2: "",
		ff: "",
		gg: ""
	})

	const ars = ref([])

	const rules = {
		aa: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		bb: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		cc: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		dd: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		ee1: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		ee2: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		ff: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		gg: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		}
	}

	const financeStageArray = ref(['天使轮', 'A轮', '为融资', '不需要融资'])

	const pickerChange = (e) => {
		let index = e.detail.value
		let key = e.target.dataset.key
		let ars = e.target.dataset.ars
		baseFormData[key] = ars[index]
	}

	const getEl = async () => {
		const el = await formEl(valiForm.value)
		ars.value.push(el)
		baseFormData.aa = ''
		baseFormData.bb = ''
		baseFormData.cc = ''
		baseFormData.dd = ''
		baseFormData.ee1 = ''
		baseFormData.ee2 = ''
		baseFormData.ff = ''
		baseFormData.gg = ''
		console.log(ars.value);
	}
</script>

<template>
	<uni-section title="资源配置区" type="line">

		<uni-forms class="push-wrapper-three" :rules="rules" ref="valiForm" :modelValue="baseFormData">

			<uni-forms-item label="选择资源分类" :labelWidth="140" name="aa">
				<picker @change="pickerChange" :range="financeStageArray" data-key="aa" :data-ars="financeStageArray">
					<div class="bottom-line">
						<span class="text" v-if="baseFormData.aa">{{ baseFormData.aa }}</span>
						<span class="text desc" v-else>请选择资源分类</span>
						<uni-icons class="icon" type="bottom" color="#DCDFE6" size="22"></uni-icons>
					</div>
				</picker>
			</uni-forms-item>

			<uni-forms-item label="资源自定义名称" :labelWidth="140" name="bb">
				<uni-easyinput v-model="baseFormData.bb" placeholder="资源自定义名称" />
			</uni-forms-item>

			<uni-forms-item label="所需数量" :labelWidth="140" name="cc">
				<uni-easyinput v-model="baseFormData.cc" placeholder="所需数量" />
			</uni-forms-item>

			<uni-forms-item label="规模" :labelWidth="140" name="dd">
				<uni-easyinput v-model="baseFormData.dd" placeholder="规模" />
			</uni-forms-item>

			<uni-forms-item label="最小数量" :labelWidth="140" name="ee1">
				<uni-easyinput v-model="baseFormData.ee1" placeholder="最小数量/最大数量" />
			</uni-forms-item>
			
			<uni-forms-item label="最大数量" :labelWidth="140" name="ee2">
				<uni-easyinput v-model="baseFormData.ee2" placeholder="最小数量/最大数量" />
			</uni-forms-item>
			
			<uni-forms-item label="所在比例" :labelWidth="140" name="ff">
				<uni-easyinput v-model="baseFormData.ff" placeholder="所在比例" />
			</uni-forms-item>

			<uni-forms-item label="回报加入方式" :labelWidth="140" name="gg">
				<uni-easyinput v-model="baseFormData.gg" placeholder="回报加入方式" />
			</uni-forms-item>
		</uni-forms>
	</uni-section>

	<button class="button" type="primary" @click="getEl">添加资源</button>

	<uni-section title="已添加资源列表" type="line">
		<uni-collapse accordion>
			<uni-collapse-item v-for="(item, index) in ars" :key="index" :title="item.aa" :show-animation="true">
				<div>{{ item.bb }}</div>
				<div>{{ item.cc }}</div>
				<div>{{ item.dd }}</div>
				<div>{{ item.ee1 }}</div>
				<div>{{ item.ee2 }}</div>
				<div>{{ item.ff }}</div>
				<div>{{ item.gg }}</div>
			</uni-collapse-item>
		</uni-collapse>
	</uni-section>
</template>

<style lang="scss" scoped>
	.bottom-line {
		display: flex;
		font-size: 14px;
		height: 35px;
		box-sizing: border-box;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2rpx solid #DCDFE6;

		.text {
			margin-left: 20rpx;
		}

		.desc {
			color: #999;
			font-size: 24rpx;
		}

		.icon {
			margin-right: 20rpx;
		}
	}
</style>
