<template>
  <div id="app">
    <Header v-show="$root.$data.bNav"></Header>
    <router-view></router-view>    
    <Footer v-show="$root.$data.bFoot"></Footer> 
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name:'app',
   watch:{
    $route:{
      handler({path}){
        console.log('app',path)
        //home/follow/column true true
        //user/ false true
        //login/reg/detail false false

        if(/home|zhuanji|xueyuan|fenglei/.test(path)){
          this.$root.$data.bNav=true;
          this.$root.$data.bFoot=true;
        }
        if(/user|shopping/.test(path)){
          this.$root.$data.bNav=false;
          this.$root.$data.bFoot=true;
        }
        if(/login|reg|detail|vip|setting|pingtuan|follow|yaoqing|map|shoppingmsg/.test(path)){
          this.$root.$data.bNav=false;
          this.$root.$data.bFoot=false;
        }

      },
      immediate:true
    }
  },
  components:{
    Header,Footer
  }
}
</script>
