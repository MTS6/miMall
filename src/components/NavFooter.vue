<template>
  <div class="nav-footer">
    <div class="footer-logo">
      <div class="logo">
        <img src="/imgs/logo-footer.png">
      </div>
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <div class="course">
        <a href="https://www.imooc.com/u/1343480" target="_blank">河畔一角主页</a>
        <span class="column-line">|</span>
        <a href="https://coding.imooc.com/class/113.html" target="_blank">Vue全栈课程</a>
        <span class="column-line">|</span>
        <a href="https://coding.imooc.com/class/236.html" target="_blank">React全家桶课程</a>
        <span class="column-line">|</span>
        <a href="https://coding.imooc.com/class/343.html" target="_blank">微信支付专项课程（H5+小程序+Node+Mongo）</a>
      </div>
      <div class="copyright">Copyright ©2019 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</div>
    </div>
  </div>
</template>
<script tyrpe="text/ecmascript-6">
export default {
  name:'nav-footer'
}
</script>

<style scoped lang="scss">
@import '../../resource/scss/config.scss';

  .nav-footer{
    height: 238px;
    background-color: $colorB;
    border-top: 4px solid $colorA;
    color: #999999;
    font-size: 16px;    
    .footer-logo{
      height: 73.8px;
      text-align: center;
      margin: 46px 0 31px;
      .logo{
        width: 53px;
        height: 36px;
        margin: 0 auto 13px;
        img{
          width: 100%;
        }
      }
    }
    .footer-link{
      text-align: center;
      .course{
        span{
          padding: 0 10px 0;
        }
        a{
          color: #999999;
        }
      }
      .copyright{
        margin-top: 16px;
        .domain{
          color: $colorA;
        }
      }      
    }
  }
</style>