<template>
    <div class="vip">
        <header class="aui-header-default aui-header-fixed aui-header-bg">
            <a href="javascript:history.back(-1)" class="aui-header-item">
                <i class="aui-icon aui-icon-back-white"></i>
            </a>
            <div class="aui-header-center aui-header-center-clear">
                <div class="aui-header-center-logo">
                    <div class="aui-car-white-Typeface">收藏分享</div>
                </div>
            </div>
            <a href="#" class="aui-header-item-icon" style="min-width:0">
                <i class="aui-icon aui-icon-share-pd"></i>
            </a>
        </header>
<section class="aui-myOrder-content">
    <div class="m-tab demo-small-pitch" data-ydui-tab="">
    <div class="aui-myOrder-fix">
    <van-tabs v-model="active">
		<van-tab title="收藏">
            <div class="tab-panel-item">
            <div class="aui-list-product-box aui-list-product-box-clear">
            <a href="javascript:;" class="aui-list-product-item" v-for="item1 in list1"
            :key="item1._id">
            <router-link :to="`/detail/${item1._id}?dataName=vipfree`">    
            <div class="aui-list-product-item-img"> <img :src="`${baseUrl}${item1.banner}`" alt=""> </div>
            <div class="aui-list-product-item-text">
                <h3>{{item1.homeh3}}</h3>
                <div class="aui-list-product-mes-box">
                <div> <span class="aui-list-product-item-price"> <em>¥</em> {{item1.homeem}} </span> <span class="aui-list-product-item-del-price"> {{item1.homespan}} </span> </div>
                <div class="aui-comment">{{item1.pingjia}}</div>
                </div>
            </div>
            </router-link>
            </a>
            </div>
            </div> 
        </van-tab>
        <van-tab title="关注">
            <div class="tab-panel-item">
            <div class="aui-list-product-box aui-list-product-box-clear">
            <a href="javascript:;" class="aui-list-product-item" v-for="item2 in list2"
            :key="item2._id">
                

            <router-link :to="`/detail/${item2._id}?dataName=vipfree`">    
            <div class="aui-list-product-item-img"> <img :src="`${baseUrl}${item2.banner}`" alt=""> </div>
            <div class="aui-list-product-item-text">
                <h3>{{item2.homeh3}}</h3>
                <div class="aui-list-product-mes-box">
                <div> <span class="aui-list-product-item-price"> <em>¥</em> {{item2.homeem}} </span> <span class="aui-list-product-item-del-price"> {{item2.homespan}} </span> </div>
                <div class="aui-comment">{{item2.pingjia}}</div>
                </div>
            </div>
            </router-link>
              

            </a>
            </div>
            </div> 
        </van-tab>
        <van-tab title="足迹">
            <div class="tab-panel-item">
            <div class="aui-list-product-box aui-list-product-box-clear">
                <a href="javascript:;" class="aui-list-product-item">
                    <div class="aui-list-product-item-img">
                        <img src="../assets/img/porduct/sf-7.jpg" alt="">
                    </div>
                    <div class="aui-list-product-item-text">
                        <h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
                        <div class="aui-list-product-mes-box">
                            <div>
                    <span class="aui-list-product-item-price">
                        <em>¥</em>
                        399.99
                    </span>
                                <span class="aui-list-product-item-del-price">
                        ¥495.65
                    </span>
                            </div>
                            <div class="aui-comment">986评论</div>
                        </div>
                    </div>
                </a>
            </div>
            </div> 
        </van-tab>
        <van-tab title="分享">
            <div class="tab-panel-item">
            <div class="aui-list-product-box aui-list-product-box-clear">
            <a href="javascript:;" class="aui-list-product-item">
                <div class="aui-list-product-item-img">
                    <img src="../assets/img/porduct/sf-5.jpg" alt="">
                </div>
                <div class="aui-list-product-item-text">
                    <h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
                    <div class="aui-list-product-mes-box">
                        <div>
                    <span class="aui-list-product-item-price">
                        <em>¥</em>
                        399.99
                    </span>
                            <span class="aui-list-product-item-del-price">
                        ¥495.65
                    </span>
                        </div>
                        <div class="aui-comment">986评论</div>
                    </div>
                    </div>
                </a>
            </div>
            </div>
        </van-tab>
    </van-tabs>
    </div>
    </div> 
</section>


    </div>
</template>
<script>
export default {
    data(){
        return{
           active: 0,
           list1:[],
           list2:[],
           list3:[],
           list4:[]
        }
    },
    mounted(){
       axios({
		   url:'/api/vipfree',
		   method:'get'
	   }).then(
		   res=>{
			   this.list1 = res.data.data
		   }
	   )
	    axios({
		   url:'/api/vipfree',
		   method:'get'
	   }).then(
		   res=>{
			   this.list2 = res.data.data
		   }
	   )
	    axios({
		   url:'/api/vipfree',
		   method:'get'
	   }).then(
		   res=>{
			   this.list3 = res.data.data
		   }
	   )
	    axios({
		   url:'/api/vipfree',
		   method:'get'
	   }).then(
		   res=>{
			   this.list4 = res.data.data
		   }
	   )
    },
    methods:{
        
    }
}
</script>
<style>
.van-tab--active{
   
    width: 1%;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
    text-align: center;
    
    font-size: 0.8rem;
    height: 2.5rem;
    line-height: 2.5rem;
    display: block;

}

</style>


