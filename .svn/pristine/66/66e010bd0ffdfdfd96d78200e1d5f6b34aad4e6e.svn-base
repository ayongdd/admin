<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>
          <b style="color:red;">{{getName}}</b>{{$L.t('agent.agent_8.zh31')}}:
          <input type="button" :value="$L.t('today')" @click="selectDay(0)">
          <input type="button" :value="$L.t('yesterday')" @click="selectDay(1)">
          <input type="button" :value="$L.t('thisWeek')" @click="selectDay(6)">
          <input type="button" :value="$L.t('lastWeek')" @click="selectDay(14)">
          <input type="button" :value="$L.t('thisMonth')" @click="selectDay(30)">
          <input type="button" :value="$L.t('lastMonth')" @click="selectDay(60)">
          &nbsp; &nbsp; &nbsp;
          <span class="touzhu" @click="selectState('')" :class="{on:agentZxhyObj.paixu == ''}">
            {{$L.t('agent.agent_8.zh32')}}
          </span>
          <span class="touzhu" @click="selectState('coin')" :class="{on:agentZxhyObj.paixu == 'coin'}">
            {{$L.t('agent.agent_8.zh33')}}
          </span>
          <span class="touzhu" @click="selectState('fanDian')" :class="{on:agentZxhyObj.paixu == 'fanDian'}">
            {{$L.t('agent.agent_8.zh25')}}
          </span>
          <!--<span class="touzhu" @click="selectState('score')" :class="{on:agentZxhyObj.paixu == 'score'}">-->
            <!--积分累计-->
          <!--</span>-->
          <span class="touzhu" @click="selectState('zaixian')" :class="{on:agentZxhyObj.paixu == 'zaixian'}">
            {{$L.t('agent.agent_8.zh34')}}
          </span>
          <span class="touzhu" @click="selectState('sameip')" :class="{on:agentZxhyObj.paixu == 'sameip'}">
            {{$L.t('agent.agent_8.zh35')}}
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <div class="timeShow">
            <timer class="submitSeach" @sendTime="getTimer" :day="days" :paramTime="agentZxhyObj"></timer>
            <div>{{$L.t('agent.agent_8.zh28')}}：
              <input type="text" v-model="agentZxhyObj.username" :placeholder="$L.t('agent.agent_8.zh28')">
            </div>
            <!--<div class="submitSeach">状态类型-->
              <!--<select v-model="agentZxhyObj.type">-->
                <!--<option value="">所有状态</option>-->
                <!--<option  value="1">充值成功</option>-->
                <!--<option  value="2">充值失败</option>-->
                <!--<option  value="3">优惠赠送</option>-->
              <!--</select>-->
            <!--</div>-->
            <div class="submitSeach">
              <input type="submit" :value="$L.t('agent.agent_2.checked')" @click="searchZxhyFn()">
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
      <tr class="head">
        <td>{{$L.t('table.laiyuan')}}</td>
        <td>{{$L.t('table.type')}}</td>
        <!--<td>ID</td>-->
        <td>{{$L.t('table.username')}}</td>
        <th>{{$L.t('table.nikename')}}</th>
        <th>{{$L.t('table.name')}}</th>
        <th>{{$L.t('agent.agent_0.sj')}}</th>
        <th>{{$L.t('agent.agent_8.zh25')}}</th>
        <th>{{$L.t('table.yue')}}</th>
        <!--<th>打码</th>-->
        <!--<th>积分</th>-->
        <th>{{$L.t('agent.agent_8.zh39')}}</th>
        <th>{{$L.t('table.zYH')}}</th>
        <th>{{$L.t('agent.agent_8.zh40')}}</th>
        <th>{{$L.t('table.sjYK')}}</th>
        <th>{{$L.t('table.registerTime')}}</th>
        <th>{{$L.t('agent.agent_8.zh41')}}</th>
        <th>{{$L.t('table.status')}}</th>
        <th>{{$L.t('table.handle')}}</th>
      </tr>
      <tr class="odd" v-for="yh in agentStore.agentSubList.data.data">
        <td>{{sourceFilter(yh.source)}}</td>
        <td>{{typeFilter(yh.type)}}</td>
        <!--<td>{{yh.uid}}</td>-->
        <td>{{yh.username}}</td>
        <td>{{yh.nickname}}</td>
        <td>{{yh.bankName || ''}}</td>
        <td>{{yh.parentName}}</td>
        <td>{{yh.fanDian}}</td>
        <td>{{yh.coin}}</td>
        <!--<td>{{yh.xm_coin}}</td>-->
        <!--<td>{{yh.score}}</td>-->
        <td>{{yh.rechargeAmount}}</td>
        <td>{{yh.discount}}</td>
        <td>{{yh.cashAmount}}</td>
        <td>{{yh.yingkui}}</td>
        <td>{{getTimes(yh.regTime)}}</td>
        <td>{{loginFilter(yh.lastLoginFrom)}}</td>
        <td>{{yh.line*1 == 1 ? $L.t('agent.agent_8.zh36') : $L.t('agent.agent_8.zh37')}}</td>
        <td><button @click="setUserDetail(yh.username)">{{$L.t('agent.agent_0.checked')}}</button></td>
      </tr>
      <tr v-if="getZxhyPageData.sum > 0">
        <td colspan="18">
          <page-limit :pageData="getZxhyPageData" :inputShow="'1'" @handlePage="zxhyPageFn"></page-limit>
        </td>
      </tr>
      <tr v-if="!agentStore.agentSubList.data.data">
        <td colspan="18" class="nodata">{{$L.t('noData')}}</td>
      </tr>
      </tbody>
    </table>
    <div class="userInfo-model" v-if="userVisible">
      <div class="userModel-bg" @click="userVisible = false"></div>
      <div class="userModel-content">
        <div class="userModel-title">
          <span>{{$L.t('agent.agent_8.zh38')}}</span>
          <!-- <span class="close-span">x</span> -->
          <i class="close-span" @click="userVisible = false"></i>
        </div>
        <hygl_3 :allUserName="checkName"></hygl_3>
      </div>
    </div>
  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  import {getTimes} from '../../common/common'
  export default {
    props: ['paramsData'],
    data () {
      return {
        days:'',
        startTime:'',
        endTime:'',
        getName:'',
        agentZxhyObj:{
          fromTime:"",
          toTime:'',
          page:1,
          limit:20,
          username:'',
          type:'',
          uid:'',
          paixu:"zaixian",
        },
        userVisible:false,
        checkName:'',
        getTimes
      }
    },
    created (){
      this.getName = this.paramsData.name
      this.agentZxhyObj.uid = this.paramsData.uid
      this.agentZxhyObj.fromTime = this.paramsData.startTime
      this.agentZxhyObj.toTime = this.paramsData.endTime
      if(this.paramsData.from*1 == 1){
        this.agentZxhyObj.paixu = ""
        this.agentZxhyObj.type = 5
        this.getListSubUserTodayLogin(this.agentZxhyObj)
      }else{
        this.agentZxhyObj.type = 4
        this.getAgentSub(this.agentZxhyObj)
      }

    },
    mounted(){

    },
    methods: {
      ...mapMutations([

      ]),

      ...mapActions([
        "getAgentSub",
        "getListSubUserTodayLogin"
      ]),
      selectState(state){
        this.agentZxhyObj.paixu = state
        this.agentZxhyObj.fromTime = this.startTime || this.paramsData.startTime
        this.agentZxhyObj.toTime = this.endTime || this.paramsData.endTime
        if(this.paramsData.from*1 == 1){
          this.getListSubUserTodayLogin(this.agentZxhyObj)
        }else{
          this.getAgentSub(this.agentZxhyObj)
        }
      },
      searchZxhyFn(){
        // this.agentZxhyObj.page = 1
        // this.agentZxhyObj.limit = 20
        this.agentZxhyObj.fromTime = this.startTime || this.paramsData.startTime
        this.agentZxhyObj.toTime = this.endTime || this.paramsData.endTime
        if(this.paramsData.from*1 == 1){
          this.getListSubUserTodayLogin(this.agentZxhyObj)
        }else{
          this.getAgentSub(this.agentZxhyObj)
        }
      },
      zxhyPageFn(data){
        this.agentZxhyObj.fromTime = this.startTime || this.paramsData.startTime
        this.agentZxhyObj.toTime = this.endTime || this.paramsData.endTime
        this.agentZxhyObj.page = data.page
        this.agentZxhyObj.limit = data.limit
        if(this.paramsData.from*1 == 1){
          this.getListSubUserTodayLogin(this.agentZxhyObj)
        }else{
          this.getAgentSub(this.agentZxhyObj)
        }
      },
      setUserDetail(name){
        this.checkName = name
        this.userVisible = true
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
      sourceFilter(val){
        let txt = '';
        switch (val*1){
          case 1 : return txt = this.$L.t('agent.agent_7.tg');break;
          case 2 : return txt = this.$L.t('agent.agent_7.ht');break;
          case 3 : return txt = this.$L.t('agent.agent_7.zwzc');break;
        }
      },
      typeFilter(val){
        let txt = '';
        switch (val*1){
          case 0 : return txt = this.$L.t('agent.agent_0.huiy');break;
          case 1 : return txt = this.$L.t('agent.agent_0.dl');break;
          case 9 : return txt = this.$L.t('agent.agent_7.csh');break;
        }
      },
      loginFilter(val){
        let txt = '';
        switch (val*1){
          case 1 : return txt = this.$L.t('agent.agent_2.PC');break;
          case 2 : return txt = this.$L.t('agent.agent_2.Mobile');break;
          case 3 : return txt = this.$L.t('agent.agent_2.IOS');break;
          case 4 : return txt = this.$L.t('agent.agent_2.Android');break;
          default: return 'noData'
        }
      }
    },
    components:{

    },
    computed: {
      ...mapState([
        "agentStore",
      ]),
      getZxhyPageData(){
        return {
          page: this.agentZxhyObj.page,
          limit: this.agentZxhyObj.limit,
          sum: this.agentStore.agentSubList.data.count || 0
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
  }
  .clearfloat .touzhu.on{
    color:red;
  }
</style>
