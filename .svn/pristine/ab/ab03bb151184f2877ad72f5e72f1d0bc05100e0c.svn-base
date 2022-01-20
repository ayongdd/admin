<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>{{$L.t('agent.agent_8.zh51')}}:
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
          <td>{{$L.t('agent.agent_8.zh77')}}</td>
          <td>{{$L.t('agent.agent_0.betAll')}}</td>
          <td>{{$L.t('agent.agent_8.zh91')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr class="odd"  v-if="agentStore.dataBetsList.code == 0">
          <td>{{agentStore.dataBetsList.data.hz_data.uid_count}}</td>
          <td>{{agentStore.dataBetsList.data.hz_data.betAmount}}</td>
          <td>{{agentStore.dataBetsList.data.hz_data.zjAmount}}</td>
          <td>
            <button @click="nextTable(1)">{{$L.t('agent.agent_8.zh57')}}</button>
          </td>
        </tr>
        <tr v-if="agentStore.dataBetsList.code == 2">
          <td colspan="4" style="text-align: center;">{{$L.t('noData')}}</td>
        </tr>
      </tbody>
    </table>
    <table class="table" v-if="tabIndex == 1">
      <tbody>
        <tr class="head">
          <td>{{$L.t('agent.agent_8.zh89')}}</td>
          <td>{{$L.t('agent.agent_8.zh92')}}</td>
          <td>{{$L.t('table.betMoney')}}</td>
          <td>{{$L.t('table.winMoney')}}</td>
        </tr>
        <tr class="odd" v-for="(item,index) in agentStore.dataBetsList.data.data" :key="index">
          <td>{{item.title}}</td>
          <td>{{item.uid_count}}</td>
          <td>{{item.betAmount}}</td>
          <td>{{item.zjAmount}}</td>
        </tr>
        <tr v-if="gameUserInfoPage.sum > 0">
          <td colspan="9">
            <page-limit class="padding_page" :pageData="gameUserInfoPage" @handlePage="handleAgentPage"></page-limit>
          </td>
        </tr>
        <tr v-if="gameUserInfoPage.sum == 0">
          <td colspan="9" style="text-align: center;">{{$L.t('noData')}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  export default {
    props: ['paramsData'],
    data () {
      return {
        days:'',
        agentBroker:{
          page:1,
          limit:20,
          uid:'',
          status:'',
          fromTime:'',
          toTime:'',
        },
        tabIndex: 0,
      }
    },
    created (){
      this.agentBroker.uid = this.paramsData.uid
      this.agentBroker.status = this.paramsData.status
      this.agentBroker.fromTime = this.paramsData.startTime
      this.agentBroker.toTime = this.paramsData.endTime
      this.getBetsList(this.agentBroker)
    },
    methods: {
      ...mapMutations([
      ]),
      ...mapActions([
        "getBetsList",
        "getChessDataClass",
        "getChessDataAgency",
      ]),
      searchMyDownFn(){
        this.tabIndex = 0
        this.getBetsList(this.agentBroker)
      },
      selectDay(day){
        this.days = day
      },
      getTimer(start,end){
        this.agentBroker.fromTime = start
        this.agentBroker.toTime = end
      },
      nextTable (class_id,item) {
          this.tabIndex++
      },
      // 返回上一层
      prevTable () {
          this.tabIndex--
      },
      handleAgentPage(data){
        this.agentBroker.uid = this.paramsData.uid
        this.agentBroker.page = data.page
        this.agentBroker.limit = data.limit
        this.getBetsList(this.agentBroker)
      },
    },
    computed: {
      ...mapState([
        "agentStore",
        "moneyStore",
      ]),
			gameUserInfoPage () {
				return {
					page: this.agentBroker.page,
					limit: this.agentBroker.limit,
					sum: this.agentStore.dataBetsList.data.count || 0
				}
			},
    }
  }
</script>

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
