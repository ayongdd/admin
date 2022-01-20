<template>
    <div class="gameInfo-container">
      <button class="gameBack" v-if="tableNum > 1" @click="tableBack()">{{$L.t('common.go-1')}}</button>
      <!-- 第一层详情 -->
      <table class="table" v-if="tableNum == 1">
        <tr class="head">
          <td>{{$L.t('agent.agent_8.zh86')}}</td>
          <td>{{$L.t('common.fsrs')}}</td>
          <td>{{$L.t('agent.agent_8.zh52')}}</td>
          <td>{{$L.t('agent.agent_8.zh53')}}</td>
          <td>{{$L.t('agent.agent_8.zh54')}}</td>
          <td>{{$L.t('common.fsje')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr class="odds" v-for="(item,index) in moneyStore.dataFanshuiCount.data.data" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.userNum}}</td>
          <td>{{item.bets}}</td>
          <td>{{item.cellScore}}</td>
          <td>{{item.profit}}</td>
          <td>{{item.bonus}}</td>
          <td>
            <button @click="tableChange(1, item)">{{$L.t('agent.agent_8.zh57')}}</button>
          </td>
        </tr>
        <tr v-if="gameAgentPage.sum > 0">
          <td colspan="9">
            <page-limit class="padding_page" :pageData="gameAgentPage" @handlePage="gameHandlePage"></page-limit>
          </td>
        </tr>
        <tr v-if="gameAgentPage.sum == 0">
          <td colspan="9" style="text-align: center;">{{$L.t('noData')}}</td>
        </tr>
      </table>
      <!-- 第二层详情 -->
      <table class="table" v-if="tableNum == 2">
        <tr class="head">
          <td>{{$L.t('table.username')}}</td>
          <td>{{$L.t('agent.agent_8.zh52')}}</td>
          <td>{{$L.t('agent.agent_8.zh53')}}</td>
          <td>{{$L.t('agent.agent_8.zh54')}}</td>
          <td>{{$L.t('agent.agent_8.zh46')}}</td>
          <!-- <td>返水百分比</td>
          <td>返水日期</td> -->
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr class="odds" v-for="item in moneyStore.dataFanshuiAgency.data.data">
          <td>{{item.username?item.username:$L.t('agent.agent_8.zh90')}}</td>
          <td>{{item.bets}}</td>
          <td>{{item.cellScore}}</td>
          <td>{{item.profit}}</td>
          <td>{{item.bonus}}</td>
          <td>
            <button @click="tableChange(2, item)">{{$L.t('agent.agent_8.zh57')}}</button>
          </td>
        </tr>
        <tr v-if="agentUserPage.sum > 0">
          <td colspan="8">
            <page-limit class="padding_page" :pageData="agentUserPage" @handlePage="agentHandlePage"></page-limit>
          </td>
        </tr>
        <tr v-if="agentUserPage.sum == 0">
          <td colspan="8" style="text-align: center;">{{$L.t('noData')}}</td>
        </tr>
      </table>
      <!-- 第三层详情 -->
      <table class="table" v-if="tableNum == 3">
        <tr class="head">
          <td>{{$L.t('table.username')}}</td>
          <td>{{$L.t('agent.agent_8.zh52')}}</td>
          <td>{{$L.t('agent.agent_8.zh53')}}</td>
          <td>{{$L.t('agent.agent_8.zh54')}}</td>
          <td>{{$L.t('agent.agent_8.zh46')}}</td>
          <td>{{$L.t('common.fsbfb')}}</td>
          <td>{{$L.t('common.fsrq')}}</td>
        </tr>
        <tr class="odds" v-for="item in electronicGame.waterList.data">
            <td>{{item.username}}</td>
            <td>{{item.bets}}</td>
            <td>{{item.cellScore}}</td>
            <td>{{item.profit}}</td>
            <td>{{item.bonus}}</td>
            <td>{{item.baifenbi}}</td>
            <td>{{item.actionTime}}</td>
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
    import { mapState, mapMutations, mapActions } from 'vuex'
    export default {
      props: ['parmasData'],
      data () {
        return {
          tableNum: 1,
          gameAgent: {
            page: 1,
            limit: 20,
            class_id:'',
            username:'',
            fromTime:'',
            toTime:''
          },
          agentUser: {
            page: 1,
            limit: 20,
            class_id:'',
            agency_id:'',
            username:'',
            fromTime:'',
            toTime:''
          },
          gameUserInfo: {
            page: 1,
            limit: 20,
            class_id:'',
            agency_id:'',
            username:'',
            uid:'',
            fromTime:'',
            toTime:'',
          },
          agenid:''
        }
      },
      computed: {
        ...mapState([
          'moneyStore',
          'electronicGame'
        ]),
        gameAgentPage () {
          return {
            page: this.gameAgent.page,
            limit: this.gameAgent.limit,
            sum: this.moneyStore.dataFanshuiCount.data.count || 0
          }
        },
        agentUserPage () {
          return {
            page: this.agentUser.page,
            limit: this.agentUser.limit,
            sum: this.moneyStore.dataFanshuiAgency.data.count || 0
          }
        },
        gameUserInfoPage () {
          return {
            page: this.gameUserInfo.page,
            limit: this.gameUserInfo.limit,
            sum: this.electronicGame.waterList.count || 0
          }
        },
      },
      created () {
        this.gameAgent.class_id = this.parmasData.class_id
        this.gameAgent.fromTime = this.parmasData.fromTime
        this.gameAgent.toTime = this.parmasData.toTime
        this.gameAgent.username = this.parmasData.username
        this.gameAgent.isAgent = this.parmasData.isAgent || '0'
        this.agentUser.isAgent = this.parmasData.isAgent || '0'
        this.gameUserInfo.isAgent = this.parmasData.isAgent || '0'
        this.getFanshuiCount(this.gameAgent)
      },
      methods: {
        ...mapActions([
          'getFanshuiCount',
          'getFanshuiAgency',
          'gameInfoListAction',
          // 返水列表
          'get_water_listAction'
        ]),

        tableChange (value, item) {
          this.tableNum = value * 1 + 1
          // 进入第二层
          if (value == 1) {
            this.agentUser.page = 1
            this.agentUser.limit = 20
            this.agentUser.class_id = this.parmasData.class_id
            this.agentUser.agency_id = item.agency_id//合作商id
            this.agentUser.username = this.parmasData.username
            this.agentUser.fromTime = this.parmasData.fromTime
            this.agentUser.toTime = this.parmasData.toTime
            this.agenid = item.agency_id
            this.getFanshuiAgency(this.agentUser)
          }
          // 进入第三层
          if (value == 2) {
            this.gameUserInfo.page = 1
            this.gameUserInfo.limit = 20
            this.gameUserInfo.class_id = this.parmasData.class_id
            this.gameUserInfo.agency_id = this.agenid
            this.gameUserInfo.username = item.username
            this.gameUserInfo.fromTime = this.parmasData.fromTime
            this.gameUserInfo.toTime = this.parmasData.toTime
            this.get_water_listAction(this.gameUserInfo)
          }
        },
        // table 返回事件
        tableBack () {
          this.tableNum--
        },
        // 第一层分页
        gameHandlePage (data) {
          this.gameAgent.page = data.page
          this.gameAgent.limit = data.limit
          this.getFanshuiCount(this.gameAgent)
        },
        // 第二层分页
        agentHandlePage (data) {
          this.agentUser.page = data.page
          this.agentUser.limit = data.limit
          this.getFanshuiAgency(this.agentUser)
        },
        // 第三层分页
        userHandlePage (data) {
          this.gameUserInfo.page = data.page
          this.gameUserInfo.limit = data.limit
          this.get_water_listAction(this.gameUserInfo);
        }
      },
    }
  </script>
  <style lang="less" scoped>
  // 返回按钮
  .gameBack{
    margin-left: 5px;
    padding: 2px 10px;
  }
  .gameInfo-container{
    height: 580px;
    overflow: auto;
    .table{
      margin:5px 5px 10px;
    }
  }
  .odds{
    background-color: #f2f2f2;
    font-size: 12px;
    color: #000000;
  }
  </style>
