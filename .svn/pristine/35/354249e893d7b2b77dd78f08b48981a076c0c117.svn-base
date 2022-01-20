<template>
  <div class="container">




    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>
          <!-- {{electronicGame.agency.name}} 注单管理 -->
          {{$route.query.title}}
          &nbsp;&nbsp;&nbsp;&nbsp;{{$L.t('agent.agent_8.zh51')}}:
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

            <li class="keyValue">{{$L.t('table.game')}}::<select name="searchKey" id="searchKey" @change="submitQuery()" v-model="sendParmas.game_id">
              <option value="" >{{$L.t('agent.agent_8.zh49')}}</option>
              <option :value="key" v-for="(i,key,index) in electronicGame.gameListKey.data">{{i}}</option>
            </select>
            </li>

            <li class="keyValue">
              {{$L.t('table.username')}}::
              <input type="text" @change="submitQuery()" name="searchVal" id="searchVal" value="" v-model="sendParmas.username">
            </li>
            <li class="keyValue">
              {{$L.t('bonusGame.MoneyQuery.zh2')}}:
              <select v-model="sendParmas.isTest">
                <option value="1">{{$L.t('bonusGame.MoneyQuery.zh3')}}</option>
                <option value="0">{{$L.t('bonusGame.MoneyQuery.zh4')}}</option>
              </select>
            </li>
            <div class="submitSeach" @click="submitQuery()">
              <input type="submit" :value="$L.t('submit')">
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>



    <table class="table">
      <tbody>
      <tr class="head">

        <th height="25">{{$L.t('table.username')}}</th>
        <th >{{$L.t('bonusGame.MoneyQuery.zh7')}}</th>
        <!-- <th >类名</th> -->
        <th >{{$L.t('bonusGame.MoneyQuery.zh9')}}</th>
        <!-- <th >id</th> -->
        <!-- <th >房间号</th> -->
        <th >{{$L.t('common.zongxiazhu')}}</th>
        <th >{{$L.t('common.yxxiazhu')}}</th>
        <th >{{$L.t('agent.agent_8.zh54')}}</th>
        <th >{{$L.t('agent.agent_8.zh55')}}</th>
        <th >{{$L.t('electronicGame.zh1')}}</th>
        <th >{{$L.t('electronicGame.zh2')}}</th>
        <th >{{$L.t('electronicGame.zh3')}}</th>
        <th >{{$L.t('electronicGame.zh4')}}</th>
      </tr>

      <tr v-for="(i,index) in electronicGame.ChessgameLog.data">

        <td :class="{'color-red': i.usertype == 9}">{{i.username}}</td>
        <td>{{i.agency_name}}</td>
        <!-- <td>{{i.class_name}}</td> -->
        <td>{{i.game_name}}</td>
        <!-- <td>{{i.id}}</td> -->
        <!-- <td>{{i.GameID}}</td> -->
        <td>{{i.AllBet}}</td>
        <td>{{i.CellScore}}</td>
        <td>{{i.Profit}}</td>
        <td>{{i.Revenue}}</td>
        <td>{{i.RecordID}}</td>
        <td>{{getTimes(i.GameStartTime)}}</td>
        <td>{{getTimes(i.GameEndTime)}}</td>
        <th>
          <button v-if="i.CardValue*1 == 1" @click="openDetailUrl(i)">{{$L.t('check')}}</button>
          <span v-else>{{$L.t('bonusGame.MoneyQuery.zh21')}}</span>
        </th>
      </tr>


      <tr v-if="getPageData.sum>0">
        <td colspan="13">
          <page-limit  :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
        </td>
      </tr>

      <tr v-if="!electronicGame.ChessgameLog.data">
        <td colspan="13" class="nodata">
          {{$L.t('noData')}}
        </td>
      </tr>
      <tr v-if="electronicGame.ChessgameLog.data">
        <td colspan="13" class="nodata">
          {{$L.t('electronicGame.zh5')}}: <span style="color:red;">{{electronicGame.ChessgameLog.bestCount}}</span>
          {{$L.t('electronicGame.zh6')}}: <span style="color:red;">{{electronicGame.ChessgameLog.profitCount}}</span>
        </td>
      </tr>
      </tbody>
    </table>
    <el-dialog
      :title="$L.t('bonusGame.MoneyQuery.zh23')"
      :visible.sync="dggGameVisible"
      width="760px">
      <div class="dggGame_detail" v-if="dggGameVisible">
        <ul>
          <li class="detail_title">
            <div>{{$L.t('table.username')}}</div>
            <div>{{$L.t('bonusGame.MoneyQuery.zh9')}}</div>
          </li>
          <li class="detail_content">
            <div>{{dggGameInfo.username}}</div>
            <div>{{dggGameInfo.game_name}}</div>
          </li>
          <li class="detail_title">
            <div>{{$L.t('bonusGame.MoneyQuery.zh7')}}</div>
            <div>{{$L.t('bonusGame.MoneyQuery.zh8')}}</div>
          </li>
          <li class="detail_content">
            <div>{{dggGameInfo.agency_name}}</div>
            <div>{{dggGameInfo.class_name}}</div>
          </li>
          <li class="detail_title">
            <div>{{$L.t('common.zongxiazhu')}}</div>
            <div>{{$L.t('agent.agent_8.zh87')}}</div>
          </li>
          <li class="detail_content">
            <div>{{dggGame.CellScore || 0}}</div>
            <div :class="dggGame.Profit > 0 ? 'color-red': 'color-green'">{{dggGame.Profit || 0}}</div>
          </li>
          <li class="detail_title">
            <div>{{$L.t('electronicGame.zh2')}}</div>
            <div>{{$L.t('electronicGame.zh7')}}</div>
          </li>
          <li class="detail_content">
            <div>{{dggGame.GameStartTime || ''}}</div>
            <div>{{dggGame.LineCode || ''}}</div>
          </li>
          <li class="detail_title">
            <div>{{$L.t('table.betNumber')}}</div>
            <div>{{$L.t('table.betMoney')}}</div>
            <div>{{$L.t('agent.agent_8.zh54')}}</div>
          </li>
          <li
            class="detail_content"
            v-if="dggGame.data"
            v-for="(item, index) in dggGame.data"
            :key="index">
            <div>{{item.name}}</div>
            <div>{{item.bet}}</div>
            <div :class="item.zj > 0 ? 'color-red': 'color-green'">{{item.zj}}</div>
          </li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  import {getDate,setDate,copyobj,setSession,getSession,getchar,getTimes} from '@/common/common'
  export default {
    data () {
      return {
        getTimes,
        days: 0,
        sendParmas:{
          page:1,
          limit:'20',
          sum:100,
          fromTime:'',
          toTime:'',
          username:"",
          game_id:"",
          class_id:"",
          agency_id:"",
          isTest:1
        },
        dggGameInfo: {},
        dggGameVisible: false,
      }
    },
    created (){
      this.init();
    },
    methods: {
      ...mapMutations([

      ]),
      ...mapActions([
        "getChessgameLogAction",
        "get_game_listgAction",
        "see_game_details",
        "getGameWindow",
        "getGameDgg_Detail"
      ]),
      openDetailUrl(item){
//        this.see_game_details({id:id})
        if (item.agency_id >= 999){
          this.dggGameVisible = true
          this.dggGameInfo = item
          this.getGameDgg_Detail({id: item.id})
        } else {
          this.getGameWindow({id: item.id})
        }
      },
      init(){
        this.sendParmas.username="";
        this.sendParmas.page=1;
        this.sendParmas.class_id=this.$route.query.class_id;
        this.sendParmas.agency_id=this.$route.params.id;
        // 初始化时间  当天
//        this.selectDay(0)

        this.getChessgameLogAction(this.sendParmas);
        this.get_game_listgAction({
          class_id:this.$route.query.class_id,
          agency_id:this.$route.params.id
        });
      },

      getLocalTime(nS) {
        let sj = nS*1000
        return new Date(parseInt(sj)).toLocaleString().replace(/:\d{1,2}$/,' ');
      },
      /*set时间组件返回时间*/
      getTimer(start,end){
        this.sendParmas.fromTime = start
        this.sendParmas.toTime = end
        this.sendParmas.page=1;
      },

      selectDay(d){
        this.days = d
      },

      submitQuery(){
        this.sendParmas.page=1;
        this.getChessgameLogAction(this.sendParmas)
      },

      // 分页组件返回的参数
      handlePage (data) {
        this.sendParmas.page = data.page;
        this.sendParmas.limit = data.limit;
        //查询
        this.getChessgameLogAction(this.sendParmas);

      },


      getState(num){
        switch (num){
          case "1": return "正常";break;
          case "2": return "维护";break;
          case "3": return "关闭";break;
        }
      },

      getHotState(num){
        switch (num){
          case "1": return "热门";break;
          case "0": return "普通";break;
        }
      },

      getPagetate(num){
        switch (num){
          case "0": return "通用";break;
          case "1": return "移动";break;
          case "2": return "PC";break;
        }
      },

      times (date) {
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        let d = date.getDate() + ' ';
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return Y + M + d + ' ' + h + ':' + m + ':' + s;
      },

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
          sum: this.electronicGame.ChessgameLog.count

        }
      },
      dggGame () {
        return this.electronicGame.dggGame_Detail
      },
    },
    watch:{
      "$route":{
        handler:function(nv,ov){
          this.init();
        },
        deep: true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .head td, .head th{
    text-align: left;
  }

  /* 注单详情 */
  .dggGame_detail{
    height: 560px;
    padding: 0 10px 20px;
    overflow: auto;
    ul{
      // border: 1px solid #ccc;
      li{
        display: flex;
        align-items: center;
        &.detail_title > div{
          background: #c8dadf;
          color: #313F44;
          font-weight: bold;
        }
        div{
          flex: 1;
          text-align: center;
          background: #f6f6f6;
          line-height: 30px;
          border-left: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          &:last-child{
            border-right: 1px solid #ccc;
          }
        }
      }
    }
  }
</style>
