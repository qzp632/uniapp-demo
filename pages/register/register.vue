<script setup>
	import TopNav from '@/components/topNav/TopNav.vue'
	import useRegister from './use-register.js'
	import {
		axios
	} from '@/utils/axios.js'
	import {
		setStorage,
		formEl,
		redirectTo
	} from '@/utils/index.js'

	const {
		valiForm,
		valiFormData,
		rules
	} = useRegister()
	
	
	const submit = async (refEl) => {
		await formEl(refEl)

		const result = await axios.post({
			url: '/user/register', //仅为示例，并非真实接口地址。
			data: {
				"code": valiFormData.code, //验证码
				"password": valiFormData.password, //密码
				"telephone": valiFormData.telephone //手机号
			}
		})

		// setStorage('token', result.content)

		redirectTo('/pages/home/home')
	}

	const getCode = async () => {
		const result = await axios.post({
			url: '/user/sendMsg', //仅为示例，并非真实接口地址。
			data: {
				"tel": valiFormData.telephone //手机号
			},
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			}
		})

		uni.showToast({
			title: '发送成功',
			duration: 2000
		});
	}

	const login = () => {
		redirectTo('/pages/login/login', 2000)
	}
	
	const onFieldChange = (name, value) => {
		valiForm.value.setValue(name,value)
	}
</script>

<template>
	<TopNav title="注册" />
	<view class="register-wrapper">
		<!-- <TopNav title="注册" /> -->
		
		<!-- <TopNav>注册</TopNav> -->
		<view class="title">欢迎注册!</view>

		<view class="example">
			<!-- 基础表单校验 -->
			<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-position="top">
				<uni-forms-item label="手机号码" required name="telephone">
					<uni-easyinput v-model="valiFormData.telephone" placeholder="请输入手机号码" />
				</uni-forms-item>
				<uni-forms-item label="密码" required name="password">
					<uni-easyinput v-model="valiFormData.password" placeholder="请输入密码" />
				</uni-forms-item>
				<uni-forms-item label="确认密码" required name="pwd">
					<uni-easyinput @change="onFieldChange('pwd', valiFormData.pwd)" v-model="valiFormData.pwd" placeholder="请输入确认密码" />
				</uni-forms-item>
				<uni-forms-item label="验证码" required name="code">
					<uni-easyinput v-model="valiFormData.code" placeholder="请输入验证码" />
				</uni-forms-item>
				<view class="get-code">
					<text @click="getCode">获取验证码</text>
				</view>
			</uni-forms>

		</view>

		<button class="btn" type="primary" @click="submit(valiForm)">注册</button>

		<view class="no-account">
			<text class="account">已有账号?</text>
			<text class="register" @click="login">马上登录</text>
		</view>
	</view>

</template>

<style lang="scss" scoped>
	.register-wrapper {
		padding: 0 30rpx;
		box-sizing: border-box;

		.title {
			font-size: 36rpx !important;
			margin: 50rpx 0 100rpx;
		}

		.example {
			position: relative;

			.get-code {
				position: absolute;
				text-align: right;
				padding-right: 20rpx;
				box-sizing: border-box;
				font-size: 28rpx;
				margin-top: 10rpx;
				right: 0;
				bottom: -40rpx;
			}
		}

		.btn {
			margin-top: 100rpx;
		}

		.no-account {
			width: 100%;
			height: 160rpx;
			font-size: 24rpx;
			line-height: 160rpx;
			text-align: center;
			position: fixed;
			left: 0;
			bottom: 0;

			.register {
				color: blue;
			}
		}
	}
</style>
