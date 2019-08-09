<template>
    <section class="aui-card-content ">

  <div class="aui-card-media" v-for="item in list" :key="item._id">
      <router-link :to="`/detail/${item._id}?dataName=${dataName}`">

            <div class="aui-card-media-item"> <img :src="`${baseUrl}${item.xueyuanbanner}`"> </div>
            <div class="aui-card-media-inner">
            <div class="aui-card-media-text">
                <p>{{item.xueyuanp}}</p>
            </div>
            <div class="aui-card-media-describe"> <span>{{item.xueyuanspan1}}</span> <span>{{item.xueyuanspan2}}</span> <span><img src="../assets/img/ad/eye.png" alt="">{{item.xueyuanspan3}}</span> </div>
            </div>
    </router-link>
    </div>

</section>
</template>
<script>
export default {
     props:['list','dataName']
}
</script>


<style>
    .aui-card-content {
    position: relative;
    margin-bottom: 0.75rem;
    background: #ffffff;
}
.aui-card-media {
    box-sizing: border-box;
    display: flex;
    padding: 0 0.7rem;
    border-bottom: 1px solid #ccc;
    position: relative;
}
.aui-card-media-item {
    width: 40%;
    position: relative;
    padding: 0.5rem 0;
    padding-right: 0.75rem;
    display: inherit;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    -webkit-align-items: flex-start;
    align-items: flex-start;
        float: left;
}
.aui-card-media-inner {
    position: relative;
    min-height: 0.7rem;
    padding-right: 0.75rem;
    width: 100%;
    padding-top: 0.5rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.aui-card-media-item img {
    width: 100%;
    display: block;
    max-width: 100%;
    border: none;
    height: auto;
}
.aui-card-media-text {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    word-break: break-all;
    white-space: normal !important;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-weight: 500;
    font-size: 0.9rem;
}   
.aui-card-media-describe {
    color: #999;
    padding-top: .6rem;
}
.aui-card-media-describe span {
    color: #999;
    padding: 0 6px 0 0;
}
.aui-card-media-describe span img {
    display: inline-block;
    vertical-align: top;
}
</style>
