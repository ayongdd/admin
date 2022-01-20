<template>
  <div class="model_table table_550 log_content">
    <table class="table clearfloat">
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
            <div class="header_search">
              <timer @sendTime="getTimer" :day="days" :paramTime="seachData"></timer>
              <div class="submitSeach">
                <input type="text" v-model="seachData.username" :placeholder="$L.t('table.username')">
              </div>
              <div class="submitSeach">
                <input type="text" v-model="seachData.level" :placeholder="$L.t('chatRoom.zh56')">
              </div>
              <div class="submitSeach" @click="seachFormCommit()">
                <input type="submit" :value="$L.t('submit')">
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
        <tr class="head">
          <td>{{$L.t('table.username')}}</td>
          <!-- 升级奖励 -->
          <td v-if="seachData.type == 28">{{$L.t('common.zh9')}}</td>
          <td v-if="seachData.type == 28">{{$L.t('common.zh10')}}</td>
          <td v-if="seachData.type == 28">{{$L.t('table.rechargeMoney')}}</td>
          <td v-if="seachData.type == 28">{{$L.t('bonusGame.MoneyQuery.zh33')}}</td>
          <td v-if="seachData.type == 28">{{$L.t('table.time')}}</td>
          <!-- 每日加奖 -->
          <td v-if="seachData.type == 29">{{$L.t('chatRoom.zh56')}}</td>
          <td v-if="seachData.type == 29">{{$L.t('common.zh11')}}</td>
          <td v-if="seachData.type == 29">{{$L.t('common.zh12')}}(%)</td>
          <td v-if="seachData.type == 29">{{$L.t('common.zh13')}}</td>
          <td v-if="seachData.type == 29">{{$L.t('bonusGame.MoneyQuery.zh36')}}</td>
        </tr>
        <tr class="odd" v-for="(item, index) in specialOfferStore.dataRawardList.data.data" :key="index">
          <td >{{item.username}}</td>

           <!-- 升级奖励 -->
          <td v-if="seachData.type == 28">{{item.beforeLevel}}</td>
          <td v-if="seachData.type == 28">{{item.nowLevel}}</td>
          <td v-if="seachData.type == 28">{{item.rechargeAmount}}</td>
          <td v-if="seachData.type == 28">{{item.reward}}</td>
          <td v-if="seachData.type == 28">{{getTimes(item.time)}}</td>
          <!-- 每日加奖 -->
          <td v-if="seachData.type == 29">{{item.extfield1}}</td>
          <td v-if="seachData.type == 29">{{item.bets}}</td>
          <td v-if="seachData.type == 29">{{item.extfield2}}</td>
          <td v-if="seachData.type == 29">{{item.coin}}</td>
          <td v-if="seachData.type == 29">{{getTimes(item.actionTime)}}</td>
        </tr>
        <tr class="info_none" v-if="getMoreLogData.sum == 0">
          <td colspan="6">{{$L.t('noData')}}</td>
        </tr>
        <tr class="info_page" v-if="getMoreLogData.sum > 0">
          <td colspan="6">
            <page-limit :pageData="getMoreLogData" @handlePage="handleMoreLogPage"></page-limit>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  import {Message} from 'element-ui'
  import {getTimes} from '@/common/common'
  export default {
    props: ['setformData'],
    data () {
      return {
        days:'',
        seachData:{
          type:'',
          username:'',
          level:'',
          fromTime:'',
          toTime:'',
          page:'1',
          limit:'20'
        },
        getTimes,
      }
    },
    created (){
      this.seachData.type = this.setformData.type
      this.getRawardList(this.seachData)
    },
    methods: {
      ...mapActions([
        'getRawardList',
      ]),
      // 快捷选时
      selectDay(d){
        this.days = d
      },
      getTimer(start,end){
        this.seachData.fromTime = start
        this.seachData.toTime = end
      },
      handleMoreLogPage (data) {
        this.seachData.page = data.page
        this.seachData.limit = data.limit
        this.getRawardList(this.seachData)
      },
      // 搜索
      seachFormCommit(){
        this.seachData.page = 1
        this.getRawardList(this.seachData)
      },
    },
    computed: {
      ...mapState([
        'specialOfferStore'
      ]),
      getMoreLogData () {
        return {
          page: this.seachData.page,
          limit: this.seachData.limit,
          sum: this.specialOfferStore.dataRawardList.data.count || 0
        }
      },
    },
  }
</script>
<style lang="less" scoped>
.header_search{
  display: flex;
  align-items: center;
}
</style>
