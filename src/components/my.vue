<template>
  <div>
    <div id="banner" style="background:#327af2;height: 5rem;position: relative;"><img
      src="../assets/logo.jpeg"
      style="width: 6rem; position: absolute; top: 10%; left: 10px;">

      <x-button mini type="warn" class="btn_login"  @click.native="login">登录/注册</x-button>
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
      <cell v-show="islogin" title="退出登录" is-link @click.native="exit">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/my2.png">
      </cell>
    </group>
  </div>
</template>

<script>
    import XButton from "vux/src/components/x-button/index";

    export default {
        name: "my",
        components: {XButton},
        data() {
            return {
                islogin: false
            }
        },
        mounted() {
            this.islogin = localStorage.getItem("islogin")

        },
        methods: {
            login() {
                var that = this
                var token = localStorage.getItem("token")
                // console.log(token)
                if (token == null) {
                    this.push("/login")
                    return;
                }
                var api = 'user-info?token=' + localStorage.getItem("token")
                var parm = {}
                this.api_post(api, parm, function (res) {
                    var status = res.info.status
                    // console.log("status：" + status)
                    if (status == "init") {//注册
                        that.push("/info")
                    } else if (status == "bind_card") {//已经绑卡
                        that.push("/edu")
                    } else if (status == "submit_info") {//已提交信息
                        that.push("/edu")
                    } else if (status == "apply_confirm") {//同意申请
                        that.push("/edu")
                    } else if (status == "audit_pass") {//审核通过
                        that.push("/edu")
                    } else if (status == "audit_failure") {//审核失败
                        that.toast("审核失败请联系客服", "text")
                    }
                })
            }, exit() {
                var islogin = localStorage.getItem("islogin")
                if (islogin != null) {
                    localStorage.clear()
                    this.toast("退出成功", "text")
                    this.replace("/")
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
