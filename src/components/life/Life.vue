<!--掌上生活-->
<template>
  <div id="page-zzzzsh" class="page page-current">
    <!--头部开始-->
    <div class="bar bar-header bar-header-Cred">
      <router-link class="button iconfont icon-fa-left  button-clear button-calm" to="../index" style="color: white;"></router-link>
      <div class="h1 title" style="color: white;">掌上组织生活</div>
      <!--<button class="button button-clear login-btn">登录</button>-->
    </div>
    <!--头部结束-->
    <!--中间内容-->
    <div class="scroll-content has-header">
      <div class="banner">
        <img src="../../assets/timg.jpg"/>
        <!--<img src="../../assets/banner1.png"/>-->
      </div>
      <div class="wzkmenu clearfix">
        <router-link class="menu-item fleft" to="/study">
          <img src="../../assets/icon1.png"/>
          <div>政治学习</div>
        </router-link>
        <div class="menu-item fleft " v-on:click="thought">
          <img src="../../assets/icon2.png"/>
          <div> 思想汇报</div>

        </div>
        <div class="menu-item fleft " to="/summary" v-on:click="summary">
          <img src="../../assets/icon3.png"/>
          <div>心得总结</div>
        </div>
       <!-- <router-link to="/discuss" class="menu-item fleft mzpy">
          <img src="../assets/icon4.png"/>
          <div>民族评议</div>
        </router-link>-->
        <div v-on:click="discuss" class="menu-item fleft mzpy">
          <img src="../../assets/icon4.png"/>
          <div>民主评议</div>
        </div>
        <router-link class="menu-item fleft" to="/findorg">
          <img src="../../assets/icon5.png"/>
          <div>流动党员找组织</div>
        </router-link>

      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Config from '../../config'
  export default{

    methods:{
//      民族评议
      discuss(){
        var self=this;
        if(!this.$store.state.token){
          self.$androidToast.show("请登陆");
          return ;
        }
        axios.get(Config.judgeComment,{
          params:{
            user_id:this.$store.state.token,
          }
        }).then(function (res) {
          let type= res.data.type;
          self.$store.state.commentId=res.data.tbComment.id;
          if(type == 0){

           self.$toasted.error("没有进行中的评议",{
              duration:1000,
            })
          }else{
            self.$router.push("/LifeChoice")
          }
        })

      },
//      思想汇报
      thought(){
        var self=this;
        if(!this.$store.state.token){
          self.$androidToast.show("请登陆");
          return ;
        }
        axios.get(Config.reportInfo,{params:{
          user_id:this.$store.state.token,
        }}).then(function (res) {
          let type=res.data.type;
          if(type==-1){
            self.$router.push("thought")
          }else{
            self.$router.push({name:"auditStatus",params:{
              state:type,
              type:0
            }})
          }
        })
      },
      summary(){

        var self=this;
        if(!this.$store.state.token){
          self.$androidToast.show("请登陆");
          return ;
        }
        axios.get(Config.checkByUserId,{params:{
          user_id:this.$store.state.token,
        }}).then(function (res) {
          let type=res.data.type;
//          console.log(type)
          if(type==-1){
            self.$router.push("summary")
          }else{
            console.log(type)
            self.$router.push('/auditStatus/'+type+'/'+1)
          }
        })
      }
    }
  }
</script>

