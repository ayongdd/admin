<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
        <tr class="nav">
          <td>
            {{$L.t('member.hyzjmx_4.info1')}}:
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
            <div class="header_search">
              <div class="header_search_list">
                <span>{{$L.t('table.time')}}: </span>
                <timer @sendTime="getTimer" :day="days"></timer>
                <div class="ser_list">
                  <span>{{$L.t('bonusGame.MoneyQuery.zh2')}}:</span>
                  <select v-model="sendParmas.userTypes">
                    <option value="0">{{$L.t('bonusGame.MoneyQuery.zh3')}}</option>
                    <option value="1">{{$L.t('bonusGame.MoneyQuery.zh4')}}</option>
                  </select>
                </div>
                <div class="ser_list">
                  <span>{{$L.t('common.xm')}}:</span>
                  <select v-model="sendParmas.appType">
                    <option v-for="(item,index) in moneyStore.actionSelect.data" :key="index" :value="item.id">
                      {{item.title}}
                    </option>
                  </select>
                </div>
                <div class="ser_list">
                  <span>{{$L.t('agent.agent_8.zh28')}}:</span>
                  <input type="text" v-model="sendParmas.username">
                </div>
              </div>
              <div class="header_search_list">
                <div class="ser_list">
                  <span>{{$L.t('table.type')}}:</span>
                  <label @click="chooseAll">
                    <input id="quan" type="checkbox" v-model="chooseAllData">
                    {{$L.t('agent.agent_1.allSelect')}}
                  </label>
                  <label v-for="(item, index) in showTypeList">
                    <input type="checkbox" :value="item.id" v-model="item.active">
                    {{item.title}}
                  </label>
                </div>
                <div class="submitSeach" @click="seachCondition()">
                  <input type="submit" :value="$L.t('submit')">
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
        <tr class="head">
          <td>{{$L.t('agent.agent_0.huiy')}}</td>
          <td>{{$L.t('chatRoom.zh69')}}</td>
          <td>{{$L.t('table.yue')}}</td>
          <td>{{$L.t('bonusGame.MoneyQuery.zh25')}}</td>
          <td>{{$L.t('common.xm')}}</td>
          <td>{{$L.t('table.type')}}</td>
          <td>{{$L.t('table.remark')}}</td>
          <td>{{$L.t('financial.zh32')}}</td>
          <td>{{$L.t('table.time')}}</td>
        </tr>
        <tr class="odd" v-for="(item,index) in moneyStore.showLogList.data.data">
          <td :class="{'color-red': item.usertype == 9}">{{item.username}}</td>
          <td :class="item.coin>0?'red':'lose'">
            {{item.coin}}
          </td>
          <td>{{item.userCoin}}</td>
          <td>{{item.fcoin}}</td>
          <td>{{item.type}}</td>
          <td>{{item.liqType}}</td>
          <td>{{item.info}}</td>
          <td>{{item.adminName? item.adminName :'-'}}</td>
          <td>{{item.actionTime}}</td>
        </tr>
        <tr v-if="getPageData.sum > 0">
          <td colspan="11">
            <span class="color-red">{{$L.t('common.total')}}: {{moneyStore.showLogList.data.allAmount}}</span>
          </td>
        </tr>
        <tr v-if="getPageData.sum > 0">
          <td colspan="11">
            <page-limit  :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
          </td>
        </tr>
        <tr v-if="getPageData.sum == 0">
          <td colspan="11" class="nodata">{{$L.t('noData')}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  import {getDate,setDate,copyobj,setSession,getSession,getchar,getTimes} from '@/common/common'
  export default {
    data () {
      return {
        sendParmas:{
          page:1,
          limit:'20',
          username: '',
          type: '',
          userTypes: 0,
          appType: 0,
          fromTime:'',
          toTime:'',
        },
        // 类型
        showTypeList: [
          {id: 1, title: this.$L.t('common.cz'), active: false},
          {id: 2, title:  this.$L.t('common.tx'), active: false},
          {id: 3, title:  this.$L.t('common.tzzz'), active: false},
          {id: 4, title:  this.$L.t('common.fanshui'), active: false},
          {id: 5, title:  this.$L.t('member.hyzjmx_4.info2'), active: false},
          {id: 6, title:  this.$L.t('common.caijin'), active: false},
          {id: 7, title:  this.$L.t('common.koukuan'), active: false},
          {id: 8, title:  this.$L.t('common.touzhu'), active: false},
          {id: 9, title:  this.$L.t('common.shangfen'), active: false},
          {id: 10, title: this.$L.t('common.youhui') , active: false},
          {id: 11, title:  this.$L.t('common.xiafen'), active: false},
          {id: 12, title:  this.$L.t('common.rukuan'), active: false},
          {id: 13, title:  this.$L.t('agent.agent_8.zh25'), active: false},
        ],
        days: '',
        chooseAllData:false,
        chooseData:[],
      }
    },
    watch: {
      // 监听单选时取消全选
			showTypeList: {
				handler(){
          for(let k in this.showTypeList){
            if(this.showTypeList[k].active == false){
              this.chooseAllData = false;
              break
            }else {
              this.chooseAllData = true;
            }
          }
				},
				deep: true
			}
		},
    created (){
      this.getShowLogList(this.sendParmas)
      this.getActionSelect()
    },
    methods: {
      ...mapActions([
        "getShowLogList",
        'getActionSelect',
      ]),
      // 返回类型名称
      // getTypeName (id) {
      //   let data = this.moneyStore.actionSelect.data
      //   for (let k in data) {
      //     if (id == data[k].id) {
      //       return data[k].title
      //     }
      //   }
      // },
      // 获得选择类型id
      getTypeId () {
        let list = this.showTypeList.filter(res => res.active).map(res => res.id)
        if (list.length == 0) {
          return ''
        }
        return list.join(',')
      },
      // 获取时间
      getTimer(start,end){
        this.sendParmas.fromTime = start
        this.sendParmas.toTime = end
      },
      selectDay(d){
        this.days = d
      },
      // 全选
      chooseAll(e){
        if(e.target.checked){
          for(let key in this.showTypeList){
            this.showTypeList[key].active = true
            this.chooseData.push(this.showTypeList[key].active);
          }
        }else{
          for(let key in this.showTypeList){
            this.showTypeList[key].active = false
            this.chooseData = []
          }
        }
      },
      // 搜索
      seachCondition(){
        this.sendParmas.page = 1
        this.sendParmas.type = this.getTypeId()
        this.getShowLogList(this.sendParmas)
      },
      // 分页组件返回的参数
      handlePage (data) {
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit
        this.getShowLogList(this.sendParmas)
      }
    },
    computed: {
      ...mapState([
        "memberStore",
        'moneyStore',
      ]),
      getPageData () {
        return {
          page: this.sendParmas.page,
          limit: this.sendParmas.limit,
          sum: this.moneyStore.showLogList.data.Count || 0
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
table tr .odd:hover {
  background-color: #ccffcc;
}
.header_search{
  display: flex;
  flex-direction: column;
  .header_search_list{
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    &>span{
      margin-left: 10px;
    }
    span{
      margin-right: 10px;
    }
    .ser_list{
      display: flex;
      align-items: center;
      margin-left: 10px;
      label{
        margin: 0 5px;
      }
    }
  }
}
</style>
