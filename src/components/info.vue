<template>
  <div>
    <group  title="完善您的申请信息" gutter="50px" group-title-margin-top="40" >
      <x-input title="申请金额" placeholder="请输入期望金额" ></x-input>
      <x-input title="月收入" placeholder="请输入您的月收入"></x-input>
      <x-input title="芝麻信用" placeholder="请输入您的芝麻信用分"></x-input>
      <x-input title="家庭住址" placeholder="请输入您的身份证地址"></x-input>
      <x-input title="工作地址" placeholder="请输入您的工作单位地址，没有可不填"></x-input>
      <x-input title="姓名" placeholder="请输入您的姓名"></x-input>
      <x-input title="身份证号码" placeholder="请输入您的身份证号码"></x-input>
    </group>
    <group title="紧急联系人">
      <x-input title="姓名" placeholder="请填写紧急联系人姓名"></x-input>
      <x-input title="电话" placeholder="请填写紧急联系人电话"></x-input>
      <x-input title="关系" placeholder="请填写您和紧急联系人的关系"></x-input>
    </group>
    <group title="选择被人具体信息">
      <selector placeholder="是否有信用卡" v-model="sel1" :options="list"></selector>
      <selector placeholder="信用卡是否有过逾期" v-model="sel2" :options="list"></selector>
      <selector placeholder="是否有社保" v-model="sel3" :options="list"></selector>
      <selector placeholder="是否有住房公积金" v-model="sel4" :options="list"></selector>
      <selector placeholder="是否有商业保险" v-model="sel5" :options="list"></selector>
      <selector placeholder="是否有车" v-model="sel6" :options="list"></selector>
      <selector placeholder="是否有房" v-model="sel7" :options="list"></selector>
      <selector placeholder="手机是否已实名认证" v-model="sel8" :options="list"></selector>
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
                sel1: '',
                sel2: '',
                sel3: '',
                sel4: '',
                sel5: '',
                sel6: '',
                sel7: '',
                sel8: '',
                list: [{key: 'y', value: '是'}, {key: 'n', value: '否'}],

            }
        }, methods: {
            ok() {
                this.push("/edu")
            }
        }


    }
</script>

<style scoped>

</style>
