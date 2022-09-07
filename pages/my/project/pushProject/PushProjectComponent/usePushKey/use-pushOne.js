import {
	effect,
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

import {
	getProvinceCity
} from '@/utils/common.js'

import useCityHooks from '@/commonHooks/use-cityHooks.js'
export default function usePushOne() {
	const valiForm = ref(null)
	const multiArray = ref([])
	const cityList = ref([])
	const provinces = ref([])
	const citys = ref([])
	const countys = ref([])


	const {
		baseFormData,
		multiIndex,
		// multiArray
	} = reactive({
		multiIndex: [0, 0],
		// multiArray: [],
		baseFormData: {
			projectName: '',
			cityObj: {},
			loacation: '',
			attendance: '',
			company: '',
			companObj: {},
			// companyid: '上海xxxx科技有限公司',
			scale: '',
			financeStage: '',
			projectlabel: '',
			projectInfo: '',
			imageValue: '',
			license: '',
			certification: '',
			sityCodes: []
		}
	})

	effect(async () => {
		const {
			province
		} = await getProvinceCity()
		
		useCityHooks(province, 2)

		cityList.value = province

		provinces.value = province.map((item, index) => item.provname)

		citys.value = province[0].city.map((item, index) => item.cityname)

		multiArray.value = [provinces.value, citys.value]

		countys.value = province[0].city[0]?.cchilds?.map((item, index) => item.name)
		// console.log(res);
	})
	
	

	const rules = {
		projectName: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}, {
				maxLength: 50,
				errorMessage: '长度最大50个字符',
			}]
		},
		companObj: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		cityObj: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		loacation: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}, {
				maxLength: 50,
				errorMessage: '长度最大50个字符',
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
				multiArray.value[1] = cityList.value[multiIndex[0]].city.map((item, index) => item.cityname)
				// multiArray.value[2] = cityList.value[multiIndex[0]].city[0]?.cchilds?.map((item, index) => item.name)

				// console.log(cityList[multiIndex[0]].pchilds[0])


				multiIndex.splice(1, 1, 0)
				// multiIndex.splice(2, 1, 0)
				break;
				// 	case 1: //拖动第1列
				// 		// const p = cityList[multiIndex[0]]
				// 		multiArray[2] = cityList[multiIndex[0]].pchilds[multiIndex[1]].cchilds.map((item, index) => item.name)


				// 		console.log(multiIndex[1])

				// 		multiIndex.splice(2, 1, 0)
				// 		break
		}
	}

	const bindPickerChange = (e) => {
		console.log('eee', cityList.value[multiIndex[0]]);
		const codeObj = cityList.value[multiIndex[0]]
		const code1 = codeObj.locationcode
		const code2 = codeObj.city[multiIndex[1]].locationcode
		// const code3 = codeObj.pchilds[multiIndex[1]].cchilds[multiIndex[2]].code
		baseFormData.cityObj.str = [multiArray.value[0][multiIndex[0]], multiArray.value[1][multiIndex[1]]].join('/')
		baseFormData.cityObj.codes = [code1, code2]
	}

	// const trueFalseArray = ref(['是', '否'])

	const scaleArray = ref(['0——50W', '50W——100W', '100W——150W'])
	const financeStageArray = ref(['天使轮', 'A轮', 'B轮', 'C轮', 'D轮', '未融资', '不需要融资'])
	const companyArray = ref(['企业', '个人'])

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
		scaleArray,
		companyArray,
		setImg,
		rules
	}
}
