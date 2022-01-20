import Vue from 'vue'
import axios from '../axios'
import qs from 'qs'
import {getDate,setDate} from '../common/common'
import { Loading,Message,MessageBox} from 'element-ui';
import store from '../store'

/*
 * 公告通知
 * */
export default {
  state:{
  	annoutList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },
    chatList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },
    popupList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },
    lotteryColorList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },
    sendBoxList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },
    NoticeList:{
      message: "",
      code: null,
      data: {
        count:0,
        data: [

        ]
      }
    },
  },
  /*$store.commit*/
  mutations: {
    setLotteryColorList(state,data){
      state.lotteryColorList = data
    },
  	setAnnoutList(state,data){
      state.annoutList = data
    },
    // 聊天室
    setChatList(state,data){
      state.chatList = data
    },
    // 弹窗
    sePopupList(state,data){
      state.popupList = data
    },
    seSendboxList(state,data){
      state.sendBoxList = data
    },
    setNoticeList(state,data){
      state.NoticeList = data
    },
  },

  actions:{
    // 网站滚动公告列表
    getAnnouList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Notice/get_website_list",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          context.commit("setAnnoutList",res.data);
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
		// 新增网站滚动公告列表
    addAnnouList(context,data){
    	return new Promise((resolve,reject)=>{
	      axios({
	        method: 'post',
	        url:window.host+"/dggadmin/Notice/website_insert",
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
		// 修改网站滚动公告列表
    updataAnnouList(context,data){
    	return new Promise((resolve,reject)=>{
	      axios({
	        method: 'post',
	        url:window.host+"/dggadmin/Notice/website_update",
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
	// 删除网站滚动公告列表
    deleteAnnouList(context,data){
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
		// 聊天室公告
		getChatList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Notice/get_chat_list",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setChatList",res.data);
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
		// 新增聊天室公告
    AddChaList(context,data){
    	return new Promise((resolve,reject)=>{
	      axios({
	        method: 'post',
	        url:window.host+"/dggadmin/Notice/chat_insert",
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
		// 修改聊天室公告
    updataChaList(context,data){
    	return new Promise((resolve,reject)=>{
	      axios({
	        method: 'post',
	        url:window.host+"/dggadmin/Notice/chat_update",
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
		// 删除聊天室公告
		deleteChatList(context,data){
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
		// 弹窗公告
		getPopupList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Notice/get_popup_list",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("sePopupList",res.data);
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
		// 新增弹窗公告
    AddPopupList(context,data){
    	return new Promise((resolve,reject)=>{
	      axios({
	        method: 'post',
	        url:window.host+"/dggadmin/Notice/popup_insert",
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
		// 修改弹窗公告
    updatPopupList(context,data){
    	return new Promise((resolve,reject)=>{
	      axios({
	        method: 'post',
	        url:window.host+"/dggadmin/Notice/popup_update",
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
		// 删除弹窗公告
		deletePopupList(context,data){
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
		// 向玩家发布通知
		getSendboxList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Box/sendbox",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("seSendboxList",res.data);
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
		// 新增向玩家发布通知
    AddSendboxList(context,data){
			return new Promise((resolve,reject)=>{
				axios({
					method: 'post',
					url:window.host+"/dggadmin/Box/dowrite",
					data:qs.stringify(data)
				}).then(function(res){
					if(store.getters.getCodeState(res.data.code)){
						Message({
							message:res.data.message,
							type:"success",
							showClose:true
						})
						resolve()
						// context.dispatch('getSendboxList')
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
		// 删除向玩家发布通知
		deleteSendboxList(context,data){
			return new Promise((resolve,reject)=>{
	      axios({
	        method: 'post',
	        url:window.host+"/dggadmin/Box/senddeleteAll",
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
		// 系统通知列表
		getNoticeList(context,data){
			return new Promise((resolve,reject)=>{
				axios({
					method: 'post',
					url:window.host+"/dggadmin/Notice/layouNotices",
					data:qs.stringify(data)
				}).then(function(res){
					if(store.getters.getCodeState(res.data.code)){
						// context.commit("setNoticeList",res.data);
						// return true;
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
    // 彩种公告
    getLotteryColorList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Notice/get_color_list",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){

          context.commit("setLotteryColorList",res.data);
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
    // 新增彩种公告
    addColorInsert(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/color_insert",
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
    // 修改彩种公告
    updataColorInsert(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/color_update",
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
    // 删除彩种公告
    deleteColorNotice(context,data){
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
    // 彩种 列表
    getNoticeLotteryClassList(context,data){
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Notice/getLotteryClassList",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            if(res.data.code*1 == 8888 || res.data.code*1 == 0){
              resolve(res.data);
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

// 彩种列表
getLotteryTypeList(context,data){
  return new Promise((resolve,reject)=>{
    axios({
      method: 'post',
      url:window.host+"/dggadmin/Lottery/getLotteryTypeFromClassID",
      data:qs.stringify(data)
    }).then(function(res){
      if(store.getters.getCodeState(res.data.code)){
        if(res.data.code*1 == 8888 || res.data.code*1 == 0){
          resolve(res.data);
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

},


  /*$store.getters*/
  getters:{}
}

