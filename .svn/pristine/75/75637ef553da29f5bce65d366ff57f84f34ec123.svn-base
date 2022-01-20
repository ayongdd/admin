<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>
          <b style="color:red;">{{paramsData.name}}</b> {{$L.t('agent.agent_8.zh68')}}:
          <input type="button" :value="$L.t('today')" @click="selectDay(0)">
          <input type="button" :value="$L.t('yesterday')" @click="selectDay(1)">
          <input type="button" :value="$L.t('thisWeek')" @click="selectDay(6)">
          <input type="button" :value="$L.t('lastWeek')" @click="selectDay(14)">
          <input type="button" :value="$L.t('thisMonth')" @click="selectDay(30)">
          <input type="button" :value="$L.t('lastMonth')" @click="selectDay(60)">
        </td>
      </tr>
      <tr>
        <td>
          <div class="timeShow">
            <timer class="submitSeach" @sendTime="getTimer" :day="days" :paramTime="agentBroker"></timer>
            <div class="submitSeach">
              <input type="submit" :value="$L.t('submit')" @click="searchMyDownFn()">
              <input style="margin-left: 10px;" v-if="tabIndex > 0" type="submit" :value="$L.t('go-1')" @click="prevTable()">
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="head_hint">{{$L.t('agent.agent_8.zh69')}}</div>
        </td>
      </tr>
      </tbody>
    </table>
    <table class="table" v-if="tabIndex == 0">
      <tbody>
        <tr class="head">
          <td>{{$L.t('agent.agent_8.zh70')}}</td>
          <td>{{$L.t('agent.agent_8.zh71')}}</td>
          <td>{{$L.t('agent.agent_0.betAll')}}</td>
          <td>{{$L.t('agent.agent_8.zh53')}}</td>
          <td>{{$L.t('agent.agent_8.zh72')}}</td>
          <td>{{$L.t('agent.agent_8.zh78')}}</td>
          <td>{{$L.t('agent.agent_8.zh73')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr class="odd" v-if="agentStore.agentBrokerList">
          <td>{{agentStore.agentBrokerList.UserCount}}</td>
          <td>{{agentStore.agentBrokerList.BetsNumCount}}</td>
          <td>{{agentStore.agentBrokerList.AllBetsCount}}</td>
          <td>{{agentStore.agentBrokerList.CellScoreCount}}</td>
          <td>{{agentStore.agentBrokerList.sysGameSy}}</td>
          <td>{{agentStore.agentBrokerList.RevenueCount}}</td>
          <td>{{agentStore.agentBrokerList.FandianCount}}</td>
          <td>
            <button @click="nextTable()">{{$L.t('agent.agent_8.zh57')}}</button>
          </td>
        </tr>
        <tr>
          <td colspan="8" style="color:red;">
            {{$L.t('agent.agent_8.zh74')}}<br/>
            {{$L.t('agent.agent_8.zh75')}}
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table" v-if="tabIndex == 1">
      <tbody>
        <tr class="head">
          <td>{{$L.t('agent.agent_8.zh76')}}</td>
          <td>{{$L.t('agent.agent_0.betAll')}}</td>
          <td>{{$L.t('agent.agent_8.zh77')}}</td>
          <td>{{$L.t('table.betSum')}}</td>
          <td>{{$L.t('agent.agent_8.zh53')}}</td>
          <td>{{$L.t('table.backwater')}}</td>
          <td>{{$L.t('agent.agent_8.zh87')}}</td>
          <td>{{$L.t('agent.agent_8.zh78')}}</td>
          <td>{{$L.t('agent.agent_8.zh73')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <!-- 棋牌 -->
        <tr class="odd">
          <td>{{$L.t('agent.agent_8.zh79')}}</td>
          <td>{{agentStore.agentBrokerList.chAllBets}}</td>
          <td>{{agentStore.agentBrokerList.chGameUser}}</td>
          <td>{{agentStore.agentBrokerList.chBetsNum}}</td>
          <td>{{agentStore.agentBrokerList.chCellScore}}</td>
          <td>{{agentStore.agentBrokerList.chFanShui}}</td>
          <td>{{agentStore.agentBrokerList.chProfit}}</td>
          <td>{{agentStore.agentBrokerList.chRevenue}}</td>
          <td>{{agentStore.agentBrokerList.chCommissionAmount}}</td>
          <td>
            <button @click="nextTable(1)">{{$L.t('agent.agent_8.zh57')}}</button>
          </td>
        </tr>
        <!-- 真人 -->
        <tr class="odd">
          <td>{{$L.t('agent.agent_8.zh80')}}</td>
          <td>{{agentStore.agentBrokerList.agAllBets}}</td>
          <td>{{agentStore.agentBrokerList.agGameUser}}</td>
          <td>{{agentStore.agentBrokerList.agBetsNum}}</td>
          <td>{{agentStore.agentBrokerList.agCellScore}}</td>
          <td>{{agentStore.agentBrokerList.agFanShui}}</td>
          <td>{{agentStore.agentBrokerList.agProfit}}</td>
          <td>{{agentStore.agentBrokerList.agRevenue}}</td>
          <td>{{agentStore.agentBrokerList.agCommissionAmount}}</td>
          <td>
            <button @click="nextTable(3)">{{$L.t('agent.agent_8.zh57')}}</button>
          </td>
        </tr>
        <!-- 电子 -->
        <tr class="odd">
          <td>{{$L.t('agent.agent_8.zh81')}}</td>
          <td>{{agentStore.agentBrokerList.enAllBets}}</td>
          <td>{{agentStore.agentBrokerList.enGameUser}}</td>
          <td>{{agentStore.agentBrokerList.enBetsNum}}</td>
          <td>{{agentStore.agentBrokerList.enCellScore}}</td>
          <td>{{agentStore.agentBrokerList.enFanShui}}</td>
          <td>{{agentStore.agentBrokerList.enProfit}}</td>
          <td>{{agentStore.agentBrokerList.enRevenue}}</td>
          <td>{{agentStore.agentBrokerList.enCommissionAmount}}</td>
          <td>
            <button @click="nextTable(4)">{{$L.t('agent.agent_8.zh57')}}</button>
          </td>
        </tr>
        <!-- 彩票 -->
        <tr class="odd">
          <td>{{$L.t('agent.agent_8.zh82')}}</td>
          <td>{{agentStore.agentBrokerList.cpBetAmount}}</td>
          <td>{{agentStore.agentBrokerList.cpUser}}</td>
          <td>{{agentStore.agentBrokerList.cpBetsNum}}</td>
          <td>{{agentStore.agentBrokerList.cpCellScore}}</td>
          <td>{{agentStore.agentBrokerList.cpFanshui}}</td>
          <td>{{agentStore.agentBrokerList.cpProfit}}</td>
          <td>{{agentStore.agentBrokerList.cpRevenue}}</td>
          <td>{{agentStore.agentBrokerList.cpCommissionAmount}}</td>
          <td>
            <button @click="nextLottery()">{{$L.t('agent.agent_8.zh57')}}</button>
          </td>
        </tr>
         <tr class="odd">
          <td>{{$L.t('agent.agent_8.zh83')}}</td>
          <td>{{agentStore.agentBrokerList.spoAllBets}}</td>
          <!-- //总人数 -->
          <td>{{agentStore.agentBrokerList.spoGameUser}}</td>
          <!-- 投注数量 -->
          <td>{{agentStore.agentBrokerList.spoBetsNum}}</td>
          <!-- 有效投注 -->
          <td>{{agentStore.agentBrokerList.spoCellScore}}</td>
          <!-- 返水总额 -->
          <td>{{agentStore.agentBrokerList.spoFanShui}}</td>
          <!-- 盈亏 -->
          <td>{{agentStore.agentBrokerList.spoProfit}}</td>
          <td>{{agentStore.agentBrokerList.spoRevenue}}</td>
          <td>{{agentStore.agentBrokerList.spoCommissionAmount}}</td>
          <td>
            <button @click="nextTable(5)">{{$L.t('agent.agent_8.zh57')}}</button>
          </td>
        </tr>
        <!-- 电竞 -->
        <tr class="odd">
          <td>{{$L.t('agent.agent_8.zh85')}}</td>
          <td>{{agentStore.agentBrokerList.mtAllBets}}</td>
          <td>{{agentStore.agentBrokerList.mtGameUser}}</td>
          <td>{{agentStore.agentBrokerList.mtBetsNum}}</td>
          <td>{{agentStore.agentBrokerList.mtCellScore}}</td>
          <td>{{agentStore.agentBrokerList.mtFanShui}}</td>
          <td>{{agentStore.agentBrokerList.mtProfit}}</td>
          <td>{{agentStore.agentBrokerList.mtRevenue}}</td>
          <td>{{agentStore.agentBrokerList.mtCommissionAmount}}</td>
          <td>
            <button @click="nextTable(7)">{{$L.t('agent.agent_8.zh57')}}</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 第三层详情 -->
    <table class="table" v-if="gameVisible">
      <tr class="head">
        <td>{{$L.t('agent.agent_8.zh86')}}</td>
        <td>{{$L.t('agent.agent_8.zh52')}}</td>
        <td>{{$L.t('agent.agent_8.zh53')}}</td>
        <td>{{$L.t('agent.agent_8.zh54')}}</td>
        <td>{{$L.t('agent.agent_8.zh55')}}</td>
        <td>{{$L.t('table.handle')}}</td>
      </tr>
      <tr class="odds" v-for="item in agentStore.agentNewThree.data.data">
        <td>{{item.name}}</td>
        <td>{{item.AllBet}}</td>
        <td>{{item.CellScore}}</td>
        <td>{{item.Profit}}</td>
        <td>{{item.Revenue}}</td>
        <td>
          <!-- 传入 (2, item) -->
          <button @click="lastGameDetail(item)">{{$L.t('agent.agent_8.zh57')}}</button>
        </td>
      </tr>
      <tr v-if="gameAgentPage.sum > 0">
        <td colspan="6">
          <page-limit class="padding_page" :pageData="gameAgentPage" @handlePage="gameHandlePage"></page-limit>
        </td>
      </tr>
      <tr v-if="gameAgentPage.sum == 0">
        <td colspan="6" style="text-align: center;">{{$L.t('noData')}} </td>
      </tr>
    </table>
    <!-- 游戏方 第四层详情 -->
    <table class="table" style="margin-bottom: 10px;" v-if="gameDetail">
      <tr class="head">
        <td>{{$L.t('table.username')}}</td>
        <td>{{$L.t('agent.agent_8.zh88')}}</td>
        <td>{{$L.t('agent.agent_8.zh89')}}</td>
        <td>{{$L.t('agent.agent_0.betAll')}}</td>
        <td>{{$L.t('agent.agent_8.zh54')}}</td>
        <td>{{$L.t('agent.agent_8.zh55')}}</td>
        <td>{{$L.t('table.time')}}</td>
      </tr>
      <tr class="odds" v-for="item in agentStore.commissionList.data.data">
        <td>{{item.username?item.username:$L.t('agent.agent_8.zh90')}}</td>
        <td>{{item.agency_name}}</td>
        <td>{{item.game_name}}</td>
        <td>{{item.AllBet}}</td>
        <td>{{item.Profit}}</td>
        <td>{{item.Revenue}}</td>
        <td>{{getTimes(item.creaTime)}}</td>
      </tr>
      <tr v-if="agentUserPage.sum > 0">
        <td colspan="7">
          <page-limit class="padding_page" :pageData="agentUserPage" @handlePage="agentHandlePage"></page-limit>
        </td>
      </tr>
      <tr v-if="agentUserPage.sum == 0">
        <td colspan="7" style="text-align: center;">{{$L.t('noData')}}</td>
      </tr>
    </table>
  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  import { getTimes } from '@/common/common'
  export default {
    props: ['paramsData'],
    data () {
      return {
        getTimes,
        days:'',
        agentBroker:{
          uid:'',
          fromTime:'',
          toTime:'',
        },
        // 商户 第三层
        gameAgent: {
          page: 1,
          limit: 20,
          class_id:'',
          agency_id:'',
          fromTime:'',
          toTime:''
        },
        // 第四层服务商家下的用户
        agentUser: {
          page: 1,
          limit: 20,
          class_id:'',
          agency_id:'',
          fromTime:'',
          toTime:''
        },
        // table
        tabIndex: 0,
        // 第三方详情表格
        gameVisible: false,
        gameDetail: false,
        // 彩票详情表格
        lotteryVisible: false,
      }
    },
    created (){
      // console.log(this.paramsData)
      this.agentBroker.uid = this.paramsData.uid
      this.agentBroker.fromTime = this.paramsData.startTime
      this.agentBroker.toTime = this.paramsData.endTime
      this.commissionInfo(this.agentBroker)
    },
    methods: {
      ...mapMutations([
        'setMemberVisible',
        'setMemberName',
        'setCommissionList',
      ]),
      ...mapActions([
        "commissionInfo",
        "getClassCountList",
        "getCommissionList",
        "getThreeClassData",
      ]),
      searchMyDownFn(){
        this.tabIndex = 0
        this.gameVisible = false
        this.gameDetail = false
        this.lotteryVisible = false
        this.commissionInfo(this.agentBroker)
      },
      selectDay(day){
        this.days = day
      },
      getTimer(start,end){
        this.agentBroker.fromTime = start
        this.agentBroker.toTime = end
      },
      // 查看详情 table 进入下一页
      nextTable (class_id) {
        // 第三方游戏  第二层进入事件
        if (class_id) {
          this.tabIndex++
          this.gameVisible = true
          this.gameAgent.page = 1
          this.gameAgent.limit = 20
          this.gameAgent.fromTime = this.agentBroker.fromTime
          this.gameAgent.toTime = this.agentBroker.toTime
          this.gameAgent.class_id = class_id
          this.gameAgent.agent_uid = this.paramsData.uid
          // this.getClassCountList(this.gameAgent)
          this.getThreeClassData(this.gameAgent)
        } else {
          this.tabIndex++
        }
      },
      // 返回上一层
      prevTable () {
        // 到第三层则不让table--
        if (this.gameVisible) {
          this.gameVisible = false
          this.tabIndex = 1
        } else if (this.gameDetail) {
          // 彩票详情回退
          if (this.lotteryVisible) {
            this.lotteryVisible = false
            this.gameDetail = false
            this.gameVisible = false
            this.tabIndex = 1
          } else {
            this.gameDetail = false
            this.gameVisible = true
          }
        } else {
          // 返回第二层才让table--
          this.tabIndex--
        }
      },
      // 去彩票详情
      nextLottery () {
        // 清空数组
        this.setCommissionList({data: []})
        this.lotteryVisible = true
        this.gameDetail = true
        this.tabIndex++
        this.agentUser.page = 1
        this.agentUser.limit = 20
        this.agentUser.class_id = 0
        this.agentUser.agency_id = 0
        this.agentUser.uid = this.paramsData.uid
        this.agentUser.fromTime = this.agentBroker.fromTime
        this.agentUser.toTime = this.agentBroker.toTime
        this.getCommissionList(this.agentUser)
      },
      // 第三层游戏服务商家分页
      gameHandlePage (data) {
        this.gameAgent.page = data.page
        this.gameAgent.limit = data.limit
        // 调用搜索接口
        this.getClassCountList(this.gameAgent)
      },
      // 第四层 服务商家下的用户分页
      agentHandlePage (data) {
        this.agentUser.page = data.page
        this.agentUser.limit = data.limit
        // 调用搜索接口
        this.getCommissionList(this.agentUser)
      },
      // 第三方游戏详情  第四层
      lastGameDetail (item) {
        // 清空数组
        this.setCommissionList({data: []})

        this.gameVisible = false
        this.gameDetail = true
        this.agentUser.page = 1
        this.agentUser.limit = 20
        this.agentUser.class_id = this.gameAgent.class_id
        this.agentUser.agency_id = item.agency_id
        this.agentUser.uid = this.paramsData.uid
        this.agentUser.fromTime = this.agentBroker.fromTime
        this.agentUser.toTime = this.agentBroker.toTime

        this.getCommissionList(this.agentUser)
      },
    },
    computed: {
      ...mapState([
        "agentStore",
        "moneyStore",
      ]),
      // 服务商家下的用户
      gameAgentPage () {
        return {
          page: this.gameAgent.page,
          limit: this.gameAgent.limit,
          sum: this.agentStore.agentNewThree.data.count || 0
        }
      },
      // 服务商家下的用户
      agentUserPage () {
        return {
          page: this.agentUser.page,
          limit: this.agentUser.limit,
          sum: this.agentStore.commissionList.data.count || 0
        }
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.timeShow {
  flex-wrap: wrap;
  position: relative;
}
.timeShow input{
  padding: 2px 10px;
  cursor: pointer;
}
.timeShow input.filter{
  width: 60px;
}
.timeShow div{
  margin-bottom: 5px;
}
.container{
  table:first-child{
    margin-top: 5px;
  }
}

.head_hint{
  // position: absolute;
  // right: 15px;
  color: red;
}
</style>
