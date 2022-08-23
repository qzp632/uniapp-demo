<script setup>
	import {
		ref,
		watch
	} from 'vue'
	import TabBar from '@/components/tabBar/TabBar.vue'
	import TopNav from '@/components/topNav/TopNav.vue'

	const num = ref(0)
	const add = () => {

		// document.cookie = "token="

		num.value += 0.01
		// uni.setScreenBrightness({
		// 	value: num.value,
		// 	success: function () {
		// 		console.log('success');
		// 	}
		// });
	}

	const jian = () => {

		num.value -= 0.01

	}

	watch(() => num.value, (newv) => {
		console.log(newv);
		uni.setScreenBrightness({
			value: newv,
			success: function() {
				console.log('success');
			}
		});
	})

	const checkIsSupportSoterAuthentication = () => {
		uni.checkIsSupportSoterAuthentication({
			success(res) {
				console.log(res);
			},
			fail(err) {
				console.log(err);
			},
			complete(res) {
				console.log(res);
			}
		})
	}
	const checkIsSoterEnrolledInDeviceFingerPrint = () => {
		uni.checkIsSoterEnrolledInDevice({
			checkAuthMode: 'fingerPrint',
			success(res) {
				console.log(res);
			},
			fail(err) {
				console.log(err);
			},
			complete(res) {
				console.log(res);
			}
		})
	}
	const checkIsSoterEnrolledInDeviceFaceID = () => {
		uni.checkIsSoterEnrolledInDevice({
			checkAuthMode: 'facial',
			success(res) {
				console.log(res);
			},
			fail(err) {
				console.log(err);
			},
			complete(res) {
				console.log(res);
			}
		})
	}
	const startSoterAuthenticationFingerPrint = () => {
		uni.startSoterAuthentication({
			requestAuthModes: ['fingerPrint'],
			challenge: '123456',
			authContent: '请用指纹解锁',
			success(res) {
				console.log(res);
			},
			fail(err) {
				console.log(err);
			},
			complete(res) {
				console.log(res);
			}
		})
	}
	const startSoterAuthenticationFaceID = () => {
		uni.startSoterAuthentication({
			requestAuthModes: ['facial'],
			challenge: '123456',
			authContent: '请用FaceID解锁',
			success(res) {
				console.log('222d', res);
			},
			fail(err) {
				console.log(err);
			},
			complete(res) {
				console.log(res);
			}
		})
	}
</script>

<template>
	<TopNav title="兴趣" />
	<!-- <TopNav>兴趣</TopNav> -->
	<div>dream</div>
	<button @click="add">加亮度</button>
	<button @click="jian">减亮度</button>
	<view class="content">
		<button type="primary" @click="checkIsSupportSoterAuthentication">检查支持的认证方式</button>
		<button type="primary" @click="checkIsSoterEnrolledInDeviceFingerPrint">检查是否录入指纹</button>
		<button type="primary" @click="checkIsSoterEnrolledInDeviceFaceID">检查是否录入FaceID</button>
		<button type="primary" @click="startSoterAuthenticationFingerPrint">开始指纹认证</button>
		<button type="primary" @click="startSoterAuthenticationFaceID">开始FaceID认证</button>
	</view>
	<TabBar currentPath="/pages/dream/dream"></TabBar>
</template>

<style lang="scss">

</style>
