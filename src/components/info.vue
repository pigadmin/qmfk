<template>
  <div id="info">
    <group title-color="black" style="line-height: 80px;font-size: 10px;" title="完善您的申请信息" label-width="1">
      <x-input title="申请金额" placeholder="请输入期望金额" @on-change="info1"></x-input>
      <x-input title="月收入" placeholder="请输入您的月收入" @on-change="info2"></x-input>
      <x-input title="芝麻信用" placeholder="请输入您的芝麻信用分" @on-change="info3"></x-input>
      <x-input title="家庭住址" placeholder="请输入您的身份证地址" @on-change="info4"></x-input>
      <x-input title="工作地址" placeholder="请输入您的工作单位地址，可不填" @on-change="info5"></x-input>
      <x-input title="姓名" placeholder="请输入您的姓名" @on-change="info6"></x-input>
      <x-input title="身份证号码" placeholder="请输入您的身份证号码" @on-change="info7"></x-input>
    </group>
    <group title="紧急联系人">
      <x-input title="姓名" placeholder="请填写紧急联系人姓名" @on-change="info8"></x-input>
      <x-input title="电话" placeholder="请填写紧急联系人电话" @on-change="info9"></x-input>
      <x-input title="关系" placeholder="请填写您和紧急联系人的关系" @on-change="info10"></x-input>
    </group>
    <group title="选择本人具体信息">
      <popup-radio title="是否有信用卡" v-model="sel1" :options="list"></popup-radio>
      <popup-radio title="信用卡是否有过逾期" v-model="sel2" :options="list"></popup-radio>
      <popup-radio title="是否有社保" v-model="sel3" :options="list"></popup-radio>
      <popup-radio title="是否有住房公积金" v-model="sel4" :options="list"></popup-radio>
      <popup-radio title="是否有商业保险" v-model="sel5" :options="list"></popup-radio>
      <popup-radio title="是否有车" v-model="sel6" :options="list"></popup-radio>
      <popup-radio title="是否有房" v-model="sel7" :options="list"></popup-radio>
      <popup-radio title="手机是否已实名认证" v-model="sel8" :options="list"></popup-radio>
    </group>
    <div style="margin: 15px;">
      <x-button type="primary" style="background: #327af2;border-radius: 36px;" @click.native="ok">确认并提交</x-button>
    </div>
  </div>
</template>

<script>
    import {Selector, XInput, XButton} from 'vux'

    export default {
        name: "info",
        components: {XInput, Selector, XButton},
        data() {
            return {
                user: {},
                sel1: '',
                sel2: '',
                sel3: '',
                sel4: '',
                sel5: '',
                sel6: '',
                sel7: '',
                sel8: '',
                list: ['是', '否'],
                sel11: '',

            }
        }, mounted() {
            var that = this
            var token = localStorage.getItem("token")
            // console.log(token)
            if (token == null) {
                this.push("/login")
                return;
            }
            var api = 'user-info?token=' + token
            var parm = {}
            this.api_post(api, parm, function (res) {
                var status = res.info.status
                // console.log("status：" + status)
                if (status == "init") {//注册

                } else if (status == "bind_card") {//已经绑卡

                } else if (status == "submit_info") {//已提交信息
                    that.replace("/edu")
                } else if (status == "apply_confirm") {//同意申请

                } else if (status == "audit_pass") {//审核通过
                    that.replace("/edu")
                } else if (status == "audit_failure") {//审核失败
                    that.toast("审核失败请联系客服", "text")
                }
            })
        }, methods: {
            ok() {
                // console.log(this.user.info1)
                if (this.user.info1 == null || this.user.info1 == "") {
                    this.toast("请输入期望金额", 'warn')
                    return;
                }
                if (this.user.info2 == null || this.user.info2 == "") {
                    this.toast("请输入您的月收入", 'warn')
                    return;
                }
                if (this.user.info3 == null || this.user.info3 == "") {
                    this.toast("请输入您的芝麻信用分", 'warn')
                    return;
                }
                if (this.user.info4 == null || this.user.info4 == "") {
                    this.toast("请输入您的身份证地址", 'warn')
                    return;
                }
                if (this.user.info5 == null || this.user.info5 == "") {
                    // this.toast("请输入您的工作单位地址, 'warn')
                    // return;
                }
                if (this.user.info6 == null || this.user.info6 == "") {
                    this.toast("请输入您的姓名", 'warn')
                    return;
                }
                if (this.user.info7 == null || this.user.info7 == "") {
                    this.toast("请输入您的身份证号码", 'warn')
                    return;
                }
                if (this.user.info8 == null || this.user.info8 == "") {
                    this.toast("请填写紧急联系人姓名", 'warn')
                    return;
                }
                if (this.user.info9 == null || this.user.info9 == "") {
                    this.toast("请填写紧急联系人电话", 'warn')
                    return;
                }
                if (this.user.info10 == null || this.user.info19 == "") {
                    this.toast("请填写您和紧急联系人的关系", 'warn')
                    return;
                }
                if (this.sel1 == null || this.sel1 == "") {
                    this.toast("请确认您是否持有信用卡", 'warn')
                    return;
                } if (this.sel2 == null || this.sel2 == "") {
                    this.toast("请确认您的信用卡是否有过逾期记录", 'warn')
                    return;
                } if (this.sel3 == null || this.sel3== "") {
                    this.toast("请确认您是否有缴纳社保", 'warn')
                    return;
                } if (this.sel4 == null || this.sel4 == "") {
                    this.toast("请确认您是否有缴纳住房公积金", 'warn')
                    return;
                } if (this.sel5 == null || this.sel5 == "") {
                    this.toast("请确认您是否有商业保险", 'warn')
                    return;
                } if (this.sel6== null || this.sel6 == "") {
                    this.toast("请确认您是否有车", 'warn')
                    return;
                } if (this.sel7== null || this.sel7 == "") {
                    this.toast("请确认您是否有房", 'warn')
                    return;
                } if (this.sel8 == null || this.sel8 == "") {
                    this.toast("请确认您的手机是否已实名认证", 'warn')
                    return;
                }
                var that = this
                // console.log(this.user)
                var api = 'vi?token=' + localStorage.getItem("token")
                var parm = {}
                parm.applyQuota = this.user.info1//期望金额
                parm.salary = this.user.info2//月收入
                parm.zhimaVi = this.user.info3//芝麻
                parm.resAddress = this.user.info4//身份证地址
                parm.companyAddress = this.user.info5//单位地址
                parm.name = this.user.info6//名字
                parm.idCard = this.user.info7//名字
                parm.contactsName = this.user.info8//紧急联系人
                parm.contactsPhone = this.user.info9//紧急联系人手机
                parm.contactsRelation = this.user.info10//紧急联系人关系
                var otherVi={}
                otherVi.creditCard=(this.sel1=='是'?true:false)
                otherVi.creditOverdue=(this.sel2=='是'?true:false)
                otherVi.shebao=(this.sel3=='是'?true:false)
                otherVi.gongjijing=(this.sel4=='是'?true:false)
                otherVi.insurance=(this.sel5=='是'?true:false)
                otherVi.car=(this.sel6=='是'?true:false)
                otherVi.house=(this.sel7=='是'?true:false)
                otherVi.phoneAuth=(this.sel8=='是'?true:false)
                var pjson=JSON.stringify(otherVi)
                console.log(pjson)
                parm.otherVi = pjson
                this.api_post(api, parm, function (res) {
                    // console.log(res)
                    that.toast("提交成功", "text")
                    that.replace("/edu")
                })
            },


            info1(res) {
                this.user.info1 = res
            }, info2(res) {
                this.user.info2 = res
            }, info3(res) {
                this.user.info3 = res
            }, info4(res) {
                this.user.info4 = res
            }, info5(res) {
                this.user.info5 = res
            }, info6(res) {
                this.user.info6 = res
            }, info7(res) {
                this.user.info7 = res
            }, info8(res) {
                this.user.info8 = res
            }, info9(res) {
                this.user.info9 = res
            }, info10(res) {
                this.user.info10 = res
            }, info11() {
                console.log(this.sel11)

            }

        }


    }
</script>

<style scoped>
  #info {
  }

  #info group {

  }

</style>
