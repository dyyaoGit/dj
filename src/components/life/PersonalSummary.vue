<!--个人总结-->
<template>
  <div id="page-postgrzj" class=" page page-current">
    <headerbar style="color: white;" title="个人总结"></headerbar>
    <!--头部结束-->
    <!--中间内容-->
    <div class="scroll-content  has-header">
      <upload @getUrl="getUrl"></upload>
      <div style="position: absolute; bottom: 70px; width: 100%; text-align: center;">
      <div @click="tj" class="button button-block button-assertive">提交审核</div>

    </div>
    </div>
    </div>

</template>

<script>
  import axios from 'axios'
  import Config from '../../config'
  import headerbar from '../common/HeaderBar.vue'
  import upload from '../common/Upload.vue'
  export default{
    data(){
      return {
        textArea:"",
        pic_list:[]
      }
    },
    methods:{
      getUrl(url){
        console.log(url);
        this.pic_list.push(url)
      },
      tj(){
        console.log(this.pic_list)
        var formData = new FormData();
        formData.append("pic_list",this.pic_list);
        formData.append("comment_id",this.$store.state.commentId);
        formData.append("user_id",this.$store.state.token);
        var self=this;
        axios.post(Config.submitSummary,formData).then(function (res) {
          if(res.data.code==1){
            self.$router.push("/LifeChoice")
          }else{
            self.$androidToast.show(res.data.msg)
          }
        })
      }
    },
    components: {
      upload,
      headerbar,
    }
  }
</script>

