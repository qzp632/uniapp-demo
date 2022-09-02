<script setup>
	import { ref, effect } from 'vue'
	import {
		axios
	} from '@/utils/axios.js'
	import TopNav from '@/components/topNav/TopNav.vue'
	
	const newArr = ref([])
	
	const labelval = ref('')
	
	const currentIndex = ref('')
	
	const labelList = ref([])
	
	effect(async() => {
		const result = await axios.post({
			url: '/appconfig/common', //仅为示例，并非真实接口地址。
			data: {
				"configkey": "projectLabel"
			}
		})
		
		const res = result.content[0].configvalue.split('；')
		const newRes = res.map(r => ({txt: r}))
		labelList.value = newRes
	})
	
	const getLabel = (item, index) => {
		if(item.flag) return
		if(newArr.value.length > 4) return
		item.flag = true
		newArr.value.push(item)
	}
	
	const setVal = () => {
		if(!labelval.value) return false
		newArr.value.push({ txt: labelval.value, flag: true})
		labelval.value = ''
	}
	
	const del = (item, index) => {
		newArr.value.splice(index, 1)
		labelList.value.forEach((el, index) => {
			if(JSON.stringify(item) === JSON.stringify(el)) {
				el.flag = false
			}
		})
	}
	
	const submit = () => {
		uni.$emit('getLb',newArr.value)
		uni.navigateBack({
			delta: 1
		});
	}

	
</script>

<template>

	<TopNav :back="true" title="标签选择" />

	<view class="basicInfo">
		<div class="top-in">
			<div class="tab-input-div" v-if="newArr.length < 5">
				<input class="tab-input" type="text" v-model="labelval" placeholder="自定义标签">
				<button class="tab-btn" type="primary" @click="setVal(labelval)">确认</button>
			</div>
			<div class="tab-box tab-box1">
				<div class="item" v-for="(item, index) in newArr" :key="index">
					<uni-tag
						:text="item.txt"
						type="primary"
					/>
					
					<span class="x" @click="del(item, index)">x</span>
				</div>
			</div>
			
		</div>

		<div class="tab-title">所有标签</div>
		<div class="tab-box">
			<uni-tag
				class="item" 
				v-for="(item, index) in labelList" 
				:text="item.txt"
				:key="index"
				 @click="getLabel(item, index)"
				:type="item.flag ? 'primary' : ''"
			/>
		</div>
		
		<button type="primary" @click="submit">确认</button>
	</view>
</template>

<style lang="scss" scoped>
.top-in {
	border-bottom: 2rpx solid #DCDFE6;
	.tab-input-div {
		width: 100%;
		margin: 40rpx 30rpx 0;
		display: flex;
		align-items: center;
		.tab-input {
			padding-left: 10rpx;
			height: 60rpx;
			border: 2rpx solid #DCDFE6;
		}
		.tab-btn {
			height: 60rpx;
			width: 120rpx;
			display: flex;
			justify-content: center;
			line-height: 62rpx;
			font-size: 26rpx;			margin-left: 20rpx;
		}
	}
}

.tab-title {
	margin: 40rpx 30rpx 0;
}
.tab-box {
	margin: 40rpx 30rpx 0;
	display: flex;
	flex-wrap: wrap;
	.item {
		margin: 13rpx;
		font-size: 28rpx;
	}
}
.tab-box1 {
	margin-bottom: 30rpx;
	.item {
		position: relative;
		.x {
			width: 40rpx;
			height: 40rpx;
			font-size: 40rpx;
			position: absolute;
			top: -25rpx;
			right: -20rpx;
			color: #000;
		}
	}
}
</style>
