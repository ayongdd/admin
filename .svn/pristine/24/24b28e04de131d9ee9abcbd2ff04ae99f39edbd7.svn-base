import Vue from 'vue'
import axios from '../axios'
import qs from 'qs'
import {getDate,setDate} from '../common/common'
import { Loading,Message,MessageBox} from 'element-ui';
import store from '../store'

/*
* 优惠活动
* */
export default {
  state:{
    specialOffter: {
      code: null,
      data: {
        data: {},
      },
    },
    envelopesCountList:{
      message:"",
      code: null,
      data: {
        count:0,
        data: [],
      }
    },
    envelopesGetList:{
      message:"",
      code: null,
      data: {
        count:0,
        data: [],
      }
    },
    dataRawardList:{
      message:"",
      code: null,
      data: {
        count:0,
        data: [],
      }
    },
    datatDailyReward:{
      message:"",
      code: null,
      data: {
        count:0,
        data: [],
      }
    },
  },
  /*$store.commit*/
  mutations: {
    setSpecialOffter (state, data) {
      state.specialOffter = data
    },
    setEnvelopesCount(state, data){
      state.envelopesCountList = data
    },
    setEnvelopesGet(state, data){
      state.envelopesGetList = data
    },
    setRawardList(state, data){
      state.dataRawardList = data
    },
    setDailyReward(state, data){
      state.datatDailyReward = data
    },
  },
  /*$store.dispatch*/
  actions:{
    //  获取配置参数说明和接口
    getSpecialOffter(context,data){
      return new Promise((resolve, reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Activity/get_info",
          data:qs.stringify(data)

        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setSpecialOffter",res.data);
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
    //  注册赠送
    setSpecialZczs(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Activity/zczs",
        data:qs.stringify(data)

      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          Message({
            message:res.data.message,
            type:"success",
            showClose:true
          })
          context.dispatch("getSpecialOffter", {zsClass:'zczs'});
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
    //  充值赠送
    setSpecialCzzs(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Activity/czzs",
        data:qs.stringify(data)

      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          Message({
            message:res.data.message,
            type:"success",
            showClose:true
          })
          context.dispatch("getSpecialOffter", {zsClass:'czzs'});
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
    //  扫码反水
    setSpecialMrfs(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Activity/mrfs",
        data:qs.stringify(data)

      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          Message({
            message:res.data.message,
            type:"success",
            showClose:true
          })
          context.dispatch("getSpecialOffter", {zsClass:'mrfs'});
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
    //  首次登录App增送
    huoDongBindApp(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Activity/huoDongBindApp",
        data:qs.stringify(data)

      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          Message({
            message:res.data.message,
            type:"success",
            showClose:true
          })
          context.dispatch("getSpecialOffter", {zsClass:'huoDongBindApp'});
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
    //  首次绑卡增送
    huoDongBindBank(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Activity/huoDongBindBank",
        data:qs.stringify(data)

      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          Message({
            message:res.data.message,
            type:"success",
            showClose:true
          })
          context.dispatch("getSpecialOffter", {zsClass:'huoDongBindBank'});
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
    //  红包活动配置
    setEnvelopes(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Activity/setEnvelopes",
          data:qs.stringify(data)
  
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            // context.dispatch("getSpecialOffter", {zsClass:'envelopes'});
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
    //  获取红包次数
    getEnvelopesCount(context,data){
      return new Promise((resolve, reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Activity/getEnvelopesCount",
          data:qs.stringify(data)

        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setEnvelopesCount",res.data)
            if(res.data.code == 0 || res.data.code == 8888){
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
    //  获取红包次数
    setEnvelopesMemberCount(context,data){
      return new Promise((resolve, reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Activity/setEnvelopesMemberCount",
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
    //  获取红包领取记录：
    getEnvelopesGet(context,data){
      return new Promise((resolve, reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Activity/getEnvelopesGet",
          data:qs.stringify(data)

        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setEnvelopesGet",res.data)
            if(res.data.code == 0 || res.data.code == 8888){
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
    //  升级奖励设置
    setRewardData(context,data){
      return new Promise((resolve, reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Activity/setReward",
          data:qs.stringify(data)

        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            if(res.data.code == 0 || res.data.code == 8888){
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
    //  开启升级奖励
    setRewardStatus(context,data){
      return new Promise((resolve, reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Activity/setRewardStatus",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            if(res.data.code == 0 || res.data.code == 8888){
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

    //  获取升级奖励公告
    getRewardNotice(context,data){
      return new Promise((resolve, reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Activity/getRewardNotice",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
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
    //  修改升级奖励公告
    editRewardNotice(context,data){
      return new Promise((resolve, reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Activity/editRawardNotice",
          // data:qs.stringify(data)
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
            if(res.data.code == 0 || res.data.code == 8888){
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
    //  升级奖励发放记录
    getRawardList(context,data){
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Activity/getRawardList",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit('setRawardList',res.data)
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

    //  获取每日加奖比例
    getDailyReward(context,data){
      return new Promise((resolve, reject)=>{
        store.commit('setLoddingData', true)
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Activity/getDailyReward",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          store.commit('setLoddingData', false)
          context.commit('setDailyReward',res.data)
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

    //  修改每日加奖设置
    editDailyRewardSet(context,data){
      return new Promise((resolve, reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Activity/DailyRewardSetting",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            if(res.data.code == 0 || res.data.code == 8888){
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
    //  开启每日加奖
    switchDailyReward(context,data){
      return new Promise((resolve, reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Activity/setDailyReward",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            if(res.data.code == 0 || res.data.code == 8888){
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





	},
  /*$store.getters*/
  getters:{}
}
