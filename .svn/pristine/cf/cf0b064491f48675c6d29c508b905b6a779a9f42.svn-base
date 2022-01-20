<template>
  <div class="container">
    <table id="search" class="table clearfloat">
      <tbody>
        <tr class="nav">
          <td>
            {{$L.t('moneyAdmin.ListRecharge.info1')}}:
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
              <div class="timeShow head_wrap">
                  <timer class="submitSeach" @sendTime="getTimer" :day="days"></timer>
                  <div class="submitSeach">{{$L.t('moneyAdmin.ListDraw.info2')}}:
                    <select v-model="sendParmas.timeType">
                      <option value="1">{{$L.t('moneyAdmin.ListDraw.info3')}}</option>
                      <option value="2">{{$L.t('moneyAdmin.ListDraw.info4')}}</option>
                    </select>
                  </div>
                  <div class="submitSeach">{{$L.t('moneyAdmin.ListDraw.info5')}}:
                    <select v-model="sendParmas.state">
                      <option value="0">{{$L.t('agent.agent_8.zh49')}}</option>
                      <option value="1">{{$L.t('moneyAdmin.Draw.info32')}}</option>
                      <option value="2">{{$L.t('moneyAdmin.ListDraw.info6')}}</option>
                    </select>
                  </div>
                  <div class="submitSeach">{{$L.t('bonusGame.MoneyQuery.zh2')}}:
                    <select v-model="sendParmas.userTypes">
                      <option value="0">{{$L.t('bonusGame.MoneyQuery.zh3')}}</option>
                      <option value="1">{{$L.t('bonusGame.MoneyQuery.zh4')}}</option>
                    </select>
                  </div>
                  <div class="submitSeach">{{$L.t('chessGame.zh3')}}
                    <select v-model="sendParmas.searchKey">
                      <option value="1">{{$L.t('agent.agent_8.zh28')}}</option>
                      <option value="2">{{$L.t('moneyAdmin.ListDraw.info7')}}</option>
                      <option value="3">{{$L.t('moneyAdmin.ListDraw.info8')}}</option>
                      <option value="6">{{$L.t('moneyAdmin.ListRecharge.info2')}}</option>
                      <option value="4">{{$L.t('table.remark')}}</option>
                      <option value="5">{{$L.t('table.numbers')}}</option>
                    </select>::
                  </div>
                  <div class="submitSeach">
                      <input style="width:100px" type="text" v-model="sendParmas.searchVal">
                  </div>
                  <div class="submitSeach">
                    <span>{{$L.t('moneyAdmin.ListDraw.info9')}}:</span>
                    <select v-model="sendParmas.sysadmin">
                      <option value="">{{$L.t('agent.agent_2.all')}}</option>
                      <option v-for="(item,index) in moneyStore.dataSysadmin.data" :value="index" :key="index">{{item}}</option>
                    </select>
                  </div>
                  <div class="submitSeach">
                    <span>{{$L.t('moneyAdmin.ListRecharge.info3')}}:</span>
                    <select v-model="sendParmas.bankid">
                      <option value="">{{$L.t('agent.agent_2.all')}}</option>
                      <option v-for="(item,index) in agentStore.agentBankList.data" :key="index" :value="item.id">{{item.name}}</option>
                    </select>
                  </div>
                  <div class="submitSeach" @click="seachCondition()">
                    <input type="submit" :value="$L.t('submit')">
                </div>
                <div class="export-data" :style="$language()?{top:80+'px'}:''">
                    <button v-if="indexStore.dataAdminInfo.updateName && indexStore.dataAdminInfo.updateName==true" @click="sendData()" >{{$L.t('lottery.zh45')}}</button>
                </div>
              </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
        <tr class="head">
          <td>{{$L.t('table.numbers')}}/ID</td>
          <td>{{$L.t('agent.agent_0.huiy')}}</td>
          <td>{{$L.t('member.info158')}}</td>
          <td>{{$L.t('member.info61')}}</td>
          <td>{{$L.t('moneyAdmin.ListRecharge.info7')}}/{{$L.t('moneyAdmin.ListRecharge.info5')}}</td>
          <td>{{$L.t('new.info5')}}</td>
          <td>{{$L.t('moneyAdmin.ListRecharge.info7')}}</td>
          <td>{{$L.t('chatRoom.zh69')}}</td>
          <td>{{$L.t('moneyAdmin.ListRecharge.info8')}}</td>
          <td>{{$L.t('moneyAdmin.ListRecharge.info9')}}</td>
          <td>{{$L.t('member.info51')}}</td>
          <td>{{$L.t('moneyAdmin.ListRecharge.info10')}}</td>
          <td>{{$L.t('moneyAdmin.ListDraw.info12')}}</td>
          <td>{{$L.t('moneyAdmin.ListRecharge.info11')}}</td>
          <td>{{$L.t('table.remark')}}</td>
          <td>{{$L.t('financial.zh32')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr :class="item.state == '通过' ? 'odd' : 'even'" v-for="(item, index) in moneyStore.regFinishList.data.data" :key="index">
          <td>
            {{item.rechargeId}}
            <br/>
            <span class="color-blue_c">{{item.id}}</span>
          </td>
          <td :class="{'color-red': item.usertype == 9}">
            {{item.username}}
          </td>
          <td>{{item.userattach}}</td>
          <td>
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
            {{item.skInfo}}
            <br/>
            {{item.skAccount}}
          </td>
          <td>
            {{$L.t('lottery.zh231')}}{{item.firstPunch}}{{$L.t('moneyAdmin.Draw.info54')}}
          </td>
          <td>
            {{item.actionIP}}
          </td>
          <td :class="item.state == '通过' ? '' : 'color-red'">
            {{item.state}}
          </td>
          <td>
            {{item.actionUid}}
            <br/>
            {{item.rechargeTime}}
          </td>
          <td>
            {{item.info}}
          </td>
          <td>
            {{item.admin_attach}}
          </td>
          <td>
            <button v-if="item.is_withdraw==1" @click="backRetrial(item.id)">{{$L.t('moneyAdmin.ListDraw.info14')}}</button>
          </td>
        </tr>
        <tr v-if="getPageData.sum > 0">
          <td colspan="20">
            <span class="color-red">{{$L.t('common.total')}}: {{moneyStore.regFinishList.data.Amount}}</span>
          </td>
        </tr>
        <tr v-if="getPageData.sum == 0">
          <td colspan="20" style="text-align: center">
            {{$L.t('noData')}}
          </td>
        </tr>
        <tr v-if="getPageData.sum > 0">
          <td colspan="20">
            <page-limit class="padding_page" :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 提示弹窗 -->
      <comfirm-model
        v-if="confirmVisible"
        :content="$L.t('moneyAdmin.ListRecharge.info12')"
        @closeModel="confirmVisible = false"
        @commitModel="commitModel"
        >
      </comfirm-model>
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
      <div class="ser_list">
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
            timeType: 1,
            userTypes: 0,
            state: 0,
            searchKey: 1,
            searchVal: '',
            fromTime:'',
            toTime:'',
            sysadmin:'',
            bankid:''
          },
          // 弹窗提示
          confirmVisible: false,
          confirmId:'',
          days:'',
          chooseAllData:true,
          // 类型
          exportTypeList: [
            {id: 1, title: this.$L.t('member.log_11.info1'),name:'username', active: true},
            {id: 2, title: this.$L.t('chatRoom.zh69'), name:'amount',active: true},
            {id: 3, title: this.$L.t('table.name'), name:'truename', active: true},
            {id: 4, title: this.$L.t('moneyAdmin.ListRecharge.info13'),  name:'account',active: true},
            {id: 5, title: this.$L.t('moneyAdmin.Owed.info14'),  name:'pay_type',active: true},
            {id: 6, title: this.$L.t('moneyAdmin.ListRecharge.info14'),  name:'skInfo',active: true},
            {id: 7, title: this.$L.t('moneyAdmin.ListRecharge.info10'), name:'actionIP', active: true},
            {id: 8, title: this.$L.t('moneyAdmin.ListDraw.info12'), name:'state', active: true},
            {id: 9, title: this.$L.t('moneyAdmin.ListDraw.info17'), name:'actionUid', active: true},
            {id: 10, title: this.$L.t('table.subTime'), name:'actionTime', active: true},
            {id: 11, title: this.$L.t('moneyAdmin.ListDraw.info4'), name:'rechargeTime', active: true},
            {id: 12, title: this.$L.t('table.remark'), name:'info', active: true},
          ],
          chooseData:[],
          exportSuccess:0
        }
      },
      created () {
        this.RechargeFinishList(this.sendParmas)
        this.getBankList()
        this.getSysadminList()
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
        ...mapMutations([
        ]),
        ...mapActions([
          'RechargeFinishList',
          'getWithdraw',
          'getBankList',
          'getSysadminList',
          'getRechargeExcel'
        ]),
        sendData(){
          this.exportDataVisible = true
          this.exportObj.vercode = ''
          for(let k in this.exportTypeList){
            this.exportTypeList[k].active = true
          }
        },
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
      // 导出数据
        exportData(){
          // 选中的时候
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
          this.getRechargeExcel(exportDataObj).then(res=>{
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
          this.sendParmas.page = 1
          this.RechargeFinishList(this.sendParmas)
        },
        // 分页回调
        handlePage (data) {
          this.sendParmas.page = data.page
          this.sendParmas.limit = data.limit
          this.RechargeFinishList(this.sendParmas)
        },
        // 撤回重审
        backRetrial(id){
          this.confirmVisible = true
            this.confirmId = id
        },
        commitModel(){
          this.getWithdraw({id:this.confirmId}).then(res=>{
            this.confirmVisible = false
            this.RechargeFinishList(this.sendParmas)
          })
        },
      },
      components:{

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
            sum: this.moneyStore.regFinishList.data.count || 0
          }
        }
      }
    }
  </script>
<style lang="less" scoped>
*{
  box-sizing: border-box;
}
.head_wrap{
  flex-wrap: wrap;
  line-height: 30px;
}
.export-data{
  position: absolute;
  right: 30px;
}
.confirmModel{
  .el-dialog__body{
    height: 300px!important;
  }
}
.label-choose{
  width: 130px;
    float: left;
  div{
    width: 110px;
  }
}
</style>
