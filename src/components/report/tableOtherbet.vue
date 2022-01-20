<template>
  <div class="container">

    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>
          {{$L.t('report.info15')}}:
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
      </tbody>
    </table>
    <table class="table" v-if="tabIndex == 0">
      <tbody>
        <tr class="head">
          <td>{{$L.t('report.info16')}}</td>
          <td>{{$L.t('chatRoom.zh69')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr class="odd">
          <td>{{$L.t('moneyAdmin.Sum.info9')}}</td>
          <td>{{getData.chAllBets}}</td>
          <td><button @click="nextTable(1)">{{$L.t('agent.agent_8.zh57')}}</button></td>
        </tr>
        <tr class="odd">
          <td>{{$L.t('moneyAdmin.Sum.info15')}}</td>
          <td>{{getData.agAllBets}}</td>
          <td><button @click="nextTable(3)">{{$L.t('agent.agent_8.zh57')}}</button></td>
        </tr>
        <tr class="odd">
          <td>{{$L.t('moneyAdmin.Sum.info16')}}</td>
          <td>{{getData.enAllBets}}</td>
          <td><button @click="nextTable(4)">{{$L.t('agent.agent_8.zh57')}}</button></td>
        </tr>
      </tbody>
    </table>
    <table class="table" v-if="tabIndex == 1">
      <tbody>
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
        <tr class="odd" v-for="item in moneyStore.dataClassCount.data.data">
          <td>{{item.name}}</td>
          <td>{{item.userNum}}</td>
          <td>{{item.betsNum}}</td>
          <td>{{item.AllBet}}</td>
          <td>{{item.CellScore}}</td>
          <td>{{profitData(item.Profit)}}</td>
          <td>{{item.Revenue}}</td>
          <td>
            <button @click="tableChange(2, item)">{{$L.t('agent.agent_8.zh57')}}</button>
          </td>
        </tr>
        <tr v-if="gameAgentPage.sum > 0">
          <td colspan="8">
            <page-limit class="padding_page" :pageData="gameAgentPage" @handlePage="gameHandlePage"></page-limit>
          </td>
        </tr>
        <tr v-if="gameAgentPage.sum == 0">
          <td colspan="8" style="text-align: center;">{{$L.t('noData')}}</td>
        </tr>
      </tbody>
    </table>
    <!-- 第三层详情 -->
    <table class="table" v-if="tabIndex == 2">
     	<tr class="head">
				<td>{{$L.t('table.username')}}</td>
				<td>{{$L.t('agent.agent_8.zh64')}}</td>
				<td>{{$L.t('common.yxBet')}}</td>
				<td>{{$L.t('common.ykzonge')}}</td>
				<td>{{$L.t('common.fwf')}}</td>
				<td>{{$L.t('table.handle')}}</td>
			</tr>
			<tr class="odd" v-for="item in moneyStore.dataUserDetailList.data.data">
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
    <!-- 游戏方 第四层详情 -->
    <table class="table" style="margin-bottom: 10px;" v-if="tabIndex == 3">
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
			<tr class="odd" v-for="item in datalist.data">
				<td>{{item.username}}</td>
				<td>{{item.agency_name}}</td>
				<td>{{item.game_name}}</td>
				<td>{{item.GameID}}</td>
				<td>{{item.AllBet}}</td>
				<td>{{item.CellScore}}</td>
				<td>{{item.Profit}}</td>
				<td>{{item.Revenue}}</td>
				<td>{{getTimes(item.GameStartTime)}}</td>
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

  import {mapState, mapMutations, mapActions} from 'vuex';
  import { getTimes } from '@/common/common'
  export default {
    props: ['otherData','paramsData'],
    data () {
      return {
        getTimes,
        days:'',
        agentBroker:{
          fromTime:'',
          toTime:'',
        },
        // 第二层
        gameAgent: {
          page: 1,
          limit: 20,
          class_id:'',
          agent_uid:'',
          class_id:'',
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
        datalist: {},
        // 用户下的注单
				gameUserInfo: {
					page: 1,
					limit: 20,
					class_id:'',
					agency_id:'',
					game_id:'',
					username:'',
					uid:'',
					fromTime:'',
					toTime:'',
				},
      }
    },
    created (){
      this.agentBroker.username = this.otherData.username || ''
      this.agentBroker.fromTime = this.otherData.fromTime || ''
      this.agentBroker.toTime = this.otherData.toTime || ''
      this.getCountDataList(this.agentBroker)
    },
    methods: {
      ...mapMutations([
        'setMemberVisible',
        'setMemberName',
        'setCommissionList',
      ]),
      ...mapActions([
        "getClassCountList",
        "getCommissionList",
        "getReportList",
        'getUserDetailList',
        "getCountDataList",
        "gameInfoListAction"
      ]),
      profitData(data){
        return 0-data
      },
      searchMyDownFn(){
        this.tabIndex = 0
        this.gameVisible = false
        this.gameDetail = false
        this.lotteryVisible = false
        this.getCountDataList(this.agentBroker)
      },
      selectDay(day){
        this.days = day
      },
      getTimer(start,end){
        this.agentBroker.fromTime = start
        this.agentBroker.toTime = end
      },
      nextTable (class_id) {
        this.tabIndex++
        this.gameVisible = true
        this.gameAgent.page = 1
        this.gameAgent.limit = 20
        this.gameAgent.fromTime = this.agentBroker.fromTime
        this.gameAgent.toTime = this.agentBroker.toTime
        this.gameAgent.class_id = class_id
        this.gameAgent.agent_uid = this.agentBroker.uid
        this.gameAgent.username = this.agentBroker.username
        this.getClassCountList(this.gameAgent)
      },
 			// table 切换- - 点击详情  (当前table值)
			tableChange (value, item) {
				// 调用请求进入第三层
        this.tabIndex++
        if (value == 2) {
					this.agentUser.page = 1
					this.agentUser.limit = 20
					this.agentUser.username = this.agentBroker.username
					this.agentUser.class_id = this.gameAgent.class_id
          this.agentUser.agency_id = item.agency_id
          this.agentUser.fromTime = this.agentBroker.fromTime
          this.agentUser.toTime = this.agentBroker.toTime
          this.getUserDetailList(this.agentUser)
        }

        if (value == 3) {
					this.gameUserInfo.page = 1
					this.gameUserInfo.limit = 20
					this.gameUserInfo.class_id = this.gameAgent.class_id
					this.gameUserInfo.agency_id = item.agency_id
          this.gameUserInfo.username = item.username
          this.gameUserInfo.fromTime = this.agentBroker.fromTime
          this.gameUserInfo.toTime = this.agentBroker.toTime
					this.gameInfoListAction(this.gameUserInfo).then(res=>{
						this.datalist = res
					})
				}
      },

      // 返回上一层
      prevTable () {
        if (this.gameDetail) {
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
      // 第2层
      gameHandlePage (data) {
        this.gameAgent.page = data.page
        this.gameAgent.limit = data.limit
        this.getClassCountList(this.gameAgent)
      },
      // 第3层
      agentHandlePage (data) {
        this.agentUser.page = data.page
        this.agentUser.limit = data.limit
        this.getUserDetailList(this.agentUser)
      },
      // 第四层
      userHandlePage (data) {
        this.gameUserInfo.page = data.page
        this.gameUserInfo.limit = data.limit
        this.gameInfoListAction(this.gameUserInfo).then(res=>{
          this.datalist = res
        })
      },
    },
    computed: {
      ...mapState([
        "agentStore",
        "moneyStore",
        // 'tableStore'
        "financialStore"
      ]),
      // 服务商家下的用户
      gameAgentPage () {
        return {
          page: this.gameAgent.page,
          limit: this.gameAgent.limit,
          sum: this.moneyStore.dataClassCount.data.count || 0
        }
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
       getData () {
        return this.moneyStore.countDataList.data
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
