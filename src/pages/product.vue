<template>
  <div>
    <product-param>
      <template v-slot:buy>
        <div class="btn"  @click="gotoDetail">
          立即购买
        </div >
      </template>
    </product-param>
    <div class="content">
      <div class="item-bg1">
        <h1 class="pro-name">小米8青春版</h1>
        <h2 class="pro-title">春暖花开</h2>
        <p>
          <a href="javascript:;">全球首款双频 GP</a>
          <span>|</span>
          <a href="javascript:;">骁龙845</a>
          <span>|</span>
          <a href="javascript:;">AI 变焦双摄</a>
          <span>|</span>
          <a href="javascript:;">红外人脸识别</a>
        </p>
        <div class="price">￥1999</div>
      </div>
      <div class="item-bg2"></div>
      <div class="item-bg3"></div>
      <div class="item-swiper">
        <swiper :options="swiperOption">
            <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
            <!-- Optional controls --> -->
             <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <p class="desc">小米8 AI变焦双摄拍摄</p>
      </div>
      <div class="item-video">
        <div class="container">
          <div class="video-container">
            <div class="text">
                  <h1>
                    60帧超慢动作摄影<br>
                    慢慢回味每一瞬间的精彩
                  </h1>
                  <p>
                    后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br>
                    更能AI 精准分析视频内容，15个场景智能匹配背景音效。
                  </p>
            </div>
            <div class="bg-img" @click="isShowVideo='slide-down'"></div>
            <div class="video-box">
              <div class="overPage" v-show="isShowVideo"></div>
              <div class="video" :class="isShowVideo">
                <span class="close" @click="closeVideo"></span>
                <video src="/imgs/product/video.mp4" controls></video>
              </div>
            </div>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script tyrpe="text/ecmascript-6">
import ProductParam from '../components/ProductParam';
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
  name:'product',
  data() {
    return {
      isShowVideo:'',
      swiperOption: {
          autoplay:true,
          slidesPerView:3,//视图内可见的幻灯片数量(在滑块的容器上同时可见的幻灯片)
          spaceBetween: 30,//幻灯片之间的距离
          freeMode: true,//如果启用，则幻灯片将没有固定的位置
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          }
        }
    }
  },
  methods: {
    gotoDetail(){
      let id = this.$route.params.id
      console.log(id)
      this.$router.push(`/detail/${id}`)
    },
    showVideo(isShow){//过渡效果的方法
      let overPage = document.querySelector('.overPage')
      let video = document.querySelector('.video')
      if (isShow) {
        this.isShowVideo = true
        overPage.className = 'overPage show';
        video.className = 'video show';
      }else{
        this.isShowVideo = false
        overPage.className = 'overPage';
        video.className = 'video';
      }
    },
    closeVideo(){
      this.isShowVideo = 'slide-up';
      setTimeout(() => {
        this.isShowVideo = '' 
      }, 500);
    }
  },
  components:{
    ProductParam,
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/config.scss';
  @import '../assets/scss/botton.scss';
  @import '../assets/scss/mixin.scss';
  @import '../assets/scss/base.scss';

  .btn{
    margin-left: 10px;
  }
  .content{
    box-sizing: border-box;
    color: #333;
    text-align: center;
    .item-bg1{
      height: 718px;
      background: url('/imgs/product/product-bg-1.png') no-repeat center;
      .pro-name{
      font-size: 80px;
      padding-top: 50px;
      }
      .pro-title{
        font-size: 24px;
      }
      p{
      margin: 21px 0 40px;
        a{
        font-size: 16px; 
        color: #333;
        }
        span{
          padding: 0 15px;
        }
    
      }
      .price{
        font-size: 38px;
      }
   }
    
   .item-bg2{
    height: 480px;
    background: url('/imgs/product/product-bg-2.png') no-repeat center;
    background-size: 1226px 397px;
   } 

   .item-bg3{
    height: 638px;
    background: url('/imgs/product/product-bg-3.png') no-repeat center;
    background-size: cover;
   }
   .item-swiper{
        margin:36px auto 52px;
        .desc{
          font-size:18px;
          color:#333333;
          text-align:center;
         }
        img{
          width:100%;
        }
    }
    .item-video{
      height: 1044px;
      background-color: #070708;
    .video-container{
      box-sizing: border-box;
      overflow: hidden;
      
      .text{
        color: $colorG;
        text-align: center;
        margin-bottom: 58px;
        h1{
          padding-top: 82px;
          font-size: 60px;
          margin-bottom: 47px;
        }
        p{
          font-size: 24px;
        }
      }

      .bg-img{
        width: 1226px;
        height: 540px;
        background: url('/imgs/product/gallery-1.png') no-repeat center;
        background-size: cover;
        cursor: pointer;
      }
       @keyframes slide-down {
         from{
           top:-50%;
           opacity: 0;
         }

         to{
           top: 50%;
           opacity: 1;
         }
       }
       @keyframes slide-up {
         from{
           top:50;
           opacity: 1;
         }

         to{
           top: -50%;
           opacity: 0;
         }
       }
      .video-box{
        .overPage{
          position: fixed;
          top: 0;//固定定位top和left都未设置时，没有宽高
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #000;
          opacity: 0.5;
          z-index: 6;
          // transition: all 0.5s;
        }
        .video{
          position: fixed;
          top: -50%;
          left: 50%;
          transform: translate(-50%,-50%);
          width: 1000px;
          height: 536px;
          z-index: 8;
          opacity: 0;
          &.slide-down{
            animation: slide-down linear 0.5s;
            top:50%;
            opacity: 1;
          }
          &.slide-up{
            animation: slide-up linear 0.5s;
          }

          // transition: all 0.5s;
          // &.show{
          //   top: 50%;
          //   opacity: 1;
          // }
          .close{
            position: absolute;
            width: 22px;
            height: 22px;
            top: 20px;
            right: 20px;
            background: url('/imgs/icon-close.png') no-repeat center;
            background-size: contain;
            z-index: 10;
            cursor: pointer;
          }
          video{
            width: 100%;
            height: 100%;
            outline: none;
            object-fit: cover;
          }
        }
        
      }
    }
  }
   

 }
</style>