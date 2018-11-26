<template>
   <div class="page">
     <router-view>

     </router-view>
     <div class="tabs-striped tabs-color-assertive " style="">
       <div class="tabs tabs-icon-top">
         <!--home index-->
         <router-link class="tab-item" to="index">
           <i class="icon iconfont icon-danghui"></i> 首页
         </router-link>
         <router-link class="tab-item" to="notice">
           <i class="icon iconfont icon-xiaoxi1"></i> 通知早知道
         </router-link>
         <router-link class="tab-item" to="user">
           <i class="icon iconfont icon-iconfontwo"></i> 我的党建
         </router-link>

       </div>
     </div>
   </div>
</template>

<script>
    export default{}
</script>

