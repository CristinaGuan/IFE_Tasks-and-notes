<template>
  <div>
    <span>子组件</span>
    <input type="text" name="" v-model.trim="textTip">
    <button type="button" class="btn btn-success btn-xs" v-on:click="callFather">通知父组件</button>
  </div>
</template>
<script>


export default {
  data() {
    return {
      textTip:this.propTextTip
    }
  },
   props:['propTextTip'],
  methods:{
  	callFather:function() {
  		//发射信号
  		console.log(this.textTip);
  		this.$emit('getCalled',this.textTip);
  		//其中 getCalled 是一个自定义的事件，功能类似于一个中转
  	}
  }
}

</script>
<style type="text/css" media="screen" scoped>


</style>
