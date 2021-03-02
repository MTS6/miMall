<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script tyrpe="text/ecmascript-6">
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'

export default {
  name:'home',
  components:{
    NavHeader,
    NavFooter
  }
}
</script>
    


<style scoped lang="stylus" rel="stylesheet/stylus">

</style>