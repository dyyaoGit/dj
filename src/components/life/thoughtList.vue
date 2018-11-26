<template>
  <div id="page-grjf" class=" page page-current">
    <div class="bar bar-header bar-header-Cred">
      <router-link class="button iconfont icon-fa-left  button-clear button-calm"
         to="/user" style="color: white;"></router-link>

      <div class="h1 title" style="color: white;">历史思想报告</div>
      <div class="button  button-clear button-calm"
                  style="color: white;">新建</div>
    </div>
    <div class="scroll-content has-tabs has-header">
      <div class="list">
        <a v-for="item in list" class="item cleaxfix" href="#">
          <div class="icon fleft">
            <div class="typename" style="">{{item.typeName}} </div>
            <div class="timeformat" style="">{{item.timeFormat}}</div>
          </div>
          <div class="icon fright" style="color: red">+{{item.singleDesc}}</div>
        </a>
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
      </div>
     </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Config from '../../config'
  import InfiniteLoading from 'vue-infinite-loading'
  export default{
      data(){
        return {
          list:[],
          page:1,
          type:0
        }
      },
      methods:{
        onInfinite(){
          var self=this;
          axios.get(Config.News,{params:{
            /*user_id:this.$store.state.login.userId,*/
            page:self.page,
            rows:10,
            type:4
          }}).then(function (res) {
            self.list=self.list.concat(res.data.rows);
            if(self.list.length<res.data.total){
              self.page++;
              self.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
            }
          })
        }
      }
    }
</script>

<style>
  .typename{
    display: block;font-size: 18px;margin-bottom: 5px;color:#333;
  }
  .timeformat{
    display: block ;font-size: 14px
  }
</style>
