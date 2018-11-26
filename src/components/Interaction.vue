<!--党员云互动-->
<template>
  <div id="page-dyyhd" class=" page page-current">
    <div class="bar bar-header bar-header-Cred">
      <router-link class="button iconfont icon-fa-left button-clear button-calm" to="/index" style="color: white;"></router-link>
      <div class="h1 title" style="color: white;">党员云互动</div>
      <!--<button class="button button-clear login-btn">登录</button>-->
    </div>
    <!--头部结束-->
    <!--中间内容-->
    <div  v-show="isShowPublish" class="publishWrap"  v-on:click="closePublish">
        <form class="publishForm" action="" @click.stop="nothingdo">
          <textarea v-model="content"></textarea>
          <input v-on:click="publish" type="button" class="button button-small button-assertive" value="发布">
          <input v-on:click="closePublish" type="button" class="button button-small button-default" value="取消">
        </form>
    </div>
    <div v-show="isShowAdd" class="fabu">
      <i  v-on:click.prevent="add" class="iconfont icon-iconfontxinzeng"></i>
    </div>
    <div class="scroll-content  has-header" ref="scroll">
     <!-- <div class="search-wrap"><input type="text" name="" id="" value="" placeholder="在党员云互动中搜索" /></div>-->


      <ul class="lxyztlqList" >
        <li v-for="item in list" class="item">
          <div class="top clearfix">
            <div class="touxiang fleft"><img :src="item.header" /></div>
            <div class="top-center fleft">
              <div class="nickname">{{item.username}}</div>
              <div class="time"><i class="iconfont icon-shijian"></i><span>{{item.currentTime}}</span><i class="iconfont icon-laba1"></i><span>公开</span> </div>
            </div>
            <div class="lxyz  fright">党员互动</div>
          </div>
          <div class="content">{{item.content}}</div>
          <div class="clearfix"><span v-on:click="resonse(item)" class="response fright"><i  class="iconfont icon-xiaoxi2"></i><span>回复</span></span>
          </div>
        </li>
        <infinite-loading :spinner="'spiral'" :on-infinite="onInfinite" ref="infiniteLoading">
           <span slot="no-results">
            还没有数据
           </span>
           <span slot="no-more">
            没有更多数据了
           </span>
        </infinite-loading>
      </ul>
    </div>

  </div>
  </div>
</template>
<style lang="less" scoped>
  .publishWrap{
    position: fixed;
    height: 100%;
    width: 100%;
    z-index:999;
    background: rgba(0,0,0,0.5);
  }
  .publishForm{
    width: 100%;
    position: absolute;
    bottom:0;
    padding: 10px;
    background: #f1f1f1;
  }
  .publishForm textarea{
    width: 100%;
    height: 100px;
    border-radius: 3px;
    padding: 4px;
    margin-bottom: 10px;
  }
  .publishForm  label{
    font-size: 18px;
    color: white;
  }
  .publishForm input:nth-of-type(2){
   float: right;
  }
  .fabu {
    position: fixed;
    right: 10px;
    bottom: 70px;
    z-index: 999999;
  .iconfont {
    font-size: 56px;
    color: red;
  }
  }

</style>

<script>

  import axios from 'axios'
  import Config from '../config'
  import InfiniteLoading from 'vue-infinite-loading'
  export default{
    data(){
      return{
        content:"",
        isShowPublish:false,
        isShowAdd:true,
        list:[],
        page:1,
        type:0,
        ids:[],//用户提交的帖子id
      }
    },
    created:function () {

    },
    methods:{
      //发布帖子
      publish(){
        var data = new FormData();
        data.append("content",this.content);
        data.append("type",1);
        let self= this;
        axios.post(Config.saveForum,data).then(function (res) {
          self.content="";
          self.isShowAdd=true;
          self.isShowPublish=false;
          self.$androidToast.show(res.data.msg);
          //显示帖子
          self.list.splice(0,0,res.data.data);
          self.$refs.scroll.scrollTop=0;
        }).catch(function (e) {
          console.error(e)
        })
      },
//      关闭帖子弹层
      closePublish(){
        this.isShowAdd=true;
        this.isShowPublish=false;
      },
      nothingdo(){

      },
      //打开帖子弹层
      add(){
        this.isShowAdd=false;
        this.isShowPublish=true;
      },
      resonse(forum){
        this.$store.state.forum=forum;
        this.$router.push({name:"interactionDetail"})
      },
      onInfinite(){
        var self=this;
        axios.get(Config.Interaction,{params:{
          page:self.page,
          rows:10,
          type:0,
          cates: 0
        }}).then(function (res) {
          if(res.data.rows.length>0){
            var filterdata=res.data.rows.filter(function(item){
              return self.ids.indexOf(item.id)<0;
            })

            self.list=self.list.concat(filterdata);
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
<style scope>
  .icon-xiaoxi2{
    margin-right: 5px;
  }

</style>
