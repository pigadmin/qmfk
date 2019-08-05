// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import Resource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(Resource)

import App from './App'
import index from './components/index'
import my from './components/my'
import about from './components/about'
import toushu from './components/toushu'
import login from './components/login'
import info from './components/info'
import edu from './components/edu'
import bindcard from './components/bindcard'
import shenhe from './components/shenhe'
import article from './components/article'
import order_list from './components/order_list'

import {Cell} from 'vux'
import {Group} from 'vux'

Vue.component('group', Group)
Vue.component('cell', Cell)


import TITLE from 'vue-wechat-title'
import REM from 'lib-flexible/flexible'

Vue.use(TITLE)
Vue.use(REM)

import {ToastPlugin} from 'vux'
import {ConfirmPlugin} from 'vux'

Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)

// http://120.79.174.1:9097/zcm/app/config?key=reg_back&token=
Vue.prototype.config = {
  // url: 'http://120.79.174.1:9097/zcm/app',
  url: 'http://121.127.249.26:9097/zcm/app/',
  islogin: false,
};

Vue.prototype.api_post = function (api, parm, success, fail) {
  var url = this.config.url + api
  console.log(url)
  this.$http.post(url, parm).then(function (res) {
    // console.log(res.data)
    if (res.data.code == 0) {
      success(res.data)
    } else {
      if (fail != null) {
        fail(res.data)
      } else {
        this.toast(res.data.msg, 'warn', 'center')
      }
    }
  }, function (res) {
    this.toast(res.data.msg)
  });

}
Vue.prototype.push = function (link) {
  this.$router.push({path: link})
}
Vue.prototype.replace = function (link) {
  this.$router.replace({path: link})
}
Vue.prototype.toast = function (text, type, position) {
  this.$vux.toast.show({text: text, type: type, position: position})
}
Vue.prototype.confirm = function (title, text, showCancel, time) {
  this.$vux.confirm.show({
    title: title,
    content: text,
    showCancelButton: showCancel,
    onShow() {
    },
    onHide() {

    },
    onCancel() {
    },
    onConfirm() {
    }
  })
  if (time > 0) {
    setTimeout(function () {

    }, time * 1000)
  }

}

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
}, {
  path: '/info',
  component: info,
  meta: {title: '完善您的申请信息'}
}, {
  path: '/edu',
  component: edu,
  meta: {title: '额度申请成功'}
}, {
  path: '/bindcard',
  component: bindcard,
  meta: {title: '签约绑卡'}
}, {
  path: '/shenhe',
  component: shenhe,
  meta: {title: '等待审核'}
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
