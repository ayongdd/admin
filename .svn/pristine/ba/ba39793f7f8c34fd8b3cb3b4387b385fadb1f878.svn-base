<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
        <tr class="nav">
          <td>
            {{tableTitle}}{{$L.t('report.info9')}}:
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
              <timer class="submitSeach" @sendTime="getTimer" :day="days"></timer>
              <select class="testNumber" v-model="sendParmas.state">
                <option value="0">{{$L.t('bonusGame.MoneyQuery.zh4')}}</option>
                <option value="1">{{$L.t('bonusGame.MoneyQuery.zh3')}}</option>
              </select>
              <div class="submitSeach">
                <input type="submit" :value="$L.t('submit')" @click="seachCondition()">
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
        <tr class="head">
          <th>{{$L.t('bonusGame.NiuNiuBetManage.zh1')}}</th>
          <th>{{$L.t('electronicGame.zh13')}}</th>
          <th>{{$L.t('agent.agent_8.zh64')}}</th>
          <th>{{$L.t('agent.agent_8.zh53')}}</th>
          <th>{{$L.t('agent.agent_8.zh54')}}</th>
          <th>{{$L.t('agent.agent_8.zh55')}}</th>
          <th>{{$L.t('report.info10')}}</th>
          <th>{{$L.t('report.info11')}}</th>
        </tr>
        <tr v-if="tableStore.dataAgencyCountList.data.agency">
          <td>{{tableStore.dataAgencyCountList.data.agency.name}}</td>
          <td>
            <img width="90" height="30" :src="tableStore.dataAgencyCountList.data.agency.icon">
          </td>
          <td>{{tableStore.dataAgencyCountList.data.agency.bets}}</td>
          <td>
            {{tableStore.dataAgencyCountList.data.agency.cellScore}}
          </td>
          <td>{{tableStore.dataAgencyCountList.data.agency.profit}}</td>
          <td>{{tableStore.dataAgencyCountList.data.agency.revenue}}</td>
          <td>
            <span v-if="tableStore.dataAgencyCountList.data.agency.state*1 == 2">{{$L.t('bonusGame.NiuNiuBetManage.zh43')}}</span>
            <span v-else-if="tableStore.dataAgencyCountList.data.agency.state*1 == 1">{{$L.t('lottery.zh126')}}</span>
            <span v-else>{{$L.t('annoucement.xttz_5.zh4')}}</span>
          </td>
          <td>{{tableStore.dataAgencyCountList.data.agency.enable*1 == 0?$L.t('close'):$L.t('open')}}</td>
        </tr>
        <tr v-if="!tableStore.dataAgencyCountList.data.agency">
          <td colspan="8" class="nodata">{{$L.t('noData')}}</td>
        </tr>
      </tbody>
    </table>
    <!-- 列表 -->
    <table class="table" v-if="tableNum == 1">
      <tbody>
        <tr class="head">
          <td>{{$L.t('table.username')}}</td>
          <td>{{$L.t('agent.agent_8.zh64')}}</td>
          <td>{{$L.t('common.yxtze')}}</td>
          <td>{{$L.t('agent.agent_8.zh54')}}</td>
          <td>{{$L.t('agent.agent_8.zh55')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr v-for="(item, index) in tableStore.dataAgencyCountList.data.data"
          :key="index">
          <td :class="{'color-red': item.usertype == 9}">{{item.username}}</td>
          <td>{{item.bets}}</td>
          <td>{{item.cellScore}}</td>
          <td>{{item.profit}}</td>
          <td>{{item.revenue}}</td>
          <td>
            <button @click="countDetail(item)">{{$L.t('agent.agent_8.zh57')}}</button>
          </td>
        </tr>
        <tr v-if="getPageData.sum> 0">
          <td colspan="13">
            <page-limit class="padding_page" :pageData="getPageData"
              :inputShow="'1'" @handlePage="handlePage"></page-limit>
          </td>
        </tr>
        <tr v-if="tableStore.dataAgencyCountList.data.data && tableStore.dataAgencyCountList.data.data.length == 0">
          <td colspan="13" class="nodata">{{$L.t('noData')}}</td>
        </tr>
      </tbody>
    </table>
    <!-- 详情 -->
    <table class="table" v-if="tableNum == 2">
      <tbody>
        <tr class="head">
          <td>{{$L.t('table.username')}}</td>
          <td>{{$L.t('agent.agent_8.zh89')}}</td>
          <td>{{$L.t('report.info12')}}</td>
          <td>{{$L.t('report.info13')}}</td>
          <td>{{$L.t('agent.agent_8.zh52')}}</td>
          <td>{{$L.t('common.yxxiazhu')}}</td>
          <td>{{$L.t('agent.agent_8.zh54')}}</td>
          <td>{{$L.t('agent.agent_8.zh55')}}</td>
          <td>{{$L.t('electronicGame.zh2')}}</td>
          <td>{{$L.t('electronicGame.zh3')}}</td>
        </tr>
        <tr v-for="(item, index) in tableStore.agencyOrderList.data.data" :key="index">
          <td :class="{'color-red': item.usertype == 9}">{{item.username}}</td>
          <td>{{item.name}}</td>
          <td>{{item.GameID}}</td>
          <td>{{item.ServerID}}</td>
          <td>{{item.AllBet}}</td>
          <td>{{item.CellScore}}</td>
          <td>{{item.Profit}}</td>
          <td>{{item.Revenue}}</td>
          <td>{{item.GameStartTime}}</td>
          <td>{{item.GameEndTime}}</td>
        </tr>
        <tr>
          <td colspan="13" class="goBack_td">
            <page-limit v-if="getPageData.sum > 0" class="padding_page" :pageData="getCountPageData"
              :inputShow="'1'" @handlePage="countDetailHandle"></page-limit>
              <button class="goBack_btn" @click="tableNum = 1">{{$L.t('common.go-1')}}</button>
          </td>
        </tr>
        <tr v-if="getPageData.sum == 0">
          <td colspan="13" class="nodata">{{$L.t('noData')}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
    import {mapState, mapMutations, mapActions} from 'vuex';
    import {getDate,setDate,copyobj,setSession,getSession,getchar,randomRange} from '@/common/common'
    export default {
      data () {
        return {
          sendParmas:{
            page: 1,
            limit: 20,
            id:'',
            fromTime:'',
            toTime:'',
            state:1
          },
          tableTitle:'',
          days:'',
          existence:'',
          // 新增详情
          tableNum: 1,
          agencyOrderParams: {
            uid: '',
            agency_id: '',
            page: 1,
            limit: 20,
            fromTime: '',
            toTime: '',
          },
        }
      },
      created (){
        this.tableTitle = this.$route.query.name
        this.sendParmas.id = this.$route.query.id
        this.sendParmas.page = 1
        this.sendParmas.limit = 20
        this.getAgencyCountList(this.sendParmas)
      },
      watch: {
        $route(){
          this.tableNum = 1
          this.days = ''
          this.$nextTick(() => {
            this.selectDay(0)
          })
          this.tableTitle = this.$route.query.name
          this.sendParmas.state = 1
          this.sendParmas.fromTime = this.timeTool(new Date()) + ' 00:00:00'
          this.sendParmas.toTime = this.timeTool(new Date()) + ' 23:59:00'
          this.sendParmas.id = this.$route.query.id
          this.seachCondition()
        }
      },
      methods: {
        ...mapActions([
          "getAgencyCountList",
          'getAgencyOrderList',
        ]),
        timeTool(d){
          var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
          return datetime;
        },
        // 时间
        getTimer(start,end){
          this.sendParmas.fromTime = start
          this.sendParmas.toTime = end
        },
        // 快捷选时
        selectDay(d){
          this.days = d
        },
        // 搜索
        seachCondition(){
          this.sendParmas.page = 1
          this.tableNum = 1
          this.getAgencyCountList(this.sendParmas)
        },
        // 分页
        handlePage (data) {
          this.sendParmas.page = data.page
          this.sendParmas.limit = data.limit
          this.getAgencyCountList(this.sendParmas)
        },
        // 查看详情
        countDetail (item) {
          this.tableNum = 2
          this.agencyOrderParams.agency_id = this.$route.query.id
          this.agencyOrderParams.uid = item.uid
          this.agencyOrderParams.page = 1
          this.agencyOrderParams.limit = 20
          this.agencyOrderParams.fromTime = this.sendParmas.fromTime
          this.agencyOrderParams.toTime = this.sendParmas.toTime
          this.getAgencyOrderList(this.agencyOrderParams)
        },
        countDetailHandle (data) {
          this.agencyOrderParams.page = data.page
          this.agencyOrderParams.limit = data.limit
          this.getAgencyOrderList(this.agencyOrderParams)
        }
      },
      computed: {
        ...mapState([
          "tableStore",//报表查询
        ]),
        // 列表分页data
        getPageData () {
          return {
            page: this.sendParmas.page,
            limit: this.sendParmas.limit,
            sum: this.tableStore.dataAgencyCountList.data.count || 0
          }
        },
        // 详情分页参数
        getCountPageData () {
          return {
            page: this.agencyOrderParams.page,
            limit: this.agencyOrderParams.limit,
            sum: this.tableStore.agencyOrderList.data.count || 0
          }
        },
      }
    }
  </script>
<style lang="less" scoped>
.head{
  text-align: left;
}
.goBack_td{
  position: relative;
  height: 32px;
  button{
    position: absolute;
    top: 5px;
    right: 20px;
    padding: 2px 10px;
  }
}
.testNumber{
  margin-left: 10px;
}
</style>
