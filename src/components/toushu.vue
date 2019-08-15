<template>
  <div>

    <group gutter="0" class="content" style=" border:0.5px solid #f3f3f3;border-radius: 0.2rem;margin-top: 10px;">
      <cell title="热线电话：400-036-8876" class="title">
        <img slot="icon" width="30" style="display:block;margin-right:5px;" src="../assets/my6.png">
      </cell>
      <cell title="公众号：全民放款" class="title">
        <img slot="icon" width="30" style="display:block;margin-right:5px;" src="../assets/my5.png">
      </cell>
    </group>

    <div class="container"><p>客服工作时间：每日9:30~18:30</p>
      <p>法定节假日情况请参考公告</p></div>
  </div>


</template>

<script>
  export default {
    name: "toushu"
  }
</script>

<style scoped>
  .title {
    /*padding-left: 0.9rem;*/
    /*line-height: 1.466667rem;*/
    font-size: 15px;
    color: #777777;
  }


  body, html {
    height: 100%;
    width: 100%;
    background-color: #f7f7f7;
  }

  .content {
    /* margin: 0.8rem 0.5rem; */
    margin: 0 auto;
    width: 80%;
  }


  .container {
    text-align: center;
    margin-top: 1.733333rem;
  }

  .container {
    padding-right: 8px;
    padding-left: 8px;
    margin-right: auto;
    margin-left: auto;
  }

  .container p {
    font-size: 15px;
    color: #888888;
    line-height: 0.6rem;
  }
</style>
