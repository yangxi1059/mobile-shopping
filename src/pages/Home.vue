<template>
  <div class="home">
   <Slider :banner="banner"></Slider>
   <Grid></Grid>
   <Homelist></Homelist>
   <Homepic></Homepic>
   <List :list="list" dataName="home"></List>
  </div>
</template>

<script>
import Slider from '../components/Slider';
import Grid from '../components/Grid';
import Homelist from '../components/Homelist';
import Homepic from '../components/Homepic'
import List from '../components/List'


export default {
  data(){
    return{
      list:[],
      banner:[]
    }
  },
  components:{
    Slider,Grid,Homelist,Homepic,List
  },
  mounted(){
    console.log(axios)
    console.log(1)
    axios({
      url:'/api/home',
      // params:{_page:1,_limit:10}
    }).then(
      res=>{
        console.log(res)
        this.list = res.data.data
      }
    )
  axios({
      url:'/api/banner',
      params:{_page:1,_limit:3}
    }).then(
      res=>{this.banner = res.data.data
      console.log(this.banner)
      }
    )
  },
}
</script>
