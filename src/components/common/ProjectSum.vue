<template>
  <div class="distinct_container">
    <table class="table clearfloat">
      <tbody>
        <tr class="nav">
          <td>
            {{$L.t('common.ProjectSumTitle')}}:
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
            <div class="header_search">
              <timer @sendTime="getTimer" :day="days" :paramTime="showLogData"></timer>
              <div class="submitSeach">
                {{$L.t('table.username')}}:
                <input type="text" v-model="showLogData.username">
              </div>
              <div class="submitSeach" @click="logFormCommit()">
                <input type="submit" :value="$L.t('submit')">
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <ul class="table_flex">
      <li class="tab_title">
        <div>
          {{$L.t('common.xm')}}
        </div>
        <div>
          {{$L.t('common.zdl')}}
        </div>
        <div>
          {{$L.t('agent.agent_8.zh64')}}
        </div>
        <div>
          {{$L.t('common.yxtze')}}
        </div>
        <div>
          {{$L.t('agent.agent_8.zh54')}}
        </div>
      </li>
      <li v-for="(item, index) in financialStore.reportList.data" :key="index">
        <div>
          {{item.name}}
        </div>
        <div>
          {{item.betNum || 0}}
        </div>
        <div>
          {{item.bets || 0}}
        </div>
        <div>
          {{item.cellScore || 0}}
        </div>
        <div :class="item.profit > 0 ? 'color-red': 'color_green_c'">
          {{item.profit || 0}}
        </div>
      </li>
      <li v-if="!financialStore.reportList.data">
        <div>
          {{$L.t('noData')}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  export default {
    props: ['typeData'],
    data () {
      return {
        // 项目汇总参数
        showLogData: {
          username: '',
          type: 2,
          fromTime: '',
          toTime: '',
        },
        days: '',
      }
    },
    created () {
      this.showLogData.username = this.typeData.username || ''
      this.showLogData.fromTime = this.typeData.fromTime || ''
      this.showLogData.toTime = this.typeData.toTime || ''
      this.showLogData.isAgent = this.typeData.isAgent || '0'
      this.getReportList(this.showLogData)
    },
    methods: {
      ...mapActions([
        'getReportList',
      ]),
      // 资金时间
      getTimer(start,end){
        this.showLogData.fromTime = start
        this.showLogData.toTime = end
      },
      // 快捷选时
      selectDay(d){
        this.days = d
      },
      // 提交搜索
      logFormCommit () {
        // 获取选中id 赋值
        this.getReportList(this.showLogData)
      }
    },
    computed: {
      ...mapState([
        "financialStore",
      ]),
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
// *{
//   -webkit-touch-callout: none;
//   -webkit-user-select: none;
//   -khtml-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
//   box-sizing: border-box;
// }
// 明细
.distinct_container{
  color: #000;
  padding: 5px;
  .table{
    margin: 0 auto;
    width: 100%;
    margin-bottom: 5px;
    .header_search{
      display: flex;
      align-items: center;
    }
  }
  ul{
    height: 500px;
    overflow: auto;
  }
}
.model-page{
  padding: 10px;
}
// 表格公共样式
.table_flex{
  border: 1px solid #ccc;
  border-bottom: 0;
  li{
    display: flex;
    align-items: center;
    height: 30px;
    border-bottom: 1px solid #ccc;
    color: #000;
    background: #F2F2F2;
    &:hover{
      background-color: #ccffcc;
    }
    &>div{
      display: inline-flex;
      align-items: center;
      flex: 1;
      padding:0 5px;
      height: 100%;
      font-size: 13px;
      border-right: 1px solid #ccc;
      &.list_small{
        flex: none;
        width: 80px;
      }
      &.list_120{
        flex: none;
        width: 120px;
      }
      &:last-child{
        border-right: 0;
      }
    }
    &.tab_title{
      background: #C8DADF;
      div{
        color: #444;
        font-weight: bold;
      }
    }
    &.table_total{
      padding: 5px 30px 5px;
      span{
        margin-left: 20px;
      }
    }
  }
}
</style>
