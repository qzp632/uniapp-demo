<script setup>
	import cookies from 'weapp-cookie'
	
	import {
		setStorage,
		redirectTo,
		navigateTo
	} from '@/utils/index.js'
	
	function getIcon(icons) {
		let iconObj = {}
		icons.forEach((type, index) => {
			iconObj[`icon${index+1}`] = {
				color: '#000',
				size: '22',
				type
			}
		})
		return iconObj
	}

	const {
		icon1,
		icon2,
		icon3,
		icon4,
		icon5,
		icon6,
		icon7
	} = getIcon(['navigate', 'location', 'person-filled', 'chat-filled', 'heart-filled', 'star-filled', 'gear'])
	
	const getBasicInfo = () => {
		navigateTo('/pages/my/basicInfo/basicInfo')
	}
	
	const loginOut = () => {

		cookies.remove('telephone')
		cookies.remove('token')
		/*#ifdef H5*/
		document.cookie="telephone="
		document.cookie="token="
		/*#endif*/

		setStorage('path', '')
		redirectTo('/pages/login/login')
	}

</script>
<script>
	import { options } from '@/utils/index.js'
	export default { options }
</script>

<template>
	<uni-list class="u-li">
		<uni-list-item class="l-it" :show-extra-icon="true" showArrow :extra-icon="icon1" title="浏览历史" />
		<uni-list-item class="l-it" :show-extra-icon="true" showArrow :extra-icon="icon2" title="权益转让">
			<template v-slot:footer>
				<span class="u-t">点击进入到交易市场</span>
			</template>
		</uni-list-item>
		<uni-list-item class="l-it" :show-extra-icon="true" showArrow :extra-icon="icon3" title="地址管理" />
		<uni-list-item @click="getBasicInfo" class="l-it" link="navigateTo" :show-extra-icon="true" showArrow :extra-icon="icon4" title="个人信息管理" />
		<uni-list-item class="l-it" :show-extra-icon="true" showArrow :extra-icon="icon5" title="xxxxxx">
			<template v-slot:footer>
				<span class="u-t">xxxx</span>
			</template>
		</uni-list-item>
		<uni-list-item class="l-it" :show-extra-icon="true" showArrow :extra-icon="icon6" title="xxxx" />
		<uni-list-item class="l-it" :show-extra-icon="true" showArrow :extra-icon="icon7" title="设置" />
		<uni-list-item class="l-it" :show-extra-icon="true" link="redirectTo" showArrow :extra-icon="icon7" title="退出登录" @click="loginOut" />
	</uni-list>
</template>

<style lang="scss" scoped>
	.u-li ::v-deep.uni-list {
		background-color: transparent;
	}
	.u-li ::v-deep.uni-list-item {
		background-color: transparent;
	}
	
	.u-li {
		background: transparent;
		.l-it {
			background: transparent;
			.u-t {
				display: flex;
				align-items: center;
				font-size: 24rpx;
				color: #ccc;
			}
		}
	}
</style>
