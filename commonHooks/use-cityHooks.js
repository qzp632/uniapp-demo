import {
	effect,
	reactive,
	ref
} from 'vue'

export default function useCityHooks(datas, nums) {
	if (!nums) console.warn('useCityHooks需要传入第二个为数值的参数');
	
	let Indexs = []
	for (let i = 0; i < nums; i++) {
		Indexs.push(0)
	}
	
	const multiIndex = ref(Indexs)
	const multiArray = ref([])
	const culms1 = ref([])
	const culms2= ref([])
	const culms3 = ref([])
	
	effect(() => {
		
	})
	
	
	
	// console.log(multiIndex);
	// const multiArray = ref([])
	// // const multiIndex = ref([0,0])
	// const cityList = ref([])
	// const provinces = ref([])
	// const citys = ref([])
	// const countys = ref([])

	// effect(async () => {
	// 	const {
	// 		province
	// 	} = await getProvinceCity()

	// 	cityList.value = province

	// 	provinces.value = province.map((item, index) => item.provname)

	// 	citys.value = province[0].city.map((item, index) => item.cityname)

	// 	multiArray.value = [provinces.value, citys.value]

	// 	// countys.value = cityList[0].pchilds[0].cchilds.map((item, index) => item.name)
	// 	// console.log(res);
	// })

	

	// const bindMultiPickerColumnChange = (e) => {
	// 	multiIndex[e.detail.column] = e.detail.value

	// 	switch (e.detail.column) {
	// 		case 0: //拖动第1列
	// 			multiArray.value[1] = cityList.value[multiIndex[0]].city.map((item, index) => item.cityname)
	// 			// multiArray[2] = cityList.value[multiIndex[0]].pchilds[0].cchilds.map((item, index) => item.name)

	// 			// console.log(cityList[multiIndex[0]].pchilds[0])


	// 			multiIndex.splice(1, 1, 0)
	// 			// multiIndex.splice(2, 1, 0)
	// 			break;
	// 			// 	case 1: //拖动第1列
	// 			// 		// const p = cityList[multiIndex[0]]
	// 			// 		multiArray[2] = cityList[multiIndex[0]].pchilds[multiIndex[1]].cchilds.map((item, index) => item.name)


	// 			// 		console.log(multiIndex[1])

	// 			// 		multiIndex.splice(2, 1, 0)
	// 			// 		break
	// 	}
	// }

	// const bindPickerChange = (e) => {
	// 	console.log('eee', cityList.value[multiIndex[0]]);
	// 	const codeObj = cityList.value[multiIndex[0]]
	// 	const code1 = codeObj.locationcode
	// 	const code2 = codeObj.city[multiIndex[1]].locationcode
	// 	// const code3 = codeObj.pchilds[multiIndex[1]].cchilds[multiIndex[2]].code
	// 	baseFormData.cityObj.str = [multiArray.value[0][multiIndex[0]], multiArray.value[1][multiIndex[1]]].join('/')
	// 	baseFormData.cityObj.codes = [code1, code2]
	// }


	// return {

	// 	multiIndex,
	// 	multiArray,
	// 	bindMultiPickerColumnChange,
	// 	bindPickerChange,
	// 	pickerChange,
	// 	financeStageArray,
	// 	scaleArray,
	// 	setImg,
	// 	rules
	// }
}
