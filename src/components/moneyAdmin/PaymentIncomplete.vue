<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
        <tr class="nav">
          <td>
            {{$L.t('moneyAdmin.Owed.info19')}}&nbsp;&nbsp;&nbsp;&nbsp;{{$L.t('agent.agent_8.zh51')}}:
            <input type="button" :value="$L.t('today')" @click="selectDay(0)">
            <input type="button" :value="$L.t('yesterday')" @click="selectDay(1)">
            <input type="button" :value="$L.t('thisWeek')" @click="selectDay(6)">
            <input type="button" :value="$L.t('lastWeek')" @click="selectDay(14)">
            <input type="button" :value="$L.t('thisMonth')" @click="selectDay(30)">
            <input type="button" :value="$L.t('lastMonth')" @click="selectDay(60)">
            <!-- <div class="submitSeach"> -->
              <span style="margin-left: 30px">{{$L.t('bonusGame.MoneyQuery.zh2')}}:</span>
              <select v-model="sendParmas.userTypes"  style="margin-bottom: 2px; padding: 1px 2px;" @change="selectSearch()">
                <option value="0">{{$L.t('bonusGame.MoneyQuery.zh3')}}</option>
                <option value="1">{{$L.t('bonusGame.MoneyQuery.zh4')}}</option>
              </select>
            <!-- </div> -->
          </td>
        </tr>
        <tr>
          <td>
            <div class="timeShow head_wrap">
              <timer class="submitSeach" @sendTime="getTimer" :day="days"></timer>
              <div class="submitSeach">{{$L.t('table.type')}}:
                <span class="mutiCheckbox">
                  <label v-for="(item, index) in typeList" :key="index">
                    <input type="checkbox" :value="item.id" v-model="item.active">
                    {{item.title}}
                  </label>
                </span>
              </div>

              <div class="submitSeach">
                {{$L.t('table.username')}}:
              </div>
              <div class="submitSeach">
                <input style="width:100px" type="text" v-model="sendParmas.username">
              </div>

              <div class="submitSeach">{{$L.t('moneyAdmin.Owed.info20')}}:</div>
              <div class="submitSeach">
                <input style="width:100px" type="text" v-model="sendParmas.rechargeId">
              </div>

              <div class="submitSeach">
                <span>{{$L.t('moneyAdmin.ListRecharge.info3')}}:</span>
                <select v-model="sendParmas.bankid">
                  <option value="">{{$L.t('agent.agent_2.all')}}</option>
                  <option v-for="(item,index) in agentStore.agentBankList.data" :key="index" :value="item.id">{{item.name}}</option>
                </select>
              </div>
              <div class="submitSeach">{{$L.t('moneyAdmin.ListDraw.info2')}}:
                <select v-model="sendParmas.timeType">
                  <option value="">{{$L.t('agent.agent_2.all')}}</option>
                  <option value="1">{{$L.t('moneyAdmin.Owed.info10')}}</option>
                  <option value="2">{{$L.t('moneyAdmin.ListDraw.info3')}}</option>
                </select>
              </div>
              <div class="submitSeach" @click="seachCondition()">
                  <input type="submit" :value="$L.t('submit')">
                </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table" style="table-layout:fixed">
      <tbody>
        <tr class="head">
          <td>{{$L.t('financial.zh31')}}</td>
          <td>{{$L.t('agent.agent_0.huiy')}}</td>
          <td>{{$L.t('table.name')}}</td>
          <td>{{$L.t('chatRoom.zh69')}}</td>
          <td>{{$L.t('moneyAdmin.ListRecharge.info7')}}/{{$L.t('moneyAdmin.ListRecharge.info5')}}</td>
          <td>{{$L.t('new.info5')}}</td>
          <td>{{$L.t('moneyAdmin.Owed.info14')}}</td>
          <td>{{$L.t('agent.agent_8.zh60')}}</td>
          <td>{{$L.t('moneyAdmin.Owed.info15')}}</td>
          <td>{{$L.t('moneyAdmin.Owed.info16')}}</td>
          <!-- <td class="key_account">商户密钥</td> -->
          <td>{{$L.t('member.info51')}}</td>
          <td>{{$L.t('moneyAdmin.ListRecharge.info10')}}</td>
          <td>{{$L.t('agent.agent_8.zh17')}}</td>
          <td>{{$L.t('moneyAdmin.ListDraw.info3')}}</td>
          <td>{{$L.t('moneyAdmin.Owed.info10')}}</td>
          <td>{{$L.t('table.remark')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr class="even" v-for="(item, index) in moneyStore.onlineRechargeList.data.data" :key="index">
          <td>{{item.rechargeId}}</td>
          <td :class="{'color-red': item.usertype == 9}">{{item.username}}</td>
          <td>{{item.truename}}</td>
          <td class="win">{{item.amount}}</td>
          <td>{{item.exchangeRateName}}/{{item.exchangeRate}}</td>
          <td>{{item.initAmount}}({{item.exchangeRateName}})</td>
          <td>{{item.pay_type}}</td>
          <td>{{item.bankInfo}}</td>
          <td>{{item.title}}</td>
          <td>{{item.sname}}</td>
          <!-- <td class="key_account">{{item.saccount}}</td> -->
          <td>{{item.firstPunch}}</td>
          <td>{{item.actionIP}}</td>
          <td>{{item.payFinish}}</td>
          <td>{{item.actionTime}}</td>
          <td>{{item.rechargeTime}}</td>
          <td>{{item.info}}</td>
          <td>
            <button @click="payMentClick(item)">{{$L.t('moneyAdmin.Owed.info21')}}</button>
          </td>
        </tr>
        <tr v-if="getPageData.sum > 0">
          <td colspan="17">
            <span class="color-red">{{$L.t('common.total')}}: {{moneyStore.onlineRechargeList.data.allAmount}}</span>
          </td>
        </tr>
        <tr v-if="getPageData.sum == 0">
          <td colspan="17" style="text-align: center">
            {{$L.t('noData')}}
          </td>
        </tr>
        <tr v-if="getPageData.sum > 0">
          <td colspan="17">
            <page-limit class="padding_page" :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 存款审核 -->
    <el-dialog
      :title="this.$L.t('moneyAdmin.Draw.info18')"
      :visible.sync="rechareVisible"
      width="600px">
      <div v-if="rechareVisible" class="form_container">
        <div class="formBox_title">{{$L.t('moneyAdmin.Owed.info22')}}</div>
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('moneyAdmin.Draw.info31')}}
            </div>
            <div class="formLi_content">
              <el-radio v-model="formData.state" label="1">{{$L.t('moneyAdmin.Draw.info32')}}</el-radio>
              <el-radio v-model="formData.state" label="0">{{$L.t('moneyAdmin.Draw.info33')}}</el-radio>
            </div>
          </li>
           <!-- <li v-if="formData.state == 1">
            <div class="formLi_title">
              金额
            </div>
            <div class="formLi_content">
              <input type="text" v-model="rechargeAmount" placeholder="请输入金额(*必填)">
            </div>
          </li> -->
          <li>
            <div class="formLi_title">
              {{$L.t('table.remark')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="formData.comment" :placeholder="$L.t('moneyAdmin.Owed.info23')">
            </div>
          </li>
          <li>
            <button class="form_commit" @click="formCommit()">{{$L.t('submit')}}</button>
          </li>
        </ul>
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
          state: 2,
          username: '',
          userTypes: 0,
          type: '',
          fromTime:'',
          toTime:'',
          bankid:'',
          timeType:'',
          rechargeId:''
        },
        days:'',
        typeList: [],
        handleInfo: {},
        rechareVisible: false,
        formData: {
          state: '0',
          comment: '',
        },
        rechargeAmount:''
      }
    },
    created (){
      this.getOnlineRechargeList(this.sendParmas)
      this.getOnlineRechargeType().then((res) => {
        for(let k in res) {
          res[k].active = false
        }
        this.typeList = res
      })
      this.getBankList()
    },
    methods: {
      ...mapActions([
        'getOnlineRechargeList',
        'getOnlineRechargeType',
        'rechargeHandle',
        'getBankList',
        'getSysadminList'
      ]),
      // 时间
      timeTool(d){
        var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        return datetime;
      },
      getTimer(start,end){
        this.sendParmas.fromTime = start
        this.sendParmas.toTime = end
      },
      selectDay(d){
        this.days = d
      },
      // 下拉框搜索
      selectSearch () {
        this.sendParmas.page = 1
        this.getOnlineRechargeList(this.sendParmas)
      },
      // 搜索
      seachCondition(){
        // 数组过滤   只取id
        let idList = this.typeList.filter(res => res.active).map(res => res.id)
        // 赋值
        this.sendParmas.type = idList.join(',')
        this.sendParmas.page = 1
        this.getOnlineRechargeList(this.sendParmas)
      },
      // 列表分页
      handlePage (data) {
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit
        this.getOnlineRechargeList(this.sendParmas)
      },
      // 手动完成
      payMentClick (item) {
        this.handleInfo = item
        // this.rechargeAmount = item.amount
        this.formData.state = '0'
        this.formData.comment = ''
        this.rechareVisible = true
      },
      formCommit () {
        if (this.formData.comment == '') {
          this.$message(this.$L.t('member.hylb_3.info19'))
          return false
        }
        // if(this.formData.state == 1){
        //   this.rechargeHandle({
        //     id: this.handleInfo.id,
        //     state: this.formData.state,
        //     comment: this.formData.comment,
        //     rechargeAmount:this.rechargeAmount,
        //   }).then(() => {
        //     this.rechareVisible = false
        //     this.getOnlineRechargeList(this.sendParmas)
        //   })
        // }else{
          this.rechargeHandle({
            id: this.handleInfo.id,
            state: this.formData.state,
            comment: this.formData.comment
          }).then(() => {
            this.rechareVisible = false
            this.getOnlineRechargeList(this.sendParmas)
          })

        // }
      },
    },
    computed: {
      ...mapState([
        "moneyStore",
        "agentStore"
      ]),
      // 列表分页data
      getPageData () {
        return {
          page: this.sendParmas.page,
          limit: this.sendParmas.limit,
          sum: this.moneyStore.onlineRechargeList.data.count || 0
        }
      },
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
table td{
  overflow-wrap: break-word;
}
table .head td{
  white-space: normal;
  line-height: 20px;
}
.head_wrap{
  flex-wrap: wrap;
  line-height: 30px;
}
</style>
