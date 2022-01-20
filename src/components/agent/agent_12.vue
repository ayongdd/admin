<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>
          <b style="color:red;">{{getName}}</b>{{$L.t('agent.agent_8.zh27')}}:
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
            <timer class="submitSeach" @sendTime="getTimer" :day="days" :paramTime="agentXjyhObj"></timer>
            <div>{{$L.t('agent.agent_8.zh28')}}：
              <input type="text" v-model="agentXjyhObj.username" :placeholder="$L.t('agent.agent_8.zh28')">
            </div>
            <div>{{$L.t('agent.agent_8.zh2')}}：
              <input type="text" v-model="agentXjyhObj.rechargeId" :placeholder="$L.t('agent.agent_8.zh2')">
            </div>
            <div class="submitSeach">{{$L.t('agent.agent_8.zh29')}}
              <select v-model="agentXjyhObj.type">
                <option value="">{{$L.t('agent.agent_8.zh5')}}</option>
                <option  value="1">{{$L.t('agent.agent_8.zh6')}}</option>
                <option  value="2">{{$L.t('agent.agent_8.zh7')}}</option>
                <option  value="3">{{$L.t('agent.agent_8.zh8')}}</option>
              </select>
            </div>
            <div class="submitSeach">{{$L.t('agent.agent_8.zh9')}}
              <select v-model="agentXjyhObj.bank">
                <option value="">{{$L.t('agent.agent_2.all')}}</option>
                <option :value="b.id" v-for="b in agentStore.agentBankList.data">{{b.name}}</option>
              </select>
            </div>
            <div class="submitSeach">
              <input type="submit" :value="$L.t('agent.agent_2.checked')" @click="searchYhFn()">
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
        <th>{{$L.t('table.reality')}}</th>
        <th>{{$L.t('agent.agent_8.zh2')}}</th>
        <th>{{$L.t('table.czbank')}}</th>
        <th>{{$L.t('table.rechargeType')}}</th>
        <th>
          {{$L.t('table.status')}}
        </th>
        <th>{{$L.t('table.remark')}}</th>
      </tr>
      <tr class="odd" v-for="(yh,index) in agentStore.recharge_logList.data.data">
        <td>{{index+1}}</td>
        <td >
        {{yh.username}}
        </td>
        <td>{{yh.nickname}}</td>
        <td>{{yh.amount}}</td>
        <td>{{yh.rechargeAmount}}</td>
        <td>{{yh.rechargeId}}</td>
        <td>{{yh.bank}}</td>
        <td>{{scState(yh.typeid)}}</td>
        <td>{{yh.state*1 == 1 ? $L.t('success') : $L.t('fail')}}</td>
        <td>{{yh.info}}</td>
      </tr>
      <tr v-if="getYhPageData.sum > 0">
        <td colspan="15">
          <page-limit :pageData="getYhPageData" :inputShow="'1'" @handlePage="yhPageFn"></page-limit>
        </td>
      </tr>
      <tr v-if="!agentStore.recharge_logList.data.data">
        <td colspan="15" class="nodata">{{$L.t('noData')}}</td>
      </tr>
      <tr v-if="agentStore.recharge_logList.data.data">
        <td colspan="15" class="nodata">{{$L.t('agent.agent_8.zh30')}}: <span style="color:red;">{{agentStore.recharge_logList.data.amount}}{{$L.t('yuan')}}</span></td>
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
        startTime:'',
        endTime:'',
        getName:'',
        agentXjyhObj:{
          fromTime:"",
          toTime:'',
          page:1,
          limit:'10',
          username:'',
          rechargeId:'',
          type:'3',
          bank:'',
        }
      }
    },
    created (){
      this.getBankList()
      this.getName = this.paramsData.name
      this.agentXjyhObj.uid = this.paramsData.uid
      this.agentXjyhObj.fromTime = this.paramsData.startTime
      this.agentXjyhObj.toTime = this.paramsData.endTime
      this.getRecharge_log(this.agentXjyhObj)
    },
    mounted(){

    },
    methods: {
      ...mapMutations([

      ]),

      ...mapActions([
        "getRecharge_log",
        "getBankList"
      ]),
      searchYhFn(){
        this.agentXjyhObj.page =1
        this.agentXjyhObj.limit = 10
        this.agentXjyhObj.fromTime = this.startTime || this.paramsData.startTime
        this.agentXjyhObj.toTime = this.endTime || this.paramsData.endTime
        this.getRecharge_log(this.agentXjyhObj)
      },
      yhPageFn(data){
        this.agentXjyhObj.fromTime = this.startTime || this.paramsData.startTime
        this.agentXjyhObj.toTime = this.endTime || this.paramsData.endTime
        this.agentXjyhObj.page = data.page
        this.agentXjyhObj.limit = data.limit
        this.getRecharge_log(this.agentXjyhObj)
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
          case 9 : return txt = this.$L.t('agent.agent_0.zsCj');break;
          case 10 : return txt =this.$L.t('agent.agent_0.jfDH') ;break;
        }
      },
    },
    components:{

    },
    computed: {
      ...mapState([
        "agentStore",
      ]),
      getYhPageData(){
        return {
          page: this.agentXjyhObj.page,
          limit: this.agentXjyhObj.limit,
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
