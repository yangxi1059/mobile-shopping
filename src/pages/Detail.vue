<template>
  <div class="detail">
    <header class="aui-header-default aui-header-fixed aui-header-bg"> 
      <a href="javascript:history.back(-1)" class="aui-header-item">
         <i class="aui-icon aui-icon-back-white"></i> </a>
  <div class="aui-header-center aui-header-center-clear">
    <div class="aui-header-center-logo">
      <div id="scrollSearchPro" style="display: none;"> <span class="current">商品</span> 
      <span>评价</span> <span>详情</span> </div>
    </div>
  </div>
  <a href="javascript:;" class="aui-header-item-icon select xx9" style="min-width:0;" data-ydui-actionsheet="{target:'#aa1',closeElement:'#cancel'}"> 
    <img src="../assets/img/ad/xx1.png" width="22" height="22"> </a>
 </header>

   <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide aui-banner-wrapper-item"><a href="javascript:;"><img :src="`${baseUrl}${detail.datail.banner1}`" alt=""></a></div>
          <div class="swiper-slide aui-banner-wrapper-item"><a href="javascript:;"><img :src="`${baseUrl}${detail.datail.banner2}`" alt=""></a></div>
          <div class="swiper-slide aui-banner-wrapper-item"><a href="javascript:;"><img :src="`${baseUrl}${detail.datail.banner3}`" alt=""></a></div>
          <div class="swiper-slide aui-banner-wrapper-item"><a href="javascript:;"><img :src="`${baseUrl}${detail.datail.banner4}`" alt=""></a></div>
        </div>
        <div class="swiper-pagination aui-banner-pagination">

        </div>

      </div>




  <div class="aui-real-price clearfix"> <span> <i>￥</i>{{detail.span1}} </span> <del><span class="aui-font-num">￥{{detail.span2}}</span></del>
    <div class="aui-settle-choice"> <span>促销价</span> </div>
  </div>
  <div class="aui-product-title">
    <h2> {{detail.title}}</h2>
    <p> {{detail.p}} </p>
  </div>
<div class="aui-product-boutique clearfix">
    <div class="aui-product-boutique-a"> <img src="../assets/img/ad/cplja.png" alt=""> <img src="../assets/img/ad/cpljb.png" alt=""> </div>
  </div>

  <footer class="aui-footer-product">
  <div class="aui-footer-product-fixed">
    <div class="aui-footer-product-concern-cart"> 
      <a href="javascript:;"> <span class="aui-f-p-icon">
    <img src="../assets/img/icon/icon-kf.png" alt="">
    </span> <span class="aui-f-p-focus-info">客服</span>
      </a>
    <a href="javascript:;"> <span class="aui-f-p-icon">
    <img src="../assets/img/icon/icon-sc.png" alt="">
    </span> 
    <span class="aui-f-p-focus-info">收藏</span>
    </a> <a href="javascript:;"> 
    <span class="aui-f-p-icon">
    <img src="../assets/img/icon/icon-dp.png" alt="">
    </span> <span class="aui-f-p-focus-info">店铺</span> </a> 
    </div>
    <div class="aui-footer-product-action-list">
      <a href="javascript:;" class="yellow-color" @click="cartadd">加入购物车</a>
     <a href="javascript:;" class="red-color" @click="gocart">立即购买</a> 
     </div>
  </div>
</footer>

  </div>
</template>

<script>
import Swiper from 'swiper';
import {mapGetters} from 'vuex';

export default {
  data(){
    return {
      detail:{},
      num:1
    }
  },
  created(){
     console.log('detail,created,baseUrl',this.baseUrl)
    let id = this.$route.params.id;
    let dataName = this.$route.query.dataName;
    // console.log(id,dataName)
    axios({
      url:`/api/${dataName}/${id}`,
      // url:'/api/home?id=asdfsaf'
    }).then(
      res=>{
        console.log(res.data.data)
        this.detail = res.data.data
        }
    )
  },
   updated(){
   var mySwiper = new Swiper('.swiper-container',{
     autoplay:true,
     speed:400,
     loop:true,
     autoplay: {
    disableOnInteraction: false,//手势滑动过以后，依然能够重启轮播的属性     
        },
      pagination:{
       el:'.swiper-pagination',
       clickable:true
     }
   })
  },
 methods:{
    cartadd(){
       this.goods = localStorage.getItem("goods");
            // console.log(this.goods)
                this.id = this.$route.params.id

            if(this.goods){
                this.goods = JSON.parse(this.goods)
                // console.log()
                var onoff = true;
                this.id = this.$route.params.id
                // console.log(this.id)
                // console.log(this.num)
                for(var i=0;i<this.goods.length;i++){
                    if(this.goods[i].id == this.$route.params.id){
                        this.goods[i].num =1*this.num + 1*this.goods[i].num;
                        onoff = false;
                    }
                }
                if(onoff){
                    // console.log(this.goods)
                    this.goods.push({
                        id:this.id,
                        num:1*this.num
                    })
                }
            }else{
                this.goods = [{
                    id:this.id,
                    num:1*this.num
                }];
            }
            localStorage.setItem("goods",JSON.stringify(this.goods))
            this.$store.dispatch('cartadd',this.goods)
    },
      gocart(){
         this.goods = localStorage.getItem("goods");
                this.id = this.$route.params.id
           
            if(this.goods){
                this.goods = JSON.parse(this.goods)
                console.log()
                var onoff = true;
                this.id = this.$route.params.id
                console.log(this.id)
                console.log(this.num)
                for(var i=0;i<this.goods.length;i++){
                    if(this.goods[i].id == this.$route.params.id){
                        this.goods[i].num =1*this.num + 1*this.goods[i].num;
                        onoff = false;
                    }
                }
                if(onoff){
                    // console.log(this.goods)
                    this.goods.push({
                        id:this.id,
                        num:1*this.num
                    })
                }
            }else{
                this.goods = [{
                    id:this.id,
                    num:1*this.num
                }];
            }
            localStorage.setItem("goods",JSON.stringify(this.goods))
            this.$store.dispatch('cartadd',this.goods)
        this.$router.push('/shopping')
      }
},
}
</script>


<style scoped>

.swiper-container {
    overflow-x: hidden;
    width: 100%;
    position: relative;
    height: 17rem;
    margin-top: 2.8rem;
}
.aui-banner-wrapper-item img {
    width: 100%;
    background-size: cover;
    height: 17rem;
}
.swiper-container {
    margin-top: 2.8rem;
}
.aui-real-price {
    padding: 15px 15px 0 15px;
}
.aui-real-price span {
    font-size: 20px;
    color: #fc6248;
    float: left;
    font-weight: 700;
}
.aui-real-price span i {
    font-size: 12px;
}
.aui-product-title {
    padding: 1px 15px 10px 15px;
}
.aui-product-title h2 {
    font-size: 17px;
    font-weight: 800;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.aui-product-title h2 {
    font-size: 17px;
    font-weight: 800;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.aui-product-boutique {
    width: auto;
    height: auto;
    display: block;
    overflow: hidden;
    padding: 10px 15px;
    margin: 0 15px 10px 15px;
    background: #f5f5f5;
}
.aui-product-boutique-a {
    float: right;
}
.aui-product-boutique img {
    float: left;
    display: block;
    width: 24px;
    height: 24px;
    margin-right: 6px;
}


.swiper-container {
  overflow-x: hidden;
  width: 100%;
  position: relative;
  height: 17rem;
      margin-top: 2.8rem;
}
/*    qqqqqqqqqqqqqqqqqqqqqqqqq */

.swiper-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  -webkit-transform: translate3d(0px, 0px, 0px);
  transform: translate3d(0px, 0px, 0px);
  position: relative;
  z-index: 1;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
}

.aui-banner-pagination {
  position: absolute;
  width: 100%;
  z-index: 2;
  left: 0;
  bottom: .5rem;
  pointer-events: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.aui-banner-wrapper-item {
  width: 100%;
  height: 100%;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
.swiper-pagination-bullet {
  margin: 0 .3rem;
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background-color:gray;
}
.swiper-pagination-bullet-active{
  background-color: red;

}

</style>

