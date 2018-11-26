<template>
  <div id="page-grjf" class=" page page-current">
    <div class="bar bar-header bar-header-Cred">
      <router-link class="button iconfont icon-fa-left  button-clear button-calm"
         to="/user" style="color: white;"></router-link>

      <div class="h1 title" style="color: white;">个人量化积分</div>

    </div>
    <div class="scroll-content has-tabs has-header">
      <div class="banner" style="position: relative;">
        <img class="header" src="../../assets/jifen.png" />
					<span style="font-size: 16px; position: absolute; top: 50%; left: 50%; color: white; -webkit-transform: translate(-50%,-50%);" id="">
						{{totalScore}}
					</span>
      </div>
      <router-link class="item item-icon-left item-icon-right" to="/scoredetail">
        <img class="icon" style="padding: 10px 0;" src="../../assets/lxjf.png" /> 积分明细
        <img class="icon" style="padding: 20px 0;" src="../../assets/right.png" />
      </router-link>

      <div class="item item-icon-left item-icon-right" style="background: #EEEEEE" href="#">
        <span class="icon" style="font-size: 14px; ">积分规则</span>
        <span class="icon"><img src="../../assets/wenhao.png"/></span>
      </div>
      <div class="list ">
        <div v-for="item in rules" class="item item-icon-left item-icon-right">
          <span class="icon " style="font-size: 14px;color: #999999; ">{{item.typename}}</span>

          <span class="icon" style="font-size:14px; color: red;">{{item.score}}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import Config from '../../config'
  var rules=[
    {typename:"登陆APP"	,score:5},
    {typename:"完善个人信息",score:2},
    {typename:"查看积分"	,score:1},
    {typename:"按时交纳党费"	,score:10},
    {typename:"查看通知"	,score:2},
    {typename:"了解学院工作动态"	,score:5},
    {typename:"上交思想汇报经审核通过"	,score:5},
  {typename:"主动学习相关文件"	,score:10},
  {typename:"认真撰写心得总结并上交，经审核通过"	,score:5},
  {typename:"提交个人总结，并参与评议"	,score:2},
  {typename:"积极参与互动",	score:5},
  {typename:"学习党建知识"	,score:5},
  {typename:"学习党史"	,score:10},
  {typename:"创先争优事迹"	,score:10},
  {typename:"学党章，学习近平总书记系列讲话"	,score:10},
  {typename:"用镜头记录两学一做过程中令人感动的人和事"	,score:3},
  {typename:"关注并积极参与特色活动",	score:5},
  {typename:"制度化、常态化建设",score:	5}
  ]
  export default{
      data(){
        return {
          totalScore:0,
          rules:rules
        }
      },
      created(){
        var self=this;
        axios.get(Config.userInfo).then(function (res) {
          if(res.data){
            self.totalScore= res.data.data.totalScore
          }
        })
      },
      methods:{

      }


    }
</script>

