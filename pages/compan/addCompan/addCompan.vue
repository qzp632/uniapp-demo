<script setup>
	import { ref, effect, reactive } from 'vue'
	import { axios } from '@/utils/axios.js'
	import { formEl } from '@/utils/index.js'
	import TopNav from '@/components/topNav/TopNav.vue'
	
	const itemCom = uni.getStorageSync('edit_com')
	
	const getLisenceUrl = () => {
		
		// console.log('itemCom', itemCom);
		if (!itemCom) return []
		const lisenceurls = itemCom.lisenceurl.split(';')
		const items = lisenceurls.map(item => {
			return {
				url: `http://www.yiqima.vip/yqbfile/${item}`,
				name: item
			}
		})
		return items
	}
	
	const popup = ref(null)
	const valiForm = ref(null)
	const currentImg = ref(null)
	const currentImgIndex = ref(0)
	const currentImgkey = ref(null)
	const { baseFormData } = reactive({
		baseFormData: {
			companyname: '',
			companyno: '',
			setupdate: '',
			accountno: '',
			alipayno: '',
			legalperson: '',
			location: '',
			...itemCom,
			lisenceurl: getLisenceUrl(),
			
		}
	})
	

	const rules = {
		companyname: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		companyno: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		location: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		}
	}
	
	const setImg = (key, num) => {
		let count = 9 - baseFormData[key].length
		uni.chooseImage({
			count: num || count, //默认9
			sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			sourceType: ['album'], //从相册选择
			success:async function(res) {
				uni.showLoading({
					title: '图片上传中'
				});
	
				const temp = []
				const tempFilePaths = res.tempFilePaths;
				
				tempFilePaths.forEach(async path => {
					
					const load = await axios.upload({
						url: '/yqbfile/upload',
						filePath: path
					})
					
					// console.log(load);
					
					temp.push(path)
					baseFormData[key].push({
						url: path,
						name: load
					})
					
					// console.log(baseFormData);

					if (temp.length === tempFilePaths.length) {
						uni.hideLoading();
						uni.showToast({
							title: '上传成功',
							duration: 2000
						});
					}
				})
			}
		});
	}
	
	const getImg = (img) => {
		if (!img) return
		
		uni.previewImage({
			urls: [img]
		})
		closePopup()
	}
	
	const delImg = () => {
		baseFormData[currentImgkey.value].splice(currentImgIndex.value, 1)
		closePopup()
	}
	
	const getPopup = (item, index, key) => {
		currentImg.value = item
		currentImgIndex.value = index
		currentImgkey.value = key
		popup.value.open("bottom")
	}
	
	const closePopup = () => {
		popup.value.close()
	}
	
	const result = async () => {
		let result
		const el = await formEl(valiForm.value)	
		const lisenceurl = el.lisenceurl.map(item => item.name).join(';')
		// console.log(lisenceurl);
		let params = {
			...el,
			lisenceurl
		}
		
		if (itemCom) {
			result = await axios.post({
				url: '/project/updateCompany', //仅为示例，并非真实接口地址。
				data: {
					...params,
					isactive: "1",
					cid: itemCom.cid,
					createby: uni.getStorageSync('user-id')
				}
			})
		} else {
			result = await axios.post({
				url: '/project/addCompany', //仅为示例，并非真实接口地址。
				data: params
			})
		}
		
		uni.$emit('addCom')
		// console.log('result', result);
		uni.navigateBack({
			delta: 1
		});
	
	}
</script>

<template>

	<TopNav :back="true" :title="itemCom ? '修改公司信息' : '新增公司'" />

	<div class="push-wrapper">

		<uni-forms :rules="rules" ref="valiForm" :modelValue="baseFormData">

			<uni-forms-item label="公司名称" :labelWidth="110" name="companyname">
				<uni-easyinput v-model="baseFormData.companyname" placeholder="公司名称" />
			</uni-forms-item>

			<uni-forms-item label="统一社会编码" :labelWidth="110" name="companyno">
				<uni-easyinput v-model="baseFormData.companyno" placeholder="统一社会编码" />
			</uni-forms-item>
			
			<uni-forms-item label="地址" :labelWidth="110" name="location">
				<uni-easyinput v-model="baseFormData.location" placeholder="公司地址" />
			</uni-forms-item>
			
			<uni-forms-item label="银行账户" :labelWidth="110" name="accountno">
				<uni-easyinput v-model="baseFormData.accountno" placeholder="公司银行账户" />
			</uni-forms-item>
			
			<uni-forms-item label="支付宝账户" :labelWidth="110" name="alipayno">
				<uni-easyinput v-model="baseFormData.alipayno" placeholder="公司支付宝账户" />
			</uni-forms-item>
			
			<uni-forms-item label="法人" :labelWidth="110" name="legalperson">
				<uni-easyinput v-model="baseFormData.legalperson" placeholder="公司法人" />
			</uni-forms-item>
			
			<uni-forms-item label="成立日期" :labelWidth="110" name="setupdate">
				<uni-datetime-picker type="date" placeholder="成立日期" :clear-icon="false" v-model="baseFormData.setupdate" />
			</uni-forms-item>
			
			<uni-forms-item label="公司描述" :labelWidth="110" name="companydes">
				<uni-easyinput class="tarea" type="textarea" v-model="baseFormData.companydes" placeholder="公司描述" />
			</uni-forms-item>
			
			<uni-forms-item class="lisence" label="上传营业执照" :labelWidth="110" name="lisenceurl">
				<div class="bottom-line bottom-line1">
					<image class="push-img"
						v-for="(item, index) in baseFormData.lisenceurl"
						:key="index"
						:src="item.url"
						@click="getPopup(item.url, index, 'lisenceurl')"
					></image>
					<div v-if="baseFormData.lisenceurl.length < 9" class="upload-img" @click="setImg('lisenceurl')">
						<div class="heng"></div>
						<div class="shu"></div>
					</div>
				</div>
			</uni-forms-item>
			
		</uni-forms>
		
		<button class="btn" type="primary" @click="result">确认</button>

		<uni-popup ref="popup" background-color="#fff">
			<div @click="getImg(currentImg, true)">预览</div>
			<div @click="delImg">删除</div>
		</uni-popup>
	</div>

</template>

<style lang="scss" scoped>
	.push-wrapper ::v-deep.is-input-border {
		border: none;
		border-bottom: 2rpx solid #DCDFE6;
		border-radius: 0;
	}

	.push-wrapper ::v-deep.is-textarea {
		border: 2rpx solid #DCDFE6;
		border-radius: 8rpx;
	}

	.push-wrapper ::v-deep.push-wrapper-three {
		.uni-forms-item {
			margin-bottom: 36rpx;
		}

	}

	.push-wrapper {
		width: 100%;
		position: absolute;
		padding: 30rpx 30rpx 30rpx;
		box-sizing: border-box;
		background: #fff;
		top: 88px;
		/*#ifdef H5*/
		top: 44px;
		/*#endif*/
		bottom: 0;
		overflow: auto;
	}
	
	.bottom-line {
		display: flex;
		font-size: 14px;
		box-sizing: border-box;
		flex-direction: row;
		align-items: center;
		justify-content: left;
		flex-wrap: wrap;
	}
	
	.push-img, .upload-img {
		width: 200rpx;
		height: 200rpx;
		margin: 20rpx 10rpx ;
		background: #fff;
		border-radius: 18rpx;
	}
	.upload-img {
		background: #fff;
		position: relative;
		border: 2rpx solid #ccc;
		.heng {
			position: absolute;
			width: 100rpx;
			height: 10rpx;
			background: #DCDFE6;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		.shu {
			position: absolute;
			width: 10rpx;
			height: 100rpx;
			background: #DCDFE6;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
	.lisence {
		flex-direction: column!important;
	}
</style>
