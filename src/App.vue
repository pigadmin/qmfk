<template>
  <div id="app" style="height:100vh;">
    <view-box>
      <router-view v-wechat-title='$route.meta.title'></router-view>
      <foot v-show="$route.meta.showfoot" style="position: fixed;"></foot>
    </view-box>
  </div>

</template>

<script>
    import Foot from "./components/foot";
    import ViewBox from "vux/src/components/view-box/index";

    export default {
        name: 'app',
        components: {ViewBox, Foot}
    }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
    font-family: -apple-system-font, Helvetica Neue, sans-serif;
  }
</style>
