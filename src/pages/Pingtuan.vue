<template>
    <div class="pingtuan">
    <goodsheander :list="list"></goodsheander>
    <section class="n-tabs">
		<ul class="n-tabContainer" id="auto-id-1509603311057">
			<li class="n-tabItem" data-id="homepage">
				<a href="javascript:;" id="homepage" class="current">精选</a>
			</li>
			<li class="n-tabItem" data-id="44114">
				<a href="javascript:;" id="44114" class="">美容护肤</a>
			</li>
			<li class="n-tabItem" data-id="15394">
				<a href="javascript:;" id="15394" class="">日常用品</a>
			</li>
			<li class="n-tabItem" data-id="01436">
				<a href="javascript:;" id="01436" class="">家庭养生</a>
			</li>
			<li class="n-tabItem" data-id="18211">
				<a href="javascript:;" id="18211" class="">养生保健</a>
			</li>
			<li class="n-tabItem" data-id="83651">
				<a href="javascript:;" id="83651" class="">环保节能</a>
			</li>
			<li class="n-tabItem" data-id="37957">
				<a href="javascript:;" id="37957" class="">火疗产品</a>
			</li>

		</ul>
	</section>

    <section class="aui-Purchase-content" style="padding:0 0 50px 0;">
		<div class="aui-list-product-box aui-list-product-box-clear">
			<a href="javascript:;" class="aui-list-product-item">
				<div class="aui-list-product-item-img">
					<img src="../assets/img/porduct/sf-8.jpg" alt="">
					<span class="aui-Purchase-tag">2人团</span>
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
						<div class="aui-comment">已团134件</div>
					</div>
				</div>
			</a>
		
		</div>
	</section>
    </div>
</template>


<script>
import goodsheander from '../components/goodsheander'
export default {
    data(){
        return{
            list:'拼团购物'
        }
    },
    components:{
        goodsheander
    }

}
</script>


<style>
    .aui-Purchase-content{
        margin-top: 90px
    }

</style>
