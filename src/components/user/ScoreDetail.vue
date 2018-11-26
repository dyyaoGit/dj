<template>
  <div>
    <div class="bar bar-header bar-header-Cred">
      <router-link class="button iconfont icon-fa-left  button-clear button-calm"
                   to="/score" style="color: white;"></router-link>
      <div class="h1 title" style="color: white;">积分明细</div>
    </div>
    <div class="scroll-content has-header">
      <div class="list">
        <div v-for="item in list" class="item cleaxfix" href="#">
          <div class="icon fleft">
            <div class="typename" style="">{{item.typeName}}</div>
            <div class="timeformat" style="">{{item.timeFormat}}</div>
          </div>
          <div class="icon fright" style="color: red">+{{item.singleDesc}}</div>
        </div>
        <infinite-loading :spinner="'spiral'" :on-infinite="onInfinite" ref="infiniteLoading">
           <span slot="no-more">
            没有数据了
           </span>
        </infinite-loading>
      </div>
    </div>

  </div>
</template>
<style scoped>
  .typename {
    display: block;
    font-size: 18px;
    margin-bottom: 5px;
    color: #333;
  }

  .timeformat {
    display: block;
    font-size: 14px
  }
</style>

<script>
  import axios from 'axios'
  import Config from '../../config'
  import InfiniteLoading from 'vue-infinite-loading'

  export default{
    data(){
      return {
        list: [],
        page: 1,
        type: 0
      }
    },
    methods: {
      onInfinite(){
        var self = this;
        axios.get(Config.integralList, {
          params: {
            page: self.page,
            rows: 10
          }
        }).then(function (res) {
          if (res.data.rows.length > 0) {
            self.list = self.list.concat(res.data.rows);
            self.page++;
            self.total = res.data.total;
            self.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
          }
          else {
            self.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
          }
        })
      }
    },
    created(){

    },
    components: {
      InfiniteLoading,
    }
  }
</script>

