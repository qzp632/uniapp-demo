<script setup>
	import {
		ref,
		effect,
		reactive
	} from 'vue'
	import TopNav from '@/components/topNav/TopNav.vue'
	import PushOne from './PushProjectComponent/PushOne.vue'
	import PushTow from './PushProjectComponent/PushTow.vue'
	import PushThree from './PushProjectComponent/PushThree.vue'
	import LaEl from '@/pages/label/label.vue'

	const active = ref(0)
	const currentRef0 = ref(null)
	const currentRef1 = ref(null)
	const currentRef2 = ref(null)
	const elArs = ref([])
	const isLabel = ref(false)
	
	const refArs = [ currentRef0, currentRef1]
		
	const list1 = ref([{
		title: '基本信息'
	}, {
		title: '资料上传'
	}, {
		title: '添加资源'
	}])
	
	const projectLabels = ref([])
	
	const nextPush = async () => {

		const el = await refArs[active.value].value.getEl();
		let elStr = JSON.stringify(el)
		if (elArs.value.indexOf(elStr) < 0) {
			elArs.value.push(elStr)
		}
		active.value++
	}
	
	const prevPush = () => {
		active.value--
	}
	
	const result = async () => {
		const newEls = []
		const el = await currentRef2.value.ars;
		// console.log(el);
		let elStr = JSON.stringify(el)
		if (elArs.value.indexOf(elStr) < 0) {
			elArs.value.push(elStr)
		}
		
		elArs.value.forEach((item, el) => {
			newEls.push(JSON.parse(item))
		})
		
		console.log('newEls[000]', newEls[0]);
		console.log('newEls[1]', newEls[1]);
		console.log('newEls[length]', newEls[newEls.length-1]);
		
	}
	
	const onLabelEl = () => {
		isLabel.value = true
	}
	
	const setLabels = async (ars) => {
		await onClose()
		
		// console.log(currentRef0.value);
		currentRef0.value.setProjectlabel(ars);
		// projectLabels.value = ars
	}
	
	const onClose = () => {
		isLabel.value = false
	}
	
	
	
</script>

<template>

	<TopNav v-if="!isLabel" :back="true" title="发布项目" />
	
	<TopNav v-else :close="true" @onClose="onClose" title="选择标签" />

	<div class="push-wrapper" v-show="!isLabel">
		
		<uni-steps style="margin: 20rpx 0 50rpx;" :options="list1" :active="active" />
		<div v-show="active == 0" class="topbox">
			<PushOne ref="currentRef0" @labelEl="onLabelEl" ></PushOne>
			<button class="btn" type="primary" @click="nextPush()">下一步</button>
		</div>
	
		<div v-show="active == 1" class="topbox">
			<PushTow ref="currentRef1"></PushTow>
			<div class="push-btn">
				<button class="btn" type="primary" @click="prevPush">上一步</button>
				<button class="btn" type="primary" @click="nextPush">下一步</button>
			</div>
		</div>
		
		<div v-show="active == 2" class="topbox">
			<PushThree ref="currentRef2"></PushThree>
			<div class="push-btn">
				<button class="btn" type="primary" @click="prevPush">上一步</button>
				<button class="btn" type="primary" @click="result">确认</button>
			</div>
		</div>
		
	</div>

	<!-- <LaEl v-show="isLabel" @setLabels="setLabels"></LaEl> -->
</template>

<style lang="scss" scoped>
	.push-wrapper ::v-deep.is-input-border {
		border: none;
		border-bottom: 2rpx solid #DCDFE6;
		border-radius: 0;
	}
	.push-wrapper ::v-deep.is-textarea  {
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

		.push-btn {
			display: flex;
			.btn {
				flex: 1;
				margin: 10rpx;
			}
		}
		.topbox {
			margin-top: 50rpx;
		}
	}
</style>

