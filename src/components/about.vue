<template>
  <div style="background: #fff;">
    <x-header :left-options="{backText: ''}" style="background-color:#2196f3;">关于我们</x-header>
    <div class="container">
      <br> 全民放款股份有限公司是一家致力于为中国国内居民提供个人消费金融服务持有消费金融牌照的大数据公司、金融科技公司、创业公司。<br>
      <br> 全民放款由国内知名企业重庆百货、重庆银行、物美控股、阳光保险、浙江中国小商品城、中关村科金共同发起设立。继2016年8月增资3000千万之后，2017年7月，全民放款完成第二次增资，注册资本增至1亿元。<br>
      <br> 全民放款致力于服务中国8亿老百姓，把为人民服务当做公司的使命，希望通过公司的消费金融服务让消费者生活更加轻松。<br>
    </div>
  </div>
</template>

<script>
    import XHeader from "vux/src/components/x-header/index";

    export default {
        name: "about",
        components: {XHeader}
    }
</script>

<style scoped>
  .container {
    padding-right: 8px;
    padding-left: 8px;
    margin-right: auto;
    margin-left: auto;

    font-size: 14px;
    color: rgb(51, 51, 51);
    font-family: arial, 宋体, sans-serif;
    background-color: rgb(255, 255, 255)
  }


</style>
