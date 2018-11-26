<!--历史上的今天-->
<template>
  <div  class=" page news-page today-page" >
  <div class="bar bar-header bar-header-Cred">
    <router-link class="button  button-clear" style="color: white;" to="/index">
      <i class="iconfont icon-fa-left"></i></router-link>
    <div class="h1 title" style="color: white;">党史上的今天</div>
  </div>
    <div class="scroll-content  has-header news-content" v-html="content">
    </div>
</div>

</template>

<script>
  import Axios from 'axios'
  import Config from '../config'
  // JavaScript Document
  function go() {
    var self={
      src:"",
    };
    function formate(a) {
      if(a<10){
        return "0"+a;
      }else{
        return a+"";
      }
    }
    var date = new Date();
    var month=formate(date.getMonth()+1)
    var vd=formate(date.getDate())
    var today = new Date();
    var bday = new Date(2011, 1, 1);
    switch(month){
      case "01":
        switch(vd){
          case "01":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76622/index.html";
            break;
          case "02":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76624/index.html";
            break;
          case "03":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76625/index.html";
            break;
          case "04":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76626/index.html";
            break;
          case "05":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76627/index.html";
            break;
          case "06":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76628/index.html";
            break;
          case "07":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76629/index.html";
            break;
          case "08":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76630/index.html";
            break;
          case "09":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76631/index.html";
            break;
          case "10":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76632/index.html";
            break;
          case "11":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76633/index.html";
            break;
          case "12":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76634/index.html";
            break;
          case "13":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76635/index.html";
            break;
          case "14":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76636/index.html";
            break;
          case "15":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76637/index.html";
            break;
          case "16":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76638/index.html";
            break;
          case "17":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76639/index.html";
            break;
          case "18":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76640/index.html";
            break;
          case "19":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76641/index.html";
            break;
          case "20":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76642/index.html";
            break;
          case "21":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76643/index.html";
            break;
          case "22":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76644/index.html";
            break;
          case "23":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76645/index.html";
            break;
          case "24":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76646/index.html";
            break;
          case "25":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76647/index.html";
            break;
          case "26":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76648/index.html";
            break;
          case "27":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76649/index.html";
            break;
          case "28":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76650/index.html";
            break;
          case "29":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76651/index.html";
            break;
          case "30":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76653/index.html";
            break;
          case "31":
            self.src="http://cpc.people.com.cn/GB/64162/64165/76621/76654/index.html";
            break;
        }
        break;
      case "02":
        switch(vd){
          case "01":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77553/index.html";
            break;
          case "02":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77554/index.html";
            break;
          case "03":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77555/index.html";
            break;
          case "04":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77556/index.html";
            break;
          case "05":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77557/index.html";
            break;
          case "06":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77558/index.html";
            break;
          case "07":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77559/index.html";
            break;
          case "08":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77560/index.html";
            break;
          case "09":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77561/index.html";
            break;
          case "10":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77562/index.html";
            break;
          case "11":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77563/index.html";
            break;
          case "12":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77565/index.html";
            break;
          case "13":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77566/index.html";
            break;
          case "14":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77567/index.html";
            break;
          case "15":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77569/index.html";
            break;
          case "16":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77570/index.html";
            break;
          case "17":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77571/index.html";
            break;
          case "18":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77572/index.html";
            break;
          case "19":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77575/index.html";
            break;
          case "20":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77576/index.html";
            break;
          case "21":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77577/index.html";
            break;
          case "22":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77578/index.html";
            break;
          case "23":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77579/index.html";
            break;
          case "24":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77580/index.html";
            break;
          case "25":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77581/index.html";
            break;
          case "26":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77582/index.html";
            break;
          case "27":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77583/index.html";
            break;
          case "28":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/77584/index.html";
            break;
          case "29":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77552/117177/index.html";
            break;
        }
        break;
      case "03":
        switch(vd){
          case "01":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/77586/index.html";
            break;
          case "02":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/77587/index.html";
            break;
          case "03":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/77588/index.html";
            break;
          case "04":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/77589/index.html";
            break;
          case "05":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/77590/index.html";
            break;
          case "06":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/77591/index.html";
            break;
          case "07":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/77592/index.html";
            break;
          case "08":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/77593/index.html";
            break;
          case "09":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/77594/index.html";
            break;
          case "10":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/77595/index.html";
            break;
          case "11":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78560/index.html";
            break;
          case "12":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78752/index.html";
            break;
          case "13":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78753/index.html";
            break;
          case "14":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78754/index.html";
            break;
          case "15":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78755/index.html";
            break;
          case "16":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78756/index.html";
            break;
          case "17":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78757/index.html";
            break;
          case "18":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78760/index.html";
            break;
          case "19":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78762/index.html";
            break;
          case "20":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78763/index.html";
            break;
          case "21":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78766/index.html";
            break;
          case "22":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78767/index.html";
            break;
          case "23":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78768/index.html";
            break;
          case "24":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78769/index.html";
            break;
          case "25":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78770/index.html";
            break;
          case "26":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78771/index.html";
            break;
          case "27":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78772/index.html";
            break;
          case "28":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78773/index.html";
            break;
          case "29":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78774/index.html";
            break;
          case "30":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78775/index.html";
            break;
          case "31":
            self.src="http://cpc.people.com.cn/GB/64162/64165/77585/78776/index.html";
            break;
        }
        break;
      case "04":
        switch(vd){
          case "01":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/78562/index.html";
            break;
          case "02":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79695/index.html";
            break;
          case "03":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79696/index.html";
            break;
          case "04":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79697/index.html";
            break;
          case "05":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79698/index.html";
            break;
          case "06":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79699/index.html";
            break;
          case "07":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79700/index.html";
            break;
          case "08":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79701/index.html";
            break;
          case "09":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79702/index.html";
            break;
          case "10":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79757/index.html";
            break;
          case "11":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79758/index.html";
            break;
          case "12":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79759/index.html";
            break;
          case "13":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79760/index.html";
            break;
          case "14":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79761/index.html";
            break;
          case "15":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79762/index.html";
            break;
          case "16":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79763/index.html";
            break;
          case "17":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79764/index.html";
            break;
          case "18":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79765/index.html";
            break;
          case "19":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79766/index.html";
            break;
          case "20":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79767/index.html";
            break;
          case "21":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79768/index.html";
            break;
          case "22":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79769/index.html";
            break;
          case "23":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79771/index.html";
            break;
          case "24":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79772/index.html";
            break;
          case "25":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79774/index.html";
            break;
          case "26":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79775/index.html";
            break;
          case "27":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79776/index.html";
            break;
          case "28":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79777/index.html";
            break;
          case "29":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79778/index.html";
            break;
          case "30":
            self.src="http://cpc.people.com.cn/GB/64162/64165/78561/79779/index.html";
            break;
        }
        break;
      case "05":
        switch(vd){
          case "01":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/79704/index.html";
            break;
          case "02":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/79780/index.html";
            break;
          case "03":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/79781/index.html";
            break;
          case "04":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/79782/index.html";
            break;
          case "05":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/79783/index.html";
            break;
          case "06":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/79784/index.html";
            break;
          case "07":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/79785/index.html";
            break;
          case "08":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/79786/index.html";
            break;
          case "09":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/79787/index.html";
            break;
          case "10":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/79788/index.html";
            break;
          case "11":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/79789/index.html";
            break;
          case "12":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/79790/index.html";
            break;
          case "13":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/79791/index.html";
            break;
          case "14":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/79792/index.html";
            break;
          case "15":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/79793/index.html";
            break;
          case "16":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/79794/index.html";
            break;
          case "17":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/79795/index.html";
            break;
          case "18":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/79796/index.html";
            break;
          case "19":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/79797/index.html";
            break;
          case "20":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/82260/index.html";
            break;
          case "21":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/82261/index.html";
            break;
          case "22":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/82262/index.html";
            break;
          case "23":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/82263/index.html";
            break;
          case "24":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/82264/index.html";
            break;
          case "25":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/82265/index.html";
            break;
          case "26":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/82266/index.html";
            break;
          case "27":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/82267/index.html";
            break;
          case "28":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/82268/index.html";
            break;
          case "29":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/82269/index.html";
            break;
          case "30":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/82270/index.html";
            break;
          case "31":
            self.src="http://cpc.people.com.cn/GB/64162/64165/79703/82271/index.html";
            break;
        }
        break;
      case "06":

        switch(vd){
          case "01":
            self.src="http://cpc.people.com.cn/GB/64162/64165/82273/82274/index.html";
            break;
          case "02":
            self.src="http://cpc.people.com.cn/GB/64162/64165/82273/82275/index.html";
            break;
          case "03":
            self.src="http://cpc.people.com.cn/GB/64162/64165/82273/82276/index.html";
            break;
          case "04":
            self.src="http://cpc.people.com.cn/GB/64162/64165/82273/82277/index.html";
            break;
          case "05":
            self.src="http://cpc.people.com.cn/GB/64162/64165/82273/82278/index.html";
            break;
          case "06":
            self.src="http://cpc.people.com.cn/GB/64162/64165/82273/82279/index.html";
            break;
          case "07":
            self.src="http://cpc.people.com.cn/GB/64162/64165/82273/82280/index.html";
            break;
          case "08":
            self.src="http://cpc.people.com.cn/GB/64162/64165/82273/82281/index.html";
            break;
          case "09":
            self.src="http://cpc.people.com.cn/GB/64162/64165/82273/82282/index.html";
            break;
          case "10":
            self.src="http://cpc.people.com.cn/GB/64162/64165/82273/82283/index.html";
            break;
          case "11":
            self.src="http://cpc.people.com.cn/GB/64162/64165/82273/82284/index.html";
            break;
          case "12":
            self.src="http://cpc.people.com.cn/GB/64162/64165/82273/82285/index.html";
            break;
          case "13":
            self.src="http://cpc.people.com.cn/GB/64162/64165/82273/82286/index.html";
            break;
          case "14":
            self.src="http://cpc.people.com.cn/GB/64162/64165/82273/82287/index.html";
            break;
          case "15":
            self.src="http://cpc.people.com.cn/GB/64162/64165/65700/index.html";
            break;
          case "16":
            self.src="http://cpc.people.com.cn/GB/64162/64165/65856/index.html";
            break;
          case "17":
            self.src="http://cpc.people.com.cn/GB/64162/64165/65861/index.html";
            break;
          case "18":
            self.src="http://cpc.people.com.cn/GB/64162/64165/65863/index.html";
            break;
          case "19":
            self.src="http://cpc.people.com.cn/GB/64162/64165/65864/index.html";
            break;
          case "20":
            self.src="http://cpc.people.com.cn/GB/64162/64165/65868/index.html";
            break;
          case "21":
            self.src="http://cpc.people.com.cn/GB/64162/64165/65877/index.html";
            break;
          case "22":
            self.src="http://cpc.people.com.cn/GB/64162/64165/65878/index.html";
            break;
          case "23":
            self.src="http://cpc.people.com.cn/GB/64162/64165/66001/index.html";
            break;
          case "24":
            self.src="http://cpc.people.com.cn/GB/64162/64165/66002/index.html";
            break;
          case "25":
            self.src="http://cpc.people.com.cn/GB/64162/64165/66003/index.html";
            break;
          case "26":
            self.src="http://cpc.people.com.cn/GB/64162/64165/66004/index.html";
            break;
          case "27":
            self.src="http://cpc.people.com.cn/GB/64162/64165/66026/index.html";
            break;
          case "28":
            self.src="http://cpc.people.com.cn/GB/64162/64165/66027/index.html";
            break;
          case "29":
            self.src="http://cpc.people.com.cn/GB/64162/64165/66028/index.html";
            break;
          case "30":
            self.src="http://cpc.people.com.cn/GB/64162/64165/66029/index.html";
            break;

        }
        break;
      case "07":
        switch(vd){
          case "01":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/67448/index.html";
            break;
          case "02":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/67449/index.html";
            break;
          case "03":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/67450/index.html";
            break;
          case "04":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/67458/index.html";
            break;
          case "05":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/67506/index.html";
            break;
          case "06":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/67562/index.html";
            break;
          case "07":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/67563/index.html";
            break;
          case "08":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/67564/index.html";
            break;
          case "09":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/67565/index.html";
            break;
          case "10":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/67566/index.html";
            break;
          case "11":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/67825/index.html";
            break;
          case "12":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/67826/index.html";
            break;
          case "13":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/67827/index.html";
            break;
          case "14":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/67828/index.html";
            break;
          case "15":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/67829/index.html";
            break;
          case "16":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/67995/index.html";
            break;
          case "17":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/67996/index.html";
            break;
          case "18":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/67997/index.html";
            break;
          case "19":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/67998/index.html";
            break;
          case "20":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/67999/index.html";
            break;
          case "21":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/68000/index.html";
            break;
          case "22":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/68001/index.html";
            break;
          case "23":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/68002/index.html";
            break;
          case "24":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/68003/index.html";
            break;
          case "25":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/68004/index.html";
            break;
          case "26":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/68005/index.html";
            break;
          case "27":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/68006/index.html";
            break;
          case "28":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/68007/index.html";
            break;
          case "29":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/68008/index.html";
            break;
          case "30":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/68009/index.html";
            break;
          case "31":
            self.src="http://cpc.people.com.cn/GB/64162/64165/67447/68010/index.html";
            break;
        }
        break;
      case "08":
        switch(vd){
          case "01":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68641/index.html";
            break;
          case "02":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68642/index.html";
            break;
          case "03":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68643/index.html";
            break;
          case "04":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68644/index.html";
            break;
          case "05":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68645/index.html";
            break;
          case "06":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68646/index.html";
            break;
          case "07":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68647/index.html";
            break;
          case "08":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68648/index.html";
            break;
          case "09":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68649/index.html";
            break;
          case "10":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68650/index.html";
            break;
          case "11":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68651/index.html";
            break;
          case "12":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68652/index.html";
            break;
          case "13":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68653/index.html";
            break;
          case "14":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68654/index.html";
            break;
          case "15":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68655/index.html";
            break;
          case "16":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68656/index.html";
            break;
          case "17":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68657/index.html";
            break;
          case "18":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68658/index.html";
            break;
          case "19":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68659/index.html";
            break;
          case "20":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68660/index.html";
            break;
          case "21":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68661/index.html";
            break;
          case "22":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68662/index.html";
            break;
          case "23":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68663/index.html";
            break;
          case "24":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68664/index.html";
            break;
          case "25":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68665/index.html";
            break;
          case "26":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68666/index.html";
            break;
          case "27":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68667/index.html";
            break;
          case "28":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68668/index.html";
            break;
          case "29":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68669/index.html";
            break;
          case "30":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68670/index.html";
            break;
          case "31":
            self.src="http://cpc.people.com.cn/GB/64162/64165/68640/68671/index.html";
            break;
        }
        break;
      case "09":
        switch(vd){
          case "01":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70294/index.html";
            break;
          case "02":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70295/index.html";
            break;
          case "03":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70296/index.html";
            break;
          case "04":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70297/index.html";
            break;
          case "05":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70298/index.html";
            break;
          case "06":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70299/index.html";
            break;
          case "07":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70300/index.html";
            break;
          case "08":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70301/index.html";
            break;
          case "09":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70302/index.html";
            break;
          case "10":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70303/index.html";
            break;
          case "11":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70304/index.html";
            break;
          case "12":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70305/index.html";
            break;
          case "13":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70306/index.html";
            break;
          case "14":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70307/index.html";
            break;
          case "15":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70308/index.html";
            break;
          case "16":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70309/index.html";
            break;
          case "17":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70310/index.html";
            break;
          case "18":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70311/index.html";
            break;
          case "19":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70312/index.html";
            break;
          case "20":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70313/index.html";
            break;
          case "21":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70314/index.html";
            break;
          case "22":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70315/index.html";
            break;
          case "23":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70316/index.html";
            break;
          case "24":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70317/index.html";
            break;
          case "25":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70318/index.html";
            break;
          case "26":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70319/index.html";
            break;
          case "27":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70320/index.html";
            break;
          case "28":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70321/index.html";
            break;
          case "29":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70322/index.html";
            break;
          case "30":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70293/70323/index.html";
            break;
        }
        break;
      case "10":
        switch(vd){
          case "01":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70487/index.html";
            break;
          case "02":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70488/index.html";
            break;
          case "03":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70489/index.html";
            break;
          case "04":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70490/index.html";
            break;
          case "05":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70491/index.html";
            break;
          case "06":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70492/index.html";
            break;
          case "07":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70493/index.html";
            break;
          case "08":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70494/index.html";
            break;
          case "09":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70495/index.html";
            break;
          case "10":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70496/index.html";
            break;
          case "11":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70497/index.html";
            break;
          case "12":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70498/index.html";
            break;
          case "13":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70499/index.html";
            break;
          case "14":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70500/index.html";
            break;
          case "15":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70501/index.html";
            break;
          case "16":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70502/index.html";
            break;
          case "17":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70503/index.html";
            break;
          case "18":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70504/index.html";
            break;
          case "19":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70505/index.html";
            break;
          case "20":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70506/index.html";
            break;
          case "21":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70507/index.html";
            break;
          case "22":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70508/index.html";
            break;
          case "23":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70509/index.html";
            break;
          case "24":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70515/index.html";
            break;
          case "25":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70516/index.html";
            break;
          case "26":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70531/index.html";
            break;
          case "27":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70533/index.html";
            break;
          case "28":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70534/index.html";
            break;
          case "29":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70535/index.html";
            break;
          case "30":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70539/index.html";
            break;
          case "31":
            self.src="http://cpc.people.com.cn/GB/64162/64165/70486/70542/index.html";
            break;
        }
        break;
      case "11":
        switch(vd){
          case "01":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72302/index.html";
            break;
          case "02":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72303/index.html";
            break;
          case "03":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72304/index.html";
            break;
          case "04":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72305/index.html";
            break;
          case "05":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72306/index.html";
            break;
          case "06":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72307/index.html";
            break;
          case "07":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72308/index.html";
            break;
          case "08":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72309/index.html";
            break;
          case "09":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72310/index.html";
            break;
          case "10":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72311/index.html";
            break;
          case "11":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72312/index.html";
            break;
          case "12":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72313/index.html";
            break;
          case "13":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72316/index.html";
            break;
          case "14":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72317/index.html";
            break;
          case "15":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72318/index.html";
            break;
          case "16":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72319/index.html";
            break;
          case "17":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72320/index.html";
            break;
          case "18":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72322/index.html";
            break;
          case "19":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72323/index.html";
            break;
          case "20":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72324/index.html";
            break;
          case "21":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72326/index.html";
            break;
          case "22":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72327/index.html";
            break;
          case "23":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72328/index.html";
            break;
          case "24":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72329/index.html";
            break;
          case "25":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72330/index.html";
            break;
          case "26":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72331/index.html";
            break;
          case "27":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72332/index.html";
            break;
          case "28":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72333/index.html";
            break;
          case "29":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72334/index.html";
            break;
          case "30":
            self.src="http://cpc.people.com.cn/GB/64162/64165/72301/72335/index.html";
            break;
        }
        break;
      case "12":
        switch(vd){
          case "01":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/74857/index.html";
            break;
          case "02":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/74952/index.html";
            break;
          case "03":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/74954/index.html";
            break;
          case "04":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/74955/index.html";
            break;
          case "05":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/74956/index.html";
            break;
          case "06":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/74957/index.html";
            break;
          case "07":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/74958/index.html";
            break;
          case "08":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/74959/index.html";
            break;
          case "09":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/74960/index.html";
            break;
          case "10":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/74961/index.html";
            break;
          case "11":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/74962/index.html";
            break;
          case "12":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/74963/index.html";
            break;
          case "13":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/74964/index.html";
            break;
          case "14":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/74965/index.html";
            break;
          case "15":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/74966/index.html";
            break;
          case "16":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/74967/index.html";
            break;
          case "17":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/74968/index.html";
            break;
          case "18":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/75002/index.html";
            break;
          case "19":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/75003/index.html";
            break;
          case "20":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/75004/index.html";
            break;
          case "21":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/75005/index.html";
            break;
          case "22":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/75006/index.html";
            break;
          case "23":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/75008/index.html";
            break;
          case "24":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/75013/index.html";
            break;
          case "25":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/75014/index.html";
            break;
          case "26":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/75015/index.html";
            break;
          case "27":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/75016/index.html";
            break;
          case "28":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/75017/index.html";
            break;
          case "29":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/75019/index.html";
            break;
          case "30":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/75020/index.html";
            break;
          case "31":
            self.src="http://cpc.people.com.cn/GB/64162/64165/74856/75021/index.html";
            break;
        }
        break;
    }
return self.src;
  }
  export default{
      data(){
        return {
          src:"",
          content:''
        }
      },
      created(){
        let src=go();
        var self=this;
        Axios.get(Config.proxy,{
          params:{
            url:src
          },
        }).then(function (res) {
          var reg=new RegExp('<div\\s+class="p1_02 clearfix width884"[^>/]*>([\\s\\S>]*)<\\/div>','i')
          var mathes=res.data.match(reg);
          if(mathes){
            self.content=mathes[1].substring(0,mathes[1].indexOf('</div>'));
          }
        })
      }
    }
</script>

<style>

</style>
