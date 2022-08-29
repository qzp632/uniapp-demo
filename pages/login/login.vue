<script setup>
	import TopNav from '@/components/topNav/TopNav.vue'
	import useLogin from './use-login.js'
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
	} = useLogin()

	const submit = async (refEl) => {

		await formEl(refEl)

		const result = await axios.post({
			url: '/user/login', //仅为示例，并非真实接口地址。
			data: {
				"password": valiFormData.password, //密码
				"telephone": valiFormData.telephone //手机号
			}
		})
		
		const path = uni.getStorageSync('path') || '/pages/home/home'

		redirectTo(path)
	}

	const register = () => {
		redirectTo('/pages/register/register')
	}

	const forgetPwd = () => {
		redirectTo('/pages/forgetPwd/forgetPwd')
	}
</script>

<template>
	<TopNav :home="true" title="登录" />
	<view class="login-wrapper">
		<!-- <TopNav title="登录" /> -->
		
		<view class="title">欢迎回来!</view>

		<view class="example">
			<!-- 基础表单校验 -->
			<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-position="top">
				<uni-forms-item label="手机号码" required name="telephone">
					<uni-easyinput v-model="valiFormData.telephone" placeholder="请输入手机号码" />
				</uni-forms-item>
				<uni-forms-item label="密码" required name="password">
					<uni-easyinput v-model="valiFormData.password" placeholder="8-18位不含特殊字符的数字,字母组合" />
				</uni-forms-item>
			</uni-forms>
			<button type="primary" @click="submit(valiForm)">登录</button>
			<view class="no-password">
				<text @click="forgetPwd">忘记密码?</text>
			</view>
			<view class="no-account">
				<text class="account">还没有账号?</text>
				<text class="register" @click="register">马上注册</text>
			</view>
		</view>
	</view>

</template>

<style lang="scss" scoped>
	.login-wrapper {
		padding: 30rpx;
		box-sizing: border-box;

		.title {
			font-size: 36rpx !important;
			margin: 50rpx 0 100rpx;
		}

		.no-password {
			text-align: center;
			padding: 20rpx 0;
			font-size: 24rpx;
			color: blue;
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
