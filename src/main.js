import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Message } from 'element-ui'
import VueLazyLoad from 'vue-lazyload'
// import './mock/mock-server.js'
// import env from '../env.js'
let mock = true;

if (mock) {
  require('./mock/mock-server.js')
}



Vue.config.productionTip = false
Vue.use(VueAxios,axios)
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})

// axios.defaults.baseURL = 'https://localhost:3000/api'
// axios.defaults.baseURL = env.baseURL
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8888;

axios.interceptors.response.use((response) => {
  let data = response.data
  if (data.status == 0) {
    return data
  }else if(data.status == 10){
    location.href = '/#/login'
    return Promise.reject(data)
  }else{
    Message.error(data.Message)
    return Promise.reject(data)
  }
},(error) => {
  let res = error.response
  Message.error(res.data)
  return Promise.reject(error)
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


