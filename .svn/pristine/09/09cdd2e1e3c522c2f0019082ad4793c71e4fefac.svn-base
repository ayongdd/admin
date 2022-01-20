<template>
  <div class="container">

    <!--<table class="table clearfloat" id="search">-->
      <!--<tbody><tr class="nav">-->
        <!--<td>-->
          <!--BBIN电子 彩金查询&nbsp;&nbsp;&nbsp;&nbsp;快捷选时:<input type="button" value=" 今天 " onclick="changeTime('today')">-->
          <!--<input type="button" value=" 昨天 " onclick="changeTime('yes')">-->
          <!--<input type="button" value=" 本周 " onclick="changeTime('week')">-->
          <!--<input type="button" value=" 上周 " onclick="changeTime('preweek')">-->
          <!--<input type="button" value=" 本月 " onclick="changeTime('month')">-->
          <!--<input type="button" value=" 上月 " onclick="changeTime('premonth')">-->
        <!--</td>-->
      <!--</tr>-->
      <!--<tr>-->
        <!--<td>-->
          <!--<form method="GET" action="/bbin/jackpot">-->
            <!--<li>开始日期:<input type="text" name="startTime" id="startTime" placeholder="点击选择" value="2019-03-15" class="hasDatepicker"></li>-->
            <!--<li>结束日期:<input type="text" name="endTime" id="endTime" placeholder="点击选择" value="2019-03-15 23:59:59" class="hasDatepicker"></li>-->
            <!--<li class="keyValue">条件<select name="searchKey" id="searchKey"><option value="playerName">用户名</option><option value="mid">ID号</option><option value="BetId">交易单号</option></select>::</li><li class="keyValue"><input type="text" name="searchVal" id="searchVal" value=""></li>                <li><input type="submit" value=" 提 交  "></li>-->
          <!--</form>-->
        <!--</td>-->
      <!--</tr>-->
      <!--</tbody></table>-->


    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>
          {{$L.t('electronicGame.zh26')}}:
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

            <!--<div>帐变类型-->
            <!--<select v-model="sendParmas.liqType">-->
            <!--<option value="">所有</option>-->
            <!--<option v-for="(item,index) in memberStore.appCoinLogList.data.liqTypeName" :key="index" :value="index">{{item}}</option>-->
            <!--</select>-->
            <!--</div>-->
            <!--<div class="submitSeach">彩种限制-->
            <!--<select v-model="sendParmas.type">-->
            <!--<option value="">所有</option>-->
            <!--<option v-for="(item,index) in memberStore.appCoinLogList.data.types" :key="index" :value="item.id">{{item.title}}</option>-->
            <!--</select>-->
            <!--</div>-->

            <timer class="submitSeach" @sendTime="getTimer" :day="days"></timer>

            <li class="keyValue">{{$L.t('chessGame.zh3')}}<select name="searchKey" id="searchKey">
              <option value="playerName">{{$L.t('table.username')}}</option>
              <option value="mid">{{$L.t('chessGame.zh4')}}</option>
              <option value="betId">{{$L.t('chessGame.zh5')}}</option>
              <option value="mgsGameId">{{$L.t('chessGame.zh6')}}</option>
            </select>::
            </li>
            <li class="keyValue"><input type="text" name="searchVal" id="searchVal" value=""></li>


            <div class="submitSeach" @click="seachCondition()">
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
        <th height="25">{{$L.t('chessGame.zh7')}}</th>
        <th>{{$L.t('chessGame.zh5')}}</th>
        <th>{{$L.t('chessGame.zh4')}}</th>
        <th>{{$L.t('chessGame.zh26')}}</th>
        <th>{{$L.t('chessGame.zh25')}}</th>
      </tr>

      <tr class="pager">
        <td>2018-8-8</td>
        <td>{{$L.t('chessGame.zh5')}}</td>
        <td>{{$L.t('chessGame.zh4')}}</td>
        <td>{{$L.t('chessGame.zh26')}}</td>
        <td>{{$L.t('chessGame.zh25')}}</td>
      </tr>

      <tr class="pager"><td colspan="20">
        {{$L.t('noData')}}</td></tr>
      </tbody></table>


    <tr v-if="getPageData.sum>0">
      <td colspan="10">
        <page-limit  :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
      </td>
    </tr>
  </div>



</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  import {getDate,setDate,copyobj,setSession,getSession,getchar,randomRange} from '@/common/common'
  export default {
    data () {
      return {
        days:0,
        sendParmas:{
          page:1,
          limit:'20',
          sum:100,
          fromTime:'',
          toTime:'',
          liqType:'',
          type:'',
          uid:''
        },
      }
    },
    created (){


    },
    mounted(){

    },
    methods: {
      ...mapMutations([

      ]),

      ...mapActions([

      ]),




      /*set时间组件返回时间*/
      getTimer(start,end){
        this.sendParmas.fromTime = start
        this.sendParmas.toTime = end
      },

      selectDay(d){
        this.days = d
      },



      // 分页组件返回的参数
      handlePage (data) {
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit

        //查询
//        this.getCoinLog(this.sendParmas)

      },

    },
    components:{

    },
    computed: {
      ...mapState([
        "electronicGame",
      ]),


      getPageData () {
        return {
          page: this.sendParmas.page,
          limit: this.sendParmas.limit,
//        sum: this.memberStore.appCoinLogList.data.count
          sum: 100
        }
      },

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
</style>
