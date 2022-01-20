<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
        <tr class="nav">
          <td>
            {{$L.t('report.info1')}}:
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
              <div class="submitSeach">{{$L.t('report.info2')}}:</div>
              <div class="submitSeach">

                <select v-model="sendParmas.type">
                  <option value="0">{{$L.t('agent.agent_0.huiy')}}</option>
                  <option value="1">{{$L.t('agent.agent_0.dl')}}</option>
                </select>
              </div>
                <div class="submitSeach">
                  <input type="text" v-model="sendParmas.username">
                </div>
                <div class="submitSeach">{{$L.t('lottery.zh91')}}:</div>
                <div class="submitSeach">
                  <select v-model="sendParmas.order">
                    <option value="1">{{$L.t('member.info14')}} </option>
                    <option value="2">{{$L.t('report.info3')}} </option>
                    <option value="3">{{$L.t('report.info4')}} </option>
                    <option value="5">{{$L.t('report.info5')}} </option>
                    <option value="4">{{$L.t('agent.agent_0.betPont')}} </option>
                    <option value="6">{{$L.t('table.yue')}} </option>
                  </select>
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
          <td>{{$L.t('table.type')}}</td>
          <td>{{$L.t('table.username')}}</td>
          <td>{{$L.t('member.info30')}}</td>
          <td>{{$L.t('table.name')}}</td>
          <td>{{$L.t('report.info6')}}</td>
          <td>{{$L.t('agent.agent_8.zh40')}}</td>
          <td>{{$L.t('table.lotteryBet')}}</td>
          <td>{{$L.t('report.info7')}}</td>
          <td>{{$L.t('table.zYH')}}</td>
          <td>{{$L.t('agent.agent_0.allBet')}}</td>
          <td>{{$L.t('report.info8')}}</td>
          <td>{{$L.t('agent.agent_8.zh87')}}</td>
          <td>{{$L.t('table.yue')}}</td>

          <td>{{$L.t('table.sjYK')}}</td>
          <td>{{$L.t('table.registerTime')}}</td>
        </tr>
        <tr v-for="(item, index) in tableStore.dataMemberProfitList.data.data" :key="index">
          <td>{{item.type == 0?$L.t('agent.agent_0.huiy'):$L.t('agent.agent_0.dl')}}</td>
          <td :class="{'color-red': item.usertype == 9}">{{item.username}}</td>
          <td>{{item.parentName}}</td>
          <td>{{item.name}}</td>
          <td class="pop_coin" @click="showLogModel(item, 1)">
            <span :class="item.rechargeAmount > 0 ? 'color-red' : 'color-green_c'">
              {{item.rechargeAmount}}
            </span>
          </td>
          <td class="pop_coin" @click="showLogModel(item, 2)">
            <span :class="item.cashAmount > 0 ? 'color-red' : 'color-green_c'">
              {{item.cashAmount}}
            </span>
          </td>

          <td class="pop_coin" @click="projectModel(item)">
            <span :class="item.cpBetAmount > 0 ? 'color-red' : 'color-green_c'">
              {{item.cpBetAmount}}
            </span>
          </td>

          <!-- 中奖金额 -->
          <td class="pop_coin">
            <span :class="item.cpZjAmount > 0 ? 'color-red' : 'color-green_c'">
              {{item.cpZjAmount}}
            </span>
          </td>

          <!-- 总优惠 -->
          <td class="pop_coin" @click="showLogModel(item, 'alone')">
            <span :class="item.discount > 0 ? 'color-red' : 'color-green_c'">
              {{item.discount}}
            </span>
          </td>
          <!-- 其他投注总额 -->
          <td class="pop_coin" @click="otherBetCount(item)">
            <span :class="item.gameCellScore > 0 ? 'color-red' : 'color-green_c'">
              {{item.gameCellScore}}
            </span>
          </td>
          <!-- 综合游戏盈亏 -->
          <td>{{item.gameProfit}}</td>
          <td class="pop_coin" @click="projectModel(item)">
            <span :class="item.allProfit > 0 ? 'color-red' : 'color-green_c'">
              {{item.allProfit}}
            </span>
          </td>
          <td class="pop_coin" @click="showLogModel(item, 'all')">
            <span :class="item.coin > 0 ? 'color-red' : 'color-green_c'">
              {{item.coin}}
            </span>
          </td>
          <td>{{item.profit}}</td>
          <td>{{item.regTime}}</td>
        </tr>
        <tr v-if="getPageData.sum > 0">
          <td colspan="15">
            <page-limit class="padding_page" :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
          </td>
        </tr>
        <tr v-if="!tableStore.dataMemberProfitList.data.data">
          <td colspan="15" class="nodata">{{$L.t('noData')}}</td>
        </tr>
      </tbody>
    </table>
    <!-- 项目汇总  -->
    <el-dialog
      :title="$L.t('detail')"
      :visible.sync="projectVisible"
      width="860px">
      <project-sum v-if="projectVisible" :typeData="modelParmas"></project-sum>
    </el-dialog>
    <!-- 资金流水 -->
    <el-dialog
      :title="$L.t('detail')"
      :visible.sync="showLogVisible"
      width="1250px">
      <fund-water v-if="showLogVisible" :typeData="modelParmas"></fund-water>
    </el-dialog>
    <!-- 其他投注总额 -->
    <el-dialog
      :title="$L.t('table.otherBet')"
      :visible.sync="showBetVisible"
      width="950px">
      <div class="modelList_container">
        <table_otherbet v-if="showBetVisible" :otherData="modelParmas"></table_otherbet>
      </div>
    </el-dialog>
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
          username: '',
          type:'0',
          order:'1',
          fromTime:'',
          toTime:''
        },
        days:'',
        // 项目汇总 /  资金流水
        projectVisible: false,
        showLogVisible: false,
        showBetVisible:false,
        // 组件传递 参数
        modelParmas: {
          username: '',
          type: 1,
          fromTime: '',
          toTime: '',
        },
      }
    },
    created (){

      this.getMemberProfitList(this.sendParmas)

    },
    methods: {
      ...mapActions([
        "getMemberProfitList",
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
        this.getMemberProfitList(this.sendParmas)
      },
      // 分页
      handlePage (data) {
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit
        this.getMemberProfitList(this.sendParmas)
      },
      // 资金流水弹窗
      showLogModel (item, key) {
        this.modelParmas.type = key
        this.modelParmas.username = item.username
        this.modelParmas.fromTime = this.sendParmas.fromTime
        this.modelParmas.toTime = this.sendParmas.toTime
        this.showLogVisible = true
      },
      // 项目汇总弹窗
      projectModel (item) {
        this.modelParmas.type = 1
        this.modelParmas.username = item.username
        this.modelParmas.fromTime = this.sendParmas.fromTime
        this.modelParmas.toTime = this.sendParmas.toTime
        this.projectVisible = true
      },
      // 其他投注总额
      otherBetCount(item){
        this.modelParmas.username = item.username
        this.modelParmas.fromTime = this.sendParmas.fromTime
        this.modelParmas.toTime = this.sendParmas.toTime
        this.showBetVisible = true
      }
    },
    computed: {
      ...mapState([
        // "tableStore",
        "tableStore",//报表查询
      ]),
      // 列表分页data
      getPageData () {
        return {
          page: this.sendParmas.page,
          limit: this.sendParmas.limit,
          sum: this.tableStore.dataMemberProfitList.data.count || 0
        }
      },
    }
  }
</script>
<style lang="less" scoped>
.pop_coin{
  span{
    // text-decoration: underline;
    &.color-red{
      color: red !important;
    }
    &.color-green_c{
      color: #51A35D !important;
    }
  }
  cursor: pointer;
}
</style>
