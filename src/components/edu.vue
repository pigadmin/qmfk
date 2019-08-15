<template>
  <div>
    <div><img src="../assets/login1.jpg" width="100%">

      <div style="text-align: center;font-size: 18px;padding: 10px;">预测额度<span
        style="color: goldenrod;margin-left: 10px;">  ¥{{toThousands(edu)}}</span></div>
      <div style="text-align: center;font-size: 16px;">借多少期</div>
      <div style="text-align: center;font-size: 36px;"><b>{{data12}}</b></div>
      <div style="text-align: center;padding: 20px;">
        <range v-model="data12" :min="3" :max="36"></range>
      </div>
      <div style="text-align: center;font-size: 18px;padding: 10px;background: #ffffff;">预测月还款金额：<span
        style="color: goldenrod;">{{((edu/data12)+(edu*0.008)).toFixed(2)}}元</span></div>
      <div style="text-align: center;padding: 20px 0px 0px 0;">
        <check-icon :value.sync="check">我已阅读并同意<a @click="article" style="color: #4C7BD3;">《服务合同》</a></check-icon>
      </div>
      <div style="margin: 15px;">
        <x-button type="primary" style="background: #327af2;border-radius: 36px;" @click.native="ok">极速申请</x-button>
      </div>

      <div
        style="display: block; width: 100%; margin: 0px auto; font-size: 14px; color: rgb(203, 203, 203); line-height: 24px; text-align: center;">
        借款金额和还款金额以推荐办理的平台为准
      </div>
    </div>
    <!--    <loading :show="show" text=""></loading>-->
    <!--    <spinner :type="android" :size="index === 3 ? '40px' : ''"></spinner>-->
    <div v-show="show">
      <div id="loading">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <div class="object" id="object_one"></div>
            <div class="object" id="object_two" style="left:20px;"></div>
            <div class="object" id="object_three" style="left:40px;"></div>
            <div class="object" id="object_four" style="left:60px;"></div>
            <div class="object" id="object_five" style="left:80px;"></div>
          </div>
        </div>

      </div>

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
                edu: 0,
                check: true,
                data12: 12,
                show: true,
            }
        }, mounted() {
            var that = this
            var token = localStorage.getItem("token")
            setTimeout(function () {
                that.show = false
            }, 2 * 1000);

            if (token == null) {
                this.push("/login")
                return;
            }
            var api = 'user-info?token=' + token
            var parm = {}
            this.api_post(api, parm, function (res) {
                console.log(res.info)
                that.edu = res.info.order.quota
                console.log("quota：" + res.info.quota)
                if (status == "init") {//注册
                } else if (status == "bind_card") {//已经绑卡
                } else if (status == "submit_info") {//已提交信息
                } else if (status == "apply_confirm") {//同意申请
                } else if (status == "audit_pass") {//审核通过
                } else if (status == "audit_failure") {//审核失败
                }
            })
        },
        methods: {
            tick(i, cb) {
                setTimeout(function () {
                    i++
                    cb(i)
                    if (i < 100) {
                        tick(i, cb)
                    }
                }, 10)
            }
            ,
            ok() {
                if (!this.check) {
                    this.confirm('', '请阅读并同意下方条款', false)
                    return;
                }
                location.href = "http://www.66bkbk.cn:443/dshPay/wx/kjt_bind_card"
                // this.push("/bindcard")
            }
            ,
            article() {
                this.push("/article")
            }, toThousands(num) {
                var result = [], counter = 0;
                num = (num || 0).toString().split('');
                for (var i = num.length - 1; i >= 0; i--) {
                    counter++;
                    result.unshift(num[i]);
                    if (!(counter % 3) && i != 0) {
                        result.unshift(',');
                    }
                }
                return result.join('');
            }

        }

    }
</script>

<style scoped>
  #loading{
    background-color: #327af2;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1;
    margin-top: 0px;
    top: 0px;
  }
  #loading-center{
    width: 100%;
    height: 100%;
    position: relative;
  }
  #loading-center-absolute {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 20px;
    width: 100px;
    margin-top: -10px;
    margin-left: -50px;

  }
  .object{
    width: 20px;
    height: 20px;
    background-color: #FFF;
    -moz-border-radius: 50% 50% 50% 50%;
    -webkit-border-radius: 50% 50% 50% 50%;
    border-radius: 50% 50% 50% 50%;
    margin-right: 20px;
    margin-bottom: 20px;
    position: absolute;
  }


  #object_one{
    -webkit-animation: object 2s linear infinite;
    animation: object 2s linear infinite;
  }
  #object_two{
    -webkit-animation: object 2s linear infinite -.4s;
    animation: object 2s linear infinite -.4s;
  }
  #object_three{
    -webkit-animation: object 2s linear infinite -.8s;
    animation: object 2s linear infinite -.8s;
  }
  #object_four{
    -webkit-animation: object 2s linear infinite -1.2s;
    animation: object 2s linear infinite -1.2s;
  }
  #object_five{
    -webkit-animation: object 2s linear infinite -1.6s;
    animation: object 2s linear infinite -1.6s;
  }


  @-webkit-keyframes object{
    0% { left: 100px; top:0}
    80% { left: 0; top:0;}
    85% { left: 0; top: -20px; width: 20px; height: 20px;}
    90% { width: 40px; height: 15px; }
    95% { left: 100px; top: -20px; width: 20px; height: 20px;}
    100% { left: 100px; top:0; }

  }
  @keyframes object{
    0% { left: 100px; top:0}
    80% { left: 0; top:0;}
    85% { left: 0; top: -20px; width: 20px; height: 20px;}
    90% { width: 40px; height: 15px; }
    95% { left: 100px; top: -20px; width: 20px; height: 20px;}
    100% { left: 100px; top:0; }
  }
</style>
