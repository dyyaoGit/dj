<template>
  <div id="page-login" class=" page page-current">
    <!--头部开始-->
    <div class="bar bar-header bar-header-Cred">
      <span href="#" @click.prevent="$router.go(-1)" class="button  iconfont icon-fa-left button-clear button-calm"  style="color: white;"></span>
      <div class="h1 title" style="color: white;">登录</div>
      <!--<button class="button button-clear login-btn">登录</button>-->
    </div>
    <!--头部结束-->
    <!--中间内容-->
    <div class="scroll-content  has-header" style="">
      <div class="logo">
        <img src="../assets/logo.png"/>
      </div>
      <form ref="form" class="login-form">

        <input type="text" name="id_card" id="idcard" placeholder="身份证号" value="" />
        <input type="password" name="password" id="password" placeholder="密码" value="" />
        <input type="button" name=""  v-on:click="login" id="login" value="登录" />
      </form>

    </div>

    <spinner :message="'正在登录中'" :show="isplay" ></spinner>

  </div>
</template>

<script>
  import axios from 'axios'
  import Config from '../config'
  import Spinner from './common/Spinner.vue'

  export default{
  components: {
    Spinner
  },
    data(){
      return{
        isplay:false,
      }
    },
    methods: {
      login(){
        var form = this.$refs.form;
        var formData = new FormData(form);
        var self=this;
        this.isplay=true;
        axios.post(Config.login,formData).then(function (res) {
          self.isplay=false;
          if(res.data&&res.data.code==1){
            //保存token
            self.$store.commit('setToken',{token:res.data.token,user:res.data.data});
            if(self.$route.query.redirect){
              self.$router.push(self.$route.query.redirect);
            }
            else{
              self.$router.push('user')
            }
          }else{
            self.$androidToast.show(res.data.msg);
          }
        }).catch(function (error) {
          self.isplay=false;
          self.$androidToast.show('登录失败');
          self.$exception(error);
        });
      }
    }
  }
</script>
