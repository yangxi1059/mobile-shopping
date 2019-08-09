<template>
    <div class="echarts" >
        <goodsheander :list="list"></goodsheander>
        <div ref="echarts1" style="height:400px"></div>
    </div>
</template>


<script>
import echarts from 'echarts';
import { setTimeout } from 'timers';
import goodsheander from '../components/goodsheander'

export default {
    data(){
    return {
      msg:'响应式数据',
      list:'购物总览'
    }
  },
  components:{
      goodsheander
  },
  mounted(){
      // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(this.$refs.echarts1);
       let option = {
          textStyle: {
              color: 'rgba(0, 0, 0, 0.3)'
          },
          series : [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius: '55%',
                  selectedMode:true,
                  roseType:true,
                  cursor:'pointer',
                  color:['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
                  data:[
                      {value:235, name:'衣服'},
                      {value:274, name:'药品'},
                      {value:310, name:'化妆品'},
                      {value:335, name:'零食'},
                      {value:400, name:'电子产品'}
                  ],
                  roseType: 'angle',
                  itemStyle: {
                      normal: {
                        
                      }
                  }
              }
          ]
      };
      
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);//绘制
  }
}
</script>

<style>

</style>

