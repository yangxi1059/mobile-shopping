<template>
    <section class="aui-list-product">
        <div class="aui-list-product-box">
            <div  v-for="(item) of list" :key="item._id">
            <router-link :to="`/detail/${item._id}?dataName=tuijian`"  >
            <a href="javascript:;" class="aui-list-product-item">
            <div class="aui-list-product-item-img"> <img :src="`${baseUrl}${item.banner}`" alt=""> </div>
            <div class="aui-list-product-item-text">
                <h3>{{item.homeh3}}</h3>
                <div class="aui-list-product-mes-box">
                <div> <span class="aui-list-product-item-price"> <em>¥</em> {{item.homeem}} </span> <span class="aui-list-product-item-del-price"> {{item.homespan}} </span> </div>
                <div class="aui-comment">{{item.homepingjia}}</div>
                </div>
            </div>
            </a> 
            
            </router-link>
            </div>
        </div>
	</section>
</template>


<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    mounted(){
        axios({
            url:'/api/tuijian',
        }).then(
            (res)=>{
                this.list = res.data.data
                console.log(this.list)
            }
        )
    }
}
</script>

<style>

</style>
