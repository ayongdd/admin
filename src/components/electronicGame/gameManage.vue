<template>
  <div class="container">

    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>
          <!-- {{electronicGame.agency.name}}游戏管理 -->
          {{$route.query.title}}
          &nbsp;&nbsp;&nbsp;{{$L.t('agent.agent_8.zh51')}}:
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


            <timer class="submitSeach" @sendTime="getTimer" :day="days" :paramTime="sendParmas"></timer>

            <!--<li class="keyValue">游戏<select name="searchKey" id="searchKey" v-model="sendParmas.game_id">-->
              <!--<option value="" >全部</option>-->
              <!--<option :value="i.id" v-for="(i,index) in electronicGame.gameList">{{i.name}}</option>-->
            <!--</select>::-->
            <!--</li>-->
            <li class="keyValue">  {{$L.t('agent.agent_8.zh89')}}:<input type="text" name="searchVal" id="searchVal"  v-model="sendParmas.name"></li>
            <li class="keyValue">
              {{$L.t('bonusGame.MoneyQuery.zh2')}}:
              <select v-model="sendParmas.isTest">
                <option value="1">{{$L.t('bonusGame.MoneyQuery.zh3')}}</option>
                <option value="0">{{$L.t('bonusGame.MoneyQuery.zh4')}}</option>
              </select>
            </li>

            <div class="submitSeach" @click="submitQuery()">
              <input type="submit"  :value="$L.t('submit')">
            </div>

          </div>
        </td>
      </tr>
      </tbody>
    </table>



    <table class="table">
      <tbody>
      <tr class="head">
        <th height="25">{{$L.t('electronicGame.zh11')}}</th>
        <th >{{$L.t('electronicGame.zh12')}}</th>
        <th >{{$L.t('bonusGame.NiuNiuBetManage.zh2')}}</th>
        <th >{{$L.t('electronicGame.zh13')}}</th>
        <th >{{$L.t('electronicGame.zh14')}}</th>
        <th>{{$L.t('electronicGame.zh15')}}</th>
        <th >{{$L.t('agent.agent_8.zh92')}}</th>
        <th >{{$L.t('agent.agent_8.zh52')}}</th>
        <th >{{$L.t('agent.agent_8.zh53')}}</th>
        <th >{{$L.t('agent.agent_8.zh54')}}</th>
        <th >{{$L.t('agent.agent_8.zh55')}}</th>
        <!-- <th>可转额度</th> -->
        <!-- <th>占比</th> -->
        <th >{{$L.t('bonusGame.NiuNiuBetManage.zh20')}}</th>

      </tr>

      <tr>
        <td>{{electronicGame.agency.title}}</td>
        <td>{{electronicGame.agency[$language()+'name']}}</td>
        <td>{{getState(electronicGame.agency.state)}}</td>
        <td>
          <img :src="electronicGame.agency.icon" style="width: 90px;height: 30px"/>
        </td>
        <td>{{electronicGame.agency.max_quota}}</td>
         <td>{{electronicGame.agency.min_quota}}</td>
        <td>{{electronicGame.agency.rs}}</td>
        <td>{{electronicGame.agency.tz}}</td>
        <td >{{electronicGame.agency.yx}}</td>
        <td>{{electronicGame.agency.yk}}</td>
        <td>{{electronicGame.agency.fs}}</td>
        <!-- <td>{{electronicGame.agency.effective}}</td> -->
        <!-- <td>{{electronicGame.agency.current_proportion}}</td> -->
        <td><a  @click="settingAgencyEve(electronicGame.agency)"  class="btnA"><font data-v-0fa1bb76="" color="green">{{$L.t('electronicGame.zh27')}}</font></a></td>
      </tr>
      </tbody>
    </table>

    <table class="table">
      <tbody>
      <tr class="head">
        <th height="25">{{$L.t('bonusGame.NiuNiuBetManage.zh1')}}</th>
        <th>{{$L.t('bonusGame.NiuNiuBetManage.zh2')}}</th>
        <th >{{$L.t('bonusGame.NiuNiuBetManage.zh3')}}</th>
        <th >{{$L.t('table.type')}}</th>
        <th >{{$L.t('common.ymleix')}}</th>
        <th >{{$L.t('agent.agent_8.zh52')}}</th>
        <th >{{$L.t('agent.agent_8.zh53')}}</th>
        <th v-if="sendParmas.agency_id*1 == 999">{{$L.t('electronicGame.zh16')}}(%)</th>
        <th v-if="sendParmas.agency_id*1 == 999">{{$L.t('bonusGame.NiuNiuBetManage.zh5')}}(%)</th>
        <th >{{$L.t('agent.agent_8.zh54')}}</th>
        <th >{{$L.t('agent.agent_8.zh55')}}</th>
        <th >{{$L.t('bonusGame.NiuNiuBetManage.zh7')}}</th>

      </tr>
      <tr v-for="(i,index) in electronicGame.gameList.data">
        <td>{{i[$language()+'name']}}</td>
        <td>{{getState(i.state)}}</td>
        <td>{{getEnable(i.enable)}}</td>
        <td>{{getHotState(i.hot)}}</td>
        <td>{{getPagetate(i.page_type)}}</td>
        <td>{{i.tz}}</td>
        <td>{{i.yx}}</td>
        <td v-if="sendParmas.agency_id*1 == 999">{{i.winning_rate || '0'}}%</td>
        <td v-if="sendParmas.agency_id*1 == 999">{{i.com_rate || '0'}}%</td>
        <td>{{i.yk}}</td>
        <td>{{i.fs}}</td>
        <td>
        <!-- DGG游戏 -->
          <a v-if="sendParmas.agency_id*1 == 999" @click="settingGameDGG(i)"   class="btnA"><font data-v-0fa1bb76="" color="green">{{$L.t('electronicGame.zh17')}}</font></a>
        <!-- 其他游戏 -->
          <a @click="settingGameEve(i)"   class="btnA"><font data-v-0fa1bb76="" color="green">{{$L.t('bonusGame.NiuNiuBetManage.zh7')}}</font></a>
          </td>

        <!--<td class="lose">-9.00</td>-->
      </tr>


      <tr v-if="getPageData.sum>0">
        <td colspan="12">
          <page-limit  :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
        </td>
      </tr>

      </tbody>
    </table>


    <!--游戏设置-->
    <el-dialog :title="tempGame.name" :visible.sync="settingGame" width="820px">
      <div class="user_detail" v-if="settingGame">
        <table class="table">
          <tbody><tr class="head">
            <td>{{$L.t('agent.agent_8.zh89')}}</td>
            <td>{{$L.t('electronicGame.zh18')}}</td>
            <td>{{$L.t('electronicGame.zh19')}}</td>
            <td v-if="sendParmas.agency_id*1 == 999">{{$L.t('electronicGame.zh16')}}(%)</td>
            <td v-if="sendParmas.agency_id*1 == 999">{{$L.t('bonusGame.NiuNiuBetManage.zh5')}}(%)</td>
          </tr>
          <tr >
            <td>{{tempGame.name}}</td>
            <td>
              <label><input type="radio" name="radios" value="0" v-model="tempGame.hot">{{$L.t('common.normal')}}</label>

              <label><input type="radio" name="radios" value="1" v-model="tempGame.hot">{{$L.t('common.hot')}}</label>
            </td>
            <td>
              <label><input type="radio" name="radios2" value="1" v-model="tempGame.enable" >{{$L.t('open')}}</label>

              <label> <input type="radio" name="radios2" value="0" v-model="tempGame.enable">{{$L.t('close')}}</label>
            </td>
            <td v-if="sendParmas.agency_id*1 == 999">
              <input type="number" :placeholder="$L.t('electronicGame.zh20')" v-model="tempGame.winning_rate"  style="width:100px">
            </td>
            <td v-if="sendParmas.agency_id*1 == 999" style="width:100px">
              <input type="number" :placeholder="$L.t('electronicGame.zh25')" v-model="tempGame.com_rate"  style="width:100px">
            </td>
          </tr>
          </tbody>
        </table>

        <div class="centeredDiv">
        <button data-v-ac6c9106="" class="form_commit" @click="saveGame()">{{$L.t('bonusGame.NiuNiuBetManage.zh14')}}</button>
        <button data-v-ac6c9106="" class="form_commit" @click="settingGame=!settingGame">{{$L.t('cancel')}}</button>
        </div>

      </div>
    </el-dialog>


    <!--运营商设置-->
    <el-dialog :title="$L.t('electronicGame.zh21')" :visible.sync="settingAgency" width="820px">
      <!--<p class="fsInfo">反水方案</p>-->
      <div class="user_detail" v-if="settingAgency">
        <table class="table">
          <tbody>
          <tr class="head">
            <td>
              <el-radio v-model="radiodata" label="2">{{$L.t('bonusGame.NiuNiuBetManage.zh16')}}</el-radio>
              <el-radio v-model="radiodata" label="1">{{$L.t('bonusGame.NiuNiuBetManage.zh17')}}</el-radio>
            </td>
            <td v-if="radiodata == '2'">{{$L.t('bonusGame.NiuNiuBetManage.zh18')}}</td>
            <td v-if="radiodata == '1'">{{$L.t('bonusGame.NiuNiuBetManage.zh19')}}</td>
            <td v-if="radiodata == '1'">{{$L.t('bonusGame.NiuNiuBetManage.zh20')}}</td>

          </tr>

          <!--{{tempFsConfig}}-->
          <tr v-for="(i,index) in datalist" v-if="radiodata == '2'">
            <td>{{$L.t('bonusGame.NiuNiuBetManage.zh24')}} {{i.fs}} {{$L.t('bonusGame.NiuNiuBetManage.zh21')}}</td>
            <td>
               <input type="text" v-model="i.fd">%
            </td>
          </tr>

          <tr v-for="(i,index) in moneyGetList" v-if="radiodata == '1'">
            <td>{{$L.t('bonusGame.NiuNiuBetManage.zh22')}} <input type="number" v-model="i.fs"></td>
            <td>
              {{$L.t('bonusGame.NiuNiuBetManage.zh23')}} <input type="number" v-model="i.fd">
            </td>
            <td>
              <button data-v-ac6c9106="" class="form_commit" @click="removeAgencyConfig(index)">{{$L.t('delete')}}</button>
            </td>

          </tr>

          <tr>
            <td>
              <b>{{$L.t('bonusGame.NiuNiuBetManage.zh25')}}:</b>
            </td>
            <td>
              <label><input type="radio" name="radios3" value="2" v-model="tempFsConfig.type">{{$L.t('bonusGame.NiuNiuBetManage.zh26')}}</label>
              <label><input type="radio" name="radios3" value="1" v-model="tempFsConfig.type">{{$L.t('bonusGame.NiuNiuBetManage.zh27')}}</label>
              <label><input type="radio" name="radios3" value="0" v-model="tempFsConfig.type">{{$L.t('close')}}</label>
            </td>
            <td></td>
          </tr>
          </tbody>

          <div v-if="radiodata == '1'">
            <button data-v-ac6c9106="" class="form_commit" @click="addAgencyConfig()">{{$L.t('bonusGame.NiuNiuBetManage.zh28')}}</button>
          </div>
        </table>

        <div class="centeredDiv">
          <button data-v-ac6c9106="" class="form_commit" @click="saveLevelAgency()" v-if="radiodata == '2'">{{$L.t('bonusGame.NiuNiuBetManage.zh14')}}</button>
          <button data-v-ac6c9106="" class="form_commit" @click="saveAgency()" v-if="radiodata == '1'">{{$L.t('bonusGame.NiuNiuBetManage.zh14')}}</button>
          <button data-v-ac6c9106="" class="form_commit" @click="settingAgency=!settingAgency">{{$L.t('cancel')}}</button>
        </div>

      </div>
    </el-dialog>

    <!-- DGG弹窗 -->
    <el-dialog
      :title="$L.t('bonusGame.NiuNiuBetManage.zh29')"
      :visible.sync="projectVisible"
      width="860px"
      >
      <div class="orderDetail_container">
        <table class="table">
          <tr class="head">
            <td>{{$L.t('bonusGame.NiuNiuBetManage.zh1')}}</td>
            <td>{{$L.t('bonusGame.MoneyQuery.zh35')}}</td>
            <td>{{$L.t('bonusGame.NiuNiuBetManage.zh30')}}(%)</td>
            <!-- <td>最高投注</td>
            <td>最低投注</td> -->
            <td>{{$L.t('table.handle')}}</td>
          </tr>
          <tr class="odds" v-for="(item, index) in electronicGame.datatDggGameList.data.data" :key="index">
            <td>{{item.name}}</td>
            <td>{{item.multiple}}</td>
            <td>{{item.gl}}</td>
            <!-- <td>{{item.maxCount}}</td>
            <td>{{item.minCount}}</td> -->
            <td><button class="popBtn" @click="editInfoClick(item)">{{$L.t('fixed')}}</button></td>
          </tr>
          <tr v-if="getPageDgg.sum>0">
            <td colspan="9">
              <page-limit :pageData="getPageDgg" :inputShow="'1'" @handlePage="handlePageDgg"></page-limit>
            </td>
          </tr>
          <tr v-if="!electronicGame.datatDggGameList.data.data">
            <td colspan="9" style="text-align: center;">{{$L.t('noData')}}</td>
          </tr>
        </table>
      </div>
    </el-dialog>


    <!-- DGG玩法修改 -->
    <el-dialog
      :title="$L.t('bonusGame.MoneyQuery.zh31')"
      :visible.sync="editInfoVisible"
      width="700px">
      <div v-if="editInfoVisible" class="form_container">
        <div class="formBox_title"> {{$L.t('agent.agent_0.alert')}}</div>
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('bonusGame.MoneyQuery.zh35')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="setPlayMessage.multiple" :placeholder="$L.t('bonusGame.NiuNiuBetManage.zh32')" disabled="disabled">
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('bonusGame.NiuNiuBetManage.zh30')}}(%)
            </div>
            <div class="formLi_content">
              <input type="number" v-model="setPlayMessage.probability" :placeholder="$L.t('bonusGame.NiuNiuBetManage.zh33')">
            </div>
          </li>
          <!-- <li>
            <div class="formLi_title">
              最高投注
            </div>
            <div class="formLi_content">
              <input type="number" v-model="setPlayMessage.maxCount" placeholder="请输入最高投注">
            </div>
          </li>
          <li>
            <div class="formLi_title">
              最低投注
            </div>
            <div class="formLi_content">
              <input type="number" v-model="setPlayMessage.minCount" placeholder="请输入最低投注">
            </div>
          </li> -->
          <li>
            <button class="form_commit" @click="saveLotteryPlay">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  import {getDate,setDate,copyobj,setSession,getSession,getchar,randomRange,getTimerAll} from '@/common/common'
  export default {
    data () {
      return {
        settingGame:false,
        settingAgency:false,
        days:0,
        sendParmas:{
          page:1,
          limit:'20',
          fromTime:'',
          toTime:'',
          name:"",
          class_id:"",
          agency_id:"",
          isTest:1
        },
        gameSetParmas: {
          class_id: '',
          agency_id: '',
          fromTime: '',
          toTime: '',
        },
        tempGame:{

        },
        tempAgency:{},

        tempFsConfig:{
          class_id:"",
          agency_id:"",
          info:{fs:"",fd:""},
          type:0
        },
        timer: {},
        // DGG
        projectVisible:false,
        editInfoVisible:false,
        setPlayMessage:{
          id:'',
          // maxCount:'',
          // minCount:'',
          multiple:'',
          probability:'',
        },
        dggid:'',
        dggData:{
          page:1,
          limit:'20',
          game_id:''
        },
        radiodata:"1",
        datalist:[],

        moneyGetList:[],
      }
    },
    created (){
      // 默认代理商id  合作商id 不变
      this.initAction()
    },
    methods: {
      ...mapMutations([

      ]),
      ...mapActions([
          "getChessGgameListAction",
          "chessGameEnableAction",
          "getChessgetAgencyAction",
          "saveAgencyConfigAction",
          "getDggGameList",
          "getSetDggGameList",
          "getGameEnableList",
          'getLevel'
      ]),
      // 初始化接口
      initAction(){
        this.timer = getTimerAll.getSelfMonth('time')
        this.sendParmas.class_id = this.gameSetParmas.class_id = this.$route.query.class_id;
        this.sendParmas.agency_id = this.gameSetParmas.agency_id = this.$route.params.id;
        // 默认时间不变  统一-
        this.sendParmas.fromTime = this.gameSetParmas.fromTime = this.timer.startTime
        this.sendParmas.toTime = this.gameSetParmas.toTime = this.timer.endTime

        this.tempFsConfig.class_id=this.$route.query.class_id;
        this.tempFsConfig.agency_id=this.$route.params.id;
        this.sendParmas.name="";
        this.getChessGgameListAction(this.sendParmas)
        this.getChessgetAgencyAction(this.gameSetParmas)
        // 初始化时间组件视图
        this.days = ''
        this.$nextTick(() => {
          this.selectDay(30)
        })
      },
      // 搜索
      submitQuery(){
        this.sendParmas.page = 1;
        this.gameSetParmas.isTest = this.sendParmas.isTest
        this.getChessGgameListAction(this.sendParmas)
        this.getChessgetAgencyAction(this.gameSetParmas)
      },
      /*set时间组件返回时间*/
      getTimer(start,end){
        this.sendParmas.fromTime = this.gameSetParmas.fromTime = start
        this.sendParmas.toTime = this.gameSetParmas.toTime = end
      },
      selectDay(d){
        this.days = d
      },

      settingGameEve(temp){
        this.settingGame=!this.settingGame;
        this.tempGame=copyobj(JSON,temp);
          // this.tempGame.hot = temp.hot
          // this.tempGame.state = temp.state

      },

      settingAgencyEve(temp){
          this.settingAgency=!this.settingAgency;
          this.tempAgency=copyobj(JSON,temp);
          this.tempFsConfig=copyobj(JSON,this.electronicGame.agencyConfig);

//        this.getLevel().then(res=>{
//          this.datalist = res.data.data
//        })

      },
      addAgencyConfig(){
        this.moneyGetList.push(
          {fs:"",fd:""}
        )
      },

      removeAgencyConfig(index){
          this.moneyGetList.splice(index,1);
      },
      //  等级保存
      saveLevelAgency(){
        var temp={};
        console.log(this.datalist)
        this.datalist.forEach((val,index,arr)=>{
          if(!isNaN(parseInt(val.fs)) && !isNaN(parseInt(val.fd))){
            temp[val.fs]=val.fd;
          }
        })

        this.datalist=JSON.stringify(temp);
        this.tempFsConfig.info = this.datalist
        this.tempFsConfig.status = 2
        this.saveAgencyConfigAction(this.tempFsConfig).then(()=>{
          this.settingAgency=false;
        })
      },
      saveAgency(){
        var temp={};

        this.moneyGetList.forEach((val,index,arr)=>{
          if(!isNaN(parseInt(val.fs)) && !isNaN(parseInt(val.fd)) && val.fs!=0 && val.fd!=0){
            temp[val.fs]=val.fd;
          }
        })

        this.moneyGetList=JSON.stringify(temp);
        this.tempFsConfig.info = this.moneyGetList
        this.tempFsConfig.status = 1
        this.saveAgencyConfigAction(this.tempFsConfig).then(()=>{
          this.settingAgency=false;
        })
      },
      saveGame(){
        let fwfReg = /^\d+$/
        if(this.sendParmas.agency_id*1 == 999){
          if(this.tempGame.winning_rate*1 >100){
            this.$message(this.$L.t('electronicGame.zh22'))
            return false
          }
          if(!fwfReg.test(this.tempGame.com_rate*1)){
            this.$message(this.$L.t('electronicGame.zh23'))
            return false
          }
          if(this.tempGame.com_rate*1 > 100){
            this.$message(this.$L.t('electronicGame.zh24'))
            return false
          }
          console.log(this.tempGame.com_rate)
          this.chessGameEnableAction({com_rate:this.tempGame.com_rate,hot:this.tempGame.hot,enable:this.tempGame.enable,id:this.tempGame.id,winning_rate:this.tempGame.winning_rate,callBack:()=>{
            this.settingGame=false;
            this.getChessGgameListAction(this.sendParmas);
          }});
        }else{
          this.chessGameEnableAction({hot:this.tempGame.hot,enable:this.tempGame.enable,id:this.tempGame.id,callBack:()=>{
            this.settingGame=false;
            this.getChessGgameListAction(this.sendParmas);
          }});
        }
      },



      // 分页组件返回的参数
      handlePage (data) {
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit

        //查询
        this.getChessGgameListAction(this.sendParmas)
        this.getChessgetAgencyAction(this.gameSetParmas)

      },
      handlePageDgg (data) {
        this.dggData.page = data.page
        this.dggData.limit = data.limit
        this.dggData.game_id = this.dggid.id
        this.getDggGameList(this.dggData)

      },

      getState(num){
        switch (num){
          case "1": return this.$L.t('bonusGame.NiuNiuBetManage.zh42');break;
          case "2": return this.$L.t('bonusGame.NiuNiuBetManage.zh43');break;
          case "3": return this.$L.t('close');break;
        }
      },

      getEnable(num){
        switch (num){
          case "1": return this.$L.t('annoucement.xttz_5.zh5');break;
          case "0": return this.$L.t('close');break;
        }
      },
      getHotState(num){
        switch (num){
          case "1": return this.$L.t('common.hot');break;
          case "0": return this.$L.t('common.normal');break;
        }
      },

      getPagetate(num){
        switch (num){
          case "0": return this.$L.t('common.tongyong');break;
          case "1": return this.$L.t('common.yidong');break;
          case "2": return "PC";break;
        }
      },
      // DGG游戏
      settingGameDGG(temp){
        this.dggid = temp
        this.projectVisible = true
        this.dggData.game_id = temp.id
        this.getDggGameList(this.dggData)
      },
      // 修改DGG游戏
      editInfoClick(item){
        this.editInfoVisible = true
        for (let k in this.setPlayMessage) {
          this.setPlayMessage[k] = item[k]
        }
        this.setPlayMessage.probability = item.gl
      },
      // 提交修改游戏设置
      saveLotteryPlay(){
        this.getSetDggGameList(this.setPlayMessage).then(res=>{
          this.editInfoVisible = false
          this.dggData.game_id = this.dggid.id
           this.getDggGameList(this.dggData)
        })
      }
    },

    components:{


    },

    computed: {
      ...mapState([
        "electronicGame",
      ]),



      /*传入 分页组件 参数*/
      getPageData () {
        return {
          page: this.sendParmas.page,
          limit: this.sendParmas.limit,
          sum: this.electronicGame.gameList.count || 0
        }
      },
      getPageDgg () {
        return {
          page: this.dggData.page,
          limit: this.dggData.limit,
          sum: this.electronicGame.datatDggGameList.data.count || 0
        }
      },

    },
    watch:{
      "$route":{
        handler:function(nv,ov){
          this.sendParmas.page=1;
          this.sendParmas.name = ''
          this.initAction();
        },
        deep: true
      },
      'electronicGame.agencyConfig'(data){
        this.radiodata = data.status
        if(data.status*1 == 1){
          this.moneyGetList = data.info
          let arrner = []
          for(let i=1;i < 21;i++){
            let obj = {
              fs: i,
              fd: '0'
            }
            arrner.push(obj)
          }
          this.datalist = arrner
        }else{
          this.datalist = data.info
          this.moneyGetList = []
        }
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .centeredDiv{
    padding: 8px;
    text-align: center;
  }
  .fsInfo{
    padding-left: 20px;
  }
  .head td, .head th{
    text-align: left;
  }
  .user_detail td input{
    margin: 0 10px;
  }

.orderDetail_container{
	height: 650px;
	overflow: auto;
	table{
		margin-top: 0;
	}
}
</style>
