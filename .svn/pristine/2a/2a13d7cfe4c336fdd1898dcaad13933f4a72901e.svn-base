import Vue from 'vue'
import axios from '../axios'
import qs from 'qs'
import {getDate,setDate} from '../common/common'
import { Loading,Message,MessageBox} from 'element-ui';
import store from '../store'

/*
 * 网站安全设置
 * */
export default {
  state:{
  	systemSafeCode: {
  		data: {}
  	},
  	systemLoginIP: {
  		data: {}
  	},
  	systemCodeMode: {
  		data: {}
  	},
  	systemCodeSecret: {
  		data: {}
  	},
  },
  /*$store.commit*/
  mutations: {
  	setSystemSafeCode (state, data) {
  		state.systemSafeCode = data
  	},
  	setSystemLoginIP (state, data) {
  		state.systemLoginIP = data
  	},
  	setSystemCodeMode (state, data) {
  		state.systemCodeMode = data
  	},
  	setSystemCodeSecret (state, data) {
  		state.systemCodeSecret = data
  	}
  },

  /*$store.dispatch*/
  actions:{
  	// 获取网站安全码
  	getSystemSafeCode (context, data) {
	    axios({
	      method: 'post',
	      url:window.host+"/dggadmin/System/getSystemSafeCode",
	      data:qs.stringify(data)
	    }).then(function(res){
	      if(store.getters.getCodeState(res.data.code)){
	        context.commit("setSystemSafeCode",res.data);
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
  	// 安全码设置
  	systemSafeSetting (context, data) {
  		store.commit('setLoddingData', true)
	    axios({
	      method: 'post',
	      url:window.host+"/dggadmin/System/systemSafeSetting",
	      data:qs.stringify(data)
	    }).then(function(res){
	    	store.commit('setLoddingData', false)
	      if(store.getters.getCodeState(res.data.code)){
	        context.dispatch("getSystemSafeCode");
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
  	// 获取后台限制IP
  	getSystemLoginIP (context, data) {
	    axios({
	      method: 'post',
	      url:window.host+"/dggadmin/System/getSystemLoginIP",
	      data:qs.stringify(data)
	    }).then(function(res){
	      if(store.getters.getCodeState(res.data.code)){
	        context.commit("setSystemLoginIP",res.data);
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
  	// 获取后台验证码模式
  	getSystemCodeMode (context, data) {
	    axios({
	      method: 'post',
	      url:window.host+"/dggadmin/System/getSystemVerifyCodeMode",
	      data:qs.stringify(data)
	    }).then(function(res){
	      if(store.getters.getCodeState(res.data.code)){
	        context.commit("setSystemCodeMode",res.data);
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
  	// 获取DGG验证码二维码和秘钥
  	getSystemVerifyCodeSecret (context, data) {
  	  return new Promise((resolve, reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/System/getSystemVerifyCodeSecret",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            resolve(res.data)
            context.commit("setSystemCodeSecret",res.data);
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
  	// 验证DGG安全盾验证码
  	VerifyDGGsafeCode (context, data) {
  		store.commit('setLoddingData', true)
	    axios({
	      method: 'post',
	      url:window.host+"/dggadmin/System/VerifyDGGsafeCode",
	      data:qs.stringify(data)
	    }).then(function(res){
	    	store.commit('setLoddingData', false)
	      if(store.getters.getCodeState(res.data.code)){
	        context.dispatch("getSystemCodeMode");
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
  	// 提交修改验证码模式
  	setSystemVerifyMode (context, data) {
  		store.commit('setLoddingData', true)
	    axios({
	      method: 'post',
	      url:window.host+"/dggadmin/System/setSystemVerifyMode",
	      data:qs.stringify(data)
	    }).then(function(res){
	    	store.commit('setLoddingData', false)
	      if(store.getters.getCodeState(res.data.code)){
	        context.dispatch("getSystemCodeMode");
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


  /*$store.getters*/
  getters:{}
}

