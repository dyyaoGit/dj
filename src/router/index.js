import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Index from '@/components/Home/Index'
import Notice from '@/components/Home/Notice'
import User from '@/components/Home/User'
import Info from '@/components/user/Info'
import updateInfo from '@/components/user/UpdateInfo'
import Pay from '@/components/user/Pay'
import Uppass from '@/components/user/Uppass'
import Score from '@/components/user/Score'
import ScoreDetail from '@/components/user/ScoreDetail'
import Life from '@/components/life/Life'
import Today from '@/components/Today'

import Interaction from '@/components/Interaction'
import InteractionDetail from '@/components/InteractionDetail'
import Discuss from '@/components/life/Discuss'
import Findorg from '@/components/life/Findorg'

import StudyDetail from '@/components/life/StudyDetail'
import Summary from '@/components/life/Summary'
import PersonalSummary from '@/components/life/PersonalSummary'
import AuditStatus from '@/components/life/AuditStatus'
import Thought from '@/components/life/Thought'
import Members from '@/components/life/Members'
import Review from '@/components/life/Review'
import LifeChoice from '@/components/life/LifeChoice'
import Login from '@/components/Login'

/*新闻*/
import Newseye from '@/components/news/Newseye'//新闻眼
import Study from '@/components/news/Study'//学习
import Oneclick from '@/components/news/Oneclick'//一点通
import Anytimestudy from '@/components/news/AnytimeStudy'/*随地学*/
import Anytimephoto from '@/components/news/AnytimePhoto'/*随地拍*/
import System from '@/components/news/System'/*建设*/
import Activity from '@/components/news/Activity'/*特色活动*/
import ShowIdentity from '@/components/news/ShowIdentity'/*亮身份*/
import  NewsDetail from '@/components/news/Newsdetail'

Vue.use(Router)
let route= new Router({
  linkActiveClass:'active',
  routes: [
    /*首页、通知、我的*/
    {
      path: '/',
      component: Home,
      children:[
        {
          path: '',
          component: Index
        },
        {
          path: '/index',
          component: Index
        },
        {
          path: '/notice',
          component: Notice
        },
        {
          path: '/user',
          component: User,
        },
      ]
    },
    /*掌上组织生活*/
    {
      path: '/life',
      name: 'life',
      component: Life
    },
    /*评议的评审*/
    {
      path: '/review/:other_user_id/:id',
      name: 'review',
      component: Review
    },
    /*党员互动*/
    {
      path: '/interaction',
      name: 'interaction',
      component: Interaction,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    // 党员云互动详情
    {
      path: '/interactionDetail',
      name: 'interactionDetail',
      component: InteractionDetail,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },

    /*党建一点通*/
    {
      path: '/oneclick',
      name: 'oneclick',
      component: Oneclick
    },

    /*党史上的今天*/
    {
      path: '/today',
      name: 'today',
      component: Today
    },
    /*党员风采录*/
    {
      path: '/showidentity',
      name: 'showidentity',
      component: ShowIdentity
    },
    /*信工新闻眼*/
    {
      path: '/newseye',
      name: 'newseye',
      component: Newseye
    },
    /*随时随地学*/
    {
      path: '/anytimestudy',
      name: 'anytimestudy',
      component: Anytimestudy,
    },
    /*随时随地拍*/
    {
      path: '/anytimephoto',
      name: 'anytimephoto',
      component: Anytimephoto
    },

    /*制度建设*/
    {
      path: '/System/',
      name: 'System',
      component: System
    },

    /*特色活动*/
    {
      path: '/activity/',
      name: 'activity',
      component: Activity
    },



    /*修改密码*/
    {
      path: '/uppass',
      name:'uppass',
      component: Uppass,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    /*个人信息*/
    {
      path: '/info',
      name:'info',
      component: Info,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    /*修改个人信息*/
    {
      path: '/updateinfo',
      name:'updateinfo',
      component: updateInfo,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    /*积分*/
    {
      path: '/score',
      name:'score',
      component: Score,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    /*积分详情*/
    {
      path: '/scoredetail',
      name:'scoredetail',
      component: ScoreDetail,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    /*党费缴纳*/
    {
      path: '/pay',
      name:'pay',
      component: Pay,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    /*民主评议*/
    {
      path: '/discuss',
      name:'discuss',
      component: Discuss,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    /*民主评议*/
    {
      path: '/LifeChoice',
      name:'LifeChoice',
      component: LifeChoice,
    },
    /*评议党员列表*/
    {
      path: '/Members',
      name:'Members',
      component: Members,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    /*流动党员找组织*/
    {
      path: '/findorg',
      name:'findorg',
      component: Findorg
    },
    /*政治学习*/
    {
      path: '/study',
      name:'study',
      component: Study
    },
    /*政治学习详情*/
    {
      path: '/studydetail/:id',
      name:'studydetail',
      component: StudyDetail
    },
    /*心得总结*/
    {
      path: '/summary',
      name:'summary',
      component: Summary,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    /*个人总结*/
    {
      path: '/personalsummary',
      name:'personalsummary',
      component: PersonalSummary,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    /*思想报告*/
    {
      path: '/thought',
      name:'thought',
      component: Thought,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    /*审核状态*/
    {
      path: '/auditStatus/:state/:type',
      name:'auditStatus',
      component: AuditStatus
    },
    /*登录*/
    {
      path: '/login',
      name:'login',
      component: Login
    },
    /*新闻详情*/
    {
      path:'/newsDetail/:newsId',
      name:'newsDetail',
      component: NewsDetail
    }
],

})

export default route

