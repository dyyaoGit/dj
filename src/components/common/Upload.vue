<template>
  <div id="upload">
    <div v-for="(item,index) in imgList" :data-index="index" class=" imgWrap upload" style=""	>
      <img :src="item"/>
      <!--<span> {{item}}</span>-->
    </div>
    <div v-on:click="upload"  class="imgWrap upload" style=""	>
      <img src="../../assets/upload.png"/>
    </div>
  <div v-show="isplay" class="custome-wrap">
    <div class="custome-spinner" style="">
      <spinner  size="big"  line-bg-color="#ffffff" line-fg-color="rgba(0,0,0,0)" :line-size="1"></spinner>
    </div>
  </div>
  <input id="myFile" ref="up" v-on:change="change" type="file" accept="image/gif,image/jpeg,image/jpg,image/png" capture="camera" v-show="false" name="myFile" hidden>
  </div>
</template>
<script>
  import axios from 'axios'
  import Config from '../../config'
  import Spinner from 'vue-simple-spinner'
  import util from './util'
  import {recordError} from '../../exception'
  export default{
    data(){
      return {
        imgList:[],
        urlList:[],
        isplay:false

      }
    },
    methods:{
      upload(){
        this.$refs.up.click();
      },
      change(){
        this.isplay=true;
        var self=this;
        var file =this.$refs.up;
        if(file.files.length<1){
          self.isplay=false;
          return false;
        }
        try{
          var f = file.files[0];
          var FR = new FileReader();
          FR.readAsDataURL(f);
          FR.onload = function(e){
            util.compressImg(this.result,600,function(data){//压缩完成后执行的callback
              var params = new FormData();
              params.append('myFile',data.replace(/^data[\w\W]{0,}base64,/,""));
              axios.post(Config.Qiniu_UploadUrl,params).then(function (res) {
                self.isplay=false;
                self.$emit("getUrl",res.data.url);
                self.imgList.push(data);
              }).catch(function (e) {
                self.isplay=false;
                self.$androidToast.show('图片打开失败');
                recordError('上传图片错误：'+e);
              })
            });
          };
        }catch (error){
            self.isplay=false;
            self.$androidToast.show('图片打开失败');
            recordError('图片打开失败：'+error);
        }
      }
    },components: {
      Spinner
    }
  }





</script>
