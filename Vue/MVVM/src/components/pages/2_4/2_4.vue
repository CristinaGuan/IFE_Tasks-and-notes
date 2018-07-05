<template>
  <div id="fourBox">
    <grandfather>
    </grandfather>
  </div>
</template>
<script>
import grandfather from './grandfather.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    grandfather: grandfather
  }
}

</script>
<style type="text/css" media="screen" scoped>
#fourBox {
  width: 50%;
  margin: 10px auto;
  border: 1px solid #ddd;
  text-align: left;
  padding: 10px;
}

</style>
