
<template>
	<div id="fourBox">
		<son></son>
		<father></father>
		<grandfather></grandfather>		
	</div>
</template>
<script>
	import son from './son.vue'
	import father from './father.vue'
	import grandfather from './grandfather.vue'
	export default{
		data(){
			return{

			}
		},
		components:{
			son:son,
			father:father,
			grandfather:grandfather
		}
	}
</script>
<style type="text/css" media="screen" scoped>
	#fourBox{
		width: 50%;
		margin: 10px auto;
		border: 1px solid #ddd;
		text-align: left;
		padding: 10px;
	}
</style>