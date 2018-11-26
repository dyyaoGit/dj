<template>
  <div id="page-grdjxx" class=" page page-current">
    <div class="bar bar-header bar-header-Cred">
      <router-link class="button iconfont icon-fa-left button-clear button-calm"
                   to="/info" style="color: white;"></router-link>
      <div class="h1 title" style="color: white;">修改个人信息</div>
      <div class="button button-clear button-calm" v-on:click="save" style="color: white;">保存</div>
    </div>
    <div class="scroll-content has-header">
      <div class="yaowen"></div>
      <form ref="form" class="list ">
        <div v-on:click="upload" class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
          <span class="icon" style="font-size: 14px;">
            头像
          </span>
          <span class="icon header" style="">
            <img  class="" style="" :src="objs.header"/>
          </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
          <span class="icon" style="font-size: 14px;">
            姓名
          </span>
          <span class="icon" style="font-size: 14px;">
            <!--{{objs.username}}-->
            <input type="text" v-show="true" name="username" id="username" :value="objs.username"/>

            <!--<input type="text" disabled="disabled" name="" id="" :value="objs.username"/>-->
          </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
          <span class="icon" style="font-size: 14px;">
            身份证
          </span>
          <span class="icon" style="font-size: 14px;">
            {{objs.idCard}}
            <!--<input type="text" v-show="true" name="idCard" id="idCard" :value="objs.idCard"/>-->
            <!--<input type="text" name="" id="" value=""/>-->

          </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
          <span class="icon" style="font-size: 14px;">
            家庭住址
          </span>
          <span class="icon" style="font-size: 14px;">
            <!--{{objs.hometown?objs.hometown:""}}-->
            <input type="text" v-show="true" name="hometown" id="hometown" :value="objs.hometown"/>
            <!--<input type="text" name="" id="" value=""/>-->

          </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
          <span class="icon" style="font-size: 14px;">
            工作地址
          </span>
          <span class="icon" style="font-size: 14px;">
            <!--<input type="text" name="" id="" value=""/>-->
            <input type="text" v-show="true" name="address" id="address" :value="objs.address"/>
            <!--{{objs.address?objs.address:""}}-->

          </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
          <span class="icon" style="font-size: 14px;">
            民族
          </span>
          <span class="icon" style="font-size: 14px;">
            <input type="text" v-show="true" name="nation" id="nation" :value="objs.nation"/>
            <!--<input type="text" name="" id="" value=""/>-->
            <!--{{objs.nation?objs.nation:""}}-->

          </span>

        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
          <span class="icon" style="font-size: 14px;">
            微信号
          </span>
          <span class="icon" style="font-size: 14px;">
            <!--<input type="text" name="" id="" value=""/>-->
            <input type="text" v-show="true" name="wxNum" id="wxNum" :value="objs.wxNum"/>
            <!--{{objs.wxNum}}-->
          </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
          <span class="icon" style="font-size: 14px;">
            qq号
          </span>
          <span class="icon" style="font-size: 14px;">
            <!--<input type="text" name="" id="" value=""/>-->
            <input type="text" v-show="true" name="qqNum" id="qqNum" :value="objs.qqNum"/>
            <!--{{objs.qqNum}}-->

          </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
          <span class="icon" style="font-size: 14px;">
            性别
          </span>
          <span class="icon" style="font-size: 14px;">
            <input type="radio" v-model="sex" name="sex" value="1"> 男
            <input type="radio" v-model="sex" name="sex" value="0"> 女

            <!--<input type="text" v-show="true" name="sex" id="sex" :value="objs.sex"/>-->
            <!--<input type="text" name="" id="" value=""/>-->
            <!--{{objs.sex?"男":"女"}}-->
          </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
          <span class="icon" style="font-size: 14px;">
            最高学历
          </span>
          <span class="icon" style="font-size: 14px;">
            <input  type="text" v-show="true" name="education" id="education" :value="objs.education"/>
            <!--<input type="text" name="" id="" value=""/>-->
            <!--{{objs.education}}-->
          </span>

        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
          <span  class="icon" style="font-size: 14px;">
            职称
          </span>
          <span class="icon" style="font-size: 14px;">
            <input  type="text" v-show="true" name="jobRank" id="jobRank" :value="objs.jobRank"/>
            <!--<input type="text" name="" id="" value=""/>-->
            <!--{{objs.jobRank}}-->
          </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
          <span class="icon" style="font-size: 14px;">
            薪资水平
          </span>
          <span class="icon" style="font-size: 14px;">
            <input  type="number" v-show="true" name="salary" id="salary" :value="objs.salary"/>
            <!--{{objs.salary}}-->
            <!--<input type="text" name="" id="" value=""/>-->
          </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
          <span  class="icon" style="font-size: 14px;">
            入党时间
          </span>
          <span class="icon" style="font-size: 14px;">
            <input  type="date" v-show="true" name="joinPartyTime" id="joinPartyTime"
                   :value="objs.joinPartyTime"/>
            <!--{{objs.joinPartyTime}}-->
            <!--<input type="text" name="" id="" value=""/>-->
          </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
          <span class="icon" style="font-size: 14px;">
            党费最后缴纳时间
          </span>
          <span class="icon" style="font-size: 14px;">
            <input  type="date" v-show="true" name="lastPayTime" id="lastPayTime"
                   :value="objs.lastPayTime"/>
            <!--<input type="text" name="" id="" value=""/>-->
            <!--{{objs.lastPayTime}}-->
          </span>
        </div>

        <div class="item item-icon-left  item-icon-right item-select" style="height: 50px;" href="#">
          <span class="icon" style="font-size: 14px;">
            当前身份
          </span>
          <select name="partyStatus" v-model="objs.partyStatus">
            <option value="2">党员</option>
            <option value="1">预备党员</option>
            <option value="0">积极分子</option>
          </select>
        </div>
      </form>
    </div>
    <input  ref="up" v-on:change="change" type="file" accept="image/gif,image/jpeg,image/jpg,image/png" capture="camera" v-show="false" name="myFile" hidden>
  </div>
</template>

<script>

  import axios from 'axios'
  import Config from '../../config'
  import util from '../common/util'
  export default{
    data(){
      return {
        objs: {},
        sex:0,
        headerUrl:""
      }
    },
    created() {
          this.objs = this.$store.state.userInfo;
          this.sex=this.$store.state.userInfo.sex
    },
    methods: {
      save(){
        var form = this.$refs.form;
        var formData = new FormData(form);
        var self=this;
        if(this.headerUrl){
          formData.append("header",this.headerUrl);
        }
        axios.post(Config.updateInfo, formData).then(function (res) {
          self.$router.push("info");
        })

      },

      upload(){
        this.$refs.up.click();
      },
      change(){
        this.isplay=true;
        var self=this;
        var file =this.$refs.up;
        var f = file.files[0];
        var FR = new FileReader();
        FR.readAsDataURL(f);
        FR.onload = function(e){
          util.compressImg(this.result,600,function(data){//压缩完成后执行的callback
           self.objs.header=data;
            var params = new FormData();
            params.append('myFile',data.replace(/^data[\w\W]{0,}base64,/,""));
            self.isplay=false;
            axios.post(Config.Qiniu_UploadUrl,params).then(function (res) {
              self.headerUrl=res.data.url;
            })
          });
        };


      }

    }

  }

</script>

<style>
  .header {
    width: 48px;
  }

  .header img {
    padding: 10px 0;
    width: 100%;
    height: 100%
  }

  #page-grdjxx input {
    text-align: right;
  }
  input[type=radio][name=sex]{
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
