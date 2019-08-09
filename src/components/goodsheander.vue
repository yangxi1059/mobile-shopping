<template>
    <header class="aui-header-default aui-header-fixed aui-header-bg">
		<a href="javascript:history.back(-1)" class="aui-header-item">
			<i class="aui-icon aui-icon-back-white"></i>
		</a>
		<div class="aui-header-center aui-header-center-clear">
			<div class="aui-header-center-logo">
				<div class="aui-car-white-Typeface">{{list}}</div>
			</div>
		</div>
		<a href="javascript:;" class="aui-header-item-icon" style="min-width:0">
			<i class="aui-icon aui-icon-search"></i>
		</a>
	</header>

</template>


<script>
export default {
	props:['list'],
	data(){
		return{
			
		}
	}
}
</script>
