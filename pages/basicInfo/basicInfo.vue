<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import TabBar from '@/components/tabBar/TabBar.vue'
	import TopNav from '@/components/topNav/TopNav.vue'
	let newItem = {}
	const currentSex = ref('0')
	const {
		statusTypes,
	} = reactive({
		statusTypes: [{
			value: '0',
			text: '先生',
			// checked: true
		}, {
			value: '1',
			text: '女士',
			// checked: false
		}]
	})


	const popup = ref(null)

	const setSex = () => {
		currentSex.value = currentSex.value++
		popup.value.open("bottom")
	}
	
	const getCurrentItem = (item) => {
		newItem = item
	}
	
	const closePopup = () => {
		popup.value.close()
	}
	
	const resultPopup = () => {
		currentSex.value = newItem.value
		popup.value.close()
	}

</script>

<template>

	<TopNav :back="true" title="基本信息" />

	<view class="basicInfo">
		<h3 class="basicInfo-title">基本信息</h3>
		<image class="basicInfo-img"
			src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.puchedu.cn%2Fuploads%2F1%2F26%2F1162697150%2F3496822432.jpg&refer=http%3A%2F%2Fimg.puchedu.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663827473&t=ffbcf7fa58081eff3b13156e9e901246">
		</image>
		<uni-list class="u-li">
			<uni-list-item title="姓名" rightText="大圣"  />
			<uni-list-item title="认证实名" rightText="大圣" />
			<uni-list-item title="性别" :rightText="statusTypes[currentSex].text" showArrow link="navigateTo" @click="setSex" />
			<uni-list-item title="所在城市" rightText="上海" showArrow />
			<uni-list-item title="所在行业" rightText="教育 在线教育" showArrow />
			<uni-list-item title="行业经验" rightText="一年以下" showArrow />
			<uni-list-item title="显示经历" rightText="未提供职业经历" showArrow />

		</uni-list>
		<uni-easyinput type="textarea" placeholder="请输入自我介绍" />
		<span class="desc">简单清晰的介绍, 有助于合伙人在茫茫人海中一眼找到你哦</span>

		<uni-popup ref="popup" class="poo" background-color="#fff">
			<div class="popup-wrapper">
				<radio-group class="uni-list">
					<view v-for="(item, index) in statusTypes" :key="index" class="uni-list-item" @click="getCurrentItem(item)">
						<view class="uni-list-item__container">

							<label :for="item.value" class="ulable">
								<view class="uni-list-item__content">
									<text class="uni-list-item__content-title">{{ item.text }}</text>
								</view>
							</label>
							<view class="uni-list-item__extra">
								<span>{{ item.value == currentSex }}</span>
								<radio :id="item.value" :checked="item.value == currentSex" />
							</view>
						</view>
					</view>
				</radio-group>
				
				<view class="btn-wrapper">
					<button class="button popup-info" @click="closePopup"><text class="button-text">取消</text></button>
					<button class="button" type="primary" @click="resultPopup"><text class="button-text">完成</text></button>
				</view>
			</div>
		</uni-popup>
	</view>
</template>

<style lang="scss" scoped>
	.basicInfo ::v-deep.uni-list--border-top {
		background-color: transparent;
	}

	.basicInfo {
		margin: 20rpx;
		
		&-img {
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			margin: 0 auto;
			display: block;
			border: none;
		}

		.desc {
			font-size: 24rpx;
			color: #ccc;
		}

		.popup-wrapper {
			width: 100%;
			height: 200px;
			background: #fff;
			.ulable {
				display: block;
				width: 100%;
				height: 100%;
				padding: 30rpx;
				box-sizing: border-box;
			}

			.uni-list-item {
				border-bottom-style: solid;
				border-bottom-width: 1px;
				border-bottom-color: #eee;
				font-size: 14px;
			}

			.uni-list-item__container {
				/* #ifndef APP-NVUE */
				display: flex;
				width: 100%;
				box-sizing: border-box;
				/* #endif */
				// padding: 12px 15px;
				flex: 1;
				position: relative;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
			}

			.uni-list-item__content-title {
				font-size: 14px;
				color: #666;
			}
			.btn-wrapper {
				width: 100%;
				display: flex;
				margin-top: 60rpx;
				justify-content: center;
				align-items: center;
				.button {
					flex: 1;
					margin: 0 80rpx;
				}
			}
		}

	}
</style>
