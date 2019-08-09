<template>
    <section class="aui-grid-content">
			<div class="aui-grid-row">
				<a href="javascript:;" class="aui-grid-row-item">
					<i class="aui-icon-largel aui-icon-wallet"></i>
					<p class="aui-grid-row-label">待付款</p>
				</a>
				<a href="javascript:;" class="aui-grid-row-item">
					<i class="aui-icon-largel aui-icon-goods"></i>
					<p class="aui-grid-row-label">待发货</p>
				</a>
				<a href="javascript:;" class="aui-grid-row-item">
					<i class="aui-icon-largel aui-icon-receipt"></i>
					<p class="aui-grid-row-label">待收货</p>
				</a>
				<a href="javascript:;" class="aui-grid-row-item">
					<i class="aui-icon-largel aui-icon-evaluate"></i>
					<p class="aui-grid-row-label">待评价</p>
				</a>
				<a href="javascript:;" class="aui-grid-row-item">
					<i class="aui-icon-largel aui-icon-refund"></i>
					<p class="aui-grid-row-label">退货退款</p>
				</a>
			</div>
			<div class="aui-dri"></div>
			<div class="aui-me-content-order">
				<a href="javascript:;" class="aui-well ">
					<div class="aui-well-bd">我的服务</div>
					<!--<div class="aui-well-ft">查看全部</div>-->
				</a>
			</div>
			<div class="aui-grid-row">
				<a href="javascript:;" class="aui-grid-row-item" @click="goyaoqing">
					<i class="aui-icon-largel aui-icon-invitation"></i>
					<p class="aui-grid-row-label">邀请好友</p>
				</a>
				<a href="javascript:;" class="aui-grid-row-item">
					<i class="aui-icon-largel aui-icon-signs"></i>
					<p class="aui-grid-row-label">签到领币</p>
				</a>
				<a href="javascript:;" class="aui-grid-row-item">
					<i class="aui-icon-largel aui-icon-coupon"></i>
					<p class="aui-grid-row-label">优惠券</p>
				</a>
				<a href="javascript:;" class="aui-grid-row-item">
					<i class="aui-icon-largel aui-icon-fight"></i>
					<p class="aui-grid-row-label">我的拼团</p>
				</a>
				<a href="javascript:;" class="aui-grid-row-item" @click="gotuishou">
					<i class="aui-icon-largel aui-icon-recommend"></i>
					<p class="aui-grid-row-label">商品推手</p>
				</a>
				<a href="javascript:;" class="aui-grid-row-item" @click="goshoppingmsg">
					<i class="aui-icon-largel aui-icon-recharge"></i>
					<p class="aui-grid-row-label">消费记录</p>
				</a>
				<a href="javascript:;" class="aui-grid-row-item">
					<i class="aui-icon-largel aui-icon-help"></i>
					<p class="aui-grid-row-label">帮助中心</p>
				</a>
				<a href="javascript:;" class="aui-grid-row-item">
					<i class="aui-icon-largel aui-icon-problem"></i>
					<p class="aui-grid-row-label">我的问答</p>
				</a>
				<a href="javascript:;" class="aui-grid-row-item">
					<i class="aui-icon-largel aui-icon-evaluates"></i>
					<p class="aui-grid-row-label">我的评价</p>
				</a>
				<a href="javascript:;" class="aui-grid-row-item">
					<i class="aui-icon-largel aui-icon-shares"></i>
					<p class="aui-grid-row-label">我的分享</p>
				</a>
			</div>
			<div class="aui-recommend">
				<img src="../assets/img/bg/icon-tj3.jpg" alt="">
				<!--<h2>为你推荐</h2>-->
			</div>
			
		</section>
</template>
<script>
export default {
	methods:{
		goyaoqing(){
			this.$router.push('yaoqing')
		},
		gotuishou(){
			this.$router.push('tuishou')

		},
		goshoppingmsg(){
			this.$router.push('shoppingmsg')

		}
	}
}
</script>



<style scoped>
.aui-grid-content {
    width: 100%;
    background-color: #ffffff;
    display: table;
    table-layout: fixed;
        margin-top: 3rem;
}
.aui-grid-row {
    overflow: hidden;
    margin: 0;
}
.aui-grid-row-item {
    display: table-cell;
    position: relative;
    text-align: center;
    vertical-align: middle;
    padding: 0.7rem 0;
    width: 20%;
    float: left;
}

.aui-icon-largel {
    width: 40px;
    height: 40px;
    display: inline-block;
    background-repeat: no-repeat;
}
.aui-icon-wallet {
    background:url(../assets/img/ad/order.png) no-repeat -10px -2px;
}

.aui-icon-goods {
background:url(../assets/img/ad/order.png) no-repeat -60px -2px;
}

.aui-icon-receipt {
background:url(../assets/img/ad/order.png) no-repeat -100px -2px;}

.aui-icon-evaluate {
background:url(../assets/img/ad/order.png) no-repeat -146px -2px;}

.aui-icon-refund {
background:url(../assets/img/ad/order.png) no-repeat -188px -2px;}

.aui-grid-row-label {
    display: block;
    font-size: 0.7rem;
    position: relative;
    margin-top: 0.25rem;
}
.aui-me-content-order {
    position: relative;
    background: #fff;
}
.aui-well {
    padding: 14px 15px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    font-size: 14px;
}  
.aui-well-bd {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    font-weight: 700;
}
.aui-grid-row-item {
    display: table-cell;
    position: relative;
    text-align: center;
    vertical-align: middle;
    padding: 0.7rem 0;
    width: 20%;
    float: left;
}
.aui-icon-invitation {
    background: url(../assets/img/ad/service.png) no-repeat -10px -2px;
}
.aui-icon-large {
    width: 40px;
    height: 40px;
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30px;
}
.aui-grid-row-label {
    display: block;
    font-size: 0.7rem;
    position: relative;
    margin-top: 0.25rem;
}
.aui-recommend {
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: #ccc;
    text-align: center;
    margin-top: 8px;
}
.aui-recommend img {
    width: 100%;
    height: 100%;
    display: block;
    border: none;
}


</style>
