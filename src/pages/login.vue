<template>
  <div class="login">
    <div class="container">
      <a href="/#/index">
        <img src="/imgs/login-logo.png" alt="">
      </a>
    </div>
    <div class="login-banner">
      <div class="container">
        <div class="login-box">
          <div class="login-title">
            <span class="checked">账号登录</span>
            <span class="col-line"></span>
            <span>扫码登录</span>
          </div>
          <div class="user">
            <input type="text" placeholder="邮箱|手机号码|小米ID">
          </div>
          <div class="password">
            <input type="password" placeholder="密码">
          </div>
          <div class="btn btn-large">登录</div>
          <div class="login-link">
            <div class="go-login">
              <a href="http://">手机短信登录/</a>
              <a href="http://">注册</a>
            </div>
            <div class="go-register">
              <a href="http://">立即注册</a>
              <span>|</span>
              <a href="http://">忘记密码？</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <div class="course">
          <a href="https://www.imooc.com/u/1343480" target="_blank">河畔一角主页</a>
          <span class="column-line">|</span>
          <a href="https://coding.imooc.com/class/113.html" target="_blank">Vue全栈课程</a>
          <span class="column-line">|</span>
          <a href="https://coding.imooc.com/class/236.html" target="_blank">React全家桶课程</a>
          <span class="column-line">|</span>
          <a href="https://coding.imooc.com/class/343.html" target="_blank">微信支付专项课程（H5+小程序/云+Node+MongoDB）</a>
        </div>
        <div class="copyright">Copyright ©2019 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</div>
      </div>
    </div>
  </div>
</template>
<script tyrpe="text/ecmascript-6">
export default {
  name:'login'
}
</script>

<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';

  .login{
    .container{
      height: 113px;
      img{
        width: auto;
        height: 113px;
      }
    }
    .login-banner{
      background: url('/imgs/login-bg.jpg') no-repeat center;
      .container{
        height: 576px;
      }
      .login-box{
        box-sizing: border-box;
        position: absolute;
        top: 40px;
        right: 0;
        width: 410px;
        height: 510px;
        background-color: $colorG;
        padding: 0 31px;
        .login-title{
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          margin: 40px 0 49px;
          .checked{
            color: $colorA;
          }
          .col-line{
            display: inline-block;
            width: 3px;
            height: 24px;
            background-color: #000;
            vertical-align: middle;
            margin: 0 32px;
          }
        }
        .user{
          border: 1px solid $colorH;
          margin-bottom: 20px;
        }
        .password{
          border: 1px solid $colorH;
        }
        .btn{
          font-size: 16px;
          width: 100%;
          margin-top: 30px;
        }
        .login-link{
          display: flex;
          justify-content:space-between;
          font-size: 14px;
          margin-top: 15px;
          a{
            color: $colorD;
          }
          .go-login a{
            color: $colorA;
          }
          .go-register span{
            color: $colorD;
            margin: 0 5px;
          }
        }
        input{
          box-sizing: border-box;
          width: 100%;
          height: 50px;
          padding: 18px;
          border: none;
        }
      }
    }
    .footer{
      box-sizing: border-box;
      height: 160px;
      color: #999999;
      font-size: 16px;  
      padding-top: 60px;
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
      }      
    }
    }

  }
</style>