<template>
<div class="baidumap">

<goodsheander :list="list"></goodsheander>
<div ref="allmap" style="height:400px"></div>
<input type="text" v-model="searchkey">
<input type="button" value="搜索周边" @click="sousuo" class="searchbtn">

</div>
</template>


<script>
import goodsheander from '../components/goodsheander'

export default {
  data(){
      return {
          list:'地图',
          searchkey:'输入搜索内容'
      }
  },
  methods:{
    sousuo(){
    this.map.clearOverlays(); 
    var circle = new BMap.Circle(this.point,1000,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
    this.map.addOverlay(circle);
    var local =  new BMap.LocalSearch(this.map, {renderOptions: {map: this.map, autoViewport: false}});  
    local.searchNearby(this.searchkey,this.point,1000);
    this.map.addOverlay(this.marker2);
      }  
    },
  mounted(){
    this.map = new BMap.Map(this.$refs.allmap);
    this.point = new BMap.Point(121.4982470000,31.3844190000);
    this.map.enableScrollWheelZoom();
    this.map.centerAndZoom(this.point, 15);
    this.marker = new BMap.Marker(this.point);  // 创建标注
	this.map.addOverlay(this.marker);               // 将标注添加到地图中
	this.marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
  },
  components:{
      goodsheander
  }
}
</script>


<style>
.searchbtn{margin-top: 30px}
</style>
