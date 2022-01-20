import Vue from 'vue'
import axios from '../axios'
import qs from 'qs'
import {getDate,setDate,setSession,getSession} from '../common/common'
import { Loading,Message,MessageBox} from 'element-ui';
import store from '../store'

/*电子游戏*/
export default {
  state:{
    /*类目*/
    chessinfo:{},

    /*运营商*/
    agency:{},

    /*运营商反水配置*/
    agencyConfig:{
      info:[{fs:"",fd:""}],
      type:0,
      id:null,
    },

    /*游戏*/
    gameList:{},

    /*账单*/
    ChessgameLog:{},

    /*游戏键值对*/
    gameListKey:{},

    /*反水账*/
    waterList:{},

    // 用户返水状态列表
    backwaterList: {
      data: [],
    },
    gameDetailsUrl:'',
    // DGG系统游戏玩法列表
    datatDggGameList: {
      data: [],
    },
    dggGame_Detail: {},
  },
  /*$store.commit*/
  mutations: {
    // 顶呱呱游戏注单详情
    setDggGame_Detail (state, data) {
      state.dggGame_Detail = data
    },
    set_see_game_details(state,data){
      state.gameDetailsUrl = data
    },
    setAgency(state,data){
      state.agency=data;
    },

    setAgencyConfig(state,data){


      var temp=[];
      if(data.info && data.info!=""){
        data.info=JSON.parse(data.info)

        for(var i in data.info){
          var t={}
          t.fs=i;
          t.fd=data.info[i]
          temp.push(t);
        }
        data.info=temp;
      }else {
        data.info=[{fs:0,fd:0}];
      }

      state.agencyConfig=data;
    },

    setChessinfo(state,data){
      state.chessinfo=data;
    },

    setElegameList(state,data){
      state.gameList=data;
    },

    setChessgameLog(state,data){
      state.ChessgameLog=data;
    },

    setGameListKey(state,data){
      state.gameListKey=data;
    },

    setWaterList(state,data){
      state.waterList=data;
    },

    setBackwaterList (state, data) {
      state.backwaterList = data
    },
    setDggGameList (state, data) {
      state.datatDggGameList = data
    },
  },

  /*$store.dispatch*/
  actions:{

    getGameWindow(context,data){

      var tempUrl=window.location.protocol+"//"+window.location.host;
      // var toUrl=tempUrl+"/#/gamePage/"+data.agency_id+"/"+data.game_id;
      var toUrl=tempUrl+"/#/chessUrl/"+ data.id;
      window.open(toUrl,'tempwindow','height=auto,width=auto,top=80,left=150,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no, status=no');

    },


    getChessinfoAction(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chess/get_chess_info",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          context.commit("setChessinfo",res.data.data);

        }else {
          Message({
            message:res.data.message,
            type:"error",
            showClose:true
          })

        }

      })

    },

    getChessGgameListAction(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chess/gameList",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          context.commit("setElegameList",res.data.data);

        }else {
          Message({
            message:res.data.message,
            type:"error",
            showClose:true
          })

        }

      })

    },

    getChessgameLogAction(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chess/gameLog",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          context.commit("setChessgameLog",res.data.data);

        }else {
          Message({
            message:res.data.message,
            type:"error",
            showClose:true
          })

        }

      })

    },


    chessGameEnableAction(context,data){

      let callBack=data.callBack;
      delete  data.callBack;
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chess/gameEnable",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){

          callBack();

          Message({
            message:res.data.message,
            type:"success",
            showClose:true
          })



        }else {
          Message({
            message:res.data.message,
            type:"warning",
            showClose:true
          })

        }

      })

    },


    getChessgetAgencyAction(context,data){

      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chess/get_agency",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){

          context.dispatch("getAgencyConfigAction",data)

          context.commit("setAgency",res.data.data.data);




        }else {

          Message({
            message:res.data.message,
            type:"warning",
            showClose:true
          })

        }

      })

    },

    getAgencyConfigAction(context,data){



      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chess/get_water",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          if(res.data.code*1 == 0 || res.data.code*1 == 8888) {

            context.commit("setAgencyConfig", res.data.data.data);

          }else{
            context.commit("setAgencyConfig",{
              info:'{"0":"0"}',
              type:0,
              id:null,
              agency_id:data.agency_id,
              class_id:data.class_id,
              status: "1"
            });
          }
        }else {

          context.commit("setAgencyConfig",{
            info:'{"0":"0"}',
            type:0,
            id:null,
            agency_id:data.agency_id,
            class_id:data.class_id,
            status: "1",
          });

        }

      })

    },


    saveAgencyConfigAction(context,data){


      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chess/set_water",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){

          Message({
            message:res.data.message,
            type:"success",
            showClose:true
          })


          // context.commit("setAgencyConfig",res.data.data.data);
          context.dispatch("getAgencyConfigAction",{agency_id:data.agency_id,class_id:data.class_id})

        }else {

          Message({
            message:res.data.message,
            type:"warning",
            showClose:true
          })


        }

      })

    },

    get_game_listgAction(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chess/get_game_list",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){


          context.commit("setGameListKey",res.data.data);


        }else {



        }

      })

    },

    get_water_listAction(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chess/get_water_list",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          context.commit("setWaterList",res.data.data);
        }else {

        }
      })

    },
    //  获取返水用户设置列表
    getBackwaterList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chess/get_water_user_list",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setBackwaterList",res.data);
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
    //  禁用解禁返水用户
    updateBackwaterState (context,data){
      return new Promise((resolve, reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Chess/set_water_user_list",
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

    see_game_details(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chess/see_game_details",
        data:qs.stringify(data)

      }).then(function(res){

        if(store.getters.getCodeState(res.data.code)){
          if(res.data.code == 0 || res.data.code == 8888){
            context.commit("set_see_game_details",res.data.data.url)
          }else{
            Message({
              message:res.data.message,
              type:"warning",
              showClose:true
            })
          }

        }else {
          Message({
            message:res.data.message,
            type:"error",
            showClose:true
          })
        }

      })

    },

    // DGG系统游戏玩法列表
    getDggGameList(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chess/get_dggGame_list",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setDggGameList",res.data);
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
    // DGG注单详情
    getGameDgg_Detail(context,data){
      axios({
        method: 'post',
        url:window.host+"/dggadmin/Chess/showGameLog",
        data:qs.stringify(data)
      }).then(function(res){
        if(store.getters.getCodeState(res.data.code)){
          context.commit("setDggGame_Detail",res.data.data);
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

    // 修改系统游戏玩法赔率和注数
    getSetDggGameList(context,data){
      return new Promise((resolve, reject)=>{
        axios({
          method: 'post',
          url:window.host+"/dggadmin/Chess/set_dggGame_state",
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
  },


  /*$store.getters*/
  getters:{

  },

}

