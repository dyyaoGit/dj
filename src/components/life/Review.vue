<template>
  <div id="page-py" class="page page-current">
    <!--头部开始-->
    <div class="bar bar-header bar-header-Cred">
      <router-link to="/Members" class="button iconfont icon-fa-left button-clear button-calm" style="color: white;"></router-link>
      <div class="h1 title" style="color: white;">民主评议</div>
      <!--<button class="button button-clear login-btn">登录</button>-->
    </div>

    <!--头部结束-->
    <!--中间内容<-->
    <!--<alert  @cancel="cancel" @ok="ok" title="确定提交吗"></alert>-->
    <div v-show="isShowAlert"  class="alertWrap">
      <div class="alert">
        <div class="content">确定提交吗</div>
        <div class="btnGr">
          <div v-on:click="cancel" class="leftBtn">取消</div>
          <div v-on:click="ok" class="rightBtn">确定</div>
        </div>
      </div>

    </div>
    <div class="scroll-content has-tabs  has-header">
      <div class="firctr">
        <p class="firhead">个人总结</p>
        <div class="content">
          <img class="image"  v-for="item in picList" :src="item.picUrl" alt="">
        </div>

      </div>
    </div>
    <div class="radio-wrap clearfix">
        <!--<label class="qpj">请评价</label>-->
        <input type="radio" value="0" name="choose" v-model="type" id="guangpan">
        <label for="guangpan">优</label>
        <input type="radio" value="1" name="choose"  v-model="type" id="kaiche">
        <label for="kaiche">良</label>
        <input type="radio" value="2" name="choose" v-model="type" id="laiji">
        <label for="laiji">中</label>
        <input type="radio" value="3" name="choose" v-model="type" id="baozhuang">
        <label for="baozhuang">差</label>
        <input type="button" v-on:click="submit" class="py" style="" value="提交" />
      </div>

  </div>
</template>
<script>
  import alert from "../common/alert.vue"
  import axios from 'axios'
  import Config from '../../config'
  export default{
    data(){
      return {
        summary:"",
        type:"0",
        picList:[],
        id:"",
        isShowAlert:false
      }
    },
    created(){
      var other_user_id=this.$route.params.other_user_id;
      var self=this;
      axios.get(Config.userSummary,{
        params:{
          user_id: other_user_id,
          comment_id:this.$store.state.commentId
        }
      }).then(function (res) {
        self.picList=res.data.picList;
        self.id=res.data.tbCommentUser.id;
      })

    },
    methods:{
      ok(){
        var self=this;
        axios.get(Config.submitComment,{
          params:{
            user_id:this.$store.state.token,
            other_user_id:this.$route.params.other_user_id,
            id:self.id,
            type:this.type
          }
        }).then(function (res) {
          self.isShowAlert=false;
          self.$router.push("/Members");
        })
      },
      cancel(){
        this.isShowAlert=false;
      },
      submit(){
        this.isShowAlert=true;
      }
    }
    ,
    components: {
      alert
    }

  }
</script>
<style scoped>
  .image{
   width: 100%;
  }

</style>
<style scoped>
  .image{

  }
  .alertWrap{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index:11;
    color: white;

  }
  .alert{
    /*height: 100px;*/
    width: 60%;
    border: 1px solid rgba(0,0,0,0.5);
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius:5px ;
    background: rgba(0,0,0,0.5);
  }
  .content{
    height: 70px;
    line-height: 70px;
    text-align: center;
    font-size: 18px;
    padding: 20px 10px;

  }
  .content img{
    margin-bottom: 10px;
    box-shadow: 0 0 3px 5px #ccc;
  }
  .btnGr{
    height: 50px;
    font-size: 16px;
    width: 100%;
    display: table;
  }
  .btnGr div:first-child{
    border-right: 1px solid rgba(255,255,255,0.3);
  }
  .btnGr div{
    border-top: 1px solid rgba(255,255,255,0.3);
    display: table-cell;
    width: 50%;
    text-align: center;
    vertical-align: middle;
  }
</style>
