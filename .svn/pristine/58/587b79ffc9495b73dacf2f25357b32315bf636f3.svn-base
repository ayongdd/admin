<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>
          <b style="color:red;">{{getName}}</b>{{$L.t('agent.agent_8.zh42')}}:
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
            <!--<div>充值编号：-->
              <!--<input type="text" v-model="agentXjczObj.rechargeId" placeholder="请输入充值编号">-->
            <!--</div>-->
            <div>{{$L.t('table.username')}}：
              <input type="text" v-model="agentXjczObj.username" :placeholder="$L.t('agent.agent_1.import')">
            </div>
            <!--<div class="submitSeach" v-if="paramsData.typeShow != 1">充值状态：-->
              <!--<select v-model="agentXjczObj.type">-->
                <!--<option value="">所有状态</option>-->
                <!--<option  value="1">充值成功</option>-->
                <!--<option  value="2">充值失败</option>-->
                <!--<option  value="3">优惠赠送</option>-->
              <!--</select>-->
            <!--</div>-->
            <!--<div class="submitSeach">收款类型：-->
              <!--<select v-model="agentXjczObj.bank">-->
                <!--<option value="">所有类型</option>-->
                <!--<option :value="b.id" v-for="b in agentStore.agentBankList.data">{{b.name}}</option>-->
              <!--</select>-->
            <!--</div>-->

            <div class="submitSeach">{{$L.t('agent.agent_8.zh43')}}:
              <select v-model="agentXjczObj.type">
                <option value="0">{{$L.t('agent.agent_8.zh49')}}</option>
                <option value="1">{{$L.t('agent.agent_8.zh44')}}</option>
                <option value="2">{{$L.t('agent.agent_8.zh45')}}</option>
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
    <table class="table table2">
      <tbody>
      <tr class="head">
        <td>{{$L.t('table.numbers')}}</td>
        <th>{{$L.t('table.username')}}</th>
        <td>{{$L.t('agent.agent_8.zh93')}}</td>
        <td>{{$L.t('agent.agent_8.zh46')}}</td>
        <td>{{$L.t('agent.agent_8.zh47')}}</td>
        <td>{{$L.t('agent.agent_8.zh48')}}</td>
      </tr>
      <tr class="odd" v-for="(c,index) in agentStore.fanshuiList.data.data">
        <td>{{index+1}}</td>
        <td>{{c.username || ''}}</td>
        <td>{{c.uid}}</td>
        <td>{{c.coin}}</td>
        <td>{{getTimes(c.actionTime)}}</td>
        <td>{{c.info}}</td>
      </tr>
      <tr v-if="getCunkPageData.sum > 0">
        <td colspan="12">
          <page-limit :pageData="getCunkPageData" :inputShow="'1'" @handlePage="cunkPageFn"></page-limit>
        </td>
      </tr>
      <tr v-if="!agentStore.fanshuiList.data.data">
        <td colspan="12" class="nodata">{{$L.t('noData')}}</td>
      </tr>
      <!--<tr v-if="agentStore.fanshuiList.data.data">-->
        <!--<td colspan="12" class="nodata">本次统计充值总额: <span style="color:red;">{{agentStore.fanshuiList.data.amount || '0.00'}}元</span></td>-->
      <!--</tr>-->
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
          type:'0',
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
      // this.getRecharge_log(this.agentXjczObj)
      this.getFanshuiList(this.agentXjczObj);

      console.log(this.$store.state.agentStore.fanshuiList.data);
    },
    mounted(){

    },
    methods: {
      ...mapMutations([

      ]),
      ...mapActions([
        "getBankList",
        // "getRecharge_log",
        "getFanshuiList"
      ]),
      cunkPageFn(data){
        this.agentXjczObj.fromTime = this.startTime || this.paramsData.startTime
        this.agentXjczObj.toTime = this.endTime || this.paramsData.endTime
        this.agentXjczObj.page = data.page
        this.agentXjczObj.limit = data.limit
        this.getFanshuiList(this.agentXjczObj)
      },
      searchCzFn(){
        this.agentXjczObj.page = 1
        this.agentXjczObj.limit = 15
        this.agentXjczObj.fromTime = this.startTime || this.paramsData.startTime
        this.agentXjczObj.toTime = this.endTime || this.paramsData.endTime
        if(this.paramsData.typeShow == 1){
          this.agentXjczObj.type = 3
        }
        this.getFanshuiList(this.agentXjczObj)
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
          sum: this.agentStore.fanshuiList.data.count || 0
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
  .table2 tr td{
    text-align: center;
  }
</style>
