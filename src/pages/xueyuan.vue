<template>
  <div class="newsList">
    <xueyuantop></xueyuantop>
    <xueyuanmenu></xueyuanmenu>
    <xueyuanlist :list="list" dataName="xueyuan"></xueyuanlist>
  </div>
</template>
<script>
import xueyuantop from '../components/xueyuantop'
import xueyuanmenu from '../components/xueyuanmenu'
import xueyuanlist from '../components/xueyuanlist'


export default {
  data(){
    return{
      list:[]
    }
  },
  components:{
    xueyuantop,xueyuanmenu,xueyuanlist
  },
   mounted(){
    console.log(axios)
    console.log(1)
    axios({
      url:'/api/xueyuan',
      // params:{_page:1,_limit:10}
    }).then(
      res=>{
        this.list = res.data.data
        console.log(this.list)
      }
    )
  }

}
</script>

<style>

</style>
