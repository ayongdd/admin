<template>
  <div class="container">
    <table class="table">
      <tbody>
        <tr>
          <td class="nav">{{$L.t('moneyAdmin.Owed.info24')}}</td>
          <td>
            <button class="popBtn" @click="searchCommit()">{{$L.t('moneyAdmin.Draw.info2')}}</button>
            <div style="display: inline-flex">
              <span style="margin-left: 20px;margin-right: 10px;">{{$L.t('bonusGame.MoneyQuery.zh2')}}:</span>
              <select v-model="sendParmas.userTypes" @click="typeChange()">
                <option value="0">{{$L.t('bonusGame.MoneyQuery.zh3')}}</option>
                <option value="1">{{$L.t('bonusGame.MoneyQuery.zh4')}}</option>
              </select>


              <span style="margin-left: 5px">{{$L.t('chessGame.zh3')}}：
                <select v-model="searchType" @change="changeSearchType($event)" style="height: 25px;">
                <option value="1">{{$L.t('table.username')}}</option>
                <option value="2">{{$L.t('moneyAdmin.ListRecharge.info2')}}</option>
                <option value="3">{{$L.t('member.info41')}}</option>
                </select>
             </span>
              <span v-if="searchType == 1">::<input type="text" :placeholder="$L.t('table.username')" v-model="sendParmas.username" style="width: 150px;height: 21px;margin: 0 2px;padding-left: 5px;"></span>
              <span v-if="searchType == 2">::<input type="text" :placeholder="$L.t('moneyAdmin.ListRecharge.info2')" v-model="sendParmas.bank_username" style="width: 150px;height: 21px;margin: 0 2px;padding-left: 5px;"></span>
              <span v-if="searchType == 3">::<input type="text" :placeholder="$L.t('member.info41')" v-model="sendParmas.amountCard" style="width: 150px;height: 21px;margin: 0 2px;padding-left: 5px;"></span>

              <span style="margin-left: 20px;margin-right: 10px;">{{$L.t('moneyAdmin.Owed.info25')}}:</span>
              <select v-model="moneyRange" style="width:100px;">
                <option value="amountMax">{{$L.t('moneyAdmin.ListDraw.info8')}}</option>
                <option value="amountMin">{{$L.t('moneyAdmin.Owed.info26')}}</option>
              </select>
              <input type="number" :placeholder="$L.t('moneyAdmin.Gift.info12')" v-model="searchMoney" style="margin:0 10px;">
              <button @click="searchRecharge">
                {{$L.t('submit')}}
              </button>
            </div>
            <div style="display: block; float: right;">
              <select style="height: 26px;font-size: 13px;" v-model="loadTimer" @change="reloadTime(loadTimer)">
                <option value="0">{{$L.t('moneyAdmin.Draw.info5')}}</option>
                <option value="20">20{{$L.t('moneyAdmin.Draw.info6')}}</option>
                <option value="40">40{{$L.t('moneyAdmin.Draw.info6')}}</option>
                <option value="60">60{{$L.t('moneyAdmin.Draw.info6')}}</option>
              </select>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
        <tr class="head">
          <td><input type="checkbox" v-model="allBox" @change="selectAll()"> <button @click="allPostCheck">{{$L.t('moneyAdmin.Draw.info7')}}</button> </td>
          <td class="sort_desc" data-sort-field="ctime">{{$L.t('table.numbers')}}/ID</td>
          <td>{{$L.t('agent.agent_0.huiy')}}</td>
          <td>{{$L.t('member.info61')}}</td>
          <td>{{$L.t('moneyAdmin.ListRecharge.info4')}}</td>
          <td>{{$L.t('moneyAdmin.ListRecharge.info7')}}/{{$L.t('moneyAdmin.ListRecharge.info5')}}</td>
          <td>{{$L.t('new.info5')}}</td>
          <td>{{$L.t('chatRoom.zh69')}}</td>
          <td>{{$L.t('moneyAdmin.Owed.info27')}}</td>
          <td>{{$L.t('member.log_12.info5')}}</td>
          <td>{{$L.t('moneyAdmin.ListRecharge.info9')}}</td>
          <td>IP</td>
          <td>{{$L.t('moneyAdmin.Draw.info14')}}</td>
          <td>{{$L.t('financial.zh85')}}</td>
        </tr>

        <tr v-for="(item, index) in moneyStore.rechargeCash.data.data" :key="index">
          <td>
            <input type="checkbox" v-model="item.checked">
          </td>
          <td>
            {{item.rechargeId}}
            <br/>
            <span class="color-blue_c">{{item.id}}</span>
          </td>
          <td :class="{'color-red': item.usertype == 9}">
            {{item.username}}
          </td>
          <td class="color-blue_c">
            {{item.level}}
          </td>
          <td>
            {{item.truename}}
            <br/>
            {{item.account}}
          </td>
          <td>{{item.exchangeRateName}}/{{item.exchangeRate}}</td>
          <td>{{item.initAmount}}({{item.exchangeRateName}})</td>
          <td>
            {{item.amount}}
          </td>
          <td>
            {{item.pay_type}}
            <br/>
            {{item.actionTime}}
          </td>
          <td>
            {{$L.t('lottery.zh231')}} {{item.firstPunch}} {{$L.t('moneyAdmin.Draw.info54')}}
          </td>
          <td>
            {{item.skInfo}}
            <br/>
            {{item.skAccount}}
          </td>
          <td>
            {{item.actionIP}}
          </td>
          <td>
            {{item.adminid}}
          </td>
          <td>
            <!-- <button v-if="item.adminid == 0" @click="relieveClick(item)">正在审核</button> -->
            <!-- <span v-else class="color-red">{{item.adminid}}在处理</span> -->
            <button :style="{color:item.isAdminid == 1 ? '#777' : '#333'}"  @click="rechargeClick(item)">{{$L.t('moneyAdmin.Draw.info18')}}</button>
          </td>
        </tr>
        <tr>
          <td colspan="18" style="color: red">
            <!-- 注:"正在审核"按钮,可以让这笔存款不再声音提醒!!确认审核,请点击"审核"按钮<br> -->
            {{$L.t('moneyAdmin.Draw.info19')}}.
          </td>
        </tr>
        <tr v-if="getPageData.sum == 0">
          <td colspan="18" style="text-align: center">
            {{$L.t('noData')}}
          </td>
        </tr>
        <tr v-if="getPageData.sum > 0">
          <td colspan="18">
            <page-limit class="padding_page" :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 存款审核 -->
    <el-dialog
      :title="$L.t('moneyAdmin.Draw.info18')"
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
          <li>
            <div class="formLi_title">
              {{$L.t('table.remark')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="formData.comment" :placeholder="$L.t('manager.info16')">
            </div>
          </li>

          <li >
            <div class="formLi_title">
              {{$L.t('moneyAdmin.Draw.info36')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="formData.admin_attach" :placeholder="$L.t('moneyAdmin.Draw.info37')">
            </div>
          </li>

          <li style="font-size: 18px; text-align: center;padding: 8px 0;" v-if="formData.attach">
            <p style="color: red;width: 100%;">{{$L.t('hint')}}: {{formData.attach}}
            </p>
          </li>

          <!--<li v-if="moneyStore.cashDetail.data.memberMessage" style="font-size: 18px; text-align: center;padding: 8px 0;">-->
            <!--<p style="color: red;width: 100%;">提示:{{moneyStore.cashDetail.data.memberMessage}}</p>-->
          <!--</li>-->


          <li>
            <button class="form_commit" @click="formCommit()" v-if="unbindSunmit == 0">{{$L.t('submit')}}</button>
            <button class="form_commit" v-if="unbindSunmit == 1">{{$L.t('member.info133')}}</button>
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
          userTypes: 0,
          username:'',
          bank_username:'',
          amountCard:''
        },
        formData: {
          state: '0',
          comment: '',
          attach:'',
          admin_attach:'',
        },
        handleInfo: {},
        searchType:'1',
        rechareVisible: false,
        loadTimer: 0,
        timer: null,

        //  批量审核
        allBox:false,
        isAllPost:false,
        unbindSunmit:0,

        moneyRange:'amountMax', // 金额范围
        searchMoney:'',

      }
    },
    created (){
      this.getRechargeCash(this.sendParmas)
    },
    beforeDestroy () {
      // 离开清除定时器
      clearTimeout(this.timer)
    },
    methods: {
      ...mapMutations([
        'setRechargeCash'
      ]),
      ...mapActions([
        'getRechargeCash',
        'rechargeHandle',
        'relieveSysadmin',
      ]),
      changeSearchType(e) {
        // console.log(e.target.value)
        this.searchType = e.target.value;
        this.sendParmas.username = '';
        this.sendParmas.bank_username = '';
        this.sendParmas.amountCard = '';

      },
      searchRecharge(){
        this.sendParmas.page = 1
        this.setRechargeCash({
          code: null,
          data: [],
        })
        this.loadTimer = 0
        let pars = {
          page: this.sendParmas.page,
          limit:this.sendParmas.limit,
          userTypes: this.sendParmas.userTypes,
        }
        pars[this.moneyRange] = this.searchMoney;
        let obj = Object.assign({},this.sendParmas,pars)
        this.getRechargeCash(obj)
        clearTimeout(this.timer)
      },
      selectAll(){
        if(this.allBox){
          this.moneyStore.rechargeCash.data.data.forEach(function (i,idx,arr) {
            i.checked = !0
          })
        }else{
          this.moneyStore.rechargeCash.data.data.forEach(function (i,idx,arr) {
            i.checked = !1
          })
        }
      },
      allPostCheck(){
        if(this.moneyStore.rechargeCash.data.data.length == 0) {
          return
        }
        let state = this.moneyStore.rechargeCash.data.data.some(function( item, index, array ){
          return item.checked;
        })
        if(state){
          this.formData.state = '0'
          this.formData.comment = ''
          this.rechareVisible = true
          this.isAllPost = true
        }else{
          this.$message(this.$L.t('moneyAdmin.Draw.info43'))
        }
      },

      typeChange () {
        this.sendParmas.page = 1
        this.getRechargeCash(this.sendParmas)
      },
      reloadTime (value) {
        // console.log(value)
        // 先清除定时器
        clearTimeout(this.timer)
        if (value > 0) {
          let num = value * 1000
          this.reloadAction(num)
        }
      },
      // 刷新函数
      reloadAction (time) {
        this.sendParmas.page = 1
        this.timer = setTimeout(() => {
          // 调用方法
          this.getRechargeCash(this.sendParmas)
          this.reloadAction(time)
        }, time)
      },
      // 手动刷新
      searchCommit () {
        this.sendParmas.page = 1
        this.setRechargeCash({
          code: null,
          data: [],
        })
        this.loadTimer = 0
        this.getRechargeCash(this.sendParmas)
        clearTimeout(this.timer)
      },
      // 分页回调
      handlePage (data) {
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit
        this.getRechargeCash(this.sendParmas)
      },
      // 解除正在审核状态
      relieveClick (item) {
        this.relieveSysadmin({id: item.id}).then(() => {
          this.getRechargeCash(this.sendParmas)
        })
      },
      // 审核弹窗
      rechargeClick (item) {
        if(item.isAdminid == 1){
          return false
        }
        this.isAllPost = false
        this.handleInfo = item
        this.rechareVisible = true
        this.formData.state = '0'
        this.formData.comment = ''
        this.formData.admin_attach = ''
        this.formData.attach = item.attach;//用户备注
      },
      // 审核提交
      formCommit () {
        // if (this.formData.state == '-1') {
        //   this.$message('请选择审核结果')
        //   return false
        // }
        this.unbindSunmit = 1
        if(this.isAllPost){
          var alllist = []
          this.moneyStore.rechargeCash.data.data.forEach(function (i,idx) {
              if(i.checked){
                  alllist.push(i.id)
            }
          })
          this.rechargeHandle({
              id: alllist.join(","),
            state: this.formData.state,
            comment: this.formData.comment,
            admin_attach: this.formData.admin_attach
          }).then((res) => {
            if(res.code == 0){
              this.rechareVisible = false
              this.allBox =false
              this.getRechargeCash(this.sendParmas)
              this.unbindSunmit = 0
            }else{
              setTimeout(() => {
                this.unbindSunmit = 0
              }, 800);
            }
          })
        }else{
          this.rechargeHandle({
            id: this.handleInfo.id,
            state: this.formData.state,
            comment: this.formData.comment,
            admin_attach: this.formData.admin_attach
          }).then((res) => {
            if(res.code == 0){
              // 更新信息
              this.rechareVisible = false
              this.getRechargeCash(this.sendParmas)
              this.unbindSunmit = 0
            }else{
              setTimeout(() => {
                this.unbindSunmit = 0
              }, 800);
            }
          })
        }


      },
    },
    computed: {
      ...mapState([
        "moneyStore",
        "indexStore"
      ]),
      // 列表分页data
      getPageData () {
        return {
          page: this.sendParmas.page,
          limit: this.sendParmas.limit,
          sum: this.moneyStore.rechargeCash.data.count || 0
        }
      }
    },
    watch:{
      '$route.query'(){
        this.sendParmas.page = 1
        this.getRechargeCash(this.sendParmas)
      }
    }
  }
</script>
<style lang="css" scoped>
</style>
