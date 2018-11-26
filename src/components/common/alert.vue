<template>
  <div  class="alertWrap">
    <div class="alert">
    <div class="content">{{title}}</div>
    <div class="btnGr">
      <div v-on:click="cancel" class="leftBtn">取消</div>
      <div v-on:click="ok" class="rightBtn">确定</div>
    </div>
    </div>

  </div>
</template>
<style scoped>
  .alertWrap{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index:11;
    color: white;

  }
  .alert{
    /*height: 100px;*/
    width: 60%;
    border: 1px solid rgba(0,0,0,0.5);
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius:5px ;
    background: rgba(0,0,0,0.5);
  }
  .content{
   height: 70px;
    line-height: 70px;
    text-align: center;
    font-size: 18px;

  }
  .btnGr{
    height: 50px;
    font-size: 16px;
    width: 100%;
    display: table;
  }
  .btnGr div:first-child{
    border-right: 1px solid rgba(255,255,255,0.3);
  }
  .btnGr div{
    border-top: 1px solid rgba(255,255,255,0.3);
    display: table-cell;
    width: 50%;
    text-align: center;
    vertical-align: middle;
  }
</style>
<script>
  export default{
    props: {
      title: {
        type: String
      }
    },
    methods:{
      ok(){
        console.log(123);
        this.$emit("ok","123")
      },
      cancel(){
        this.$emit("cancel","234")
      }
    }
  }
</script>
