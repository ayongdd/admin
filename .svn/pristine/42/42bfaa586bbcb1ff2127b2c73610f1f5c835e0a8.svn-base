import Vue from 'vue'
import md5 from 'js-md5'
// import axiosParen from 'axios'
import axios from 'axios'
import store from '../store'
import qs from 'qs'
import {setSession, getSession,cleraSeeion,languageId} from '../common/common'
import CryptoJS from 'crypto-js/crypto-js'
import { Loading,Message,MessageBox, Alert} from 'element-ui';
import ElementUI from 'element-ui';

// Vue.use(axios)

// var axios = axiosParen.create({
  // baseURL: 'https://some-domain.com/api/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
// });

axios.defaults.retry = 5;
axios.defaults.retryDelay = 5000;
axios.defaults.withCredentials  = true;
axios.defaults.baseURL = '';

axios.interceptors.request.use(
  config => {
     if (getSession('adminToken')) {
       // 切割  [测试号] 字符
       let splitStr = (name) => {
         let index = name.indexOf('[')
         if (index != '-1') {
           return name.substring(0, index)
         }
         return name
       }
       // 文件上传
      if (config.data.append) {
          let tempData = config.data
          tempData.append('token', getSession('adminToken'))
          if (tempData.get('username')) {
            tempData.set('username', splitStr(tempData.get('username')))
          }
          tempData.language = languageId(localStorage.getItem('languageId') || 'en')
          config.data = tempData
      } else{
        let temp={};
        temp=qs.parse(config.data) || {};
        if (temp.username) {
          temp.username = splitStr(temp.username)
        }
        if (temp.data && temp.data.username) {
          temp.data.username = splitStr(temp.data.username)
        }
        temp.language = languageId(localStorage.getItem('languageId') || 'en')
        temp.token=getSession('adminToken');
        temp=qs.stringify(temp)
        config.data=temp;
      }
    }else {
         let temp={};
         temp=qs.parse(config.data) || {};
         temp.language = languageId(localStorage.getItem('languageId') || 'en')
         temp=qs.stringify(temp)
         config.data=temp
     }
      return config;
  },

  err => {
    return Promise.reject(err);
  });



axios.interceptors.response.use(
  response => {
    try {
         if(response.data.code == "12"){
           //判断是否有历史登录状态
           var loginState = getSession('adminToken');
           if(loginState){
             //在痕迹下
             //  console.log("历史痕迹存在");
             cleraSeeion("adminToken");
             window.location.assign("#/login");
             // parent.location.reload();
           }else {
             window.location.assign("#/login");
           }
           // console.error("登录超时",response)
         }

         if(response.data.code == "44") { //缺少权限
             alert(response.data.message || '缺少权限！')
         }


        if(response.data.pccode == "-2000"){
          window.location.assign("#/vindicate");
          console.error("网站维护",response)
        }


    }
    catch (e){
      console.log(e)

    }

    // console.log('----------')
    return response;
  },err=>{
    // if(err.config.url.indexOf('Website/getRemind') != -1 || err.config.url.indexOf('Member/onlineCount') != -1){

    // }else{
    //   ElementUI.Notification({
    //     title: '错误',
    //     message: '服务出现错误，稍后请重试',
    //     duration: 0,
    //     type: 'error'
    //   });
    // }




    // console.log('----------')
    // console.log(err)
    var status = err.response.status
    var str = err.response.config.url
    var index  = str.lastIndexOf("/")
    str = str.substring(index+1,str.length)
    // if(status == 500 && str == 'OnlineRechargeListExcel' || str == 'CashExcel' || str == 'RechargeExcel' || str == 'UserExcel'){
      // || status == 403
    if(status == 403){
      ElementUI.Notification({
        title: '错误',
        // message: '服务出现错误，稍后请重试',
        message: '该文件被系统检测存在异常，请更换文件重试',
        duration: 0,
        type: 'error'
      });
    }
  },


  /*504 回调4次*/
  function axiosRetryInterceptor(err) {
    var config = err.config;
    if(!config || !config.retry) return Promise.reject(err);

    config.__retryCount = config.__retryCount || 0;

    if(config.__retryCount >= config.retry) {
      return Promise.reject(err);
    }

    config.__retryCount += 1;

    var backoff = new Promise(function(resolve) {
      setTimeout(function() {
        resolve();
      }, config.retryDelay || 1);
    });

    return backoff.then(function() {
      return axios(config);
    });
  },


  // error => {
  //   if (error.response) {
  //     switch (error.response.status) {
  //       case 401:
  //         // 这里写清除token的代码
  //         router.replace({
  //           path: 'login',
  //           query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
  //         })
  //     }
  //   }
  //   return Promise.reject(error.response.data)
  // }
  );



// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


/*  */
export default(
  axios
)
