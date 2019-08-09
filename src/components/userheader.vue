<template>
<div class="header">
    <header class="aui-header-default aui-header-fixed aui-header-bg">
		<a href="javascript:;" class="aui-header-item">
			<div id="scrollSearchDiv" style="display: none;">
				<img src="../assets/img/user/head-3.jpg" alt="">
			</div>
		</a>
		<div class="aui-header-center aui-header-center-clear">
			<div class="">

			</div>
		</div>
		<a href="javascript:;" class="aui-header-item-icon">
			<i class="aui-icon aui-icon-Set" @click="gosetting"></i>
		</a>
	</header>
</div>
</template>
<script>
export default {
    methods:{
        gosetting(){
            this.$router.push('setting')
        }
    }
}
</script>


<style>
.aui-header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
}
.aui-header-default {
    height: 2.8rem;
    line-height: 2.8rem;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background-color: #ccc;
}
.aui-header-bg {
    background: url(../assets/img/ad/header-bg.png) no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.aui-header-item:first-child {
    order: 1;
    margin-right: -25%;
}
.aui-header-item {
    height: 2.8rem;
    line-height: 2.8rem;
    min-width: 25%;
    flex: 0 0 25%;
    padding: 0 0.8rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    font-size: 0.3rem;
    white-space: nowrap;
    overflow: hidden;
    color: #5C5C5C;
}
.aui-header-center-clear {
    width: 100%;
    margin-left: 13%;
}
.aui-header-item-icon:last-child {
    -webkit-box-ordinal-group: 4;
    -webkit-order: 3;
    -ms-flex-order: 3;
    order: 3;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}
.aui-header-item-icon {
    height: 2.8rem;
    min-width: 19%;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 13%;
    -ms-flex: 0 0 13%;
    flex: 0 0 13%;
    padding: 0 0.8rem 0 0;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 0.3rem;
    white-space: nowrap;
    overflow: hidden;
    color: #5C5C5C;
}
</style>
