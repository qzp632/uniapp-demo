<script setup>
	import { ref, effect } from 'vue'
	import usePushOne from './usePushKey/use-pushOne.js'
	
	import {
		formEl
	} from '@/utils/index.js'
	const {
		valiForm,
		baseFormData,
		multiIndex,
		multiArray,
		bindMultiPickerColumnChange,
		bindPickerChange,
		pickerChange,
		financeStageArray,
		rules
	} = usePushOne()
	
	// const cityList = cityData.data
	
	// const provinces = cityList.map((item, index) => item.name)
	
	// const 
	
	// console.log(provinces);
	
	const getEl = async () => {
		return await formEl(valiForm.value)	
	}

	defineExpose({
	  getEl
	})

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
<!-- :rules="rules" -->
	<uni-forms class="push-wrapper-forms" :rules="rules" ref="valiForm" :modelValue="baseFormData">

		<uni-forms-item label="项目名称" :labelWidth="80" name="projectName">
			<uni-easyinput v-model="baseFormData.projectName" placeholder="项目名称" />
		</uni-forms-item>

		<uni-forms-item label="城市" :labelWidth="80" name="city">
			<picker mode="multiSelector" @change="bindPickerChange" @columnchange="bindMultiPickerColumnChange"
				:value="multiIndex" :range="multiArray">
				<div class="bottom-line">
					<span class="text" v-if="baseFormData.city">{{ baseFormData.city }}</span>
					<span class="text desc" v-else>请选择城市</span>
					<uni-icons class="icon" type="bottom" color="#DCDFE6" size="22"></uni-icons>
				</div>
			</picker>
		</uni-forms-item>

		<uni-forms-item label="详细地址" :labelWidth="80" name="location">
			<uni-easyinput v-model="baseFormData.location" placeholder="详细地址" />
		</uni-forms-item>

		<uni-forms-item label="参与人数" :labelWidth="80" name="attendance">
			<uni-easyinput v-model="baseFormData.attendance" placeholder="参与人数" />
		</uni-forms-item>

		<uni-forms-item label="规模" :labelWidth="80" name="scale">
			<uni-easyinput v-model="baseFormData.scale" placeholder="规模" />
		</uni-forms-item>

		<uni-forms-item label="融资阶段" :labelWidth="80" name="financeStage">
			<picker @change="pickerChange" :range="financeStageArray" data-key="financeStage"
				:data-ars="financeStageArray">
				<div class="bottom-line">
					<span class="text" v-if="baseFormData.financeStage">{{ baseFormData.financeStage }}</span>
					<span class="text desc" v-else>请选择融资阶段</span>
					<uni-icons class="icon" type="bottom" color="#DCDFE6" size="22"></uni-icons>
				</div>
			</picker>
		</uni-forms-item>

		<uni-forms-item label="项目标签" :labelWidth="80" name="projectlabel">
			<uni-easyinput v-model="baseFormData.projectlabel" placeholder="项目标签" />
		</uni-forms-item>

		<uni-forms-item label="项目介绍" :labelWidth="80" name="projectInfo">
			<uni-easyinput class="tarea" type="textarea" v-model="baseFormData.projectInfo" placeholder="项目介绍" />
		</uni-forms-item>
	</uni-forms>
	
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
