// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import index from './components/index'
import my from './components/my'
import about from './components/about'
import toushu from './components/toushu'
import login from './components/login'
import article from './components/article'
import order_list from './components/order_list'

import TITLE from 'vue-wechat-title'
import REM from 'lib-flexible/flexible'
import {Cell} from 'vux'
import {Group} from 'vux'

Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.use(VueRouter)
Vue.use(TITLE)
Vue.use(REM)


const routes = [{
  path: '/',
  component: index,
  meta: {title: '首页'}
}, {
  path: '/my',
  component: my,
  meta: {title: '个人中心'}
}, {
  path: '/about',
  component: about,
  meta: {title: '关于我们'}
}, {
  path: '/toushu',
  component: toushu,
  meta: {title: '详细'}
}, {
  path: '/order_list',
  component: order_list,
  meta: {title: '订单'}
}, {
  path: '/login',
  component: login,
  meta: {title: '登录'}
}, {
  path: '/article',
  component: article,
  meta: {title: '详细'}
}]

const router = new VueRouter({
  mode: 'history',
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
