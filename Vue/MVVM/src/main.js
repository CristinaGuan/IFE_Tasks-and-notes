// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'


Vue.config.productionTip = false

/* eslint-disable no-new */
//引入组件
import NavList from './components/navlist.vue'

// 声明全局组件
Vue.component('NavList',NavList);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
