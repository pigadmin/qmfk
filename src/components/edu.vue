<template>
  <div>
    <img src="../assets/login1.jpg" width="100%">

    <div style="text-align: center;font-size: 18px;padding: 10px;" >预测额度<span style="color: goldenrod;">  ¥6,300</span></div>
    <div style="text-align: center;font-size: 16px;">借多少期</div>
    <div style="text-align: center;font-size: 36px;"><b>{{data12}}</b></div>
    <div style="text-align: center;padding: 20px;" ><range v-model="data12" :min="3" :max="36"></range></div>
    <div style="text-align: center;font-size: 18px;padding: 10px;background: #ffffff;" >预测月还款金额：<span style="color: goldenrod;">568.47元</span></div>
    <div style="text-align: center;padding: 20px 0px 0px 0;">
      <check-icon :value.sync="check">我已阅读并同意<a href="/article" class="color_main">《注册协议和隐私条款》</a></check-icon>
    </div>
    <div style="margin: 15px;">
      <x-button type="primary" style="background: #327af2;border-radius: 36px;" @click.native="ok">极速申请</x-button>
    </div>

    <div
      style="display: block; width: 100%; margin: 0px auto; font-size: 14px; color: rgb(203, 203, 203); line-height: 24px; text-align: center;">
      借款金额和还款金额以推荐办理的平台为准
    </div>
  </div>

</template>

<script>
    import {CheckIcon, XButton, Range} from 'vux'

    var v = null
    export default {
        name: "login",
        components: {CheckIcon, XButton, Range},
        data() {
            return {
                check: true,
                data12:12,
            }
        },
        methods: {

            ok() {
                if (!this.check) {
                    this.confirm('', '请阅读并同意下方条款', false)
                    return;
                }

                // if (this.phone == '') {
                //     this.confirm('', '电话号码不能为空', false)
                //     return;
                // }
                // if (this.codes == '') {
                //     this.confirm('', '验证码不能为空', false)
                //     return;
                // }
                // var api = 'login?mobile=' + this.phone + "&code=402512" + this.codes
                this.push("/bindcard")
                return;
                var api = 'register'
                var url = this.config.url + api
                console.log(url)
                this.$http({
                    body: {
                        phone: this.phone,
                    }
                }).post(url).then(function (res) {
                    console.log(res.data)
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

            },


        }

    }
</script>

<style scoped>

</style>
