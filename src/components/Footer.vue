<template>
  <footer class="aui-footer-default aui-footer-fixed"> 
    <a href="javascript:;" class="aui-footer-item aui-footer-active"> 
      <span class="aui-footer-item-icon aui-icon aui-footer-icon-home"></span> 
      <span class="aui-footer-item-text" @click="gohome">首页</span> 
      </a> 
      <a href="javascript:;" class="aui-footer-item">
    <span class="aui-footer-item-icon aui-icon aui-footer-icon-class"></span> 
    <span class="aui-footer-item-text" @click="gozhuanji">专辑</span> 
    </a> <a href="javascript:;" class="aui-footer-item">
      <span class="aui-footer-item-icon aui-icon aui-footer-icon-find"></span> 
      <span class="aui-footer-item-text" @click="goxueyuan">学院</span> </a> 
      <a href="javascript:;" class="aui-footer-item">
          <span class="aui-footer-item-icon aui-icon aui-footer-icon-car"></span>
          <em class="fudongdian">{{getnumber()}}</em>
          <span class="aui-footer-item-text" @click="goshoppingcar">购物车</span> 
          
      </a> 
      <a href="javascript:;" class="aui-footer-item">
          <span class="aui-footer-item-icon aui-icon aui-footer-icon-me"></span> 
      <span class="aui-footer-item-text"  @click="gouser">我的</span> </a> </footer>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
 data(){
  return{
    arr:[],
    num:0
  }
 },
 mounted(){
  //  console.log(this.$store.state.cartadd)
  //  this.arr =this.$store.state.cartadd
  //  console.log(this.arr)
  //  for(var i=0;i<this.arr.length;i++){
  //    this.num = this.arr[i].num*1+this.num
  //  }
  //   this.num-=1
  //    console.log(this.num)
  //    this.$store.dispatch('change',this.num)
 },
  methods:{
    ...mapGetters(['getnumber']),
    gozhuanji(){
      this.$router.push('./zhuanji')
    },
    gohome(){
       this.$router.push('./home')
    },
    goxueyuan(){
       this.$router.push('./xueyuan')
    },
    gouser(){
       this.$router.push('./user')

    },
    goshoppingcar(){
       this.$router.push('./shopping')
    }
  }
}
</script>
<style>
.fudongdian{
  
    display: block;
    border-radius: 50%;
    background: red;
    color: #fff;
    height: 20px;
    width: 20px;
    text-align: center;
    position: absolute;
    top: -6px;
    right: 90px;
    font-size: 12px;
    line-height: 20px;
}
</style>

