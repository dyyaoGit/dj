<!--政治学习详情-->
<template>
  <div>
      <vueshowpdf  v-model="isshowpdf" :pdfurl="pdfurls"
                   :maxscale='4' :minscale='0.6' :scale='1' >
        <div class="bar bar-header bar-header-Cred" slot="header" style="position: relative">
          <router-link to="/study" class="button  button-clear" style="color: white;">
            <i class="iconfont icon-fa-left"></i>
          </router-link>
          <div class="h1 title" style="color: white;">
            {{title}}
          </div>
        </div>
      </vueshowpdf>
  </div>

</template>

<script>
  import vueshowpdf from '../common/PDF'
  export default {
    data(){
      return{
        pdfurls:'',
        isshowpdf:false,
        title:'',
      }
    },
    created(){
      this.pdfurls=decodeURIComponent(this.$route.params.id);
      this.title=this.$route.params.name;
      this.isshowpdf=true;
    },
    components:{
      vueshowpdf
    }

  }
</script>

<style>
  .pdf-control {
    /* background-image: url(../../assets/pdf/toolbar_background.png);*/
    height: 48px;
    overflow: hidden;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    box-shadow: 0 -2px 2px rgba(50, 50, 50, 0.75);
    display: table;

  }

  .pdf-control > * {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    padding: 0 10px;
  }

  .pageNumber {
    background-color: rgba(0, 0, 0, 0.3);
    border: none;
    outline: none;
    text-align: center;
    color: #fff;
    vertical-align: middle;
  }


</style>
