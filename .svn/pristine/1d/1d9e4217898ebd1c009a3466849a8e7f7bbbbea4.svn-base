import Vue from 'vue'
import axios from '../axios'
import qs from 'qs'
import {getDate,setDate,setSession,getSession} from '../common/common'
import { Loading,Message,MessageBox} from 'element-ui';
import store from '../store'

/*管理人员*/

export default {
  state:{
    // 角色列表
    dataRoleList: {
      code: null,
      data: [],
    },
    // 操作日志类型
    dataTypeList: {
      code: null,
      data: [],
    },
    // 查询已有权限列表
    dataRoleAuthList: {
      code: null,
      data: [],
    },
    // 提现金额限制列表
    dataAdminAmountList: {
      code: null,
      data: [],
    },
    // 权限列表
    dataAuthList: {
      code: null,
      data: [],
    },
    // 登录日志
    dataLoginLog: {
      code: null,
      data: [],
    },
    // 管理员操作日志
    dataControlLog: {
      code: null,
      data: [],
    },
    // 管理员列表
    dataBusinessList: {
      code: null,
      data: [],
    },
    ipRouter: {
      code: null,
      data: [],
    },
    dataAllRoleList: {
      code: null,
      data: [],
    },
    useBlacklist: {
      code: null,
      data: [],
    },
    // dataAdminOptionDetail: {
    //   code: null,
    //   data: [],
    // },
  },
  /*$store.commit*/
  mutations: {
    // 角色列表
    setRoleList(state,data){
      state.dataRoleList = data
    },
    // 操作日志类型
    setTypeList(state,data){
      state.dataTypeList = data
    },
    // 查询已有权限列表
    setRoleAuthList(state,data){
      state.dataRoleAuthList = data
    },
    // 提现金额限制列表
    setAdminAmountList(state,data){
      state.dataAdminAmountList = data
    },
    // 权限列表
    setAuthList(state, data){
      let list = data.data
      for (let k in list) {
        list[k].active = true
        for (let t in list[k].list) {
          list[k].list[t].checked = false
        }
      }
      state.dataAuthList = data
    },
    setIpRouter(state,data){
      state.ipRouter = data
    },
    // 登录日志
    setLoginLog(state,data){
      state.dataLoginLog = data
    },
    // 管理员操作日志
    setControlLog(state,data){
      state.dataControlLog = data
    },
    // 管理员列表
    setBusinessList(state,data){
      state.dataBusinessList = data
    },
    setAllRoleList(state,data){
      state.dataAllRoleList = data
    },
    // setAdminOptionDetail(state,data){
    //   state.dataAdminOptionDetail = data
    // },
    setUseBlacklist(state,data){
      state.useBlacklist = data
    },
  },

  /*$store.dispatch*/
  actions:{
    // 角色列表
    getRoleList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Manage/rolelist",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          context.commit("setRoleList",res.data);
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
    // 修改角色
    editRoleList(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Manage/editRole",
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
    // 操作日志类型
    getTypeList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Manage/typelist",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setTypeList",res.data);
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
    // 修改金额限制
    editAmount(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Manage/editAmount",
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
    // 删除金额限制
    deleteAmount(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Manage/deleteAmount",
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
    // 新增金额限制
    addAmount(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Manage/addAmount",
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
// 查询已有权限列表
    getRoleAuthList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Manage/roleAuth",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setRoleAuthList",res.data);
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
// 提现金额限制列表
    getAdminAmountList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Manage/adminAmountList",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setAdminAmountList",res.data);
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
    // 删除管理员
    deleteManager(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Manage/deleteManager",
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
    // 权限列表
    getAuthList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Manage/authList",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setAuthList",res.data);
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
    // 添加管理员
    addBusiness(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Manage/addBusiness",
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
    // 添加角色
    addRole(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Manage/addRole",
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
    // 登录日志
    getLoginLog(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Manage/loginLog",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setLoginLog",res.data);
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
// 管理员操作日志
    getControlLog(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Manage/controlLog",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setControlLog",res.data);
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
    // 管理员修改密码
    updateManPassword(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Manage/updatePassword",
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
    // 管理员列表
    getBusinessList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Manage/BusinessList",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setBusinessList",res.data);
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

    // 获取所有金额等级/角色
    getAllRoleList(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Manage/getAllList",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            context.commit("setAllRoleList",res.data);
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
    // 管理员操作日志详情
    getAdminOptionDetail(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Manage/InfoType",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            // context.commit("setAdminOptionDetail",res.data);
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

    deleteRecordAction(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Member/delBadIp",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
            // context.commit("setAdminOptionDetail",res.data);
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
    // 修改管理员
    updateManInfo(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Manage/editManage",
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
    // 启用禁用角色
    setDisable(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Manage/disable",
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
    // 删除角色
    deleteRole(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Manage/deleteRole",
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
    // 管理员修改自己密码
    managerEditPassword(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Manage/editPassword",
          data:qs.stringify(data)
        }).then(function(res){
          if(store.getters.getCodeState(res.data.code)){
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
    managerBindSafeKey(context,data){
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Manage/bindSafeKey",
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

    //获得用户分组
    getUseBlacklist(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/member/getBadIpList",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setUseBlacklist",res.data);
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
//  会员IP路由
    getIpRouterAction(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Member/getIpRouter",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          // context.commit("setUserControlLog",res.data);
          // context.commit("setUserVisitLog",res.data);
          context.commit("setIpRouter",res.data);
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
  }
}
