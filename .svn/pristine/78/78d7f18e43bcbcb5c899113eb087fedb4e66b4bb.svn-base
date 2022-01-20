import Vue from 'vue'
import axios from '../axios'
import qs from 'qs'
import { Loading,Message,MessageBox} from 'element-ui';
import store from '../store'

/*
 * 代理
 * */
export default {
  state:{
    // 加载遮罩层状态
    loddingFlag: false,
    agentFandian:{
      message: "",
      code: null,
      data: {
      }
    },
    agentDetails:{
      message: "",
      code: null,
      data: {
      }
    },
    agentModeValue:{
      message: "",
      code: null,
      data: {
      }
    },
    agentSubList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [
        ]
      }
    },
    betlogList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [
        ]
      }
    },
    agentCashList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [
        ]
      }
    },
    recharge_logList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [
        ]
      }
    },
    //返水
    fanshuiList:{
      message: "",
      code: null,
      data: []
    },
    agentBankList:{
      message: "",
      code: null,
      data: []
    },
    members_subList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [
        ]
      }
    },
    ScRechargesList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },
    todayUserBetAmountList:{
      message: "",
      code: null,
      data: [

      ]
    },
    agentList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },  //  代理列表
    agentLinkList:{
      message: "",
      code: null,
      data: []
    },   // 代理链接列表

    // 代理佣金详情
    agentBrokerList: {},
    commissionList: {
      data: [],
    },
    // 新 佣金第三层
    agentNewThree: {
      data: [],
    },
    dataChessList:{
      message: "",
      code: null,
      data: {}
    },
    dataChessClass:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },
    dataChessDataClass:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },
    dataChessAgency:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },
    dataBetsList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [],
        hz_data:{}
      }
    },
  },
  /*$store.commit*/
  mutations: {
    // 设定加载层状态
    setLoddingData (state, data) {
      state.loddingFlag = data
    },
    settingAgentList(state,data){
      state.agentFandian = data
    },
    setAgentDetails(state,data){
      state.agentDetails = data
    },
    setAgentMode(state,data){
      state.agentModeValue = data
    },
    setAgentSubList(state,data){
      state.agentSubList = data
    },
    setBetlogList(state,data){
      state.betlogList = data
    },
    setAgentCash(state,data){
      state.agentCashList = data
    },
    setRecharge_log(state,data){
      state.recharge_logList = data
    },
    setFanshuiList(state,data){
      state.fanshuiList = data
    },
    setBankList(state,data){
      state.agentBankList = data
    },
    setMembers_sub(state,data){
      state.members_subList = data
    },
    setScRecharges(state,data){
      state.ScRechargesList = data
    },
    setTodayUserBetAmountList(state,data){
      state.todayUserBetAmountList = data
    },
    setAgentList(state,data){
      state.agentList = data
    },
    setLinkList(state,data){
      state.agentLinkList = data
    },
    setAgentBrokerList (state, data) {
      state.agentBrokerList = data
    },
    setCommissionList (state, data) {
      state.commissionList = data
    },
    setAgentNewThree (state, data) {
      state.agentNewThree = data
    },
    setChessDataList (state, data) {
      state.dataChessList = data
    },
    setChessDataClass (state, data) {
      state.dataChessClass = data
    },
    setChessDataAgency (state, data) {
      state.dataChessAgency = data
    },
    setBetsList (state, data) {
      state.dataBetsList = data
    },
  },

  /*$store.dispatch*/
  actions:{
    //  修改代理配置
    setAgentFandian(context,data){
      console.log(data)
      return new Promise((resolve,reject)=>{
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Agent/setAgent",
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
    //  代理返点/投注 信息
    gettingAgentList(context,data){
      return new Promise((resolve,reject)=>{

        axios({
          method: 'post',
          url:window.host+"/dggadmin/Agent/setAgentList",
          data:qs.stringify({})

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            context.commit("settingAgentList",res.data)
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
    //  修改赔率说明
    settingAgentDetails(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Agent/setAgentDetails",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          Message({
            message:window.App.$L.t('store.info1'),
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
    //  修改代理模式
    settingAgentMode(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Agent/setAgentMode",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:window.App.$L.t('store.info1'),
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
    //  查询代理说明
    getAgentDetails(context,data){
      return new Promise((resolve,reject)=>{

        axios({
          method: 'post',
          url:window.host+"/dggadmin/Agent/agentDetails",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            context.commit("setAgentDetails",res.data)
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
    //  获取代理模式设置信息
    getAgentMode(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Agent/agentMode",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            context.commit("setAgentMode",res.data)
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
    //  查询代理今日访问用户
    getListSubUserTodayLogin(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Agent/agentlist",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          //  和 下级在线记录复用了一个页面 Agent/agent_sub
          context.commit("setAgentSubList",res.data);
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
    //  查询代理下级在线记录
    getAgentSub(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Agent/agentlist",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          context.commit("setAgentSubList",res.data);
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
    //  查询代理投注记录
    getBetlog(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Agent/bet_log",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          context.commit("setBetlogList",res.data);
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
    //  查询代理提现记录
    getAgentCash(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Agent/cash",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          context.commit("setAgentCash",res.data);
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
    //  查询代理存款记录
    getRecharge_log(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Agent/recharge_log",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          context.commit("setRecharge_log",res.data);
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

    //  查询代理返水
    getFanshuiList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Agent/daiFanshuiList",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          context.commit("setFanshuiList",res.data);
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


    //  银行列表获取 (代理存款用到)
    getBankList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Agent/bankList",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          context.commit("setBankList",res.data);
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
    //  代理查询注册用户
    getMembers_sub(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Agent/agentlist",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            context.commit("setMembers_sub",res.data);
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
    //  代理查询首充用户
    getScRecharges(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Agent/ScRecharges",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            context.commit("setScRecharges",res.data);
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
    //  代理列表(获取佣金统计)
    getTodayUserBetAmount(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Agent/todayUserBetAmount",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          context.commit("setTodayUserBetAmountList",res.data);
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
    //  代理列表
    getAgentlist(context,data){
      // alert(data.from)
      // return;
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Agent/agentlist",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          context.commit("setAgentList",res.data);
          if(res.data.data.count > 0){
            try {
              var uidArr = []
              res.data.data.data.forEach(function (v,i,a) {
                uidArr.push(v.uid)
              })
              let uidObj = uidArr.join(",")
              context.dispatch("getTodayUserBetAmount",{fromTime:data.fromTime,toTime:data.toTime,uid:uidObj})
            }catch (e){

            }
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
    //  修改代理链接信息
    updateLink(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Agent/updateLink",
          data:qs.stringify({
            id:data.id,
            fanDian:data.fanDian,
            ChessFd:data.ChessFd,
            PersonFd:data.PersonFd,
            ElectronicsFd:data.ElectronicsFd,
            SportsFd:data.SportsFd,
            MatchFd:data.MatchFd,
            type:data.type,
            regCode:data.regCode,
            enbale:data.enbale
          })

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:window.App.$L.t('store.info1'),
              type:"success",
              showClose:true
            })
            context.dispatch("getLinkList",{uid:data.uid})
            resolve(res.data)
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
    //  查看代理链接信息
    getLinkList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Agent/LinkList",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            context.commit("setLinkList",res.data)
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
    //  会员转移(搜索会员)
    searchUser(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Agent/searchUser",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            if(res.data.code == 0 || res.data.code == 8888){
              resolve(res.data.data);
            }else{
              Message({
                message:res.data.message,
                type:"warning",
                showClose:true
              })
            }

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
    //  会员转移(点击审查)
    upAgentTransfer(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Agent/searchJs",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            resolve(res.data.data);
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
  //  会员转移(转移)
    upAgentDochange(context,data){
      context.commit("setLoddingData", true)
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Agent/dochange",
          data:qs.stringify(data)

        }).then(function(res){

        context.commit("setLoddingData", false)
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            resolve(res.data);
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
    //  获取/修改代理说明
    getAgentExplain(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Agent/getAgentExplain",
          data:qs.stringify({})

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            resolve(res.data);
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
    //  修改代理说明
    setAgentExplain(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Agent/setAgentExplain",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            context.dispatch("getAgentExplain")
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
    //  代理佣金详情
    commissionInfo(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Recharge/commissionInfo",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setAgentBrokerList", res.data.data)
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
    //  代理佣金详情
    getCommissionList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Agent/commissionList",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setCommissionList", res.data)
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
    //  代理佣金详情
    getThreeClassData (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Agent/get_class_data",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setAgentNewThree", res.data)
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
    //  获取代理综合统计
    getChessDataList (context, data) {
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Agent/getChessData",
          data:qs.stringify(data)
        }).then(function(res){
          resolve(res.data);
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setChessDataList", res.data)
          }else {
            return false;
          }
        })
      })
    },

    //  获取代理综合分类统计
    getChessDataClass (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Agent/getChessDataClass",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setChessDataClass", res.data)
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
    // 获取代理线下综合第三方统计
    getChessDataAgency (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Agent/getChessDataAgency",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setChessDataAgency", res.data)
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

    // 代理投注汇总
    getBetsList (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Agent/get_bets_list",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setBetsList", res.data)
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







  },


  /*$store.getters*/
  getters:{

  }
}

