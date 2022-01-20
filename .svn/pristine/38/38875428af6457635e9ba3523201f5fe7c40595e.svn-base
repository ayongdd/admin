<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td colspan="1">
          <p>{{$L.t('lottery.zh65')}}</p>
        </td>
        <td colspan="15">
          <div class="lottery-head">

            <span>{{$L.t('table.type')}}</span>
            <select v-model="lotteryType">
              <option value="0">{{$L.t('lottery.zh3')}}</option>
              <option value="1">{{$L.t('lottery.zh4')}}</option>
              <option value="2">{{$L.t('lottery.zh5')}}</option>
            </select>

            <label id="isAll">
              <input type="checkbox" v-model="isAll"  name="isAll">
              <span>{{$L.t('agent.agent_8.zh49')}}</span>
            </label>
            <!--<button class="search-all-btn " :class="{active:lotteryClassID == -1}" @click="getAllList">全部</button>-->
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="1">
          {{$L.t('annoucement.xttz_5.zh2')}}
        </td>
        <td colspan="15">
          <div class="lottery-nav">
            <button
              :class="{'active': lotteryClassID == index}"
              v-for="(item,index) in lotteryStore.lotteryClassList.data"
              @click="lotTypeChange(item,index)">
              {{item.name}}
            </button>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="1">
          {{$L.t('table.caizhong')}}
        </td>
        <td colspan="15">
          <div class="lottery-nav">
            <button
              :class="{'active': lotteryId == index}"
              v-for="(item,index) in lotteryStore.lotteryTypeFromClassID.data"
              @click="lotteryChange(item,index)"
            >
              {{item.title}}
            </button>
          </div>
          <div v-if="lotteryStore.lotteryTypeFromClassID.code != 0">
            {{$L.t('noData')}}
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="1">
          {{$L.t('lottery.zh66')}}
        </td>
        <td colspan="15">
          <div class="timeShow">
            <timer class="submitSeach" @sendTime="getTimer" :day="days"  :paramTime="lottery" v-show="FloorState == 1"></timer>
            <div class="submitSeach" v-if="FloorState == 2">
              <span>{{$L.t('lottery.zh67')}}</span>
              <select name="" v-model="twoFloorObj.sortBy">
                <option :value="i.value" v-for="i in twoSortBySelect">{{i.name}}</option>
              </select>
            </div>
            <div>{{$L.t('table.username')}}
              <input style="height:22px" type="text" :placeholder="$L.t('table.username')" v-model="lottery.username">
            </div>
            <div>{{$L.t('table.issue')}}
              <input style="height:22px" type="number" :placeholder="$L.t('table.issue')" v-model="lottery.actionNo">
            </div>

            <div class="submitSeach" >
              <input type="submit" :value="$L.t('agent.agent_2.checked')" @click="searchFn"  v-if="FloorState == 1"  style="width: 60px;">
              <input type="submit" :value="$L.t('agent.agent_2.checked')" @click="twoFloorFn"  v-if="FloorState == 2" style="width: 80px;">
              <input type="submit" :value="$L.t('agent.agent_2.checked')" @click="threeFloorFn"  v-if="FloorState == 3">
              <input type="submit" :value="$L.t('agent.agent_2.checked')" @click="fourFloorFn"  v-if="FloorState == 4">
            </div>
            <!--<div class="submitSeach" >-->
              <!--<input type="submit" value="查找" @click="searchFn"  v-if="FloorState == 1">-->
              <!--<input type="submit" value="查找" @click="twoFloorFn"  v-if="FloorState == 2">-->
            <!--</div>-->
            <div class="submitSeach" v-if="FloorState == 4">
              <select name="" v-model="FourFloorObj.playedId" @change="playChange">
                <option value="">{{$L.t('lottery.zh68')}}</option>
                <option :value="p.id" v-for="p in lotteryStore.lotteryPlayedFromgroupID.data">{{p.name}}</option>
              </select>
            </div>
           <div style="flex:1;text-align: right" v-if="FloorState != 1">
             <button @click="goBackFn">{{$L.t('lottery.zh69')}}</button>
           </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <table class="table" v-if="FloorState == 1">
      <tbody>
        <tr class="head">
          <td>{{$L.t('lottery.zh75')}}</td>
          <td>{{$L.t('lottery.zh70')}}</td>
          <td>{{$L.t('lottery.zh71')}}</td>
          <td>{{$L.t('lottery.zh72')}}</td>
          <td>{{$L.t('lottery.zh73')}}</td>
          <th>{{$L.t('lottery.zh74')}}</th>
          <th>{{$L.t('table.handle')}}</th>
        </tr>
        <tr class="odd" v-if="lotteryStore.lotteryProfitAnalysis.data.played !== undefined && lotteryStore.lotteryTypeFromClassID.code == 0">
          <td>{{lotteryStore.lotteryProfitAnalysis.data.memberCount || '0'}}</td>
          <td>
            {{lotteryStore.lotteryProfitAnalysis.data.actionNum || '0'}}
          </td>
          <td>{{lotteryStore.lotteryProfitAnalysis.data.tzamount || '0'}}</td>
          <td>{{lotteryStore.lotteryProfitAnalysis.data.zjamount || '0'}}</td>
          <td>{{lotteryStore.lotteryProfitAnalysis.data.fanDianAmount || '0'}}</td>
          <td>{{lotteryStore.lotteryProfitAnalysis.data.yingkui || '0'}}</td>
          <td style="color:red;cursor: pointer;" @click="goTwoFloor">{{$L.t('agent.agent_8.zh57')}}</td>
        </tr>
        <tr v-if="lotteryStore.lotteryTypeFromClassID.code != 0">
          <td colspan="15" class="nodata">
            {{$L.t('noData')}}
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table" v-if="FloorState == 2">
      <tbody>
      <tr class="head">
        <td>{{$L.t('table.username')}}</td>
        <td>{{$L.t('table.betSum')}}</td>
        <td>{{$L.t('table.betMoney')}}</td>
        <td>{{$L.t('table.winMoney')}}</td>
        <td>{{$L.t('lottery.zh76')}}</td>
        <th>{{$L.t('financial.zh77')}}</th>
        <th>{{$L.t('table.handle')}}</th>
      </tr>
      <tr class="odd" v-for="t in lotteryStore.lotteryProfitAnalysisDetailList.data.data">
        <td>{{t.username}}</td>
        <td>
          {{t.betCount}}
        </td>
        <td>{{t.betAmount}}</td>
        <td>{{t.zjAmount}}</td>
        <td>{{t.fanDianAmount}}</td>
        <td>{{t.yingkuiAmount}}</td>
        <td style="color:red;cursor: pointer;" @click="goThreeFn(t)">{{$L.t('agent.agent_8.zh57')}}</td>
      </tr>
      <tr v-if="getTwoFloorPage.sum > 0">
        <td colspan="9">
          <page-limit :pageData="getTwoFloorPage" :inputShow="'1'" @handlePage="TwoFloorPageFn"></page-limit>
        </td>
      </tr>
      <tr v-if="!lotteryStore.lotteryProfitAnalysisDetailList.data.data">
        <td colspan="9" class="nodata">
          {{$L.t('noData')}}
        </td>
      </tr>
      </tbody>
    </table>
    <table class="table" v-if="FloorState == 3">
      <tbody>
      <tr class="head">
        <td>{{$L.t('table.username')}}</td>
        <td>{{$L.t('table.playType')}}</td>
        <td>{{$L.t('table.betSum')}}</td>
        <td>{{$L.t('table.betMoney')}}</td>
        <td>{{$L.t('table.winMoney')}}</td>
        <th>{{$L.t('lottery.zh76')}}</th>
        <th>{{$L.t('financial.zh77')}}</th>
        <th>{{$L.t('table.handle')}}</th>
      </tr>
      <tr class="odd" v-for="th in lotteryStore.lotteryProfitAnalysisDetailFromUidList.data">
        <td>{{th.username}}</td>
        <td>
          {{th.groupName}}
        </td>
        <td>{{th.betCount}}</td>
        <td>{{th.betAmount}}</td>
        <td>{{th.zjAmount}}</td>
        <td>{{th.fanDianAmount}}</td>
        <td>{{th.yingkuiAmount}}</td>
        <td style="color:red;cursor: pointer;" @click="goFourFn(th)">{{$L.t('agent.agent_8.zh57')}}</td>
      </tr>
      <tr v-if="lotteryStore.lotteryProfitAnalysisDetailFromUidList.code != 0">
        <td colspan="9" class="nodata">
          {{$L.t('noData')}}
        </td>
      </tr>
      </tbody>
    </table>
    <table class="table" v-if="FloorState == 4">
      <tbody>
      <tr class="head">
        <td>{{$L.t('table.username')}}</td>
        <td>{{$L.t('table.issue')}}</td>
        <td>{{$L.t('lottery.zh77')}}</td>
        <td>{{$L.t('lottery.zh78')}}</td>
        <td>{{$L.t('table.playType')}}</td>
        <th>{{$L.t('table.betMoney')}}</th>
        <th>{{$L.t('table.winMoney')}}</th>
        <th>{{$L.t('lottery.zh76')}}</th>
        <th>{{$L.t('financial.zh77')}}</th>
        <th>{{$L.t('table.lotteryNum')}}</th>
        <th>{{$L.t('table.benTime')}}</th>
      </tr>
      <tr class="odd" v-for="f in lotteryStore.lotteryPlayedPAsDetailFromUidList.data.data">
        <td>{{f.username}}</td>
        <td>{{f.actionNo}}</td>
        <td>{{f.typeName}}</td>
        <td>{{f.actionData}}</td>
        <td>{{f.playedName}}</td>
        <td>{{f.betAmount}}</td>
        <td>{{f.zjAmount}}</td>
        <td>{{f.fanDianAmount}}</td>
        <td>{{f.yingkuiAmount}}</td>
        <td>{{f.lotteryNo}}</td>
        <td>{{f.actionTime}}</td>
      </tr>
      <tr v-if="getFourFloorPage.sum > 0">
        <td colspan="12">
          <page-limit :pageData="getFourFloorPage" :inputShow="'1'" @handlePage="fourFloorPageFn"></page-limit>
        </td>
      </tr>
      <tr v-if="!lotteryStore.lotteryPlayedPAsDetailFromUidList.data.data">
        <td colspan="12" class="nodata">
          {{$L.t('noData')}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  export default {
    props: ['lotteryData'],
    data () {
      return {
        days:'',
        startTime:'',
        endTime:'',
        isAll:false,
        lotteryClassID: 0,
        lotteryId:-1,
        lottery:{
          type:'',
          isAll:'',
          lotteryType:0,
          lotteryClass:0,
          fromTime:'',
          toTime:'',
          username:'',
          actionNo:'',
        },
        lotteryType:'0',  // 2 官方 1 系统
        thislotteryId:'',
        FloorState:1,
        twoFloorObj:{
          type:'',
          isAll:'',
          lotteryType:0,
          lotteryClass:0,
          fromTime:'',
          toTime:'',
          page:1,
          limit:'20',
          sortBy:'0',
        },
        twoSortBySelect:[
          {
            name:this.$L.t('lottery.zh79'),
            value:'0'
          },{
            name:this.$L.t('table.betMoney'),
            value:'1'
          },{
            name:this.$L.t('table.winMoney'),
            value:'2'
          },{
            name:this.$L.t('financial.zh77'),
            value:'3'
          },{
            name:this.$L.t('lottery.zh76'),
            value:'4'
          },{
            name:this.$L.t('lottery.zh80'),
            value:'5'
          },
        ],
        threeFloorObj:{
          type:'',
          isAll:'',
          lotteryType:0,
          lotteryClass:0,
          uid:'',
          fromTime:'',
          toTime:'',
        },
        FourFloorObj:{
          type:'',
          isAll:'',
          lotteryType:0,
          lotteryClass:0,
          groupId:'',
          playedId:'',
          uid:'',
          fromTime:'',
          toTime:'',
          page:1,
          limit:'20',
        },
      }
    },
    created (){
      if(this.lotteryData){
        this.lottery.username = this.lotteryData.username || ''
        this.lottery.actionNo = this.lotteryData.actionNo || ''
        this.lottery.fromTime = this.lotteryData.fromTime || ''
        this.lottery.toTime =  this.lotteryData.toTime || ''
        this.lottery.isAgent =  this.lotteryData.isAgent || '0'
        this.FourFloorObj.isAgent =  this.lotteryData.isAgent || '0'
        this.twoFloorObj.isAgent =  this.lotteryData.isAgent || '0'
        this.startTime = this.lotteryData.fromTime || ''
        this.endTime = this.lotteryData.toTime || ''
      }
      this.getLotteryClassList().then((res) => {
        if (res.code == 0) {
          this.thislotteryId = res.data[0].id
          this.getLotteryTypeFromClassID4({
            classID:res.data[0].id,apiType:'',
            lotteryType:this.lotteryType,
            fromTime:this.startTime,
            toTime:this.endTime,
            diyType:'0',
            isAll:this.isAll? 1 :0,
            lotteryClass:this.thislotteryId,
            username:this.lottery.username,
            actionNo:this.lottery.actionNo,
            isAgent:this.lottery.isAgent || '0'
            })
        }
      })
      //  diyType:'0' 初始化查询全部彩种
    },
    mounted(){

    },
    watch: {
      'lotteryType'(n,o){
        this.lotteryId=0
        this.lotteryClassID =0
        this.FloorState = 1
        this.isAll = false
        this.getLotteryTypeFromClassID4({classID:this.thislotteryId,apiType:'',lotteryType:n,fromTime:this.startTime,toTime:this.endTime,isAgent:this.lottery.isAgent || '0', isAll:this.isAll? 1 :0, lotteryClass:this.thislotteryId})
      },
      // "lotteryClassID"(n,o) {
      //   this.lottery.lotteryClass = n;
      //   this.twoFloorObj.lotteryClass = n ;
      //   this.threeFloorObj.lotteryClass = n ;
      //   this.FourFloorObj.lotteryClass = n ;
      // },
      "isAll" (n,o) {
        if(n) {
          this.lotteryClassID = -1
          this.lotteryId = -1
          this.lottery.isAll = 1;
          this.twoFloorObj.isAll = 1;
          this.threeFloorObj.isAll = 1;
          this.FourFloorObj.isAll = 1;
          this.lottery.lotteryClass = 0
          this.lottery.type = 0;
          this.thislotteryId = 0;
          this.lottery.lotteryType = this.lotteryType
          this.getLotteryProfitAnalysis(this.lottery)
        }else {
          this.lottery.isAll = 0
          this.twoFloorObj.isAll = 0
          this.threeFloorObj.isAll = 0
          this.FourFloorObj.isAll = 0
        }
        this.FloorState = 1
        // console.log(this.lotteryType);
        // this.lottery.type = 0
        // this.lotteryClassID = 0
        // this.lotteryClassID = this.lotteryClassID
        // this.lotteryId = this.lotteryId
        // this.lotteryClassID == -1 ? this.lottery.lotteryClass = 0 :this.lottery.lotteryClass = this.lotteryClassID
        // this.lottery.lotteryType = this.lotteryType
        this.lottery.fromTime = this.startTime
        this.lottery.toTime = this.endTime
      }
    },
    methods: {
      ...mapMutations([

      ]),

      ...mapActions([
        'getLotteryClassList',
        "getLotteryTypeFromClassID4",
        "getLotteryProfitAnalysis",
        "getLotteryProfitAnalysisDetail",
        "getLotteryProfitAnalysisDetailFromUid",
        "getLotteryPlayedPAsDetailFromUid",
        "getLotteryPlayedFromgroupID"

      ]),
      // getAllList(){
      //   this.FloorState = 1
      //   this.lottery.type = 0
      //   this.lotteryClassID = -1
      //   this.lotteryId = -1
      //   this.lottery.fromTime = this.startTime
      //   this.lottery.toTime = this.endTime
      //   this.getLotteryProfitAnalysis(this.lottery)
      // },
      goBackFn(){
        if(this.FloorState*1 == 2){
          this.FloorState = 1
          this.lottery.type = this.lotteryStore.YKlotteryType
          this.getLotteryProfitAnalysis(this.lottery)
        }
        if(this.FloorState*1 == 3){
          this.FloorState = 2
          this.twoFloorObj.type = this.lotteryStore.YKlotteryType
          this.twoFloorObj.page = 1
          this.twoFloorObj.sortBy = '0'
          this.getLotteryProfitAnalysisDetail(this.twoFloorObj)
        }
        if(this.FloorState*1 == 4){
          this.FloorState = 3
          this.getLotteryProfitAnalysisDetailFromUid(this.threeFloorObj)
        }

      },
      fourFloorPageFn(data){
        this.FourFloorObj.page = data.page
        this.FourFloorObj.limit = data.limit
        this.getLotteryPlayedPAsDetailFromUid(this.FourFloorObj)
      },
      playChange(){
        this.FourFloorObj.page = 1
        this.FourFloorObj.lotteryType = this.lotteryType;
        this.FourFloorObj.actionNo =this.lottery.actionNo
        this.FourFloorObj.username =this.lottery.username
        this.FourFloorObj.lotteryClass = this.thislotteryId
        // this.lotteryClassID == -1 ? this.FourFloorObj.lotteryClass = 0 :this.FourFloorObj.lotteryClass = this.
        this.getLotteryPlayedPAsDetailFromUid(this.FourFloorObj)
      },
      goFourFn(obj){
        this.getLotteryPlayedFromgroupID({groupID:obj.groupId}).then(()=>{
          this.FourFloorObj.groupId = obj.groupId
          this.FourFloorObj.type = this.lotteryStore.YKlotteryType
          this.FourFloorObj.uid = obj.uid
          this.FourFloorObj.playedId = ''
          this.FourFloorObj.fromTime = this.threeFloorObj.fromTime
          this.FourFloorObj.toTime = this.threeFloorObj.toTime
          this.FourFloorObj.username =this.threeFloorObj.username
          this.FourFloorObj.actionNo =this.threeFloorObj.actionNo
          this.FourFloorObj.page = 1
          this.FourFloorObj.lotteryType = this.lotteryType;
          this.FourFloorObj.lotteryClass = this.thislotteryId
          // this.lotteryClassID == -1 ? this.FourFloorObj.lotteryClass = 0 :this.FourFloorObj.lotteryClass = this.lotteryClassID
          this.getLotteryPlayedPAsDetailFromUid(this.FourFloorObj).then((res)=>{
            this.FloorState = 4
          })
        })
      },

      goThreeFn(obj){
        this.threeFloorObj.type = obj.type
        this.threeFloorObj.uid = obj.uid
        this.threeFloorObj.username =this.twoFloorObj.username
        this.threeFloorObj.actionNo =this.twoFloorObj.actionNo
        this.threeFloorObj.fromTime = this.twoFloorObj.fromTime
        this.threeFloorObj.toTime = this.twoFloorObj.toTime
        this.threeFloorObj.lotteryType = this.lotteryType;
        this.threeFloorObj.lotteryClass = this.thislotteryId
        // this.lotteryClassID == -1 ? this.threeFloorObj.lotteryClass = 0 :this.threeFloorObj.lotteryClass = this.lotteryClassID
        this.getLotteryProfitAnalysisDetailFromUid(this.threeFloorObj).then((res)=>{
          this.FloorState = 3
        })
      },
      goTwoFloor(){
        this.twoFloorObj.type = this.lotteryStore.YKlotteryType
        this.twoFloorObj.fromTime =this.lottery.fromTime
        this.twoFloorObj.username =this.lottery.username
        this.twoFloorObj.actionNo =this.lottery.actionNo
        this.twoFloorObj.toTime = this.lottery.toTime
        this.twoFloorObj.page = 1
        this.twoFloorObj.sortBy = '0'
        this.twoFloorObj.lotteryType = this.lotteryType;
        this.twoFloorObj.lotteryClass = this.thislotteryId
        // this.lotteryClassID == -1 ? this.twoFloorObj.lotteryClass = 0 :this.twoFloorObj.lotteryClass = this.lotteryClassID
        this.getLotteryProfitAnalysisDetail(this.twoFloorObj).then((res)=>{
            this.FloorState = 2
        })
      },
      twoFloorFn(){
        this.twoFloorObj.page = 1
        this.twoFloorObj.actionNo =this.lottery.actionNo
        this.twoFloorObj.username =this.lottery.username
        this.twoFloorObj.lotteryType = this.lotteryType;
        this.twoFloorObj.lotteryClass = this.thislotteryId
        // this.lotteryClassID == -1 ? this.twoFloorObj.lotteryClass = 0 :this.twoFloorObj.lotteryClass = this.lotteryClassID
        this.getLotteryProfitAnalysisDetail(this.twoFloorObj)
      },
      threeFloorFn() {
        // this.FloorState = 3
        this.threeFloorObj.actionNo =this.lottery.actionNo
        this.threeFloorObj.username =this.lottery.username
        this.threeFloorObj.lotteryType = this.lotteryType;
        this.threeFloorObj.lotteryClass = this.thislotteryId
        // this.lotteryClassID == -1 ? this.threeFloorObj.lotteryClass = 0 :this.threeFloorObj.lotteryClass = this.lotteryClassID
        this.getLotteryProfitAnalysisDetailFromUid(this.threeFloorObj)
      },
      fourFloorFn() {
        this.FourFloorObj.page = 1
        this.FourFloorObj.actionNo =this.lottery.actionNo
        this.FourFloorObj.username =this.lottery.username
        this.FourFloorObj.lotteryType = this.lotteryType;
        this.FourFloorObj.lotteryClass = this.thislotteryId
        // this.lotteryClassID == -1 ? this.FourFloorObj.lotteryClass = 0 :this.FourFloorObj.lotteryClass = this.lotteryClassID
        this.getLotteryPlayedPAsDetailFromUid(this.FourFloorObj).then((res)=>{
          this.FloorState = 4
        })
      },
      TwoFloorPageFn(data){
        this.twoFloorObj.page = data.page
        this.twoFloorObj.limit = data.limit
        this.twoFloorObj.lotteryType = this.lotteryType;
        this.twoFloorObj.lotteryClass = this.thislotteryId
        // this.lotteryClassID == -1 ? this.twoFloorObj.lotteryClass = 0 :this.twoFloorObj.lotteryClass = this.lotteryClassID
        this.getLotteryProfitAnalysisDetail(this.twoFloorObj)
      },
      getTimer(start,end){
        this.startTime = start
        this.endTime = end
      },
      searchFn(){
        this.FloorState = 1;
        this.lottery.fromTime = this.startTime
        this.lottery.toTime = this.endTime
        this.lottery.type =this.lotteryStore.YKlotteryType
        this.lottery.lotteryType = this.lotteryType;
        this.lottery.lotteryClass = this.thislotteryId
        // this.lotteryClassID == -1 ? this.lottery.lotteryClass = 0 :this.lottery.lotteryClass = this.lotteryClassID
        this.getLotteryProfitAnalysis(this.lottery)
      },
      getLocalTime(nS) {
        let sj = nS*1000
        return new Date(parseInt(sj)).toLocaleString().replace(/:\d{1,2}$/,' ');
      },
      // 彩种分类切换  获取彩种
      lotTypeChange (item,index) {
        this.FloorState = 1
        this.lotteryClassID = index
        this.lotteryId=0
        this.isAll = false
        this.thislotteryId = item.id
        this.getLotteryTypeFromClassID4({classID:item.id,apiType:'',lotteryType:this.lotteryType,fromTime:this.startTime,toTime:this.endTime,isAgent:this.lottery.isAgent || '0',isAll:this.isAll? 1 :0, lotteryClass:this.thislotteryId})
      },
      // 彩种切换  获取彩种玩法
      lotteryChange(item,index){
        this.FloorState = 1
        this.isAll = false
        this.lotteryId = index
        this.lottery.type = item.id
        this.lottery.isAll = 0;
        this.lottery.lotteryType = this.lotteryType;
        this.lottery.lotteryClass = this.thislotteryId;
        this.lottery.fromTime = this.startTime
        this.lottery.toTime = this.endTime
        this.getLotteryProfitAnalysis(this.lottery)
      },
    },
    components:{

    },
    computed: {
      ...mapState([
        "lotteryStore",
      ]),
      getTwoFloorPage(){
        return {
          page: this.twoFloorObj.page,
          limit: this.twoFloorObj.limit,
          sum: this.lotteryStore.lotteryProfitAnalysisDetailList.data.count || 0
        }
      },
      getFourFloorPage(){
        return {
          page: this.FourFloorObj.page,
          limit: this.FourFloorObj.limit,
          sum: this.lotteryStore.lotteryPlayedPAsDetailFromUidList.data.count || 0
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  #search {
    border:none ;
  }
  .search-all-btn {
    line-height: 1;
    padding: 3px 25px;
    font-size:14px;
    &.active {
      color:red;
     }
  }
  .head th {
    text-align: left;
  }
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
  .lottery-nav{
    padding: 5px 0;
  button{
    padding: 0 10px;
    margin-right: 10px;
    color: #666;
    margin-bottom:10px;
  &.active{
     color: red;
     background-color: buttonface;
     border-width: 2px;
     border-style: outset;
     border-color: buttonface;
     border-image: initial;
   }
  }
  }
  .kjActive{
  button{
    margin: 0 10px;
  &.on {
     color:red;
   }
  }

  }
  .timeShow {
  button  {
    padding: 0 5px;
  }
  >div{
     margin: 0 5px;
  input{
    height: 26px;
  }
  }
  }
  .today_regiser{
  // 头部
     .today_header{
       position: relative;
       padding: 10px 0;
       text-align: center;
       color: #666;
       font-size: 15px;
  button{
    color: #000;
    font-size: 13px;
    position: absolute;
    right: 10%;
    bottom: 0px;
    cursor: pointer;
    padding:0 5px;
  }
  }
  }
  .lottery-head{
    display: flex;
    align-items: center;
  p{
    margin-right: 20px;
  }
  span{
    margin-right: 10px;
    font-weight: normal;
  }
  select{
    margin-right: 10px;
    padding: 2px 5px;
  }
  }
  .lottery_model{
    .table{
      margin: 5px 5px 10px;
    }
  }
</style>
