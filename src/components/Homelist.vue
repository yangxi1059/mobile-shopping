<template>
    <div class="aui-scroll-content-itema">
    <section class="aui-grid-contenta">
      <div class="aui-grid-rowa aui-grid-row-cleara"> 
        <a href="#" class="aui-grid-row-itema">
        <i class="aui-icon-largea aui-icon-signa">
        <img src="../assets/img/ad/cw.png" alt=""></i>
        </a>
        <a href="#" class="aui-grid-row-itema"> 
        <i class="aui-icon-largea aui-icon-signa">
        <img src="../assets/img/ad/omm.png" alt=""></i> 
        </a> <a href="#" class="aui-grid-row-itema"> 
        <i class="aui-icon-largea aui-icon-signa">
        <img src="../assets/img/ad/bcnrx.png" alt=""></i> </a>
        <a href="#" class="aui-grid-row-itema"> 
        <i class="aui-icon-largea aui-icon-signa">
        <img src="../assets/img/ad/zangxiang.png" alt=""></i> </a> 
        <a href="#" class="aui-grid-row-itema"> 
        <i class="aui-icon-largea aui-icon-signa">
        <img src="../assets/img/ad/quanjian.png" alt=""></i> </a> 
        <a href="#" class="aui-grid-row-itema"> 
        <i class="aui-icon-largea aui-icon-signa">
        <img src="../assets/img/ad/omm.png" alt=""></i> </a> 
        <a href="#" class="aui-grid-row-itema"> 
        <i class="aui-icon-largea aui-icon-signa">
        <img src="../assets/img/ad/jl.png" alt=""></i> </a> 
        <a href="#" class="aui-grid-row-itema"> 
        <i class="aui-icon-largea aui-icon-signa">
        <img src="../assets/img/ad/chuwu.png" alt=""></i> </a>
        <a href="#" class="aui-grid-row-itema"> 
        <i class="aui-icon-largea aui-icon-signa">
        <img src="../assets/img/ad/omm.png" alt=""></i> </a> 
        </div>
    </section>
  </div>
</template>


<style>
    .aui-scroll-contents {
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 0 auto;
  max-width: 750px; /*min-width: 300px;*//*margin-bottom:100px;*/
}

.aui-scroll-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 44px;
  padding-bottom: 44px;
}

.aui-scroll-nav {
  width: auto;
  height: 100%;
  text-align: center;
  background-color: #f3f5f7;
  -webkit-overflow-scrolling: touch;
  position: relative;
  z-index: 1;
  overflow-y: auto;
}

.aui-scroll-item {
  padding: 0 10px;
  height: 3rem;
  line-height: 3rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  z-index: 1;
  font-size: .8rem;
  text-align: center;
}

.aui-scroll-item-text {
  font-size: 0.8rem;
  color: #232326;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  text-align: center;
}

.aui-scroll-content {
  height: 100%;
  background-color: #FFF;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0 .5rem .5rem .5rem;
  position: relative;
}

.aui-scroll-content-item {
  padding-top: 15px;
}

.aui-scroll-content-title {
  height: 2rem;
  line-height: 2rem;
  font-size: .8rem;
  font-weight: normal;
  color: #555;
  display: block;
  padding-bottom: .1rem;
  padding-top: .32rem;
  margin-bottom: .2rem;
  position: relative;
  z-index: 1;
}

.aui-scroll-nav .aui-crt {
  background-color: #FFF;
}

.aui-scroll-nav .aui-crt .aui-scroll-item-text {
  color: #fc6248;
}
</style>
