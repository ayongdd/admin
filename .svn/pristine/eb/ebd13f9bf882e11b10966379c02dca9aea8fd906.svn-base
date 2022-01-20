<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
        <tr class="nav">
          <td>
            {{$L.t('moneyAdmin.CouponsList.info1')}}:
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
                {{$L.t('bonusGame.MoneyQuery.zh2')}}:
                <select v-model="sendParmas.userTypes">
                  <option value="0">{{$L.t('bonusGame.MoneyQuery.zh3')}}</option>
                  <option value="1">{{$L.t('bonusGame.MoneyQuery.zh4')}}</option>
                </select>
              </div>
              <div class="submitSeach">
                {{$L.t('agent.agent_8.zh28')}}:
              </div>
              <div class="submitSeach">
                <input type="text" v-model="sendParmas.username">
              </div>

              <div class="submitSeach">
                {{$L.t('moneyAdmin.CouponsList.info6')}}:
              </div>
              <div class="submitSeach">
                <input type="text" v-model="sendParmas.codes">
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
          <td>{{$L.t('moneyAdmin.Coupons.info3')}}</td>
          <td>{{$L.t('moneyAdmin.CouponsList.info2')}}</td>
          <td>{{$L.t('annoucement.tcgg_1.addTime')}}</td>
          <td>{{$L.t('financial.zh58')}}</td>
          <td>{{$L.t('moneyAdmin.CouponsList.info3')}}</td>
          <td>{{$L.t('moneyAdmin.CouponsList.info4')}}</td>
          <td>{{$L.t('moneyAdmin.CouponsList.info5')}}</td>
        </tr>
        <tr v-for="(item, index) in moneyStore.couponsChangeList.data.data" :key="index">
          <td>{{item.title}}</td>
          <td>{{item.codes}}</td>
          <td>{{item.addTime}}</td>
          <td>{{item.expTime}}</td>
          <td>{{item.coin}}</td>
          <td :class="{'color-red': item.usertype == 9}">{{item.username}}</td>
          <td>{{item.rechargeTime}}</td>
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
          userTypes: 0,
          username: '',
          codes:''
        },
        days:''
      }
    },
    created (){
      this.getCouponsChangeList(this.sendParmas)
    },
    methods: {
      ...mapActions([
        'getCouponsChangeList'
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
        this.getCouponsChangeList(this.sendParmas)
      },
      // 分页
      handlePage (data) {
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit
        this.getCouponsChangeList(this.sendParmas)
      },
    },
    computed: {
      ...mapState([
        "moneyStore",
      ]),
      // 列表分页data
      getPageData () {
        return {
          page: this.sendParmas.page,
          limit: this.sendParmas.limit,
          sum: this.moneyStore.couponsChangeList.data.Count || 0
        }
      },
    }
  }
</script>
<style lang="css" scoped>
</style>
