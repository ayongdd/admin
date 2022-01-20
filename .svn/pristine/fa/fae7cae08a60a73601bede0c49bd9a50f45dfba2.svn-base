import Vue from 'vue'
import axios from '../axios'
import qs from 'qs'
import {getDate,setDate} from '../common/common'
import { Loading,Message,MessageBox} from 'element-ui';
import store from '../store'

/*
* 资金管理
* */
export default {
  state:{
  	// 手动存取款列表
  	rechargeList: {
  		code: null,
  		data: {
  			data: [],
  		}
  	},
    // 存款审核列表
    rechargeCash: {
      code: null,
      data: {
        data: [],
      }
    },
    // 已审核存款列表
    regFinishList: {
      code: null,
      data: {
        data: [],
      }
    },
    // 提款审核列表
    cashLogList: {
      code: null,
      data: {
        data: [],
      },
    },
    // 提现处理详情
    cashDetail: {
      code: null,
      data: {}
    },
    // 资金流水
    showLogList: {
      code: null,
      data: {
        data: [],
      }
    },
    // 资金流水项目列表
    actionSelect: {
      code: null,
      data:[],
    },
    // 已审核提款列表
    cashFinishList: {
      code: null,
      data: {
        data: []
      }
    },
    // 线上充值记录
    onlineRechargeList: {
      code: null,
      data: {
        data: [],
      }
    },
    // 项目汇总
    countDataList: {
      code: null,
      data: {}
    },
    // 系统赠送列表
    systemPresenter: {
      code: null,
      data: {
        data: [],
      }
    },
    // 赠送积分列表
    scoreListData: {
      code: null,
      data: {
        data: [],
      }
    },
    // 积分兑换明显
    scoreInfoList: {
      code: null,
      data: {
        data: [],
      }
    },
    // 生成充值卷列表
    couponsListData: {
      code: null,
      data: {
        data: [],
      }
    },
    // 充值卷兑换记录
    couponsChangeList: {
      code: null,
      data: {
        data: [],
      }
    },
    // 首充详情
    datafirstPunchList: {
      code: null,
      data: {
        data: [],
      }
    },
    // 综合游戏详情
    dataClassCount: {
      code: null,
      data: {
        data: [],
      }
    },
    // 综合游戏用户详情
    dataUserDetailList: {
      code: null,
      data: {
        data: [],
      }
    },
    // 合作商详情
    dataFanshuiCount: {
      code: null,
      data: {
        data: [],
      }
    },
    // 合作商用户详情
    dataFanshuiAgency: {
      code: null,
      data: {
        data: [],
      }
    },
    // 异常上下分订单列表
    dataAbnormalList: {
      code: null,
      data: {
        data:[]
      }
    },
    // 获取审核人列表
    dataSysadmin: {
      code: null,
      data: {
        data:[]
      }
    },
    // 项目汇总注册人数详情
    dataDetailsList: {
      code: null,
      data: {
        data:[]
      }
    },
  },
  /*$store.commit*/
  mutations: {
  	// 手动存取款列表
  	setRechargeList (state, data) {
  		state.rechargeList = data
  	},
    // 存款审核列表
    setRechargeCash (state, data) {
      state.rechargeCash = data
    },
    // 已审核存款列表
    setRegFinishList (state, data) {
      state.regFinishList = data
    },
    // 提款审核列表
    setCashLogList (state, data) {
      state.cashLogList = data
    },
    // 提现处理详情
    setCashDetail (state, data) {
      state.cashDetail = data
    },
    // 资金流水
    setShowLogList (state, data) {
      state.showLogList = data
    },
    // 资金流水项目列表
    setActionSelect (state, data) {
      state.actionSelect = data
    },
    // 已审核提款列表
    setCashFinishList (state, data) {
      state.cashFinishList = data
    },
    // 线上充值记录
    setOnlineRechargeList (state, data) {
      state.onlineRechargeList = data
    },
    // 项目汇总
    setCountDataList (state, data) {
      state.countDataList = data
    },
    // 系统赠送列表
    setSystemPresenter (state, data) {
      state.systemPresenter = data
    },
    // 赠送积分列表
    setScoreListData (state, data) {
      state.scoreListData = data
    },
    // 积分兑换明细
    setScoreInfoList (state, data) {
      state.scoreInfoList = data
    },
    // 生成充值卷列表
    setCouponsListData (state, data) {
      state.couponsListData = data
    },
    // 充值卷兑换记录
    setCouponsChangeList (state, data) {
      state.couponsChangeList = data
    },
    // 首充详情
     setfirstPunchList (state, data) {
      state.datafirstPunchList = data
    },
    // 项目汇总注册人数详情
    setDetailsList (state, data) {
      state.dataDetailsList = data
    },
    // 综合游戏详情
    setClassCountList (state, data) {
      state.dataClassCount = data
    },
    // 综合游戏用户详情
    setUserDetailList (state, data) {
      state.dataUserDetailList = data
    },
    // 合作商详情
    setFanshuiCount (state, data) {
      state.dataFanshuiCount = data
    },
    // 合作商用户详情
    setFanshuiAgency (state, data) {
      state.dataFanshuiAgency = data
    },
    // 异常上下分订单列表
    setAbnormalList (state, data) {
      state.dataAbnormalList = data
    },
    // 获取审核人列表
    setSysadmin (state, data) {
      state.dataSysadmin = data
    },
  },
  /*$store.dispatch*/
  actions:{
  	// 手动存取款列表
  	getRechargeList (context, data) {
	    axios({
	      method: 'post',
	      url:window.host+"/dggadmin/Recharge/rechargeList",
	      data:qs.stringify(data)
	    }).then(function(res){
	      if(store.getters.getCodeState(res.data.code)){
	        context.commit("setRechargeList",res.data);
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
    // 手动存款
    moneyRechargeAction (context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/rechargeAction",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
          resolve(res.data)
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
      })
    },
    // 手动扣款
    moneyRechargeDeduction (context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/rechargeDeduction",
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
    // 赠送彩金
    moneyCaijinAction (context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/caijinAction",
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
    // 手动洗码
    moneyXimaAction (context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/ximaAction",
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
    // 存款审核列表
    getRechargeCash (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Recharge/RechargeCash",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          if(res.data.data.count){
            res.data.data.data.forEach(function (i,index,key) {
              i.checked = !1
            })
          }
          context.commit("setRechargeCash",res.data);
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
    // 导出充值列表
    getRechargeExcel (context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Excel/RechargeExcel",
          data:qs.stringify(data)
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
          console.log('导出充值列表错误')
        })
      })
    },
    // 存款审核
    rechargeHandle (context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/rechargeHandle",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
          resolve(res.data)
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
      })
    },
    // 已审核存款列表
    RechargeFinishList (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Recharge/RechargeFinishList",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setRegFinishList",res.data);
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
    // 提现审核列表
    getCashLogList (context, data) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/cashLog",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){

            if(res.data.data.count){
              res.data.data.data.forEach(function (i,index,key) {
                i.checked = !1
              })
            }
            context.commit("setCashLogList",res.data);
            // resolve(res.data)
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
    // 审核提现
    dealWithHandle (context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/dealWith",
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

    // 提交代付
    upAdvanceList (context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/advance",
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
            return true;
          }else {
            Message({
              message:res.data.message,
              type:"error",
              showClose:true
            })
            if(res.data.code == 1 ) {
              reject()
            }
            return false;
          }
        })
      })
    },
    // 提现处理弹窗
    getCashDetail (context, data) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/cashDetail",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setCashDetail",res.data);
            resolve(res.data.data)
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
    // 解除正在审核状态
    relieveSysadmin (context, data) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/relieveSysadmin",
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
    // 资金流水
    getShowLogList (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Recharge/showlog",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setShowLogList",res.data);
          return true;
        }else {
          // 页面上已经存在一个错误提示
          Message({
            message:res.data.message,
            type:"error",
            showClose:true
          })
          return false;
        }
      })
    },
    // 获取资金流水 项目列表
    getActionSelect (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Recharge/getActionSelect",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setActionSelect",res.data);
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
    // 已审核提款列表
    getCashFinishList (context, data) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/cashFinishList",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setCashFinishList",res.data);
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

    // 导出已审核提款列表
    getCashFinishExcel (context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Excel/CashExcel",
          data:qs.stringify(data)
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
          console.log('导出提款列表错误')
        })
      })
    },

    // 导出用户数据
    getCashExcel (context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Excel/UserExcel",
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
    // 锁定提现审核
    cashLockAction (context, data) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/cashLock",
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
    // 在线充值信息列表
    getOnlineRechargeList (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Recharge/onlineRechargeList",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setOnlineRechargeList",res.data);
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
    // 导出在线充值数据
    getOnlineRechargeListExcel (context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Excel/OnlineRechargeListExcel",
          data:qs.stringify(data)
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
          console.log('导出在线充值错误')
        })
      })
    },
    // 在线充值类型列表
    getOnlineRechargeType (context, data) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/getType",
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
    // 项目汇总信息列表
    getCountDataList (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Recharge/countData",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setCountDataList",res.data);
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
    // 系统赠送列表
    getSystemPresenter (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Recharge/active_log",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setSystemPresenter",res.data);
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
    // 批量、分成赠送彩金
    batchCaijinAction (context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/batchCaijinAction",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
          // 设定弹窗公告
          if (res.data.code == 20000) {
            // console.log(res.data)
            store.commit('setCaiVisible', {visible: true, content: res.data.message})
            return false
          }
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
    // 赠送积分列表
    getScoreListData (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Recharge/scoreList",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setScoreListData",res.data);
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
    // 手动积分调整
    ximaScoretotal (context, data) {
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/ximaScoretotal",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            resolve(res.data);
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
    // 积分兑换明细
    getScoreInfoList (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Recharge/scoreChangeList",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setScoreInfoList",res.data);
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
    // 生成充值卷
    addCouponsAction (context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/addCoupons",
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
    // 生成充值卷列表
    getCouponsListData (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Recharge/couponsList",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setCouponsListData",res.data);
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
    // 充值卷兑换记录
    getCouponsChangeList (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Recharge/couponsChangeList",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setCouponsChangeList",res.data);
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
    // 汇总第三方数据
    gameInfoListAction (context, data) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Chess/gameLog",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            resolve(res.data.data)
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
    // 首充详情列表
    getfirstPunchList (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Recharge/firstPunchList",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setfirstPunchList",res.data);
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
    // 项目汇总注册人数
    getDetailsList(context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Recharge/details",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          console.log('res.data',res.data);
          context.commit("setDetailsList",res.data);
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

    // 综合游戏详情
    getClassCountList (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chess/get_class_count",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setClassCountList",res.data);
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
    // 综合游戏用户详情
    getUserDetailList (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chess/get_user_list",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setUserDetailList",res.data);
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
    //返水统计详情
    getFanshuiCount(context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chess/fanshui_count",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setFanshuiCount",res.data);
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
    // 合作商用户详情
    getFanshuiAgency(context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chess/fanshui_agency",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setFanshuiAgency",res.data);
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
    // 撤回重审
    getWithdraw(context, data) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/withdraw",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            resolve(res.data.data)
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
    // 异常上下分订单列表
    getAbnormalList(context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Recharge/abnormalList",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setAbnormalList",res.data);
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
    // 补单
    getSelOrder(context, data) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/SelOrder",
          data:qs.stringify(data)
        }).then(function(res){
          resolve(res.data.data)
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
      })
    },
// 获取审核人列表
    getSysadminList(context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Recharge/getSysadmin",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setSysadmin",res.data);
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
    // 撤回提现订单
    cashWithdraw(context, data) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/cashWithdraw",
          data:qs.stringify(data)
        }).then(function(res){
          resolve(res.data.data)
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
      })
    },
    // 检测提现订单是否被锁定
    orderLocking(context, data) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/locking",
          data:qs.stringify(data)
        }).then(function(res){
          resolve(res.data)
          if(store.getters.getCodeState(res.data.code)){
            return true;
          }else {
            return false;
          }
        })
      })
    },


  },

  /*$store.getters*/
  getters:{}
}

