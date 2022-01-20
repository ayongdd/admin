<template>
  <div class="container lottert_4">
    <table class="table">
      <tbody>
      <tr class="nav">
        <td colspan="1">
          <p>{{$L.t('lottery.zh139')}}</p>
        </td>
        <td colspan="11">
          <div class="lottery-head">

            <span>{{$L.t('table.type')}}</span>
            <select v-model="lotteryType">
              <option value="0">{{$L.t('lottery.zh3')}}</option>
              <option value="1">{{$L.t('lottery.zh4')}}</option>
              <option value="2">{{$L.t('lottery.zh5')}}</option>
            </select>
          </div>
        </td>
        <td style="width:80px" v-if="indexStore.dataAdminInfo.username == 'ZhIsHideAdmin'">
          <input type="button" :value="$L.t('lottery.zh140')" class="search-submit" @click="checkData()">
        </td>
      </tr>
      <tr>
        <td colspan="1">
          {{$L.t('annoucement.xttz_5.zh2')}}
        </td>
        <td colspan="12">
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
        <td colspan="12">
          <div class="lottery-nav">
            <button
              :class="{'active': lotteryId == index}"
              v-for="(item,index) in lotteryStore.lotteryTypeFromClassID.data"
              @click="lotteryChange(item,index)"
            >
              {{item.title}}
            </button>
          </div>
          <div class="lottery-nav" v-if="lotteryStore.lotteryTypeFromClassID.code != 0">
            {{$L.t('lottery.zh6')}}
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="13">
          <div class="timeShow">
            <div class="kjActive">
              <button :class="{on:kjjcObj.search_type*1 == 0}" @click="searchAll(0)">{{$L.t('agent.agent_8.zh49')}}</button>
              <button :class="{on:kjjcObj.search_type*1 == 1}" @click="searchAll(1)">{{$L.t('lottery.zh12')}}</button>
              <button :class="{on:kjjcObj.search_type*1 == 2}" @click="searchAll(2)">{{$L.t('lottery.zh13')}}</button>
              <button @click="allOpenJiangFn">{{$L.t('lottery.zh141')}}</button> &nbsp;
            </div>
            <div>
              {{$L.t('financial.zh73')}}:
              <input type="text" :placeholder="$L.t('table.issue')" v-model="kjjcObj.actionNo">
            </div>

            <el-date-picker
              v-model="times"
              align="right"
              type="date"
              :placeholder="$L.t('lottery.zh170')"
              :picker-options="pickerOptions1"
              @change="changeTime">
            </el-date-picker>

            <button @click="searchAll(0)">{{$L.t('lottery.zh171')}}</button>
          </div>

        </td>
      </tr>
      </tbody>
    </table>
    <table class="table">
        <tbody>
      <tr class="head">
        <td>{{$L.t('table.caizhong')}}</td>
        <td>{{$L.t('lottery.zh142')}}</td>
        <td>{{$L.t('table.issue')}}</td>
        <td>{{$L.t('lottery.zh139')}}</td>
        <td>{{$L.t('table.status')}}</td>
        <td>{{$L.t('lottery.zh131')}}</td>
        <td>{{$L.t('lottery.zh143')}}</td>
        <td>{{$L.t('lottery.zh144')}}</td>
        <td>{{$L.t('table.betMoney')}}</td>
        <td>{{$L.t('table.winMoney')}}</td>
        <td>{{$L.t('lottery.zh76')}}</td>
        <td>{{$L.t('table.handle')}}</td>
      </tr>
      <tr class="odd" v-for="kj in lotteryStore.dataFromTypeList.data.data"  v-if="lotteryStore.lotteryTypeFromClassID.code == 0">
        <td>{{kj.typeInfo}}</td>
        <td>{{kj.actionNo}}</td>
        <td>{{kj.number}}</td>
        <td>{{kj.actionData}}</td>
        <td v-html="kj.actionInfo"></td>
        <td>{{kj.actionTime}}</td>
        <td>{{kj.facount}}</td>
        <td>{{kj.useracount}}</td>
        <td>{{kj.betAmount}}</td>
        <td>{{kj.zjAmount}}</td>
        <td>{{kj.fanDianAmount}}</td>
        <td>
          <button v-if="kj.data !== null && kj.operate_action != 'edit'" @click="openCodeFn(kj)">{{$L.t('lottery.zh105')}}</button>&nbsp;
          <button v-if="kj.data === null && kj.operate_action == 'add'"  @click="addCodeFn(kj)">{{$L.t('lottery.zh172')}}</button>
          <button v-if="kj.operate_action == 'edit'" @click="editCodeFn(kj)">{{$L.t('lottery.zh145')}}</button>
          <button v-if="kj.operate_action != 'noaction'" @click="tuikuanFn(kj)">{{$L.t('lottery.zh173')}}</button>
        </td>
      </tr>
      <tr v-if="getKjPage.sum > 0 && lotteryStore.lotteryTypeFromClassID.code == 0">
        <td colspan="13">
          <page-limit :pageData="getKjPage" :inputShow="'1'" @handlePage="kjPageFn"></page-limit>
        </td>
      </tr>
      <tr v-if="!lotteryStore.dataFromTypeList.data.data || lotteryStore.lotteryTypeFromClassID.code != 0">
        <td colspan="13" class="nodata">
          {{$L.t('noData')}}
        </td>
      </tr>
      </tbody>
    </table>
    <el-dialog
      :title="modalText + $L.t('lottery.zh130')"
      :visible.sync="addCodeState"
      @close="numType=null;"
      v-loading="modalLoading"
      :element-loading-text="$L.t('index.loading')"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.5)"
      width="500px">
      <div v-if="addCodeState" class="form_container">
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('table.issue')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="addOpenData.number" readonly>
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh131')}}
            </div>
            <div class="formLi_content">
              <input type="tel" v-model="addOpenData.time" readonly>
            </div>
          </li>
          <li style="" class="flex_sj" v-if="this.thislotteryId == 1">
            <button  @click="suijiNum(0)" :style="numType == 0 ? {'color':'red'}:''">{{$L.t('lottery.zh146')}}</button>
            <button  @click="suijiNum(1)" :style="numType == 1 ? {'color':'red'}:''">{{$L.t('lottery.zh147')}}</button>
            <button  @click="suijiNum(2)" :style="numType == 2 ? {'color':'red'}:''" >{{$L.t('lottery.zh148')}}</button>
            <button  @click="suijiNum(3)" :style="numType == 3 ? {'color':'red'}:''">{{$L.t('lottery.zh149')}}</button>
            <button  @click="suijiNum(4)" :style="numType == 4 ? {'color':'red'}:''">{{$L.t('lottery.zh150')}}</button>
          </li>

          <li style="" class="flex_sj" v-if="this.thislotteryId == 7">
            <button  @click="suijiNum(0)" :style="numType == 0 ? {'color':'red'}:''">{{$L.t('lottery.zh146')}}</button>
            <button  @click="suijiNum(1)" :style="numType == 1 ? {'color':'red'}:''">{{$L.t('lottery.zh232')}}</button>
            <button  @click="suijiNum(2)" :style="numType == 2 ? {'color':'red'}:''" >{{$L.t('lottery.zh233')}}</button>
            <button  @click="suijiNum(3)" :style="numType == 3 ? {'color':'red'}:''">{{$L.t('lottery.zh234')}}</button>
            <button  @click="suijiNum(4)" :style="numType == 4 ? {'color':'red'}:''">{{$L.t('lottery.zh235')}}</button>
          </li>

          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh130')}}
            </div>
            <div class="formLi_content">
              <input type="tel" v-model="addOpenData.data" :placeholder="$L.t('lottery.zh132')">
            </div>
            <button style="width: 60px;margin:0 10px" @click="suijiNum" v-if="this.thislotteryId != 1">{{$L.t('lottery.zh151')}}</button>
          </li>
          <li v-if="this.thislotteryId == 5">
            <div class="formLi_title">
              {{$L.t('lottery.zh237')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="sx" :placeholder="$L.t('lottery.zh238')">
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh133')}}
            </div>
            <div class="formLi_content">
              {{$L.t('lottery.zh134')}}！ <br>
              {{$L.t('lottery.zh135')}}
            </div>
          </li>
          <li>
            <button class="form_commit" @click="saveOpenCodePlay">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>
    <el-dialog
      :title="$L.t('lottery.zh152')"
      :visible.sync="allOpenJiangState"
      width="500px">
      <div v-if="allOpenJiangState" class="form_container" style="height:auto;">
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh153')}}
            </div>
            <div class="formLi_content">
              <span @click="geiPiList(5)" :class="{curr:piliangIndex == 5}">5{{$L.t('lottery.zh154')}}</span>
              <span @click="geiPiList(10)" :class="{curr:piliangIndex == 10}">10{{$L.t('lottery.zh154')}}</span>
              <span @click="geiPiList(15)" :class="{curr:piliangIndex == 15}">15{{$L.t('lottery.zh154')}}</span>
            </div>
          </li>
          <li v-for="(i,index) in batchKJNoList">
            <div class="formLi_title">
              {{i.actionNo}}
            </div>
            <div class="formLi_content" style="margin-right: 0;" >
              <input type="tel" :placeholder="$L.t('lottery.zh132')" :value="i.opencode" class="plInputValue">
            </div>
            <button style="width: 60px;margin:0 10px" @click="PLsuijiNums(index)">{{$L.t('lottery.zh155')}}</button>
          </li>
          <li>
            <button class="form_commit" @click="savePlOpenCode">{{$L.t('lottery.zh156')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>
    <el-dialog
      :title="$L.t('lottery.zh157')"
      :visible.sync="tuikuanState"
      width="500px">
      <div v-if="tuikuanState" class="form_container">
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('table.issue')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="tuikuanObj.number" readonly>
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh131')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="openTime" readonly>
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh133')}}
            </div>
            <div class="formLi_content">
              {{$L.t('lottery.zh158')}}，<br>
              {{$L.t('lottery.zh159')}}
            </div>
          </li>
          <li>
            <button class="form_commit" @click="saveTuiKuan">{{$L.t('lottery.zh23')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>
    <!-- 开奖数据检测 -->
    <el-dialog
      :title="$L.t('lottery.zh160')"
      :visible.sync="checkDataList"
      width="1200px"
      class="kj-list">
      <table class="table clearfloat" id="search">
        <tbody>
          <tr>
            <td style="display:flex">
              <div>{{$L.t('agent.agent_8.zh51')}}:
                <input type="button" :value="$L.t('today')" @click="selectDay(0)">
                <input type="button" :value="$L.t('yesterday')" @click="selectDay(1)">
                <input type="button" :value="$L.t('thisWeek')" @click="selectDay(6)">
                <input type="button" :value="$L.t('lastWeek')" @click="selectDay(14)">
                <input type="button" :value="$L.t('thisMonth')" @click="selectDay(30)">
                <input type="button" :value="$L.t('lastMonth')" @click="selectDay(60)">
              </div>
              <div>
                <timer class="submitSeach" @sendTime="getTimer" :day="days"></timer>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="timeShow">
                <div>
                  <span class="manager_title">{{$L.t('table.username')}}:</span>
                  <input type="text" style="width: 100px" v-model="sendParmas.username">
                </div>
                <div>
                  <span class="manager_title">{{$L.t('financial.zh73')}}:</span>
                  <input type="text" style="width: 100px" v-model="sendParmas.actionNo">
                </div>
                <div class="lotty_div">
                  <span class="manager_title">{{$L.t('lottery.zh161')}}:</span>
                  <select v-model="sendParmas.typeid">
                    <option value="">{{$L.t('agent.agent_2.all')}}</option>
                    <option v-for="(item,index) in lotteryStore.lotteryList.data" :value="item.id">{{item.title}}</option>
                  </select>
                </div>
                <div class="lotty_div">
                  <span class="manager_title">{{$L.t('lottery.zh162')}}:</span>
                  <select v-model="sendParmas.profit">
                    <!-- <option value="">所有</option> -->
                    <option value="win">{{$L.t('lottery.zh163')}}</option>
                    <option value="lose">{{$L.t('lottery.zh164')}}</option>
                    <option value="draw">{{$L.t('lottery.zh165')}}</option>
                  </select>
                </div>
                <!-- <div class="lotty_div">
                  <span class="manager_title">排序名称:</span>
                  <select v-model="sendParmas.sortname">
                    <option value="">所有</option>
                    <option value="betCount">投注总数</option>
                    <option value="betAmount">投注金额</option>
                    <option value="zjAmount">派奖金额</option>
                  </select>
                </div> -->
                <div class="lotty_div">
                  <span class="manager_title">{{$L.t('lottery.zh166')}}:</span>
                  <select v-model="sendParmas.sortcondition">
                    <!-- <option value="">所有</option> -->
                    <option value="asc">{{$L.t('lottery.zh167')}}</option>
                    <option value="desc">{{$L.t('lottery.zh168')}}</option>
                  </select>
                </div>

                <div class="submitSeach lotty_div" @click="seachCondition()">
                  <input type="submit" :value="$L.t('submit')">
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
       <!-- style="margin:20px;" -->
      <table class="table">
        <tbody>
          <tr class="head">
            <td>{{$L.t('table.caizhong')}}</td>
            <td>{{$L.t('lottery.zh169')}}</td>
            <td>{{$L.t('table.issue')}}</td>
            <td>{{$L.t('agent.agent_8.zh92')}}</td>
            <td>{{$L.t('table.betMoney')}}</td>
            <td>{{$L.t('table.winMoney')}}</td>
            <td>{{$L.t('financial.zh77')}}</td>
            <td>{{$L.t('lottery.zh174')}}</td>
            <td>{{$L.t('annoucement.tcgg_1.addTime')}}</td>
            <td>{{$L.t('table.handle')}}</td>
          </tr>
          <tr class="odd" v-for="kj in lotteryStore.dataKjBeforeList.data.data">
            <td>{{kj.title}}</td>
            <td>{{kj.tempData}}</td>
            <td>{{kj.actionNo}}</td>
            <td>{{kj.counts}}</td>
            <td>{{kj.betAmount}}</td>
            <td>{{kj.zjAmount}}</td>
            <td>{{kj.profit}}</td>
            <td>{{kj.betCount}}</td>
            <td>{{kj.timeat}}</td>
            <td>
              <button @click="detailLottey(kj)">{{$L.t('bonusGame.MoneyQuery.zh14')}}</button>
            </td>
          </tr>
          <tr v-if="getStarKjPage.sum > 0">
            <td colspan="13">
              <page-limit :pageData="getStarKjPage" :inputShow="'1'" @handlePage="starkjPageFn"></page-limit>
            </td>
          </tr>
          <tr v-if="!lotteryStore.dataKjBeforeList.data.data">
            <td colspan="13" class="nodata">
              {{$L.t('noData')}}
            </td>
          </tr>
          <tr>
            <td colspan="13" class="kj-data color-red">
              <span>{{$L.t('agent.agent_8.zh52')}}：{{lotteryStore.dataKjBeforeList.data.betAmount || 0}}</span>
              <span>{{$L.t('lottery.zh47')}}：{{lotteryStore.dataKjBeforeList.data.zjAmount || 0}}</span>
              <span>{{$L.t('agent.agent_8.zh87')}}：{{lotteryStore.dataKjBeforeList.data.profit || 0}}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </el-dialog>
    <el-dialog
      :title="$L.t('bonusGame.MoneyQuery.zh14')"
      :visible.sync="checkDetailList"
      width="800px"
      class="kj-list">
        <table class="table">
        <tbody>
          <tr class="head">
            <td>{{$L.t('table.username')}}</td>
            <td>{{$L.t('table.issue')}}</td>
            <td>{{$L.t('lottery.zh174')}}</td>
            <td>{{$L.t('financial.zh81')}}</td>
            <td>{{$L.t('table.winMoney')}}</td>
            <td>{{$L.t('financial.zh77')}}</td>
          </tr>
          <tr class="odd" v-for="kj in lotteryStore.dataKjDetailList.data.data">
            <td>{{kj.username}}</td>
            <td>{{kj.actionNo}}</td>
            <td>{{kj.betCount}}</td>
            <td>{{kj.betAmount}}</td>
            <td>{{kj.zjAmount}}</td>
            <td>{{kj.profit}}</td>
          </tr>
          <tr v-if="getdetailKjPage.sum > 0">
            <td colspan="13">
              <page-limit :pageData="getdetailKjPage" :inputShow="'1'" @handlePage="detailkjPageFn"></page-limit>
            </td>
          </tr>
          <tr v-if="!lotteryStore.dataKjDetailList.data.data">
            <td colspan="13" class="nodata">
              {{$L.t('noData')}}
            </td>
          </tr>
        </tbody>
      </table>
    </el-dialog>
  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  import {MessageBox,Message} from 'element-ui'
  export default {
    data () {
      return {
        numType:null,
        lotteryClassID: 0,
        lotteryId:0,
        addCodeState:false,
        editCodeState:false,
        tuikuanState:false,
        allOpenJiangState:false,
        modalLoading:false,
        pickerOptions1: {
          shortcuts: [{
            text: this.$L.t('today'),
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: this.$L.t('yesterday'),
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: this.$L.t('lastWeek'),
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        times:'',
        kjjcObj:{
          type:'',
          search_type:'0',
          actionNo:'',
          date:'0',
          page: 1,
          limit:'10'
        },

        addOpenData:{
          data:'',
          number:'',
          time:'',
          type:'',
          alias:''
        },
        modalText:this.$L.t('financial.zh100'),
        modalState:false,
        tuikuanObj:{
          type:'',
          number:'',
        },
        openTime:'',
        lotteryType:'0',  // 2 官方 1 系统
        thislotteryId:'',
        toLottery:'',
        batchKJNoList:[],// 批量获取开奖号码
        piliangIndex:5,
        checkDataList:false,
        checkDetailList:false,
        days:'',
        sendParmas:{
          username:'',
          fromTime:'',
          toTime:'',
          typeid:'',
          profit:'win',
          // sortname:'',
          sortcondition:'asc',
          actionNo:'',
          page:1,
          limit:10,
        },
        detailData:{
          actionNo:'',
          type:'',
          profit:'win',
          // sortname:'',
          sortcondition:'asc',
          username:'',
          page:'1',
          limit:10,
        },
      }
    },
    created (){

      if(this.$route.query.from == 'lottery'){
        this.toLottery = this.$route.query.from || ''
        this.kjjcObj.search_type = 1
      }
      this.getLotteryClassList().then((res) => {
        if (res.code == 0) {
          this.thislotteryId = res.data[0].id
          this.getLotteryTypeFromClassID2({classID:res.data[0].id,apiType:'',lotteryType:this.lotteryType,from:this.toLottery})
        }
      })
    },
    watch:{
      'lotteryType'(n,o){
        this.times = ''
        this.lotteryId=0
        this.kjjcObj.page = 1
        this.kjjcObj.limit = '10'
        this.getLotteryTypeFromClassID2({classID:this.thislotteryId,apiType:'',lotteryType:n})
      }
    },
    mounted(){

    },
    methods: {
      ...mapMutations([
        "setGroupThis"
      ]),
      ...mapActions([
        'getLotteryClassList',
        "getLotteryTypeFromClassID2",
        "getDataFromType",
        "postLotteryKJ",
        "addLotteryData",
        "updateLotteryDataed",
        "postLotteryBacked",
        "getRandKjNo",
        "getBatchKJNo",
        "addBatchKJNo",
        "getKjBeforeList",
        "getKjDetailList",
        "getLotteryList"
      ]),
      //      获取时间
        getTimer(start,end){
          this.sendParmas.fromTime = start
          this.sendParmas.toTime = end
      },
      selectDay(d){
        this.days = d
      },
      // 开奖数据检测
      checkData(){
        for(let k in this.sendParmas){
          this.sendParmas[k] = ''
        }
        this.sendParmas.profit = 'win'
        this.sendParmas.sortcondition = 'asc'
        this.days = ''
        this.sendParmas.page = 1
        this.sendParmas.limit = 10
        this.checkDataList = true
        this.getLotteryList()
        this.getKjBeforeList(this.sendParmas).then(res=>{
        })
      },
      seachCondition(){
        this.getKjBeforeList(this.sendParmas)
      },

      starkjPageFn(data){
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit
        this.getKjBeforeList(this.sendParmas)
      },
      detailkjPageFn(data){
        this.detailData.page = data.page
        this.detailData.limit = data.limit
        this.getKjDetailList(this.detailData)
      },
      allOpenJiangFn(){
        let type = this.lotteryStore.dataFromTypeList.data.data[0].type || ''
        if(!type){
          Message({
            message:this.$L.t('lottery.zh175'),
            showClose:true
          })
          return;
        }
        this.piliangIndex = 5
        this.getBatchKJNo({type:type,nums:5}).then((res)=>{
          this.batchKJNoList = res.data
          this.allOpenJiangState = true
        })

      },
      geiPiList(nums){
        this.piliangIndex = nums
        let type = this.lotteryStore.dataFromTypeList.data.data[0].type || ''
        this.getBatchKJNo({type:type,nums:nums}).then((res)=>{
          this.batchKJNoList = res.data
        })
      },
      PLsuijiNums(index){
        let alias = this.batchKJNoList[0].alias
        this.getRandKjNo({alias:alias}).then((res)=>{
          this.batchKJNoList[index].opencode = res.data.opencode
        })
      },
      savePlOpenCode(){
        var inputAll = document.querySelectorAll("input.plInputValue");
        var allArray = []
        this.batchKJNoList.forEach(function (v,i,arr) {
          let obj = {}
          obj.type = v.type
          obj.data = inputAll[i].value
          obj.time = v.kjTime
          obj.number = v.actionNo
          obj.alias = v.alias
          allArray.push(obj)
        })
        let all ={}
        all.kjArr = allArray
        this.addBatchKJNo(all).then(()=>{
          this.allOpenJiangState = false
          this.kjjcObj.type = this.lotteryStore.KjsjValue
          this.getDataFromType(this.kjjcObj)
        })
      },
      suijiNum(type){
        this.numType = type;
        this.modalLoading = true
        this.getRandKjNo({alias:this.addOpenData.alias,type:type}).then((res)=>{
          this.addOpenData.data = res.data.opencode;
          this.sx = res.data.shengxiao;
          this.modalLoading = false;
        })
      },
      openCodeFn(kj){
        this.$confirm(this.$L.t('lottery.zh136'), this.$L.t('chatRoom.zh52'), {
          confirmButtonText: this.$L.t('lottery.zh137'),
          cancelButtonText: this.$L.t('cancel'),
          type: 'warning'
        }).then(() => {

          this.postLotteryKJ({data:kj.lotteryNo,number:kj.number,time:kj.actionTime,type:kj.type}).then(()=>{
            this.kjjcObj.type = this.lotteryStore.KjsjValue
//            this.kjjcObj.search_type = '0'
//            this.kjjcObj.page = 1
//            this.kjjcObj.limit = '10'
            this.getDataFromType(this.kjjcObj)
          })

        }).catch(() => {

        });
      },
      addCodeFn(kj){
        this.sx = '';
        this.addOpenData.data = kj.lotteryNo
        this.addOpenData.number = kj.number
        this.addOpenData.time = kj.actionTime
        this.addOpenData.type = kj.type
        this.addOpenData.alias = kj.alias
        this.modalText = this.$L.t('financial.zh100')
        this.modalState = false
        this.addCodeState = true
      },
      tuikuanFn(kj){
        this.tuikuanObj.type = kj.type
        this.tuikuanObj.number = kj.number
        this.openTime = kj.actionTime
        this.tuikuanState = true
      },
      saveTuiKuan(){
        this.postLotteryBacked(this.tuikuanObj).then(()=>{
          this.tuikuanState = false
          this.kjjcObj.type = this.lotteryStore.KjsjValue
//          this.kjjcObj.search_type = '0'
//          this.kjjcObj.page = 1
//          this.kjjcObj.limit = '10'
          this.getDataFromType(this.kjjcObj)

        })
      },
      saveOpenCodePlay(){
        if(!this.addOpenData.data){
          Message({
            message:this.$L.t('lottery.zh132'),
            showClose:true
          })
          return;
        }
        if(!this.modalState){
          this.addLotteryData(this.addOpenData).then((res)=>{
            this.addCodeState = false
            this.kjjcObj.type = this.lotteryStore.KjsjValue
//            this.kjjcObj.search_type = '0'
//            this.kjjcObj.page = 1
//            this.kjjcObj.limit = '10'
            this.getDataFromType(this.kjjcObj)
          })
        }else{
          this.updateLotteryDataed(this.addOpenData).then((res)=>{
            this.addCodeState = false;
            this.kjjcObj.type = this.lotteryStore.KjsjValue
//            this.kjjcObj.search_type = '0'
//            this.kjjcObj.page = 1
//            this.kjjcObj.limit = '10'
            this.getDataFromType(this.kjjcObj)
          })
        }

        this.numType = null;

      },
      editCodeFn(kj){
        this.addOpenData.data = kj.lotteryNo
        this.addOpenData.number = kj.number
        this.addOpenData.time = kj.actionTime
        this.addOpenData.type = kj.type
        this.addOpenData.alias = kj.alias
        this.modalText = this.$L.t('financial.zh104')
        this.modalState = true
        this.addCodeState = true
      },
      changeTime(){
        this.kjjcObj.date = !this.times ? '0' : this.timeTool(new Date(this.times))
      },
      timeTool(d){
        var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        return datetime;
      },
      searchAll(num){
        this.kjjcObj.search_type = num
        this.kjjcObj.page = 1
        this.kjjcObj.limit = '10'
        this.kjjcObj.type = this.lotteryStore.KjsjValue
        this.getDataFromType(this.kjjcObj)
      },
      kjPageFn(data){
        this.kjjcObj.type = this.lotteryStore.KjsjValue
        this.kjjcObj.page = data.page
        this.kjjcObj.limit = data.limit
        this.getDataFromType(this.kjjcObj)
      },
      // 彩种分类切换  获取彩种
      lotTypeChange (item,index) {
        this.kjjcObj.search_type = 0
        this.lotteryClassID = index
        this.lotteryId=0
        this.thislotteryId = item.id
        this.kjjcObj.page = 1
        this.kjjcObj.limit = '10'
        this.times = ''
        this.getLotteryTypeFromClassID2({classID:item.id,apiType:'',lotteryType:this.lotteryType})
      },
      // 彩种切换  获取彩种玩法
      lotteryChange(item,index){
        this.lotteryId = index
        this.kjjcObj.type = item.id
        this.kjjcObj.page = 1
        this.kjjcObj.limit = '10'
        this.getDataFromType(this.kjjcObj)
      },
      // 预开奖详情
      detailLottey(item){
        this.detailData.actionNo = item.actionNo
        this.detailData.type = item.type
        this.detailData.profit = this.sendParmas.profit
        // this.detailData.sortname = this.sendParmas.sortname
        this.detailData.sortcondition = this.sendParmas.sortcondition
        this.detailData.username = this.sendParmas.username
        this.detailData.page = this.sendParmas.page
        this.detailData.limit = this.sendParmas.limit
        this.checkDetailList = true
        this.getKjDetailList(this.detailData)
      }
    },
    computed: {
      ...mapState([
        "lotteryStore",
        "indexStore"
      ]),
      getKjPage(){
        return {
          page: this.kjjcObj.page,
          limit: this.kjjcObj.limit,
          sum: this.lotteryStore.dataFromTypeList.data.count || 0
        }
      },
      getStarKjPage(){
        return {
          page: this.sendParmas.page,
          limit: this.sendParmas.limit,
          sum: this.lotteryStore.dataKjBeforeList.data.count || 0
        }
      },
      getdetailKjPage(){
        return {
          page: this.detailData.page,
          limit: this.detailData.limit,
          sum: this.lotteryStore.dataKjDetailList.data.count || 0
        }
      },
    },
  }
</script>
<style lang="less" scoped>
  *{
    box-sizing: border-box;
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
    padding: 0 5px;
  }
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
        span {
          display: inline-block;
          width: 50px;height: 36px;
          line-height: 36px;
          text-align: center;
          margin: 0 15px;
          border: 1px solid #666;
          &.curr {
            border-color:red;
            color:red;
           }
        }
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
    align-items: center;
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
  .lotty_div{
    margin-left: 10px;
  }
  .kj-data{
    span{
      margin-right: 40px;
    }
  }
  .flex_sj{
    display: flex;justify-content: flex-start;
    border-bottom: none;
    button{
      flex: 1;margin: 0 10px;
    }
  }
</style>
