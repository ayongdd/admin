<template>
  <div id="headerbox" :class="{other:webLogo == 2}">
    <a class="logo_header" href="#/money/8"></a>
    <div id="headerboxtop" class="clearfloat">
      <div class="headerboxtopleft">
        {{$L.t('header.wel')}}：<font color="#FFFF00">{{headInfo.username}}</font>
        &nbsp;&nbsp;{{$L.t('header.lastEnter')}}：<font color="#FFFF00">{{headInfo.lastip}}</font>
        &nbsp;&nbsp;&nbsp;[<a class="change_password" href="#/managerPassword"> {{$L.t('header.changePwd')}}</a>&nbsp; / &nbsp;<a target="_parent" @click="cancelLogin">{{$L.t('header.outLogin')}}</a> ]
        <br>{{headInfo.dayTime}}&nbsp;&nbsp;
        {{headInfo.week}}
        &nbsp;&nbsp;&nbsp;&nbsp;<font color="#FFFF00"></font><font color="#FFFF00"  id="mdtime">
            [{{$L.t('header.bjTime')}}：{{headInfo.dayTime + ' ' + headTime }}]</font><font color="#FFFF00"></font>
        <!--{{indexStore.topInfoData.data.mdTime }}-->
      </div>

      <div class="headerboxtopleft">
        <a href="#/member/1" style="color:white;text-decoration:none">
          {{$L.t('header.info1')}}：<font color="#FFFF00" id="online">{{indexStore.onlineCountObj.data.onlineCount || 0}}</font><br>
        </a>
        <a :href="'#/member/4?id=today'" @click="todayRegiser()" style="color:white;text-decoration:none">
        <!-- <router-link :to="{ path: '#/member/4', query: { id: '1' }}" style="color:white;text-decoration:none"> -->
          {{$L.t('header.todayRegister')}}：<font color="#FFFF00" id="regNum">{{headInfo.regCount || 0}}</font>
        </a>
      </div>

      <div class="headerboxtopleft">
        <a href="#/manager/1" style="color:white;text-decoration:none">{{$L.t('header.info2')}}：<font color="#FFFF00" id="online">{{indexStore.onlineCountObj.data.adminOnlineCount || 0}}</font><br></a>
        <div>
          <audio ref="onlineAudio">
            <source src="static/images/24.mp3" type="audio/mp3" />
          </audio>
        </div>
      </div>

      <div v-if="indexStore.czSound" @click="goRecharge" class="new_sound" :style="$language() ? {width:'180px'}:{width:'120px'}">
        {{$L.t('header.newRecharge')}} <img src="static/images/news_sound.gif" alt="">
        <audio :autoplay=" indexStore.czSound" :loop="indexStore.czSound"><source src="static/images/cz.mp3" type="audio/mp3" /></audio>
      </div>
      <div v-if="indexStore.txSound" @click="goWithout" class="new_sound" :style="$language() ? {width:'180px'}:{width:'120px'}">
        {{$L.t('header.newWithdraw')}} <img src="static/images/news_sound.gif" alt="">
        <audio :autoplay="indexStore.txSound" :loop="indexStore.txSound"><source src="static/images/tx.mp3" type="audio/mp3" /></audio>
      </div>

      <a href="#/annoucement/5" class="header-notice">
        <img src="static/images/notice.png" alt="">
        <span v-if="indexStore.layouNoticeList.data.flag == 1"></span>
      </a>


      <!---->
      <!--<a :href="'skype:' + skypeLeftUrl + '?chat'" class="topskype"></a>-->
      <!--<a v-if="webLogo == 1" :href="'skype:' + skypeRightUrl + '?chat'" class="skypeywu"></a>-->

      <!--<a v-if="webLogo == 2" :href="'https://wa.me/'+whatsapp" class="skypeywu otherYewuLogo" target="_blank"></a>-->





      <a class="clearCache" @click="clearCacheFn">{{$L.t('header.clearCache')}}</a>

      <a class="clearCache"  @click="clearIP()" >{{$L.t('header.clearIP')}}</a>

      <div class="language">
        <span>{{$L.t('store.info6')}}：</span>
        <select name="" id="" @change="handleCommand($event)"  v-model="language">
          <option value="zh">简体中文</option>
          <option value="en">English</option>
          <option value="vi">Tiếng Việt</option>
          <option value="th">ไทย</option>
          <option value="ja">日本語</option>
          <option value="id">bahasa Indonesia</option>
        </select>
      </div>

    </div>

    <!-- 弹窗 -->
    <el-dialog
      :title="$L.t('header.newHint')"
      :visible.sync="noticeVisible"
      width="500px">
      <div v-if="indexStore.layouNoticeList.data.data[0]" class="form_container form_no">
        <h3>
            {{indexStore.layouNoticeList.data.data[0].name}}
        </h3>
        <div>
          {{indexStore.layouNoticeList.data.data[0].content}}
        </div>
      </div>
    </el-dialog>

    <!--提示-->
    <el-dialog
            :title="$L.t('hint')"
            :visible.sync="confirmIPVisible"
            width="300px"
            class="confirmModel confirmModel1">
      <el-input v-model="confirmIPVisibleInput" :placeholder="$L.t('header.info3')"></el-input>
      <div class="model-footer-btn">
        <button @click="confirmIPVisible = false">{{$L.t('cancel')}}</button>
        <button @click="commitIPModel">{{$L.t('sure')}}</button>
      </div>
    </el-dialog>

    <!-- 提示弹窗 -->
    <comfirm-model
      v-if="confirmVisible"
      :content="confirmContent"
      @closeModel="confirmVisible = false"
      @commitModel="commitModel">
    </comfirm-model>
  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  import {getSession,cleraSeeion, getTimes,getDate} from '../common/common'
  import {MessageBox} from 'element-ui'
  import lang from '../i18n/language'

  export default {
    name: 'headers',
    data () {
      return {
        time:null,
        czMessage:false,
        txMessage:false,
        confirmVisible: false,
        confirmContent: '',
        confirmId: '',
        username:'',
        language:'en',
        // 弹窗状态
        noticeVisible: false,
        confirmIPVisible:false,
        confirmIPVisibleInput:'',
        // topinfo接口返回数据
        headInfo: {
          dayTime: "",
          lastip: "",
          mdTime: "",
          onlineCount: "",
          regCount: "",
          time: '',
          his: '',
          username: "",
          week: "",
        },
        // 头部时间参数
        timer: null,
        headTime: '',
        // 弹窗轮循
        noticeTimer: null,
        clearOrOut:'',
        onlineData:false,

        skypeLeftUrl:'',
        skypeRightUrl:'',
        whatsapp:'',
        webLogo:'',
      }
    },
    watch: {
      'indexStore.onlineCountObj.data' (newvalue,oldValue) {
        if(newvalue.adminOnlineCount > oldValue.adminOnlineCount){
          setTimeout(()=>{
            this.setsound()
          },3000);
        }
      }
    },
    created (){
      this.language = localStorage.getItem('languageId') ? localStorage.getItem('languageId') :'en'; //默认中文
      this.webLogo = window.headerLogo || 1
      this.skypeLeftUrl = window.skypeLeft || 'live:e60407c2a5752e69'
      this.skypeRightUrl = window.skypeRight || 'live:dgg8net'
      this.whatsapp = window.whatsapp || '639063622278'
      // 调用头部信息
      this.initTimeInfo()
      this.getOnlineCount()
      // 弹窗
      let notice = () => {
        this.noticeTimer = setTimeout(() => {
          // 调用
          this.noticeAction()
          // 回调
          notice()
        }, 60000)
      }
      // 首次调用
      this.noticeAction()
      // 调用定时器倒计时方法轮循
      notice()
    },
    beforeDestroy(){
      clearInterval(this.timer)
      clearTimeout(this.noticeTimer)
    },
    methods: {
      ...mapMutations([
        'setGameNotVisible',
      ]),
      ...mapActions([
        "getTopInfo",
        "getLayouNotice",
        "logout",
        "getRemind",
        "delClean",
        "getOnlineCount",
        "clearIPAction",
        "setLanguage"
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
          case 'ja':
            this.language = 'ja'
            code = 4;
            break;
          case 'id':
            this.language = 'id'
            code = 5;
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
      clearIP() {
        this.confirmIPVisible = true;
      },
      commitIPModel() {
        this.clearIPAction({ip:this.confirmIPVisibleInput})
                .then(res=>{
                  this.confirmIPVisibleInput = '';
                })
        this.confirmIPVisible = false;
      },
      setsound(){
        this.$refs.onlineAudio.play()
      },
      // 头部信息计时器
      initTimeInfo () {
        this.getTopInfo().then(res => {
          // console.log(res)
          this.headInfo = res.data
          let time = res.data.his
          this.timer = setInterval(() => {
            time++
            let h = parseInt(time / 3600)
            if (h == 24) {
              clearInterval(this.timer)
              this.initTimeInfo()
              return false
            }
            let m = parseInt(time / 60 % 60)
            let s = parseInt(time % 60)
            h = h < 10 ? '0' + h : h
            m = m < 10 ? '0' + m : m
            s = s < 10 ? '0' + s : s
            // console.log(h, m, s)
            this.headTime = h + ':' + m + ':' + s
          }, 1000)
        })
      },
      // 公告弹窗请求数据
      noticeAction () {
        this.getLayouNotice().then((res) => {
          if (res.flag == 1) {
            this.noticeVisible = true
          }
          if (res.upper_score == 1) {
            this.setGameNotVisible(true)
          }
        })
      },
      todayRegiser(){
        console.log('--------')
        this.$router.push({
          path: 'member/4',
          // query: {
          //   id: 'today'
          // }
        })
      },
      // 退出登录
      cancelLogin(item){
        this.clearOrOut = 'out'
        this.confirmVisible = true
        this.confirmContent = this.$L.t('header.isOutLogin')
        this.confirmId = item.uid
        this.username = item.username
      },
      // 清除缓存
      clearCacheFn(){
        this.clearOrOut = 'clear'
        this.confirmVisible = true
        this.confirmContent = this.$L.t('header.isClearCache')
      },
      commitModel(){
        if(this.clearOrOut == 'out'){
          this.logout().then(() => {
            cleraSeeion("adminToken");
            this.$router.push({path: '/login'})
          })
          this.confirmVisible = false
          // parent.location.reload();
        }
        if(this.clearOrOut == 'clear'){
          this.delClean().then(() => {
            this.confirmVisible = false
          })
        }
      },
      goWithout(){
//        this.getRemind({states:2})
        this.$router.push({
          name:'money',
          params:{
            key:4
          },
          query:{
            time: new Date().getTime()
          }
        })
      },
      goRecharge(){
        this.getRemind({states:1})
        this.$router.push({
          name:'money',
          params:{
            key:2
          },
          query:{
            time: new Date().getTime()
          }
        })
      }
    },
    computed: {
      ...mapState([
        "indexStore"
      ]),
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .header-notice{
    display: block;
    float: left;
    height: 48px;
    margin-left: 30px;
    line-height: 47px;
    position: relative;
    span{
      width: 8px;
      height: 8px;
      padding: 0;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      margin: -12px 20px 0;
      font-size: 12px;
      text-align: center;
      background-color: #FF5722;
      color: #fff;
    }
  }
  .clearCache {
    padding: 0 20px;
    line-height: 50px;
    color:#fff;
    font-size: 13px;
    /*line-height: 26px;*/
    /*text-shadow:1px 1px 1px #333;*/
    /*border-radius: 2px;*/
    /*text-align: center;*/
    /*box-shadow:1px 0 1px rgba(255,255,255,1) inset,1px 0 1px rgba(0,0,0,.2);*/
    /*background:-webkit-linear-gradient(top,#dce1e6,#dde2e7);*/
    /*background:-moz-linear-gradient(top,#dce1e6,#dde2e7);*/
    /*background:linear-gradient(top,#dce1e6,#dde2e7);*/
    /*text-shadow:-2px 0 1px #fff;*/
    margin-left: 20px;
  }
  .clearCache:hover {
    color: #fff;
    background: #0E8CC7;
  }
  .headerboxtopleft a{
    color: #FF1493;
  }
  .new_sound {
    width: 120px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    font-size: 15px;
    color:red;
    img{
      width: 40px;
      height: 20px;
      margin-left: 10px;
    }
  }
  .logo_header{
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    height: 49px;
  }
  .language span{
    color: #fff;
  }
  .language select{
    vertical-align: bottom;
  }
</style>
