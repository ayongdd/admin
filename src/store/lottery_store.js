import Vue from 'vue'
import axios from '../axios'
import qs from 'qs'
import {getDate,setDate} from '../common/common'
import { Loading,Message,MessageBox} from 'element-ui';
import store from '../store'
/*
* 聊天室管理
* */
export default {
  state:{
    KjsjValue:'',  // 开奖数据彩种id
    planLotteryType:'',
    YKlotteryType:'',
    groupThis:'',
    groupNameThis:'',
    lotteryList: {
      code: null,
      data: [],
    },
    lotteryClassList: {
      code: null,
      data: [],
    },
    lotteryTypeFromClassID:{
      message:'',
      code: null,
      data: [],
    },
    lotteryGroupFromgroupType:{
      message:'',
      code: null,
      data: [],
    },
    lotteryPlayedFromgroupID:{
      message:'',
      code: null,
      data: [],
    },
    checkLotteryKJList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [],
      }
    },
    dataFromTypeList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [],
      }
    },
    betOrderList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [],
      }
    },
    lotteryOrderInfoObj:{
      message: "",
      code: null,
      data: {

      }
    },
    lotteryRuleList:{
      message: "",
      code: null,
      data: []
    },
    planListTypeList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [],
      }
    },
    lotteryProfitAnalysis:{
      message: "",
      code: null,
      data: {}
    },
    lotteryProfitAnalysisDetailList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [],
      }
    },
    lotteryProfitAnalysisDetailFromUidList:{
      message: "",
      code: null,
      data: []
    },
    lotteryPlayedPAsDetailFromUidList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [],
        rows:{}
      }
    },
    fanShuiList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [],
      }
    },
    LotteryLHC:[

    ],
    zm16LotteryList:[],
    zm16Index:0,
    dataProfitList:{
      message: "",
      code: null,
      data: [{
        action:{},
        content:[],
        title:''
      }]
    },
    dataStatistics:{
      message: "",
      code: null,
      data: {
        count:'',
        data:[],
        rows:{
          betAmount:'',
          zjAmount:'',
          yingkuiAmount:'',
          betUserCount:'',
        }
      }
    },
    dataKjBeforeList:{
      message: "",
      code: null,
      data: []
    },
    dataKjDetailList:{
      message: "",
      code: null,
      data: []
    },
    dataTypeStatisticsInfo:{
      message: "",
      code: null,
      data: {
        count:'',
        data:[],
        rows:{
          betAmount:'',
          zjAmount:'',
          yingkuiAmount:'',
          betUserCount:'',
        }
      }
    },
  },
  /*$store.commit*/
  mutations: {
    setGroupNameThis(state, data){
      state.groupNameThis = data
    },
    setFanShuiList(state, data){
      state.fanShuiList = data
    },
    setLotteryPlayedPAsDetailFromUid(state, data){
      state.lotteryPlayedPAsDetailFromUidList = data
    },
    setLotteryProfitAnalysisDetailFromUid(state, data){
      state.lotteryProfitAnalysisDetailFromUidList = data
    },
    setLotteryProfitAnalysisDetail(state, data){
      state.lotteryProfitAnalysisDetailList = data
    },
    setYKlotteryType(state, data){
      state.YKlotteryType= data
    },
    setPlanLotteryType(state, data){
      state.planLotteryType= data
    },
    setLotteryProfitAnalysis(state, data){
      state.lotteryProfitAnalysis= data
    },
    setPlanListType(state, data){
      state.planListTypeList= data
    },
    setLotteryRule(state, data){
      state.lotteryRuleList= data
    },
    setOrderList(state, data){
      state.betOrderList= data
    },
    setKjsjValue(state, data){
      state.KjsjValue= data
    },
    setDataFromTypeList(state, data){
      state.dataFromTypeList= data
    },
    setCheckLotteryKJ(state, data){
      state.checkLotteryKJList = data
    },
    setGroupThis(state, data){
      state.groupThis = data
    },
    setLotteryList (state, data) {
      state.lotteryList = data
    },
    setLotteryClassList (state, data) {
      state.lotteryClassList = data
    },
    setLotteryTypeFromClassID(state, data){
      state.lotteryTypeFromClassID = data
    },
    setLotteryGroupFromgroupType(state, data){
      state.lotteryGroupFromgroupType = data
    },
    setLotteryPlayedFromgroupID(state, data){
      state.lotteryPlayedFromgroupID = data
    },
    setLotteryOrderInfo(state, data){
      state.lotteryOrderInfoObj = data
    },
    setZm16Lottery(state, data ){
      state.zm16Index = 0
      state.zm16LotteryList = data
    },
    getZm16LotteryList(state, data ){
      state.zm16Index = data.num
      var newzmarr = []
      state.zm16LotteryList.forEach(function (v,i,arr) {
        if(v.alias.indexOf(data.name) >= 0){
          newzmarr.push(v)
        }
      })
      state.lotteryPlayedFromgroupID.data = newzmarr
    },
    setProfitList(state, data ){
      state.dataProfitList = data
    },
    setLotteryLHC(state, data ){
      state.LotteryLHC = data
    },
    setStatistics(state, data ){
      state.dataStatistics = data
    },
    setKjBeforeList(state, data ){
      state.dataKjBeforeList = data
    },
    setKjDetailList(state, data ){
      state.dataKjDetailList = data
    },
    setTypeStatisticsInfo(state, data ){
      state.dataTypeStatisticsInfo = data
    },
  },
  /*$store.dispatch*/
  actions:{
    // 获取彩种列表
    getLotteryList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Lottery/lotteryList",
        data:qs.stringify(data)

      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setLotteryList",res.data);
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
    // 修改彩种信息
    updateLotteryInfo(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/updateLotteryInfo",
          data:qs.stringify(data)
          // headers: {
          //   "Content-Type": "multipart/form-data"
          // },
          // data:data
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
    // 获取彩种分类
    getLotteryClassList(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/getLotteryClassList",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setLotteryClassList",res.data);
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
    // 修改彩种分类信息
    updateLotteryClassInfo(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/updateLotteryClassInfo",
          data:qs.stringify(data)

        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            context.dispatch('getLotteryClassList')
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
    // 根据彩种分类ID获取彩种列表
    getLotteryTypeFromClassID(context,data){
      data['is_all'] = 1
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/getLotteryTypeFromClassID",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setLotteryTypeFromClassID",res.data);
            if(res.data.code == 0 || res.data.code == 8888){
              context.dispatch("getLotteryGroupFromgroupType",{groupType:res.data.data[0].groupType})
              resolve(res.data)
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
    //  lottery/5
    getLotteryTypeFromClassID2(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/getLotteryTypeFromClassID",
          data:qs.stringify({classID:data.classID,apiType:data.apiType,lotteryType:data.lotteryType})
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setLotteryTypeFromClassID",res.data);
            if(res.data.code == 0 || res.data.code == 8888){
              if(data.from == 'lottery'){
                context.dispatch("getDataFromType",{
                  type:res.data.data[0].id,
                  search_type:'1',
                  actionNo:'',
                  date:'0',
                  page:1,
                  limit:'10'
                })
              }else{
                context.dispatch("getDataFromType",{
                  type:res.data.data[0].id,
                  search_type:'0',
                  actionNo:'',
                  date:'0',
                  page:1,
                  limit:'10'
                })
              }
              resolve(res.data)
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
    //  lottery/8
    getLotteryTypeFromClassID3(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/getLotteryTypeFromClassID",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setLotteryTypeFromClassID",res.data);
            if(res.data.code == 0 || res.data.code == 8888){
              context.dispatch("getPlanListType",{
                type:res.data.data[0].id,
                class_type:'1',
                kj:'2',
                page:1,
                limit:'10'
              })
              resolve(res.data)
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
    //  lottery/9
    getLotteryTypeFromClassID4(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/getLotteryTypeFromClassID",
          data:qs.stringify({classID:data.classID,apiType:data.apiType,lotteryType:data.lotteryType})
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setLotteryTypeFromClassID",res.data);
            if(res.data.code == 0 || res.data.code == 8888){
              context.dispatch("getLotteryProfitAnalysis",{
                type: data.diyType || res.data.data[0].id,
                fromTime:data.fromTime || '',
                toTime:data.toTime || '',
                username:data.username || '',
                isAgent:data.isAgent,
                lotteryType:data.lotteryType,
                isAll:data.isAll,
                lotteryClass:data.lotteryClass,
              })
              resolve(res.data)
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
    //  彩种盈亏分析列表
    getLotteryProfitAnalysis(context,data){
      store.commit('setLoddingData', true)
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Lottery/getLotteryProfitAnalysis",
        data:qs.stringify(data)
      }).then(function(res){
        store.commit('setLoddingData', false)
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setYKlotteryType",data.type)
          context.commit("setLotteryProfitAnalysis",res.data)
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
    //  根据彩种id获取精准计划
    getPlanListType(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Lottery/getPlanListType",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setPlanListType",res.data)
          context.commit("setPlanLotteryType",data.type)
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
    //  修改精准计划
    updatePlayInfo(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/updatePlayInfo",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            if(res.data.code == 0 || res.data.code == 8888){
              Message({
                message:res.data.message,
                type:"success",
                showClose:true
              })
              resolve(res.data)
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
    //  获取彩种开奖数据
    getDataFromType(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/getDataFromType",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setDataFromTypeList",res.data);
            context.commit("setKjsjValue",data.type)
            if(res.data.code == 0 || res.data.code == 8888){
              resolve(res.data)
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
    // 根据彩种groupType获取玩法组
    getLotteryGroupFromgroupType(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/getLotteryGroupFromgroupType",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setLotteryGroupFromgroupType",res.data);
            if(res.data.code == 0 || res.data.code == 8888){
              context.dispatch("getLotteryPlayedFromgroupID",{groupID:res.data.data[0].id,groupName:res.data.data[0].groupName})
              resolve(res.data)
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
    // 根据彩种玩法组ID获取玩法
    getLotteryPlayedFromgroupID(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/getLotteryPlayedFromgroupID",
          data:qs.stringify({groupID:data.groupID})
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            if(res.data.code == 0 || res.data.code == 8888){
              if(data.groupName == '正码特' || data.groupName == window.App.$L.t('store.info5')){
                context.commit("setZm16Lottery",res.data.data);
                var zmarr = []
                res.data.data.forEach(function (v,i,arr) {
                  if(v.alias.indexOf('一') >= 0){
                    zmarr.push(v)
                  }
                })
                context.state.lotteryPlayedFromgroupID.data = zmarr
              }else{
                context.commit("setLotteryPlayedFromgroupID",res.data);
              }
              context.commit("setGroupNameThis",data.groupName)
              context.commit("setGroupThis",data.groupID)
              resolve(res.data)
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
    // 修改单个玩法信息
    updateLotteryPlayed(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/updateLotteryPlayed",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            if(res.data.code == 0 || res.data.code == 8888){
              Message({
                message:res.data.message,
                type:"success",
                showClose:true
              })
              resolve(res.data)
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
    // 批量修改玩法信息
    updateLotteryPlayedAll(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/updateLotteryPlayedAll",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            if(res.data.code == 0 || res.data.code == 8888){
              Message({
                message:res.data.message,
                type:"success",
                showClose:true
              })
              resolve(res.data)
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
    // 获取开奖检测列表
    checkLotteryKJ(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Lottery/checkLotteryKJ",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setCheckLotteryKJ",res.data);
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
    // 开奖检测开奖
    addLotteryKJ(context,data){
      return new Promise((resolve,reject)=>{

        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/addLotteryKJ",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            if(res.data.code == 0 || res.data.code == 8888){
              Message({
                message:res.data.message,
                type:"success",
                showClose:true
              })
              context.dispatch("checkLotteryKJ")
              resolve()
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
    // 提交重新开奖
    postLotteryKJ(context,data){
      return new Promise((resolve,reject)=>{

        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/postLotteryKJ",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            if(res.data.code == 0 || res.data.code == 8888){
              Message({
                message:res.data.message,
                type:"success",
                showClose:true
              })
              resolve()
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
    // 添加开奖号
    addLotteryData(context,data){
      return new Promise((resolve,reject)=>{

        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/addLotteryData",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            if(res.data.code == 0 || res.data.code == 8888){
              Message({
                message:res.data.message,
                type:"success",
                showClose:true
              })
              resolve()
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
    // 修改预开奖号
    updateLotteryDataed(context,data){
      return new Promise((resolve,reject)=>{

        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/updateLotteryDataed",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            if(res.data.code == 0 || res.data.code == 8888){
              Message({
                message:res.data.message,
                type:"success",
                showClose:true
              })
              resolve()
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
    // 提交退款
    postLotteryBacked(context,data){
      store.commit('setLoddingData', true)
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/postLotteryBacked",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
            if(res.data.code == 0 || res.data.code == 8888){
              Message({
                message:res.data.message,
                type:"success",
                showClose:true
              })
              resolve()
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
    // 投注列表
    getOrderList(context,data){
      // store.commit('setLoddingData', true)
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/getOrderList",
          data:qs.stringify(data)
        }).then(function(res){
          // store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setOrderList",res.data)
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
    // 查看投注订单信息
    getLotteryOrderInfo(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/getLotteryOrderInfo",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            if(res.data.code == 0 || res.data.code == 8888){
              context.commit("setLotteryOrderInfo",res.data);

              resolve(res.data);
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
    // 修改注单信息
    updateBetInfo(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/updateBetInfo",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            if(res.data.code == 0 || res.data.code == 8888){
              Message({
                message:res.data.message,
                type:"success",
                showClose:true
              })
              resolve()
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
    // 获取彩票规则列表
    getLotteryRule(context,data){
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/getLotteryRule",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            context.commit("setLotteryRule",res.data)
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

    // 导出彩票投注列表excel表
    getBetExcel (context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Excel/betsExcel",
          data:qs.stringify(data),
        }).then(function(res){
          store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
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
        }).catch((err)=>{
          console.log('导出用户错误')
        })
      })
    },

    // 下载excel表
    downloadExcel (context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Excel/betsExcelUrl",
          data:qs.stringify(data),
        }).then(function(res){
          store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
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
        }).catch((err)=>{
          console.log('下载错误')
        })
      })
    },
    // 获取单个彩票规则
    getLotteryRuleInfo(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/getLotteryRuleInfo",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            if(res.data.code == 0 || res.data.code == 8888){
              resolve(res.data)
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
    // 修改彩票规则
    updateLotteryRule(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/updateLotteryRule",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            if(res.data.code == 0 || res.data.code == 8888){
              Message({
                message:res.data.message,
                type:"success",
                showClose:true
              })
              resolve()
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
    // 获取随机开奖号
    getRandKjNo(context,data){
      // var loding=Loading.service({ lock: true,text: '请求中...', background: 'rgba(0, 0, 0, 0.5)',});
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/getRandKjNo",
          data:qs.stringify(data)

        }).then(function(res){
          // loding.close();
          if(store.getters.getCodeState(res.data.code)){
            if(res.data.code == 0 || res.data.code == 8888){
              resolve(res.data)
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
    // 获取彩票设置
    getLotterySetting(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/getLotterySetting",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            if(res.data.code == 0 || res.data.code == 8888){
              resolve(res.data)
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
    // 修改彩票设置
    updateLotterySetting(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/updateLotterySetting",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            if(res.data.code == 0 || res.data.code == 8888){
              Message({
                message:res.data.message,
                type:"success",
                showClose:true
              })
              resolve(res.data)
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

    // 获取批量预开奖号码
    getBatchKJNo(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/getBatchKJNo",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            if(res.data.code == 0 || res.data.code == 8888){
              resolve(res.data)
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
// 提交批量预开奖
    addBatchKJNo(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/addBatchKJNo",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            if(res.data.code == 0 || res.data.code == 8888){
              Message({
                message:res.data.message,
                type:"success",
                showClose:true
              })
              resolve(res.data)
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
    // 获取盈亏详情【第2层】
    getLotteryProfitAnalysisDetail(context,data){
      return new Promise((resolve,reject)=>{
        store.commit('setLoddingData', true)
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/getLotteryProfitAnalysisDetail",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            store.commit('setLoddingData', false)
            if(res.data.code == 0 || res.data.code == 8888){
              context.commit("setLotteryProfitAnalysisDetail",res.data)
              resolve()
            }
            if(res.data.code == 2){
              Message({
                message:res.data.message,
                type:"warning",
                showClose:true
              })
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
    // 获取个人各玩法盈亏详情【第3层】
    getLotteryProfitAnalysisDetailFromUid(context,data){
      return new Promise((resolve,reject)=>{
        store.commit('setLoddingData', true)
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/getLotteryProfitAnalysisDetailFromUid",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            store.commit('setLoddingData', false)
            // if(res.data.code == 0 || res.data.code == 8888){
              context.commit("setLotteryProfitAnalysisDetailFromUid",res.data)
              resolve()
            // }
            // if(res.data.code == 2){
            //   Message({
            //     message:res.data.message,
            //     type:"warning",
            //     showClose:true
            //   })
            // }
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
    // 获取个人单玩法盈亏详情【第4层】
    getLotteryPlayedPAsDetailFromUid(context,data){
      return new Promise((resolve,reject)=>{
        store.commit('setLoddingData', true)
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/getLotteryPlayedPAsDetailFromUid",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            store.commit('setLoddingData', false)
            // if(res.data.code == 0 || res.data.code == 8888){
              context.commit("setLotteryPlayedPAsDetailFromUid",res.data)
              resolve()
            // }
            // if(res.data.code == 2){
            //   Message({
            //     message:res.data.message,
            //     type:"warning",
            //     showClose:true
            //   })
            // }
            // console.log(res.data)
            // return true;
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
// 返水账单
    getFanShuiList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/fanShuiList",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            context.commit("setFanShuiList",res.data)
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
    // 系统彩盈亏概况
    getProfitList(context,data){
      // return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/K3Survey",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            context.commit("setProfitList",res.data)
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
      // })
    },
    LhcStatisticsList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/TypeStatistics",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            context.commit("setStatistics",res.data)
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
    //获取彩种列表
    getLotteryLHC(context,data) {
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/getLotteryLHC",
          data:qs.stringify(data)
        }).then(function(res){
          if(res.data.code == 0) {
            context.commit("setLotteryLHC",res.data.data)
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

    // 预开奖列表
    getKjBeforeList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/kjbefore_list",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            context.commit("setKjBeforeList",res.data)
            return true;
          }else {
            return false;
          }

        })
      })
    },
    // 预开奖详情
    getKjDetailList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/kjbefore_user_info",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            context.commit("setKjDetailList",res.data)
            return true;
          }else {
            return false;
          }

        })
      })
    },


    // 六合彩统计数据第二层
    getTypeStatisticsInfo(context,data){
      return new Promise((resolve,reject)=>{
        store.commit('setLoddingData', true)
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Lottery/TypeStatisticsInfo",
          data:qs.stringify(data)

        }).then(function(res){

          if(store.getters.getCodeState(res.data.code)){
            store.commit('setLoddingData', false)
              context.commit("setTypeStatisticsInfo",res.data)
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



	},
  /*$store.getters*/
  getters:{}
}
