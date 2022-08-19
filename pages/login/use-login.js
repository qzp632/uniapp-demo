import {
	ref,
	reactive
} from 'vue'

export default function useLogin() {

	const valiForm = ref(null)

	const valiFormData = reactive({
		telephone: '',
		password: '',
	})

	const rules = {
		telephone: {
			rules: [{
				required: true,
				errorMessage: '手机号不能为空'
			}]
		},
		password: {
			rules: [{
				required: true,
				errorMessage: '密码不能为空'
			}]
		}
	}

	return {
		valiForm,
		valiFormData,
		rules
	}
}
