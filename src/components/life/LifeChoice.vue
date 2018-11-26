<template>
  <div>
  <headerbar title="掌上组织生活"></headerbar>
  <div class="scroll-content has-header">

  <div id="submitWrap">
  <!--<upload @getUrl="getUrl"></upload>-->
    <router-link to="/personalsummary" class="marginTop button button-block button-assertive">个人总结</router-link>
    <router-link to="/discuss" class="marginTop button button-block button-assertive">民主评议</router-link>
  </div>
  </div>
  </div>
</template>
<script>
  import upload from "../common/Upload.vue"
  import headerbar from "../common/HeaderBar.vue"
  export default{
    methods:{
      getUrl(data){
        console.log(data);
      },
      tj(){

      }
    },
  components: {
    upload,
    headerbar
  }
  }
</script>
<style>
  #submitWrap{
    position: absolute;
    top:40%;
    width: 100%;
    transform: translateY(-50%);
  }
  .button.button-block.marginTop{
    /*margin-top: 20px;*/
    width: 50%;
    margin:20px auto;
    /*height: 200px;*/
  }
</style>
