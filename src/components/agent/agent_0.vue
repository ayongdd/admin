<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td >
          {{$L.t('agent.agent_0.dltitle')}}:
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
            <div class="submitSeach">{{$L.t('agent.agent_0.dluser')}}:
              <input type="text" :placeholder="$L.t('agent.agent_0.dluser')" v-model="agentList.username">
            </div>
            <timer class="submitSeach" @sendTime="getTimer" :day="days"></timer>
            <div class="submitSeach">
              <input type="submit" :value="$L.t('search')" @click="searchFn()">
              <!--请注意： 此列表只统计今日以前的数据，不包括今日！-->
            </div>
            <div class="submitSeach" v-if="upperStory">
              <input type="submit" :value="$L.t('go-1')" @click="upPerstory(1)">
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
      <tr class="head">
        <td>{{$L.t('table.username')}}</td>
        <th>{{$L.t('table.name')}}</th>
        <th>{{$L.t('table.registerUser')}}</th>
        <th>{{$L.t('table.scUser')}}</th>
        <th>{{$L.t('table.lotteryBet')}}</th>
        <th>{{$L.t('table.winLottery')}}</th>
        <th>{{$L.t('table.otherBet')}}</th>
        <th>{{$L.t('table.otherProfit')}}</th>
        <th>{{$L.t('table.deposit')}}</th>
        <th>{{$L.t('table.withdraw')}}</th>
        <th>{{$L.t('table.discounts')}}</th>
        <th>{{$L.t('table.tdProfit')}}</th>
        <th>{{$L.t('table.betUser')}}</th>
        <th>{{$L.t('table.yjbl')}}</th>
        <th>{{$L.t('table.commission')}}</th>
        <th>{{$L.t('table.xjfd')}}</th>
        <th>{{$L.t('table.backwater')}}</th>
        <th>{{$L.t('table.registerTime')}}</th>
        <th>{{$L.t('table.handle')}}</th>
      </tr>
      <tr class="odd" v-for="(item,index) in agentStore.agentList.data.data" >
        <td>{{item.username}}</td>
        <td>{{item.name}}</td>
        <td style="color:red;">{{item.registernum}}{{$L.t('ren')}}<br>
          <button class="popBtn" @click="modelShow(item, 8)">{{$L.t('check')}}</button>
        </td>
        <td style="color:red;">{{item.scCount}}{{$L.t('ren')}}<br>
          <button class="popBtn" @click="getScUserFn(item.uid)">{{$L.t('check')}}</button>
        </td>
        <td>{{item.betAmount}}<br>
          <button class="popBtn" @click="lotteryDataShow(item,1)">{{$L.t('check')}}</button>
        </td>
        <td style="color:red;">
          {{item.zjAmount || 0}}<br>
          <button class="popBtn" @click="lotteryDataShow(item,0)">{{$L.t('check')}}</button>
        </td>
        <!-- 其他投注金额 -->
        <td>{{item.chessAmount}}<br>
          <button class="popBtn"  @click="otherdataShow(item, 1)">{{$L.t('check')}}</button>
        </td>
        <!-- 其他盈亏 -->
        <td>{{item.chessYk}}<br>
          <button class="popBtn" @click="otherdataShow(item, 2)">{{$L.t('check')}}</button>
        </td>
        <td style="color:red;">{{item.rechargeAmount}}<br>
          <button class="popBtn" @click="modelShow(item, 9)">{{$L.t('check')}}</button>
        </td>
        <td style="color:red;">{{item.cashAmount}}<br>
          <button class="popBtn" @click="modelShow(item, 10)">{{$L.t('check')}}</button>
        </td>
        <td style="color:red;">
          {{item.discount}}<br>
          <button class="popBtn" @click="modelShow(item,13)">{{$L.t('check')}}</button>
        </td>
        <td style="color:red;">
          {{item.ykAmount}}
        </td>
        <td style="color:red;">
          <span  v-if="agentStore.todayUserBetAmountList.data.length>0 && agentStore.todayUserBetAmountList.data[index]">
            {{agentStore.todayUserBetAmountList.data[index].betnumber}}
          </span>
          <span v-else>
            0
          </span>
          <br>
          <button class="popBtn"  @click="modelShow(item, 11)">{{$L.t('check')}}</button>
        </td>
        <td>{{item.fanDian}}%</td>
        <td style="color:red;">
          <!-- <span v-if="agentStore.todayUserBetAmountList.data.length > 0 && agentStore.todayUserBetAmountList.data[index]">
            {{agentStore.todayUserBetAmountList.data[index].fanDianAmount}}
          </span>
          <span v-else>0</span>
          <br> -->
          <button class="popBtn"  @click="modelShow(item, 12)">{{$L.t('check')}}</button>
        </td>
        <td>{{item.lower_max}}%</td>

        <td style="color:red;">
          {{item.fanshuiCount}}<br>
          <button class="popBtn" @click="modelShow(item,14)">{{$L.t('check')}}</button>
        </td>

        <td>{{getTimes(item.regTime)}}</td>
        <td>
          <button v-if="item.parentId*1 != 0" class="popBtn" @click="searchUpLevel(item.parentId)">{{$L.t('agent.agent_0.sj')}}</button>
          <button class="popBtn" @click="searchDownLevel(item.uid)" v-if="item.lower_parent*1 != 0">{{$L.t('agent.agent_0.xj')}}</button>
          <button class="popBtn" @click="lookDownLink(item.uid)">{{$L.t('agent.agent_0.herf')}}</button>
          <button class="popBtn" @click="setUserDetail(item.username)">{{$L.t('agent.agent_0.checked')}}</button>
        </td>
      </tr>
      <tr v-if="getAgentPageData.sum > 0">
        <td colspan="19">
          <page-limit :pageData="getAgentPageData" :inputShow="'1'" @handlePage="handleAgentPage"></page-limit>
        </td>
      </tr>
      <tr v-if="!agentStore.agentList.data.data">
        <td colspan="19" class="nodata">{{$L.t('noData')}}</td>
      </tr>
      </tbody>
    </table>
    <el-dialog
      :title="$L.t('agent.agent_0.usersc')"
      :visible.sync="agentScyhState"
      width="1200px">
      <div class="agent_modal" v-if="agentScyhState">
        <table class="table">
          <tbody>
          <tr class="head">
            <td>{{$L.t('table.username')}}</td>
            <td>{{$L.t('table.name')}}</td>
            <td>{{$L.t('table.superior')}}</td>
            <td>{{$L.t('table.danhao')}}</td>
            <td>{{$L.t('table.rechargeMoney')}}</td>
            <td>{{$L.t('table.reality')}}</td>
            <td>{{$L.t('table.rechargeType')}}</td>
            <td>{{$L.t('table.rechargeTime')}}</td>
            <td>{{$L.t('table.remark')}}</td>
          </tr>
          <tr v-for="y in agentStore.ScRechargesList.data.data">
            <td>{{y.username}}</td>
            <td>{{y.name || ''}}</td>
            <td>{{y.parentName}}</td>
            <td>{{y.rechargeId}}</td>
            <td>{{y.amount}}</td>
            <td>{{y.rechargeAmount}}</td>
            <td>{{scState(y.typeid)}}</td>
            <td>{{getTimes(y.actionTime)}}</td>
            <td>{{$L.t('agent.agent_0.shouc')}}</td>
          </tr>
          <tr v-if="getyhscPage.sum > 0">
            <td colspan="18">
              <page-limit :pageData="getyhscPage" :inputShow="'1'" @handlePage="yhscPageFn"></page-limit>
            </td>
          </tr>
          <tr v-if="!agentStore.ScRechargesList.data.data">
            <td colspan="18" class="nodata">
              {{$L.t('noData')}}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </el-dialog>
    <el-dialog
      :title="$L.t('agent.agent_0.dlherf')"
      :visible.sync="agentLinkState"
      width="80%">
      <div class="agent_modal" v-if="agentLinkState">
        <table class="table" >
          <tbody >
          <tr class="head">
            <td>ID</td>
            <td>{{$L.t('table.cprebates')}}(%)</td>
            <td>{{$L.t('table.qprebates')}}(%)</td>
            <td>{{$L.t('table.zrrebates')}}(%)</td>
            <td>{{$L.t('table.dzrebates')}}(%)</td>
            <td>{{$L.t('table.tyrebates')}}(%)</td>
            <td>{{$L.t('table.djrebates')}}(%)</td>
            <td>{{$L.t('table.invite')}}</td>
            <td>{{$L.t('table.inviteHref')}}</td>
            <td>{{$L.t('table.currentType')}}</td>
            <td>{{$L.t('table.handle')}}</td>
          </tr>
          <tr v-for="(lk,index) in agentStore.agentLinkList.data">
            <td>{{lk.lid}}</td>
            <td>{{lk.fanDian}}</td>
            <td>{{lk.ChessFd}}</td>
            <td>{{lk.PersonFd}}</td>
            <td>{{lk.ElectronicsFd}}</td>
            <td>{{lk.SportsFd}}</td>
            <td>{{lk.MatchFd}}</td>
            <td>{{lk.regCode}}</td>
            <td>{{lk.linkList}}</td>
            <td>
              {{lk.type*1 ? $L.t('agent.agent_0.dl') : $L.t('agent.agent_0.huiy')}} &nbsp;&nbsp;
            </td>
            <td>
              <button @click="setThisLink(lk,0)">{{$L.t('fixed')}}</button>
              <button @click="deleteLink(lk,1)">{{$L.t('delete')}}</button>
            </td>
          </tr>
          <tr v-if="!agentStore.agentLinkList.data">
            <td colspan="10" class="nodata">{{$L.t('noData')}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </el-dialog>
    <el-dialog
      :title="$L.t('agent.agent_0.fdsz')"
      :visible.sync="setLinkState"
      width="50%">
      <div class="set_agent_modal" v-if="setLinkState">
        <h4>
          {{$L.t('agent.agent_0.alert')}}
        </h4>
        <div>
          <span>{{$L.t('table.cprebates')}}:</span><input type="number" :placeholder="$L.t('agent.agent_0.plhcp')" v-model="settingLinkObj.fanDian">
        </div>
        <div>
          <span>{{$L.t('table.qprebates')}}:</span><input type="number" :placeholder="$L.t('agent.agent_0.plhqp')" v-model="settingLinkObj.ChessFd">
      </div>
        <div>
          <span>{{$L.t('table.zrrebates')}}:</span><input type="number" :placeholder="$L.t('agent.agent_0.plhzr')" v-model="settingLinkObj.PersonFd">
        </div>
        <div>
          <span>{{$L.t('table.dzrebates')}}:</span><input type="number" :placeholder="$L.t('agent.agent_0.plhdz')" v-model="settingLinkObj.ElectronicsFd">
        </div>
        <div>
          <span>{{$L.t('table.tyrebates')}}:</span><input type="number" :placeholder="$L.t('agent.agent_0.plhty')" v-model="settingLinkObj.SportsFd">
        </div>
        <div>
          <span>{{$L.t('table.djrebates')}}:</span><input type="number" :placeholder="$L.t('agent.agent_0.plhdj')" v-model="settingLinkObj.MatchFd">
        </div>
        <div>
          <span>{{$L.t('agent.agent_0.tjm')}}:</span><input type="text" :placeholder="$L.t('agent.agent_0.plhtjm')"   v-model="settingLinkObj.regCode"><br/>
        </div>

        <div>
          <span>{{$L.t('agent.agent_0.memberType')}}:</span>
          <select name="" id="" v-model="settingLinkObj.type">
            <option value="0">{{$L.t('agent.agent_0.huiy')}}</option>
            <option value="1">{{$L.t('agent.agent_0.dl')}}</option>
          </select>
        </div>
        <div>
          <button @click="saveSettingLink">{{$L.t('saveChange')}}</button>
        </div>
      </div>
    </el-dialog>

    <el-dialog
      :title="modelTitle"
      :visible.sync="modelVisible"
      width="1200px">
      <div class="modelList_container" v-if="modelVisible">
        <!-- 注册用户 -->
        <agent_7 v-if="modelIndex == 8" :paramsData="modelParmas"></agent_7>
        <!-- 存款 -->
        <agent_8 v-if="modelIndex == 9" :paramsData="modelParmas"></agent_8>
        <!-- 提现 -->
        <agent_9 v-if="modelIndex == 10" :paramsData="modelParmas"></agent_9>
        <!-- 投注用户 -->
        <agent_betUser v-if="modelIndex == 11" :paramsData="modelParmas"></agent_betUser>
        <!-- 佣金详情 -->
        <agent_brokerage v-if="modelIndex == 12" :paramsData="modelParmas"></agent_brokerage>
        <!-- 优惠总额 -->
        <agent_8 v-if="modelIndex == 13" :paramsData="modelParmas"></agent_8>
        <!-- 返水总额 -->
        <agent_14 v-if="modelIndex == 14" :paramsData="modelParmas"></agent_14>
      </div>
    </el-dialog>
    <!-- 彩票投注总额 -->
    <el-dialog
      :title="titleLottery"
      :visible.sync="modelLottery"
      width="1200px">
      <div class="modelList_container" v-if="modelLottery">
        <agent_lottery :paramsData="modelParmas"></agent_lottery>
      </div>
    </el-dialog>
    <!-- 其他投注总额 -->
    <el-dialog
      :title="$L.t('table.otherBet')"
      :visible.sync="modelOther"
      width="1200px">
      <div class="modelList_container" v-if="modelOther">
        <agent_betCount :paramsData="modelParmas"></agent_betCount>
      </div>
    </el-dialog>
    <!-- 资金流水 -->
    <el-dialog
      :title="$L.t('detail')"
      :visible.sync="showLogVisible"
      width="1250px">
      <fund-water v-if="showLogVisible" :typeData="logInfoData"></fund-water>
    </el-dialog>

    <!-- 提示弹窗 -->
    <comfirm-model
            v-if="confirmVisible"
            :content="$L.t('agent.agent_0.isDel')"
            @closeModel="confirmVisible = false"
            @commitModel="commitModel">
    </comfirm-model>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  import {getTimes} from '../../common/common'
  export default {
    data () {
      return {
        days:'',
        startTime:'',
        endTime:'',
        agentList:{
          page:1,
          limit:'20',
          fromTime:'',
          toTime:'',
          username:'',
          parentID:'',
          superior:'',
          type:'',
        },  //  代理列表
        getTimes,
        agentScyhState:false,   //  首充
        agentLinkState:false,  // 代理链接
        setLinkState:false,  //  修改代理返点链接
        modelOther:false,
        modelLottery:false,
        showLogVisible:false,
        confirmVisible:false,
        agentScObj:{
          page:1,
          limit:'20',
          fromTime:'',
          toTime:'',
          uid:'',
        }, // 首充列表
        settingLinkObj:{
          id:'',
          fanDian:'',
          ChessFd:'',
          PersonFd:'',
          ElectronicsFd:'',
          SportsFd:'',
          MatchFd:'',
          type:'',
          uid:'',
          regCode:"",
          enbale:"",
        },
        userVisible:false,
        checkName:'',

        // 新增系列-- 弹窗 参数
        modelTitle: '',
        modelVisible: false,
        modelIndex: '',
        // 传递给组件的参数
        modelParmas: {
          uid: '',
          name: '',
          startTime: '',
          endTime: ''
        },
        titleLottery:'',
        // 资金流水传参
        logInfoData: {
          type: '',
          name: '',
          fromTime: '',
          toTime: '',
        },
        oldDataList:[]
      }
    },
    created (){
      this.enterData(this.agentList)
    },
    mounted(){
      let self = this
      this.$nextTick(() => {
        document.addEventListener('keyup', function (e) {
          //此处填写你的业务逻辑即可
          if (e.keyCode == 27) {
            self.closeModel()
          }
        })
      })
    },
    methods: {
      ...mapMutations([
        'setMemberVisible',
        'setMemberName'
      ]),
      ...mapActions([
        "getAgentlist",
        "getScRecharges",
        "getLinkList",
        "updateLink"
      ]),
      commitModel() {
        this.updateLink(this.settingLinkObj).then((res) => {
          this.confirmVisible = false
          if (res.code == 0) {
            this.getLinkList({uid: this.settingLinkObj.uid}).then(() => {
              this.agentLinkState = true
            })
          }
          this.settingLinkObj.delete = ''
        })
      },
      // 返回上一层
      upPerstory(){
        this.enterData( this.oldDataList[this.oldDataList.length - 1])
        this.oldDataList.splice(this.oldDataList.length - 1,1)
        if(this.oldDataList.length == 0){
          this.agentList.type = ''
          this.agentList.parentID =''
          this.agentList.superior =''
          // this.agentList.page = 1
          // this.agentList.limit = '20'
          this.agentList.fromTime = this.startTime
          this.agentList.toTime = this.endTime
        }
      },
      enterData(data){
        this.getAgentlist(data)
      },
      otherdataShow(item,key){
        this.modelOther = true
        this.modelParmas = {
          uid: item.uid,
          name: item.username,
          startTime: this.startTime,
          endTime: this.endTime
        }
        if(key==1){
          this.modelParmas.title = this.$L.t('agent.agent_0.betAll')
        }
        if(key == 2){
          this.modelParmas.title = this.$L.t('agent.agent_0.betPont')

        }
      },
      // 彩票投注
      lotteryDataShow(item,i){
        this.modelParmas = {
          uid: item.uid,
          name: item.username,
          startTime: this.startTime,
          endTime: this.endTime
        }
        this.modelLottery = true
        if(i == 1){
          this.titleLottery = this.$L.t('agent.agent_0.lotteryBetList')
          this.modelParmas.status = 0
        }else{
          this.modelParmas.status = 1
          this.titleLottery = this.$L.t('agent.agent_0.lotteryList')
        }
      },
      // 首充弹窗
      getScUserFn(uid){
        this.agentScObj.uid = uid
        this.agentScObj.fromTime = this.startTime
        this.agentScObj.toTime = this.endTime
        this.getScRecharges(this.agentScObj).then(()=>{
          this.agentScyhState = true
        })
      },
      yhscPageFn(data){
        this.agentScObj.fromTime = this.startTime
        this.agentScObj.toTime = this.endTime
        this.agentScObj.page = data.page
        this.agentScObj.limit = data.limit
        this.getScRecharges(this.agentScObj)
      },

      timeTool(d){
        var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        return datetime;
      },

      handleAgentPage(data){
        this.agentList.fromTime = this.startTime
        this.agentList.toTime = this.endTime
        this.agentList.page = data.page
        this.agentList.limit = data.limit
        this.getAgentlist(this.agentList)
      },
      searchFn(item){
        this.oldDataList = []
        this.agentList.type = ''
        this.agentList.parentID =''
        this.agentList.superior =''
        // this.agentList.page = 1
        // this.agentList.limit = '20'
        this.agentList.fromTime = this.startTime
        this.agentList.toTime = this.endTime
        this.getAgentlist(this.agentList)
      },
      //  查看下级
      searchDownLevel(id){
        this.oldDataList.push(Object.assign({},this.agentList))
        this.agentList.type = 2
        this.agentList.parentID =id
        this.agentList.superior =''
        // this.agentList.page = 1
        // this.agentList.limit = '20'
        this.enterData(this.agentList)
      },
      //  查看上级
      searchUpLevel(id){
        this.oldDataList.push(Object.assign({},this.agentList))
        this.agentList.type = 1
        this.agentList.superior =id
        this.agentList.parentID =''
        // this.agentList.page = 1
        // this.agentList.limit = '20'
        this.getAgentlist(this.agentList)
      },
      //   查看链接
      lookDownLink(uid){
        this.settingLinkObj.uid = uid
        this.getLinkList({uid:uid}).then(()=>{
          this.agentLinkState = true
        })
      },
      // 查看资料
      setUserDetail(name){
        this.setMemberVisible(true)
        this.setMemberName(name)
      },
      deleteLink(item,lid){
        this.settingLinkObj.enbale = lid
        this.settingLinkObj.id = item.lid
        this.settingLinkObj.delete = 1
        this.confirmVisible = true
      },
      //   修改链接
      setThisLink(item,enbale){
        enbale=enbale || 0;
        this.settingLinkObj.id = item.lid
        this.settingLinkObj.fanDian = item.fanDian
        this.settingLinkObj.ChessFd = item.ChessFd
        this.settingLinkObj.PersonFd = item.PersonFd
        this.settingLinkObj.ElectronicsFd = item.ElectronicsFd
        this.settingLinkObj.SportsFd = item.SportsFd
        this.settingLinkObj.MatchFd = item.MatchFd
        this.settingLinkObj.type = item.type
        this.settingLinkObj.regCode = item.regCode
        this.settingLinkObj.enbale = enbale
        this.setLinkState = true
      },
      //   保存
      saveSettingLink(){
        this.updateLink(this.settingLinkObj).then((res)=>{
          if(res.code == 0){
            this.setLinkState = false
          }

        })
      },
      selectDay(day){
        this.days = day
      },
      getTimer(start,end){
        this.startTime = start
        this.endTime = end
      },
      // 弹窗公用方法 显示key 值的页面
      modelShow (item, key) {
        this.modelVisible = true
        this.modelIndex = key
        switch (key) {
          case 8:
            this.modelTitle = this.$L.t('table.registerUser')
            break
          case 9:
            this.modelTitle = this.$L.t('table.deposit')
            break
          case 10:
            this.modelTitle = this.$L.t('table.withdraw')
            break
          case 11:
            this.modelTitle = this.$L.t('table.betUser')
            break
          case 12:
            this.modelTitle = this.$L.t('agent.agent_0.yjin')
            break
          case 14:
            this.modelTitle =  this.$L.t('table.discounts')
            break
          case 9:
            this.modelTitle = this.$L.t('table.backwater')
          break
        }
        this.modelParmas = {
          uid: item.uid,
          name: item.username,
          startTime: this.startTime,
          endTime: this.endTime
        }
        // 在线访问添加 from参数
        if (key == '14x') {
          this.modelParmas.from = 1
        }
        if(key == 13){
          this.modelParmas.type = 3
          this.modelParmas.typeShow = 1
        }
      },
      // 关闭弹窗事件
      closeModel () {
        this.modelVisible = false
        this.modelIndex = ''
      },
      laiyuan(val){
        let txt = '';
        switch (val*1){
          case 1 : return txt = '推广注册';break;
          case 2 : return txt = '后台注册';break;
          case 3 : return txt = '自我注册';break;
        }
      },
      getLocalTime(nS) {
        let sj = nS*1000
        return new Date(parseInt(sj)).toLocaleString().replace(/:\d{1,2}$/,' ');
      },
      scState(val){
        let txt = '';
        switch (val*1){
          case 1 : return txt =this.$L.t('agent.agent_0.zxcz');break;
          case 2 : return txt = this.$L.t('agent.agent_0.zzcc');break;
          case 3 : return txt = this.$L.t('agent.agent_0.xtzs');break;
          case 4 : return txt = this.$L.t('agent.agent_0.czdh');break;
          case 5 : return txt = this.$L.t('agent.agent_0.gethb');break;
          case 6 : return txt = this.$L.t('agent.agent_0.yhds');break;
          case 7 : return txt = this.$L.t('agent.agent_0.czkk');break;
        }
      },
    },
    components:{

    },
    computed: {
      ...mapState([
        "agentStore",
      ]),
      getAgentPageData () {
        return {
          page: this.agentList.page,
          limit: this.agentList.limit,
          sum: this.agentStore.agentList.data.count || 0
        }
      },
      getyhscPage(){
        return {
          page: this.agentScObj.page,
          limit: this.agentScObj.limit,
          sum: this.agentStore.ScRechargesList.data.count || 0
        }
      },
      upperStory(){
        return this.oldDataList.length>0?true:false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .hiddenContent{
    overflow: hidden;
  }
  .agent_modal {
    height: 600px;
    overflow: auto;
    padding: 10px;
  }
  .set_agent_modal {
    padding: 10px;
    height: 600px;
  }
  .set_agent_modal >div {
    height: 50px;
    line-height: 1.5;
    font-size: 15px;
    margin-top: 10px;
  }
  .set_agent_modal >div input,select {
    height: 28px;
  }
  .set_agent_modal >div span {
    display: inline-block;
    width: 136px;
  }
  .set_agent_modal >div button {
    margin-left: 80px;
  }
  .commonModel_container{
    margin-top: 5px;
  }

  .modelList_container{
    position: relative;
    height: 640px;
    z-index: 999;
  }
</style>
