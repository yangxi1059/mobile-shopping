<template>
<div class="tuishou">

    <goodsheander :list="list"></goodsheander>
    <section class="aui-myOrder-content">
		<div>
			<img src="../assets/img/bg/icon-jp.png" width="100%" alt="">
		</div>
	</section>
</div>
</template>

<script>
import goodsheander from '../components/goodsheander'

export default {
    data(){
        return{
            list:'商品推手'
        }
    }    ,
    components:{
        goodsheander
    }

}
</script>
