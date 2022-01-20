<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>
          {{$L.t('agent.agent_2.title')}}:
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
            <div class="submitSeach">{{$L.t('table.username')}}
              <input type="text" :placeholder="$L.t('table.username')" v-model="agentXjfdObj.username">
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
        <th>{{$L.t('table.remark')}}</th>
      </tr>
      <tr class="odd" v-for="(tz,index) in memberStore.appCoinLogList.data.data">
        <td>{{tz.username}}</td>
        <td>
          {{getTypeName(tz.liqType)}}
        </td>
        <td style="color: #1E9FFF;">{{tz.order}} &nbsp;<button @click="lookOrderDetail(tz.extfield0,tz.logtype)">{{$L.t('check')}}</button></td>
        <td>{{tz.game}}</td>
        <td>{{tz.play}}</td>
        <td>{{tz.actionNo}}</td>
        <td>{{tz.pattern}}</td>
        <td>{{tz.userCoin}}</td>
        <td :class="tz.coin>0?'red':'lose'">{{tz.coin}}</td>
        <td>{{getTimes(tz.actionTime)}}</td>
        <td>{{tz.info}}</td>
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
    <el-dialog
      :title="$L.t('agent.agent_2.betDetail')"
      :visible.sync="orderState"
      width="820px">
      <div class="user_detail" v-if="orderState">
        <table class="table">
          <tbody>
          <tr>
            <td style="text-align: center">{{$L.t('table.betNumber')}}：</td>
            <td colspan="3">{{memberStore.betInfoObj.data.number}}</td>
          </tr>
          <tr>
            <td style="text-align: center">{{$L.t('table.danhao')}}：</td>
            <td>{{memberStore.betInfoObj.data.wjorderId}}</td>
            <td style="text-align: center">{{$L.t('table.betSum')}}：</td>
            <td>{{memberStore.betInfoObj.data.actionNum}}</td>
          </tr>
          <tr>
            <td style="text-align: center">{{$L.t('table.sendPerson')}}：</td>
            <td>{{memberStore.betInfoObj.data.username}}</td>
            <td style="text-align: center">{{$L.t('table.model')}}：</td>
            <td>{{memberStore.betInfoObj.data.moshi}}</td>
          </tr>
          <tr>
            <td style="text-align: center">{{$L.t('table.beishu')}}：</td>
            <td>{{memberStore.betInfoObj.data.bonusProp}}</td>
            <td style="text-align: center">{{$L.t('table.winzs')}}：</td>
            <td>{{memberStore.betInfoObj.data.multiple}}</td>
          </tr>
          <tr>
            <td style="text-align: center">{{$L.t('table.caizhong')}}： </td>
            <td>{{memberStore.betInfoObj.data.species}}</td>
            <td style="text-align: center">{{$L.t('table.peilvfandian')}}： </td>
            <td>{{memberStore.betInfoObj.data.bonusProp}}--{{memberStore.betInfoObj.data.fanDian}}%</td>
          </tr>
          <tr>
            <td style="text-align: center">{{$L.t('table.issue')}}： </td>
            <td>{{memberStore.betInfoObj.data.actionNo}}</td>
            <td style="text-align: center">{{$L.t('table.playType')}}：</td>
            <td>{{memberStore.betInfoObj.data.play}}</td>
          </tr>
          <tr>
            <td style="text-align: center">{{$L.t('table.lotteryNum')}}：</td>
            <td>{{memberStore.betInfoObj.data.lotteryNo}}</td>
            <td style="text-align: center">{{$L.t('table.benTime')}}：</td>
            <td>{{getTimes(memberStore.betInfoObj.data.actionTime)}}</td>
          </tr>
          <tr>
            <td style="text-align: center">{{$L.t('table.orderStatus')}}：</td>
            <td>{{memberStore.betInfoObj.data.status}}</td>
            <td style="text-align: center">{{$L.t('table.laiyuan')}}：</td>
            <td>{{loginFilter(memberStore.betInfoObj.data.betType)}}</td>
          </tr>
          <tr>
            <td style="text-align: center">{{$L.t('table.bet')}}：</td>
            <td>{{memberStore.betInfoObj.data.betCont}}</td>
            <td style="text-align: center">{{$L.t('table.winner')}}：</td>
            <td>{{memberStore.betInfoObj.data.zjbonus}}</td>
          </tr>
          <tr>
            <td style="text-align: center">{{$L.t('table.lastFd')}}：</td>
            <td>{{memberStore.betInfoObj.data.sjfd}}</td>
            <td style="text-align: center">{{$L.t('table.grYK')}}：</td>
            <td>{{memberStore.betInfoObj.data.profit}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </el-dialog>
  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  import {getTimes} from '../../common/common'
  export default {
    data () {
      return {
        days:'',
        startTime:'',
        endTime:'',
        getName:'',
        agentXjfdObj:{
          fromTime:"",
          toTime:'',
          page:1,
          limit:'20',
          username:'',
          type:'',
          liqType:'2',
        },
        getTimes,
        orderState:false,
      }
    },
    created (){
      this.getCoinLog(this.agentXjfdObj)
    },
    mounted(){

    },
    methods: {
      ...mapMutations([

      ]),
      ...mapActions([
        "getCoinLog",
        "getBetInfo"
      ]),
//      查看订单详情
      lookOrderDetail(od,type){
        this.getBetInfo({order:od,logtype:type}).then((res)=>{
          if(res.code == 0){
            this.orderState = true
          }
        })

      },
      searchFdianFn(){
        // this.agentXjfdObj.page = 1
        // this.agentXjfdObj.limit = '20'
        this.agentXjfdObj.fromTime = this.startTime
        this.agentXjfdObj.toTime = this.endTime
        this.getCoinLog(this.agentXjfdObj)
      },
      fdPageFn(data){
        this.agentXjfdObj.fromTime = this.startTime
        this.agentXjfdObj.toTime = this.endTime
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
      loginFilter(val){
        let txt = '';
        switch (val*1){
          case 1 : return txt = this.$L.t('agent.agent_2.PC');break;
          case 2 : return txt = this.$L.t('agent.agent_2.Mobile');break;
          case 3 : return txt = this.$L.t('agent.agent_2.IOS');break;
          case 4 : return txt = this.$L.t('agent.agent_2.Android');break;
        }
      }
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
  .user_detail {
    height: 400px;
    overflow: auto;
    padding: 10px;

  }
</style>
