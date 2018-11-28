<template>
  <div class="scroll-content has-header">
    <div class="news-list" v-if="listStyle!='img'">
      <router-link :to="'/newsDetail/'+item.newsId" class="news-item "
         v-for="(item,index) in list" :key="index" >
         <div class="img" :style="{backgroundImage: 'url(' + item.pic + ')'}">
         </div>
         <div class="content">
           <h3 class="overflow-line-2">{{item.title}}</h3>
           <div class="bottom-bar">
							<span >
								{{item.currentTime}}
							</span>
            <span class="counter">
               <i class="iconfont icon-eye"></i>
									{{item.count}}
            </span>
           </div>
         </div>

          <!--<div class="text-content" >
            {{item.titledesc}}
          </div>-->

      </router-link>
    </div>
    <div class="img-list" v-if="listStyle=='img'">
      <router-link v-for="(item, index) in list" class="item" :key="index" :to="'/newsDetail/'+item.newsId">
        <div :style="{backgroundImage: 'url(' + item.pic + ')'}" class="bg-img">
          <img src="../../assets/bg4x3.png" />
        </div>
        <div class="overflow-line-2">{{item.title}}</div>
      </router-link>
    </div>
    <infinite-loading :spinner="'spiral'" :on-infinite="onInfinite"
                      ref="infiniteLoading">
           <span slot="no-results">
            还没有数据
           </span>
           <span slot="no-more">
            没有更多数据了
           </span>
    </infinite-loading>
  </div>
</template>

<script>
  import Axios from 'axios'
  import Config from '../../config'
  import InfiniteLoading from 'vue-infinite-loading'
    export default{
      data(){
        return{
          list:[],
          page:1,
        }
      },
      props:['type',"listStyle"],
      created:function () {

      },
      components:{
        InfiniteLoading,
      },
      methods:{
        onInfinite(){
          var self=this;
          Axios.get(Config.News,{params:{
            page:self.page,
            rows:10,
            type:self.type
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
      }
    }
</script>
