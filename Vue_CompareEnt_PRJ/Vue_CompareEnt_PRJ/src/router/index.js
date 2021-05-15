import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import EntCompare from '@/pages/EntCompare'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/compare',
      name: 'EntCompare',
      component: EntCompare
    }
  ]
})
