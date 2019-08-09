<template>
  <div class="list">
    <div class="aui-recommend">
    <h2>美容护肤</h2>
  </div>
  <section class="aui-list-product aui-list-product-box">
    <div class="" v-for="item of list" :key="item._id"> 

    <router-link :to="`/detail/${item._id}?dataName=${dataName}`">
      <a href="javascript:;" class="aui-list-product-item">
      <div class="aui-list-product-item-img"> <img :src="`${baseUrl}${item.banner}`" alt=""> </div>
      <div class="aui-list-product-item-text">
        <h3>{{item.homeh3}}</h3>
        <div class="aui-list-product-mes-box">
          <div> <span class="aui-list-product-item-price"> <em>¥</em> {{item.homeem}} </span> <span class="aui-list-product-item-del-price"> {{item.homespan}} </span> </div>
          <div class="aui-comment">{{item.pingjia}}</div>
        </div>
      </div>
      </a> 
    </router-link>


      <!-- <a href="javascript:;" class="aui-list-product-item" @click="godetail">
      <div class="aui-list-product-item-img"> <img src="../assets/img/porduct/sf-9.jpg" alt=""> </div>
      <div class="aui-list-product-item-text">
        <h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
        <div class="aui-list-product-mes-box">
          <div> <span class="aui-list-product-item-price"> <em>¥</em> 399.99 </span> <span class="aui-list-product-item-del-price"> ¥495.65 </span> </div>
          <div class="aui-comment">986评论</div>
        </div>
      </div>
      </a>  -->
      
      <!-- <a href="javascript:;" class="aui-list-product-item">
      <div class="aui-list-product-item-img"> <img src="../assets/img/porduct/sf-8.jpg" alt=""> </div>
      <div class="aui-list-product-item-text">
        <h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
        <div class="aui-list-product-mes-box">
          <div> <span class="aui-list-product-item-price"> <em>¥</em> 399.99 </span> <span class="aui-list-product-item-del-price"> ¥495.65 </span> </div>
          <div class="aui-comment">986评论</div>
        </div>
      </div>
      </a> 
      
      <a href="javascript:;" class="aui-list-product-item">
      <div class="aui-list-product-item-img"> <img src="../assets/img/porduct/sf-22.jpg" alt=""> </div>
      <div class="aui-list-product-item-text">
        <h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
        <div class="aui-list-product-mes-box">
          <div> <span class="aui-list-product-item-price"> <em>¥</em> 399.99 </span> <span class="aui-list-product-item-del-price"> ¥495.65 </span> </div>
          <div class="aui-comment">986评论</div>
        </div>
      </div>
      </a> 
      
      <a href="javascript:;" class="aui-list-product-item">
      <div class="aui-list-product-item-img"> <img src="../assets/img/porduct/sf-23.jpg" alt=""> </div>
      <div class="aui-list-product-item-text">
        <h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
        <div class="aui-list-product-mes-box">
          <div> <span class="aui-list-product-item-price"> <em>¥</em> 399.99 </span> <span class="aui-list-product-item-del-price"> ¥495.65 </span> </div>
          <div class="aui-comment">986评论</div>
        </div>
      </div>
      </a>  -->

      </div>
  </section>
  </div>
</template>
<script>
export default {
   props:['list','dataName']
}
</script>
  
<style>
.aui-recommend {
  width: 100%;
  height: 80px;
  line-height: 80px;
  background: #ccc;
  text-align: center;
  margin-top: 8px;
}

.aui-recommend h2 {
  color: #fff;
  font-size: 28px;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
}

.aui-recommend img {
  width: 100%;
  height: 100%;
  display: block;
  border: none;
}
.aui-list-product {
  width: 100%;
  height: auto;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
  margin-bottom: -1px;
}

.aui-list-product-box {
  overflow: hidden;
  position: relative;
  display: block;
  margin: 0;
  padding: 0 2px 0;
}

.aui-list-product-box-a {
  overflow: hidden;
  position: relative;
  display: block;
  margin: 0;
  padding: 0 0 40px 0;
}

.aui-list-product-item {
  width: 50%;
  float: left;
  padding: 0 2px;
  margin-top: 4px;
  position: relative;
}

.aui-list-product-item-img {
  height: auto;
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.aui-list-product-item-img img {
  width: 100%;
  height: 100%;
  display: block;
  border: none;
}

.aui-list-product-item-text {
  background-color: #FFF;
  padding: .7rem;
}

.aui-list-product-item-text h3 {
  color: #505050;
  font-size: 12px;
  font-weight: normal;
  word-wrap: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.aui-list-product-mes-box {
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  color: #999;
}

.aui-list-product-item-price {
  font-size: 16px;
  color: #EB5211;
}

.aui-list-product-item-price em {
  font-size: 14px;
}

.aui-list-product-item-del-price {
  padding-left: .06rem;
  font-size: 12px;
  margin-left: .02rem;
  position: relative;
  color: #8C8C8C;
}

.aui-list-product-item-del-price:after {
  content: '';
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #8C8C8C;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  top: auto;
  bottom: 50%;
}


</style>
