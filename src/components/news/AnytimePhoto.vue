<template>
  <div class="page news-page">
    <bar  :title="title"></bar>
    <list :type="type" :listStyle="'img'"></list>
  </div>
</template>

<script>

  import Bar from '../common/HeaderBar.vue'
  import List from '../news/Newslist'
  import Config from '../../config'
  export default{
    data(){
      return {
        type:7,
        title:Config.newsType[7]
      }
    },
    components:{
      'bar':Bar,
      'list':List
    }
  }
</script>
