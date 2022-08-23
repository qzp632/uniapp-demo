import cookies from 'weapp-cookie'

let baseUrl = 'http://120.48.123.236:8080'

/*#ifdef H5*/
baseUrl = '/api'
/*#endif*/


/**
 * @Description: 封装请求方法
 * 
 * @author qzp
 * 
 * @param 
 * @return 
 * 
 * @createTime: 2022-08-19 09:31:28
 * @name by 秦智鹏
 */
export const axios = {
	islogin: () => {
		return new Promise((resolve, reject) => {
			uni.request({
				url: baseUrl + '/login/islogin' || '',
				method: 'GET',
				fail: (err) => {
					console.log(err);
					uni.showToast({
						icon: 'error',
						title: err.message,
						duration: 2000
					});
					uni.redirectTo({
						url:'/pages/login/login',
						animationDuration: 0
					})
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
						uni.redirectTo({
							url:'/pages/login/login',
							animationDuration: 0
						})
					}
				}
			})
		})
	},
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
	post: (options = {}) => {
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
