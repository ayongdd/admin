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
  	chatUserList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },
    groupChatList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },

    groupChatListNew:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },
    noGroupList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },
    searchUserList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },
    chatSetData:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },
    evelopesList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },
    receiveList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },
    chatintegralList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },
    chatGroupSeach:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },
    computerRedSumList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },
    dataSignList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    }
  },
  /*$store.commit*/
  mutations: {
		setChatUserList(state,data){
      state.chatUserList = data
    },
    setGroupChatList(state,data){
      state.groupChatList = data
    },
    setGroupChatListNew(state,data){
      state.groupChatListNew = data
    },
    setNoGroupList(state,data){
      state.noGroupList = data
    },
    setSearchUserList(state,data){
      state.searchUserList = data
    },
    setChatSet(state,data){
      state.chatSetData = data
    },
    setEnvelopesList(state,data){
      state.evelopesList = data
    },
    setReceiveList(state,data){
      state.receiveList = data
    },
    setChatintegralList(state,data){
      state.chatintegralList = data
    },
    settGroupSeach(state,data){
      state.chatGroupSeach = data
    },
    setComputerList(state,data){
      state.computerRedSumList = data
    },
    setSignList(state,data){
      state.dataSignList = data
    }
  },

  /*$store.dispatch*/
  actions:{
  	// 用户管理
    getChatUserList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chat/groupUsers",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setChatUserList",res.data);
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
    // 设置群组管理员
    updateGroupAdmin(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Chat/updateGroupAdmin",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
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
    // 获取群组
    getGroupSeach(context,data){
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Chat/get_chat_group",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("settGroupSeach",res.data);
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
    // 拉黑。禁言
    operationAction(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Chat/operation",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
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
// 聊天室群组列表
    getGroupChatList(context,data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chat/chat_group",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setGroupChatList",res.data);
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
    // 聊天室群组列表
    getGroupChatListNew(context,data) {
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chat/get_chat_group",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setGroupChatListNew",res.data);
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

// 添加聊天室群组
    addGroupChatList(context,data){
    	return new Promise((resolve,reject)=>{
	      axios({
	        method: 'post',
	        url:window.host+"/dggadmin/Chat/add_room",
	        data:qs.stringify(data)
	      }).then(function(res){
	        if(store.getters.getCodeState(res.data.code)){
	        	Message({
	            message:res.data.message,
	            type:"success",
	            showClose:true
	          })
	        	resolve();
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
// 修改聊天室群组
    updaGroupChatList(context,data){
    	return new Promise((resolve,reject)=>{
	      axios({
	        method: 'post',
	        url:window.host+"/dggadmin/Chat/update_room",
	        data:qs.stringify(data)
	      }).then(function(res){
	        if(store.getters.getCodeState(res.data.code)){
	        	Message({
	            message:res.data.message,
	            type:"success",
	            showClose:true
	          })
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
// 获取不是当前群组的用户
		getNoGroupList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Chat/AllRoomUser",
          data:qs.stringify(data)
        }).then(function(res){
          // if(store.getters.getCodeState(res.data.code)){
            // context.commit("setNoGroupList",res.data);
            // return true;
            resolve(res.data);
          // }else {
          //   Message({
          //     message:res.data.message,
          //     type:"error",
          //     showClose:true
          //   })
          //   return false;
          // }
        })
      })
		},
    // 搜索用户
    searchUserList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Chat/searchChatRoom",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            // context.commit("setSearchUserList",res.data);
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
// 添加群组用户
    addUserRoom(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Chat/addUsers",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
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
    //转移群组
    transferUsers(context,data) {
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Chat/transferUsers",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
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
// 聊天室配置
    gerChatSet(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Chat/get_chat",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
           context.commit("setChatSet",res.data);
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
    // 修改聊天室配置
    updateUserRoom(context,data){
      store.commit('setLoddingData', true)
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Chat/update_chat",
          data:qs.stringify(data)
        }).then(function(res){
          store.commit('setLoddingData', false)
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
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
      // 删除聊天室群组
      deleteUserRoom(context,data){
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Chat/deleteChatGroup",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
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
  // 红包记录列表
    envelopesList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Envelopes/index",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setEnvelopesList",res.data);
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
// 领取记录
      getReceiveList(context,data){
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Envelopes/receive",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setReceiveList",res.data);
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
// 手动退回红包
      returnList(context,data){
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Envelopes/returnAmount",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
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


      // 聊天室签到积分
      returnAmountList(context,data){
        return new Promise((resolve,reject)=>{
          axios({
            method: 'post',
            url:window.host+"/dggadmin/Chat/integral",
            data:qs.stringify(data)
          }).then(function(res){
            if(store.getters.getCodeState(res.data.code)){
             // context.commit("setChatintegralList",res.data);
             resolve(res.data.data);
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
        })
      },
    // 提交签到设置
      returnsignInList(context,data){
          return new Promise((resolve,reject)=>{
            axios({
              method: 'post',
              url:window.host+"/dggadmin/Chat/signIn",
              data:qs.stringify(data)
            }).then(function(res){
              if(store.getters.getCodeState(res.data.code)){
               Message({
                  message:res.data.message,
                  type:"success",
                  showClose:true
                })
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
          })
        },
    // 电脑抢红包统计列表：
    getComputerList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Envelopes/getComputer",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setComputerList",res.data);
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
// 全组禁言解禁
    getChatGroupDisable(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Chat/chatGroupDisable",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
           Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            resolve()
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
      })
    },
    // 同步群组信息
    getSynchronization(context,data){
        axios({
          method: 'post',
          url:window.host+"/dggadmin/chat/synchronization",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
           Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
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

    // 签到记录
    getSignLists(context,data){
      // return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/chat/signLists",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setSignList",res.data)
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
      // })
    },
    // 删除频繁操作限制
    delFrequently(context,data){
        axios({
          method: 'post',
          url:window.host+"/dggadmin/chat/delFrequently",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            Message({
              message:res.data.message,
              type:"success",
              showClose:true
            })
            context.dispatch('getChatUserList')
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






		},
  /*$store.getters*/
  getters:{}
}

