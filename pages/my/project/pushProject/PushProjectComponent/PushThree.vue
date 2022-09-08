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
		sourcename: "",
		count: "",
		maxamount: "",
		minamount: "",
		percent: "",
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
		sourcename: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		count: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		maxamount: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		minamount: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		percent: {
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
				
				
				// console.log(multiIndex[1])
				
				multiIndex.splice(2, 1, 0)
				break
		}
	}
	
	const bindPickerChange = (e) => {
		// console.log('eee', cityList[multiIndex[0]]);
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

	const add = async () => {
		const el = await formEl(valiForm.value)
		const sum = ars.value.length && ars.value.reduce(function(prev, cur) {
		    return (+cur.percent) + prev;
		}, 0);
		if (el.percent > 100) {
			uni.showToast({
				title:'比例不能超过100%'
			})
			return false
		}
		

		if (((+el.percent) + sum )> 100) {
			uni.showToast({
				title:'比例不能超过100%'
			})
			return false
		}
		
		ars.value.push(el)
		baseFormData.aa = ''
		baseFormData.aaObj.str = ''
		baseFormData.sourcename = ''
		baseFormData.count = ''
		baseFormData.maxamount = ''
		baseFormData.minamount = ''
		baseFormData.percent = ''
		baseFormData.gg = ''
		// console.log(ars.value);
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
						<span class="text desc" v-else>选择资源分类</span>
						<uni-icons class="icon" type="bottom" color="#DCDFE6" size="22"></uni-icons>
					</div>
				</picker>
				
			</uni-forms-item>

			<uni-forms-item label="资源自定义名称" :labelWidth="140" name="sourcename">
				<uni-easyinput v-model="baseFormData.sourcename" placeholder="资源自定义名称" />
			</uni-forms-item>

			<uni-forms-item label="所需数量" :labelWidth="140" name="count">
				<uni-easyinput type="number" v-model="baseFormData.count" placeholder="所需数量" />
			</uni-forms-item>

			<uni-forms-item label="最小数量" :labelWidth="140" name="maxamount">
				<uni-easyinput type="number" v-model="baseFormData.maxamount" placeholder="最小数量/最大数量" />
			</uni-forms-item>
			
			<uni-forms-item label="最大数量" :labelWidth="140" name="minamount">
				<uni-easyinput type="number" v-model="baseFormData.minamount" placeholder="最小数量/最大数量" />
			</uni-forms-item>
			
			<uni-forms-item label="所在比例(%)" :labelWidth="140" name="percent">
				<uni-easyinput type="number" v-model="baseFormData.percent" placeholder="所在比例" />
			</uni-forms-item>

		</uni-forms>
	</uni-section>

	<button class="button" type="primary" @click="add">添加资源</button>

	<uni-section title="已添加资源列表" type="line">
		<uni-collapse accordion>
			<uni-collapse-item class="bg" v-for="(item, index) in ars" :key="index" :title="item.sourcename" :show-animation="true">
				<div class="collItem-div">
					<span class="cot">分类</span>
					<span>{{ item.aaObj.str }}</span>
				</div>

				<div class="collItem">

					<div class="collItem-div">
						<span class="cot">数量</span>
						<span>{{ item.count }}</span>
					</div>
					<div class="collItem-div">
						<span class="cot">最大</span>
						<span>{{ item.maxamount }}</span>
					</div>
					<div class="collItem-div">
						<span class="cot">最小</span>
						<span>{{ item.minamount }}</span>
					</div>
					<div class="collItem-div">
						<span class="cot">比例</span>
						<span>{{ item.percent }}</span>
					</div>
					<div class="collItem-div">
						<span class="cot">方式</span>
						<span>{{ item.gg }}</span>
					</div>
				</div>
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
	.bg {
		border: 2rpx solid #DCDFE6;
	}
	
	.collItem {
		width: 100%;
		// background: saddlebrown;
		display: flex;
	}
	.collItem-div {
		flex: 1;
		display: flex;
		flex-direction: column;
		background: #DCDFE6;
		margin-top: 5rpx;
		.cot {
			font-size: 30rpx;
		}
	}
</style>
