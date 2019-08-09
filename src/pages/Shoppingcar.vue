<template>
<div class="shoppingcar">
<header class="aui-header-default aui-header-fixed aui-header-bg"> <a href="javascript:history.back(-1)" class="aui-header-item"> <i class="aui-icon aui-icon-back-white"></i> </a>
  <div class="aui-header-center aui-header-center-clear">
    <div class="aui-header-center-logo">
      <div class="aui-car-white-Typeface">购物车</div>
    </div>
  </div>
  <a href="javascript:;" class="aui-header-item-icon" style="min-width:0"> <i class="aui-icon aui-icon-member"></i> </a>
</header>


  <div class="aui-car-box">
    <div class="aui-car-box-name">
      <input type="checkbox" class="check goods-check shopCheck">
      <h3> <a href="#">初悟美容养生</a> </h3>
      <div class="aui-car-coupons"> <a href="#">领券</a> <a href="#">编辑</a> </div>
    </div>


    <div class="aui-car-box-list">
      <ul>
        <li v-for="(item,index) in text" :key="item._id" >
          <div class="aui-car-box-list-item">
            <input type="checkbox" class="check goods-check goodsCheck">
            <div class="aui-car-box-list-img"> <a href="javascript:;"> <img :src="`${baseUrl}${item.banner}`" alt=""> </a> </div>
            <div class="aui-car-box-list-text">
              <h4> <a href="javascript:;">{{item.homeh3}}</a> </h4>
              <div class="aui-car-box-list-text-brief"> <span>{{item.homepingjia}}</span> <span>{{item.homeem}}</span> <span>版本:5.7英寸</span> </div>
              <div class="aui-car-box-list-text-price">
                <div class="aui-car-box-list-text-pri"> <b class="price">￥{{item.homespan}}</b> </div>
                <div class="aui-car-box-list-text-arithmetic"> 
                  <a href="javascript:;" class="minus" @click="changeItem({_id:item._id,num:-1})">-</a> 
                  <span class="num">{{$store.state.cartadd[index].num}}</span> 
                  <a href="javascript:;" class="plus" @click="changeItem({_id:item._id,num:1})">+</a> 
                </div>
              </div>
              <div class="car-delete" @click="deletegoods(item._id,index)" >删除</div>
            </div>
          </div>
        </li>
      </ul>
    </div>


    <div class="aui-shopPrice"> 本店总计：￥ 
      <span class="aui-total-amount ShopTotal">00.00</span>
    </div>
    </div>

  <div class="aui-payment-bar">
    <div class="all-checkbox">
      <input type="checkbox" class="check goods-check" id="AllCheck">
      全选</div>
    <div class="shop-total"> <strong>合计：<i class="total" id="AllTotal">399.00</i></strong> </div>
    <a href="javascript:;" class="settlement">结算</a> 
  </div>

</div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'


export default {
  data(){
    return{
        list:[],
        text:[],
        // test:[]
    }
  },
  computed:mapGetters(['cartadd']),
  mounted(){
    console.log(this.$store.state.cartadd)
    axios({
      url:'/api/home'
    }).then(res=>{
      // console.log(1)
      this.list = res.data.data;
      console.log(this.list)
      console.log(this.$store.state.cartadd[0].num)
      let arr = this.$store.state.cartadd
      // this.test = arr
      if(arr){
        // console.log(1)
        for(var i=0;i<arr.length;i++){
          for(var j=0;j<this.list.length;j++){
            if(this.list[j]._id==arr[i].id){
              this.list[j].num = arr[i].num
              // console.log(this.list[j].num)
              // console.log(1)
            this.text.push(this.list[j])
            console.log(this.text)
          }
        } 
      }
      }
    })
    // console.log(this.$store.state.cartadd[1].num)
  },
  watch:{
  },
  methods:
    mapActions([
    'changeItem','deletegoods'
    ]),
    // deletegoods(id,index){
    //   console.log(1)
    //  this.text.slice(index,1)
    // }
}
</script>


<style>
.aui-car-delete{
  color: #f00
}
.aui-car-box-list ul{
      padding-bottom: 55px;
}
.shoppingcar{
  margin-top: 3rem
}
.aui-header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
}
.aui-header-item:first-child {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
    margin-right: -25%;
}
.aui-header-item {
    height: 2.8rem;
    line-height: 2.8rem;
    min-width: 25%;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 25%;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    padding: 0 0.8rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 0.3rem;
    white-space: nowrap;
    overflow: hidden;
    color: #5C5C5C;
}
.aui-header-center-clear {
    width: 100%;
    margin-left: 13%;
}
.aui-header-center-logo div {
    width: 90px;
}
.aui-car-white-Typeface {
    text-align: center;
    color: #fff;
    font-size: 16px;
}
.aui-header-item-icon:last-child {
    order: 3;
    justify-content: flex-end;
}
.aui-icon-member {
    background: url(../assets/img/bg/wx.png) no-repeat;
    width: 40px;
    height: 40px;
    display: inline-block;
}
.aui-car-content {
    padding-top: 44px;
    padding-bottom: 50px;
}
.aui-car-box {
    margin-bottom: .5rem;
}
.aui-car-box-name {
    background: #fff;
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    position: relative;
}
.aui-car-box-name input.check {
    background: url(../assets/img/icon/icon_radio3.png) no-repeat center left;
    background-size: 20px 20px;
    position: absolute;
    top: 50%;
    left: 10px;
    margin-top: -18px;
    width: 20px;
    height: 35px;
}
.aui-car-box-name h3 {
    float: left;
    font-size: 14px;
    background: url(../assets/img/icon/icon-kin.png) no-repeat left center;
    background-size: 22px 22px;
    padding-left: 25px;
    margin-left: 28px;
    font-weight: inherit;
}
.aui-car-coupons {
    float: right;
}
.aui-car-box-list ul li {
    margin-bottom: 10px;
}
.aui-car-box-list-item {
    background: #f5f5f5;
    height: 120px;
    padding: 0 15px;
    position: relative;
}
.aui-car-box-list-item input.check {
    background: url(../assets/img/icon/icon_radio3.png) no-repeat center left;
    background-size: 20px 20px;
    position: absolute;
    top: 50%;
    left: 10px;
    margin-top: -18px;
    width: 20px;
    height: 35px;
}
.aui-car-box-list-img {
    position: absolute;
    top: 15px;
    left: 45px;
    width: 90px;
    height: 90px;
}
.aui-car-box-list-img img {
    width: 100%;
    height: 100%;
    display: block;
    border: none;
}
.aui-shopPrice {
    background: #fff;
    height: 35px;
    line-height: 35px;
    padding: 0 15px;
    text-align: right;
}
.aui-total-amount {
    color: #fc6248;
    font-size: 16px;
}
</style>
