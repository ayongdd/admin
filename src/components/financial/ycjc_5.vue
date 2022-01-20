<template>
  <div class="container">
    <table class="table">
      <tbody>
        <tr>
          <td class="nav">{{$L.t('financial.zh3')}}</td>
          <td>
            <button class="popBtn" @click="calculateMoney">{{$L.t('financial.zh69')}}</button>
            <button class="popBtn" @click="personeProfit">{{$L.t('financial.zh70')}}</button>
              <button class="popBtn" @click="backFinancial">{{$L.t('common.go-1')}}</button>
            <div class="same_month">
              <el-date-picker
                v-model="seachdata.mon"
                type="month"
                format="yyyy-MM"
                value-format="yyyy-MM"
                :placeholder="$L.t('financial.zh76')">
              </el-date-picker>
              <button class="popBtn" @click="queryMonth">{{$L.t('financial.zh71')}}</button>

            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
        <tr class="head">
          <td>{{$L.t('financial.zh72')}}</td>
          <td>{{$L.t('table.caizhong')}}</td>
          <td>{{$L.t('financial.zh73')}}</td>
          <td>{{$L.t('table.betMoney')}}</td>
          <td>{{$L.t('table.winner')}}</td>
          <td>{{$L.t('agent.agent_0.betPont')}}</td>
        </tr>
        <tr class="odd" v-for="item in formDta.data">
          <td>{{item.actionDate}}</td>
          <td>
            {{item.lotteryname}}
          </td>
          <td>
            {{item.actionNo}}
          </td>
          <td>
            {{item.tzAmount}}
          </td>
          <td>
            {{item.zjAmount}}
          </td>
          <td>
            {{item.ykAmount}}
          </td>
        </tr>
         <tr v-if="getPageData.sum == 0">
          <td colspan="13" style="text-align: center">
            {{$L.t('noData')}}
          </td>
        </tr>
        <tr v-if="getPageData.sum > 0">
          <td colspan="13">
            <page-limit class="padding_page" :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 用户系统彩盈亏排行 -->
    <el-dialog
      :title="$L.t('financial.zh74')"
      :visible.sync="userLogState"
      width="840px">
      <div v-if="userLogState" class="model_table table_550 log_content">
        <table class="table">
          <tbody>
            <tr>
              <td>
                <select v-model="perdata.date" class="select_rank">
                  <option value="1">{{$L.t('yesterday')}}</option>
                  <option value="2">{{$L.t('thisWeek')}}</option>
                  <option value="3">{{$L.t('thisMonth')}}</option>
                  <option value="4">{{$L.t('lastMonth')}}</option>
                </select>
                <button class="popBtn" @click="seachRank">{{$L.t('search')}}</button>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="table">
          <tbody>
            <tr class="head">
              <td>{{$L.t('table.username')}}</td>
              <td>{{$L.t('table.betMoney')}}</td>
              <td>{{$L.t('table.winMoney')}}</td>
              <td><div style="width: 70px;">{{$L.t('financial.zh77')}}<div class="help-tip"><p>{{$L.t('financial.zh75')}}</p></div></div></td>
            </tr>
            <tr class="odd" v-for="(item, index) in financialStore.dataCheckProfitRank.data.data" :key="index">
              <td>{{item.username}}</td>
              <td>
                {{item.betAmount}}
              </td>
              <td>{{item.zjAmount}}</td>
              <td>{{item.ykAmount}}</td>
            </tr>
            <tr class="info_none" v-if="getLogPage.sum == 0">
              <td colspan="5">{{$L.t('noData')}}</td>
            </tr>
            <tr class="info_page" v-if="getLogPage.sum > 0">
              <td colspan="5">
                <page-limit :pageData="getLogPage" @handlePage="handlePageLog"></page-limit>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  export default {
    data () {
      return {
        seachdata:{
          mon:new Date(),
          page:'1',
          limit:'20',
        },
        perdata:{
          page:'1',
          limit:'20',
          date:4
        },
        currentdate:'',
        formDta:[],
        userLogState:false,
      }
    },
    created (){
      this.getTodaydata()
      this.seachdata.mon = this.currentdate
      this.getkjbeforeinfo(this.seachdata).then(res=>{
        this.formDta = res.data
      })
    },
    methods: {
      ...mapActions([
        'getkjbeforeinfo',
        'getCheckProfitRank',
        'getCheckDate'
      ]),
      queryMonth(){
        this.getkjbeforeinfo(this.seachdata).then(res=>{
          this.formDta = res.data
        })
      },
      backFinancial(){
        this.$router.push({path: '/financialIndex/2'})
      },
      // 获取当前时间
      getTodaydata(){
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        this.currentdate = year + seperator1 + month;
      },
      handlePage (data) {
        this.seachdata.page = data.page
        this.seachdata.limit = data.limit
        this.getkjbeforeinfo(this.seachdata).then(res=>{
          this.formDta = res.data
        })
      },
      handlePageLog (data) {
        this.perdata.page = data.page
        this.perdata.limit = data.limit
        this.getCheckProfitRank(this.perdata)
      },
      personeProfit(){
        this.userLogState = true
        this.perdata.date = 4
        this.getCheckProfitRank(this.perdata)
      },
      // 搜索个人盈亏排行
      seachRank(){
        this.perdata.page = 1
        this.getCheckProfitRank(this.perdata)
      },
      // 算钱先点我
      calculateMoney(){
        this.getCheckDate({mon:this.currentdate})
      }
    },
    computed: {
      ...mapState([
        "financialStore",
      ]),
      // 列表分页data
      getPageData () {
        return {
          page: this.seachdata.page,
          limit: this.seachdata.limit,
          sum: this.formDta.count || 0
        }
      },
      getLogPage () {
        return {
          page: this.perdata.page,
          limit: this.perdata.limit,
          sum: this.financialStore.dataCheckProfitRank.data.count || 0
        }
      },
    },
  }
</script>
<style lang="less" scoped>
.handle_btn{
  button{
    margin-right: 10px;
  }
}
.same_month{
  float:right;
}
.select_rank{
  height: 25px;
  margin-right: 5px;
}
</style>
