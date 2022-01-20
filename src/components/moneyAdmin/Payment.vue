<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
        <tr class="nav">
          <td>
            {{$L.t('financial.zh27')}}:
            <input type="button" :value="$L.t('today')" @click="selectDay(0)">
            <input type="button" :value="$L.t('yesterday')" @click="selectDay(1)">
            <input type="button" :value="$L.t('thisWeek')" @click="selectDay(6)">
            <input type="button" :value="$L.t('lastWeek')" @click="selectDay(14)">
            <input type="button" :value="$L.t('thisMonth')" @click="selectDay(30)">
            <input type="button" :value="$L.t('lastMonth')" @click="selectDay(60)">
            <span style="margin-left: 30px;margin-top: 2px;">{{$L.t('bonusGame.MoneyQuery.zh2')}}:</span>
            <select v-model="sendParmas.userTypes" style="margin-bottom: 2px; padding: 1px 2px;" @change="selectSearch()">
              <option value="0">{{$L.t('bonusGame.MoneyQuery.zh3')}}</option>
              <option value="1">{{$L.t('bonusGame.MoneyQuery.zh4')}}</option>
            </select>
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
              <div class="submitSeach">{{$L.t('chessGame.zh3')}}::
                <select v-model="namecondition">
                  <option value="0">{{$L.t('table.username')}}</option>
                  <option value="1">{{$L.t('financial.zh31')}}</option>
                </select>
              </div>
              <div class="submitSeach">
                <input style="width:100px" type="text" v-model="choosecondition">
              </div>
              <!-- <div class="submitSeach">
                用户名:
              </div>
              <div class="submitSeach">
                <input style="width:100px" type="text" v-model="sendParmas.username">
              </div>
              <div class="submitSeach">
                订单号:
              </div>
              <div class="submitSeach">
                <input style="width:100px" type="text" v-model="sendParmas.order_id">
              </div> -->

              <div class="submitSeach">
                <span>{{$L.t('moneyAdmin.ListRecharge.info3')}}:</span>
                <select v-model="sendParmas.bankid">
                  <option value="">{{$L.t('agent.agent_2.all')}}</option>
                  <option v-for="(item,index) in agentStore.agentBankList.data" :key="index" :value="item.id">{{item.name}}</option>
                </select>
              </div>
              <div class="submitSeach">{{$L.t('moneyAdmin.Owed.info7')}}:
                <select v-model="sendParmas.isAdmin">
                  <option value="">{{$L.t('agent.agent_2.all')}}</option>
                  <option value="1">{{$L.t('true')}}</option>
                  <option value="0">{{$L.t('false')}}</option>
                </select>
              </div>
              <div class="submitSeach">{{$L.t('moneyAdmin.Owed.info8')}}:
                <select v-model="sendParmas.isPay">
                  <option value="">{{$L.t('agent.agent_2.all')}}</option>
                  <option value="1">{{$L.t('agent.agent_8.zh17')}}</option>
                  <option value="0">{{$L.t('moneyAdmin.Owed.info9')}}</option>
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
              <div class="export-data">
                <button @click="sendData()"  v-if="indexStore.dataAdminInfo.updateName && indexStore.dataAdminInfo.updateName==true">{{$L.t('lottery.zh45')}}</button>
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
          <td>{{$L.t('moneyAdmin.Owed.info11')}}</td>
          <td>{{$L.t('moneyAdmin.Owed.info12')}}<div class="help-tip"><p>{{$L.t('moneyAdmin.Owed.info13')}}</p></div></td>
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
          <!-- <td>支付时间</td> -->
          <td>{{$L.t('moneyAdmin.ListDraw.info3')}}</td>
          <td>{{$L.t('moneyAdmin.Owed.info10')}}</td>
          <td>{{$L.t('moneyAdmin.Amount.info6')}}</td>
        </tr>
        <tr class="odd" v-for="(item, index) in moneyStore.onlineRechargeList.data.data" :key="index">
          <td>{{item.rechargeId}}</td>
          <td :class="{'color-red': item.usertype == 9}">{{item.username}}</td>
          <td>{{item.truename}}</td>
          <td class="win">{{item.amount}}</td>
          <td class="win">{{item.rechargeAmount}}</td>
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
          <!-- <td>{{item.actionTime}}</td> -->
          <td>{{item.actionTime}}</td>
          <td>{{item.rechargeTime}}</td>
          <td>{{item.actionUid}}</td>
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
    <!--导出数据-->
    <el-dialog
      :title="$L.t('lottery.zh45')"
      class="confirmModel dataSend"
      :visible.sync="exportDataVisible"
      :modal-append-to-body="exportDataVisible"
      :append-to-body="exportDataVisible"
      :modal="exportDataVisible"
      width="450px">
      <div class="model-main">
        {{$L.t('member.info155')}}
      </div>
      <div class="model-input">
        <span>{{$L.t('lottery.zh53')}}：</span>
        <input type="text" :placeholder="$L.t('lottery.zh54')" v-model="exportObj.vercode">
      </div>
      <div class="ser_list" style="padding: 0 8px 30px 8px;">
        <p>{{$L.t('lottery.zh55')}}: &nbsp
          <label @click="chooseAll">
            <input id="quan" type="checkbox" v-model="chooseAllData">
            {{$L.t('agent.agent_1.allSelect')}}
          </label>
        </p>
        <label class="label-choose" v-for="(item, index) in exportTypeList">
          <div>
              <input type="checkbox" :value="item.id" v-model="item.active">
              {{item.title}}
          </div>
        </label>&nbsp
      </div>
      <div class="model-footer-btn">
        <button @click="exportDataVisible = false">{{$L.t('cancel')}}</button>
        <button @click="exportData()" :disabled="exportSuccess === 1">{{$L.t('sure')}}</button>
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
        exportDataVisible:false, // 导出数据弹窗
        exportObj:{
          vercode:'', // 安全盾
        },
        sendParmas:{
          page: 1,
          limit: 20,
          state: 1,
          username: '',
          userTypes: 0,
          type: '',
          fromTime:'',
          toTime:'',
          bankid:'',
          order_id:'',
          isAdmin:'',
          isPay:'',
          timeType:''
        },
        namecondition:'0',
        choosecondition:'',

        days:'',
        typeList: [],
        // 类型
        chooseAllData:true,
        exportTypeList: [
          {id: 1, title: this.$L.t('member.log_11.info1'),name:'username', active: false},
          {id: 2, title: this.$L.t('table.name'), name:'truename',active: false},
          {id: 3, title: this.$L.t('chatRoom.zh69'), name:'amount', active: false},
          {id: 4, title: this.$L.t('moneyAdmin.Owed.info14'),  name:'pay_type',active: false},
          {id: 5, title: this.$L.t('agent.agent_8.zh60'),  name:'bankInfo',active: false},
          {id: 6, title: this.$L.t('moneyAdmin.Owed.info15'),  name:'title',active: false},
          {id: 7, title: this.$L.t('moneyAdmin.Owed.info16'), name:'sname', active: false},
          {id: 8, title: this.$L.t('moneyAdmin.Owed.info8'), name:'payFinish', active: false},
          {id: 9, title: this.$L.t('moneyAdmin.Owed.info17'), name:'actionIP', active: false},
          {id: 10, title: this.$L.t('financial.zh33'), name:'actionTime', active: false},
          {id: 12, title: this.$L.t('table.remark'), name:'info', active: false},
          {id: 11, title: this.$L.t('moneyAdmin.Owed.info18'), name:'actionUid', active: false},
        ],
        chooseData:[],
        exportSuccess:0
      }
    },
    created (){
      this.getOnlineRechargeList(this.sendParmas)
      this.getOnlineRechargeType().then((res) => {
        for(let k in res) {
          res[k].active = false
        }
        this.typeList = res
      }),
      this.getBankList()
    },
    watch: {
      // 监听单选时取消全选
      exportTypeList: {
        handler(){
          for(let k in this.exportTypeList){
            if(this.exportTypeList[k].active == false){
              this.chooseAllData = false;
              break
            }else {
              this.chooseAllData = true;
            }
          }
        },
        deep: true
      }
    },
    methods: {
      ...mapActions([
        'getOnlineRechargeList',
        'getOnlineRechargeType',
        'getBankList',
        'getOnlineRechargeListExcel'
      ]),
      // 全选
      chooseAll(e){
        if(e.target.checked){
          for(let key in this.exportTypeList){
            this.exportTypeList[key].active = true
            this.chooseData.push(this.exportTypeList[key].active);
          }
        }else{
          for(let key in this.exportTypeList){
            this.exportTypeList[key].active = false
            this.chooseData = []
          }
        }
      },
      sendData(){
        this.exportDataVisible = true
        this.exportObj.vercode = ''
        for(let k in this.exportTypeList){
          this.exportTypeList[k].active = true
        }
      },
      // 导出数据
      exportData(){
        let list  = this.exportTypeList.filter(res=>res.active)
          let rows = []
          let obj = {}
          for(let k in list){
            obj[list[k].name] = list[k].title
          }

          if(JSON.stringify(obj) == "{}"){
            for(let k in this.exportTypeList){
              obj[this.exportTypeList[k].name] = ''
            }
          }
        if(!this.exportObj.vercode){
          this.$message(this.$L.t('lottery.zh54'))
          return
        }
        let exportDataObj = this.sendParmas
        exportDataObj.vercode = this.exportObj.vercode
        exportDataObj.rows = obj
        this.getOnlineRechargeListExcel(exportDataObj).then(res=>{
          if(res.code == 0){
            this.exportObj.vercode = ''
            this.exportDataVisible = false
            let blob = new Blob([res.data.table], {
              type:'application/vnd.ms-excel'
            })
            if (window.navigator.msSaveOrOpenBlob) {
              navigator.msSaveBlob(blob);
            } else {
              let elink = document.createElement('a');
              elink.download = res.data.filename+'.xls';
              elink.style.display = 'none';
              elink.href = URL.createObjectURL(blob);
              document.body.appendChild(elink);
              elink.click();
              document.body.removeChild(elink);
            }
          }else{
            this.$message(res.message)
          }
        })
        this.exportSuccess = 1
        setTimeout(()=>{
          this.exportSuccess = 0
        },3000)
      },
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
        if(this.namecondition == '0'){
          this.sendParmas.username = this.choosecondition
          this.sendParmas.order_id = ''
        }else{
          this.sendParmas.order_id = this.choosecondition
          this.sendParmas.username = ''
        }
        this.getOnlineRechargeList(this.sendParmas)
      },
      // 列表分页
      handlePage (data) {
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit
        this.getOnlineRechargeList(this.sendParmas)
      }
    },
    computed: {
      ...mapState([
        "moneyStore",
        "agentStore",
        "indexStore"
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
<style lang="less" scoped>
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
.export-data{
  margin-left: 20px;
  button{
    height: 23px;
  }
}
.label-choose{
  width: 142px;
    float: left;
  div{
    width: 142px;
  }
}
</style>
