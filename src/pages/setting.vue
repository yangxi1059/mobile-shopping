<template>
<div class="">

    <header class="aui-header-default aui-header-fixed aui-header-bg">
		<a href="javascript:history.back(-1)" class="aui-header-item">
			<i class="aui-icon aui-icon-back-white"></i>
		</a>
		<div class="aui-header-center aui-header-center-clear">
			<div class="aui-header-center-logo">
				<div class="aui-car-white-Typeface">设置</div>
			</div>
		</div>
<a href="javascript:;" class="aui-header-item-icon select" style="min-width:0;">
			<i class="aui-icon aui-icon-share-pd selectVal" onselectstart="return false"></i>
			<div class="aui-header-drop-down selectList">
				<div class="aui-header-drop-down-san"></div>
				<div class="">
					<p class="" onclick="location='index.html/'">消息</p>
					<p class="" onclick="location='index.html'">首页</p>
					<p class="" onclick="location='index.html'">帮助</p>
					<p class="" onclick="location='index.html'">分享</p>
				</div>
			</div>
		</a>
	</header>
    <section class="aui-myOrder-content">
		<div class="aui-product-set">

			<a href="javascript:;" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
				<div class="aui-address-cell-bd">个人信息</div>
				<div class="aui-address-cell-ft"></div>
			</a>
			<a href="javascript:;" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
				<div class="aui-address-cell-bd">我的实名认证</div>
				<div class="aui-address-cell-ft"></div>
			</a>
			<a href="javascript:;" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}"
			@click="gomap" >
				<div class="aui-address-cell-bd">我的收货地址</div>
				<div class="aui-address-cell-ft"></div>
			</a>
			<a href="javascript:;" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
				<div class="aui-address-cell-bd">消息推送设置</div>
				<div class="aui-address-cell-ft"></div>
			</a>
			<a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
				<div class="aui-address-cell-bd">清除缓存</div>
				<div class="aui-address-cell-ft"></div>
			</a>
			<a href="javascript:;" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
				<div class="aui-address-cell-bd">弹幕设置</div>
				<div class="aui-address-cell-ft"></div>
			</a>
			<div class="aui-dri"></div>
			<a href="javascript:;" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
				<div class="aui-address-cell-bd">关于我们</div>
				<div class="aui-address-cell-ft">v5.0</div>
			</a>
		</div>
		<div class="aui-out" @click="logout">
			<a href="javascript:;">退出当前账号</a>
		</div>
	</section>
    </div>
</template>


<script>
export default {
     methods:{
    logout(){
      axios({
        url:'/api/logout',
        method:'delete'
      }).then(
        res=>{
            console.log(res.data)
            res.data.err === 0 && this.$router.push('/login')
            }
      )
	},
	gomap(){
		this.$router.push('map')
	}
  }
}
</script>


<style>

</style>
