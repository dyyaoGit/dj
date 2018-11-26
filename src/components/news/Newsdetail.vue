<!--新闻详情页面
-->
<template>
  <div  class=" page news-page">
    <bar  :title="header"></bar>
    <div class="scroll-content  has-header news-content" >
        <h3>{{title}}</h3>
        <div v-html="content"></div>
    </div>
    </div>
</template>

<script>
    import Axios from 'axios'
    import Config from '../../config'
    import Bar from '../common/HeaderBar.vue'
    export default{
      data(){
        return{
          content:'',
          title:'',
          header:''
        }
      },
      components:{
        'bar':Bar,
      },
      created(){
        var self=this;
         Axios.get(Config.Newsdetail+'?newsId='+this.$route.params.newsId)
           .then(function (res) {
             if(res.data&&res.data.code==1){
               self.content=res.data.data.content;
               self.title=res.data.data.title;
               self.header=Config.newsType[res.data.data.type]
             }

         })
      }
    }
</script>
