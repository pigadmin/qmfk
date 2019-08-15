<template>
  <div>
    <div style="position: relative; font-style: italic;">
      <img src="../assets/index1.jpg" class="img" style="height:5.3rem;">
      <div class="title-logo" style="top: 33%; left: 9%;">最高助贷额度(元)</div>
      <div class="money" style="top: 40%; left: 9%;">100,000</div>
    </div>
    <img src="../assets/index2.png" class="img2" style="height:2.3rem;">
    <div style="margin: 15px;">
      <x-button type="primary" style="background: #327af2;border-radius: 36px;" @click.native="login">查看额度</x-button>
    </div>
    <div class="tips-container">
      <div class="tips-main">
        了解详情
      </div>
      <div class="tips-sub">
        权威解析 助你成长
      </div>
    </div>
    <div style="position: relative;"><img
      src="../assets/index3.png" class="img img3" style="height:3.5rem;"> <a @click="about"  style="width: 21%; height: 10%; position: absolute; top: 23%; right: 7%;"></a>
    </div>

  </div>

</template>

<script>
    import ViewBox from "vux/src/components/view-box/index";
    import XButton from "vux/src/components/x-button/index";
    import Box from "vux/src/components/box/index";

    export default {
        name: "index",
        components: {Box, XButton, ViewBox},
        data() {
            return {}
        },created() {
        }, mounted() {
        }
        , methods: {
            login(res) {
                var that=this
                var token =localStorage.getItem("token")
                // console.log(token)
                if (token==null){
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
                    }else if (status == "apply_confirm") {//同意申请
                        that.push("/edu")
                    }else if (status == "audit_pass") {//审核通过
                        that.push("/edu")
                    }else if (status == "audit_failure") {//审核失败
                        that.toast("审核失败请联系客服", "text")
                    }
                },function () {
                    // console.log("清除localStorage")
                    localStorage.clear()
                    that.push("/login")
                })
            }, about() {
                this.push("/about")
            }

        }
    }
</script>

<style scoped>
  .img {
    width: 100%;
    display: block;
  }

  .img2 {
    width: 100%;
    display: block;
  }

  .img2 {
    width: 100%;
    display: block;
  }

  .title-logo {
    color: #ffffff;
    position: absolute;
    font-size: 14px;

  }

  .money {
    position: absolute;
    font-weight: bold;
    font-size: 26px;
    color: #ffffff;
  }

  .tips-main {
    font-weight: bold;
    font-size: 0.6rem;
  }

  .tips-sub {
    font-size: 0.3rem;
    color: #66758A;
  }

  .tips-container {
    padding: 0 0.5rem;
    margin-bottom: 0.2rem;
  }
</style>
