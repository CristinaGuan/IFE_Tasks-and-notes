<template>
  <div>
    <father @getgrandsonCalled="getGrandsonText"></father>
    <p class="grandfather">我是更高层父组件：{{grandfatherTip}}</p>
  </div>
</template>
<script>
import father from './father.vue'
 import connector from './connect.js';
export default {
  data() {
    return {
      grandfatherTip: '我也静静等待用户输入'
    }
  },
  components: {
    father: father
  },
  methods:{
    getGrandsonText:function(msg){
      this.grandfatherTip=msg;
    }
  },
  mounted: function () {
      var vm = this
      // 用$on事件来接收参数
      connector.$on('getgrandsonCalled', (data) => {
        console.log(data);
        var vm=this;
        vm.grandfatherTip=data;
      })
    },
}

</script>
<style type="text/css" media="screen" scoped>
.grandfather {
  color: #FC33F0;
}

</style>
