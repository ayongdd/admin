<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>
          <b style="color:red;">{{getName}}</b> {{$L.t('agent.agent_8.zh61')}}:
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
            <timer class="submitSeach" @sendTime="getTimer" :day="days" :paramTime="agentZcObj"></timer>
            <div> &nbsp;{{$L.t('agent.agent_7.sxtj')}}:
              <select v-model="selectKey" @change="myMsgChange($event)">
                <option value="username">{{$L.t('table.username')}}</option>
                <option value="name">{{$L.t('table.name')}}</option>
                <option value="qq">qq</option>
                <option value="mobile">{{$L.t('agent.agent_2.Mobile')}}</option>
                <option value="email">{{$L.t('agent.agent_7.email')}}</option>
                <option value="wechat">{{$L.t('agent.agent_7.wechat')}}</option>
                <option value="usertype">{{$L.t('agent.agent_7.userType')}}</option>
                <option value="parent">{{$L.t('agent.agent_7.dlm')}}</option>
                <!-- <option value="userlevelmin">层级小于</option> -->
                <!-- <option value="userlevelmax">层级大于</option> -->
                <option value="userfandianmin">{{$L.t('agent.agent_7.xiaoyu')}}</option>
                <option value="userfandianmax">{{$L.t('agent.agent_7.dayu')}}</option>
              </select>
            </div>
            <div>
            :<input type="text" style="display: inline-block;" :placeholder="$L.t('agent.agent_7.qsr') + selectInputText" v-model="selectInput" v-if="selectKey != 'usertype'">
              <select v-model="selectInput"  v-if="selectKey == 'usertype'">
                <option value="1">{{$L.t('agent.agent_0.huiy')}}</option>
                <option value="2">{{$L.t('agent.agent_0.dl')}}</option>
                <option value="3">{{$L.t('agent.agent_7.csh')}}</option>
              </select>
            </div>
            <!--<div class="submitSeach">上级-->
              <!--<input type="text"  placeholder="请输入上级代理名" v-model="agentZcObj.parent">-->
            <!--</div>-->
            <!--<div class="submitSeach">用户类型-->
              <!--<select v-model="agentZcObj.usertype">-->
                <!--<option value="0">会员</option>-->
                <!--<option value="2">代理</option>-->
                <!--<option value="3">测试号</option>-->
              <!--</select>-->
            <!--</div>-->
            <div class="submitSeach">{{$L.t('agent.agent_7.jqwt')}}
              <select v-model="agentZcObj.timeSlot">
                <option value="">{{$L.t('agent.agent_7.qxz')}}</option>
                <option value="1">{{$L.t('agent.agent_7.yzwt')}}</option>
                <option value="2">{{$L.t('agent.agent_7.bywt')}}</option>
                <option value="3">{{$L.t('agent.agent_7.yywt')}}</option>
                <option value="4">{{$L.t('agent.agent_7.bnwt')}}</option>
              </select>
            </div>
            <!--<div class="submitSeach">层级:-->
              <!--<input type="text" v-model="agentZcObj.userlevelmin"  class="filter"> -->
              <!-- - <input type="text" v-model="agentZcObj.userlevelmax" class="filter">-->
            <!--</div>-->
            <!--<div class="submitSeach">返点:-->
              <!--<input type="text" v-model="agentZcObj.userfandianmin"  class="filter"> - <input type="text" v-model="agentZcObj.userfandianmax"  class="filter">-->
            <!--</div>-->
            <!--<div class="submitSeach">余额排序:-->
              <!--<select v-model="agentZcObj.amountSort">-->
                <!--<option value="">请选择</option>-->
                <!--<option value="1">从大到小</option>-->
                <!--<option value="2">从小到大</option>-->
              <!--</select>-->
            <!--</div>-->
            <div class="submitSeach">
              <input type="submit" :value="$L.t('submit')" @click="searchMyDownFn()">
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <table class="table" style="margin-bottom:10px;">
      <tbody>
      <tr class="head">
        <!-- <td>编号</td> -->
        <td>{{$L.t('table.username')}}</td>
        <td>{{$L.t('table.name')}}</td>
        <td>{{$L.t('agent.agent_0.sj')}}</td>
        <!-- <td>层级</td> -->
        <th>{{$L.t('agent.agent_8.zh25')}}</th>
        <th>{{$L.t('table.type')}}</th>
        <th>{{$L.t('table.zcLY')}}</th>
        <th>{{$L.t('agent.agent_8.zh62')}}</th>
        <th>{{$L.t('agent.agent_8.zh63')}}</th>

        <th>{{$L.t('agent.agent_8.zh64')}}</th>
        <th>{{$L.t('agent.agent_8.zh65')}}</th>
        <th>
          {{$L.t('agent.agent_0.betPont')}}
             <div class="help-tip"><p>{{$L.t('agent.agent_8.zh66')}}</p></div>
        </th>

        <th>{{$L.t('table.zYH')}}</th>
        <th>{{$L.t('table.sjYK')}}
          <div class="help-tip"><p>{{$L.t('agent.agent_8.zh67')}}</p></div>
        </th>
        <!-- <th>余额</th> -->
        <!-- <th>状态</th> -->
        <th>{{$L.t('table.registerTime')}}</th>
        <!-- <th>登录来源</th> -->
        <th>{{$L.t('table.handle')}}</th>
      </tr>
      <tr class="odd" v-for="(i,index) in agentStore.members_subList.data.data">
        <!-- <td>{{index+1}}</td> -->
        <td>{{i.username}}</td>
        <td>{{i.name || ''}}</td>
        <td>{{i.parentName}}</td>
        <!-- <td>{{i.grade}}</td> -->
        <td>{{i.fanDian}}%</td>
        <td>{{typeFilter(i.type)}}</td>
        <td>{{sourceFilter(i.source)}}</td>
        <td>{{i.rechargeAmount}}</td>
        <td>{{i.cashAmount}}</td>
        <td>{{i.betAmount}}</td>
        <td>{{i.zjAmount}}</td>
        <td>{{i.ykAmount}}</td>





        <td>{{i.discount}}</td>
        <td>{{i.yingkui}}</td>
        <!-- <td>{{i.coin}}</td> -->
        <!-- <td :style="{color:i.line*1 == 1 ? 'red' : '#999'}">{{i.line*1 == 1 ? '在线' : '离线'}}</td> -->
        <td>{{getTimes(i.regTime)}}</td>
        <!-- <td>{{loginFilter(i.lastLoginFrom)}}</td> -->
        <td>
          <!--<button class="popBtn" @click="searchDownLevel(i.username)" v-if="i.lower_parent*1 != 0">下级</button>-->
          <button class="popBtn" @click="setUserDetail(i.username)">{{$L.t('agent.agent_0.checked')}}</button>
        </td>
      </tr>
      <tr v-if="getXjyhPage.sum > 0">
        <td colspan="20">
          <page-limit :pageData="getXjyhPage" :inputShow="'1'" @handlePage="xjyhzcPageFn"></page-limit>
        </td>
      </tr>
      <tr v-if="!agentStore.members_subList.data.data">
        <td colspan="20" class="nodata">{{$L.t('noData')}}</td>
      </tr>
      </tbody>
    </table>

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
        agentZcObj:{
          uid:'',
          page:1,
          limit:20,
          fromTime:'',
          toTime:'',
          timeSlot:'',
          type:6,
        },
        selectKey:'username',
        selectInput:'',
        selectInputText:this.$L.t('table.username'),
        userVisible:false,
        checkName:'',
        classObj:'',
        getTimes
      }
    },
    created (){
      // console.log(this.paramsData)
      this.getName = this.paramsData.name
      this.agentZcObj.uid = this.paramsData.uid
      this.agentZcObj.fromTime = this.paramsData.startTime
      this.agentZcObj.toTime = this.paramsData.endTime
      this.getMembers_sub(this.agentZcObj)
    },
    methods: {
      ...mapMutations([
        'setMemberVisible',
        'setMemberName'
      ]),
      ...mapActions([
        "getMembers_sub"
      ]),
      //  查看下级  <  阿杰去掉 >
      searchDownLevel(user){
        // if(this.classObj == ''){
          // this.classObj = this.agentZcObj
        // }
        // this.classObj.parent = user
        // this.agentZcObj.uid = ''
        this.agentZcObj.username = ''
        this.agentZcObj.parent = user
        this.agentZcObj.page = 1
        this.agentZcObj.limit = 20
        this.getMembers_sub(this.agentZcObj)
      },
      xjyhzcPageFn(data){
        this.agentZcObj.fromTime = this.startTime ||  this.paramsData.startTime;
        this.agentZcObj.toTime = this.endTime || this.paramsData.endTime;
        this.agentZcObj.page = data.page
        this.agentZcObj.type = 6
        this.agentZcObj.limit = data.limit
        this.getMembers_sub(this.agentZcObj)
      },
      searchMyDownFn(){
        this.agentZcObj.fromTime = this.startTime ||  this.paramsData.startTime;
        this.agentZcObj.toTime =  this.endTime || this.paramsData.endTime;
        let data = {
          uid: this.paramsData.uid,
          page: 1,
          limit: 20,
          fromTime:this.agentZcObj.fromTime ,
          toTime: this.agentZcObj.toTime,
          timeSlot:this.agentZcObj.timeSlot,
          type:6,
//          amountSort:this.agentZcObj.amountSort,
        }

        data[this.selectKey] = this.selectInput
        this.agentZcObj = data

        this.getMembers_sub(this.agentZcObj).then((res)=>{
          if(res.code == 0){
            this.selectInput = ''
          }
        })
      },
      getLocalTime(nS) {
        let sj = nS*1000
        return new Date(parseInt(sj)).toLocaleString().replace(/:\d{1,2}$/,' ');
      },
      setUserDetail(name){
        // this.checkName = name
        // this.userVisible = true
        this.setMemberVisible(true)
        this.setMemberName(name)
      },
      myMsgChange (event) {
        this.selectInput = ''
        let i =  event.target.selectedIndex
        let arr = event.target.textContent.split(" ")
        this.selectInputText =  arr[i]
        if(this.selectKey == 'usertype'){
          this.selectInput = 1
        }
      },
      selectDay(day){
        this.days = day
      },
      getTimer(start,end){
        this.startTime = start
        this.endTime = end
      },
      typeFilter(val){
        let txt = '';
        switch (val*1){
          case 0 : return txt = this.$L.t('agent.agent_0.huiy');break;
          case 1 : return txt = this.$L.t('agent.agent_0.dl');break;
          case 9 : return txt = this.$L.t('agent.agent_7.csh');break;
        }
      },
      sourceFilter(val){
        let txt = '';
        switch (val*1){
          case 1 : return txt = this.$L.t('agent.agent_7.tg');break;
          case 2 : return txt = this.$L.t('agent.agent_7.ht');break;
          case 3 : return txt = this.$L.t('agent.agent_7.zwzc');break;
        }
      },
      loginFilter(val){
        let txt = '';
        switch (val*1){
          case 1 : return txt = this.$L.t('agent.agent_2.PC');break;
          case 2 : return txt = this.$L.t('agent.agent_2.Mobile');break;
          case 3 : return txt = this.$L.t('agent.agent_2.IOS');break;
          case 4 : return txt = this.$L.t('agent.agent_2.Android');break;
        }
      }
    },
    components:{

    },
    computed: {
      ...mapState([
        "agentStore",
      ]),
      getXjyhPage(){
        return {
          page: this.agentZcObj.page,
          limit: this.agentZcObj.limit,
          sum: this.agentStore.members_subList.data.count || 0
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
  .table .head th,.table .head td{
    white-space: normal;
    line-height: 15px;
  }
</style>
