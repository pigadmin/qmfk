<template>
  <tabbar>
    <tabbar-item :selected="path == '/'" link="/">
      <img slot="icon" src="../assets/tabbar1.png">
      <img slot="icon-active" src="../assets/tabbar1.png">
      <span slot="label">全民放款</span>
    </tabbar-item>
    <tabbar-item :selected="path == '/my'" link="/my">
      <img slot="icon" src="../assets/tabbar2.png">
      <img slot="icon-active" src="../assets/tabbar2.png">
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
</template>
<style>
  .add {
    height: 40px;
    width: 40px;
    max-height: 40px;
  }

  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
    color: #3F9DE7 !important;
  }
</style>
<script>
  import {Tabbar, TabbarItem} from 'vux'

  export default {
    name: 'foot',
    components: {
      Tabbar,
      TabbarItem,
    },
    data() {
      return {
        msg: '',
        path: '/main'
      }
    },
    mounted() {
      this.path = this.$router.currentRoute.path
    }
  }
</script>
