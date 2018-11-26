<template>
  <div id="page-cpdy" class=" page page-current">
    <div class="bar bar-header bar-header-Cred">
      <router-link to="/discuss" class="button iconfont icon-fa-left   button-clear button-calm" style="color: white;"></router-link>

      <div class="h1 title" style="color: white;">参评党员</div>

    </div>
    <div class="scroll-content has-header">

      <div class="list ">
        <div v-for="item in userList" class="item item-icon-left item-icon-right" v-on:click="check(commentId,item.id)" :data-coid="item.id" :data-id="this.userId">
          <img class="icon" style="padding: 10px 0  ;width: 32px;border-radius: 50%;" :src="item.header" />{{item.username}}
						<span class="icon" style="font-size: 14px;">
							{{item.branchName}}
						</span>
        </div>
        <infinite-loading :spinner="'spiral'" :on-infinite="onInfinite"
                          ref="infiniteLoading">
           <span slot="no-more">
            没有数据了
           </span>
        </infinite-loading>
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
        commentId:this.$store.state.commentId,
        userList:[],
        page:1,
        rows:11
      }
    },
    methods:{
      onInfinite(){
        var self=this;
        axios.get(Config.ParticipatingMembers,{params:{
          select_branch:self.$store.state.select_branch,
          user_id: self.$store.state.token,
          page:self.page,
          rows:10,
        }}).then(function (res) {
          if(res.data.rows.length>0){
            self.userList=self.userList.concat(res.data.rows);
            self.page++;
            self.total=res.data.total;
            self.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
          }
          else{
            self.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
          }
        })
      },
      check(a,b){
        var self=this;
        axios.get(Config.isComment,{
          params:{
            user_id: self.$store.state.token,
            other_user_id: b,
            id: a,
            comment_id:self.$store.state.commentId
          }
        }).then(function (res) {
          if(res.data.code==0){
            self.$androidToast.show(res.data.msg);
          }else{
            self.$router.push({name:"review",params:{other_user_id: b, id: a}})

          }
        })
      }
    },
    components:{
      InfiniteLoading,
    },

  }
</script>
