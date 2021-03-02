<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },

   mounted() {

     //mockjs服务器访问
      // this.axios('/user/login')
      // .then((response) => {
      //   console.log(response)
      // })
      //public静态文件直接发送请求访问
    //   this.axios('/mock/ninhao/ninhao.json')
    //   .then((response) => {
    //     console.log(response)
    //   })
      
    }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/botton.scss';




</style>
