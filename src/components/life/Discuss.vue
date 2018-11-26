<!--民主评议-->
<template>
  <div id="page-pyxz" class="page page-current">
    <!--头部开始-->
    <div class="bar bar-header bar-header-Cred">
      <router-link  to="/life" class="button iconfont icon-fa-left button-clear button-calm" style="color: white;"></router-link>
      <div class="h1 title" style="color: white;">{{commentContent.titleDesc}}</div>
      <!--<button class="button button-clear login-btn">登录</button>-->
    </div>
    <!--头部结束-->
    <!--中间内容<-->

  <div class="scroll-content  has-header">
    <div class="firctr">
      <p class="firhead">评议须知</p>
      <div class="content" v-html="commentContent.content"></div>

      <div class="firbtnctrl ">
        <div class="clearfix" style="width:100%">

          <div class="selectBtnWrap fleft">
            <select ref="select" v-model="selected" class="branchSelect" name="">
              <option  value="0">请选择</option>
              <option  v-for="item in branchList" :value="item.id">{{item.branch}}</option>
            </select>
          </div>
          <div class="nextBtn fleft" v-on:click="next">下一步</div>
        </div>

      </div>
    </div>

  </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Config from '../../config'
    export default{
      data(){
        return {
          branchList:[],
          commentContent:{},
          selected:"0",
        }
      },
      created:function () {
        var self=this;
        axios.get(Config.branchList).then(function (res) {
          self.branchList=res.data.rows;
        });
        axios.get(Config.Comment).then(function (res) {
          self.commentContent=res.data;
        });

      },
      methods:{
        next(){
          var self=this;
          self.$router.push("Members");
          self.$store.state.select_branch=self.selected;
          if(this.selected==0){
            self.$androidToast.show("请选择相应的支部");
          }else{
              self.$store.state.select_branch=self.selected;
              self.$router.push("Members");
          }
          console.log(this.selected)
        },
      }
    }
</script>
