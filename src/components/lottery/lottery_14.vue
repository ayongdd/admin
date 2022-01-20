<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
        <tr class="nav">
          <td colspan="1" class="lottery-six">
            <p>{{$L.t('lottery.zh111')}}</p>
          </td>
        </tr>
        <tr>
          <td colspan="15" class="return-up">
            <div>
               {{$L.t('lottery.zh112')}}:
              <select v-model="lottery.type">
                <option :value="v.id" v-for="(v,i) in lotteryStore.LotteryLHC" :key="i">{{v.title}}</option>
              </select>

              {{$L.t('financial.zh73')}}:
              <input type="number" :placeholder="$L.t('table.issue')" v-model="lottery.actionNo">
                {{$L.t('lottery.zh122')}}:
              <select v-model="lottery.countType">
                <option value="1">{{$L.t('lottery.zh113')}}</option>
                <option value="2">{{$L.t('table.betNumber')}}</option>
              </select>

              <input class="seach_input" type="submit" :value="$L.t('search')" @click="searchFn()">
            </div>
             <button @click="goBackFn" v-if="FloorState != 1">{{$L.t('lottery.zh69')}}</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 第一层 -->
    <table class="table" v-if="FloorState == 1">
      <tbody>
        <tr>
          <td style="color: red">{{$L.t('lottery.zh114')}}：
            <span v-if='lotteryStore.dataStatistics.data.rows'>{{lotteryStore.dataStatistics.data.rows.betAmount}}</span>
            <span v-else>0</span>
          </td>
          <td style="color: red">{{$L.t('lottery.zh115')}}：
            <span v-if='lotteryStore.dataStatistics.data.rows'>{{lotteryStore.dataStatistics.data.rows.zjAmount}}</span>
            <span v-else>0</span>
            </td>
          <td style="color: red">{{$L.t('lottery.zh116')}}：
            <span v-if='lotteryStore.dataStatistics.data.rows'>{{lotteryStore.dataStatistics.data.rows.yingkuiAmount}}</span>
            <span v-else>0</span>
          </td>
          <td style="color: red">{{$L.t('lottery.zh117')}}：
            <span v-if='lotteryStore.dataStatistics.data.rows'>{{lotteryStore.dataStatistics.data.rows.betUserCount}}</span>
            <span v-else>0</span>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table" v-if="FloorState == 1">
      <tbody>
      <tr class="head">
        <td>{{$L.t('lottery.zh118')}}</td>
        <td>{{$L.t('table.betSum')}}</td>
        <td>{{$L.t('agent.agent_8.zh92')}}</td>
        <td>{{$L.t('table.betMoney')}}</td>
        <td>{{$L.t('table.winMoney')}}</td>
        <td>{{$L.t('lottery.zh76')}}</td>
        <td>{{$L.t('financial.zh77')}}</td>
        <td>{{$L.t('table.handle')}}</td>
      </tr>
      <tr class="odd" v-for="item in lotteryStore.dataStatistics.data.data">
        <td>{{item.playedGroupName}}</td>
        <td>{{item.betCount}}</td>
        <td>{{item.betUserCount}}</td>
        <td>{{item.betAmount}}</td>
        <td>{{item.zjAmount}}</td>
        <td>{{item.fanDianAmount}}</td>
        <td>{{item.yingkuiAmount}}</td>
        <td style="color:red;cursor: pointer;" @click="goUpData(item)">{{$L.t('agent.agent_8.zh57')}}</td>
      </tr>
      <tr v-if="getOneFloorPage.sum > 0">
        <td colspan="13">
          <page-limit :pageData="getOneFloorPage" :inputShow="'1'" @handlePage="oneFloorPageFn"></page-limit>
        </td>
      </tr>
      <tr v-if="lotteryStore.dataStatistics.code != 0">
        <td colspan="8" class="nodata">
          {{$L.t('noData')}}
        </td>
      </tr>
      </tbody>
    </table>
    <!-- 第二层 -->
     <table class="table" v-if="FloorState == 2">
      <tbody>
        <tr>
          <td style="color: red">{{$L.t('lottery.zh119')}}：
            <span v-if="lotteryStore.dataTypeStatisticsInfo.data.rows">{{lotteryStore.dataTypeStatisticsInfo.data.rows.betAmount}}</span>
            <span v-else>0</span>
          </td>
          <td style="color: red">{{$L.t('lottery.zh120')}}：
            <span v-if='lotteryStore.dataTypeStatisticsInfo.data.rows'>{{lotteryStore.dataTypeStatisticsInfo.data.rows.zjAmount}}</span>
            <span v-else>0</span>
          </td>
          <td style="color: red">{{$L.t('lottery.zh121')}}：
            <span v-if='lotteryStore.dataTypeStatisticsInfo.data.rows'>{{lotteryStore.dataTypeStatisticsInfo.data.rows.yingkuiAmount}}</span>
            <span v-else>0</span>
          </td>
          <td style="color: red">{{$L.t('agent.agent_8.zh92')}}：
            <span v-if='lotteryStore.dataTypeStatisticsInfo.data.rows'>{{lotteryStore.dataTypeStatisticsInfo.data.rows.betUserCount}}</span>
            <span v-else>0</span>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table" v-if="FloorState == 2">
      <tbody>
      <tr class="head">
        <td>{{$L.t('lottery.zh118')}}</td>
        <td>{{$L.t('agent.agent_8.zh92')}}</td>
        <td>{{$L.t('table.betSum')}}</td>
        <td>{{$L.t('table.betMoney')}}</td>
        <td>{{$L.t('table.winMoney')}}</td>
        <td>{{$L.t('lottery.zh76')}}</td>
        <td>{{$L.t('financial.zh77')}}</td>
      </tr>
      <tr class="odd" v-for="f in lotteryStore.dataTypeStatisticsInfo.data.data">
        <td>{{f.playedGroupName}}</td>
        <td>{{f.betUserCount}}</td>
        <td>{{f.betCount}}</td>
        <td>{{f.betAmount}}</td>

        <td>{{f.zjAmount}}</td>
        <td>{{f.fanDianAmount}}</td>
        <td>{{f.yingkuiAmount}}</td>
      </tr>
      <tr v-if="getTwoFloorPage.sum > 0">
        <td colspan="13">
          <page-limit :pageData="getTwoFloorPage" :inputShow="'1'" @handlePage="fourFloorPageFn"></page-limit>
        </td>
      </tr>
      <tr v-if="!lotteryStore.dataTypeStatisticsInfo.data.data">
        <td colspan="13" class="nodata">
          {{$L.t('noData')}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  export default {
    data () {
      return {
        days:'',
        startTime:'',
        endTime:'',
        lotteryId:-1,
        lottery:{
          type:'78',
          actionNo:'',
          countType:1,
          page:1,
          limit:'20'
        },
        lotteryType:'0',  // 2 官方 1 系统
        thislotteryId:'',
        FloorState:1,
        twoFloorObj:{
          type:'78',
          actionNo:'',
          countType:'',
          playedGroupName:'',
          playedGroup:'',
          page:1,
          limit:'20',
        },
      }
    },
    created (){
      // this.getTypeStatisticsInfo(this.lottery)
      this.LhcStatisticsList(this.lottery)
      this.getLotteryLHC();
    },
    mounted(){

    },
    watch: {
      // 'lotteryType'(n,o){
      //   this.lotteryId=0
      //   this.FloorState = 1
      //   this.getLotteryTypeFromClassID4({classID:this.thislotteryId,apiType:'',lotteryType:n,fromTime:this.startTime,toTime:this.endTime})
      // },
    },
    methods: {
      ...mapMutations([

      ]),

      ...mapActions([
        "getTypeStatisticsInfo",
        "LhcStatisticsList",
        "getLotteryLHC"
      ]),
      goBackFn(){
        this.FloorState = 1
        this.LhcStatisticsList(this.lottery)
      },
      // 分页
      oneFloorPageFn(data){
        this.lottery.page = data.page
        this.lottery.limit = data.limit
        this.LhcStatisticsList(this.lottery)
      },
      fourFloorPageFn(data){
        this.twoFloorObj.page = data.page
        this.twoFloorObj.limit = data.limit
        this.getTypeStatisticsInfo(this.twoFloorObj)
      },
      // 查看详情
      goUpData(item) {
        this.FloorState = 2
        this.twoFloorObj.actionNo = this.lottery.actionNo
        this.twoFloorObj.countType = this.lottery.countType
        this.twoFloorObj.playedGroupName = item.playedGroupName
        this.twoFloorObj.playedGroup = item.playedGroup
        this.twoFloorObj.page = 1
        this.getTypeStatisticsInfo(this.twoFloorObj)
      },
      // 搜索
      searchFn(){
        this.FloorState = 1
        this.lottery.page = 1
        // this.lottery.limit = '20'
        this.twoFloorObj.type = this.lottery.type
        // this.getTypeStatisticsInfo(this.lottery)
        this.LhcStatisticsList(this.lottery)
      }
    },
    components:{

    },
    computed: {
      ...mapState([
        "lotteryStore",
      ]),
      getOneFloorPage(){
        return {
          page: this.lottery.page,
          limit: this.lottery.limit,
          sum: this.lotteryStore.dataStatistics.data.count || 0
        }
      },
      getTwoFloorPage(){
        return {
          page: this.twoFloorObj.page,
          limit: this.twoFloorObj.limit,
          sum: this.lotteryStore.dataTypeStatisticsInfo.data.count || 0
        }
      },
    }
  }
</script>

<style lang="less" scoped>
  #search {
    border:none ;
  }
  .return-up{
    // text-align: right;
    display: flex;
    justify-content: space-between;
    div{
      .seach_input{
        margin-left: 5px;
      }
    }
  }
</style>
