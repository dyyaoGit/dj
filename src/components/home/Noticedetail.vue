<template>
  <div id="page-newseyesDetail" class=" page page-current">
    <!--头部开始-->
    <div class="bar bar-header bar-header-Cred">
      <router-link class="button  button-clear" to="/notice" style="color: white;">
        <i class="iconfont icon-fa-left"></i></router-link>
      <div class="h1 title" style="color: white;">通知早知道</div>
    </div>
    <div class="scroll-content  has-header news-content" >
        <h3>{{title}}</h3>
        <div v-html="content"></div>
    </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Config from '../../config'
    export default{
      data(){
        return{
          content:'',
          title:''
        }
      },
      created(){
        var self=this;
         axios.get(Config.Newsdetail+'?newsId='+this.$route.params.newsId).then(function (res) {
            self.content=res.data.content;
            self.title=res.data.title;
         })
      }
    }
</script>

<style>
</style>
