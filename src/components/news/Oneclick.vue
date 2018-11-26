<template>
  <div class="page news-page">
    <bar  :title="title"></bar>
    <list :type="type"></list>
  </div>
</template>

<script>

  import Bar from '../common/HeaderBar.vue'
  import List from '../news/Newslist'
  import Config from '../../config'
  export default{
    data(){
      return {
        type:3,
        title:Config.newsType[3]
      }
    },
    components:{
      'bar':Bar,
      'list':List
    }
  }
</script>
