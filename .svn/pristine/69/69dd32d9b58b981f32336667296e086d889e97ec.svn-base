<template>
  <div class="container" :class="{'admin_hidden': userVisible}">
    <table class="table">
      <tbody>
        <tr>
          <td class="nav">{{$L.t('moneyAdmin.Draw.info1')}}</td>
          <td>
            <button class="popBtn" @click="searchCommit()">{{$L.t('moneyAdmin.Draw.info2')}}</button>
            <div style="display: inline-flex">
              <span style="margin-left: 20px;margin-right: 10px;">{{$L.t('bonusGame.MoneyQuery.zh2')}}:</span>
              <select v-model="sendParmas.userTypes" @click="typeChange()">
                <option value="0">{{$L.t('bonusGame.MoneyQuery.zh3')}}</option>
                <option value="1">{{$L.t('bonusGame.MoneyQuery.zh4')}}</option>
              </select>
              <span style="margin-left: 20px;margin-right: 10px;">{{$L.t('table.type')}}:</span>
              <select v-model="sendParmas.advance" @change="chooseType()">
                <option value="">{{$L.t('agent.agent_8.zh49')}}</option>
                <option value="0">{{$L.t('moneyAdmin.Draw.info3')}}</option>
                <option value="1">{{$L.t('moneyAdmin.Draw.info4')}}</option>
              </select>
            </div>
            <div style="display: block; float: right;">
              <select style="height: 26px;font-size: 13px;" v-model="loadTimer" @change="reloadTime(loadTimer)">
                <option value="0">{{$L.t('moneyAdmin.Draw.info5')}}</option>
                <option value="3">3{{$L.t('moneyAdmin.Draw.info6')}}</option>
                <option value="5">5{{$L.t('moneyAdmin.Draw.info1')}}</option>
                <option value="10">10{{$L.t('moneyAdmin.Draw.info1')}}</option>
                <option value="20">20{{$L.t('moneyAdmin.Draw.info1')}}</option>
                <option value="40">40{{$L.t('moneyAdmin.Draw.info1')}}</option>
                <option value="60">60{{$L.t('moneyAdmin.Draw.info1')}}</option>
              </select>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
        <tr class="head">
          <td><input type="checkbox" v-model="allBox" @change="selectAll()">
            <button @click="allPostCheck">{{$L.t('moneyAdmin.Draw.info7')}}</button>
          </td>
          <td class="sort_desc" data-sort-field="ctime">{{$L.t('moneyAdmin.Draw.info8')}}</td>
          <td>{{$L.t('table.type')}}</td>
          <td>{{$L.t('moneyAdmin.Draw.info9')}}</td>
          <td>{{$L.t('member.info52')}}</td>
          <td>{{$L.t('member.info99')}}</td>

          <td>{{$L.t('moneyAdmin.ListRecharge.info7')}}/{{$L.t('moneyAdmin.ListRecharge.info5')}}</td>
          <td>{{$L.t('new.info5')}}</td>
          <!--<td v-if="payType == '1'">代付名称</td>-->
          <!--<td v-if="payType == '1'">代付订单号</td>-->
          <td>{{$L.t('member.info61')}}</td>
          <td>{{$L.t('moneyAdmin.Draw.info10')}}</td>
          <td>{{$L.t('chatRoom.zh69')}}</td>
          <td>{{$L.t('chatRoom.zh150')}}</td>
          <td>{{$L.t('moneyAdmin.Draw.info11')}}</td>
          <td>{{$L.t('table.sxFEI')}}</td>
          <td>{{$L.t('moneyAdmin.Draw.info12')}}</td>

          <td>{{$L.t('moneyAdmin.Draw.info13')}}</td>
          <td>{{$L.t('moneyAdmin.Draw.info14')}}</td>
          <!--<td v-if="payType == '1'">代付状态</td>-->
          <td>{{$L.t('financial.zh85')}}</td>
          <!-- <td>内部备注</td> -->
        </tr>
        <tr v-for="(item, index) in moneyStore.cashLogList.data.data" :key="index" :style="{'color':colorFunction(item)}">
          <td>
            <input type="checkbox" v-model="item.checked">
          </td>
          <td>
            {{item.orderID}}
            <br />
            {{item.actionTime}}
          </td>
          <td>
            <span v-if="item.alid> 0" style="color:red">
                {{$L.t('moneyAdmin.Draw.info4')}} <span v-if="item.lstate == 1" style="color:#999;">{{$L.t('moneyAdmin.Draw.info15')}}</span>
                <span v-else-if="item.lstate == 2">{{$L.t('fail')}}</span>
                <span v-else-if="item.lstate == 0" style="color:green;">{{$L.t('success')}}</span>({{item.pay_name}})<br/>
                <span>{{$L.t('financial.zh31')}}：{{item.tradeNo}}</span>
            </span>
            <span v-else style="color: #359a6d;">{{$L.t('moneyAdmin.Draw.info3')}}</span>
          </td>
          <td :class="{'color-red': item.usertype == 9}">
            {{item.username}}<br/>
            {{item.attach}}
          </td>
          <td>
            {{item.exclassName}}
          </td>
          <td>
            {{item.truename}}
          </td>
          <td>{{item.exchangeRateName}}/{{item.exchangeRate}}</td>
          <td>{{item.initAmount}}({{item.exchangeRateName}})</td>
          <!--<td v-if="payType == '1'">{{item.pay_name}}</td>-->
          <!--<td v-if="payType == '1'">{{item.tradeNo}}</td>-->
          <td class="color-blue_c">
            {{item.level}}
          </td>
          <td>
            {{item.countname}}
            <br />
            {{item.account}}
          </td>
          <td>
            {{item.toCachAmount}}
          </td>
          <td>
            {{item.cashCount}}
          </td>
          <td>
            {{$L.t('lottery.zh231')}}{{item.toDayCashCount}}{{$L.t('moneyAdmin.Draw.info54')}}
          </td>
          <td style="color: red;">
            {{item.fee}}
          </td>
          <td>
            {{item.amount}}
          </td>
          <td>
            <div class="inline-flex">
              <!-- <a :href="'#/member/4?username=' + item.username" class="buttonCss">会员资料</a> -->
              <button @click="userInfoShow(item)">{{$L.t('index.memberData')}}</button>
              <button style="margin-left: 5px" @click="showLogClick(item)">{{$L.t('moneyAdmin.Draw.info16')}}</button>
            </div>
          </td>
          <td>{{item.adminid}}</td>
          <!--<td v-if="payType == '1'">-->
            <!--<span v-if="item.lstate == 1">处理中</span>-->
            <!--<span v-else-if="item.lstate == 2">失败</span>-->
            <!--<span v-else-if="item.lstate == 0">成功</span>-->
          <!--</td>-->
          <td>
            <!-- <button v-if="item.adminid == 0" @click="relieveClick(item)">正在审核</button> -->
            <!-- <button v-if="item.adminid == 0" @click="cashLockCommit(item)">锁定</button> -->
            <!-- <span style="color:red" v-if="item.adminid != 0">{{item.adminid}}</span> -->
            <!-- <span v-if="item.adminid != 0" class="color-red">{{item.adminid}}正在处理</span> -->
            <button :style="{color:item.isAdminid == 1 ? '#777' : '#333'}" @click="rechargeClick(item)">{{$L.t('moneyAdmin.Draw.info18')}}</button>
            <button v-if="item.alid == 0 && item.adminid" @click="relieveClick(item)">{{$L.t('moneyAdmin.Draw.info17')}}</button>
            <!--<button v-if="item.adminid != 0 && payType != '1'" @click="relieveClick(item)">解除审核</button>-->
          </td>
        </tr>
        <tr v-if="getPageData.sum > 0">
          <td colspan="20">
            <span class="color-red">{{$L.t('common.total')}}: {{moneyStore.cashLogList.data.pageToCachAmount}}</span>
          </td>
        </tr>
        <tr v-if="getPageData.sum == 0">
          <td colspan="18" style="text-align: center">
            {{$L.t('noData')}}
          </td>
        </tr>
        <tr>
          <td colspan="18" style="color: red">
            <!-- 注:"正在审核"按钮,可以让这笔存款不再声音提醒!!确认审核,请点击"审核"按钮<br> -->
            {{$L.t('moneyAdmin.Draw.info19')}}。<br/>
            {{$L.t('moneyAdmin.Draw.info20')}}
          </td>
        </tr>
        <tr v-if="getPageData.sum > 0">
          <td colspan="18">
            <page-limit class="padding_page" :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 资金流水 -->
    <el-dialog :title="$L.t('detail')" :visible.sync="showLogVisible" width="1250px">
      <fund-water v-if="showLogVisible" :typeData="logInfoData"></fund-water>
    </el-dialog>
    <!-- 存款审核 -->
    <el-dialog :title="$L.t('moneyAdmin.Draw.info18')" :visible.sync="rechareVisible" width="600px">
      <div v-if="rechareVisible" class="form_container" style="height: auto;">
        <div class="drawDm_content" v-if="payType != '1' || lstate == 2">
          <p>{{$L.t('moneyAdmin.Draw.info21')}}</p>
          <ul>
            <li v-for="(item, index) in moneyStore.cashDetail.data.betCode" :key="index">
              {{item.name}}
              <span>{{item.AllBet}}</span>
              <button @click="goDmDetail(item)">{{$L.t('bonusGame.MoneyQuery.zh14')}}</button>
            </li>
          </ul>
          <div class="dm_text" v-if="moneyStore.cashDetail.data">
            <div>
              <span>
                {{$L.t('moneyAdmin.Draw.info22')}}：<span class="color-red">{{moneyStore.cashDetail.data.allGameBet || 0}}</span>
              </span>
              <span>
                {{$L.t('moneyAdmin.Draw.info23')}}：<span class="color-red">{{moneyStore.cashDetail.data.needBetCode || 0}}</span>
              </span>
              <span v-html="dmTitleHint">
                <!-- {{dmTitleHint}} -->
              </span>
            </div>
            <div>
              <span>
                {{$L.t('agent.agent_8.zh39')}}：{{moneyStore.cashDetail.data.recAmount}}
              </span>
              <span>
                {{$L.t('agent.agent_8.zh40')}}：{{moneyStore.cashDetail.data.cashAmount}}
              </span>
              <span>
                {{$L.t('table.zYH')}}：{{moneyStore.cashDetail.data.yhAmount}}
              </span>
              <span>
                {{$L.t('table.sjYK')}}：{{moneyStore.cashDetail.data.sjyk}}
              </span>
              <span>
                {{$L.t('moneyAdmin.Draw.info24')}}：{{moneyStore.cashDetail.data.firstPunch}}
              </span>
              <span>
                {{$L.t('moneyAdmin.Draw.info25')}}：{{moneyStore.cashDetail.data.cashCount}}
              </span>
            </div>
            <div>
              <span>
                {{$L.t('table.username')}}：{{moneyStore.cashDetail.data.username}}
              </span>
              <span>
                {{$L.t('table.name')}}：{{moneyStore.cashDetail.data.truename || '-'}}
              </span>
            </div>
          </div>
        </div>
        <div class="formBox_title">{{$L.t('moneyAdmin.Draw.info26')}}</div>
        <ul>
          <li v-if="payType != '1'|| lstate == 2">
            <div class="formLi_title">
              {{$L.t('moneyAdmin.Draw.info27')}}
            </div>
            <div class="formLi_content">
              <el-radio v-model="pay_name" label="1">{{$L.t('moneyAdmin.Draw.info28')}}</el-radio>
              <el-radio v-model="pay_name" label="0">{{$L.t('moneyAdmin.Draw.info29')}}</el-radio>
              <button style="margin-left: 40px;" @click="detailVisible = true">{{$L.t('moneyAdmin.Draw.info30')}}</button>
            </div>
          </li>
          <li v-if="pay_name == '0' || payType == '1'">
            <div class="formLi_title">
              {{$L.t('moneyAdmin.Draw.info31')}}
            </div>
            <div class="formLi_content">
              <el-radio v-model="formData.state" label="1">{{$L.t('moneyAdmin.Draw.info32')}}</el-radio>
              <el-radio v-model="formData.state" label="0">{{$L.t('moneyAdmin.Draw.info33')}}</el-radio>
            </div>
          </li>
          <li v-if="(pay_name == '1' && payType != '1') || (pay_name == '1' && payType == '1'&& lstate == 2)">
            <div class="formLi_title">
              {{$L.t('moneyAdmin.Draw.info34')}}
            </div>
            <div class="formLi_content">
              <el-select v-model="payList.aid" :placeholder="$L.t('agent.agent_7.qxz')">
                <el-option
                  v-for="item in payOptions"
                  :key="item.id"
                  :label="item.pay_name"
                  :value="item.id">
                </el-option>
              </el-select>
            </div>
          </li>


          <li v-if="(pay_name == '1' && payType != '1')|| (pay_name == '1' && payType == '1'&& lstate == 2)">
            <div class="formLi_title">
              {{$L.t('moneyAdmin.Draw.info35')}}
            </div>
            <div class="formLi_content">
              <el-select v-model="payList.bid" :placeholder="$L.t('agent.agent_7.qxz')">
                <el-option
                  v-for="item in bankOptions"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </div>
          </li>

          <li v-if="(pay_name == '1' && payType != '1') || (pay_name == '1' && payType == '1'&& lstate == 2)">
            <div class="formLi_title">
              会员选择通道
            </div>
            <span>{{payName.pay_name}}</span>
          </li>

          <li>
            <div class="formLi_title">
              {{$L.t('table.remark')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="formData.comment">
            </div>
          </li>

          <li >
            <div class="formLi_title">
              {{$L.t('moneyAdmin.Draw.info36')}}
            </div>
            <div class="formLi_content" v-if="formData.showComment==1">
              <input type="text" v-model="formData.attach" :placeholder="$L.t('moneyAdmin.Draw.info37')">
            </div>
            <div v-if="formData.showComment!=1">
              <span>-----------------------------------</span>
            </div>
          </li>

          <li v-if="moneyStore.cashDetail.data.memberMessage" style="font-size: 18px; text-align: center;padding: 8px 0;">
            <p style="color: red;width: 100%;">{{$L.t('hint')}}:{{moneyStore.cashDetail.data.memberMessage}}</p>
          </li>
          <li>
            <button class="form_commit" @click="formCommit()">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>
    <!-- 提款详情 -->
    <el-dialog :title="$L.t('moneyAdmin.Draw.info38')" :visible.sync="detailVisible" width="500px">
      <div v-if="detailVisible" class="d_detail_content">
        <ul v-if="moneyStore.cashDetail.data">
          <li>
            <div class="d_title">{{$L.t('table.username')}}</div>
            <div>
              {{handleInfo.username}}
            </div>
          </li>
          <li>
            <div class="d_title">{{$L.t('member.info142')}}</div>
            <div>
              {{moneyStore.cashDetail.data.bank}}
            </div>
          </li>
          <li>
            <div class="d_title">{{$L.t('member.info42')}}</div>
            <div>
              <span class="color-black">{{handleInfo.countname}}</span>
              <button class="tag-read" :data-clipboard-text="handleInfo.countname" @click="copy">{{$L.t('moneyAdmin.Draw.info39')}}</button>
            </div>
          </li>
          <li>
            <div class="d_title">{{$L.t('table.khName')}}</div>
            <div>
              <span class="color-black">{{handleInfo.truename}}</span>
              <button class="tag-read" :data-clipboard-text="handleInfo.truename" @click="copy">{{$L.t('moneyAdmin.Draw.info39')}}</button>
            </div>
          </li>
          <li>
            <div class="d_title">{{$L.t('table.bankId')}}</div>
            <div>
              <span class="color-black">{{handleInfo.account}}</span>
              <button class="tag-read" :data-clipboard-text="handleInfo.account" @click="copy">{{$L.t('moneyAdmin.Draw.info39')}}</button>
            </div>
          </li>
          <li>
            <div class="d_title">{{$L.t('moneyAdmin.Draw.info40')}}</div>
            <div>
              ￥{{handleInfo.toCachAmount}}
            </div>
          </li>
          <li>
            <div class="d_title">{{$L.t('table.sxFEI')}}</div>
            <div>
              ￥{{handleInfo.fee}}
            </div>
          </li>
          <li>
            <div class="d_title">{{$L.t('moneyAdmin.Draw.info41')}}</div>
            <div class="color-red">
              ￥<span>{{handleInfo.amount}}</span>
              <button class="tag-read" :data-clipboard-text="handleInfo.amount" @click="copy">{{$L.t('moneyAdmin.Draw.info39')}}</button>
            </div>
          </li>
          <li>
            <div class="d_title">{{$L.t('table.subTime')}}</div>
            <div>
              {{handleInfo.actionTime}}
            </div>
          </li>
        </ul>
      </div>
    </el-dialog>
    <!-- 打码量详情 -->
    <el-dialog :title="$L.t('bonusGame.MoneyQuery.zh14')" :visible.sync="dmDetailVisibile" width="1200px">
      <order-detail v-if="dmDetailVisibile" :paramsData="dmDetailParmas"></order-detail>
    </el-dialog>
    <!-- 提示弹窗 -->
    <comfirm-model v-if="confirmVisible" :content="confirmContent" :notBtn="'true'" @closeModel="confirmVisible = false">
    </comfirm-model>

    <el-dialog :title="$L.t('moneyAdmin.Draw.info7')" :visible.sync="allRechargeVisible" width="500px">
      <div v-if="allRechargeVisible" class="form_container">
        <div class="formBox_title">{{$L.t('moneyAdmin.Draw.info42')}}</div>
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('moneyAdmin.Draw.info31')}}
            </div>
            <div class="formLi_content">
              <el-radio v-model="allPostFormData.state" label="1">{{$L.t('moneyAdmin.Draw.info32')}}</el-radio>
              <el-radio v-model="allPostFormData.state" label="0">{{$L.t('moneyAdmin.Draw.info33')}}</el-radio>
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('table.remark')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="allPostFormData.comment">
            </div>
          </li>
          <li>
            <button class="form_commit" @click="allPostFormCommit()">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>
    <!-- 提示弹窗 -->
    <comfirm-model
      v-if="lockVisible"
      :content="lockContent"
      @closeModel="commitModel"
      @commitModel="commitModel">
    </comfirm-model>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Clipboard from 'clipboard'
export default {
  data() {
    return {
      sendParmas: {
        page: 1,
        limit: 20,
        userTypes: 0,
        advance:''
      },
      payType:'',
      lstate:'',
      lockContent:'',
      lockVisible:false,
      formData: {
        state: '1',
        comment: '',
        attach:'',
        showComment: "1",
      },
      payName:{
        id:'',
        pay_name:''
      },
      handleInfo: {},
      rechareVisible: false,
      userVisible: false,
      loadTimer: 0,
      timer: null,
      // 资金流水
      showLogVisible: false,
      // 资金流水传参
      logInfoData: {
        type: '',
        name: '',
        fromTime: '',
        toTime: '',
      },
      // 提现详情
      detailVisible: false,
      // 打码量详情
      dmDetailVisibile: false,
      dmDetailParmas: {},
      // 提示弹窗
      confirmVisible: false,
      confirmContent: '',
      // 批量审核
      allBox:false,
      allRechargeVisible: false,
      allPostFormData:{
        state: '1',
        comment: '',
      },
      // 代付
      pay_name:'0',
      payOptions:[],
      bankOptions:[],
      payList:{
        aid:'',
        bid:''
      },
      value:'',
      lid:'',
      tid:'',
      advance_ids:'',
      fullscreenLoading: false
    }
  },
  created() {
    this.getCashLogList(this.sendParmas)
    this.getActionSelect()
  },
  mounted () {
    let self = this
    this.$nextTick(() => {
      document.addEventListener('keyup', function (e) {
        //此处填写你的业务逻辑即可
        if (e.keyCode == 27) {
          self.userVisible = false
        }
      })
    })
  },
  beforeDestroy() {
    // 离开清除定时器
    clearTimeout(this.timer)
  },
  methods: {
    ...mapMutations([
      'setCashLogList',
      'setMemberVisible',
      'setMemberName',
      'setLoddingLock'
    ]),
    ...mapActions([
      'getCashLogList',
      'dealWithHandle',
      'getShowLogList',
      'getActionSelect',
      'relieveSysadmin',
      'getCashDetail',
      'cashLockAction',
      'getAdvanceList',
      'getBankSetList',
      'upAdvanceList',
      'orderLocking'
    ]),
    colorFunction(item){
      //
      if(item.cashCount*1 == 0){//表示首次提款
        return '#409eff'
      }else if(item.amount*1 > 5000){//表示大额提款
        return '#F75050'
      }else if(item.cashCount*1 == 0 && item.amount*1 > 5000) {
        return '#409eff'
      } else{
        return 'black'
      }
    },
    allPostFormCommit(){
      // if (this.allPostFormData.state == '-1') {
      //   this.$message('请选择批量审核结果')
      //   return false
      // }
      var alllist = []
      this.moneyStore.cashLogList.data.data.forEach(function (i,idx) {
        if(i.checked){
          alllist.push(i.id)
        }
      })
      this.dealWithHandle({
        id: alllist.join(","),
        state: this.allPostFormData.state,
        comment: this.allPostFormData.comment
      }).then(() => {
        this.allBox = false
        this.allRechargeVisible = false
        this.getCashLogList(this.sendParmas)
      })

    },
    selectAll(){
      if(this.allBox){
        this.moneyStore.cashLogList.data.data.forEach(function (i,idx,arr) {
          i.checked = !0
        })
      }else{
        this.moneyStore.cashLogList.data.data.forEach(function (i,idx,arr) {
          i.checked = !1
        })
      }
    },
    allPostCheck(){
      let state = this.moneyStore.cashLogList.data.data.some( function( item, index, array ){
        return item.checked;
      })
      if(state){
        this.allPostFormData.state = '1'
        this.allPostFormData.comment = ''
        this.allRechargeVisible = true
      }else{
        this.$message(this.$L.t('moneyAdmin.Draw.info43'))
      }
    },
    typeChange() {
      this.sendParmas.page = 1
      this.getCashLogList(this.sendParmas)
    },
    reloadTime(value) {
      // console.log(value)
      // 先清除定时器
      clearTimeout(this.timer)
      if (value > 0) {
        let num = value * 1000
        this.reloadAction(num)
      }
    },
    // 刷新函数
    reloadAction(time) {
      this.sendParmas.page = 1
      this.timer = setTimeout(() => {
        // 调用方法
        this.getCashLogList(this.sendParmas)
        // 回调
        this.reloadAction(time)
      }, time)
    },
    // 手动刷新
    searchCommit() {
      this.sendParmas.page = 1
      this.setCashLogList({
        code: null,
        data: [],
      })
      this.loadTimer = 0
      this.getCashLogList(this.sendParmas)
      clearTimeout(this.timer)
    },
    // 分页回调
    handlePage(data) {
      this.sendParmas.page = data.page
      this.sendParmas.limit = data.limit
      this.getCashLogList(this.sendParmas)
    },
    // 解除正在审核状态
    relieveClick(item) {
      this.relieveSysadmin({ id: item.id }).then(() => {
        this.getCashLogList(this.sendParmas)
      })
    },

    // 审核弹窗
    rechargeClick(item) {
      this.lstate = item.lstate;
      // item.lstate == 1;
      //判断是人工还是代付
      item.alid == 0 ? this.payType = 0 :this.payType = 1;
      // console.log('payType',this.payType);
      // console.log('lstate',this.lstate);
      this.formData.attach = '';
      this.pay_name = '0'
      this.lid = item.lid
      this.tid = item.id;
      if(item.isAdminid == 1){
        return false
      }
      this.setLoddingLock(true)
        // 人工
        if(item.alid == '0' || (item.alid > 0 && this.payType == 1 && this.lstate == 2)){
          this.handleInfo = item
          this.payList.aid = ''
          this.payList.bid = ''
          this.getCashDetail({ id: item.id }).then(res => {
            this.advance_ids = res.advance_id;
            console.log('advance_id',this.advance_ids);
            // console.log(res)
            if (res.cashLock) {
              this.confirmVisible = true
              this.confirmContent = this.$L.t('moneyAdmin.Draw.info44')+`‘${res.username}’`+this.$L.t('moneyAdmin.Draw.info45')
              this.setLoddingLock(false)
            } else {
              // 代付列表
              this.getAdvanceList({enable:''}).then(res=>{
                this.payOptions = res.data
                let payName = res.data.filter(item=>item.id == this.advance_ids)
                if(payName.length !==0) {
                  this.payName = payName[0]
                  this.payList.aid = payName[0].id
                }
              })
              // 银行列表
              this.getBankSetList({state:''}).then(res=>{
                this.bankOptions = res.data
                this.payList.bid = this.moneyStore.cashDetail.data.bankId
              })
              this.rechareVisible = true
              // this.formData.state = '0'
              this.formData.state = '1'
              this.formData.comment = ''
              setTimeout(()=>{
                this.setLoddingLock(false)
                // this.orderLocking({id:item.id}).then(res=>{
                //   if(res.code != 0){
                //     this.lockContent = `${res.message}`
                //     this.lockVisible = true
                //     // this.rechareVisible = false
                //   }
                // })
              },2000)
            }
            // 更新列表数据
            this.getCashLogList(this.sendParmas)
          })
        }else{
          this.rechareVisible = true
          // setTimeout(()=>{
          //   this.setLoddingLock(false)
          //   this.orderLocking({id:item.id}).then(res=>{
          //     if(res.code != 0){
          //       this.lockContent = `${res.message}`
          //       this.lockVisible = true
          //       // this.rechareVisible = false
          //     }
          //   })
          // },2000)
        }
    },
    commitModel(){
      // this.rechareVisible = false
      this.lockVisible = false
    },
    // 详情
    goDmDetail(item) {
      // console.log(item)
      this.dmDetailVisibile = true
      this.dmDetailParmas.fromTime = this.sendParmas.fromTime
      this.dmDetailParmas.toTime = this.sendParmas.toTime
      this.dmDetailParmas.agency_id = item.id
      this.dmDetailParmas.username = this.handleInfo.username
    },
    // 审核提交
    formCommit() {
      // if (this.formData.state == '-1') {
      //   this.$message('请选择审核结果')
      //   return false
      // }
      // 使用代付
      if(this.pay_name == '1'){
        if (this.payList.aid == '') {
          this.$message(this.$L.t('moneyAdmin.Draw.info46'))
          return false
        }
        if (this.payList.bid == '') {
          this.$message(this.$L.t('moneyAdmin.Draw.info47'))
          return false
        }
        this.upAdvanceList({
          id: this.handleInfo.id,
          aid: this.payList.aid,
          bid: this.payList.bid,
          comment: this.formData.comment,
          attach: this.formData.attach
        }).then(() => {
          this.rechareVisible = false
          this.getCashLogList(this.sendParmas)
          this.pay_name = '0'
          this.formData.attach =  '';
        }).catch(()=>{
          if(this.pay_name == 1) {
            this.rechareVisible = true;
            this.getCashLogList(this.sendParmas)
          }
        })
      }else{//不使用代付
        var da = {
          id: this.tid,
          state: this.formData.state,
          lid: this.lid
        }
        // if(payType != '1'){//代付
          da.comment = this.formData.comment
        // }
        da.attach = this.formData.attach
        this.dealWithHandle(da).then(() => {
          this.rechareVisible = false
          // this.payType == '1'
          this.getCashLogList(this.sendParmas)
          this.formData.attach =  '';
        })
      }
    },
    // 人工或者代付
    chooseType(){
      this.getCashLogList(this.sendParmas)
    },
    // 锁定
    cashLockCommit(item) {
      console.log(item)
      // if (item.adminid == 0) {
      // this.cashLockAction({id: item.id})
      // } else {
      //   this.confirmVisible = true
      //   this.confirmContent = `用户‘${item.adminid}’正在审核’`
      // }
    },
    // 返回类型名称
    getTypeName(id) {
      let data = this.moneyStore.actionSelect.data
      for (let k in data) {
        if (id == data[k].id) {
          return data[k].title
        }
      }
    },
    // 资金流水
    showLogClick(item) {
      // console.log(type)
      this.logInfoData.type = 2
      this.logInfoData.username = item.username
      this.logInfoData.fromTime = this.sendParmas.fromTime
      this.logInfoData.toTime = this.sendParmas.fromTime
      // // 弹窗显示
      this.showLogVisible = true
    },
    // 会员资料
    userInfoShow(item) {
      // this.handleInfo = item
      // this.userVisible = true
      this.setMemberVisible(true)
      this.setMemberName(item.username)
    },
    // 复制
    copy() {
      var clipboard = new Clipboard('.tag-read')
      clipboard.on('success', e => {
        this.$message.success(this.$L.t('moneyAdmin.Draw.info48'))
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        // 不支持复制
        this.$message(this.$L.t('moneyAdmin.Draw.info49'))
        // 释放内存
        clipboard.destroy()
      })
    },
  },
  computed: {
    ...mapState([
      "moneyStore",
      "setupStore"
    ]),
    // 列表分页data
    getPageData() {
      return {
        page: this.sendParmas.page,
        limit: this.sendParmas.limit,
        sum: this.moneyStore.cashLogList.data.count || 0
      }
    },
    // 打码量提示
    dmTitleHint() {
      let all = this.moneyStore.cashDetail.data.allGameBet
      let need = this.moneyStore.cashDetail.data.needBetCode
      if (all * 1 < need * 1) {
        return this.$L.t('moneyAdmin.Draw.info50')
      } else {
        return this.$L.t('moneyAdmin.Draw.info53')
      }
    },
  },
  watch: {
    '$route.query'() {
      this.sendParmas.page = 1
      this.getCashLogList(this.sendParmas)
    }
  }
}

</script>
<style lang="less" scoped>
// * {
  /*-webkit-touch-callout: none;*/
  /*-webkit-user-select: none;*/
  /*-khtml-user-select: none;*/
  /*-moz-user-select: none;*/
  /*-ms-user-select: none;*/
  /*user-select: none;*/
//   box-sizing: border-box;
// }

.project_name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// 明细
.distinct_container {
  color: #000;

  .table {
    margin: 0 auto;
    width: 100%;
    margin-bottom: 5px;
  }

  // 搜索
  .header_search {
    padding: 5px;

    .header_search_list {
      display: flex;
      align-items: center;
      margin-bottom: 5px;

      &>div {
        display: flex;
        align-items: center;
        margin-right: 10px;

        span {
          margin-right: 5px;
        }

        &.showType {
          label {
            display: inline-flex;
            align-items: center;
            font-size: 12px;
            margin-right: 5px;

            input {
              margin-top: 2px;
              margin-right: 2px;
            }
          }
        }
      }

      .submitSeach {
        input {
          padding: 2px 10px;
        }
      }
    }
  }

  ul {
    height: 500px;
    overflow: auto;

    div {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &.project_timer {
        flex: none;
        width: 120px;
      }
    }
  }
}

// 表格公共样式
.table_flex {
  border: 1px solid #ccc;
  border-bottom: 0;

  li {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    color: #000;
    background: #F2F2F2;

    &>div {
      flex: 1;
      font-size: 13px;
      padding: 5px 0px 5px 5px;
      border-right: 1px solid #ccc;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &.list_small {
        flex: none;
        width: 80px;
      }

      &.list_120 {
        flex: none;
        width: 120px;
      }

      &:last-child {
        border-right: 0;
      }
    }

    &.tab_title {
      background: #C8DADF;

      div {
        color: #444;
        font-weight: bold;
      }
    }

    &.table_total {
      padding: 5px 30px 5px;

      span {
        margin-left: 20px;
      }
    }
  }
}

.model-page {
  padding: 10px;
}

// 弹窗打码量
.drawDm_content {
  p {
    font-weight: bold;
    color: #000;
    font-size: 15px;
    margin-bottom: 5px;
  }

  ul {
    border: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 150px;
    overflow-y: scroll;
    // padding-left: 20px;
    li {
      position: relative;
      border: 1px solid #ccc;
      margin-right: 10px;
      margin-bottom: 5px;
      min-width: 169px;
      font-size: 12px;
      padding-left: 5px;

      span {
        display: inline-block;
        margin-left: 5px;
        padding: 2px 45px 2px 0px;
      }

      button {
        position: absolute;
        right: 3px;
        padding: 0 3px;
      }
    }
  }

  .dm_text {
    color: #000;
    font-size: 12px;
    margin-bottom: 5px;

    &>div>span {
      margin-right: 10px;
    }
  }
}

.admin_hidden {
  height: calc(100vh - 50px);
  overflow: hidden;
}

// 提现详情
.d_detail_content {
  padding: 10px 10px 50px;

  ul {
    border: 1px solid #ddd;

    li {
      position: relative;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ddd;

      &:last-child {
        border-bottom: 0;
      }

      div {
        display: inline-flex;
        align-items: center;
        height: 36px;
        padding-left: 10px;

        &.d_title {
          width: 100px;
          border-right: 1px solid #ddd;
        }

        button {
          position: absolute;
          right: 20px;
        }
      }
    }
  }
}

.userInfo-model>div.dmDetail_content {
  width: 840px;
  margin-left: -440px;
  z-index: 9999;
  height: 690px;
}

</style>
