<!--党员云互动-->
<template>
  <div id="page-dyyhdDetail" class=" page page-current">
    <!--头部开始-->
    <div class="bar bar-header bar-header-Cred">
      <router-link class="button iconfont icon-fa-left button-clear button-calm" to="/interaction" style="color: white;"></router-link>
      <div class="h1 title" style="color: white;">党员云互动</div>
      <!--<button class="button button-clear login-btn">登录</button>-->
    </div>
    <!--头部结束-->
    <!--中间内容-->
    <div class="scroll-content has-tabs  has-header" ref="scroll">
      <ul class="lxyztlqList">
        <li class="item">
          <div class="top clearfix">
            <div class="touxiang fleft"><img :src="forum.header" /></div>
            <div class="top-center fleft">
              <div class="nickname">{{forum.username||"游客"}}</div>
              <div class="time"><i class="iconfont icon-shijian"></i>
                <span>{{forum.currentTime}}</span> </div>
            </div>
          </div>
          <div class="content">{{forum.content}}</div>
        </li>
      </ul>
      <ul class="commentList">
        <li class="item" v-for="item in commentList">
          <div class="top clearfix">
            <div class="touxiang fleft"><img :src="item.header" /></div>
            <div class="top-center fleft">
              <div class="nickname">{{item.username}}</div>
              <div class="time"><i class="iconfont icon-shijian"></i><span>{{item.timeFormat}}</span> </div>
            </div>
          </div>
          <div class="content" >
            {{item.comment}}
          </div>

        </li>
      </ul>
      <infinite-loading :spinner="'spiral'" :on-infinite="onInfinite" ref="infiniteLoading">
           <span slot="no-results">
            还没有数据
           </span>
           <span slot="no-more">
            没有更多数据了
           </span>
      </infinite-loading>
    </div>
    <div class="bottom list">

      <div class="item item-input-inset">
        <label class="item-input-wrapper">
          <input v-model="content" ref="input" type="text" placeholder="评论内容">
        </label>
        <div v-on:click="addComment" class="button button-small ">
          评论
        </div>

      </div>

    </div>
  </div>
</template>
<style type="text/less" scoped>

.bottom{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.bottom .item{
    padding: 8px ;

  }
.bottom  .item-input-wrapper{
  border:1px solid #c50206;
  background: white;

}
.bottom input{
  /*color: white;*/
  width: 100%;
}
.bottom .button{
  background: #c50206;
  color: white;
}
.lxyztlqList{
  margin: 10px;
}
</style>

<script>

  import axios from 'axios'
  import Config from '../config'
  import InfiniteLoading from 'vue-infinite-loading'
  export default{
    data(){
      return{
         /* formateDate:function(time){
            return new Date(time).toLocaleString();
          },*/
        content:"",
        forum:{},
        ids:[],
        total:0,
        page:1,
        rows:10,
        commentList:[],
      }
    },
    created() {
      this.forum = this.$store.state.forum;
    },
    methods:{
      addComment(){
        var form = new FormData();
        form.append("forum_id",this.forum_id);
        form.append("comment",this.content);
        var self=this;
        axios.post(Config.addComment,form).then(function (res) {
          self.content="";
          self.commentList.splice(0,0,res.data.data);
          self.$refs.scroll.scrollTop=0;
        })
      },
      onInfinite(){
        var self=this;
        axios.get(Config.forumCommentList,{params:{
          page:self.page,
          rows:self.rows,
          forum_id:self.forum.forumId,
        }}).then(function (res) {
          if(res.data&&res.data.rows.length>0){
            var filterdata=res.data.rows.filter(function(item){
              return self.ids.indexOf(item.id)<0;
            })
            self.commentList=self.commentList.concat(filterdata);
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

