<template>
    <div class="aui-me-content-box">
			<div class="aui-me-content-info"></div>
			<div class="aui-me-content-list">
				<div class="aui-me-content-item">
					<div class="aui-me-content-item-head">
						<div class="aui-me-content-item-img">
							<img src="../assets/img/user/head-3.jpg" alt="">
						</div>
						<div class="aui-me-content-item-title">杨曦同学</div>
					</div>
					<div class="aui-me-content-item-text">
						<a href="javascript:;" @click="goshoucang" :active="0">
							<span>98</span>
							<span>收藏</span>
						</a>
						<a href="javascript:;" @click="goguanzhu" :active="1">
							<span>78</span>
							<span>关注</span>
						</a>
						<a href="javascript:;" @click="gozuji" :active="2">
							<span>99</span>
							<span>足迹</span>
						</a>
						<a href="javascript:;" @click="gofengxiang" :active="3">
							<span>65</span>
							<span>分享</span>
						</a>
					</div>
				</div>
				<div class="aui-me-content-card">
					<h3><i class="aui-icon aui-card-me"></i>铂金会员</h3>
					<a href="javascript:;" @click="govip">点击查看特权</a>
				</div>
			</div>

        <!--  --------------------------------------  ------------------------->
            <div class="aui-me-content-order">
                <a href="javascript:;" class="aui-well aui-fl-arrow">
                    <div class="aui-well-bd">我的订单</div>
                    <div class="aui-well-ft">查看全部</div>
                </a>
            </div>
		</div>
</template>
<script>
export default {
    data(){
    return{
        // active:0
    }
    },
    methods:{
        govip(){
            this.$router.push('vip')
        },
        goshoucang(){
            this.$router.push('follow')
        },
        goguanzhu(){
            this.$router.push('follow')
          
        },
         gozuji(){
            this.$router.push('follow')
        
        },
         gofengxiang(){
            this.$router.push('follow')
            
        }
    }
}
</script>

<style>
.aui-me-content-box {
    width: 100%;
    height: 180px;
    position: relative;
    background: linear-gradient(to right, #ff5e3e 0, #ff1679 100%);
    margin-top: 2.9rem;
}
    .aui-me-content-info {
    /* background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABNcAAAG7CAYAAADg5XOiAAAAGXRFW…BJuQYAAAAASco1AAAAAEhSrgEAAABAknINAAAAAJL+T4ABAPY5OQqAMIlqAAAAAElFTkSuQmCC); */
    background-size: 100%;
    height: 200px;
    width: 100%;
    background-position: bottom;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    bottom: 0;}
.aui-me-content-list {
    width: 100%;
    padding-top: 25px;
    position: relative;
}
.aui-me-content-item {
    width: 92%;
    height: 110px;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    margin: 0 4%;
    z-index: 2;
    position: relative;
}
.aui-me-content-item-head {
    position: absolute;
    top: -20px;
    left: 15px;
}
.aui-me-content-item-text {
    padding-top: 30px;
}
.aui-me-content-card {
    width: 92%;
    height: 90px;
    background: url(../assets/img/bg/me-bg.jpg) no-repeat;
    background-size: cover;
    border-radius: 10px;
    padding: 20px;
    margin: 0 4%;
    z-index: 1;
    position: absolute;
    bottom: -35px;
    padding-top: 62px;
}
.aui-me-content-item-img {
    width: 60px;
    height: 60px;
    float: left;
}
.aui-me-content-item-img img {
    width: 100%;
    height: 100%;
    display: block;
    border: none;
    border-radius: 50%;
}
.aui-me-content-item-text a {
    width: 24%;
    display: inline-block;
    text-align: center;
}
.aui-me-content-item-text a span {
    color: #666666;
    font-weight: 700;
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 16px;
}
.aui-me-content-item-text a span:nth-child(2) {
    font-size: 14px;
    color: #999999;
    font-weight: normal;
}
.aui-me-content-order {
    margin-top: 3rem;
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
.aui-well-ft {
    text-align: right;
    color: #999999;
    padding-right: 12px;
    position: relative;
}
</style>
