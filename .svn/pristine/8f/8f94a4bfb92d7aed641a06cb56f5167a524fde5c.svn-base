import Vue from 'vue'
import axios from '../axios'
import qs from 'qs'
import {getDate,setDate,setSession,getSession} from '../common/common'
import { Loading,Message,MessageBox} from 'element-ui';
import store from '../store'

/*报表*/

export default {
  state:{
  	// 用户盈亏排行
  	dataMemberProfitList: {
  		code: null,
  		data: [],
    },
    // 第三方报表
    dataAgencyCountList: {
  		code: null,
  		data: [],
    },
    dataAgencyList: {
  		code: null,
  		data: [],
    },
    // 详情
    agencyOrderList: {
    	code: null,
    	data: {}
    }
  },
  /*$store.commit*/
  mutations: {
  	setMemberProfitList (state, data) {
  		state.dataMemberProfitList = data
    },
    setAgencyCountList (state, data) {
  		state.dataAgencyCountList = data
    },
    setAgencyList (state, data) {
  		state.dataAgencyList = data
    },
    setAgencyOrderList (state, data) {
    	state.agencyOrderList = data
    }
  },

  /*$store.dispatch*/
  actions:{
  	// 用户盈亏排行
  	getMemberProfitList (context, data) {
	    axios({
	      method: 'post',
	      url:window.host+"/dggadmin/Profit/memberProfit",
	      data:qs.stringify(data)
	    }).then(function(res){
	      if(store.getters.getCodeState(res.data.code)){
	        context.commit("setMemberProfitList",res.data);
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
    // 第三方报表
    getAgencyCountList (context, data) {
	    axios({
	      method: 'post',
	      url:window.host+"/dggadmin/Profit/agencyCountData",
	      data:qs.stringify(data)
	    }).then(function(res){
	      if(store.getters.getCodeState(res.data.code)){
	        context.commit("setAgencyCountList",res.data);
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
    // 第三方报表栏目
    getAgencyList (context, data) {
	    axios({
	      method: 'post',
	      url:window.host+"/dggadmin/Profit/agencyList",
	      data:qs.stringify(data)
	    }).then(function(res){
	      if(store.getters.getCodeState(res.data.code)){
	        context.commit("setAgencyList",res.data);
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
    // 第三方报表 详情
    getAgencyOrderList(context, data) {
	    axios({
	      method: 'post',
	      url:window.host+"/dggadmin/Profit/showUserOrder",
	      data:qs.stringify(data)
	    }).then(function(res){
	      if(store.getters.getCodeState(res.data.code)){
	        context.commit("setAgencyOrderList",res.data);
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