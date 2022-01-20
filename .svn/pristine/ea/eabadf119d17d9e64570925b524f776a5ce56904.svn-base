<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>
          <b style="color:red;">{{getName}}</b>{{$L.t('agent.agent_8.zh1')}}:
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
            <div>{{$L.t('agent.agent_8.zh2')}}：
              <input type="text" v-model="agentXjczObj.rechargeId" :placeholder="$L.t('agent.agent_8.zh3')">
            </div>
            <div>{{$L.t('table.username')}}：
              <input type="text" v-model="agentXjczObj.username" :placeholder="$L.t('agent.agent_1.import')">
            </div>
            <div class="submitSeach" v-if="paramsData.typeShow != 1">{{$L.t('agent.agent_8.zh4')}}：
              <select v-model="agentXjczObj.type">
                <option value="">{{$L.t('agent.agent_8.zh5')}}</option>
                <option  value="1">{{$L.t('agent.agent_8.zh6')}}</option>
                <option  value="2">{{$L.t('agent.agent_8.zh7')}}</option>
                <option  value="3">{{$L.t('agent.agent_8.zh8')}}</option>
              </select>
            </div>
            <div class="submitSeach">{{$L.t('agent.agent_8.zh9')}}：
              <select v-model="agentXjczObj.bank">
                <option value="">{{$L.t('agent.agent_8.zh10')}}</option>
                <option :value="b.id" v-for="b in agentStore.agentBankList.data">{{b.name}}</option>
              </select>
            </div>
            <timer class="submitSeach" @sendTime="getTimer" :day="days" :paramTime="agentXjczObj"></timer>
            <div class="submitSeach">
              <input type="submit" :value="$L.t('submit')" @click="searchCzFn()">
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
      <tr class="head">
        <td>{{$L.t('table.numbers')}}</td>
        <td>{{$L.t('table.username')}}</td>
        <td>{{$L.t('table.nikename')}}</td>
        <td>{{$L.t('table.rechargeMoney')}}</td>
        <td>{{$L.t('table.reality')}}</td>
        <th>{{$L.t('table.czbank')}}</th>
        <th>{{$L.t('table.rechargeType')}}</th>
        <th>{{$L.t('table.status')}}</th>
        <th>{{$L.t('table.remark')}}</th>
        <th>{{$L.t('table.rechargeTime')}}</th>
      </tr>
      <tr class="odd" v-for="(c,index) in agentStore.recharge_logList.data.data">
        <td>{{index+1}}</td>
        <td>{{c.username || ''}}</td>
        <td>{{c.nickname}}</td>
        <td>{{c.amount}}</td>
        <td>{{c.rechargeAmount}}</td>
        <td>{{c.bank}}</td>
        <td>{{scState(c.typeid)}}</td>
        <td :style="{color:c.state*1 == 1 ? 'green' : 'red'}">{{c.state*1 == 1 ? $L.t('success') : $L.t('fail')}}</td>
        <td>{{c.info}}</td>
        <td>{{getTimes(c.actionTime)}}</td>
      </tr>
      <tr v-if="getCunkPageData.sum > 0">
        <td colspan="12">
          <page-limit :pageData="getCunkPageData" :inputShow="'1'" @handlePage="cunkPageFn"></page-limit>
        </td>
      </tr>
      <tr v-if="!agentStore.recharge_logList.data.data">
        <td colspan="12" class="nodata">{{$L.t('noData')}}</td>
      </tr>
      <tr v-if="agentStore.recharge_logList.data.data">
        <td colspan="12" class="nodata">{{$L.t('agent.agent_8.zh11')}}: <span style="color:red;">{{agentStore.recharge_logList.data.amount || '0.00'}}{{$L.t('yuan')}}</span></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  import {getTimes} from '../../common/common'
  export default {
    props: ['paramsData'],
    data () {
      return {
        days:'',
        startTime:'',
        endTime:'',
        getName:'',
        getTimes,
        agentXjczObj:{
          uid:'',
          fromTime:"",
          toTime:'',
          username:'',
          rechargeId:'',
          type:'1',
          bank:'',
          page:1,
          limit:'15'
        }
      }
    },
    created (){
      if(this.paramsData.typeShow == 1){
        this.agentXjczObj.type = 3
      }
      this.getName = this.paramsData.name
      this.agentXjczObj.uid = this.paramsData.uid
      this.agentXjczObj.fromTime = this.paramsData.startTime
      this.agentXjczObj.toTime = this.paramsData.endTime
      this.getBankList()
      this.getRecharge_log(this.agentXjczObj)
    },
    mounted(){

    },
    methods: {
      ...mapMutations([

      ]),

      ...mapActions([
        "getBankList",
        "getRecharge_log"
      ]),
      cunkPageFn(data){
        this.agentXjczObj.fromTime = this.startTime || this.paramsData.startTime
        this.agentXjczObj.toTime = this.endTime || this.paramsData.endTime
        this.agentXjczObj.page = data.page
        this.agentXjczObj.limit = data.limit
        this.getRecharge_log(this.agentXjczObj)
      },
      searchCzFn(){
        this.agentXjczObj.page = 1
        this.agentXjczObj.limit = 15
        this.agentXjczObj.fromTime = this.startTime || this.paramsData.startTime
        this.agentXjczObj.toTime = this.endTime || this.paramsData.endTime
        if(this.paramsData.typeShow == 1){
          this.agentXjczObj.type = 3
        }
        this.getRecharge_log(this.agentXjczObj)
      },
      selectDay(day){
        this.days = day
      },
      getTimer(start,end){
        this.startTime = start
        this.endTime = end
      },
      scState(val){
        let txt = '';
        switch (val*1){
          case 1 : return txt =this.$L.t('agent.agent_0.zxcz');break;
          case 2 : return txt = this.$L.t('agent.agent_0.zzcc');break;
          case 3 : return txt = this.$L.t('agent.agent_0.xtzs');break;
          case 4 : return txt = this.$L.t('agent.agent_0.czdh');break;
          case 5 : return txt = this.$L.t('agent.agent_0.gethb');break;
          case 6 : return txt = this.$L.t('agent.agent_0.yhds');break;
          case 7 : return txt = this.$L.t('agent.agent_0.czkk');break;
        }
      },
      getLocalTime(nS) {
        let sj = nS*1000
        return new Date(parseInt(sj)).toLocaleString().replace(/:\d{1,2}$/,' ');
      },
    },
    components:{

    },
    computed: {
      ...mapState([
        "agentStore",
      ]),
      getCunkPageData(){
        return {
          page: this.agentXjczObj.page,
          limit: this.agentXjczObj.limit,
          sum: this.agentStore.recharge_logList.data.count || 0
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
  .timeShow {
    flex-wrap: wrap;
  }
  .timeShow input{
    width: 130px;
  }
  .timeShow input.filter{
    width: 60px;
  }
  .timeShow div{
    margin-bottom: 5px;
  }
</style>
