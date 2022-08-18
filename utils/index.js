export const setStorage = (key, value) => {
	try {
		uni.setStorageSync(key, value);
	} catch (e) {
		console.warn(e.message);
	}
}

export const formEl = (refEl) => {
	return new Promise((resolve, reject) => {
		refEl.validate().then(res => {
			resolve(res)
		}).catch(err => {
			console.warn('err', err);
		})
	})
}

export const redirectTo = (path, deep) => {
	uni.redirectTo({
		url: path,
		animationDuration: deep || 0
	})
}
