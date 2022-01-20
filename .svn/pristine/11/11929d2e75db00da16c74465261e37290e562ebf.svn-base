<template>
  <div class="containerlogin">

    <div class="language">
      <span>{{$L.t('store.info6')}}：</span>
      <select name="" id="" @change="handleCommand($event)"  v-model="language">
        <option value="zh">简体中文</option>
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
        <option value="th">ไทย</option>
      </select>
    </div>

    <div id="loginmid">

      <div id="loginboxwrap">
        <div id="logininner">
          <div id="loginbox">
            <div class="heading">&nbsp;</div>
            <div class="iptlistright">
            </div>
            <form id="login-form">
              <div class="iptlist">
                <input name="username" type="text" v-model="loginObj.username" class="pwdipt" :placeholder="$L.t('login.user')">
              </div>
              <div class="iptlist">
                <input  name="password"  type="password" v-model="loginObj.password" class="pwdipt "  :placeholder="$L.t('login.pwd')">
              </div>
              <div class="iptlist">
                <input  name="password" type="password" class="pwdipt "  :placeholder="$L.t('login.safePwd')"  v-model="loginObj.safepass">
              </div>
              <div class="iptlist" v-if="indexStore.verifyCodeModeLogin.data.mode*1 == 0">
                <input name="gaCode" type="text" v-model="loginObj.vercode" class="pwdipt" maxlength="6" :placeholder="$L.t('login.code')">
              </div>
              <div class="iptlist" v-else>
                <input name="gaCode" type="text" v-model="loginObj.vercode" class="pwdipt" :placeholder="$L.t('login.safeCode')">
              </div>
            </form>
            <div id="verify-form">
              <img :src="indexStore.vcode.val" alt="验证码" v-on:click="getImgCode()"  v-if="indexStore.verifyCodeModeLogin.data.mode*1 == 0">
              <input type="button"  class="btnsub btnCrypt" :value="$L.t('login.enter')" @click="login">
            </div>

            <div class="clear"></div>
            <div class="copyright">Copyright © {{nameTest}} Reserved</div>
          </div>
        </div>
        <div id="loginbottom"></div>
      </div>

    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  import {copyobj,setSession,getSession,getchar,getDate} from '../common/common'
  import {Message} from 'element-ui'
  import lang from '../i18n/language'
  export default {
    name: 'home',
    data () {
      return {
        loginObj:{
          username:'',
          password:'',
          safepass:'',
          vercode:'',
        },
        nameTest:'',
        language:'en',
      }
    },
    mounted(){

    },
    created (){
      if(this.indexStore.verifyCodeModeLogin.data.mode*1 == 0 ) {
        this.getVcode();
      }
      this.language = localStorage.getItem('languageId') ? localStorage.getItem('languageId') :'en'; //默认中文
      if(window.headerLogo == 1){
        this.nameTest = 'dgg'
      }
      if(window.headerLogo == 2){
        this.nameTest = 'ZB'
      }
      this.getVerifyCodeModeLogin()
      this.setVcodeData();
      document.onkeydown=null;


      document.onkeydown =  (event)=> {
        var e = event || window.event;
        if (e && e.keyCode == 13) {
          if(!getSession("adminToken")){
            this.login()
          }
        }
      };


    },
    methods: {
      ...mapMutations([
        "setVcodeData"
      ]),

      ...mapActions([
        "loginAction",
        "getVerifyCodeModeLogin",
        "setLanguage",
        "getVcode"
      ]),
      //切换语言
      handleCommand(event) {
        const command = event.target.value;
        localStorage.setItem('languageId',command)
        lang.locale = command;
        let code = '';
        switch (command) {
          case 'zh':
            this.language = 'zh'
            code = 0;
            break;
          case 'en':
            this.language = 'en';
            code = 1;
            break;
          case 'vi':
            this.language = 'vi'
            code = 2;
            break;
          case 'th':
            this.language = 'th'
            code = 3;
            break;
        }
        if(getSession('token') && getDate('loginData')) {
          const loginData = getDate('loginData');
          this.setLanguage({uid:loginData.id,status:code})
                  .then(res=> {
                    location.reload()
                  })
          return;
        }
        location.reload();
      },
      getImgCode:function(){
        this.getVcode()

//        this.imgCode=window.host +  "/api/user/vcode"+"?"+new Date().getTime();
      },
      login:function () {
        let pwdreg = /^[\w\W]{6,16}$/;
        let userreg = /^[a-zA-Z\d]{4,16}$/;
        let codereg = /[0-9]{4}/;
        if(!this.loginInfo){

          Message({
            message: this.$L.t('messageInfo.complement'),
            type: "warning",
            showClose: true,
          })


          return false;
        }
        if(!userreg.test(this.loginObj.username)){
          Message({
            message: this.$L.t('messageInfo.username4'),
            type: "warning",
            showClose: true,
          })
          return false;
        }
//        if(!pwdreg.test(this.loginObj.password) || !pwdreg.test(this.loginObj.safepass)){
//          Message({
//            message: "请输入6-16位的密码!",
//            type: "warning",
//            showClose: true,
//          })
//          return false;
//        }
//
//        if(!codereg.test(this.userCode)){
//          Message({
//            message: "请输入6-请输入正确的4位验证码!",
//            type: "warning",
//            showClose: true,
//          })
//          return false;
//        }
        if(this.loginObj.username.indexOf(" ") >=0 || this.loginObj.password.indexOf(" ") >=0 || this.loginObj.safepass.indexOf(" ") >=0 || this.loginObj.vercode.indexOf(" ") >=0){

          Message({
            message:this.$L.t('messageInfo.noSpace'),
            type: "warning",
            showClose: true,
          })
          return false;
        }
        if(this.indexStore.verifyCodeModeLogin.data.mode*1 == 0 ) {
          this.loginObj.captcha_code = this.indexStore.vcode.uniqueId
        }

        this.loginAction(this.loginObj);

        return;
      },


    },
    components:{

    },
    computed: {
      ...mapState([
        "indexStore",
      ]),
      loginInfo:function () {
//        if (this.userName && this.password && this.userCode){
        if (this.loginObj.username && this.loginObj.password && this.loginObj.safepass && this.loginObj.vercode){
          return true;
        }
      },
    },
    filters:{
        times:function (t) {
          let date = new Date(t * 1000)
          let Y = date.getFullYear() + '-';
          let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
          let D = date.getDate() + ' ';
          return Y + M +D
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
  .language {
    position: absolute;
    right: 100px;
    top: 30px;
  }
  .language >span{
    /*vertical-align: middle;*/
  }
  #loginmid {
    margin: 0;
    width: 100%;
    height: 455px;
    background: url(/static/images/new/loginmid.png) no-repeat center top;
    position: absolute;
    top: 50%;
    margin-top: -227px;
  }
  #loginboxwrap {
    position: absolute;
    top: 90px;
    left: 50%;
    margin-left: -228px;
    width: 456px;
    height: 370px;
  }
  #logininner {
    margin: 0;
    height: 320px;
    /* background: url(/images/new3/login/loginbgw.png) no-repeat center top; */
    position: relative;
  }
  #loginbottom {
    margin: 0;
    height: 50px;
    background: url(/static/images/new/loginbottom.png) no-repeat center top;
    display: none;
  }
  #loginbox {
    padding: 55px 91px 0px 91px;
    width: 275px;
    height: 220px;
    /* background: url(/images/new3/login/loginbg.png) no-repeat center top; */
  }
  #loginbox .heading {
    position: absolute;
    top: 25px;
    left: 15px;
    width: 80px;
    height: 24px;
    background: url(/static/images/new/title.jpg) no-repeat transparent;
    display: none;
  }
  .iptlist {
    margin: 0;
    margin-bottom: 8px;
    height: 40px;
  }
  .useript {
    float: left;
    width: 229px;
    padding-left: 45px;
    height: 40px;
    line-height: 40px;
    color: #666;
    background: url(/static/images/new/iptpwd.jpg) no-repeat;
    border: 0px;
  }
  .pwdipt {
    float: left;
    width: 229px;
    padding-left: 45px;
    height: 40px;
    line-height: 40px;
    color: #666;
    background: url(/static/images/new/iptpwd.jpg) no-repeat;
    border: 0px;
  }
  .btnsub {
    border: 0px;
    width: 176px;
    height: 42px;
    background: url(/static/images/new/btnlogin.jpg) no-repeat;
    margin-top: 5px;
    display: inline;
    cursor: pointer;
    color: #9C400F;
    font-size: 16px;
    text-shadow: 1px 1px 1px #E3A009;
  }
  .clear {
    font-size: 0;
    clear: both;
    height: 0;
    overflow: hidden;
  }
  #verify-form {
    text-align: center;
  }
  #verify-form img {
    width: 80px;
    height: 30px;
  }
  .copyright {
    line-height: 18px;
    color: #FFFFFF;
    padding-top: 8px;
    text-align: left;
    padding-left: 70px;
  }
</style>
