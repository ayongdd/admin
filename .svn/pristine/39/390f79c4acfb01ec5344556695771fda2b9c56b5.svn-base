<template>
  <div class="container">
    <table id="search" class="table clearfloat">
      <tbody>
        <tr class="nav">
          <td>
            {{$L.t('moneyAdmin.ListDraw.info1')}}:
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
                      <option value="4">{{$L.t('table.remark')}}</option>
                      <option value="5">{{$L.t('table.numbers')}}</option>
                    </select>::
                  </div>
                  <div class="submitSeach">{{$L.t('table.type')}}
                    <select v-model="sendParmas.advance">
                      <option value="0">{{$L.t('agent.agent_8.zh49')}}</option>
                      <option value="1">{{$L.t('moneyAdmin.Draw.info3')}}</option>
                      <option value="2">{{$L.t('moneyAdmin.Draw.info4')}}</option>
                    </select>
                  </div>
                  <div class="submitSeach" :style="$language() == 'a_' || $language() == 'b_' ?{'margin-top': '20px','margin-left': '-10px'} :''">
                      <input type="text" v-model="sendParmas.searchVal">
                  </div>
                  <div class="submitSeach">
                    {{$L.t('moneyAdmin.ListDraw.info9')}}：
                    <select v-model="sendParmas.sysadmin">
                      <option value="">{{$L.t('agent.agent_2.all')}}</option>
                      <option v-for="(item,index) in managerStore.dataBusinessList.data.data" :value="item.uid" :key="index">{{item.username}}</option>
                    </select>
                  </div>
                  <div class="submitSeach" @click="seachCondition()">
                    <input type="submit" :value="$L.t('submit')">
                </div>
                <div class="export-data" :style="$language() ?{'margin-top': '25px',right: '17px'} :''">
                    <button @click="sendData()"  v-if="indexStore.dataAdminInfo.updateName && indexStore.dataAdminInfo.updateName==true">{{$L.t('lottery.zh45')}}</button>
                </div>
              </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody><tr class="head">
          <td>{{$L.t('moneyAdmin.Draw.info8')}}</td>
          <td>{{$L.t('moneyAdmin.ListDraw.info10')}}</td>
          <td>{{$L.t('moneyAdmin.Draw.info10')}}</td>
          <td v-show="payAdvance">{{$L.t('moneyAdmin.ListDraw.info11')}}</td>
          <td>{{$L.t('moneyAdmin.ListRecharge.info7')}}/{{$L.t('moneyAdmin.ListRecharge.info5')}}</td>
          <td>{{$L.t('new.info5')}}</td>
          <td>{{$L.t('member.info61')}}</td>
          <td>{{$L.t('member.info124')}}</td>
          <td>{{$L.t('member.log_12.info5')}}</td>
          <td>{{$L.t('moneyAdmin.Draw.info11')}}</td>
          <td>{{$L.t('moneyAdmin.ListDraw.info12')}}</td>
          <td>{{$L.t('moneyAdmin.ListDraw.info13')}}</td>
          <td>{{$L.t('table.sxFEI')}}</td>
          <td>{{$L.t('moneyAdmin.Draw.info12')}}</td>
          <td>{{$L.t('table.remark')}}</td>
          <td>{{$L.t('moneyAdmin.Draw.info36')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr :class="item.state == '通过' ? 'odd' : 'even'" v-for="(item, index) in moneyStore.cashFinishList.data.data" :key="index">
          <td>
            {{item.orderID}}
            <br/>
            {{item.actionTime}}
          </td>
          <td :class="{'color-red': item.usertype == 9}">
            {{item.username}}
            <br/>
            {{item.truename}}
          </td>
          <td>
            {{item.countname}}
            <br/>
            {{item.account}}
          </td>
          <td v-show="payAdvance">{{item.pay_name}}</td>
          <td>{{item.exchangeRateName}}/{{item.exchangeRate}}</td>
          <td>{{item.initAmount}}({{item.exchangeRateName}})</td>
          <td>
            {{item.level}}
          </td>
          <td>
            {{item.toCachAmount}}
          </td>
          <td>
            {{$L.t('lottery.zh231')}}{{item.cashCount}}{{$L.t('moneyAdmin.Draw.info54')}}
          </td>
          <td>
            {{$L.t('lottery.zh231')}}{{item.toDayCashCount}}{{$L.t('moneyAdmin.Draw.info54')}}
          </td>
          <td :class="item.state == '通过' ? '' : 'color-red'">
            {{item.state}}
          </td>
          <td>
            {{item.adminid}}
            <br/>
            {{item.addTime}}
          </td>
          <td>
            {{item.fee}}
          </td>
          <td>
            {{item.amount}}
          </td>
          <td>
            {{item.info}}
          </td>
          <td>
            {{item.admin_attach}}
          </td>
          <td>
            <button class="popBtn" @click="cashInfo(item)" v-if="item.isWithdraw == 1">{{$L.t('moneyAdmin.ListDraw.info14')}}</button>
          </td>
        </tr>
        <tr v-if="getPageData.sum > 0">
          <td colspan="20">
            <span class="color-red">{{$L.t('common.total')}}: {{moneyStore.cashFinishList.data.Amount}}</span>
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
            timeType: 1,
            userTypes: 0,
            state: 0,
            searchKey: 1,
            searchVal: '',
            fromTime:'',
            toTime:'',
            advance:'0',
            sysadmin:''
          },
          days:'',
          payAdvance:true,
          // 类型
          chooseAllData:true,
          exportTypeList: [
            {id: 1, title: this.$L.t('member.log_11.info1'),name:'username', active: false},
            {id: 2, title: this.$L.t('table.name'), name:'truename',active: false},
            {id: 3, title: this.$L.t('chatRoom.zh69'), name:'toCachAmount', active: false},
            {id: 4, title: this.$L.t('moneyAdmin.ListDraw.info12'),  name:'state',active: false},
            {id: 5, title: this.$L.t('table.khhang'),  name:'countname',active: false},
            {id: 6, title: this.$L.t('moneyAdmin.ListDraw.info15'),  name:'account',active: false},
            {id: 7, title: this.$L.t('moneyAdmin.ListDraw.info16'), name:'pay_name', active: false},
            {id: 8, title: this.$L.t('moneyAdmin.ListDraw.info17'), name:'adminid', active: false},
            {id: 9, title: this.$L.t('table.sxFEI'), name:'fee', active: false},
            {id: 10, title: this.$L.t('moneyAdmin.Draw.info12'), name:'amount', active: false},
            {id: 11, title: this.$L.t('moneyAdmin.ListDraw.info18'), name:'time', active: false},
            {id: 12, title: this.$L.t('table.remark'), name:'info', active: false},
          ],
          chooseData:[],
          exportSuccess:0,
          dataLi:{
            page: 1,
            limit: 200000,
          }
        }
      },
      created () {
        this.getCashFinishList(this.sendParmas)
        this.getBusinessList(this.dataLi)
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
          'getCashFinishList',
          'cashWithdraw',
          'getCashFinishExcel',
          'getBusinessList'
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
          this.getCashFinishExcel(exportDataObj).then(res=>{
            if(res.code == 0){
              this.exportObj.vercode = ''
              this.exportDataVisible = false
              let blob = new Blob([res.data.table], {
                // type: 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
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
          this.getCashFinishList(this.sendParmas).then(()=>{
            if(this.sendParmas.advance == 1){
              this.payAdvance = false
            }else{
              this.payAdvance = true
            }
          })
        },
        // 分页回调
        handlePage (data) {
          this.sendParmas.page = data.page
          this.sendParmas.limit = data.limit
          this.getCashFinishList(this.sendParmas)
        },
        // 撤回重审
        cashInfo(item){
          this.$confirm(this.$L.t('moneyAdmin.ListDraw.info19'), this.$L.t('hint'), {
            confirmButtonText: this.$L.t('sure'),
            cancelButtonText: this.$L.t('cancel'),
            type: 'warning',
            center: true
          }).then(() => {
            this.cashWithdraw({id:item.id}).then(res=>{
              this.getCashFinishList(this.sendParmas)
            })
          }).catch(() => {})
        }
      },
      components:{

      },
      computed: {
        ...mapState([
          "moneyStore",
          "indexStore",
          "managerStore"
        ]),
        // 列表分页data
        getPageData () {
          return {
            page: this.sendParmas.page,
            limit: this.sendParmas.limit,
            sum: this.moneyStore.cashFinishList.data.count || 0
          }
        }
      }
    }
  </script>
<style lang="css" scoped>
*{
  box-sizing: border-box;
}
.export-data{
  position: absolute;
  right: 30px;
}
.label-choose{
  width: 142px;
    float: left;
  div{
    width: 142px;
  }
}
</style>
