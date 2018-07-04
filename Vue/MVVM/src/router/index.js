import Vue from 'vue'
import Router from 'vue-router'

//引入组件
import NavList from '@/components/navlist.vue'
import Page2_1 from '@/components/pages/2_1.vue'
import Page2_2 from '@/components/pages/2_2.vue'
import Page2_4 from '@/components/pages/2_4/2_4.vue'

Vue.use(Router)

export default new Router({
  //VueRouter：配置路由规则
  routes: [
    // {name: 'home', path: '/', component:NavList},
    { name: 'page2_1', path: '/page2_1', component: Page2_1 },
    { name: 'page2_2', path: '/page2_2', component: Page2_2 },
    { name: 'page2_4', path: '/page2_4', component: Page2_4 }
  ]
})
