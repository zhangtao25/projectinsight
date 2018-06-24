import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './../components/HelloWorld'
import nav from './../components/nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/nav'
    },
    {
      path: '/nav',
      name: 'nav',
      component: nav
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },

  ]
})
