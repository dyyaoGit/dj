<template>
  <div id="page-in" class=" page page-current">
    <div class="bar bar-header bar-header-Cred">
      <div class="button button-clear"><img src="../../assets/logo.png" style="width: 130px; "/></div>
      <router-link v-show="showLogin" class="button button-clear login-btn" to="/login">登录</router-link>
    </div>
    <div class="scroll-content has-tabs has-header">
      <div class="banner">
        <swiper :options="swiperOption" style="height: 187px">
          <swiper-slide style="position: relative" v-for="item in list" :key="item.id" class="swiper-item">
            <router-link :to="'#/newsDetail/'+item.url" class="news-item ">
              <div :style="{backgroundImage: 'url(' + item.imgUrl + ')'}" class="bg-img">
                <img src="../../assets/bg2x1.png"/>
              </div>
              <div class="slide_text" style=" ">{{item.title}}</div>
            </router-link>

          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="yaowen"></div>
      <div class="menulist table" :style="{backgroundImage: 'url(' + bg1 + ')'}">
        <div class="table-row">
          <router-link class="table-cell" to="/newseye">
            <img src="../../assets/icon_01.png" alt=""/>
            <div>信工新闻眼</div>
          </router-link>
          <router-link class="table-cell" to="/life">
            <img src="../../assets/icon_03.png"/>
            <div>掌上组织生活</div>
          </router-link>
          <router-link class="table-cell" to="/interaction">
            <img src="../../assets/icon_05.png"/>
            <div>党员云互动</div>
          </router-link>
        </div>
        <div class="table-row">
          <router-link class="table-cell" to="/oneclick">
            <img src="../../assets/icon_04.png"/>
            <div>党建一点通</div>
          </router-link>
          <router-link class="table-cell" to="/showidentity">
            <img src="../../assets/icon_06.png"/>
            <div>党员亮身份</div>
          </router-link>
          <router-link class="table-cell external" to="today">
            <img src="../../assets/icon_02.png"/>
            <div>党史上的今天</div>
          </router-link>

        </div>
      </div>
      <div class="banner banner1">
        <img src="../../assets/banner01.png"/>
      </div>
      <div class="tese table" :style="{backgroundImage: 'url(' + bg2 + ')'}">
        <div class="table-cell"></div>
        <div class="table-cell">
          <router-link style="display: block;height: 50%;" to="/anytimestudy"></router-link>
          <router-link style="display: block;height: 50%;" to="/System"></router-link>
        </div>
        <div class="table-cell">
          <router-link style="display: block;height: 50%;" to="/anytimephoto"></router-link>
          <router-link style="display: block;height: 50%;" to="/activity"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import Axios from "axios"
  import Config from "../../config"
  export default{
    data() {
      return {
        list: [],
        swiperOption: {
          pagination: '.swiper-pagination',
          autoplay: 2000,
          loop:true,
          autoplayDisableOnInteraction: false,
        }
      }
    },
    computed: {
      bg1(){
        return require('../../assets/bt_bg.png')
      },
      bg2(){
        return require('../../assets/tese.png')
      },
      showLogin(){
        return this.$store.state.token.length<=2;
      }
    },
    created(){
      var self = this;
      Axios.get(Config.carousel, {
        params: {
          type: 0
        }
      }).then(function (res) {
        console.log(self);
        self.list = res.data.rows;
      })
    },
  }
</script>
<style>
  .login-btn {
    color: white !important;
  }

  .bg-img {
    height: 187.5px;
    background-size: cover;
    background-position: center;
  }

  .swiper-item {
    height: 187.5px;
  }

  .bg-img, .bg-img img {
    display: block;
    width: 100%;
  }

  .slide_text {
    z-index: 11;
    background: rgba(0, 0, 0, 0.5);
    padding: 4px;
    color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .swiper-pagination-bullet {
    opacity: .6;
  }



  .swiper-pagination-bullet-active {
    background: #007aff;
    opacity: 1;
  }

</style>
