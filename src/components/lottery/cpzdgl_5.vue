<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>
          {{$L.t('lottery.zh29')}}:
          <input type="button" :value="$L.t('today')" @click="selectDay(0)">
          <input type="button" :value="$L.t('yesterday')" @click="selectDay(1)">
          <input type="button" :value="$L.t('thisWeek')" @click="selectDay(6)">
          <input type="button" :value="$L.t('lastWeek')" @click="selectDay(14)">
          <input type="button" :value="$L.t('thisMonth')" @click="selectDay(30)">
          <input type="button" :value="$L.t('lastMonth')" @click="selectDay(60)">
          &nbsp; &nbsp; &nbsp;
          <span class="touzhu" @click="selectState('')" :class="{on:betObj.status*1 == ''}">
              {{$L.t('lottery.zh30')}}
          </span>
          <span class="touzhu" @click="selectState(1)" :class="{on:betObj.status*1 == 1}">
            {{$L.t('table.winner')}}
          </span>
          <span class="touzhu" @click="selectState(2)" :class="{on:betObj.status*1 == 2}">
            {{$L.t('agent.agent_8.zh21')}}
          </span>
          <span class="touzhu" @click="selectState(3)" :class="{on:betObj.status*1 == 3}">
             {{$L.t('lottery.zh31')}}
          </span>
          <span class="touzhu" @click="selectState(4)" :class="{on:betObj.status*1 == 4}">
             {{$L.t('lottery.zh32')}}
          </span>
          <span class="touzhu" @click="selectState(5)" :class="{on:betObj.status*1 == 5}">
             {{$L.t('lottery.zh12')}}
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <div class="timeShow">
            <!--<timer class="submitSeach" @sendTime="getTimer" :day="days"></timer>-->
            <zjmxTimer @sendTime="getTimer" :day="days"></zjmxTimer>
            <div> &nbsp;&nbsp;{{$L.t('lottery.zh33')}}：
              <select name="" id="" v-model="betObj.searchField">
                <option value="username">{{$L.t('table.username')}}</option>
                <option value="actionNo">{{$L.t('table.issue')}}</option>
                <option value="wjorderId">{{$L.t('lottery.zh34')}}</option>
              </select>
              <input type="text" v-model="betObj.searchVal" :placeholder="$L.t('lottery.zh36')">
            </div>
            <div class="submitSeach">{{$L.t('agent.agent_8.zh24')}}:
              <select v-model="betObj.type">
                <option value="" >{{$L.t('agent.agent_8.zh24')}}</option>
                <option :value="l.id" v-for="l in lotteryStore.lotteryList.data">{{l.title}}</option>
              </select>
            </div>
            <div class="submitSeach">
              <input type="submit" :value="$L.t('agent.agent_2.checked')" @click="searchYhFn()">
              <input type="submit" :value="$L.t('lottery.zh44')" @click="clearSearchYhFn()" style="cursor: pointer">
              <button @click="sendData()"  v-if="indexStore.dataAdminInfo.updateName && indexStore.dataAdminInfo.updateName==true">{{$L.t('lottery.zh45')}}</button>
              <button @click="downloads()"  v-if="indexStore.dataAdminInfo.updateName && indexStore.dataAdminInfo.updateName==true">{{$L.t('lottery.zh46')}}</button>
            </div>
            <div class="submitSeach" style="flex: 1;text-align: right;">
              <span>{{$L.t('lottery.zh37')}}:</span>
              <select v-model="loadTimer"  @change="reloadTime(loadTimer)">
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
      </tbody>
    </table>
    <table class="table clearfloat">
      <tbody>
      <tr class="head">
        <td>{{$L.t('table.danhao')}}</td>
        <td>{{$L.t('table.username')}}</td>
        <td>{{$L.t('table.issue')}}</td>
        <td>{{$L.t('table.caizhong')}}</td>
        <th>{{$L.t('table.playType')}}</th>
        <th>{{$L.t('table.beishu')}}</th>
        <th>{{$L.t('table.zhuS')}}</th>
        <th>{{$L.t('table.betNumber')}}</th>
        <th>{{$L.t('table.betMoney')}}
          <img v-if="betObj.orderByBetMoney =='1'"     @click="changeOderBy2('2')" src="../../assets/panel_tools_02.jpg"/>
          <img  v-if="betObj.orderByBetMoney =='2'"    @click="changeOderBy2('1')" src="../../assets/panel_tools_03.png"/>
          <img  v-if="betObj.orderByBetMoney =='0'"    @click="changeOderBy2('1')" src="../../assets/panel_tools_02.png"/>
        </th>
        <th>{{$L.t('financial.zh77')}}
          <img  v-if="betObj.orderBy =='1'"    @click="changeOderBy('2')" src="../../assets/panel_tools_02.jpg"/>
          <img  v-if="betObj.orderBy =='2'"    @click="changeOderBy('1')" src="../../assets/panel_tools_03.png"/>
          <img  v-if="betObj.orderBy =='0'"    @click="changeOderBy('1')" src="../../assets/panel_tools_02.png"/>
        </th>
        <th>{{$L.t('agent.agent_8.zh25')}}</th>
        <th>{{$L.t('table.benTime')}}</th>
        <th>{{$L.t('table.handle')}}</th>
      </tr>
      <tr class="odd" v-for="yh in lotteryStore.betOrderList.data.data">
        <td style="color: #1E9FFF;">{{yh.wjorderId}} <button @click="lookOrderFn(yh.id)">{{$L.t('check')}}</button></td>
        <td >
          {{yh.username}}
        </td>
        <td>{{yh.actionNo}}</td>
        <td>{{yh.typeName}}</td>
        <td>{{yh.playedName}}</td>
        <td>{{yh.bonusProp}}</td>
        <td>{{yh.actionNum}}</td>
        <td>{{yh.actionData}}</td>
        <td>{{yh.amount}}</td>
        <td>{{yh.winAmount}}</td>
        <td>{{yh.fanDianAmount}}</td>
        <td>{{yh.actionTime}}</td>
        <td><button v-if="yh.isEdit*1 == 1" @click="updataFn(yh.id)">{{$L.t('lottery.zh43')}}</button></td>
      </tr>
      <tr v-if="getYhPageData.sum > 0" >
        <td colspan="13">
          <span class="color-red" style="padding-right: 15px;">{{$L.t('agent.agent_8.zh52')}}: {{lotteryStore.betOrderList.data.allBets}}</span>
          <span class="color-red" style="padding-right: 15px;">{{$L.t('lottery.zh47')}}: {{lotteryStore.betOrderList.data.allBonus}}</span>
          <span class="color-red">{{$L.t('agent.agent_8.zh87')}}: {{lotteryStore.betOrderList.data.allProfit}}</span>
        </td>
      </tr>
      <tr v-if="getYhPageData.sum > 0">
        <td colspan="15">
          <page-limit :pageData="getYhPageData" :inputShow="'1'" @handlePage="yhPageFn"></page-limit>
        </td>
      </tr>
      <tr v-if="!lotteryStore.betOrderList.data.data">
        <td colspan="15" class="nodata">{{$L.t('noData')}}</td>
      </tr>

      </tbody>
    </table>
    <el-dialog
      :title="$L.t('lottery.zh48')"
      :visible.sync="orderState"
      width="820px">
      <div class="user_detail" v-if="orderState">
        <table class="table">
          <tbody>
          <tr>
            <td style="text-align: center">{{$L.t('table.betNumber')}}：</td>
            <td colspan="3">{{lotteryStore.lotteryOrderInfoObj.data.actionData}}</td>
          </tr>
          <tr>
            <td style="text-align: center">{{$L.t('table.danhao')}}：</td>
            <td>{{lotteryStore.lotteryOrderInfoObj.data.id}}</td>
            <td style="text-align: center">{{$L.t('table.betSum')}}：</td>
            <td>{{lotteryStore.lotteryOrderInfoObj.data.actionNum}}</td>
          </tr>
          <tr>
            <td style="text-align: center">{{$L.t('table.sendPerson')}}：</td>
            <td>{{lotteryStore.lotteryOrderInfoObj.data.username}}</td>
            <td style="text-align: center">{{$L.t('table.winzs')}}：</td>
            <td>{{lotteryStore.lotteryOrderInfoObj.data.zjCount}}</td>
          </tr>
          <tr>
            <td style="text-align: center">{{$L.t('table.caizhong')}}：</td>
            <td>{{lotteryStore.lotteryOrderInfoObj.data.typeName}}</td>
            <td style="text-align: center">{{$L.t('table.peilvfandian')}}：</td>
            <td>{{lotteryStore.lotteryOrderInfoObj.data.bonusProp}}-{{lotteryStore.lotteryOrderInfoObj.data.fanDian}}%</td>
          </tr>
          <tr>
            <td style="text-align: center">{{$L.t('table.issue')}}： </td>
            <td>{{lotteryStore.lotteryOrderInfoObj.data.actionNo}}</td>
            <td style="text-align: center">{{$L.t('table.playType')}}： </td>
            <td>{{lotteryStore.lotteryOrderInfoObj.data.play}}</td>
          </tr>

          <tr>
            <td style="text-align: center">{{$L.t('table.lotteryNum')}}：</td>
            <td>{{lotteryStore.lotteryOrderInfoObj.data.openCode}}</td>
            <td style="text-align: center">{{$L.t('table.benTime')}}：</td>
            <td>{{lotteryStore.lotteryOrderInfoObj.data.betTime}}</td>
          </tr>
          <tr>
            <td style="text-align: center">{{$L.t('table.orderStatus')}}：</td>
            <td>{{lotteryStore.lotteryOrderInfoObj.data.status}}</td>
            <td style="text-align: center">{{$L.t('table.laiyuan')}}：</td>
            <td>{{lotteryStore.lotteryOrderInfoObj.data.fromWhere}}</td>
          </tr>
          <tr>
            <td style="text-align: center">{{$L.t('table.bet')}}：</td>
            <td>{{lotteryStore.lotteryOrderInfoObj.data.betAmount}}</td>
            <td style="text-align: center">{{$L.t('table.winner')}}：</td>
            <td>{{lotteryStore.lotteryOrderInfoObj.data.zjAmount}}</td>
          </tr>
          <tr>
            <td style="text-align: center">{{$L.t('table.lastFd')}}：</td>
            <td>{{lotteryStore.lotteryOrderInfoObj.data.sjfd}}{{$L.t('yuan')}}</td>
            <td style="text-align: center">{{$L.t('table.grYK')}}：</td>
            <td>{{lotteryStore.lotteryOrderInfoObj.data.profit}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </el-dialog>
    <el-dialog
      :title="$L.t('lottery.zh57')"
      :visible.sync="updataState"
      width="500px">
      <div v-if="updataState" class="form_container">
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh49')}}
            </div>
            <div class="formLi_content">
              <select name="" v-model="updataObj.playid"  @change="changePlayFn">
                <option :value="wf.id" v-for="wf in lotteryStore.lotteryPlayedFromgroupID.data">
                  {{wf.name}}
                </option>
              </select>
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('table.betNumber')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="updataObj.actionData" >
            </div>
          </li>
          <li>
            <button class="form_commit" @click="saveSettingFn()">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>
    <!--导出数据-->
    <el-dialog
            :title="$L.t('lottery.zh45')"
            class="confirmModel dataSend"
            :visible.sync="exportDataVisible"
            :modal-append-to-body="exportDataVisible"
            :append-to-body="exportDataVisible"
            :modal="exportDataVisible"
            width="450px">
      <div class="model-main" style="padding: 2px 10px;line-height: 1.5;font-size: 12px;">
        <p>① {{$L.t('lottery.zh50')}}</p>
        <p>② {{$L.t('lottery.zh51')}}</p>
        <p>③ {{$L.t('lottery.zh52')}}</p>
      </div>
      <div class="model-input">
        <span>{{$L.t('lottery.zh53')}}：</span>
        <input type="text" :placeholder="$L.t('lottery.zh54')" v-model="exportObj.vercode">
      </div>

      <div class="ser_list">
        <p>{{$L.t('lottery.zh55')}}: &nbsp
          <label @click="chooseAll($event,exportTypeList)">
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

    <!--下载弹窗-->
    <el-dialog
            :title="$L.t('lottery.zh57')"
            class="confirmModel dataSend"
            :visible.sync="selectFileVisible"
            :modal-append-to-body="selectFileVisible"
            :append-to-body="selectFileVisible"
            :modal="selectFileVisible"
            width="450px">
       <div class="model-main">
         {{$L.t('lottery.zh56')}}
        </div>
        <div class="ser_list">
          <p>{{$L.t('lottery.zh55')}}: &nbsp
            <label @click="chooseAll($event,selectExportTypeList)">
              <input id="q" type="checkbox" v-model="selectChooseAllData">
              {{$L.t('agent.agent_1.allSelect')}}
            </label>
          </p>
          <label class="label-choose" v-for="(item, index) in selectExportTypeList" :key="index" style="font-size: 12px;">
            <div>
              <input type="checkbox" :value="index" v-model="item.active">
              {{item.name}}
            </div>
          </label>&nbsp
        </div>

          <div class="model-footer-btn">
            <button @click="selectFileVisible = false">{{$L.t('cancel')}}</button>
            <button @click="downloadData()">{{$L.t('sure')}}</button>
          </div>
    </el-dialog>

  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  import {Message} from 'element-ui'
  export default {
    data () {
      return {
        days:'',
        startTime:'',
        endTime:'',
        getName:'',
        betObj:{
          fromTime:"",
          toTime:'',
          page:1,
          limit:'20',
          searchField:'username',
          searchVal:'',
          status:'',
          type:'',
          orderBy :"0",
          //DESC 降序 up升
          orderByBetMoney :"0"
        },
        orderState:false,
        updataState:false,
        updataObj:{
          betid:'',
          actionData:'',
          playid:'',
          alias:''
        },
        loadTimer:0,
        timer: null,
        selectFileVisible:false,
        selectExportTypeList:[],
        selectChooseAllData:true,
        exportDataVisible:false, // 导出数据弹窗
        exportObj:{
          vercode:'', // 安全盾
        },
        exportSuccess:0,

        // 导出条件
        chooseAllData:true,
        exportTypeList: [
          {id: 1, title: this.$L.t('table.danhao'),name:'wjorderId', active: true},
          {id: 2, title: this.$L.t('table.username'), name:'username',active: true},
          {id: 3, title: this.$L.t('table.issue'), name:'actionNo', active: true},
          {id: 4, title: this.$L.t('table.caizhong'),  name:'typeName',active: true},
          {id: 5, title: this.$L.t('table.playType'),  name:'playedName',active: true},
          {id: 6, title: this.$L.t('table.beishu'),  name:'bonusProp',active: true},
          {id: 7, title: this.$L.t('table.zhuS'), name:'actionNum', active: true},
          {id: 8, title: this.$L.t('table.betNumber'), name:'actionData', active: true},
          {id: 9, title: this.$L.t('table.betMoney'), name:'amount', active: true},
          {id: 10, title: this.$L.t('financial.zh77'), name:'winAmount', active: true},
          {id: 11, title: this.$L.t('agent.agent_8.zh25'), name:'fanDianAmount', active: true},
          {id: 12, title: this.$L.t('table.benTime'), name:'actionTime', active: true},
        ],
        chooseData:[],
        showLogData:{
          fromTime:'',
          toTime:''
        },
      }
    },
    created (){
      this.getLotteryList()
      this.getOrderList(this.betObj)
    },
    mounted(){

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
      },
      selectExportTypeList: {
        handler(){
          for(let k in this.selectExportTypeList){
            if(this.selectExportTypeList[k].active == false){
              this.selectChooseAllData = false;
              break
            }else {
              this.selectChooseAllData = true;
            }
          }
        },
        deep: true
      }
    },
    beforeDestroy () {
      clearTimeout(this.timer)
    },
    methods: {
      ...mapMutations([

      ]),

      ...mapActions([
        "getOrderList",
        "getLotteryList",
        "getLotteryOrderInfo",
        "updateBetInfo",
        "getLotteryPlayedFromgroupID",
        "getBetExcel",
        "downloadExcel"
      ]),
      clearSearchYhFn(){
        this.betObj.orderBy='1';
        this.betObj.searchField='username';
        this.betObj.searchVal='';
        this.betObj.status='';
        this.betObj.betIp='';
        this.betObj.type='';
        this.betObj.end_money='';
        this.betObj.start_money='';
      },
      changeOderBy(str){
        this.betObj.orderBy=str;
        this.betObj.orderByBetMoney=0;
        this.searchYhFn();
      },
      changeOderBy2(str){
        this.betObj.page = 1;
        this.betObj.orderByBetMoney=str;
        this.betObj.orderBy=0;
        this.searchYhFn();
      },
      sendData(){
        this.exportDataVisible = true
        this.exportObj.vercode = ''
        for(let k in this.exportTypeList){
          this.exportTypeList[k].active = true
        }
      },
      downloads() {
        this.downloadExcel()
                .then(res=>{
                  if(!res.data && res.code == 0) {
                    this.$message(this.$L.t('lottery.zh59'))
                    return
                  }
                  if(res.code ==2) {
                    this.$message(this.$L.t('lottery.zh60'))
                    return
                  }
                  let arr = [];
                  res.data.forEach((v,i)=>{
                    arr[i] = {
                       name:v.split('/')[v.split('/').length-1],
                       value:v,
                       active:true
                    }
                  })
                  this.selectExportTypeList = arr;
                  this.selectFileVisible =true;
                })
      },
      // 全选
      chooseAll(e,list){
        // console.log(e);
        if(e.target.checked){
          for(let key in list){
            list[key].active = true
            this.chooseData.push(list[key].active);
          }
        }else{
          for(let key in list){
            list[key].active = false
            this.chooseData = []
          }
        }
      },
      //下载
      downloadData() {
        this.initDownLoad(); //初始化

        let list = this.selectExportTypeList.filter(res=>res.active)

        list.forEach((item,index)=>{
          let a = document.createElement('a');
          a.href = window.host+'/'+item.value;
          a.target="_blank"
          a.className = 'checked';
          document.body.appendChild(a);
        })

        let aDom = document.querySelectorAll('a.checked');
        if(aDom.length == 0) {
          this.$message(this.$L.t('lottery.zh61'))
          return
        }
        aDom.forEach((v,i)=>{
          v.click();
        })
        this.selectFileVisible = false;
      },
      // 初始化
      initDownLoad() {
        let aDom = document.querySelectorAll('a.checked');
        aDom.forEach((v,i)=>{v.remove();})

        for(let k in this.selectExportTypeList){
          if(this.selectExportTypeList[k].active == false){
            this.selectChooseAllData = false;
            break
          }else {
            this.selectChooseAllData = true;
          }
        }
      },
      // 导出数据
      exportData(){
        this.betObj.fromTime = this.startTime
        this.betObj.toTime = this.endTime

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
        let exportDataObj = {};
        exportDataObj.data = this.betObj;
        exportDataObj.vercode = this.exportObj.vercode
        exportDataObj.rows = obj;
        this.getBetExcel(exportDataObj).then(res=>{
          if(res.code == 0){
            this.$message.success(this.$L.t('lottery.zh62'))
            this.exportDataVisible = false

            // this.exportObj.vercode = ''
            // this.exportDataVisible = false
            // let blob = new Blob([res.data.table], {
            //   // type: 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            //   type:'application/vnd.ms-excel'
            // })
            // if (window.navigator.msSaveOrOpenBlob) {
            //   navigator.msSaveBlob(blob);
            // } else {
            //   let elink = document.createElement('a');
            //   elink.download = res.data.filename+'.xls';
            //   elink.style.display = 'none';
            //   elink.href = URL.createObjectURL(blob);
            //   document.body.appendChild(elink);
            //   elink.click();
            //   document.body.removeChild(elink);
            // }
          }else{
            this.$message(res.message)
          }
        })
        this.exportSuccess = 1
        setTimeout(()=>{
          this.exportSuccess = 0
        },3000)
      },
      // 更新信息后 得到输入的参数
      // getHeadParmas () {
      //   let sendData = this.copyObj(this.betObj)
      //   // 条件
      //   return sendData
      // },
      // // 深拷贝对象
      // copyObj (obj) {
      //   let data = {}
      //   for (let k in obj) {
      //     if (typeof(obj[k]) == 'object') {
      //       data[k] = {...obj[k]}
      //     } else {
      //       data[k] = obj[k]
      //     }
      //   }
      //   console.log(data);
      //   return data
      // },

      changePlayFn(){
        let me = this
        this.lotteryStore.lotteryPlayedFromgroupID.data.forEach(function (v,i,arr) {
          if(v.id*1 == me.updataObj.playid*1){
            me.updataObj.actionData = v.name
          }
        })
      },
      reloadTime (value) {
        clearTimeout(this.timer)
        if (value > 0) {
          let num = value * 1000
          this.reloadAction(num)
        }
      },
      reloadAction (time) {
        this.betObj.page = 1
        this.timer = setTimeout(() => {
            // 调用方法
            this.getOrderList(this.betObj)
        // 回调
        this.reloadAction(time)
      }, time)
      },
      updataFn(id){
        this.getLotteryOrderInfo({id:id}).then((res)=>{
          this.updataObj.betid = res.data.id
          this.updataObj.actionData = res.data.actionData
          this.updataObj.alias = res.data.alias
          this.updataObj.playid = res.data.playedId
          this.getLotteryPlayedFromgroupID({groupID:res.data.groupId})
          this.updataState =true
        })

      },
      saveSettingFn(){
        if(!this.updataObj.actionData){
          Message({
            message:this.$message(this.$L.t('lottery.zh63')),
            type:"warning",
            showClose:true
          })
          return;
        }
        if(!this.updataObj.playid){
          Message({
            message:this.$message(this.$L.t('lottery.zh64')),
            type:"warning",
            showClose:true
          })
          return;
        }
        this.updateBetInfo(this.updataObj).then(()=>{
          this.updataState = false
          this.getOrderList(this.betObj)
        })
      },
      lookOrderFn(id){
        this.getLotteryOrderInfo({id:id}).then(()=>{
          this.orderState =true
        })
      },
      searchYhFn(){
        this.betObj.page = 1
        // this.betObj.limit = '20'
        this.betObj.fromTime = this.startTime
        this.betObj.toTime = this.endTime
        this.getOrderList(this.betObj)
      },
      yhPageFn(data){
        this.betObj.fromTime = this.startTime
        this.betObj.toTime = this.endTime
        this.betObj.page = data.page
        this.betObj.limit = data.limit
        this.getOrderList(this.betObj)
      },
      selectState(num){
        this.betObj.status = num
        this.betObj.fromTime = this.startTime
        this.betObj.toTime = this.endTime
        // this.betObj.page = 1
        // this.betObj.limit = '20'
        this.getOrderList(this.betObj)
      },
      selectDay(day){
        this.days = day
      },
      getTimer(start,end){
        this.startTime = start
        this.endTime = end
      },
      getLocalTime(nS) {
        let sj = nS*1000
        return new Date(parseInt(sj)).toLocaleString().replace(/:\d{1,2}$/,' ');
      },
      scState(val){
        let txt = '';
        switch (val*1){
          case 1 : return txt = '在线充值';break;
          case 2 : return txt = '转账充值';break;
          case 3 : return txt = '系统赠送';break;
          case 4 : return txt = '充值卷兑换';break;
          case 5 : return txt = '领取红包';break;
          case 6 : return txt = '用户打赏';break;
          case 7 : return txt = '后台管理员充值/扣款';break;
        }
      },
      loginFilter(val){
        let txt = '';
        switch (val*1){
          case 1 : return txt = '电脑';break;
          case 2 : return txt = '手机';break;
          case 3 : return txt = '苹果';break;
          case 4 : return txt = '安卓';break;
        }
      }
    },
    components:{

    },
    computed: {
      ...mapState([
        "lotteryStore",
        "indexStore"
      ]),
      getYhPageData(){
        return {
          page: this.betObj.page,
          limit: this.betObj.limit,
          sum: this.lotteryStore.betOrderList.data.count || 0
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .timeShow {
    flex-wrap: wrap;
  }
  .timeShow input{
    width: 130px;
  }
  .timeShow input.filter{
    width: 60px;
  }
  .timeShow div{
    margin-bottom: 5px;
  }
  .clearfloat .touzhu{
    display: inline-block;
    padding: 0 10px;
    border: 1px solid #666;
    border-radius: 5px;
    cursor: pointer;
  }
  .clearfloat .touzhu.on{
    color:red;
  }
  .user_detail {
    height: 400px;
    overflow: auto;
    padding: 10px;
    td{
      padding: 8px;
    }
  }
.head th{
  text-align: left;
}
  .form_container{
  ul > li {
  &>div.formLi_content{
      flex: 1;
      margin-right: 50px;
  textarea{
    width: 100%;
    min-height: 60px;
    padding-left: 10px;
  }
  }
  }
  }


  *{
    box-sizing: border-box;
  }
  .label-choose{
    width: 130px;
    float: left;
    div{
      width: 120px;
    }
  }

</style>
