<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>
          <b style="color:red;">{{getName}}</b>{{$L.t('agent.agent_8.zh12')}}:
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
            <div>{{$L.t('table.username')}}：
              <input type="text" v-model="agentXjtxObj.username" :placeholder="$L.t('agent.agent_1.import')">
            </div>
            <timer class="submitSeach" @sendTime="getTimer" :day="days" :paramTime="agentXjtxObj"></timer>
            <div class="submitSeach">
              <input type="submit" :value="$L.t('submit')" @click="searchTixFn">
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
        <td>{{$L.t('table.realJE')}}</td>
        <td>{{$L.t('table.sxFEI')}}</td>
        <th>{{$L.t('table.bankType')}}</th>
        <th>{{$L.t('table.khName')}}</th>
        <th>{{$L.t('table.bankId')}}</th>
        <th>{{$L.t('table.khhang')}}</th>
        <th>{{$L.t('table.subTime')}}</th>
        <th>{{$L.t('table.sureTime')}}</th>
        <th>{{$L.t('table.status')}}</th>
        <th>{{$L.t('table.remark')}}</th>
      </tr>
      <tr class="odd" v-for="(t,index) in agentStore.agentCashList.data.data">
        <td>{{index+1}}</td>
        <td>
          {{t.userAccount}}
        </td>
        <td>{{t.amount}}</td>
        <td>{{t.fee}}</td>
        <td>{{t.bankName}}</td>
        <td>{{t.username}}</td>
        <td>{{t.account}}</td>
        <td>{{t.countname}}</td>
        <td>{{getTimes(t.actionTime)}}</td>
        <td>{{getTimes(t.addTime)}}</td>
        <td>{{txState(t.state)}}</td>
        <td>{{t.info}}</td>
      </tr>
      <tr v-if="getTixPageData.sum > 0">
        <td colspan="12">
          <page-limit :pageData="getTixPageData" :inputShow="'1'" @handlePage="tixPageFn"></page-limit>
        </td>
      </tr>
      <tr v-if="!agentStore.agentCashList.data.data">
        <td colspan="12" class="nodata">{{$L.t('noData')}}</td>
      </tr>
      <tr v-if="agentStore.agentCashList.data.data">
        <td colspan="12" class="nodata">{{$L.t('agent.agent_8.zh13')}}: <span style="color:red;">{{agentStore.agentCashList.data.amount}}{{$L.t('yuan')}}</span></td>
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
        agentXjtxObj:{
          uid:'',
          fromTime:"",
          toTime:'',
          username:'',
          page:1,
          limit:'15'
        }
      }
    },
    created (){
      this.getName = this.paramsData.name
      this.agentXjtxObj.uid = this.paramsData.uid
      this.agentXjtxObj.fromTime = this.paramsData.startTime
      this.agentXjtxObj.toTime = this.paramsData.endTime
      this.getAgentCash(this.agentXjtxObj)
    },
    mounted(){

    },
    methods: {
      ...mapMutations([

      ]),

      ...mapActions([
        "getAgentCash"
      ]),
      searchTixFn(){
        this.agentXjtxObj.page = 1
        this.agentXjtxObj.limit = 15
        this.agentXjtxObj.fromTime = this.startTime || this.paramsData.startTime
        this.agentXjtxObj.toTime = this.endTime || this.paramsData.endTime
        this.getAgentCash(this.agentXjtxObj)
      },
      tixPageFn(data){
        this.agentXjtxObj.fromTime = this.startTime || this.paramsData.startTime
        this.agentXjtxObj.toTime = this.endTime || this.paramsData.endTime
        this.agentXjtxObj.page = data.page
        this.agentXjtxObj.limit = data.limit
        this.getAgentCash(this.agentXjtxObj)
      },
      selectDay(day){
        this.days = day
      },
      getTimer(start,end){
        this.startTime = start
        this.endTime = end
      },
      getLocalTime(nS) {
        let sj = nS*1000
        return new Date(parseInt(sj)).toLocaleString().replace(/:\d{1,2}$/,' ');
      },
      txState(val){
        let txt = '';
        switch (val*1){
          case 0 : return txt = this.$L.t('agent.agent_8.zh14');break;
          case 1 : return txt = this.$L.t('agent.agent_8.zh15');break;
          case 2 : return txt = this.$L.t('agent.agent_8.zh16');break;
          case 3 : return txt = this.$L.t('agent.agent_8.zh17');break;
          case 4 : return txt = this.$L.t('agent.agent_8.zh18');break;
          case 5 : return txt = this.$L.t('agent.agent_8.zh19');break;
        }
      },
    },
    components:{

    },
    computed: {
      ...mapState([
        "agentStore",
      ]),
      getTixPageData(){
        return {
          page: this.agentXjtxObj.page,
          limit: this.agentXjtxObj.limit,
          sum: this.agentStore.agentCashList.data.count || 0
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
