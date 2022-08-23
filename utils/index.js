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
export const navigateTo = (path, deep) => {
	uni.navigateTo({
		url: path,
		animationDuration: deep || 0
	})
}

export const options = {
	// 微信小程序中 options 选项
	multipleSlots: true, //  在组件定义时的选项中启动多slot支持，默认启用
	styleIsolation: "shared", //  启动样式隔离。当使用页面自定义组件，希望父组件影响子组件样式时可能需要配置。具体配置选项参见：微信小程序自定义组件的样式
	addGlobalClass: true, //  表示页面样式将影响到自定义组件，但自定义组件中指定的样式不会影响页面。这个选项等价于设置 styleIsolation: apply-shared
	virtualHost: true, //  将自定义节点设置成虚拟的，更加接近Vue组件的表现。我们不希望自定义组件的这个节点本身可以设置样式、响应 flex 布局等，而是希望自定义组件内部的第一层节点能够响应 flex 布局或者样式由自定义组件本身完全决定
}

