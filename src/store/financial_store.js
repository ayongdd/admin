import Vue from 'vue'
import axios from '../axios'
import qs from 'qs'
import {getDate,setDate,setSession,getSession} from '../common/common'
import { Loading,Message,MessageBox} from 'element-ui';
import store from '../store'

/*财务管理*/

export default {
  state:{
  	// 第三方
  	gameAgencyList: {
  		code: null,
  		data: [],
  	},
  	// 报表查询
  	reportList: {
  		code: null,
  		data: [],
  	},
    // 第三方游戏列表
    threeGameList: {
      data: [],
    },
    // 第三方禁止用户进入 列表
    banGetInfoList: {
      data: [],
    },
    deliveryList: {
      data: [],
    },
    dataCheckProfitRank: {
      data: [],
    },
  },
  /*$store.commit*/
  mutations: {
  	setGameAgencyList (state, data) {
  		state.gameAgencyList = data
  	},
  	setReportList (state, data) {
  		state.reportList = data
  	},
    setThreeGameList (state, data) {
      state.threeGameList = data
    },
    setDeliveryDataNow (state, data) {
      state.deliveryList = data
    },
    setBanGetInfoList (state, data) {
      state.banGetInfoList = data
    },
    setCheckProfitRank (state, data) {
      state.dataCheckProfitRank = data
    }
  },

  /*$store.dispatch*/
  actions:{
  	// 第三方游戏管理
  	getGameAgencyList (context, data) {
	    axios({
	      method: 'post',
	      url:window.host+"/dggadmin/Finance/gameAgencyList",
	      data:qs.stringify(data)
	    }).then(function(res){
	      if(store.getters.getCodeState(res.data.code)){
	        context.commit("setGameAgencyList",res.data);
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
  	// 修改三方服务状态
  	updateAgencyEnable (context, data) {
  		return new Promise((resolve, reject) => {
  			axios({
  			  method: 'post',
  			  url:window.host+"/dggadmin/Finance/agencyEnable",
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
  	// 报表查询（项目汇总）
  	getReportList (context, data) {
	    axios({
	      method: 'post',
	      url:window.host+"/dggadmin/Finance/ReportList",
	      data:qs.stringify(data)
	    }).then(function(res){
	      if(store.getters.getCodeState(res.data.code)){
	        context.commit("setReportList",res.data);
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
    // 第三方游戏列表
    getThreeGameList (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Finance/gameList",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setThreeGameList",res.data);
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
    // 新:报表查询
    getDeliveryDataNow (context, data) {
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Finance/deliveryDataNow",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setDeliveryDataNow",res.data);
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
    // 第三方转换额度
    changeGamePrice (context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Finance/changeBySelf",
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
    // 第三方禁止用户进入 列表
    getBanGetInfoList (context, data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chess/banGetIntoList",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setBanGetInfoList",res.data);
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
    // 第三方转换额度
    addBanUserAction (context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Chess/banUserGetInto",
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
    // 第三方转换额度
    delCancelBanUser (context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Chess/cancelBanUser",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            resolve(res)
            return true;
          }else {
            resolve()
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
    // 第三方是否禁止测试号
    updateGameUserTypes (context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Chess/is_ban",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            resolve(res)
            return true;
          }else {
            resolve()
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
    // 修改系统比例
    editProportion(context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/finance/editProportion",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            resolve(res)
            return true;
          }else {
            resolve()
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
    // 修改排序
    editGameSort(context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Finance/set_agency_sore",
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data:data,
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
    // 查询指定月份报表
    getMonthlyReport(context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Finance/monthlyReport",
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
        })
      })
    },
    // 拉取游戏数据
    getGameDetails(context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Finance/getDetails",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
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
    // 报表彩种盈亏分析
    getkjbeforeinfo(context, data) {
      store.commit('setLoddingData', true)
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Finance/kjbeforeinfo",
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
        })
      })
    },
    // 用户系统彩盈亏排行
    getCheckProfitRank(context, data) {
      store.commit('setLoddingData', true)
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Finance/datacheckProfitRank",
        data:qs.stringify(data)
      }).then(function(res){
        store.commit('setLoddingData', false)
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setCheckProfitRank",res.data);
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

  // 异常检查
  getCheckDate(context, data) {
    store.commit('setLoddingData', true)
    axios({
      method: 'post',
      url:window.host+"/dggadmin/Finance/dataCheckDate",
      data:qs.stringify(data)
    }).then(function(res){
      store.commit('setLoddingData', false)
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




  },
}
