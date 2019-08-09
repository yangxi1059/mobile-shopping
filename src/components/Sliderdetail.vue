<template>
   
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide aui-banner-wrapper-item"><a href="javascript:;"><img src="../assets/img/banner/banner.jpg" alt=""></a></div>
          <div class="swiper-slide aui-banner-wrapper-item"><a href="javascript:;"><img src="../assets/img/banner/banner1.jpg" alt=""></a></div>
          <div class="swiper-slide aui-banner-wrapper-item"><a href="javascript:;"><img src="../assets/img/banner/banner2.jpg" alt=""></a></div>
          <div class="swiper-slide aui-banner-wrapper-item"><a href="javascript:;"><img src="../assets/img/banner/banner3.jpg" alt=""></a></div>
        </div>
        <div class="swiper-pagination aui-banner-pagination">

        </div>

      </div>
  
</template>

<script>
import Swiper from 'swiper';
// import $ from 'jquery';
export default {
  data(){
    return{

    }
  },
  mounted(){
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
  updated(){
  

  }
}

</script>

<style>
.swiper-container {
  overflow-x: hidden;
  width: 100%;
  position: relative;
  height: 12rem;
      margin-top: 2.8rem;
}


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
