<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import {
		formEl
	} from '@/utils/index.js'
	import cityData from '@/utils/cityList.json'
	
	const cityList = cityData.data
	
	// console.log(cityList);
	
	const provinces = cityList.map((item, index) => item.name)
	
	const citys = cityList[0].pchilds.map((item, index) => item.name)
	
	const countys = cityList[0].pchilds[0].cchilds.map((item, index) => item.name)
	
	const collapse = ref(null)
	const value = ref([])
	const content = ref('adasdsadsadasdsadsad')
	const valiForm = ref(null)
	const ars = ref([])

	const baseFormData = reactive({
		aaObj: {},
		bb: "",
		cc: "",
		dd: "",
		ee1: "",
		ee2: "",
		ff: "",
		gg: ""
	})
	
	const { multiIndex, multiArray} = reactive({
		multiIndex: [0, 0, 0],
		multiArray: [provinces, citys, countys]
	})
	


	const rules = {
		aaObj: {
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
	
	
	const bindMultiPickerColumnChange = (e) => {
		multiIndex[e.detail.column] = e.detail.value
	
		switch (e.detail.column) {
			case 0: //拖动第1列
				multiArray[1] = cityList[multiIndex[0]].pchilds.map((item, index) => item.name)
				multiArray[2] = cityList[multiIndex[0]].pchilds[0].cchilds.map((item, index) => item.name)
				
				// console.log(cityList[multiIndex[0]].pchilds[0])
				
				
				multiIndex.splice(1, 1, 0)
				multiIndex.splice(2, 1, 0)
				break
			case 1: //拖动第1列
				// const p = cityList[multiIndex[0]]
				multiArray[2] = cityList[multiIndex[0]].pchilds[multiIndex[1]].cchilds.map((item, index) => item.name)
				
				
				console.log(multiIndex[1])
				
				multiIndex.splice(2, 1, 0)
				break
		}
	}
	
	const bindPickerChange = (e) => {
		console.log('eee', cityList[multiIndex[0]]);
		const codeObj = cityList[multiIndex[0]]
		const code1 = codeObj.code
		const code2 = codeObj.pchilds[multiIndex[1]].code || ''
		const code3 = codeObj.pchilds[multiIndex[1]].cchilds[multiIndex[2]].code || ''
		// console.log(code1, code2, code3);
		// const itemP = 
		baseFormData.aaObj.str = [multiArray[0][multiIndex[0]], multiArray[1][multiIndex[1]], multiArray[2][multiIndex[2]]].join('/')
		baseFormData.aaObj.codes = [code1,code2,code3]
	}

	const financeStageArray = ref(['天使轮', 'A轮', '为融资', '不需要融资'])

	const pickerChange = (e) => {
		let index = e.detail.value
		let key = e.target.dataset.key
		let ars = e.target.dataset.ars
		baseFormData[key] = ars[index]
	}
	
	// const getEl = async () => {
	// 	// baseFormData.aa = {}
	// 	// baseFormData.bb = ''
	// 	// baseFormData.cc = ''
	// 	// baseFormData.dd = ''
	// 	// baseFormData.ee1 = ''
	// 	// baseFormData.ee2 = ''
	// 	// baseFormData.ff = ''
	// 	// baseFormData.gg = ''
	// 	return await formEl(valiForm.value)	
	// }

	const add = async () => {
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
	
	defineExpose({
	  // getEl,
	  ars
	})
</script>

<template>
	<uni-section title="资源配置区" type="line">

		<uni-forms class="push-wrapper-three" :rules="rules" ref="valiForm" :modelValue="baseFormData">

			<uni-forms-item label="选择资源分类" :labelWidth="140" name="aaObj">
				
				<picker mode="multiSelector" @change="bindPickerChange" @columnchange="bindMultiPickerColumnChange"
					:value="multiIndex" :range="multiArray">
					<div class="bottom-line">
						<span class="text" v-if="baseFormData.aaObj.str">{{ baseFormData.aaObj.str }}</span>
						<span class="text desc" v-else>请选择城市</span>
						<uni-icons class="icon" type="bottom" color="#DCDFE6" size="22"></uni-icons>
					</div>
				</picker>
				
<!-- 				<picker @change="pickerChange" :range="financeStageArray" data-key="aa" :data-ars="financeStageArray">
					<div class="bottom-line">
						<span class="text" v-if="baseFormData.aa">{{ baseFormData.aa }}</span>
						<span class="text desc" v-else>请选择资源分类</span>
						<uni-icons class="icon" type="bottom" color="#DCDFE6" size="22"></uni-icons>
					</div>
				</picker> -->
			</uni-forms-item>
			
<!-- 			<uni-forms-item label="城市" :labelWidth="80" name="cityStr">
				<picker mode="multiSelector" @change="bindPickerChange" @columnchange="bindMultiPickerColumnChange"
					:value="multiIndex" :range="multiArray">
					<div class="bottom-line">
						<span class="text" v-if="baseFormData.cityStr">{{ baseFormData.cityStr }}</span>
						<span class="text desc" v-else>请选择城市</span>
						<uni-icons class="icon" type="bottom" color="#DCDFE6" size="22"></uni-icons>
					</div>
				</picker>
			</uni-forms-item> -->

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
			
			<uni-forms-item label="所在比例(%)" :labelWidth="140" name="ff">
				<uni-easyinput v-model="baseFormData.ff" placeholder="所在比例" />
			</uni-forms-item>

			<uni-forms-item label="回报加入方式" :labelWidth="140" name="gg">
				<uni-easyinput v-model="baseFormData.gg" placeholder="回报加入方式" />
			</uni-forms-item>
		</uni-forms>
	</uni-section>

	<button class="button" type="primary" @click="add">添加资源</button>

	<uni-section title="已添加资源列表" type="line">
		<uni-collapse accordion>
			<uni-collapse-item v-for="(item, index) in ars" :key="index" :title="item.bb" :show-animation="true">
				<div>{{ item.aaObj.str }}</div>
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
