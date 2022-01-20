<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>
          <!--  -->
          <b style="color:red;">{{paramsData.name}}</b>{{$L.t('agent.agent_8.zh50')}}{{paramsData.title}} &nbsp;&nbsp;&nbsp;&nbsp;{{$L.t('agent.agent_8.zh51')}}:
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
            <timer class="submitSeach" @sendTime="getTimer" :day="days" :paramTime="agentBroker"></timer>
            <div class="submitSeach">
              <input type="submit" :value="$L.t('submit')" @click="searchMyDownFn()">
              <input style="margin-left: 10px;" v-if="tabIndex > 0" type="submit" :value="$L.t('go-1')" @click="prevTable()">
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <table class="table" v-if="tabIndex == 0">
      <tbody>
        <tr class="head">
          <td>{{$L.t('agent.agent_8.zh52')}}</td>
          <td>{{$L.t('agent.agent_8.zh53')}}</td>
          <td>{{$L.t('agent.agent_8.zh54')}}</td>
          <td>{{$L.t('agent.agent_8.zh55')}}</td>
          <td>{{$L.t('agent.agent_8.zh56')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr class="odd" v-if="datacode == 0">
          <td>{{datalist.bets}}</td>
          <td>{{datalist.cellScore}}</td>
          <td>{{datalist.profit}}</td>
          <td>{{datalist.revenue}}</td>
          <td>{{datalist.fanshuiCount}}</td>
          <td>
            <button @click="nextTable(1)">{{$L.t('agent.agent_8.zh57')}}</button>
          </td>
        </tr>
        <tr v-if="datacode == 1">
          <td colspan="6" style="text-align: center;">{{$L.t('noData')}}</td>
        </tr>
      </tbody>
    </table>
    <table class="table" v-if="tabIndex == 1">
      <tbody>
        <tr class="head">
          <td>{{$L.t('agent.agent_8.zh58')}}</td>
          <td>{{$L.t('agent.agent_8.zh52')}}</td>
          <td>{{$L.t('agent.agent_8.zh59')}}</td>
          <td>{{$L.t('agent.agent_8.zh54')}}</td>
          <td>{{$L.t('agent.agent_8.zh55')}}</td>
          <td>{{$L.t('agent.agent_8.zh56')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr class="odd" v-for="(item,index) in agentStore.dataChessClass.data" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.bets}}</td>
          <td>{{item.cellScore}}</td>
          <td>{{item.profit}}</td>
          <td>{{item.revenue}}</td>
          <td>{{item.fanshuiCount}}</td>
          <td>
            <button @click="nextTable(2,item)">{{$L.t('agent.agent_8.zh57')}}</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 第三层详情 -->
    <table class="table" v-if="gameVisible">
      <tr class="head">
        <td>{{$L.t('agent.agent_8.zh60')}}</td>
        <td>{{$L.t('agent.agent_8.zh52')}}</td>
        <td>{{$L.t('agent.agent_8.zh53')}}</td>
        <td>{{$L.t('agent.agent_8.zh54')}}</td>
        <td>{{$L.t('agent.agent_8.zh55')}}</td>
        <td>{{$L.t('agent.agent_8.zh56')}}</td>
      </tr>
      <tr class="odd" v-for="(i,index) in agentStore.dataChessAgency.data" :key="index">
        <td>{{i.name}}</td>
        <td>{{i.bets}}</td>
        <td>{{i.cellScore}}</td>
        <td>{{i.profit}}</td>
        <td>{{i.revenue}}</td>
        <td>{{i.fanshuiCount}}</td>
      </tr>
      <tr v-if="agentStore.dataChessAgency.data.length == 0">
        <td colspan="6" style="text-align: center;">{{$L.t('noData')}}</td>
      </tr>
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
        agentBroker:{
          uid:'',
          fromTime:'',
          toTime:'',
        },
        // 商户 第三层
        gameAgent: {
          uid:'',
          fromTime:'',
          toTime:''
        },
        // 第四层服务商家下的用户
        agentUser: {
          uid:'',
          class_id:'',
          fromTime:'',
          toTime:''
        },
        // table
        tabIndex: 0,
        // 第三方详情表格
        gameVisible: false,
        datacode:'',
        datalist:{}
      }
    },
    created (){
      this.agentBroker.uid = this.paramsData.uid
      this.agentBroker.fromTime = this.paramsData.startTime
      this.agentBroker.toTime = this.paramsData.endTime
      this.getChessDataList(this.agentBroker).then(res=>{
        this.datacode = res.code
        this.datalist = res.data
      })
    },
    methods: {
      ...mapMutations([
      ]),
      ...mapActions([
        "getChessDataList",
        "getChessDataClass",
        "getChessDataAgency",
      ]),
      searchMyDownFn(){
        this.tabIndex = 0
        this.gameVisible = false
        this.getChessDataList(this.agentBroker).then(res=>{
          this.datacode = res.code
          this.datalist = res.data
        })
      },
      selectDay(day){
        this.days = day
      },
      getTimer(start,end){
        this.agentBroker.fromTime = start
        this.agentBroker.toTime = end
      },
      // 查看详情 table 进入下一页
      nextTable (class_id,item) {
        // 第三方游戏  第二层进入事件
          this.tabIndex++
          if(class_id == 1){
            this.gameAgent.uid = this.paramsData.uid
            this.gameAgent.fromTime = this.agentBroker.fromTime
            this.gameAgent.toTime = this.agentBroker.toTime

            this.getChessDataClass(this.gameAgent)
          }
          if(class_id == 2){
              this.gameVisible = true
            this.agentUser.class_id = item.class_id
            this.agentUser.uid = this.paramsData.uid
            this.agentUser.fromTime = this.agentBroker.fromTime
            this.agentUser.toTime = this.agentBroker.toTime
            this.getChessDataAgency(this.agentUser)
          }
      },
      // 返回上一层
      prevTable () {
        if (this.gameVisible) {
          this.gameVisible = false
          this.tabIndex = 1
        }else {
          this.tabIndex--
        }
      },
    },
    computed: {
      ...mapState([
        "agentStore",
        "moneyStore",
      ]),
    }
  }
</script>

<style lang="less" scoped>
.timeShow {
  flex-wrap: wrap;
  position: relative;
}
.timeShow input{
  padding: 2px 10px;
  cursor: pointer;
}
.timeShow input.filter{
  width: 60px;
}
.timeShow div{
  margin-bottom: 5px;
}
.container{
  table:first-child{
    margin-top: 5px;
  }
}

.head_hint{
  // position: absolute;
  // right: 15px;
  color: red;
}
</style>
