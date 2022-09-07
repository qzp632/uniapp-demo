import { axios } from './axios.js'

export async function getProvinceCity() {

	
	const ProvinceCity = await axios.get({
		url: '/appconfig/getProvinceCity' //仅为示例，并非真实接口地址。
	})
	
	
	return ProvinceCity.content
}

