/**
 * Created by lihualong on 2017/6/16.
 */
import axios from 'axios'
import config from './config'
import Vue from 'vue'

/*axios全局异常捕获*/
axios.interceptors.response.use(function(res){
  return res;
},function(err){
  sendException(err);
  return Promise.reject(err);
})
/*vue 实例对象添加全局异常*/
Vue.prototype.$exception=function (error) {
  sendException(error);
}

/*原生请求*/
function sendException(err) {
  var xhr=new XMLHttpRequest();
  xhr.open('post',config.systemError);
  xhr.setRequestHeader("token","00");
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  xhr.send('exception='+err);
}

/*export const recordError=error=>{
  var params = new URLSearchParams();;
  params.append('exception',error);
  axios.post(config.systemError,params);
}*/
