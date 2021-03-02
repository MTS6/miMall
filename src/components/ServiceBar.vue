<template>
  <div class="service-bar">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-7day"></span>7天无理由退货</li>
        <li><span class="icon-15day"></span>15天免费换货</li>
        <li><span class="icon-post"></span>满150元包邮</li>
      </ul>
    </div>
  </div>
</template>
<script tyrpe="text/ecmascript-6">
export default {
  name:'service-bar'
}
</script>

<style scoped lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';

  .service-bar{
    box-sizing: border-box;
    height: 88.65px;
    padding: 33px 0;
    color: $colorC;
    .container>ul{
      display: flex;
      justify-content:space-evenly;
      li{
        float: left;
        width: 25%;
        font-size: 16px;
        border-right: 1px solid #e5e5e5;
        text-align: center;
        &:last-child{
          border: none;
        }
        span{
          display: inline-block;
          font-size: 20px;
          margin-right: 8px;
          vertical-align:middle;
        }
        .icon-setting{
          @include bgImg(20px,20px,"/imgs/icon-setting.png")
        }
        .icon-7day{
          @include bgImg(20px,20px,"/imgs/icon-7day.png")
        }
        .icon-15day{
          @include bgImg(20px,20px,"/imgs/icon-15day.png")
        }
        .icon-post{
          @include bgImg(20px,20px,"/imgs/icon-post.png")
        }
        
      }
    }
    
  }
</style>