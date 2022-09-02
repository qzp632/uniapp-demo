<script setup>
	import { ref, effect, onMounted, watch } from 'vue'
	import usePushOne from './usePushKey/use-pushOne.js'
	
	import {
		formEl,
		navigateTo,
		str
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
		scaleArray,
		rules
	} = usePushOne()
	
	// const props = defineProps({
	// 	projectLabels: {
	// 		type: Array,
	// 		default: []
	// 	}
	// })
	
	// watch(() => props, () => {
	// 	console.log(9877);
	// })

	const emit = defineEmits(['labelEl'])
	
	uni.$on('getLb',function(data){
		console.log('data', data);
		baseFormData.projectlabel = data.length ? data : ''
	})
	
	const getLabel = (e) => {

		const target = e?.target || e?.path[0]

		if (target.dataset.key === 's') {
			return
		}
		// emit('labelEl')
		navigateTo("/pages/label/label")
	}
	
	const getEl = async () => {
		return await formEl(valiForm.value)	
	}
	
	const setProjectlabel = (ars) => {
		console.log(ars);
		baseFormData.projectlabel = ars
	}
	
	defineExpose({
		setProjectlabel,
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

	<uni-forms class="push-wrapper-forms" :rules="rules" ref="valiForm" :modelValue="baseFormData">

		<uni-forms-item label="项目名称" :labelWidth="80" name="projectName">
			<uni-easyinput v-model="baseFormData.projectName" placeholder="项目名称" />
		</uni-forms-item>

		<uni-forms-item label="城市" :labelWidth="80" name="cityObj">
			<picker mode="multiSelector" @change="bindPickerChange" @columnchange="bindMultiPickerColumnChange"
				:value="multiIndex" :range="multiArray">
				<div class="bottom-line">
					<span class="text" v-if="baseFormData.cityObj.str">{{ baseFormData.cityObj.str }}</span>
					<span class="text desc" v-else>请选择城市</span>
					<uni-icons class="icon" type="bottom" color="#DCDFE6" size="22"></uni-icons>
				</div>
			</picker>
		</uni-forms-item>

		<uni-forms-item label="详细地址" :labelWidth="80" name="location">
			<uni-easyinput v-model="baseFormData.location" placeholder="详细地址" />
		</uni-forms-item>

<!-- 		<uni-forms-item label="参与人数" :labelWidth="80" name="attendance">
			<uni-easyinput v-model="baseFormData.attendance" placeholder="参与人数" />
		</uni-forms-item> -->

		<uni-forms-item label="规模" :labelWidth="80" name="scale">
			<!-- <uni-easyinput v-model="baseFormData.scale" placeholder="规模" /> -->
			<picker @change="pickerChange" :range="scaleArray" data-key="scale"
				:data-ars="scaleArray">
				<div class="bottom-line">
					<span class="text" v-if="baseFormData.scale">{{ baseFormData.scale }}</span>
					<span class="text desc" v-else>请选择规模</span>
					<uni-icons class="icon" type="bottom" color="#DCDFE6" size="22"></uni-icons>
				</div>
			</picker>
		</uni-forms-item>

		<uni-forms-item label="财务阶段" :labelWidth="80" name="financeStage">
			<picker @change="pickerChange" :range="financeStageArray" data-key="financeStage"
				:data-ars="financeStageArray">
				<div class="bottom-line">
					<span class="text" v-if="baseFormData.financeStage">{{ baseFormData.financeStage }}</span>
					<span class="text desc" v-else>请选择财务阶段</span>
					<uni-icons class="icon" type="bottom" color="#DCDFE6" size="22"></uni-icons>
				</div>
			</picker>
		</uni-forms-item>

		<uni-forms-item label="项目标签" :labelWidth="80" name="projectlabel">
			<div class="bottom-line" @click="getLabel($event)">
				<div class="text" v-if="baseFormData.projectlabel">
					
					<span class="tab" data-key="s" v-for="(item, index) in baseFormData.projectlabel" :key="index">{{ item.txt }}</span>
<!-- 					<span class="tab" data-key="s">33333</span>
					<span class="tab" data-key="s">4444444</span>
					<span class="tab" data-key="s">66666666666</span>
					<span class="tab" data-key="s">777777777</span> -->
					
					
					<!-- <span class="text" >{{ baseFormData.projectlabel }}</span> -->
				</div>
				<!-- <span class="text" v-if="baseFormData.projectlabel">{{ baseFormData.projectlabel }}</span> -->
				<span class="text desc" v-else >请选项目标签</span>
				<uni-icons class="icon" type="right" color="#DCDFE6" size="22"></uni-icons>
			</div>
			<!-- <uni-easyinput v-model="baseFormData.projectlabel" placeholder="项目标签" /> -->
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
		min-height: 35px;
		box-sizing: border-box;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2rpx solid #DCDFE6;

		.text {
			margin-left: 20rpx;
			height: 100%;
			display: flex;
			align-items: center;
			flex: auto;
			flex-wrap: wrap;
			.tab {
				background: #8f939c;
				padding: 10rpx;
				border-radius: 10rpx;
				border: 2px solid #fff;
				color: #fff;
				// margin-right: 4rpx;
			}
		}

		.desc {
			color: #999;
			font-size: 24rpx;
		}

		.icon {
			margin-right: 20rpx;
			// height: 100%;
			// display: flex;
			// align-items: center;
		}
	}
</style>
