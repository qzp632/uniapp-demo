import {
	ref,
	reactive
} from 'vue'

export default function useForgetPwd() {

	const valiForm = ref(null)

	const valiFormData = reactive({
		telephone: '',
		password: '',
		pwd: '',
		code: ''
	})

	const pw2 = (rule, value, data, callback) => {
		return new Promise((resolve, reject) => {

			if (value !== valiFormData.password) {
				reject(new Error('两次密码不一样'))
			} else {
				resolve()
			}
		})
	}

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
		},
		pwd: {
			rules: [{
				required: true,
				errorMessage: '确认密码不能为空'
			}, {
				validateFunction: pw2
			}]
		},
		code: {
			rules: [{
				required: true,
				errorMessage: '验证码不能为空'
			}]
		}
	}

	return {
		valiForm,
		valiFormData,
		rules
	}
}
