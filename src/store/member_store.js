import Vue from 'vue'
import axios from '../axios'
import qs from 'qs'
import {getDate,setDate} from '../common/common'
import { Loading,Message,MessageBox} from 'element-ui';
import store from '../store'

/*
* 会员管理
* */
export default {
  state:{
    balanceLoading:true,
    betInfoObj:{
      message: "",
      code: null,
      data: {

      }
    },
    userMoreLogList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: []
      }
    },
    userAmountList:{
      message:"",
      code:null,
      data:[]
    },
    // 项目汇总
    projectBetList:{
      message:"",
      code:null,
      data:{
        data: [],
      }
    },
    userInfoObj:{
      message:"",
      code:null,
      data:{

      }
    },
    levelAdminList:{
      message: "",
      code: null,
      data: {
        data: [

        ],
        userLevelFrom:'',
      }
    },
    appOnlineList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    }, //

    // 会员列表
    userList: {
      data:{
        data: [],
      }
    },
    // 会员下级列表
    userLowerList: {
      data:{
        data: [],
      }
    },
    //  资金明细
    appCoinLogList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [],
        liqTypeName:{

        },
        types:{

        }
      }
    },
    // 洗码明细
    ximaInfoData: {
      code: null,
      data:{
        data: [],
      }
    },
    // 积分明细
    appScoreList:{
      message: "",
      code: null,
      data: {
        data: [],
        rPoint:[]
      }
    },
    // 封停会员管理
    appClosureLists:{
      message: "",
      code: null,
      data: {
        count:1,
        data: [],
        rPoint:[]
      }
    },
    // 会员转移记录
    userTransList:{
      message: "",
      code: null,
      data: {
        count: 1,
        data: [],
        rPoint:[]
      },
    },
    //会员操作日志
    dataUserControlLog: {
      code: null,
      data: [],
    },
    // 操作日志类型
    userTypeList: {
      code: null,
      data: [],
    },
    // 注册会员统计
    statisticalList: {
      code: null,
      data: {}
    },
    claslist: {
      code: null,
      data: [],
    },
    // 用户银行卡列表
    userBankList: {
      code: null,
      data: {
        data: [],
      }
    },
    // 银行卡列表
    bankDataList:{
      code: null,
      data: {
        banks: [],
      }
    },
  },
  /*$store.commit*/
  mutations: {
    setBalanceLoading(state, data){
      state.balanceLoading = data
    },
    // 用户银行卡
    setUserBankList (state, data) {
      state.userBankList = data
    },
    // 银行卡列表
    setBankDataList (state, data) {
      state.bankDataList = data
    },
    setUserMoreLog(state,data){
      state.userMoreLogList = data
    },
    setUserAmount(state,data){
      state.userAmountList = data
    },
    // 项目汇总
    setProBetlog(state,data){
      state.projectBetList = data
    },
    setUserInfoObj(state,data){
      state.userInfoObj =data
    },// 查看用户详情
    setLevelAdmin(state,data){
      state.levelAdminList =data
    },  // 等级管理
    setAppOnline(state,data){
      state.appOnlineList =data
    }, //  在线会员
    // 会员列表
    setUserLists (state, data) {
      for (let k in data.data.data) {
        data.data.data[k].checked = false
      }
      state.userList = data
    },
    setUserLowerList (state, data) {
      state.userLowerList = data
    },
    //资金明细
    setCoinLog(state,data){
      state.appCoinLogList =data
    },
    // 洗码明细
    setXimaInfoData (state, data) {
      state.ximaInfoData = data
    },
    // 积分明细
    setScoretotal(state,data){
      state.appScoreList =data
    },
    // 封停会员管理
    setClosureLists(state,data){
      state.appClosureLists =data
    },
    setClaslist(state,data){
      state.claslist = data
    },
    // 会员转移记录
    setUserTransfer(state,data){
      state.userTransList =data
    },
    // 操作日志类型
    setUserTypeList(state,data){
      state.userTypeList = data
    },
    //会员操作日志
    setUserControlLog(state,data){
      state.dataUserControlLog = data
    },
    // 注册充值统计
    setStatisticalList (state, data) {
      state.statisticalList = data
    },
    setBetInfoObj(state, data){
      state.betInfoObj = data
    }, //  获取指定订单详情
  },

  /*$store.dispatch*/
  actions:{
    //  获取指定订单详情
    getBetInfo(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/betInfo",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            context.commit("setBetInfoObj",res.data);
            resolve(res.data);
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
    //  登录日志
    getUserMoreLog(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/moreLog",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            context.commit("setUserMoreLog",res.data);
            resolve();
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
    //  回收代理商余额
    userBackAgency(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/backAgency",
        data:qs.stringify(data)

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
    //  展厅余额/查询用户各个代理商余额
    getUserAmount(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/getUserAmount",
        data:qs.stringify(data)

      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setBalanceLoading",false)
          context.commit("setUserAmount",res.data);
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
    //  展厅余额/查询用户各个代理商余额
    getUserDetailAmount(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/userAmount",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            resolve(res.data.data)
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
    //修改分组
    modUseClaslist(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/updMemberClass",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            // context.commit("setAdminOptionDetail",res.data);
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
    //会员分组管理
    getUseClaslist(context,data){
      return new Promise(resolve => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/memberClassList",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setClaslist",res.data);
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
    // 投注总打码详情
    betsCodeInfo(context,data) {
      return new Promise((resolve, reject) => {
          axios({
            method: 'post',
            url:window.host+"/dggadmin/Member/betsCodeInfo",
            data:qs.stringify(data)
          }).then(function(res){
            console.log(res);
            if(res.data.code != 2){
              // context.commit("setAdminOptionDetail",res.data);
              // Message({
              //   message:res.data.message,
              //   type:"success",
              //   showClose:true
              // })
              resolve(res.data)
              return true;
            }else {
              Message({
                message:res.data.message,
                type:"error",
                showClose:true
              })
              return false
            }
          })
      })
    },
    //新增分组
    addUseClaslist(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/addMemberClass",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            // context.commit("setAdminOptionDetail",res.data);
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

    //修改分组
    deleteUseClaslist(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/delMemberClass",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            // context.commit("setAdminOptionDetail",res.data);
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
    //  会员转移记录
    getTransfer(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/transfer",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setUserTransfer",res.data);
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
    // 用户操作日志类型
    getUserTypeList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/logType",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setUserTypeList",res.data);
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
    //  用户操作日志
    getUserControlLog(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/memberLog",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setUserControlLog",res.data);
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

    //  项目汇总
    getProBetlog(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/betlog",
        data:qs.stringify(data)

      }).then(function(res){
        if (res.data.data.type) {
          context.commit("setProBetlog",res.data);
        }
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setProBetlog",res.data);
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
    //  在线会员
    getAppOnline(context,data){
      // alert(data.from)
      // return;
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/online",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          context.commit("setAppOnline",res.data);
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
    //  会员列表
    getUserLists(context,data){
      store.commit('setLoddingData', true)
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/UserLists",
        data:qs.stringify(data)

      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit('setUserLists',res.data)
          store.commit('setLoddingData', false)
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
    // 获取用户下级代理列表
    getUserLowerList(context,data){

      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/UserLists",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          context.commit("setUserLowerList",res.data);
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
     //  资金明细
    getCoinLog(context,data){
      // alert(data.from)
      // return;
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/coinLog",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setCoinLog",res.data);
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
     //  资金明细
    getXimaInfoData(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/ximaInfo",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setXimaInfoData",res.data);
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
    //  积分明细
    getScoretotal(context,data){
      // alert(data.from)
      // return;
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/scoretotal",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setScoretotal",res.data);
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
    //  查看用户详情
    getUserInfo(context,data){
      return new Promise((resolve,reject)=>{
        // var loding=Loading.service({
        //   // target:"#app",
        //   text: '查询中...',
        //   background: 'rgba(0, 0, 0, 0.2)',
        //   spinner: 'el-icon-loading',
        //   customClass:"BetaLoadingClass"
        // });
        store.commit('setLoddingData', true)
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/userInfo",
          data:qs.stringify(data)

        }).then(function(res){
          // loding.close();
          store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setUserInfoObj",res.data);
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
    // 设置会员等级
    setLevelAll(context,data){
      return new Promise((resolve,reject)=>{

        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/setLevelAll",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            context.dispatch("getLevel")
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
    // 修改会员等级计算方式
    setMemberLevel(context,data){

        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/updateLevel",
          data:qs.stringify(data)

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
    //  会员分层(等级)管理
    getLevel(context,data){
      return new Promise((resolve,reject)=>{
          axios({
            method: 'post',
            url:window.host+"/dggadmin/Member/level",
            data:qs.stringify({})

          }).then(function(res){

            if(store.getters.getCodeState(res.data.code)){
              context.commit("setLevelAdmin",res.data);
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
    //  更多日志
    getMoreLog(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/moreLog",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){


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
    //  封停会员管理
    getClosureLists(context,data){
      // alert(data.from)
      // return;
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/closureLists",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setClosureLists",res.data);
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
    // 会员解封/启用
    getEnable(context,data){
      store.commit('setLoddingData', true)
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/enable",
        data:qs.stringify(data)

      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          Message({
            message:res.data.message,
            type:"success",
            showClose:true
          })
          context.dispatch('getUserLists',data.Parmas);
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
    // 踢线
    getOffLine(context,data){
      var loding=Loading.service({
        // target:"#app",
        text: window.App.$L.t('agent.agent_8.zh16'),
        background: 'rgba(0, 0, 0, 0.2)',
        spinner: 'el-icon-loading',
        customClass:"BetaLoadingClass"
      });
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/offLine",
          data:qs.stringify(data)

        }).then(function(res){
          loding.close();
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
    // 用户重置密码
    updatePassword(context,data){
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/resetPassword",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            resolve()
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
    // 修改用户资料
    updateUser(context,data){
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/updateUser",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            resolve()
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
    // 删除用户
    updateUserDelete(context,data){
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/userDelete",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            resolve()
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
    // 调整分层/等级
    updateLevel(context,data){
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/setLevel",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            resolve()
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
    // 注册充值统计
    statisticalAction(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/statistical",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit('setStatisticalList', res.data)
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
    // 获取用户银行列表
    getUserBankList (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/getBankCard",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit('setUserBankList', res.data)
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
    // 添加银行卡(获取银行列表)
    getBankDataList (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/getUserBank",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit('setBankDataList', res.data)
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
    // 银行卡修改/添加
    userUpdateBank(context,data){
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/userUpdateBank",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            resolve()
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
    // 删除用户银行卡
    deleteMemberBank(context,data){
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/deleteMemberBank",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            resolve()
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
    // 重置手势密码
    resetHandPass(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/handPass",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          Message({
            message:res.data.message,
            type:"success",
            showClose:true
          })
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
    // 添加会员
    addUserAction(context,data){
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/addUser",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            resolve()
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
    // 批量修改用户等级
    setUsersLevel(context,data){
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/setUsersLevel",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            resolve()
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
    // 统计用户指定项目打码量
    getDmReportList (context, data) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/ReportList",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            if (res.data.data) {
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
    // 修改真实姓名
    settingUpdateName (context, data) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/updateName",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            resolve()
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
      })
    },

    // 批量修改用户分组
    setUsersGroup(context,data){
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/setUsersGroup",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            resolve()
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

    // 更新打码量
    getUpdateDml(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/updateUserBetCode",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            resolve(res.data.data)
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

  }
}

