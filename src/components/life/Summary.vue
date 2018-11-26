<!--心得总结-->
<!--思想汇报-->
<template>
  <div id="page-sxhb" class=" page page-current">
    <!--头部开始-->
    <headerbar title="心得总结"></headerbar>
    <!--头部结束-->
    <!--中间内容-->
    <div class="scroll-content has-header clearfix">
      <upload @getUrl="getUrl"></upload>
      <spinner  :show="isplay" ></spinner>
   <div style="position: absolute; bottom: 70px; width: 100%; text-align: center;"> <div @click="tj" class="tjsh">提交审核</div></div>

  </div>
  </div>
</template>
<script>
  import upload from "../common/Upload.vue"
  import headerbar from "../common/HeaderBar.vue"
  import axios from 'axios'
  import Config from '../../config'
  import Spinner from '../common/Spinner.vue'
  import util from '../common/util'
  export default{
    data(){
      return {
        imgList:[],
        urlList:[],
        isplay:false
      }
    },components: {
      Spinner,
      upload,
      headerbar
    },
    methods:{
      getUrl(data){
        this.urlList.push(data);
      },
      tj(){
        let self=this;
        self.isplay=true;
        var params = new FormData();
        params.append('user_id', self.$store.state.token);
        params.append('pic_list',self.urlList);
        axios.post(Config.summary,params).then(function (data) {
          self.isplay=false;
          self.$router.push({name:"auditStatus",params:{
            state:0,
            type:1
          }})
        })
      },

    }
  }

</script>
<style>

</style>
