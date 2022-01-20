<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>
          {{$L.t('lottery.zh1')}}:
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
            <div class="submitSeach">
              {{$L.t('table.username')}}: <input type="text" v-model="sendParmas.username">
            </div>
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
        <td> {{$L.t('table.username')}}</td>
        <td> {{$L.t('agent.agent_8.zh46')}}</td>
        <td> {{$L.t('common.fsbl')}}</td>
        <td> {{$L.t('agent.agent_8.zh47')}}</td>
      </tr>
      <tr v-for="(item, index) in lotteryStore.fanShuiList.data.data" :key="index">
        <td>{{item.username}}</td>
        <td>{{item.bonus}}</td>
        <td>{{item.baifenbi}}</td>
        <td>{{item.addDate}}</td>
      </tr>
      <tr v-if="getPageData.sum == 0">
        <td colspan="7" style="text-align: center">
          {{$L.t('noData')}}
        </td>
      </tr>
      <tr v-if="getPageData.sum > 0">
        <td colspan="7">
          <page-limit class="padding_page" :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
        </td>
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
          fromTime:'',
          toTime:'',
          username:'',
        },
        days:''
      }
    },
    created (){
      this.getFanShuiList(this.sendParmas)
    },
    methods: {
      ...mapActions([
        'getFanShuiList'
      ]),
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
        this.getFanShuiList(this.sendParmas)
      },
      // 分页
      handlePage (data) {
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit
        this.getFanShuiList(this.sendParmas)
      },
    },
    computed: {
      ...mapState([
        "lotteryStore",
      ]),
      // 列表分页data
      getPageData () {
        return {
          page: this.sendParmas.page,
          limit: this.sendParmas.limit,
          sum: this.lotteryStore.fanShuiList.data.count || 0
        }
      },
    }
  }
</script>
<style lang="css" scoped>
</style>
