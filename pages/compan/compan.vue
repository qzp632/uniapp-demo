<script setup>
	import { ref, effect } from 'vue'
	import {
		axios
	} from '@/utils/axios.js'
	import {
		navigateTo,
		setStorage
	} from '@/utils/index.js'
	import TopNav from '@/components/topNav/TopNav.vue'
	
	const isState = ref(null)
	const currentItem = ref(null)
	const compans = ref([])
	
	const options = ref([
        {
            text: '编辑',
			key: 1,
            style: {
                backgroundColor: '#007aff'
            }
        }, 
		{
            text: '删除',
			key: 2,
            style: {
                backgroundColor: '#dd524d'
            }
        }
    ])
	
	const runder = effect(async() => {
		const result = await axios.post({
			url: '/project/getCompanyList', //仅为示例，并非真实接口地址。
			data: {}
		})
		
		compans.value = result.content.companylist
		// console.log(result.content.companylist);
	})
	
	uni.$on('addCom',function(){
		runder()
	})
	
	const onClick = async(e) => {
		const state = e.content.key
		if (!state) return
		const item = currentItem.value

		if (state == 1) {
			setStorage('edit_com', item)
			navigateTo("/pages/compan/addCompan/addCompan")
		} else {
			const result = await axios.post({
				url: '/project/updateCompany', //仅为示例，并非真实接口地址。
				data: {
					...item,
					createby: uni.getStorageSync('user-id'),
					isactive: "0"
				}
			})
			
			uni.showToast({
				title:'删除成功'
			})
			runder()
		}
	}

	const swipeChange = (item) => {
		currentItem.value = item
	}
	
	const checkCom = (item) => {
		uni.$emit('getCom',{
			str: item.companyname
		})
		uni.navigateBack({
			delta: 1
		});
	}
	
	const add = () => {
		setStorage('edit_com', '')
		navigateTo("/pages/compan/addCompan/addCompan")
	}
</script>

<template>

	<TopNav :back="true" title="选择公司信息" />

	<view class="basicInfo">
		<uni-swipe-action>
			<uni-swipe-action-item :right-options="options" @change="swipeChange(item)" @click="onClick" v-for="(item, index) in compans" :key="index">
				<div class="action-item" @click="checkCom(item)">
					<span class="name">{{ item.companyname }}</span>
				</div>
			</uni-swipe-action-item>
			
		</uni-swipe-action>

				
		<button class="btn" type="primary" @click="add">
			<uni-icons type="plusempty" size="20" color="#fff"></uni-icons>
			新增公司信息
		</button>
	</view>
	
</template>

<style lang="scss" scoped>
	.action-item {
		width: 100%;
		height: 100rpx;
		// background: #ccc;
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid #ccc;
		.name {
			margin-left: 30rpx;
		}
	}
	.btn {
		width: 80%;
		// margin: 0 auto;
		position: fixed;
		bottom: 30rpx;
		left: 10%;
	}
</style>
