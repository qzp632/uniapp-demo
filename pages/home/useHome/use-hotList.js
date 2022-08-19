import { ref } from 'vue'

/**
  * @Description:热门和优选
  * 
  * @author
  * 
  * @param 
  * @return 
  * 
  * @createTime: 2022-08-19 09:30:50
  * @name by 秦智鹏
  */
export default function useHotList() {
	const hotList = ref([
		{
			url: "https://img2.baidu.com/it/u=2924254863,2446835064&fm=253&fmt=auto&app=138&f=GIF?w=900&h=500",
			name: "家装",
			text: "智能洗衣机"
		},
		{
			url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0124f3554429810000019ae9d7896b.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663127313&t=d84d4fa880956a00c42a5491adb84907",
			name: "旅游",
			text: "高山名宿"
		},
		{
			url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F70%2F24%2F595fa272d8ec4_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663127313&t=5c42cb61657c89fd9bee185b1c5ad8d0",
			name: "农业",
			text: "有机养殖"
		},
		{
			url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-1.lanrentuku.com%2F2020%2F11%2F5%2Ffdcf7d25-b846-464c-9df1-86a9169d71e5.png%3FimageView2%2F2%2Fw%2F500&refer=http%3A%2F%2Fi-1.lanrentuku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663127313&t=bd17ad75abc2e502bed4209394963b6b",
			name: "娱乐",
			text: "复古清吧"
		}
	])
	
	return {
		hotList
	}
}