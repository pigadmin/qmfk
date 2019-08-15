<template>
  <div>
    <img src="../assets/login1.jpg" width="100%">

    <group gutter="0">
      <x-input style="border-radius: 33px;" placeholder="请输入您的手机" @on-change="change_phone" :max="11"
               type="number"></x-input>
      <x-input placeholder="请填写手机验证码" @on-change="change_code" :max="6" type="number">
        <x-button :disabled="disable" slot="right" type="primary" mini style="background: #327af2;border-radius: 36px;"
                  @click.native="code()">{{codetext}}
        </x-button>
      </x-input>
    </group>
    <!--    <group gutter="0">-->
    <!--      <x-input style="border-radius: 33px;" placeholder="请输入您的手机" @on-change="change_phone" :max="11"-->
    <!--               type="number" value="17379731272"></x-input>-->
    <!--      <x-input placeholder="请填写手机验证码" @on-change="change_code" :max="6" type="number" value="631245">-->
    <!--        <x-button :disabled="disable" slot="right" type="primary" mini style="background: #327af2;border-radius: 36px;"-->
    <!--                  @click.native="code()">{{codetext}}-->
    <!--        </x-button>-->
    <!--      </x-input>-->
    <!--    </group>-->

    <div style="margin: 15px;">
      <x-button type="primary" style="background: #327af2;border-radius: 36px;" @click.native="login">登录</x-button>
    </div>

    <div style="text-align: center">
      <check-icon :value.sync="check">我已阅读并同意</check-icon>
      <a @click="article" style="color: #4C7BD3;">《注册协议和隐私条款》</a>
    </div>
    <!--    <div-->
    <!--      style="display: block; width: 100%; margin: 0px auto; font-size: 14px; color: rgb(203, 203, 203); line-height: 24px; text-align: center;">-->
    <!--      投诉热线 <a href="tel:"><span class="color_main" style="margin-left: 10px;"></span></a></div> -->
    <div
      style="display: block; width: 100%; margin: 0px auto; font-size: 14px; color: rgb(203, 203, 203); line-height: 24px; text-align: center;">
      全民放款
    </div>
    <!--    <div-->
    <!--      style="display: block; width: 100%; margin: 0px auto; font-size: 14px; color: rgb(203, 203, 203); line-height: 24px; text-align: center;">-->
    <!--      全民放款-->
    <!--    </div>-->
    <div
      style="display: block; width: 100%; margin: 0px auto; font-size: 14px; color: rgb(203, 203, 203); line-height: 24px; text-align: center;">
      预估额度仅供参考，具体审批以持牌资方为准
    </div>
  </div>

</template>

<script>
    import XInput from "vux/src/components/x-input/index";
    import XButton from "vux/src/components/x-button/index";
    import CheckIcon from "vux/src/components/check-icon/index";

    var v = null
    export default {
        name: "login",
        components: {CheckIcon, XButton, XInput},
        data() {
            return {
                codetext: '验证码',
                timout: 60,
                phone: '',
                codes: '',
                disable: false,
                check: true
            }
        },
        destroyed() {
            clearInterval(v)
        },
        methods: {
            change_phone(res) {
                this.phone = res
                // console.log("phone" + this.phone)
            }, change_code(res) {
                this.codes = res
                // console.log("code" + this.codes)
            },
            login() {
                var that = this
                if (!this.check) {
                    this.confirm('', '请阅读并同意下方条款', false)
                    return;
                }
                if (this.phone == '') {
                    this.confirm('', '电话号码不能为空', false)
                    return;
                }
                if (this.codes == '') {
                    this.confirm('', '验证码不能为空', false)
                    return;
                }
                var api = 'login'
                // this.push("/info")
                // return;
                // var api = 'register'
                var parm = {}
                // parm.phone=this.phone
                parm.mobile = this.phone
                parm.code = this.codes
                this.api_post(api, parm, function (res) {
                    // console.log(res)
                    localStorage.setItem("islogin",true)
                    localStorage.setItem("token",res.token)
                    that.config.islogin = true
                    that.replace("/info")
                }
                // , function (res) {
                //     that.register();
                //     // if (res.msg == '用户不存在') {
                //     //
                //     // } else {
                //     //     that.confirm('', res.msg, false)
                //     // }
                // }
                )

            }, register() {
                var that = this
                var api = 'register'
                var parm = {}
                parm.phone = this.phone
                this.api_post(api, parm, function (res) {
                    // console.log(res)
                    that.login();
                })
            },
            code(res) {
                // console.log(this.phone)
                var that = this
                // that.disable = false
                // setTimeout(function () {
                //     that.disable = true
                // }, 1000)

                if (this.phone == '') {
                    this.confirm('', '请填写电话号码', false)
                    return;
                }
                if (this.phone.length < 11) {
                    this.confirm('', '请填写正确的11位电话号码', false)
                    return;
                }

                var api = 'register_code?phone=' + this.phone
                // console.log(api)
                var parm = {}
                parm.phone = this.phone
                this.api_post(api, parm, function (res) {
                    // console.log(res)
                    that.toast("发送成功")
                    v = setInterval(function () {
                        if (that.timout == 0) {
                            clearInterval(v)
                            that.timout = 60
                            that.codetext = '验证码'
                            if (that.disable) {
                                that.disable = false
                            }
                        } else {
                            // console.log(that.timout)
                            if (!that.disable) {
                                that.disable = true
                            }
                            that.timout--
                            that.codetext = that.timout
                        }

                    }, 1000)
                })

            }, article() {
                this.push("/article")
            }
        }

    }
</script>

<style scoped>

</style>
