<template>
  <div>
   <router-view></router-view>
   <service-bar></service-bar>
   <nav-footer></nav-footer>
  </div>
</template>
<script tyrpe="text/ecmascript-6">
import ServiceBar from '../components/ServiceBar'
import NavFooter from '../components/NavFooter'

export default {
  name:'order',
  components:{
    ServiceBar,
    NavFooter
  }
}
</script>
   

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>