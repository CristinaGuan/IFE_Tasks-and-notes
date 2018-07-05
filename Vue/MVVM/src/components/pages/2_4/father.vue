<template>
  <div>
    <!-- 在父组件中，声明了一个方法getSonText，用 getCalled 事件调用 getSonText方法，获取到从子组件传递过来的参数fatherTip  -->
    <son @getCalled="getSonText" v-bind:propTextTip="fatherTip"></son>
    <p class="father">我是父组件：
    <input type="text" v-model.trim="fatherTip" @change="callGrandfather"></p>
  </div>
</template>
<script>
	import son from './son.vue'
    import connector from './connect.js';
export default {
  data() {
    return {
      fatherTip: '静静等待用户输入',
    }
  },
  components: {
    son: son
  },
  methods: {
    getSonText: function(msg) {
      this.fatherTip = msg;
      this.callGrandfather();
    },
    callGrandfather:function(){
      console.log(this.fatherTip);
      connector.$emit('getgrandsonCalled',this.fatherTip);
    }
  }
}

</script>
<style type="text/css" media="screen" scoped>
.father {
  color: #33FA73;
}

</style>
