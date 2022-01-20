<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td colspan="12">
          <b style="color:red;">{{getName}}</b>{{$L.t('agent.agent_8.zh20')}}:
          <input type="button" :value="$L.t('today')" @click="selectDay(0)">
          <input type="button" :value="$L.t('yesterday')" @click="selectDay(1)">
          <input type="button" :value="$L.t('thisWeek')" @click="selectDay(6)">
          <input type="button" :value="$L.t('lastWeek')" @click="selectDay(14)">
          <input type="button" :value="$L.t('thisMonth')" @click="selectDay(30)">
          <input type="button" :value="$L.t('lastMonth')" @click="selectDay(60)">
          &nbsp; &nbsp; &nbsp;
          <span class="touzhu" @click="selectState(1)" :class="{on:agentXjtzObj.status*1 == 1}">
            {{$L.t('table.winner')}}
          </span>
          <span class="touzhu" @click="selectState(2)" :class="{on:agentXjtzObj.status*1 == 2}">
            {{$L.t('agent.agent_8.zh21')}}
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <div class="timeShow">
            <timer class="submitSeach" @sendTime="getTimer" :day="days" :paramTime="agentXjtzObj"></timer>

            <div>{{$L.t('table.issue')}}：
              <input type="text" v-model="agentXjtzObj.actionNo" :placeholder="$L.t('agent.agent_8.zh22')">
            </div>
            <div>{{$L.t('table.danhao')}}：
              <input type="text" v-model="agentXjtzObj.wjorderId" :placeholder="$L.t('agent.agent_8.zh23')">
            </div>
            <div>{{$L.t('table.username')}}：
              <input type="text" v-model="agentXjtzObj.username" :placeholder="$L.t('agent.agent_1.import')">
            </div>
            <div class="submitSeach">{{$L.t('agent.agent_8.zh24')}}
              <select v-model="agentXjtzObj.type">
                <option value="">{{$L.t('agent.agent_2.all')}}</option>
                <option :value="key" v-for="(cz,key,index) in agentStore.betlogList.data.species">{{cz.title}}</option>
              </select>
            </div>
            <div class="submitSeach">
              <input type="submit" :value="$L.t('agent.agent_2.checked')" @click="searchBetFn()">
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
      <tr class="head">
        <td>{{$L.t('table.danhao')}}</td>
        <td>{{$L.t('table.username')}}</td>
        <td>{{$L.t('table.benTime')}}</td>
        <td>{{$L.t('table.caizhong')}}</td>
        <th>{{$L.t('table.playType')}}</th>
        <th>{{$L.t('table.issue')}}</th>
        <th>{{$L.t('table.beishu')}}</th>
        <th>{{$L.t('table.zhuS')}}</th>
        <th>
          {{$L.t('table.betNumber')}}
        </th>
        <th>{{$L.t('table.betMoney')}}</th>
        <th>{{$L.t('table.winMoney')}}</th>
        <th>{{$L.t('agent.agent_8.zh25')}}</th>
      </tr>
      <tr class="odd" v-for="tz in agentStore.betlogList.data.data">
        <td>{{tz.wjorderId}}</td>
        <td >
          {{tz.username}}
        </td>
        <td>{{getTimes(tz.actionTime)}}</td>
        <td>{{tz.species}}</td>
        <td>{{tz.play}}</td>
        <td>{{tz.actionNo}}</td>
        <td>{{tz.bonusProp}}</td>
        <td>{{tz.actionNum}}</td>
        <td>{{tz.actionData}}</td>
        <td>{{tz.beiShu}}</td>
        <td>{{tz.bonus}}</td>
        <td>{{tz.fanDian}}</td>
      </tr>
      <tr v-if="getBetPageData.sum > 0">
        <td colspan="15">
          <page-limit :pageData="getBetPageData" :inputShow="'1'" @handlePage="betPageFn"></page-limit>
        </td>
      </tr>
      <tr v-if="!agentStore.betlogList.data.data">
        <td colspan="15" class="nodata">{{$L.t('noData')}}</td>
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
        agentXjtzObj:{
          uid:'',
          fromTime:"",
          toTime:'',
          username:'',
          wjorderId:'',
          actionNo:'',
          type:'',
          page:1,
          limit:'15',
          status:'',
        },

      }
    },
    created (){
      try {
        if(this.paramsData.status){
          this.agentXjtzObj.status = this.paramsData.status || ''
        }
      }catch (e){

      }
      this.getName = this.paramsData.name
      this.agentXjtzObj.uid = this.paramsData.uid
      this.agentXjtzObj.fromTime = this.paramsData.startTime
      this.agentXjtzObj.toTime = this.paramsData.endTime
      this.getBetlog(this.agentXjtzObj)
    },
    mounted(){

    },
    methods: {
      ...mapMutations([

      ]),

      ...mapActions([
        "getBetlog"
      ]),
      selectState(num){
        this.agentXjtzObj.status = num
        this.agentXjtzObj.fromTime = this.startTime || this.paramsData.startTime
        this.agentXjtzObj.toTime = this.endTime || this.paramsData.endTime
        this.getBetlog(this.agentXjtzObj)
      },
      searchBetFn(){
        this.agentXjtzObj.page = 1
        this.agentXjtzObj.limit = 15
        this.agentXjtzObj.fromTime = this.startTime || this.paramsData.startTime
        this.agentXjtzObj.toTime = this.endTime || this.paramsData.endTime
        this.getBetlog(this.agentXjtzObj)
      },
      betPageFn(data){
        this.agentXjtzObj.fromTime = this.startTime || this.paramsData.startTime
        this.agentXjtzObj.toTime = this.endTime || this.paramsData.endTime
        this.agentXjtzObj.page = data.page
        this.agentXjtzObj.limit = data.limit
        this.getBetlog(this.agentXjtzObj)
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
    },
    components:{

    },
    computed: {
      ...mapState([
        "agentStore",
      ]),
      getBetPageData(){
        return {
          page: this.agentXjtzObj.page,
          limit: this.agentXjtzObj.limit,
          sum: this.agentStore.betlogList.data.count || 0
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
  .clearfloat .touzhu{
    display: inline-block;
    padding: 0 10px;
    border: 1px solid #666;
    border-radius: 5px;
  }
  .clearfloat .touzhu.on{
    color:red;
  }
</style>
