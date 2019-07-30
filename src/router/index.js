import Vue from 'vue'
import Router from 'vue-router'
import my from '@/components/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'my',
      component: my
    }
  ]
})
