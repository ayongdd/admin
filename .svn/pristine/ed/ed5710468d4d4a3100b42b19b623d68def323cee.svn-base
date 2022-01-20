<template>
  <div class="container">
    <table class="table">
      <tbody>
        <tr class="nav">
          <td>
            <div class="lottery-head" style="display: flex;justify-content: space-between;">
              <p>{{$L.t('lottery.zh228')}}</p>

              <div class="lottery_submitSeach" style="margin-top: -2px;">
                <span>{{$L.t('lottery.zh112')}}:</span>
                <select v-model="lotteryType"  @change="changeLotteryType(lotteryType)" style="margin-right: 10px;">
                  <option value="1" >{{$L.t('lottery.zh229')}}</option>
                  <option value="2" >PK10</option>
                </select>

                <span>{{$L.t('lottery.zh37')}}:</span>
                <select v-model="loadTimer"  @change="reloadTime(loadTimer)" style="margin-right: 10px;">
                  <option value="0" >{{$L.t('lottery.zh38')}}</option>
                  <option value="3" >{{$L.t('lottery.zh39')}}</option>
                  <option value="5" >{{$L.t('lottery.zh40')}}</option>
                  <option value="10" >{{$L.t('lottery.zh41')}}</option>
                  <option value="30" >{{$L.t('lottery.zh42')}}</option>
                  <option value="60" >{{$L.t('lottery.zh43')}}</option>
                </select>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <ul class="lotter_content">
              <li v-for="(item,index) in lotteryStore.dataProfitList.data" :key="index">
                <div class="lotter_div">
                  <div class="layui-card-header">{{item.title}} {{$L.t('lottery.zh231')}}：{{item.action.actionNo}} {{$L.t('lottery.zh154')}}</div>
                  <div class="layui-card-body">
                    <table>
                      <tbody>
                        <tr class="lottery-content_head head_mage">
                          <th v-for="(i,index) in item.content" :key="index">{{i.name}}</th>
                        </tr>
                        <tr class="lotter_odd">
                          <td v-for="(i,index) in item.content" :key="index">{{i.money}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>
            </ul>
          </td>
        </tr>
        <tr v-if="!lotteryStore.dataProfitList.data || lotteryStore.dataProfitList.code != 0">
          <td class="nodata">
            {{$L.t('noData')}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      loadTimer:0,
      lotteryType:1
    }
  },
  created() {
    this.getProfitList({ty_class:this.lotteryType})
  },
  methods: {
    ...mapActions(["getProfitList"]),
    changeLotteryType(type) {
      // console.log(type);
      this.getProfitList({ty_class:type})
    },
    reloadTime (value) {
      clearTimeout(this.timer)
      if (value > 0) {
        let num = value * 1000
        this.reloadAction(num)
      }
    },
    reloadAction (time) {
      this.timer = setTimeout(() => {
        // 调用方法
        this.getProfitList({ty_class:this.lotteryType})
        // 回调
        this.reloadAction(time)
      }, time)
    },
  },
  computed: {
    ...mapState(["lotteryStore"])
  }
};
</script>
<style lang="less" scoped>
.lottery_submitSeach{
  margin-top: 8px;
}
.lotter_content{
  display:  flex;
  flex-wrap: wrap;
  li {
    width: 33.33333333%;
    padding: 7.5px;
    box-sizing: border-box;
    .lotter_div{
      background-color: #fff;
      .layui-card-header{
        height: 42px;
        line-height: 42px;
        padding: 0 15px;
        border-bottom: 1px solid #f6f6f6;
        color: #333;
        border-radius: 2px 2px 0 0;
        text-align: center;
        font-size: 15px;
      }
      .layui-card-body{
        padding: 10px 15px;
        line-height: 24px;
        table{
          width: 100%;
          margin: 0 auto 0 0px;
          border-collapse: collapse;
          tbody{
            .lottery-content_head{
              word-break: keep-all;
              white-space: nowrap;
              padding: 4px;
              font-weight: bold;
              height: 25px;
              line-height: 25px;
              text-align: center;
              th{
                background: #c8dadf;
                color: #313F44;
                border: 1px solid #cccccc;
                padding: 5px 3px;
              }
            }
            .lotter_odd{
              text-align: center;
              td{
                padding: 8px 3px;
                color: red;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
