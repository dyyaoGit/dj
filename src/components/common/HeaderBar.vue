<template>
  <div class="bar bar-header bar-header-Cred">
    <a class="button  button-clear" @click.prevent="back">
      <i class="iconfont icon-fa-left"></i></a>
    <div class="h1 title" >{{title}}</div>
  </div>
</template>

<script>
    export default{
      name:'HeaderBar',
      props:{
        title:{
          type:String
        },
        path:{
          type:String
        }
      },
      methods:{
        back(){
          this.$router.go(-1);
        }
      },
    }
</script>
<style>
  .title{
    color: white;
  }
</style>
