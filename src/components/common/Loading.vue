<template>

</template>

<script>
  export default{
    install(Vue){
       var L ={};
       var temp=`<div class="my-loading" id="my-loading">
                <!--<span>加载中</span>-->
               </div>`;
          var div=document.createElement('div');
          div.innerHTML=temp;
          document.body.appendChild(div.firstElementChild);

      var ele=document.getElementById('my-loading');
       L.show=function () {
           ele.style.display='block';
       }
       L.hide=function () {
          ele.style.display='none';
       }
      Vue.prototype.$loading=L;
    }
  }
</script>

<style>
  .my-loading {
    position: fixed;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
