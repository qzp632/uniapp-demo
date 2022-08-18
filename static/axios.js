let baseUrl = 'http://120.48.123.236:8080'

/*#ifdef H5*/
baseUrl = ''
/*#endif*/
	
export const axios = {
	get: (options = {}) => {
		return new Promise((resolve, reject) => {
			uni.request({
				url: baseUrl + options.url || '',
				method: 'GET',
				data: options.data || {},
				fail: (err) => {
					uni.showToast({
						icon: 'error',
						title: err.message,
						duration: 2000
					});
				},
				success: (res) => {
					if (res.data.code == 200) {
						return resolve(res.data)
					} else {
						uni.showToast({
							icon: 'error',
							title: res.data.message || res.data.msg,
							duration: 2000
						});
					}
				}
			})
		})
	},
	post:(options = {}) => {
		return new Promise((resolve, reject) => {
			uni.request({
				url: baseUrl + options.url || '',
				method: 'POST',
				data: options.data || {},
				header: options.header || {},
				fail: (err) => {
					uni.showToast({
						icon: 'error',
						title: err.message,
						duration: 2000
					});
				},
				success: (res) => {
					if (res.data.code == 200) {
						return resolve(res.data)
					} else {
						uni.showToast({
							icon: 'error',
							title: res.data.message || res.data.msg,
							duration: 2000
						});
					}
				}
			})
		})
	},
}

