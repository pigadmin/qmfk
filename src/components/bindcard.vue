<template>
  <div>
    <group gutter="0" title-color="black" style="line-height: 80px;" title="请填写资料绑定银行卡">

    </group>
    <group title="持卡人信息" label-width="1">
      <x-input title="姓名" placeholder="请输入您的姓名" @on-change="bindcard1"></x-input>
      <x-input title="身份证号码" placeholder="请输入您的身份证号码" @on-change="bindcard2"></x-input>
      <x-input title="银行卡号" placeholder="请输入您的银行卡号" @on-change="bindcard3"></x-input>
      <x-input title="手机号" placeholder="请输入您的手机号" @on-change="bindcard4"></x-input>
      <!--      <x-input title="验证码" placeholder="请填写手机验证码" @on-change="change_code" :max="6" type="number">-->
      <!--        <x-button :disabled="disable" slot="right" type="primary" mini style="background: #327af2;border-radius: 36px;"-->
      <!--                  @click.native="code">{{codetext}}-->
      <!--        </x-button>-->
      <!--      </x-input>-->
    </group>

    <div style="margin: 15px;">
      <x-button type="primary" style="background: #327af2;border-radius: 36px;" @click.native="ok">提交</x-button>
    </div>

  </div>
</template>

<script>
    export default {
        name: "bindcard",
        data() {
            return {
                codetext: '验证码',
                timout: 60,
                phone: '',
                codes: '',
                bindcard: {}
            }
        }
        , methods: {
            change_code() {
            }, code(res) {
                this.codes = res
            }, ok() {
                var that = this
                var token = localStorage.getItem("token")
                // console.log(token)
                if (token == null) {
                    this.push("/login")
                    return;
                }
                if (this.bindcard.name == null || this.bindcard.name == "") {
                    this.toast("请输入您的姓名", 'warn')
                    return;
                }
                if (this.bindcard.idCard == null || this.bindcard.idCard == "") {
                    this.toast("请输入您的身份证号码", 'warn')
                    return;
                }
                if (this.bindcard.bankCard == null || this.bindcard.bankCard == "") {
                    this.toast("请输入您的银行卡号", 'warn')
                    return;
                }
                if (this.bindcard.phone == null || this.bindcard.phone == "") {
                    this.toast("请输入您的手机号", 'warn')
                    return;
                }


                var api = 'bind-card?token=' + token
                var parm = {}
                parm.name = this.bindcard.name
                parm.idCard = this.bindcard.idCard
                parm.bankCard = this.bindcard.bankCard
                parm.phone = this.bindcard.phone
                this.api_post(api, parm, function (res) {
                    // console.log(res)
                    that.toast("绑定成功，请耐心等待")
                    setTimeout(function () {
                        that.replace("/edu")
                    }, 2 * 1000)
                })
            }, bindcard1(res) {
                this.bindcard.name = res
            }, bindcard2(res) {
                this.bindcard.idCard = res
            }, bindcard3(res) {
                this.bindcard.bankCard = res
            }, bindcard4(res) {
                this.bindcard.phone = res
            }
        }
    }
</script>

<style scoped>


</style>
