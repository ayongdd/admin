<template>
  <div class="gameInfo-container">
    <button class="gameBack" v-if="tableNum > 1" @click="tableBack()">{{$L.t('common.go-1')}}</button>
    <!-- 第一层详情 -->
    <table class="table" v-if="tableNum == 1">
      <tr class="head">
        <td>{{$L.t('agent.agent_8.zh70')}}</td>
        <td>{{$L.t('agent.agent_8.zh71')}}</td>
        <td>{{$L.t('agent.agent_0.betAll')}}</td>
        <td>{{$L.t('common.yxBet')}}</td>
        <td>{{$L.t('common.ykzonge')}}</td>
        <td>{{$L.t('common.fwf')}}</td>
        <td>{{$L.t('table.handle')}}</td>
      </tr>
      <tr class="odds">
        <td>{{returnData.userNum}}</td>
        <td>{{returnData.betsNum}}</td>
        <td>{{returnData.AllBet}}</td>
        <td>{{returnData.CellScore}}</td>
        <td>{{returnData.Profit}}</td>
        <td>{{returnData.Revenue}}</td>
        <td>
          <button @click="tableChange(1)">{{$L.t('agent.agent_8.zh57')}}</button>
        </td>
      </tr>
    </table>
    <!-- 第二层详情 -->
    <table class="table" v-if="tableNum == 2">
      <tr class="head">
        <td>{{$L.t('agent.agent_8.zh86')}}</td>
        <td>{{$L.t('agent.agent_8.zh92')}}</td>
        <td>{{$L.t('table.betSum')}}</td>
        <td>{{$L.t('agent.agent_8.zh64')}}</td>
        <td>{{$L.t('common.yxtze')}}</td>
        <td>{{$L.t('common.ykzonge')}}</td>
        <td>{{$L.t('common.fwf')}}</td>
        <td>{{$L.t('table.handle')}}</td>
      </tr>
      <tr class="odds" v-for="item in moneyStore.dataClassCount.data.data">
        <td>{{item.name}}</td>
        <td>{{item.userNum}}</td>
        <td>{{item.betsNum}}</td>
        <td>{{item.AllBet}}</td>
        <td>{{item.CellScore}}</td>
        <td>{{item.Profit}}</td>
        <td>{{item.Revenue}}</td>
        <td>
          <!-- 传入 (2, item) -->
          <button @click="tableChange(2, item)">{{$L.t('agent.agent_8.zh57')}}</button>
        </td>
      </tr>
      <tr v-if="gameAgentPage.sum > 0">
        <td colspan="8">
          <page-limit class="padding_page" :pageData="gameAgentPage" @handlePage="gameHandlePage"></page-limit>
        </td>
      </tr>
      <tr v-if="!moneyStore.dataClassCount.data.data">
        <td colspan="8" style="text-align: center;">{{$L.t('noData')}}</td>
      </tr>
    </table>
    <!-- 第三层详情 -->
    <table class="table" v-if="tableNum == 3">
      <tr class="head">
        <td>{{$L.t('table.username')}}</td>
        <td>{{$L.t('agent.agent_8.zh64')}}</td>
        <td>{{$L.t('common.yxBet')}}</td>
        <td>{{$L.t('common.ykzonge')}}</td>
        <td>{{$L.t('common.fwf')}}</td>
        <td>{{$L.t('table.handle')}}</td>
      </tr>
      <tr class="odds" v-for="item in moneyStore.dataUserDetailList.data.data">
        <td>{{item.username?item.username:$L.t('agent.agent_8.zh90')}}</td>
        <td>{{item.AllBet}}</td>
        <td>{{item.CellScore}}</td>
        <td>{{item.Profit}}</td>
        <td>{{item.Revenue}}</td>
        <td>
          <!-- 传入 (3, item) -->
          <button @click="tableChange(3, item)">{{$L.t('agent.agent_8.zh57')}}</button>
        </td>
      </tr>
      <tr v-if="agentUserPage.sum > 0">
        <td colspan="6">
          <page-limit class="padding_page" :pageData="agentUserPage" @handlePage="agentHandlePage"></page-limit>
        </td>
      </tr>
      <tr v-if="agentUserPage.sum == 0">
        <td colspan="6" style="text-align: center;">{{$L.t('noData')}}</td>
      </tr>
    </table>
    <!-- 第四层详情 -->
    <table class="table" v-if="tableNum == 4">
      <tr class="head">
        <td>{{$L.t('table.username')}}</td>
        <td>{{$L.t('bonusGame.MoneyQuery.zh7')}}</td>
        <td>{{$L.t('bonusGame.MoneyQuery.zh9')}}</td>
        <td>{{$L.t('common.fangjianhao')}}</td>
        <td>{{$L.t('common.zongxiazhu')}}</td>
        <td>{{$L.t('common.yxxiazhu')}}</td>
        <td>{{$L.t('agent.agent_8.zh54')}}</td>
        <td>{{$L.t('agent.agent_8.zh55')}}</td>
        <td>{{$L.t('annoucement.swtz_4.startTime')}}</td>
      </tr>
      <tr class="odds" v-for="item in datalist.data">
        <td>{{item.username}}</td>
        <td>{{item.agency_name}}</td>
        <td>{{item.game_name}}</td>
        <td>{{item.GameID}}</td>
        <td>{{item.AllBet}}</td>
        <td>{{item.CellScore}}</td>
        <td>{{item.Profit}}</td>
        <td>{{item.Revenue}}</td>
        <td>{{times(item.GameStartTime)}}</td>
      </tr>
      <tr v-if="gameUserInfoPage.sum > 0">
        <td colspan="9">
          <page-limit class="padding_page" :pageData="gameUserInfoPage" @handlePage="userHandlePage"></page-limit>
        </td>
      </tr>
      <tr v-if="gameUserInfoPage.sum == 0">
        <td colspan="9" style="text-align: center;">{{$L.t('noData')}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex'
  export default {
    props: ['parmasData'],
    data () {
      return {
        // table 层次
        tableNum: 1,
        // 游戏服务商家
        gameAgent: {
          page: 1,
          limit: 20,
          fromTime: '',
          toTime: ''
        },
        // 服务商家下的用户
        agentUser: {
          page: 1,
          limit: 20,
          class_id: '',
          agency_id: '',
          username: '',
          fromTime: '',
          toTime: ''
        },
        // 用户下的注单
        gameUserInfo: {
          page: 1,
          limit: 20,
          class_id: '',
          agency_id: '',
          game_id: '',
          username: '',
          uid: '',
          fromTime: '',
          toTime: '',
        },
        datalist: {}
      }
    },
    computed: {
      ...mapState([
        'moneyStore',
        'tableStore'
      ]),
      // 项目汇总详情
      getData () {
        return this.moneyStore.countDataList.data
      },
      // 游戏服务商家分页
      gameAgentPage () {
        return {
          page: this.parmasData.page,
          limit: this.parmasData.limit,
          sum: this.moneyStore.dataClassCount.data.count || 0
        }
      },
      returnData(){
        let data = {}
        let type = this.parmasData.class_id
        let userNum = type == 1 ? 'chGameUser' : type == 3 ? 'agGameUser' : type == 4 ? 'enGameUser' : type == 7 ? 'mtGameUser' : 'spoGameUser'
        let betsNum = type == 1 ? 'chBetsNum' : type == 3 ? 'agBetsNum' : type == 4 ? 'enBetsNum' : type == 7 ? 'mtBetsNum' : 'spoBetsNum'
        let AllBet = type == 1 ? 'chAllBets' : type == 3 ? 'agAllBets' : type == 4 ? 'enAllBets' : type == 7 ? 'mtAllBets' : 'spoAllBets'
        let CellScore = type == 1 ? 'chCellScore' : type == 3 ? 'agCellScore' : type == 4 ? 'enCellScore' : type == 7 ? 'mtCellScore' : 'spoCellScore'
        let Profit = type == 1 ? 'chProfit' : type == 3 ? 'agProfit' : type == 4 ? 'enProfit' : type == 7 ? 'mtProfit' : 'spoProfit'
        let Revenue = type == 1 ? 'chRevenue' : type == 3 ? 'agRevenue' : type == 4 ? 'enRevenue' : type == 7 ? 'mtRevenue' : 'spoRevenue'
        data.userNum = this.getData[userNum]
        data.betsNum = this.getData[betsNum]
        data.AllBet = this.getData[AllBet]
        data.CellScore = this.getData[CellScore]
        data.Profit = this.getData[Profit]
        data.Revenue = this.getData[Revenue]
        return data
      },
      // 服务商家下的用户
      agentUserPage () {
        return {
          page: this.agentUser.page,
          limit: this.agentUser.limit,
          sum: this.moneyStore.dataUserDetailList.data.count || 0
        }
      },
      // 用户下的注单
      gameUserInfoPage () {
        return {
          page: this.gameUserInfo.page,
          limit: this.gameUserInfo.limit,
          sum: this.datalist.count || 0
        }
      },
    },
    created () {
      // console.log(this.parmasData)
      // 给三个对象默认传入时间及其他第三方参数id 方法
      let setTime = (data) => {
        data.fromTime = this.parmasData.fromTime
        data.toTime = this.parmasData.toTime
        data.isAgent = this.parmasData.isAgent
      }
      setTime(this.gameAgent)
      setTime(this.agentUser)
      setTime(this.gameUserInfo)
    },
    methods: {
      // 请求  - 三个方法需在table_store.js 定义
      ...mapActions([
        'getClassCountList',
        'getUserDetailList',
        'gameInfoListAction'
      ]),

      // table 切换- - 点击详情  (当前table值)
      tableChange (value, item) {
        this.tableNum = value * 1 + 1
        // 调用请求进入第二层
        if (value == 1) {
          this.parmasData.page = 1
          this.parmasData.limit = 20
          // 请求
          this.getClassCountList(this.parmasData)
        }
        // 调用请求进入第三层
        if (value == 2) {
          this.agentUser.page = 1
          this.agentUser.limit = 20
          this.agentUser.username = this.parmasData.username
          this.agentUser.class_id = this.parmasData.class_id
          this.agentUser.agency_id = item.agency_id
          // 请求
          this.getUserDetailList(this.agentUser)
        }
        // 调用请求进入第四层
        if (value == 3) {
          this.gameUserInfo.page = 1
          this.gameUserInfo.limit = 20
          this.gameUserInfo.class_id = this.parmasData.class_id
          this.gameUserInfo.agency_id = item.agency_id
          this.gameUserInfo.username = item.username
          // 请求
          this.gameInfoListAction(this.gameUserInfo).then(res => {
            this.datalist = res
          })
        }
      },
      // table 返回事件
      tableBack () {
        this.tableNum--
      },
      // 第二层 游戏服务商家分页
      gameHandlePage (data) {
        this.parmasData.page = data.page
        this.parmasData.limit = data.limit
        console.log(this.parmasData)
        // 调用搜索接口
        this.getClassCountList(this.parmasData)
      },
      // 第三层 服务商家下的用户分页
      agentHandlePage (data) {
        this.agentUser.page = data.page
        this.agentUser.limit = data.limit
        // 调用搜索接口
        this.getUserDetailList(this.agentUser)
      },
      // 第四层 用户下的注单分页
      userHandlePage (data) {
        this.gameUserInfo.page = data.page
        this.gameUserInfo.limit = data.limit
        // 调用搜索接口
        this.gameInfoListAction(this.gameUserInfo).then(res => {
          this.datalist = res
        })
      },
      times: function (t) {
        let date = new Date(t * 1000)
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let d = date.getDate() + ' ';
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return Y + M + d + ' ' + h + ':' + m + ':' + s;
      }
    },
  }
</script>
<style lang="less" scoped>
  .gameBack {
    margin-left: 5px;
    padding: 2px 10px;
  }

  .gameInfo-container {
    height: 580px;
    overflow: auto;

  .table {
    margin: 5px 5px 10px;
  }

  }
  .odds {
    background-color: #f2f2f2;
    font-size: 12px;
    color: #000000;
  }
</style>
