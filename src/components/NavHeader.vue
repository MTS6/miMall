<template>
    <header>
      <div class="nav-topBar">
        <div class="container">
          <div class="topBar-menu">
            <a href="javascript:;">小米商城</a>
            <a href="javascript:;">MUI</a>
            <a href="javascript:;">云服务</a>
            <a href="javascript:;">协议规则</a>
          </div>
          <div class="topBar-user">
            <a href="javascript:;">用户</a>
            <a href="javascript:;" @click="login">登录</a>
            <a v-if="" href="javascript:;">退出</a>
            <a href="javascript:;">我的订单</a>
            <a href="javascript:;"><span class="iconfont icongouwuche"></span>购物车(0)</a>
          </div>
        </div>
      </div>
      <div class="nav-header">
        <div class="container">
          <div class="header-logo">
            <a href="/#/index"></a>
          </div>
          <div class="header-menu">
           <ul>
            <li class="menu-item">
              <span>小米手机</span>
              <div class="children">
                <ul>
                  <li class="product" v-for="(item,index) in iphoneList" :key="item.id">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img">
                      <img v-lazy="item.mainImage" alt="">
                      </div>
                      <h1 class="pro-name">{{item.name}}</h1>
                      <span class="pro-price">{{item.price | mapPrice}}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <span>ReadMi红米</span>
            </li>
            <li class="menu-item">
              <span>电视</span>
              <div class="children">
                <ul>
                  <li class="product">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <h1 class="pro-name">小米壁画电视 65英寸</h1>
                    <span class="pro-price">6999元</span>
                  </li>
                  <li class="product">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                    </div>
                    <h1 class="pro-name">小米全面屏电视E55A</h1>
                    <span class="pro-price">1999元</span>
                  </li>
                  <li class="product">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.png" alt="">
                    </div>
                    <h1 class="pro-name">小米电视4A 32英寸</h1>
                    <span class="pro-price">699元</span>
                  </li>
                  <li class="product">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                    </div>
                    <h1 class="pro-name">小米电视4A 55英寸</h1>
                    <span class="pro-price">1799元</span>
                  </li>
                  <li class="product">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                    </div>
                    <h1 class="pro-name">小米电视4A 65英寸</h1>
                    <span class="pro-price">2699元</span>
                  </li>
                  <li class="product">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.png" alt="">
                    </div>
                    <h1 class="pro-name">查看全部</h1>
                    <span class="pro-price">查看全部</span>
                  </li>
                </ul>
              </div>
            </li>
           </ul>
          </div>
          <div class="header-search">
            <input type="text">
            <a href="javascript:;">
              <span class="iconfont iconsearch"></span>
            </a>
          </div>
        </div>
      </div>
    </header>
</template>
<script tyrpe="text/ecmascript-6">
export default {
  name:'nav-header',
  data() {
    return {
      iphoneList:[]
    }
  },
  filters:{
    mapPrice(value){
      if (!value) return 0.00
      return `￥${value}.00元`
    }
  },
  mounted() {
    // this.getProductList();
  },
  //￥1799.00元
  methods: {
    login(){
      this.$router.push('/login')
    }
    // getProductList(){
      // this.axios.get('/products',{
      //     params:{
      //       categoryId:100012,
      //       pageSize:6
      //     }
      //   }).then((result)=>{
      //     this.iphoneList = result.data.list
      //     console.log(this.iphoneList)
      //   })
    // }
     
}
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/config.scss';
  @import '../assets/scss/mixin.scss';
  .nav-topBar{
    height: 38.4px;
    background-color: #333333;
    .container{
      @include flex();
      width: 1226px;
      height: 100%;
      margin: auto;
      .topBar-menu{
        width: 222px;
        a{
          float: left;
          color: #b0b0b0;
          line-height: 38.4px;
          padding-right: 17px;
        }
      }
      .topBar-user{
        width: 257px;
        a{
          float: left;
          color: #b0b0b0;
          padding-right: 17px;
          line-height: 38.4px;
          &:nth-child(3){
            display: none;
          }

          &:last-child{
            // float: right;
            height: 100%;
            width: 110px;
            color: #fff;
            background-color: $colorA;
            padding: 0;
            text-align: center;
            span{
              padding-right: 4px;
              font-size: 14px;
            }
          }
        }

      }
    }
  }

  .nav-header{
    height: 112px;
    .container{
      position: relative;
      @include flex(flex-start);
      width: 1226px;
      height: 100%;
      margin: 0 auto;
      // align-content:flex-end;-----align-content属性失效。。。why？？？
      .header-logo{
        width: 55px;
        height: 55px;
        background-size: 55px;
        background-color: $colorA;
        a{
          float: left;
          width: 110px;
          height: 55px;
          transition: 0.5s all;
          &::before{
            @include bgImg($img:'/imgs/mi-logo.png');
            content: '';
            float: left;
          }
          &::after{
            @include bgImg($img:'/imgs/mi-home.png');
            content: '';
            float: left;
          }
          &:hover{
            transition: 0.5s margin-left;
            margin-left: -55px;
          }
        }
      }
      .header-menu{
        width: 643px;
        padding-left: 209px;
        li{
        &.menu-item:not(:nth-child(2)):hover{
          .children{
          height: 220px;
          opacity: 1;
          }
        }

        &.menu-item:not(:nth-child(2))>.children{
          position: absolute;
          top: 112px;
          left: 0;
          width: 1226px;
          height: 0;
          z-index: 66;
          opacity: 0;
          background-color: #fff;
          border-top: 1px solid $colorH;
          box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
          overflow: hidden;
          transition: all .5s;
          .product{
            position: relative;
            float: left;
            width: 203.51px;
            text-align: center;
          &:not(:first-child):after{
            content: '';
            position: absolute;
            top: 28px;
            left: 0;
            width: 1px;
            height: 100px;
            background-color: $colorF;
          }
            .pro-img{
              margin: 26px auto 0;
              height: 111px;
              img{
                height: 100%;
              }
            }
            .pro-name{
              font-size: 12px;
              color: $colorB;
              margin: 19px 0 8px;
            }
            .pro-price{
              font-size: 12px;
              float: none;
              font-weight: normal;
              line-height: 12px;
              color: $colorA;
              margin: 0;
            }
          }
        }
        span{
          float: left;
          font-size: 16px;
          font-weight: bold;
          color: #333333;
          line-height: 112px;
          margin-right: 20px;
          cursor: pointer;
          &:hover{
            color: $colorA;
          }
        }
        }
        
      }
      .header-search{
        @include flex(start);
        box-sizing: border-box;
        height: 52px;
        width: 319px;
        border: 1px solid #E0E0E0;
        input{
          border: none;
          width: 264px;
          height: 50px;
          outline: none;
          border-right: 1px solid #e0e0e0;
          padding-left: 15px;
        }
        a{
          float: left;
          height: 100%;
          width: 52px;
          text-align: center;
          line-height: 50px;
          cursor:pointer;
          .iconsearch{
            font-size: 22px;
            color: #333333;
          }
        }

      }
    }
  }
</style>