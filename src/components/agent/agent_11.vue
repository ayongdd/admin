<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>
          <b style="color:red;">{{getName}}</b>{{$L.t('agent.agent_8.zh26')}}:
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
            <timer class="submitSeach" @sendTime="getTimer" :day="days" :paramTime="agentXjfdObj"></timer>
            <div class="submitSeach">{{$L.t('table.zbType')}}
              <select v-model="agentXjfdObj.liqType">
                <option value="">{{$L.t('agent.agent_2.all')}}</option>
                <option v-for="(item,index) in memberStore.appCoinLogList.data.liqTypeName" :key="index" :value="index">{{item}}</option>
              </select>
            </div>
            <div class="submitSeach">{{$L.t('agent.agent_2.czsz')}}
              <select v-model="agentXjfdObj.type">
                <option value="">{{$L.t('agent.agent_2.all')}}</option>
                <option v-for="(item,index) in memberStore.appCoinLogList.data.types" :key="index" :value="item.id">{{item.title}}</option>
              </select>
            </div>
            <div class="submitSeach">
              <input type="submit" :value="$L.t('agent.agent_2.checked')" @click="searchFdianFn()">
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
        <td>{{$L.t('table.zbType')}}</td>
        <td>{{$L.t('table.danhao')}}</td>
        <td>{{$L.t('table.game')}}</td>
        <td>{{$L.t('table.playType')}}</td>
        <th>{{$L.t('table.issue')}}</th>
        <th>{{$L.t('table.model')}}</th>
        <th>{{$L.t('table.zijin')}}</th>
        <th>
          {{$L.t('table.yue')}}
        </th>
        <th>{{$L.t('table.time')}}</th>
      </tr>
      <tr class="odd" v-for="(tz,index) in memberStore.appCoinLogList.data.data">
        <td>{{tz.username}}</td>
        <td>
          {{getTypeName(tz.liqType)}}
        </td>
        <td>{{tz.order}}</td>
        <td>{{tz.game}}</td>
        <td>{{tz.play}}</td>
        <td>{{tz.actionNo}}</td>
        <td>{{tz.pattern}}</td>
        <td>{{tz.userCoin}}</td>
        <td :class="tz.coin>0?'red':'lose'">{{tz.coin}}</td>
        <td>{{getTimes(tz.actionTime)}}</td>
      </tr>
      <tr v-if="getFdPageData.sum >0">
        <td colspan="15">
          <page-limit :pageData="getFdPageData" :inputShow="'1'" @handlePage="fdPageFn"></page-limit>
        </td>
      </tr>
      <tr v-if="!memberStore.appCoinLogList.data.data">
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
        agentXjfdObj:{
          fromTime:"",
          toTime:'',
          page:1,
          limit:'10',
          liqType:'2',
          type:'',
          uid:'',
        }
      }
    },
    created (){
      this.agentXjfdObj.liqType = 2
      this.getName = this.paramsData.name
      this.agentXjfdObj.uid = this.paramsData.uid
      this.agentXjfdObj.fromTime = this.paramsData.startTime
      this.agentXjfdObj.toTime = this.paramsData.endTime
      this.getCoinLog(this.agentXjfdObj)
    },
    mounted(){

    },
    methods: {
      ...mapMutations([

      ]),

      ...mapActions([
        "getCoinLog"
      ]),
      searchFdianFn(){
        this.agentXjfdObj.page = 1
        this.agentXjfdObj.limit = 10
        this.agentXjfdObj.fromTime = this.startTime || this.paramsData.startTime
        this.agentXjfdObj.toTime = this.endTime || this.paramsData.endTime
        this.getCoinLog(this.agentXjfdObj)
      },
      fdPageFn(data){
        this.agentXjfdObj.fromTime = this.startTime || this.paramsData.startTime
        this.agentXjfdObj.toTime = this.endTime || this.paramsData.endTime
        this.agentXjfdObj.page = data.page
        this.agentXjfdObj.limit = data.limit
        this.getCoinLog(this.agentXjfdObj)
      },
      getTypeName (type) {
        for (let k in this.memberStore.appCoinLogList.data.liqTypeName) {
          if (k == type) {
            return this.memberStore.appCoinLogList.data.liqTypeName[k]
          }
        }
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
        "memberStore"
      ]),
      getFdPageData(){
        return {
          page: this.agentXjfdObj.page,
          limit: this.agentXjfdObj.limit,
          sum: this.memberStore.appCoinLogList.data.count || 0
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
