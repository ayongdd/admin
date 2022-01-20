<template>
  <div class="container">
    <table class="table" >
      <tbody class="mmm">
      <tr class="nav">
        <td colspan="10">{{$L.t('member.info1')}}</td>
      </tr>
      <tr>
        <td colspan="10">
           <div class="header_search">
              <div class="header_search_list">
                <div class="ser_list">
                  <span>{{$L.t('member.log_11.info1')}}:</span>
                  <input type="text" v-model="onlineObj.username">
                </div>
                 <div class="submitSeach">
                   {{$L.t('bonusGame.MoneyQuery.zh2')}}:
                  <select v-model="onlineObj.type">
                    <option value="0">{{$L.t('bonusGame.MoneyQuery.zh4')}}</option>
                    <option value="1">{{$L.t('bonusGame.MoneyQuery.zh3')}}</option>
                  </select>
                </div>
                <div class="submitSeach" @click="seachCondition()">
                  <input type="submit" :value="$L.t('submit')">
                </div>
              </div>
            </div>
        </td>
      </tr>
      <tr class="head">
        <!-- <td>-</td> -->
        <td>{{$L.t('chessGame.zh26')}}</td>
        <td>{{$L.t('table.name')}}</td>
        <td>{{$L.t('table.registerTime')}}</td>
        <td>{{$L.t('member.info2')}}/IP</td>
        <td>{{$L.t('member.info3')}}</td>
        <td>{{$L.t('member.info4')}}</td>
        <td>{{$L.t('member.info5')}}</td>
        <td>{{$L.t('member.info6')}}/IP</td>
        <td>{{$L.t('financial.zh85')}}</td>
      </tr>
      <tr class="odd" v-for="i in memberStore.appOnlineList.data.data">
        <!-- <td>{{i.id}}</td> -->
        <td><button class="popBtn" @click="lookUserDetail(i.uid,i.username)"  :class="{'color-red': i.usertype == 9}">{{i.username}}</button> </td>
        <td>{{i.name || '--'}}</td>
        <td class="">{{getTimes(i.regTime)}}</td>
        <td>
          {{getTimes(i.loginTime)}}<br/>
          <font color="red">{{i.loginIP}}</font><br/>
          {{i.loginIParea}}
        </td>
        <td>{{getTimes(i.accessTime)}}</td>
        <td>{{i.onlineTime}}</td>
        <td>{{i.loginDomain || '--'}}</td>
        <td>{{i.lastLoginTime ? getTimes(i.lastLoginTime) : ''}}<br>
          <font color="red">{{i.lastIP || $L.t('member.log_17.info16')}}</font>{{i.lastIPcountry || ''}}<br>
          <button class="popBtn" @click="getMoreLog(i.uid)">{{$L.t('member.info7')}}</button></td>
        <td>
          <a class="thickbox button"  @click="tiLineUser(i.uid,i.username)">{{$L.t('member.log_17.info17')}}</a>
        </td>
      </tr>
      <tr v-if="getPageData.sum > 0">
        <td colspan="10">
          <page-limit :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
          <!-- <span class="sum"> 本页金额总计：-2776.09</span> -->
          <!-- <span class="net"> 全部金额总计：3795.99</span> -->
        </td>
      </tr>
      <tr v-if="!memberStore.appOnlineList.data.data">
        <td colspan="10" class="nodata">
          {{$L.t('noData')}}
        </td>
      </tr>
      </tbody>
    </table>
    <!-- 查看用户信息 代理商余额 回收 -->
    <el-dialog
      :title="memberStore.userInfoObj.data.username"
      :visible.sync="userDetailState"
      width="820px">
      <div class="user_detail" v-if="userDetailState">
        <table class="table">
          <tbody>
          <tr>
            <td class="td1">{{$L.t('table.username')}}</td>
            <td class="td2"  :class="{'color-red': memberStore.userInfoObj.data.usertype == 9}">{{memberStore.userInfoObj.data.username}}</td>
          </tr>
          <tr>
            <td class="td1">{{$L.t('table.name')}}</td>
            <td class="td2">{{memberStore.userInfoObj.data.name || $L.t('member.log_17.info18')}}</td>
          </tr>
          <tr>
            <td class="td1">{{$L.t('member.log_17.info19')}}</td>
            <td class="td2">{{memberStore.userInfoObj.data.coin}}</td>
          </tr>
          <tr>
            <td class="td1">{{$L.t('member.info62')}}</td>
            <td class="td2">{{memberStore.userInfoObj.data.fcoin}}</td>
          </tr>
          <tr>
            <td class="td1">{{$L.t('chessGame.zh10')}}</td>
            <td class="td2">{{memberStore.userInfoObj.data.ykAmount}}</td>
          </tr>
          <tr>
            <td class="td1">{{$L.t('chatRoom.zh83')}}</td>
            <td class="td2">{{memberStore.userInfoObj.data.score}}</td>
          </tr>
          <tr>
            <td class="td1">{{$L.t('member.info66')}}</td>
            <td class="td2">{{memberStore.userInfoObj.data.betsCode}}</td>
          </tr>
          <tr>
            <td class="td1">{{$L.t('member.info30')}}</td>
            <td class="td2">{{memberStore.userInfoObj.data.parent_name}}</td>
          </tr>
          </tbody>
        </table>
        <table class="table" v-if="memberStore.userAmountList.data">
          <tbody>
          <tr>
            <td class="td1">{{$L.t('member.info30')}}</td>
            <td class="td2">{{$L.t('table.yue')}}</td>
            <td @click="sxCoinFn" style="color:red;cursor: pointer;"><a>{{$L.t('member.info121')}}</a></td>
          </tr>
          <tr v-for="x in memberStore.userAmountList.data">
            <td>{{x.name}}</td>
            <td class="balance" id="SP"><span style="color: red;" v-if="!memberStore.balanceLoading">{{x.money}}</span>
              <i v-if="memberStore.balanceLoading" class="el-icon-loading"></i>
            </td>
            <td><a style="color:#0066cc;" @click="huishouBalance(x)">{{$L.t('member.log_17.info20')}}</a></td>
          </tr>
          </tbody>
        </table>
      </div>
    </el-dialog>
    <!-- 更多日志 -->
    <el-dialog
      :title="$L.t('member.info7')"
      :visible.sync="userLogState"
      width="840px">
      <div v-if="userLogState" class="model_table table_550 log_content">
        <table class="table">
          <tbody>
            <tr class="head">
              <td>{{$L.t('chessGame.zh26')}}</td>
              <td>IP/{{$L.t('member.info139')}}</td>
              <td>{{$L.t('agent.agent_8.zh41')}}</td>
              <td>{{$L.t('member.info186')}}</td>
              <td>{{$L.t('member.info140')}}</td>
            </tr>
            <tr class="odd" v-for="(item, index) in memberStore.userMoreLogList.data.data" :key="index">
              <td  :class="{'color-red': item.usertype == 9}">{{item.username}}</td>
              <td class="pointer" @click="logIpCommit(item.loginIP)">
                <span class="color-blue_c">{{item.loginIP}}</span>
                {{item.loginIPcountry + item.loginIParea}}
              </td>
              <td>{{getDevice(item.loginFrom)}}</td>
              <td>
                {{getTimes(item.loginTime)}}
              </td>
              <td>{{item.loginDomain}}</td>
            </tr>
            <tr class="info_none" v-if="getLogPage.sum == 0">
              <td colspan="5">{{$L.t('noData')}}</td>
            </tr>
            <tr class="info_page" v-if="getLogPage.sum > 0">
              <td colspan="5">
                <page-limit :pageData="getLogPage" @handlePage="handlePageLog"></page-limit>
              </td>
            </tr>
          </tbody>
        </table>
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
  import {getSession, getTimes} from '@/common/common'
  import { Message,Notification,MessageBox  } from 'element-ui';
  export default {
    data () {
      return {
        onlineObj:{
          page:1,
          limit: 10,
          online:'',
          username:'',
          type:1
        },
        userDetailState:false,  // 用户详情
        userLogState:false, // 日志
        confirmVisible: false,
        confirmType: '',
        confirmContent: '',
        // 踢下线id
        confirmId: '',
        thisUid:'',
        userLog:{
          page: 1,
          limit: 10,
          uid:'',
          ip: '',
        },
        getTimes,
      }
    },
    created (){
      let key = this.$route.params.key
      switch (key*1){
        case 1 : this.onlineObj.online = 'pc'; break;
        case 2 : this.onlineObj.online = 'app'; break;
        case 3 : this.onlineObj.online = 'web'; break;
      }
      this.getAppOnline(this.onlineObj)
    },
    mounted(){

    },
    computed: {
      ...mapState([
        "indexStore",
        "memberStore"
      ]),
      // 在线会员分页
      getPageData () {
        return {
          page: this.onlineObj.page,
          limit: this.onlineObj.limit,
          sum: this.memberStore.appOnlineList.data.count || 0
        }
      },
      // 更多日志分页
      getLogPage(){
        return {
          page: this.userLog.page,
          limit: this.userLog.limit,
          sum: this.memberStore.userMoreLogList.data.count || 0
        }
      },

    },
    methods: {
      ...mapMutations([
        "setBalanceLoading"
      ]),

      ...mapActions([
        "getAppOnline",
        "getUserInfo",
        "getUserAmount",
        "userBackAgency",
        "getUserMoreLog",
        'getOffLine',
      ]),
      getDevice (num) {
        let name = ''
        switch(num) {
          case '1': name = 'PC'; break;
          case '2': name = 'WAP'; break;
          case '3': name = 'ios'; break;
          case '4': name = 'Android'; break;
        }
        return name
      },
      // 搜索
      seachCondition(){
        this.onlineObj.page = 1
        this.getAppOnline(this.onlineObj)
      },
      sxCoinFn(){
        this.setBalanceLoading(true)
        this.getUserAmount({uid:this.memberStore.userInfoObj.data.uid,username:this.memberStore.userInfoObj.data.username})
      },
      // 更多日志分页
      handlePageLog(data){
        this.userLog.page = data.page
        this.userLog.limit = data.limit
        this.getUserMoreLog(this.userLog)
      },
      // 会员列表分页
      handlePage (data) {
        this.onlineObj.page = data.page
        this.onlineObj.limit = data.limit
        this.getAppOnline(this.onlineObj)
      },

      lookUserDetail(uid,username){
        this.getUserInfo({uid:uid}).then((res)=>{
          if(res.code == 0){
            this.userDetailState = true
          }
        })
        this.getUserAmount({uid:uid,username:username})
      },
      getLocalTime(nS) {
        let sj = nS*1000
        return new Date(parseInt(sj)).toLocaleString().replace(/:\d{1,2}$/,' ');
      },
      // 提线
      tiLineUser(uid,name){
        this.confirmVisible = true
        this.confirmType = 'lang'
        this.confirmContent = this.$L.t('manager.info39')+`“${name}”`+this.$L.t('member.log_17.info21')
        this.confirmId = uid
      },
      // 弹窗确定事件
      commitModel () {
        // 确定踢下线
        if (this.confirmType == 'lang') {
          this.getOffLine({uid: this.confirmId}).then((res) => {
            if(res.code == 0){
              this.confirmVisible = false
              this.getAppOnline(this.onlineObj)
            }
          })
        }
        // 回收余额
        if (this.confirmType == 'fund') {
          let uid = this.memberStore.userInfoObj.data.uid
          let item = this.confirmInfo
          this.userBackAgency({uid:uid,id:item.id,gameCoin:item.money}).then(() => {
            this.confirmVisible = false
            this.getUserAmount({uid:this.memberStore.userInfoObj.data.uid,username:this.memberStore.userInfoObj.data.username})
          })
        }
      },
      huishouBalance(item){
          console.log(item)
        if (item.money == 0) {
          this.$message(this.$L.t('member.info168'))
          return false
        }
        this.confirmVisible = true
        this.confirmType = 'fund'
        this.confirmContent = this.$L.t('member.info169')+`${item.name}“${item.money}”`+this.$L.t('table.zijin')
        this.confirmInfo = item

        // let uid = this.memberStore.userInfoObj.data.uid
        // console.log(uid)
        // this.$confirm('是否回收该用户余额?', '操作提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {

        //   this.userBackAgency({uid:uid,id:item.id,gameCoin:item.money})

        // }).catch(() => {

        // });
      },

      getMoreLog(uid){
        this.userLog.uid = uid
        this.userLog.ip = ''
        this.getUserMoreLog(this.userLog)
        this.userLogState = true
      },
      // 点击ip
      logIpCommit (ip) {
        this.userLog.page = 1
        this.userLog.uid = ''
        this.userLog.ip = ip
        this.getUserMoreLog(this.userLog)
      },
    },
    watch:{
      '$route':{
        handler:function (nv,ov) {
          let key = this.$route.params.key
          switch (key*1){
            case 1 : this.onlineObj.online = 'pc'; break;
            case 2 : this.onlineObj.online = 'app'; break;
            case 3 : this.onlineObj.online = 'web'; break;
          }
          this.onlineObj.username = ''
          this.onlineObj.type = 1
          this.getAppOnline(this.onlineObj)

        },
        deep:true
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .user_detail {
    height: 450px;
    overflow: auto;
    padding: 5px;
    font-size:12px;
    td{
      padding: 3px 0;
      span {
        color: rgb(64, 158, 255);
      }
    }
  }
  .mmm .nav td{
    background: url(/static/images/new/longer_bg.png) 0 -38px repeat-x;
  }
  .user_detail td {
    padding: 2px 10px;
  }
  .header_search{
  display: flex;
  flex-direction: column;
  .header_search_list{
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    span{
      margin-right: 10px;
    }
    .ser_list{
      display: flex;
      align-items: center;
      label{
        margin: 0 5px;
      }
    }
  }
}
</style>
