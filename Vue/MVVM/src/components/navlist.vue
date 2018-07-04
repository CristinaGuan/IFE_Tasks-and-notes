<template>
  <ul class="nav nav-tabs">
    <li class="active"><router-link :to="{name:'page2_1'}">2.1数据操作</router-link></li>
    <li><router-link :to="{name:'page2_2'}">2.2条件和循环</router-link></li>
    <li><router-link :to="{name:'page2_4'}">2.4事件处理</router-link></li>
  </ul>
</template>
<script>
export default {
  name: 'NavList'
}

</script>
<style scoped>
li {
  list-style-type: none;
  display: inline-block;
  margin: 0 5px;
  font-size: 24px;
}

</style>
