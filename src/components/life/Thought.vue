<!--思想汇报-->
<template>
  <div id="page-sxhb" class=" page page-current">
    <!--头部开始-->
    <headerbar title="思想报告"></headerbar>
    <!--头部结束-->
    <!--中间内容-->
    <div class="scroll-content has-header clearfix">
      <upload @getUrl="getUrl"></upload>
    <div style="position: absolute; bottom: 70px; width: 100%; text-align: center;"> <div @click="tj" class="tjsh">提交审核</div></div>

  </div>
  </div>
</template>

<script>
  import upload from "../common/Upload.vue"
  import headerbar from "../common/HeaderBar.vue"
  import axios from 'axios'
  import Config from '../../config'
  import Spinner from 'vue-simple-spinner'
  import util from '../common/util'
  export default{
      data(){
        return {
          imgList:[],
          urlList:[],
          isplay:false

        }
      },
      methods:{
        getUrl(data){
          this.urlList.push(data);
        },
        tj(){
          this.isplay=true;
          let self=this;
          var params = new FormData();
          params.append('user_id', self.$store.state.token);
          params.append('pic_list',self.urlList);
          axios.post(Config.thought,params).then(function (res) {
            self.isplay=false;
            self.$router.push({name:"auditStatus",params:{
              state:0,
              type:0
            }})
          }).catch(function(e){
            self.isplay=false;
            self.$androidToast.show(e);
          })
        },
      },components: {
        Spinner,
      upload,
      headerbar
      }
    }





</script>

