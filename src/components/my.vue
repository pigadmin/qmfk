<template>
  <div>
    <div id="banner" style="background:#327af2;height: 5rem;position: relative;"><img
      src=""
      style="width: 6rem; position: absolute; top: 10%; left: 10px;">

      <x-button v-show="!this.config.islogin" mini type="warn"  class="btn_login" link="/login" @click.native="login">登录/注册</x-button>
      <!--      <button tabindex="0" type="button" class="mu-button  btn_login mu-raised-button  mu-button-round"-->
      <!--              style="user-select: none; outline: none; -webkit-appearance: none; background-color: rgb(207, 38, 61); width: 3rem; margin-left: -1.5rem;">-->
      <!--        <div class="mu-button-wrapper">-->
      <!--          <div class="mu-ripple-wrapper"></div>-->
      <!--          登录/注册-->
      <!--        </div>-->
      <!--      </button>-->
    </div>

    <group gutter="0">
      <cell title="抢名额" is-link @click.native="login">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/my1.png">
      </cell>
      <cell title="签约合同" is-link link="/order_list">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/my2.png">
      </cell>
      <cell title="关于我们" is-link link="/about">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/my3.png">
      </cell>
      <cell title="联系客服" is-link link="/toushu">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/my4.png">
      </cell>
    </group>
  </div>
</template>

<script>
  import XButton from "vux/src/components/x-button/index";

  export default {
    name: "my",
    components: {XButton},
      methods:{
        login(){
            if (!this.config.islogin) {
                this.push("/login")
            } else {
                this.push("/shehe")
            }
        }
      }
  }
</script>

<style scoped>
  .btn_login {
    position: absolute;
    border-radius: 36px;
    top: 60%;
    left: 50%;
    color: #ffffff;
  }
</style>
