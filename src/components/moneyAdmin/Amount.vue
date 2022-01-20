<template>
  <div class="container">

    <table class="table clearfloat" id="search">
      <tbody>
        <tr class="nav">
          <td>
            {{$L.t('moneyAdmin.Amount.info1')}}:
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
              <div class="submitSeach">
                {{$L.t('agent.agent_8.zh28')}}:<input type="text" v-model="sendParmas.username">
              </div>
              <div class="submitSeach">
                {{$L.t('table.remark')}}:<input type="text" v-model="sendParmas.comment">
              </div>
              <div class="submitSeach">
                {{$L.t('bonusGame.MoneyQuery.zh2')}}:
                <select v-model="sendParmas.userTypes">
                  <option value="0">{{$L.t('bonusGame.MoneyQuery.zh3')}}</option>
                  <option value="1">{{$L.t('bonusGame.MoneyQuery.zh4')}}</option>
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
    <table class="table"  >
      <tbody>
        <tr>
          <td>
            <button class="popBtn" @click="sdckClick()">{{$L.t('member.info80')}}</button>
            <button class="popBtn" @click="sdkkClick()">{{$L.t('moneyAdmin.Amount.info2')}}</button>
            <button class="popBtn" @click="sdxmClick()">{{$L.t('moneyAdmin.Amount.info3')}}</button>
            <button class="popBtn" @click="zsljClick()">{{$L.t('moneyAdmin.Amount.info4')}}</button>
            <font color="red">{{$L.t('moneyAdmin.Amount.info5')}}</font>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
        <tr class="head">
          <td>{{$L.t('financial.zh31')}}</td>
          <td>{{$L.t('agent.agent_0.huiy')}}</td>
          <td>{{$L.t('chatRoom.zh69')}}</td>
          <td>{{$L.t('table.type')}}</td>
          <td>{{$L.t('table.remark')}}</td>
          <td>{{$L.t('table.time')}}</td>
          <td>{{$L.t('moneyAdmin.Amount.info6')}}</td>
        </tr>
        <tr v-for="(item, index) in moneyStore.rechargeList.data.data" :key="index">
          <td>{{item.rechargeId}}</td>
          <td :class="{'color-red': item.usertype == 9}">{{item.username}}</td>
          <td>{{item.amount}}</td>
          <td>{{item.type}}</td>
          <td>{{item.info}}</td>
          <td>{{item.rechargeTime}}</td>
          <td>{{item.actionUid == 0 ? $L.t('moneyAdmin.Amount.info7') : item.actionUid}}</td>
        </tr>
        <tr v-if="getPageData.sum > 0">
          <td colspan="13">
              &nbsp;&nbsp;&nbsp;
            <span class="sum"> {{$L.t('moneyAdmin.Amount.info8')}}：{{moneyStore.rechargeList.data.Amount}}</span>
          </td>
         <!--  <td colspan="8">
            <a class="btnA" onclick="exportData()">
              <font color="green">导出数据到本地</font>
            </a>
          </td -->
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
    <!-- 手动存款 -->
    <el-dialog
      :title="$L.t('member.info80')"
      :visible.sync="sdckVisible"
      width="700px">
      <div v-if="sdckVisible" class="form_container">
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('agent.agent_8.zh28')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="formData.username" :placeholder="$L.t('moneyAdmin.Amount.info9')">
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('member.info124')}}
            </div>
            <div class="formLi_content">
              <input type="number" v-model="formData.payPrice" :placeholder="$L.t('member.hylbCopy.info4')">
            </div>
            <div class="formLi_hint">
              {{$L.t('member.info185')}}
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('member.info126')}}
            </div>
            <div class="formLi_content">
              <select v-model="formData.recharge">
                <option value="0">{{$L.t('member.info127')}}</option>
                <option value="1">{{$L.t('chatRoom.zh82')}}</option>
              </select>
            </div>
          </li>
          <li v-if="formData.recharge == 1">
            <div class="formLi_title">
              {{$L.t('member.info128')}}
            </div>
            <div class="formLi_content">
              <input type="number" v-model="formData.rechargeValue" :placeholder="$L.t('member.info129')">
            </div>
            <div class="formLi_hint">
              %
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('member.info66')}}
            </div>
            <div class="formLi_content">
              <select v-model="formData.xmNumber">
                <option value="0">{{$L.t('member.info137')}}</option>
                <option v-for="i in 50" :value="i">{{i}}</option>
              </select>
            </div>
            <div class="formLi_hint">
              {{$L.t('member.hylb_3.info28')}}
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('table.remark')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="formData.remark" :placeholder="$L.t('member.hylb_3.info29')">
            </div>
            <div class="formLi_hint">
              *
            </div>
          </li>
          <li>
            <button class="form_commit" @click="formCommit('sdckVisible')" v-if="unbindSunmit == 0">{{$L.t('submit')}}</button>
            <button class="form_commit" v-if="unbindSunmit == 1">{{$L.t('member.info133')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>

    <!-- 赠送礼金 -->
    <el-dialog
      :title="$L.t('member.info134')"
      :visible.sync="zsljVisible"
      width="700px">
      <div v-if="zsljVisible" class="form_container">
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('agent.agent_8.zh28')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="formData.username" :placeholder="$L.t('moneyAdmin.Amount.info9')">
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('chatRoom.zh69')}}
            </div>
            <div class="formLi_content">
              <input type="number" v-model="formData.payPrice" :placeholder="$L.t('member.hylb_3.info30')">
            </div>
            <div class="formLi_hint">
              * ({{$L.t('member.info136')}})
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('member.info66')}}
            </div>
            <div class="formLi_content">
              <select v-model="formData.xmNumber">
                <option value="0">{{$L.t('member.info137')}}</option>
                <option v-for="i in 50" :value="i">{{i}}</option>
              </select>
            </div>
            <div class="formLi_hint">
              {{$L.t('member.hylb_3.info28')}}
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('table.remark')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="formData.remark" :placeholder="$L.t('member.hylb_3.info29')">
            </div>
            <div class="formLi_hint">
              *
            </div>
          </li>
          <li>
            <button class="form_commit" @click="formCommit('zsljVisible')">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>

    <!-- 手动扣款 -->
    <el-dialog
      :title="$L.t('moneyAdmin.Amount.info2')"
      :visible.sync="sdkkVisible"
      width="700px">
      <div v-if="sdkkVisible" class="form_container">
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('agent.agent_8.zh28')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="formData.username" :placeholder="$L.t('moneyAdmin.Amount.info9')">
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('moneyAdmin.Amount.info11')}}
            </div>
            <div class="formLi_content">
              <input type="number" v-model="formData.payPrice" :placeholder="$L.t('moneyAdmin.Amount.info10')">
            </div>
            <div class="formLi_hint">
              * ({{$L.t('moneyAdmin.Amount.info12')}})
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('moneyAdmin.Amount.info13')}}
            </div>
            <div class="formLi_content">
              <select v-model="formData.type">
                <option value="1">{{$L.t('moneyAdmin.Amount.info14')}}</option>
                <option value="2">{{$L.t('moneyAdmin.Amount.info15')}}</option>
              </select>
            </div>
            <div class="formLi_hint">
              *
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('table.remark')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="formData.remark" :placeholder="$L.t('member.hylb_3.info29')">
            </div>
            <div class="formLi_hint">
              *
            </div>
          </li>
          <li>
            <button class="form_commit" @click="formCommit('sdkkVisible')">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>

    <!-- 手动洗码 -->
    <el-dialog
      :title="$L.t('moneyAdmin.Amount.info3')"
      :visible.sync="sdxmVisible"
      width="700px">
      <div v-if="sdxmVisible" class="form_container">
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('agent.agent_8.zh28')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="formData.username" :placeholder="$L.t('moneyAdmin.Amount.info9')">
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('member.info66')}}
            </div>
            <div class="formLi_content">
              <input type="number" v-model="formData.xmNumber" :placeholder="$L.t('moneyAdmin.Amount.info16')">
            </div>
            <div class="formLi_hint">
              * ({{$L.t('member.info136')}})
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('table.remark')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="formData.remark" :placeholder="$L.t('member.hylb_3.info29')">
            </div>
            <div class="formLi_hint">
              *
            </div>
          </li>
          <li>
            <button class="form_commit" @click="formCommit('sdxmVisible')">{{$L.t('submit')}}</button>
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
          username: '',
          comment: '',
          userTypes: 0,
          fromTime:'',
          toTime:'',
        },
        days:'',
        sdckVisible: false,
        sdkkVisible: false,
        sdxmVisible: false,
        zsljVisible: false,
        // 当前用户信息
        handleInfo: {},
        // 表单对象
        formData: {
          username: '',
          type: '',
          payPrice: '',
          xmNumber: '',
          recharge: '',
          rechargeValue: '',
          remark: '',
        },
        unbindSunmit:0
      }
    },
    created (){
      this.getRechargeList(this.sendParmas)
    },
    mounted(){
    },
    methods: {
      ...mapMutations([
      ]),
      ...mapActions([
        'getRechargeList',
        'moneyRechargeAction',
        'moneyCaijinAction',
        'moneyRechargeDeduction',
        'moneyXimaAction',
      ]),
      // 清空表单内容
      clearForm () {
        for (let k in this.formData) {
          this.formData[k] = ''
        }
      },
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
        // this.sendParmas.page = 1
        // this.sendParmas.limit = 20
        this.getRechargeList(this.sendParmas)
      },
      // 资金列表分页
      handlePage (data) {
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit
        this.getRechargeList(this.sendParmas)
      },
      // 手动存款
      sdckClick () {
        this.sdckVisible = true
        this.clearForm()
        this.formData.xmNumber = 1
        this.formData.recharge = 0
        this.formData.rechargeValue = 1
      },
      // 手动扣款
      sdkkClick () {
        this.sdkkVisible = true
        this.clearForm()
        this.formData.type = 1
        // 设置默认防止验证
        this.formData.xmNumber = 1
      },
      // 手动洗码
      sdxmClick () {
        this.sdxmVisible = true
        this.clearForm()
        this.formData.xmNumber = 1
        // 设置默认防止验证
        this.formData.payPrice = 1
      },
      // 赠送礼金
      zsljClick () {
        this.zsljVisible = true
        this.clearForm()
        this.formData.xmNumber = 1
      },
      // 提交按钮
      formCommit (type) {
        if (!this.formData.username) {
          this.$message(this.$L.t('moneyAdmin.Amount.info17'))
          return false
        }
        if (!this.formData.xmNumber) {
          this.$message(this.$L.t('member.info83'))
          return false
        }
        // if (!this.formData.remark) {
        //   this.$message('请填写备注信息')
        //   return false
        // }
        if (!this.formData.payPrice) {
          this.$message(this.$L.t('member.hylbCopy.info5'))
          return false
        }
        // 手动充值
        if (type == 'sdckVisible') {
          this.unbindSunmit = 1
          if (this.formData.recharge == 1 && this.formData.rechargeValue.toString() == '') {
            this.$message(this.$L.t('member.info129'))
            return false
          }
          let value = this.formData.rechargeValue
          if (this.formData.recharge == 0 && this.formData.rechargeValue.toString() == '') {
            value = 1
          }
          this.moneyRechargeAction({
            username: this.formData.username,
            amount: this.formData.payPrice,
            rechargeLargess: this.formData.recharge,
            rechargeLargessPt: value,
            xima: this.formData.xmNumber,
            comment: this.formData.remark
          }).then((res) => {
            if(res.code == 0){
              // 更新信息
              this.unbindSunmit = 0
              this.getRechargeList(this.sendParmas)
              this.sdckVisible = false
            }else{
              setTimeout(() => {
                this.unbindSunmit = 0
              }, 800);
            }
          })
        }
        // 手动扣款
        if (type == 'sdkkVisible') {
          this.moneyRechargeDeduction({
            username: this.formData.username,
            amount: this.formData.payPrice,
            type: this.formData.type,
            comment: this.formData.remark,
          }).then(() => {
            // 更新信息
            this.getRechargeList(this.sendParmas)
            this.sdkkVisible = false
          })
        }
        // 手动洗码
        if (type == 'sdxmVisible') {
          this.moneyXimaAction({
            username: this.formData.username,
            amount: this.formData.xmNumber,
            comment: this.formData.remark,
          }).then(() => {
            // 更新信息
            this.getRechargeList(this.sendParmas)
            this.sdxmVisible = false
          })
        }
        // 赠送礼金
        if (type == 'zsljVisible') {
          this.moneyCaijinAction({
            username: this.formData.username,
            amount: this.formData.payPrice,
            xima: this.formData.xmNumber,
            comment: this.formData.remark,
          }).then(() => {
            // 更新信息
            this.getRechargeList(this.sendParmas)
            this.zsljVisible = false
          })
        }
      },
    },
    computed: {
      ...mapState([
        "moneyStore",
      ]),
      // 列表分页data
      getPageData () {
        return {
          page: this.sendParmas.page,
          limit: this.sendParmas.limit,
          sum: this.moneyStore.rechargeList.data.Count || 0
        }
      }
    }
  }
</script>
<style lang="less" scoped>
*{
  box-sizing: border-box;
}
</style>
