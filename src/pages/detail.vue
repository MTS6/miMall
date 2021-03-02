<template>
  <div class="detail">
    <product-param></product-param>
    <div class="container clearFix">
      <div class="swiper-box">
        <swiper :options="swiperOption">
            <swiper-slide><img src="/imgs/detail/phone-1.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide>
             <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
      <div class="content">
        <h1 class="item-name">小米8青春版</h1>
        <p class="item-info">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红<br>
          外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
        <div class="delivery">小米自营</div>
        <div class="item-price"><span class="pre">2333元</span><span class="now">1999元</span></div>
        <div class="line"></div>
        <div class="item-addr">
          <i class="icon"></i>
          <div class="addr">
            北京 北京市 朝阳区 安定门街道
          <div class="pro-state">有现货</div>
          </div>
        </div>
        <div class="item-version">
          <h1>选择版本</h1>
          <div class="version">
            <div class="ver-l" :class="{checked:version==1}" @click="version=1">6GB+64GB 全网通</div>
            <div class="ver-l" :class="{checked:version==2}" @click="version=2">4GB+64GB 移动4G</div>
          </div>
        </div>
        <div class="item-color">
          <h1>选择颜色</h1>
          <div class="color checked"><span class="color-hui"></span>深空灰</div>
        </div>
        <div class="item-total">
          <div class="fl">小米10 6GB+64GB 全网通':'4GB+64GB 移动4G，深灰色</div>
          <div class="fr">6666元</div>
          <div class="phone-total clearFix">总计：33333元</div>
        </div>
        <a href="javascript:;" class="btn btn-huge">加入购物车</a>
      </div>
    </div>
    <div class="price-specify">
      <div class="container">
        <h1>价格说明</h1>
        <div class="bgi-price"></div>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>
<script tyrpe="text/ecmascript-6">
import ProductParam from '../components/ProductParam'
import ServiceBar from '../components/ServiceBar'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
  name:'detail',
  data() {
    return {
      version:1,
      swiperOption:{
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
          clickable:true
        }
      }
    }
  },
  components:{
    ProductParam,
    swiper,
    swiperSlide,
    ServiceBar
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/base.scss';
  @import '../assets/scss/config.scss';
  @import '../assets/scss/botton.scss';
    .swiper-box{
    float: left;
    .swiper-container{
    width: 642px;
    height: 642px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  }
  .content{
    float: right;
    width: 584px;
    .item-name{
      font-size: 28px;
      padding: 30px 0 16px;
    }
    .item-info{
      font-size: 14px;
    }
    .delivery{
      font-size: 16px;
      color: $colorA;
      margin: 12px 0 10px;
    }
    .item-price{
      .pre{
        font-size: 24px;
        color: $colorA;
        padding-right: 10px;
      }
      .now{
        font-size: 16px;
        color: #999;
        text-decoration:line-through;
      }
    }
    .line{
        width: 100%;
        height: 1px;
        background-color: #e5e5e5;
        margin: 15px 0 20px;
      }
    .item-addr{
      position: relative;
      box-sizing: border-box;
      height: 108px;
      background-color: #fafafa;
      padding: 31px 0 0 64px;
      .icon{
        position: absolute;
        top: 32px;
        left: 34px;
        width: 20px;
        height: 20px;
        background: url('/imgs/detail/icon-loc.png') no-repeat center;
        background-size: contain;
      }
      .addr{
        font-size: 14px;
        color: #666;
        line-height: 22px;
        .pro-state{
          padding-top: 6px;
          color: $colorA;
        }
      }
  }
    .item-version{
      height: 94px;
      margin-top: 30px;
      h1{
        font-size: 18px;
        padding-bottom: 20px;
      }
      .version{
        .ver-l{
          float: left;
          box-sizing: border-box;
          width: 287px;
          height: 50px;
          border: 1px solid #e5e5e5;
          text-align: center;
          line-height: 50px;
          font-size: 16px;
          cursor: pointer;
          &.checked{
            color: $colorA;
            border: 1px solid $colorA;
          }
          &:first-child{
            margin-right: 10px;
          }
        }
      }
    }
    .item-color{
      height: 94px;
      margin-top: 30px;
      h1{
        font-size: 18px;
        padding-bottom: 20px;
      }
      .color{
        float: left;
        box-sizing: border-box;
        width: 287px;
        height: 50px;
        border: 1px solid #e5e5e5;
        text-align: center;
        line-height: 50px;
        font-size: 16px;
        cursor: pointer;
        &.checked{
          color: $colorA;
          border: 1px solid $colorA;
        }
        .color-hui{
          display: inline-block;
          width: 14px;
          height: 14px;
          background-color: #666;
          margin-right: 6px;
        }
      }
    }
    .item-total{
      box-sizing: border-box;
      height: 108px;
      font-size: 14px;
      background-color: #fafafa;
      margin: 50px 0 30px;
      padding: 24px 33px 29px 30px;
      .phone-total{
        font-size: 24px;
        line-height: 66px;
        color: $colorA;
      }
    }

  }

  .price-specify{
    width: 100%;
    height: 340px;
    background-color: #f3f3f3;
    overflow: hidden;
    h1{
      margin: 40px 0 25px;
    }
    .bgi-price{
      width: 100%;
      height: 189px;
      background: url('/imgs/detail/item-price.jpeg') no-repeat center;
      background-size: contain;
    }
  }

 
</style>