import {
	navigateTo
} from '@/utils/index.js'
export default function useMyContent() {

	const iconList = [{
			icon: 'wallet',
			text: '我的项目',
			path: '/pages/my/project/project'
		},
		{
			icon: 'medal-filled',
			text: '我的资源'
		},
		{
			icon: 'cart',
			text: '集市订单'
		},
		{
			icon: 'tune',
			text: '一起吧'
		}
	]

	const getItem = (item) => {
		navigateTo(item.path)
	}

	return {
		iconList,
		getItem
	}
}
