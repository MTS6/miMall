<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <div class="menu-item">
            <a href="javascript:;">手机 电话卡</a>
            <div class="children">
              <ul class="item-phone-row" v-for="(phoneRow,index) in itemPhone" :key="index">
                <li class="item-phone" v-for="(phone,index2) in phoneRow" :key="index2">
                  <a :href="phone?'/#/product/' + phone.id:''"><img v-lazy="phone?phone.img:'/imgs/item-box-1.png'" alt="">
                  {{phone?phone.name:'小米9'}}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="menu-item">
            <a href="javascript:;">电视 盒子</a>
          </div>
          <div class="menu-item">
            <a href="javascript:;">笔记本 平板</a>
          </div>
          <div class="menu-item">
            <a href="javascript:;">家电 插线板</a>
          </div>
          <div class="menu-item">
            <a href="javascript:;">出行 穿戴</a>
          </div>
          <div class="menu-item">
            <a href="javascript:;">智能 路由器</a>
          </div>
          <div class="menu-item">
            <a href="javascript:;">电源 配件</a>
          </div>
          <div class="menu-item">
            <a href="javascript:;">生活 箱包</a>
          </div>
        </div>
        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
            <a v-bind:href="'/#/product/'+item.id"><img v-lazy="item.img"></a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        
      </div>
      <div class="adv-box">
        <a :href="'/#/product' + adv.id" v-for="(adv,index) in advList" :key="adv.id">
          <img v-lazy="adv?adv.img:''" alt="">
        </a>
      </div>
      <div class="banner">
        <a :href="'/#/product/30'">
          <img src="/imgs/banner-1.png" alt="">
        </a>
      </div>
    </div>
     <div class="banner-box">
      <div class="container">
        <div class="main-title">手机</div>
        <div class="banner-wrap">
          <div class="banner-left">
            <a href="/#/product/35">
              <img src="/imgs/mix-alpha.jpg" alt="">
            </a>
          </div>
          <div class="banner-phone">
            <div class="phone-list" v-for="(phonePai,index) in phoneList" :key="index">
              <div class="phone" v-for="(phone,index2) in phonePai" :key="phone.id">
                <h1 :class="{'new-pro':index2%2==0}">新品</h1>
                <div class="imgWraper">
                  <img v-lazy="phone.mainImage" alt="">
                </div>
                <h2>{{phone.name}}</h2>
                <span class="pro-tit">{{phone.subtitle}}</span>
                <div class="pro-pri" @click="addSuccess">{{phone.price}}元</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <Modal
    title="提示"
    btnType=2
    ModalType="middle"
    :showModal="showModal"
    @cancel="showModal=false"
    @submit="gotoCar"
    >
    <template v-slot:body>
      <div>
        添加购物车成功！
      </div>
    </template>
    </Modal>
  </div>
</template>
<script tyrpe="text/ecmascript-6">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import ServiceBar from '../components/ServiceBar'
import Modal from '../components/Modal'
export default {
  name:'index',
  components:{
    ServiceBar,
    swiper,
    swiperSlide,
    Modal
  },
  data() {
    return {
      swiperOption:{
        autoplay:true,
        loop:true,
        effect:'cube',
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable:true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      slideList:[
        {
          id:'42',
          img:'/imgs/slider/slide-1.jpg'
        },
        {
          id:'45',
          img:'/imgs/slider/slide-2.jpg'
        },
        {
          id:'46',
          img:'/imgs/slider/slide-3.jpg'
        },
        {
          id:'',
          img:'/imgs/slider/slide-4.jpg'
        },
        {
          id:'',
          img:'/imgs/slider/slide-5.jpg'
        },
        {
          id:'',
          img:'/imgs/slider/slide-1.jpg'
        }
      ],
      itemPhone:[
        [
          {
            id:30,
            img:'/imgs/item-box-1.png',
            name:'小米CC9',
          },{
            id:31,
            img:'/imgs/item-box-2.png',
            name:'小米8青春版',
          },{
            id:32,
            img:'/imgs/item-box-3.jpg',
            name:'Redmi K20 Pro',
          },{
            id:33,
            img:'/imgs/item-box-4.jpg',
            name:'移动4G专区',
          }
        ],
        [0,0,0,0],[0,0,0,0],[0,0,0,0],
        [0,0,0,0],[0,0,0,0]
      ],
      advList:[
          {
            id:33,
            img:'/imgs/ads/ads-1.png'
          },{
            id:48,
            img:'/imgs/ads/ads-2.jpg'
          },{
            id:45,
            img:'/imgs/ads/ads-3.png'
          },{
            id:47,
            img:'/imgs/ads/ads-4.jpg'
          }
      ],
      phoneList:[
        [
          {id:121,
        name:'小米9',
        subtitle:'青春阳光',
        mainImage:'/imgs/item-box-1.png',
        price:1799
        },
        {id:122,
        name:'小米9',
        subtitle:'青春阳光',
        mainImage:'/imgs/item-box-1.png',
        price:1799
        },
        {id:123,
        name:'小米9',
        subtitle:'青春阳光',
        mainImage:'/imgs/item-box-1.png',
        price:1799
        },
        {id:124,
        name:'小米9',
        subtitle:'青春阳光',
        mainImage:'/imgs/item-box-1.png',
        price:1799
        }
        ],
        [
          {id:125,
        name:'小米9',
        subtitle:'青春阳光',
        mainImage:'/imgs/item-box-1.png',
        price:1799
        },
        {id:126,
        name:'小米9',
        subtitle:'青春阳光',
        mainImage:'/imgs/item-box-1.png',
        price:1799
        },
        {id:127,
        name:'小米9',
        subtitle:'青春阳光',
        mainImage:'/imgs/item-box-1.png',
        price:1799
        },
        {id:128,
        name:'小米9',
        subtitle:'青春阳光',
        mainImage:'/imgs/item-box-1.png',
        price:1799
        }
        ]
      ],
      showModal:false
    }
  },
  methods: {
    gotoCar(){
      this.$router.push('/cart')
    },
    addSuccess(){
      this.showModal = true
    }
  },
 }
</script>

<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';

  .index{
    .swiper-box{
      .swiper-button-prev{
        left: 274px;
      }
      .swiper-container{
        height: 451px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .nav-menu{
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        width: 264px;
        height: 451px;
        padding: 26px 0;
        background-color:#55585a7a;
        z-index: 33;
        .menu-item{
          height: 12.5%;
          font-size: 16px;
          padding-left: 30px;
          &:hover .children{
            display: block;
          }
          .children{
            display: none;
            box-sizing: border-box;
            position: absolute;
            left: 264px;
            top: 0;
            width: 962px;
            height: 100%;
            background-color: #fff;
            .item-phone-row{
            display: flex;
            height: 75px;
            justify-content:space-between;
            .item-phone{
              height: 75px;
              flex: 1;
              padding-left: 23px;
              a{
                font-size: 14px;
                color: $colorB;
                line-height: 75px;
                padding-left: 30px;
                img{
                  width: 42px;
                  height: 35px;
                  padding-right: 14px;
                  vertical-align: middle;
                }
              }
            }
          }
          }
          &:hover{
            background-color: $colorA;
          }
          a{
            position: relative;
            display: block;
            color: #fff;
            line-height: 49.88px;
            &::after{
              content: '';
              position: absolute;
              top: 17.5px;
              right: 30px;
              @include bgImg(10px,15px,'/imgs/icon-arrow.png');
            }
          }
        }
      }
    }
    .adv-box{
      position: relative;
      display: flex;
      justify-content:space-between;
      margin-top: 15px;
      a{
        width: 296px;
        height: 167px;
      }
    }
    .banner{
      height: 130px;
      margin: 30px 0 50px;
    }
    .banner-box{
      .main-title{
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      padding: 30px 0 50px;
      background-color: $colorJ;
      .banner-wrap{
        display: flex;
        height: 619px;
        justify-content:space-between;
        .banner-left{
          width: 224px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .banner-phone{
          width: 986px;
          .phone-list{
            @include flex();
            margin-bottom: 16px;
            &:last-child{
              margin-bottom: 0;
            }
            .phone{
              width: 236px;
              height: 302px;
              background-color: $colorG;
              text-align: center;
              h1{
                color: $colorG;
              }
              .new-pro{
                width: 67px;
                height: 24px;
                color: $colorG;
                font-size: 14px;
                font-weight: normal;
                background-color: #7ecf68;
                margin: 0 auto;
              }
              .imgWraper{
                width: 236px;
                height: 195px;
                img{
                  width: 100%;
                  height: 100%;
                }
              }
              h2{
                font-size: 14px;
                padding-bottom: 4px;
              }
              .pro-tit{
                font-size: 12px;
              }
              .pro-pri{
                font-size: 14px;
                color: $colorA;
                font-weight:bold;
                cursor: pointer;
                margin: 6px 0 13px;
                &:after{
                  display: inline-block;
                  @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                  content:' ';
                  margin-left:5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
</style>