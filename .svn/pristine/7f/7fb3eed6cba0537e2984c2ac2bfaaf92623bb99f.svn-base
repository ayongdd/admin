import Vue from 'vue'
import axios from '../axios'
import qs from 'qs'
import {getDate,setDate,setSession,getSession} from '../common/common'
import { Loading,Message,MessageBox} from 'element-ui';
import store from '../store'

/*登录退出操作*/

export default {
  state:{
    // 加载遮罩层状态
    loddingFlag: false,
    loddingLock:false,
    // 会员列表弹窗
    memberParams: {
      visible: false,
      name: '',
    },
    memberParamsSum: {
      visible: false,
      title:'',
      fromTime:'',
      toTime:'',
      name: '',
      sumData:'',
    },
    /*登录验证码*/
    vcode:{
      val:"",
      uniqueId:''
    },
    indexMeauList: [],
    loginData:{
      code: 0, //0:成功
      data: {
        uid: "",
        username: "",//用户名
        access_token: "",//token
      },
      msg:""
    },
    topInfoData:{
      message:"",
      code:null,
      data:{

      }
    },
    layouNoticeList:{
      message: "",
      code: null,
      data: {
        data: [

        ]
      }
    },
    onlineCountObj:{
      message: "",
      code: null,
      data: {

      }
    },
    czSound:false,
    txSound:false,
    verifyCodeModeLogin:{
      code: null,
      data: {
        mode: null
      }
    },
    dataAdminInfo:[]
  },
  /*$store.commit*/
  mutations: {
    setVerifyCodeModeLogin(state, data){
      state.verifyCodeModeLogin = data
    },
    // 会员列表弹窗开启关闭1
    setMemberVisible (state, data) {
      state.memberParams.visible = data
    },
    // 会员列表弹窗参数1
    setMemberName (state, data) {
      state.memberParams.name = data
    },

    // 会员列表弹窗开启关闭2
    setMemberVisibleSum (state, data) {
      state.memberParamsSum.visible = data
    },
    // 会员列表弹窗参数2
    setMemberNameSum (state, data) {
      state.memberParamsSum = data
    },

    setIndexMeau (state, data) {
      state.indexMeauList = data
    },
    // 赋值菜单数据
    setIndexMeauList (state, data) {
      for (let k in data) {
        data[k].active = false
      }
      state.indexMeauList = data
    },
    setOnlineCount(state, data){
      state.onlineCountObj = data
    },
    // 设定加载层状态
    setLoddingData (state, data) {
      state.loddingFlag = data
    },
    // 加载锁定层状态
    setLoddingLock (state, data) {
      state.loddingLock = data
    },
    setTopInfo(state,data){
      state.topInfoData={...state.topInfoData,...data};
    },
    setVcodeData(state,data={imageData:'',uniqueId:''}){
      data.imageData ? state.vcode.val =  'data:image/png;base64,'+ data.imageData : state.vcode.val = ''
      state.vcode.uniqueId = data.uniqueId
    },
    setLoginData(state,data){
      state.loginData={...state.loginData,...data};
    },
    seLayouNotice(state,data){
      state.layouNoticeList = data
    },
    setAdminInfo(state,data){
      state.dataAdminInfo = data
    },
  },

  /*$store.dispatch*/
  actions:{
    //请求验证码
    getVcode(context,data) {
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/User/vcode"+"?"+Date.now(),
          data:qs.stringify(data)
        }).then(function(res) {
          if(res.data.code == 0) {
            context.commit('setVcodeData',res.data.data)
            resolve(res.data.data)
          }else {
            Message({
              message:res.data.message,
              type:"error",
              showClose:true
            })
          }
        })
      })
    },

    loginAction(context,data){
      // alert(data.from)
      // return;
      axios({
        method: 'post',
        url:window.host+"/dggadmin/User/login",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          context.commit("setLoginData",res.data);
          setSession("adminToken",res.data.data.access_token);
          window.location.href="#/money/8";
          return true;
        }else {
          Message({
            message:res.data.message,
            type:"error",
            showClose:true
          })
          context.dispatch("getVcode");

          return false;
        }
      })
    },
    // 获取菜单
    getIndexMeauList(context,data){
      var loding=Loading.service({
        text: window.App.$L.t('store.info2'),
        background: 'rgba(0, 0, 0, 0.2)',
        spinner: 'el-icon-loading',
        customClass:"BetaLoadingClass"
      });
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Manage/menuList",
          data:qs.stringify({})
        }).then(function(res){
          loding.close()
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setIndexMeauList",res.data.data);
            resolve()
            return true;
          }else {
            Message({
              message:res.data.message,
              type:"error",
              showClose:true
            })
            return false;
          }
        })
      })
    },
    // 退出登录
    logout(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/User/logout",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            resolve()
            return true;
          }else {
            Message({
              message:res.data.message,
              type:"error",
              showClose:true
            })

            return false;
          }

        })
      })
    },
    // 充值、提现提醒
    getRemind(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Website/getRemind",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          if(res.data.data.flag*1 == 1){
            context.state.czSound = true
            context.state.txSound = false
          }
          if(res.data.data.flag*1 == 2){
            context.state.czSound = false
            context.state.txSound = true
          }
          if(res.data.data.flag*1 == 3){
            context.state.czSound = true
            context.state.txSound = true
          }
          // 4.5.6暂时不要
          // if(res.data.data.flag*1 == 4){
          //   context.state.txSound = false
          // }
          // if(res.data.data.flag*1 == 5){
          //   context.state.czSound = false
          // }
          // || res.data.data.flag*1 == 6
          if(res.data.data.flag*1 == 0){
            context.state.czSound = false
            context.state.txSound = false
          }

          clearTimeout(window.newMessage);
          window.newMessage=setTimeout(()=>{
            context.dispatch("getRemind")
          },5000);
          return true;
        }else {
          Message({
            message:res.data.message,
            type:"error",
            showClose:true
          })

          return false;
        }

      })

    },
    getTopInfo(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/topInfo",
          data:qs.stringify(data)

        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setTopInfo",res.data);
            if (res.data.data) {
              if(res.data.data.getRemind){
                context.dispatch("getRemind")
              }
              if(res.data.data.agencyList){
                context.dispatch("getAgencyList")
              }
              if(res.data.data.get_chess_info){
                context.dispatch("getChessinfoAction")
              }
              context.commit("setAdminInfo",res.data.data);
              resolve(res.data)
              clearTimeout(window.TopInfo);
              window.TopInfo=setTimeout(()=>{
                context.dispatch("getTopInfo")
              },600000);
            }
            return true;
          }else {
            Message({
              message:res.data.message,
              type:"error",
              showClose:true
            })
            return false;
          }

        })
      })
    },
    getOnlineCount(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/onlineCount",
        data:qs.stringify({})

      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setOnlineCount",res.data);
          clearTimeout(window.onlineCount);
          window.onlineCount=setTimeout(()=>{
            context.dispatch("getOnlineCount")
          },15000);
          return true;
        }else {
          Message({
            message:res.data.message,
            type:"error",
            showClose:true
          })
          return false;
        }
      })
    },
    // 循环请求：是否要弹窗提示
    getLayouNotice(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/layouNotice",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("seLayouNotice",res.data);
            if (res.data.code == 0) {
              resolve(res.data.data)
            }
            return true;
          }else {
            Message({
              message:res.data.message,
              type:"error",
              showClose:true
            })
            return false;
          }
        })
      })
    },
    // 清除缓存
    delClean(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/delClean",
        data:qs.stringify({})
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          Message({
            message:res.data.message,
            type:"success",
            showClose:true
          })
          return true;
        }else {
          Message({
            message:res.data.message,
            type:"error",
            showClose:true
          })
          return false;
        }
      })
    },
    // 获取登录验证码模式
    getVerifyCodeModeLogin (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/User/getSystemVerifyCodeMode",
        data:qs.stringify({})
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          if (res.data.code == 0 || res.data.code == 8888) {
            context.commit("setVerifyCodeModeLogin",res.data);
          }
          return true;
        }else {
          Message({
            message:res.data.message,
            type:"error",
            showClose:true
          })
          return false;
        }
      })
    },

    // 设置语言
    setLanguage(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/Api/Member/setLanguage",
          data:qs.stringify(data)
        }).then((res)=>{
          if(store.getters.getCodeState(res.data.code)){
            // Message({
            //   message:res.data.message,
            //   type:"success",
            //   showClose:true
            // })
            resolve(true)
          }else {
            return false;

          }
        })
      })
    },
    // 清除IP
    clearIPAction(context,data){
      new Promise(resolve => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/delBadIp",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            resolve(res.data)
            return true;
          }else {
            Message({
              message:res.data.message,
              type:"error",
              showClose:true
            })
            return false;
          }
        })
      })

    },
  },


  /*$store.getters*/
  getters:{
    getToken:state => {
      var t=state.loginData.data.access_token || getSession('adminToken');
      // console.log(t)
      return t;
    },
  },

}

