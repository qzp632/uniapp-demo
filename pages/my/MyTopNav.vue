<template>
	<div class="my-header-d1">
		/*#ifdef H5*/
		<span class="left"></span>
		/*#endif*/

		/*#ifdef APP-PLUS*/
		<span class="left"></span>
		/*#endif*/

		<span class="center">我的</span>
		/*#ifdef H5*/
		<div class="right">
			<uni-icons class type="chatbubble-filled" size="22"></uni-icons>
			<uni-icons class type="gear" size="22"></uni-icons>
		</div>
		/*#endif*/

		/*#ifdef APP-PLUS*/
		<div class="right">
			<uni-icons class type="chatbubble-filled" size="22"></uni-icons>
			<uni-icons class type="gear" size="22"></uni-icons>
		</div>
		/*#endif*/
	</div>
</template>

<style lang="scss">
	.my-header-d1 {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		/*#ifdef H5*/
		align-items: center;
		/*#endif*/
		position: absolute;
		z-index: 1;
		background: transparent;

		.left,
		.right {
			width: 100rpx;
			margin-bottom: 22rpx;
			/*#ifdef H5*/
			margin-bottom: 0;
			/*#endif*/
		}

		.center {
			flex: auto;
			text-align: center;
			margin-bottom: 22rpx;
			/*#ifdef H5*/
			margin-bottom: 0;
			/*#endif*/
		}
	}
</style>
