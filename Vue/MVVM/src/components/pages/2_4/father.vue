<template>
	<div>
			<p class="father">我是父组件：{{fatherTip}}</p>
	</div>

</template>
<script>
	export default{
		data(){
			return{
              fatherTip:'静静等待用户输入',
			}
		}
	}
</script>
<style type="text/css" media="screen" scoped>
	.father{
		color: #33FA73;
	}

</style>