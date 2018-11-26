<template>
  <div id="page-tzzzd" class=" page page-current">
    <div class="bar bar-header bar-header-Cred">
      <div class="h1 title" style="color: white;">通知早知道</div>
    </div>
    <!--中间内容-->
    <div class="scroll-content has-tabs has-header">
      <a :href="'#/newsDetail/'+item.newsId" class="row" v-for="item in list">
        <div class="left-img col col-20">
          <i class="iconfont icon-laba"></i>
        </div>
        <div class="col" >
          <div class="notice-title">{{item.title}}</div>
          <div class="notice-time">{{item.currentTime}}</div>
        </div>
      </a>
      <infinite-loading :spinner="'spiral'" :on-infinite="onInfinite" ref="infiniteLoading">
           <span slot="no-more">
            没有数据了
           </span>
      </infinite-loading>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Config from '../../config'
  import InfiniteLoading from 'vue-infinite-loading'
  export default{
    data(){
      return{
        list:[],
        page:1,
        type:2
      }
    },
    methods:{
      onInfinite(){
        var self=this;
        axios.get(Config.News,{params:{
          page:self.page,
          rows:10,
          type:2,
        }}).then(function (res) {
          if(res.data.rows.length>0){
            self.list=self.list.concat(res.data.rows);
            self.page++;
            self.total=res.data.total;
            self.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
          }
          else{
            self.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
          }
        })
      }
    },
    components:{
      InfiniteLoading,
    }
  }

</script>
