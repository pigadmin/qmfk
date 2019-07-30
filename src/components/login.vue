<template>
  <div>
    <img src="../assets/login1.jpg" width="100%">

    <group gutter="0">
      <x-input placeholder="请输入您的手机"></x-input>
      <x-input placeholder="请填写手机验证码">
        <x-button slot="right" type="primary" mini style="background: #327af2;border-radius: 36px;">验证码</x-button>
      </x-input>
    </group>

    <div style="margin: 15px;">
      <x-button type="primary" style="background: #327af2;border-radius: 36px;" link="/login">登录</x-button>
    </div>

    <check-icon>我已阅读并同意<a href="/index.php/Home/Api/article/id/3" class="color_main">《注册协议和隐私条款》</a></check-icon>

  </div>
</template>

<script>
  import XInput from "vux/src/components/x-input/index";
  import XButton from "vux/src/components/x-button/index";
  import CheckIcon from "vux/src/components/check-icon/index";

  export default {
    name: "login",
    components: {CheckIcon, XButton, XInput}
  }
</script>

<style scoped>

</style>
