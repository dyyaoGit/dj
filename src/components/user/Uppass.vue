<!--修改密码-->
<template>
  <div id="page-updatepass" class=" page page-current">
    <!--头部开始-->
    <div class="bar bar-header bar-header-Cred">
      <router-link to="/user" class="button  iconfont icon-fa-left button-clear button-calm" style="color: white;"></router-link>
      <div class="h1 title" style="color: white;">修改密码</div>
      <!--<button class="button button-clear login-btn">登录</button>-->
    </div>
    <!--头部结束-->
    <!--中间内容-->
    <div class="scroll-content  has-header " style="background: white;">

      <form ref="form" class="login-form">
        旧密码：
        <input type="password" v-model="oldPwd" placeholder="旧密码" value="" />
        新密码：
        <input type="password" v-model="newPwd"  placeholder="新密码" value="" />
        确认密码：
        <input type="password" v-model="rePwd"  placeholder="确认密码" value="" />

        <input type="button" class="button button-assertive" name="" v-on:click="login"  value="确定" />
      </form>

    </div>
    <spinner  :show="show" ></spinner>
  </div>
</template>

<script>
  import Spinner from '../common/Spinner.vue'
  import axios from 'axios'
  import Config from '../../config'
  export default{
    data(){
      return{
        newPwd:'',
        oldPwd:'',
        rePwd:'',
        show:false
      }
    },
    components: {
      Spinner
    },
    methods: {
      login(){

        if(this.newPwd!=this.rePwd){
          this.$androidToast.show("输入的两次新密码不相同");
        }else{
          var self=this;
          this.show=true;
          axios.get(Config.uppass,{params:{newPwd:this.newPwd,oldPwd:this.oldPwd}}).then(function (res) {
            self.show=false;
            if(res.data.code){
             /* self.$store.state.login.userId=res.data.user.id;
              self.$store.state.login.state=true;*/
              self.$router.push('user')
            }else{
              self.$androidToast.show(res.data.msg);
            }

          })
        }

      }

    }

  }

</script>
