import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);
/*全局状态保存*/
export  default new Vuex.Store({
  state: {
    token: '00',
    commentId: "0",
   /* select_branch: "",*/
    userInfo: {},
    forum:{}//临时存储
  },
  mutations: {
    /*保存token  {token:{},user:{}}*/
    setToken: function (state, obj) {
      if (obj) {
        state.token = obj.token;
        localStorage.setItem("token", obj.token);
        console.log(obj.user)
        state.userInfo = obj.user;
        state.select_branch = obj.user.branchId;
        axios.defaults.headers.common['token'] = obj.token
      }
    },
    removeToken:function (state) {
      state.token = '00';
      state.userInfo = {
        address: '',
        age: '',
        birthday: '',
        branchId: '',
        branchName: '',
        count: '',
        disabled: '',
        education: '',
        header: '',
        hometown: '',
        id: '',
        idCard: '',
        jobRank: '',
        joinPartyTime: '',
        lastPayTime: '',
        leadPerson: '',
        nation: '',
        partyIdentity: '',
        partyStatus: '',
        password: '',
        phone: '',
        qqNum: '',
        salary: '',
        sex: '',
        special: '',
        totalScore: '',
        username: '',
        wxNum: ''
      };
      localStorage.removeItem('token');
      axios.defaults.headers.common['token'] = '00';
    }
  },
})
