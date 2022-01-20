<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
        <tr class="nav">
          <td>
            {{$L.t('member.info28')}}:
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
              <timer @sendTime="getTimer" :day="days"></timer>
              <div class="submitSeach">
                {{$L.t('table.username')}}:<input type="text" v-model="sendParmas.username">
              </div>
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
        <tr>
          <td colspan="18">
            <span color="red">{{$L.t('zhu')}}：{{memberStore.appScoreList.data.scoreRule || ''}}</span>
          </td>
        </tr>
        <tr class="head">
          <!-- <td>会员ID</td> -->
          <td>{{$L.t('table.username')}}</td>
          <td>{{$L.t('member.info25')}}</td>
          <td>{{$L.t('table.laiyuan')}}</td>
          <td>{{$L.t('member.info26')}}</td>
          <td>{{$L.t('financial.zh72')}}</td>
        </tr>
        <tr class="odd" v-for="(item,index) in memberStore.appScoreList.data.data">
          <!-- <td>{{item.uid}}</td> -->
          <td :class="{'color-red': item.usertype == 9}">{{item.userName}}</td>
          <td>{{item.scoreTotal}}</td>
          <td>
            <span v-if="item.type == 1">{{$L.t('chatRoom.zh82')}}</span>
            <span v-else-if="item.type == 2">{{$L.t('chatRoom.zh80')}}</span>
            <span v-else>{{$L.t('member.info27')}}</span>
          </td>
          <td>{{item.info}}<br></td>
          <td>{{item.actionTime | times}}</td>
        </tr>
        <tr v-if="getPageData.sum > 0">
          <td colspan="6">
            <page-limit :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
          </td>
        </tr>
        <tr v-if="getPageData.sum == 0">
          <td colspan="6" class="nodata">{{$L.t('noData')}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  import {getDate,setDate,copyobj,setSession,getSession,getchar,randomRange} from '@/common/common'
  export default {
    data () {
      return {
        sendParmas:{
          page:1,
          limit:'20',
          sum:'',
          fromTime:'',
          toTime:'',
          liqType:'',
          type:'',
          uid:'',
          username:''
        },
        days:'',
      }
    },
    created (){
      // this.sendParmas.fromTime = this.timeTool(new Date())
      this.getScoretotal(this.sendParmas)
    },
    methods: {
      ...mapMutations([

      ]),
      ...mapActions([
        "getScoretotal"
      ]),
      timeTool(d){
        var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        return datetime;
      },
      // 分页组件返回的参数
      handlePage (data) {
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit
        this.getScoretotal(this.sendParmas)
      },
      // 获取时间
      getTimer(start,end){
        this.sendParmas.fromTime = start
        this.sendParmas.toTime = end
      },
      selectDay(d){
        this.days = d
      },
      // 搜索
      seachCondition(){
        this.sendParmas.page = 1
        this.getScoretotal(this.sendParmas)
      }
    },
    components:{

    },
    computed: {
      ...mapState([
        "memberStore",
      ]),
      getPageData () {
        return {
          page: this.sendParmas.page,
          limit: this.sendParmas.limit,
          sum: this.memberStore.appScoreList.data.count || 0
        }
      }
    },
    filters:{
      times:function (t) {
        let date = new Date(t * 1000)
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
      }
    }
  }
</script>
<style lang="css" scoped>
table tr .odd:hover {
    background-color: #ccffcc;
}
.timeShow{
  display: flex;
}
.submitSeach{
  margin-left: 15px;
}
.submitSeach input{
  padding: 0 5px;
}
</style>
