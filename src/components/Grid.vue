<template>
    <div class="aui-grid-row"> 
    <a href="javascript:;" class="aui-grid-row-item" @click="gozhuanji"> <i class="aui-icon-large aui-icon-sign"></i>
      <p class="aui-grid-row-label">专辑</p>
      </a> <a href="javascript:;" class="aui-grid-row-item"  @click="gozhuanji"> <i class="aui-icon-large aui-icon-time"></i>
      <p class="aui-grid-row-label">套餐</p>
      </a> <a href="javascript:;" class="aui-grid-row-item" @click="govip"> <i class="aui-icon-large aui-icon-vip"></i>
      <p class="aui-grid-row-label">热卖</p>
      </a> <a href="javascript:;" class="aui-grid-row-item" @click="gopingtuan"> <i class="aui-icon-large aui-icon-group"></i>
      <p class="aui-grid-row-label">拼团</p>
      </a> <a href="javascript:;" class="aui-grid-row-item"  @click="gofenglei"> <i class="aui-icon-large aui-icon-share"></i>
      <p class="aui-grid-row-label">分类</p>
      </a> </div>
</template>

<script>
export default {
    methods:{
        gozhuanji(){
            this.$router.push('zhuanji')
        },
        govip(){
            this.$router.push('vip')
        },
        gopingtuan(){
            this.$router.push('pingtuan')
        },
        gofenglei(){
            this.$router.push('fenglei')
     }
    }
}
</script>
<style>
 @import url('../assets/css/home.css');
@import url('../assets/css/icon.css');
@import url('../assets/css/core.css');
</style>

