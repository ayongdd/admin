<template>
  <div class="container">
    <table class="table">
      <tbody>
        <tr>
          <td class="demonstration">
              <button @click="searchCommit()">{{titleReport}}</button>
              <span v-if="editData">
                <el-date-picker
                  class="pickerTime"
                  v-model="seachStartTime"
                  value-format="timestamp"
                  type="datetime"
                  :placeholder="$L.t('annoucement.swtz_4.startTime')"
                  default-time="12:00:00"
                  >
                </el-date-picker>
                <button @click="getDataList()">{{$L.t('financial.zh1')}}</button>
                <span style="color:red">{{$L.t('financial.zh2')}}</span>
              </span>
              <button class="abon_check" v-if="formData.data && formData.data[0].edit" @click="abnormalCheck">
                {{$L.t('financial.zh3')}}
              </button>
            </td>
        </tr>
      </tbody>
    </table>
    <table class="table">
        <tbody>
          <tr>
            <td class="first">{{$L.t('financial.zh4')}}</td>
            <td>
              <table class="table">
                <tbody>
                  <tr>
                    <td>
                      <table width="100%" border="0" cellpadding="0" cellspacing="0"
                        bgcolor="#cccccc" style="margin:0 auto;">
                        <tbody>
                          <tr>
                            <td height="22" colspan="37" bgcolor="#555555">
                              <font color="#FFFFFF">&nbsp;
                                <strong style="font-size: 14px;">{{formData.years_month}} {{$L.t('bonusGame.MoneyQuery.zh14')}}</strong>
                              </font>
                            </td>
                          </tr>
                          <tr>
                            <td height="24" align="center" valign="middle" bgcolor="#f8f8f8">{{$L.t('common.xm')}}</td>
                            <td align="center" valign="middle" bgcolor="#f8f8f8">{{$L.t('common.zdl')}}</td>
                            <td align="center" valign="middle" bgcolor="#f8f8f8">{{$L.t('agent.agent_8.zh64')}}</td>
                            <td align="center" valign="middle" bgcolor="#f8f8f8">{{$L.t('common.yxtze')}}</td>
                            <td align="center" valign="middle" bgcolor="#f8f8f8">{{$L.t('financial.zh5')}}</td>
                            <td align="center" valign="middle" bgcolor="#f8f8f8" style="width:200px">{{$L.t('financial.zh7')}}</td>
                            <td align="center" valign="middle" bgcolor="#f8f8f8">{{$L.t('financial.zh8')}}</td>
                            <td align="center" valign="middle" bgcolor="#f8f8f8">{{$L.t('financial.zh9')}}</td>
                          </tr>
                          <!-- 报表 -->
                          <tr class="td_hover" v-for="(item, index) in formData.data" :key="index">
                            <td height="24" align="center" valign="middle" bgcolor="#f8f8f8">
                              {{item.name}}
                            </td>
                            <td height="24" align="center" valign="middle" bgcolor="#f8f8f8">
                              {{item.betNum || 0}}
                            </td>
                            <td height="24" align="center" valign="middle" bgcolor="#f8f8f8">
                              {{item.bet || 0}}
                            </td>
                            <td height="24" align="center" valign="middle" bgcolor="#f8f8f8">
                              {{item.cellScore || 0}}
                            </td>
                            <td height="24" align="center" valign="middle" bgcolor="#f8f8f8">
                              {{item.profit}}
                            </td>
                            <td height="24" align="center" valign="middle" bgcolor="#f8f8f8">
                              <input
                                v-if="item.edit"
                                style="width:50px"
                                type="text"
                                v-model="item.current_proportion"
                                @blur="leave(item)"
                                @keyup.enter="leave(item)"
                                ref="focusname">
                              <span v-else>{{item.current_proportion || 0}}</span>
                            </td>
                            <td height="24" align="center" valign="middle" bgcolor="#f8f8f8">
                              -
                            </td>
                            <td height="24" align="center" valign="middle" bgcolor="#f8f8f8">
                              {{item.profit_money || 0}}
                            </td>
                          </tr>
                          <tr v-if="!financialStore.reportList.data">
                            <td colspan="8" style="text-align: center;">
                              {{$L.t('noData')}}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="color:red; padding-left: 20px;">
                      * {{$L.t('financial.zh10')}}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <!-- 本期才显示formData.years_month == slefMonth -->
          <tr v-if="formData.years_month == slefMonth">
            <td class="first">{{$L.t('financial.zh11')}}:</td>
            <td>{{formData.arrears}}</td>
          </tr>
          <tr>
            <td class="first">{{$L.t('financial.zh12')}}:</td>
            <td>{{formData.advance_pay}}</td>
          </tr>
          <tr v-if="formData.years_month == slefMonth">
            <td class="first">{{$L.t('financial.zh13')}}:</td>
            <td>{{formData.max_quota}}</td>
          </tr>
          <tr>
            <td class="first">{{$L.t('financial.zh14')}}:</td>
            <td>{{formData.deposit}}</td>
          </tr>
          <tr>
            <td class="first">{{$L.t('financial.zh15')}}:</td>
            <td>{{formData.system_money}}</td>
          </tr>
          <tr>
            <td class="first">{{$L.t('financial.zh16')}}:</td>
            <td>{{formData.system_game_money}}</td>
          </tr>
          <tr>
            <td class="first">{{$L.t('financial.zh17')}}:</td>
            <td>{{formData.third_money}}</td>
          </tr>
          <!-- <tr>
            <td class="first">实际费用:</td>
            <td>{{formData.actual}}</td>
          </tr> -->
          <tr>
            <td class="first">{{$L.t('financial.zh9')}}:</td>
            <td>{{formData.payable}}</td>
          </tr>
          <!-- 上期显示 -->
          <tr v-if="formData.years_month != slefMonth">
            <td class="first">{{$L.t('financial.zh19')}}:</td>
            <td>{{formData.not_pay}}</td>
          </tr>
          <tr v-if="formData.years_month != slefMonth">
            <td class="first">{{$L.t('financial.zh20')}}:</td>
            <td>{{formData.already_pay}}</td>
          </tr>

          <tr>
            <td class="first">{{$L.t('financial.zh21')}}:</td>
            <td style="color:red">{{formData.total_count}}</td>
          </tr>
          <tr v-if="formData.years_month == slefMonth">
            <td class="first">{{$L.t('table.remark')}}:</td>
            <td style="color:red">
              <p>{{$L.t('financial.zh22')}}</p>
              <p>{{$L.t('financial.zh23')}}</p>
              <p>{{$L.t('financial.zh24')}}</p>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>
<script>
    import {mapState, mapMutations, mapActions} from 'vuex';
    import { getTimerAll,getTimes } from '@/common/common'
    export default {
      data () {
        return {
          // 当月时间
          slefMonth: '',
          // 当月时间带 00:00 23:59
          slefMonthDate: getTimerAll.getSelfMonth('time'),
          ishow:null,
          formData:[],
          periods:'last',
          titleReport:this.$L.t('financial.zh25'),
          editData:'',
          // 时间限制
          seachStartTime:'',
          seachEndTime:'',
          getTimes
        }
      },
      created (){
        let year = new Date().getFullYear()
        let month = new Date().getMonth() + 1
        this.slefMonth = year + '-' + '0'+month
        // 调用数据
        this.getDeliveryDataNow().then((res)=>{
          this.formData = res.data
          // 获取数组中的edit显示是否拉取数据
          var test = res.data.data.map(res=>{
            if(res.edit){
              return res.edit
            }
          })
          for(let k in test){
            if(test[k]){
              this.editData = test[k]
              break
            }
          }
        })
      },
      methods: {
        ...mapActions([
          'getReportList',
          'editProportion',
          'getDeliveryDataNow',
          'getMonthlyReport',
          'getGameDetails'
        ]),
        // 拉取数据
        getDataList(){
          this.seachEndTime = parseInt(this.seachStartTime/1000) + 3600
          var total = parseInt(this.seachEndTime - this.seachStartTime/1000)
          this.getGameDetails({
            formTime:getTimes(this.seachStartTime/1000),
            toTime:getTimes(this.seachEndTime)
          }).then((res)=>{
            if(this.titleReport == this.$L.t('financial.zh26') || this.periods == 'self'){
              this.getMonthlyReport().then((res)=>{
                this.formData = res.data
              })
            }else{
              this.getDeliveryDataNow().then((res)=>{
                this.formData = res.data
              })
            }
          })
        },
        // 修改比例
        leave(item){
          this.$refs.focusname[0].blur()
          this.ishow = null
          this.editProportion({current_proportion:item.current_proportion}).then(res=>{
            this.getReportList({
              fromTime: this.slefMonthDate.startTime,
              toTime:  this.slefMonthDate.endTime,
              type: 2,
            })
          })
        },
        // 按月份搜索
        searchCommit(){
          if(this.titleReport == this.$L.t('financial.zh26') || this.periods == 'self'){
            this.getDeliveryDataNow().then((res)=>{
              this.titleReport = this.$L.t('financial.zh25')
              this.periods = 'last'
              this.formData = res.data
            })
          }else{
            this.getMonthlyReport().then((res)=>{
              this.titleReport = this.$L.t('financial.zh26')
              this.periods = 'self'
              this.formData = res.data
            })
          }
        },
        abnormalCheck(){
          this.$router.push({path: '/financialIndex/6'})
        }
      },
      computed: {
        ...mapState([
          "financialStore",
        ]),
      }
    }
  </script>
<style lang="less" scoped>
.td_hover:hover{
  background: #ccffcc !important;
  td{
    background: #ccffcc !important;
  }
}
.data_month{
  width: 120px;
}
.demonstration{
  width: 50px;
}
.pickerTime{
  width: 200px;
}
.abon_check{
  float: right;
  margin-right: 5px;
}
</style>
