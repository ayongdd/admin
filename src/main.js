import Vue from 'vue'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import axios from './axios'
import moduleconfig from './moduleconfig'

import enLocale from 'element-ui/lib/locale/lang/en' //英文
import zhLocale from 'element-ui/lib/locale/lang/zh-CN' //
import thLocale from 'element-ui/lib/locale/lang/th' //泰语
import viLocale from 'element-ui/lib/locale/lang/vi' //越南
import jaLocale from 'element-ui/lib/locale/lang/ja' //日语
import idLocale from 'element-ui/lib/locale/lang/id' //印尼语
import ellocale from 'element-ui/lib/locale'
import language from './i18n/language'
/*金花*/
import App from './App'
import router from './router'
import store from './store'
import moment from 'moment/moment'
import {getSession} from './common/common'
import './common/css/admin.css';
import './common/css/admin5.css';
import './common/css/common.less'
// import VCharts from 'v-charts'
import VeLine from 'v-charts/lib/line.common'
import VeHistogram from 'v-charts/lib/histogram.common'

//** 下载插件后可删除   组件页有单独引入 **
import Clipboard from 'clipboard'

// import './common/css/default.css';
// import './common/css/style2.css';
// import './common/css/thickbox.css.css';
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
Vue.prototype.$L = language; //多语言
window.host=window.host || "";



Vue.prototype.$api = window.host


Vue.use(ElementUI)
Vue.use(Vuex)
// Vue.use(VCharts)
// 单个引入 减少体积
Vue.component(VeLine.name, VeLine)
Vue.component(VeHistogram.name, VeHistogram)

Vue.config.productionTip = false

/* eslint-disable no-new */
window.App=new Vue({
  el: '#app',
  router,
  store,
  language,
  components: { App },
  template: '<App/>',
  computed:{

  },
  created:function(){
    window.setLanguage = ()=> {
      const languageCode = localStorage.getItem('languageId') ? localStorage.getItem('languageId') : 'en'; //默认中文
      Vue.prototype.$language = () => {
        switch (languageCode) {
          case 'zh' :ellocale.use(zhLocale);return ''
          case 'en' :ellocale.use(enLocale);return 'a_'
          case 'vi' :ellocale.use(viLocale);return 'b_'
          case 'th' :ellocale.use(thLocale);return 'c_'
          case 'ja' : ellocale.use(jaLocale);return 'd_'
          case 'id' : ellocale.use(idLocale);return 'e_'
        }
      };
      language.locale = languageCode;
    }
    window.setLanguage();

    // document.getElementById("loading").remove();



  },
  data:{
    config:{
      host:window.host || "",
    },
  }

})

window.right=[
  "userHome",
  "gameHome",
  "agencyHome",
  "noticeHome",
  "moneyHome",
];

window.game=["1","2","3","4","5","6","7","8","9","10","11"];


Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
  return moment.unix(value).format(formatString); //
});

if(window.headerLogo == 1){
  document.title = '顶呱呱娱乐系统V3.0'
}
if(window.headerLogo == 2){
  document.title = '众博娱乐系统V3.0'
}
/*init Global model*/
router.beforeEach((to, from, next) => {

  //
  // if(window.right.indexOf(to.name)!=-1){
  //
  //   var u=getSession('adminToken');
  //   if(!u){
  //     if(from.name=="redRain"){
  //       next({ path: '/login',query:{from:"redRain"}})
  //     }else {
  //       next({ path: '/login'})
  //     }
  //
  //   }
  //
  // }
  //

  next();



})


