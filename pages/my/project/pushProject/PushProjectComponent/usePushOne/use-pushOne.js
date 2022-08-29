import {
	reactive,
	ref
} from 'vue'
import {
	axios
} from '@/utils/axios.js'
import {
	setStr,
	navigateTo
} from '@/utils/index.js'
export default function usePushOne() {
	const valiForm = ref(null)
	
	const {
		baseFormData,
		multiIndex,
		multiArray
	} = reactive({
		multiIndex: [0, 0, 0],
		multiArray: [
			['上海', '江苏', '浙江'],
			['闵行区', '浦东新区', '徐汇区']
		],
		baseFormData: {
			projectName: '',
			city: '',
			location: '',
			attendance: '',
			scale: '',
			financeStage: '',
			projectlabel: '',
			projectInfo: '',
			imageValue: '',
			license: '',
			certification: ''
		}
	})

	const rules = {
		projectName: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		city: {
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
		},
		attendance: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		scale: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		financeStage: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		projectlabel: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		projectInfo: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		}
	}


	const bindMultiPickerColumnChange = (e) => {
		multiIndex[e.detail.column] = e.detail.value
		switch (e.detail.column) {
			case 0: //拖动第1列
				switch (multiIndex[0]) {
					case 0:
						multiArray[1] = ['闵行区', '浦东新区', '徐汇区']
						break
					case 1:
						multiArray[1] = ['语文', '数学', '化学']
						break
					default:
						multiArray[1] = ['奔驰', '劳斯莱斯', '布加迪']
				}
				multiIndex.splice(1, 1, 0)
				multiIndex.splice(2, 1, 0)
				break
		}
	}

	const bindPickerChange = (e) => {
		baseFormData.city = [multiArray[0][multiIndex[0]], multiArray[1][multiIndex[1]]].join('/')
	}

	// const trueFalseArray = ref(['是', '否'])
	const financeStageArray = ref(['天使轮', 'A轮', '为融资', '不需要融资'])

	const pickerChange = (e) => {
		let index = e.detail.value
		let key = e.target.dataset.key
		let ars = e.target.dataset.ars
		baseFormData[key] = ars[index]
	}


	const setImg = (key) => {
		uni.chooseImage({
			count: 1, //默认9
			sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			sourceType: ['album'], //从相册选择
			success: async function(res) {

				const tempFilePaths = res.tempFilePaths;
				await axios.upload({
					url: '/yqbfile/upload',
					filePath: tempFilePaths[0]
				})

				baseFormData[key] = res.tempFilePaths[0]

			}
		});
	}

	// const getImg = (img) => {
	// 	if (!img) return

	// 	setStr("http://yiqima.vip/yqbfile/ef763ec6-88c7-4df8-b4b5-eb213de95c2d.pdf")

	// 	navigateTo('/pages/webview/webview')
	// }

	return {
		valiForm,
		baseFormData,
		multiIndex,
		multiArray,
		bindMultiPickerColumnChange,
		bindPickerChange,
		pickerChange,
		financeStageArray,
		setImg,
		rules
	}
}
