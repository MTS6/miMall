<template>
  <div class="nav-bar" :class="{isFixed:isFixed}">
    <div class="container">
      <div class="pro-info1">小米8青春版</div>
      <div class="pro-info2">
        <a href="javascript:;">概述</a><span class="col-line">|</span>
        <a href="javascript:;">参数</a><span class="col-line">|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot> 
      </div>
    </div>
  </div>
</template>
<script tyrpe="text/ecmascript-6">
export default {
  name:'product-param',
  data() {
    return {
      isFixed:false
    }
  },
  mounted() {
      window.addEventListener('scroll',this.elementHeight)
  },
  methods: {
    elementHeight(){
      let eh = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop

       this.isFixed = eh>151?true:false
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll',this.elementHeight)
  }

}
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
  .nav-bar{
    height: 70px;
    border-top: 1px solid $colorH;
    background-color: #fff;
    &.isFixed{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      box-shadow: 0 5px 5px #ccc ;
      z-index: 6;
    }
    .container{
      display: flex;
      justify-content: space-between;
      line-height: 70px;
      font-size: 14px;
      .pro-info2{
        a{
          color: #666;
        }
        span{
          padding: 0 10px;
        }
      }
    }
  }
</style>