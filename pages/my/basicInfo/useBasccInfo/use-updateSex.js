import {
		ref,
		reactive
	} from 'vue'
	export default function useUpdateSex() {

		let newItem = {}
		const currentSex = ref('')
		const {
			statusTypes,
		} = reactive({
			statusTypes: [{
				value: '0',
				text: '先生',
				// checked: true
			}, {
				value: '1',
				text: '女士',
				// checked: false
			}]
		})


		const popup = ref(null)

		const setSex = () => {
			popup.value.open("bottom")
		}

		const getCurrentItem = (item) => {
			newItem = item
		}

		const closePopup = () => {
			popup.value.close()
		}

		const resultPopup = () => {
			currentSex.value = newItem.value
			popup.value.close()
		}

		const popupApi = {
			getCurrentItem,
			closePopup,
			resultPopup
		}

		return {
			popup,
			statusTypes,
			currentSex,
			setSex,
			popupApi
		}
	}
