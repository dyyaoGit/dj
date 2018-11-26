<template>
  <div id="page-review" class=" page page-current">
    <!--头部开始-->
    <headerbar style="color: white;" :title="title"></headerbar>
    <!--头部结束-->
    <!--中间内容-->
    <div class="scroll-content  has-header" style="">
      <div class="logo">
        <img v-if="state==0" src="../../assets/reviewing.png"/>
        <img v-if="state==1" src="../../assets/pass.png"/>
        <img v-if="state==2" src="../../assets/nopass.png"/>
      </div>
      <div class="statetext">

        {{content}}
      </div>
      <div class="tipstext"></div>
      <div class="closeBtn" v-on:click="close" style="width: 60%;">{{closeText}}</div>
    </div>
  </div>
</template>
<script>
  import headerbar from '../common/HeaderBar.vue'
  export default{
    data(){
      return{
        state:0,
        content:"",
        title:"",
        closeText:"",
        type:0,
      }
    },
    created(){
     this.state=this.$route.params.state;
      this.type=this.$route.params.type;
      if(this.type==0){
        this.title="思想汇报"
      }else{
        this.title="心得总结"

      }
      if(this.state==0){
        this.content="正在审核中"
        this.closeText="关闭"
      }else if(this.state==1){
        this.content="审核成功"
        this.closeText="继续提交"
      }else{
        this.content="审核失败"
        this.closeText="继续提交"

      }
    },
  methods:{
    close(){
      if(this.state==0){
        this.$router.push('/life');
      }else{
        if(this.type==0){
          this.$router.push('/thought');

        }else if(this.type==1){
          this.$router.push('/summary');
        }
      }

    }

  },
    components: {
      headerbar
    }

  }

</script>
