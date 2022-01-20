import Vue from 'vue'
import axios from '../axios'
import qs from 'qs'
import {getDate,setDate} from '../common/common'
import { Loading,Message,MessageBox} from 'element-ui';
import store from '../store'

/*
* 网站设置
* */
export default {
  state:{
  	// 银行设置
  	bankSetList: {
  		code: null,
  		data: {
  			data: [],
  		}
  	},
    getWxList: {
      code: null,
      data: {
        data: [],
      }
    },
    activitiesList: {
      code: null,
      data: {
        data: [],
      }
    },
    // 获取二维码
    dataQcodeList: {
      code: null,
      data: {
        data: [],
      }
    },
    // 轮播列表
    dataSowingList: {
      code: null,
      data: {
        data: [],
      }
    },
    // 对联列表
    dataCoupletsList: {
      code: null,
      data: {
        data: [],
      }
    },
    // 获取等级
    dataLevelList: {
      code: null,
      data: {
        data: [],
      }
    },
    // 注册自定义
    dataParamsSetting: {
      code: null,
      data: {
        data: [],
      }
    },
    // 网站设置
    dataWebSetUp: {
      code: null,
      data: {
        data: [],
      }
    },
    dataHelpList: {
      code: null,
      data: {
        data: [],
      }
    },
    dataLawList: {
      code: null,
      data: {
        data: [],
      }
    },
    dataAdvanceList: {
      code: null,
      data: {
        data: [],
      }
    },
    exchangeRateType:[],
  },
  /*$store.commit*/
  mutations: {
    setExchangeRateType(state,data) {
      state.exchangeRateType = data || [];
    },
  	// 银行设置
  	setBankSetList (state, data) {
  		state.bankSetList = data
  	},
    setGetwxList(state, data) {
      state.getWxList = data
    },
    // 优惠活动
    setActivitiesList(state, data) {
      state.activitiesList = data
    },
    // 获取二维码
    setQcodeList(state, data) {
      state.dataQcodeList = data
    },
    // 轮播列表
    setSowingList(state, data) {
      state.dataSowingList = data
    },
    // 对联列表
    setCoupletsList(state, data) {
      state.dataCoupletsList = data
    },
    // 获取等级
    setLevelList(state, data) {
      state.dataLevelList = data
    },
    // 注册自定义
    setParamsSetting(state, data) {
      state.dataParamsSetting = data
    },
    // 网站设置
    setWebSetUp(state, data) {
      state.dataWebSetUp = data
    },
    // 帮助中心
    setHelpList(state, data) {
      state.dataHelpList = data
    },
    setLawList(state, data) {
      state.dataLawList = data
    },
    setAdvanceList(state, data) {
      state.dataAdvanceList = data
    },
  },
  /*$store.dispatch*/
  actions:{
  	// 银行设置
  	getBankSetList (context, data) {
      return new Promise((resolve,reject)=>{
  	    axios({
  	      method: 'post',
  	      url:window.host+"/dggadmin/Website/sysbanklist",
  	      data:qs.stringify(data)
  	    }).then(function(res){
  	      if(store.getters.getCodeState(res.data.code)){
            if(res.data.data){
              resolve(res.data.data)
            };
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
    // 银行设置开关
    upBankSetSwitch(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/switchBankIsDelete",
          data:qs.stringify(data)
        }).then(function(res){
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
    // 银行设置新增修改
    updateBanklist(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/updateBanklist",
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data:data,
        }).then(function(res){
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
// 微信配置
    getGetwx(context,data){
      store.commit('setLoddingData', true)
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/getwx",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
            if(res.data.data){
              resolve(res.data.data)
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
// 修改配置
    updateGetwx(context,data){
      store.commit('setLoddingData', true)
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/updateSettings",
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
// 优惠活动列表
    getActivitiesList(context,data){

      // var loding=Loading.service({
      //   // target:"#app",
      //   text: '操作进行....',
      //   background: 'rgba(0, 0, 0, 0.2)',
      //   spinner: 'el-icon-loading',
      // });

        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/get_notice_list",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setActivitiesList",res.data);
            return true
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
    // 插入优惠活动
    addActivities(context,data){
      return new Promise((resolve,reject)=>{

        var loding=Loading.service({
          // target:"#app",
          text: window.App.$L.t('member.info133'),
          background: 'rgba(0, 0, 0, 0.2)',
          // spinner: 'el-icon-loading',
        });
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/notice_insert",
          headers: {
            "Content-Type": "multipart/form-data"
          },
          data:data,
        }).then(function(res){
          loding.close();

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

// 修改优惠活动
    updateActivities(context,data){
      return new Promise((resolve,reject)=>{
        var loding=Loading.service({
          // target:"#app",
          text: window.App.$L.t('store.info4'),
          background: 'rgba(0, 0, 0, 0.2)',
          // spinner: 'el-icon-loading',
          // customClass:"BetaLoadingClass"
        });

        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/notice_update",
          headers: {
            "Content-Type": "multipart/form-data"
          },
          data:data,
        }).then(function(res){
          loding.close();

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
// 删除优惠活动
    deleteActivities(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/notice_delete",
          data:qs.stringify(data)
        }).then(function(res){
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
// 获取二维码
    getQcodeList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/get_img",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            // context.commit("setQcodeList",res.data);
            if(res.data.data){
              resolve(res.data.data)
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
// 二维码插入和修改
    addQcode(context,data){
      var loding=Loading.service({
        // target:"#app",
        text: window.App.$L.t('store.info4'),
        background: 'rgba(0, 0, 0, 0.2)',
        // spinner: 'el-icon-loading',
        // customClass:"BetaLoadingClass"
      });
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/codeImg",
          headers: {
            "Content-Type": "multipart/form-data"
          },
          data:data
        }).then(function(res){
          loding.close()
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
// 轮播列表
getSowingList(context,data){
  return new Promise((resolve,reject)=>{
    axios({
      method: 'post',
      url:window.host+"/dggadmin/Notice/get_sowing_list",
      data:qs.stringify(data)
    }).then(function(res){
      if(store.getters.getCodeState(res.data.code)){
        context.commit("setSowingList",res.data);
        // return true
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
    // 轮播插入
    addSowingList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/sowing_insert",
          headers: {
            "Content-Type": "multipart/form-data"
          },
          data:data,
        }).then(function(res){
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
    // 轮播修改
    updateSowingList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/sowing_update",
          headers: {
            "Content-Type": "multipart/form-data"
          },
          data:data,
        }).then(function(res){
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
    // 轮播删除
    deleteSowingList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/notice_delete",
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
// 对联列表
    getCoupletsList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Notice/get_pcdd",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setCoupletsList",res.data);
          return true
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
    // 对联插入
    addCoupletsList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/pcdd_insert",
          headers: {
            "Content-Type": "multipart/form-data"
          },
          data:data,
        }).then(function(res){
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
    // 对联修改
    updateCoupletsList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/pcdd_update",
          headers: {
            "Content-Type": "multipart/form-data"
          },
          data:data,
        }).then(function(res){
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
// 充值提现
    updateSettings(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/updateSettings",
          data:qs.stringify(data)
        }).then(function(res){
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
// 收款配置
    getReceBankSetList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/bank",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            if(res.data.data){
              resolve(res.data.data)
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
    //取款手续费详情
    cashHandlingFeeDetail(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Recharge/cashHandlingFeeDetail",
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
// 新增修改收款
    addReceBankSetList(context,data){
      return new Promise((resolve,reject)=>{
          axios({
            method: 'post',
            url:window.host+"/dggadmin/Website/updateBank",
            data:qs.stringify(data)
          }).then(function(res){
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
    // 新增修改收款图片上传
    addReceBankSetimg(context,data){
      return new Promise((resolve,reject)=>{
        axios({
            method: 'post',
            url:window.host+"/dggadmin/Website/updateBank",
            headers: {
              "Content-Type": "multipart/form-data"
            },
            data:data,
          }).then(function(res){
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




// 删除收款
    deleteReceBankSetList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/deleteSysBank",
          data:qs.stringify(data)
        }).then(function(res){
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
// 收款类型
    receBankType(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/getBankClass",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            if(res.data.data){
              resolve(res.data.data)
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
// 收款类型修改
    updateReceBankType(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/updatePayType",
          data:qs.stringify(data)
        }).then(function(res){
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
// 收款类型修改图片
    updateReceBankImg(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/payUpdateImg",
          contentType: false,
          processData: false,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: data
          // data:qs.stringify(data)
        }).then(function(res){
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
// 收款列表状态修改
    updateReceBankStatus(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/switchBankStatus",
          data:qs.stringify(data)
        }).then(function(res){
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
// 获取等级列表
    getLevelList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Notice/get_sowing_list",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setLevelList",res.data);
          return true
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
    // 注册自定义
    getParamsSetting(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/paramsSetting",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            // context.commit("setParamsSetting",res.data);
            // return true
            if(res.data.data){
              resolve(res.data.data)
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
// 修改注册自定义
    updateParamsSetting(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/addMemberParams",
          data:qs.stringify(data)
        }).then(function(res){
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
// 修改代理是否显示
    updateDlhow(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/dlshow",
          data:qs.stringify(data)
        }).then(function(res){
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
// 网站设置
    getWebSetUp(context,data){
      store.commit('setLoddingData', true)
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/getSetUp",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
            // context.commit("setWebSetUp",res.data);
            // return true
            if(res.data.data){
              resolve(res.data.data)
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
// 网站修改设置
    updateWebSetUp(context,data){
      store.commit('setLoddingData', true)
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/updateSettings",
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

// 充值提现
    getCashSetUp(context,data){
      store.commit('setLoddingData', true)
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/getCashSetUp",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
            if(res.data.data){
              resolve(res.data.data)
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
// 修改配置充值提现
    updateCashSetUp(context,data){
      store.commit('setLoddingData', true)
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/updateSettings",
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
// 帮助中心
    getHelpList(context,data){
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/get_help_list",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
           context.commit("setHelpList",res.data);
            return true
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
  // 新增帮助中心
    addHelpList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/help_insert",
          data:qs.stringify(data)
        }).then(function(res){
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
  // 修改帮助中心
    updateHelpList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/help_update",
          data:qs.stringify(data)
        }).then(function(res){
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
    // 法律声明
    getLawList(context,data){
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/get_law_list",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
           context.commit("setLawList",res.data);
            return true
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
    // 新增法律声明
    addLawList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/law_insert",
          data:qs.stringify(data)
        }).then(function(res){
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
    // 修改法律声明
    updateLawList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/law_update",
          data:qs.stringify(data)
        }).then(function(res){
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
// 获取支付方式
    getBankPayList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/getbanklist",
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

    getIpFirewall(context,data) {
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/getIpFirewall",
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

// 获取等级
    getLevelPayList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/getMemberLevel",
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
    // 新增收款类型
    addPayTypeList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/addPayType",
          headers: {
            "Content-Type": "multipart/form-data"
          },
          data:data,
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

    // 删除收款类型
    delPayType(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/delPayType",
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

    // 代付列表
    getAdvanceList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/getAdvance",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setAdvanceList",res.data);
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
    // 修改新增代付
    getInsertAdvanceList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/insertAdvance",
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
    //币种数据
    getExchangeRateType(context,data) {
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/getExchangeRateType",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit('setExchangeRateType',res.data.data)
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
    // 删除代付列表
    deleteAdvanceList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Website/deleteAdvance",
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
  getters:{}
}

