<template>
  <div class="aui-content-box-a aui-list-content-a">
    <div v-for="item of zhuanji" :key="item._id">
        <router-link :to="`/detail/${item._id}?dataName=${dataName}`">
            <div class="aui-list-item-c">
            <div class="aui-list-item-img-c">
                <img :src="`${baseUrl}${item.zhuanjibanner}`" alt="">
            </div>
            <p class="aui-list-item-txta">{{item.zhuanjip}}</p>
            <span class="aui-list-item-txtb">{{item.zhuanjispan}}</span>
        </div>
        </router-link>
	</div>   
	</div>
</template>

<script>
export default {
    data(){
    return{
      zhuanji:[],
      dataName:'zhuanji'
    }
  },
   mounted(){
    console.log(axios)
    console.log(1)
    axios({
      url:'/api/zhuanji',
      // params:{_page:1,_limit:10}
    }).then(
      res=>{
          this.zhuanji = res.data.data
        console.log(this.zhuanji)
      }
    )
  }
}
</script>

<style>
    
/* .aui-content-box {
	padding-bottom: 44px;
} */

.aui-content-box-a {
	padding-top: 54px;
}
.aui-list-item-txta{
  height: 40px;
}
</style>
