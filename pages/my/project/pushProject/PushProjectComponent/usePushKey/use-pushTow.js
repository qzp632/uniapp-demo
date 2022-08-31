import {
	reactive,
	ref
} from 'vue'
import {
	axios
} from '@/utils/axios.js'

export default function usePushTow() {
	const valiForm = ref(null)
	const imgArs = ref([])
	const popup = ref(null)
	const currentImg = ref(null)
	const currentImgIndex = ref(0)
	const currentImgkey = ref(null)
	const isLoading = ref(false)
	
	const {
		baseFormData
	} = reactive({
		baseFormData: {
			imageValues: [],
			licenses: [],
			certifications: []
		}
	})

	const rules = {
		imageValues: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		licenses: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		},
		certifications: {
			rules: [{
				required: true,
				errorMessage: '不能为空'
			}]
		}
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
					
						await axios.upload({
							url: '/yqbfile/upload',
							filePath: path
						})
						
						temp.push(path)
						baseFormData[key].push(path)

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

		// setStr("http://yiqima.vip/yqbfile/ef763ec6-88c7-4df8-b4b5-eb213de95c2d.pdf")

		// navigateTo('/pages/webview/webview')
	}
	
	const delImg = () => {
		baseFormData[currentImgkey.value].splice(currentImgIndex.value, 1)
		closePopup()
	}

	return {
		popup,
		valiForm,
		baseFormData,
		currentImg,
		getPopup,
		closePopup,
		setImg,
		rules,
		getImg,
		delImg,
		isLoading
	}
}
