/**
  * @Description: 获取本地存储
  * 
  * @author qzp
  * 
  * @param {
	  key: 存储的名字，
	  value: 获取的值
	}
  * @return 
  * 
  * @createTime: 2022-08-19 09:32:02
  * @name by 秦智鹏
  */
export const setStorage = (key, value) => {
	try {
		uni.setStorageSync(key, value);
	} catch (e) {
		console.warn(e.message);
	}
}

/**
  * @Description: 验证表单提交
  * 
  * @author qzp
  * 
  * @param {refEl: dom元素}
  * @return 
  * 
  * @createTime: 2022-08-19 09:39:35
  * @name by 秦智鹏
  */
export const formEl = (refEl) => {
	return new Promise((resolve, reject) => {
		refEl.validate().then(res => {
			resolve(res)
		}).catch(err => {
			console.warn('err', err);
		})
	})
}

/**
  * @Description: 路由跳转封装
  * 
  * @author qzp
  * 
  * @param {
	  path: 路由需要跳转的地址
	  deep： 跳转过度动画时间
	}
  * @return 
  * 
  * @createTime: 2022-08-19 09:40:10
  * @name by 秦智鹏
  */
export const redirectTo = (path, deep) => {
	uni.redirectTo({
		url: path,
		animationDuration: deep || 0
	})
}
