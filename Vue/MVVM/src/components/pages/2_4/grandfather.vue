<template>
	<div>
		<p class="grandfather">我是更高层父组件：{{grandfatherTip}}</p>
	</div>
	
</template>
<script>
	export default{
		data(){
			return{
              grandfatherTip:'我也静静等待用户输入'
			}
		}
	}
</script>
<style type="text/css" media="screen" scoped>

	.grandfather{
		color: #FC33F0;
	}
</style>