<template>
  <div class="user">
    <Userheader></Userheader>
    <Userbody></Userbody>
    <Usersection></Usersection>
    <tuijian></tuijian>
  </div>
</template>
<script>
import Userheader from '../components/userheader'
import Userbody from '../components/Userbody'
import Usersection from '../components/Usersection'
import tuijian from '../components/tuijian'
import router from '../plugins/router'



export default {
   data(){
    return {
      user:{}
    }
  },
  components:{
    Userheader,Userbody,Usersection,tuijian
  },
  beforeRouteEnter(to,from,next){
    // console.log('/user.....')
    //异步条件
    axios({
      url:'/api/user',
      method:'get',
    }).then(
      res=>{
        if(res.data.err===0){
          next(_this=>_this.user = res.data.data)
        }else{
          // this.$router.push('/login') ×
          // router.push('/login')
          next('/login')
        }
      }
    )
  },
 
}
</script>

<style>

</style>
