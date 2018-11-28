
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Toasted from 'vue-toasted';
import toas from '@/components/common/vue-androidToast'
import Axios from 'axios'
import Config from './config'
import Swiper from 'vue-awesome-swiper'
import exception from './exception'

Vue.use(Swiper)
Vue.use(Toasted)
Vue.use(toas)
Vue.config.productionTip = false
Axios.defaults.headers.common['token'] = store.state.token;
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  created(){
    //页面加载读取本地token
    var token = localStorage.getItem("token");
    if (token) {
      Axios.defaults.headers.common['token'] = token;
      var self = this;
      //读取用户信息
      Axios.get(Config.userInfo).then(function (res) {
        if (res.data && res.data.code == 1) {
          self.$store.commit('setToken', {token: token, user: res.data.data});
        }
      })
    }
  }
})

/*判断路由*/
router.beforeEach((to, from, next)=> {
  // 判断该路由是否需要登录权限 ，Vuex是否保存了token
  function jsMethod() {
    location.href = `hs://call_?${to.path}`
  }
  jsMethod()
  if (to.meta.requireAuth && store.state.token.length<=2) {
    next({
      path: '/login',
      query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    })
  }
  else {
    next();
  }
})

