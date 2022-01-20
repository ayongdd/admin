<template>
  <div class="container"><div class="chartjs-size-monitor" style="position:
      absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden;
      pointer-events: none; visibility: hidden; z-index: -1;"><div
        class="chartjs-size-monitor-expand"
        style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div
          style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div
        class="chartjs-size-monitor-shrink"
        style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div
          style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
    <table class="table clearfloat">
      <tbody>
        <tr class="nav">
          <td>
            {{$L.t('member.info1')}}:
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
            <div class="header_timer">
              <timer @sendTime="getTimer" :day="days"></timer>
              <div class="submitSeach" @click="seachCondition()">
                <input type="submit" :value="$L.t('submit')">
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="color-red">
            1.{{$L.t('member.log_17.info23')}} 2.{{$L.t('member.log_17.info24')}}
          </td>
        </tr>
        <tr v-if="chartData.rows.length == 0">
          <td style="text-align: center">
            {{$L.t('noData')}}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="today_regiser" v-if="chartData.rows.length > 0">
      <div class="today_header">
        {{$L.t('member.log_17.info25')}}
        <button @click="veChartIndex = !veChartIndex">{{$L.t('member.log_17.info26')}}</button>
      </div>
      <ve-histogram v-if="veChartIndex" :data="chartData" :extend="extend"></ve-histogram>
      <ve-line v-else :data="chartData" :extend="extend"></ve-line>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  import {getDate,setDate,copyobj,setSession,getSession,getchar,randomRange} from '@/common/common'
  export default {
    data () {
      this.extend = {
        series: {
          label: { show: true, position: "top",normal: {show: true}}
        }
      }
      return {
        sendParmas: {
          fromTime  : '',
          toTime: '',
        },
        days: '',
        veChartIndex: true,
        chartData: {
          columns: [this.$L.t('financial.zh72'), this.$L.t('new.info1'), this.$L.t('new.info2')],
          rows: []
        }
      }
    },
    watch: {
      'memberStore.statisticalList.data' (newValue) {
        // console.log(newValue)
        let arr = []
        for (let k in newValue) {
          let obj = {}
          obj[this.$L.t('financial.zh72')] = newValue[k].regDate
          obj[this.$L.t('new.info1')] = newValue[k].regCount
          obj[this.$L.t('new.info2')] = newValue[k].rechargeCount
          arr.push(obj)
        }
        this.chartData.rows = arr
      }
    },
    created (){
      this.statisticalAction(this.sendParmas);
    },
    mounted(){

    },
    methods: {
      ...mapMutations([

      ]),
      ...mapActions([
        'statisticalAction',
      ]),
      // 搜索
      seachCondition () {
        this.statisticalAction(this.sendParmas)
      },
      // 回调获取时间
      getTimer(start,end){
        this.sendParmas.fromTime = start
        this.sendParmas.toTime = end
      },
      selectDay (time) {
        this.days = time
      },
    },
    computed: {
      ...mapState([
        "memberStore",
      ]),
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header_timer{
  display: flex;
  align-items: center;
}
// 按钮
.toggleButton{
  position: fixed;
  right: 10%;
  margin-top: 15px;
  font-size: 13px;
}
// 内容
.today_regiser{
  // 头部
  .today_header{
    position: relative;
    padding: 10px 0;
    text-align: center;
    color: #666;
    font-size: 15px;
    button{
      color: #000;
      font-size: 13px;
      position: absolute;
      right: 10%;
      bottom: 0px;
      cursor: pointer;
      padding:0 5px;
    }
  }
}
</style>
