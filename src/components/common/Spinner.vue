<template>
  <div v-show="show" class="custome-wrap">
    <div class="custome-spinner" style="">
      <spinner :message="message" size="40" :font-size="14"  line-bg-color="#ffffff" line-fg-color="rgba(0,0,0,0)" ></spinner>
    </div>
  </div>
</template>

<script>
  import Spinner from 'vue-simple-spinner'
    export default{
      props:{
        show:{
          default:false,
          type:Boolean
        },
        message:{
          type:String,
        }
      },
      components:{
        Spinner,
      }
    }
</script>

<style>
  .custome-wrap{
    position: fixed;
    width: 100%;
    height:100%;
    background: rgba(0,0,0,0.0);
    z-index:999;
  }
  .custome-spinner{
    background: rgba(0,0,0,0.5);
    padding: 50px;
    border-radius: 10%;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .custome-spinner>*{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .vue-simple-spinner{
    white-space: nowrap;
  }
</style>
