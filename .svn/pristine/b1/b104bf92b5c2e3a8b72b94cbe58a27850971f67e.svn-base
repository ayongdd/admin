<template>
  <div class="distinct_container">
    <table class="table clearfloat">
      <tbody>
        <tr class="nav">
          <td>
            {{$L.t('common.zjTitle')}}:
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
                <timer @sendTime="getTimer" :day="days" :paramTime="showLogData"></timer>
                <div>
                  <span>{{$L.t('common.zh2')}}:</span>
                  <select v-model="showLogData.userTypes">
                    <option value="0">{{$L.t('bonusGame.MoneyQuery.zh3')}}</option>
                    <option value="1">{{$L.t('bonusGame.MoneyQuery.zh4')}}</option>
                  </select>
                </div>
                <div>
                  <span>{{$L.t('common.xm')}}:</span>
                  <select v-model="showLogData.appType">
                    <option v-for="(item,index) in moneyStore.actionSelect.data" :key="index" :value="item.id">
                      {{item.title}}
                    </option>
                  </select>
                </div>
                <div>
                  <span>{{$L.t('agent.agent_8.zh28')}}:</span>
                  <input type="text" v-model="showLogData.username">
                </div>
              </div>
              <div class="header_search_list">
                <div class="showType" v-if="typeData.discount != 1">
                  <span>{{$L.t('table.type')}}:</span>
                  <label @click="chooseAll">
                    <input type="checkbox" v-model="chooseAllData">{{$L.t('agent.agent_1.allSelect')}}
                  </label>
                  <label v-for="(item, index) in showTypeList">
                    <input type="checkbox" :value="item.id" v-model="item.active">
                    {{item.title}}
                  </label>
                </div>
                <div class="submitSeach" @click="logFormCommit()">
                  <input type="submit" :value="$L.t('submit')">
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="table_text">
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
            <td>{{$L.t('table.time')}}</td>
          </tr>
          <tr class="odd" v-for="(item, index) in moneyStore.showLogList.data.data" :key="index">
            <td :class="{'color-red': item.usertype == 9}">{{item.username}}</td>
            <td class="color-red">{{item.coin || 0}}</td>
            <td>{{item.userCoin || 0}}</td>
            <td class="color_green_c">{{item.fcoin || 0}}</td>
            <!--<td>{{getTypeName(item.type)}}</td>-->
            <td>{{item.type}}</td>
            <td>{{item.liqType}}</td>
            <td>{{item.info}}</td>
            <td>{{item.actionTime}}</td>
          </tr>
          <tr v-if="ShowlLogPageData.sum > 0">
            <td colspan="8">
              <span class="color-red">{{$L.t('common.total')}}: {{moneyStore.showLogList.data.allAmount}}</span>
            </td>
          </tr>
          <tr class="info_none" v-if="ShowlLogPageData.sum == 0">
            <td colspan="8">
              {{$L.t('noData')}}
            </td>
          </tr>
          <tr class="info_page" v-if="ShowlLogPageData.sum > 0">
            <td colspan="8">
              <page-limit :pageData="ShowlLogPageData" @handlePage="showLogPage"></page-limit>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  export default {
    props: ['typeData'],
    data () {
      return {
        // 资金流水
        showLogData: {
          page: 1,
          limit: 20,
          username: '',
          type: '',
          userTypes: 0,
          appType: 0,
          fromTime: '',
          toTime: '',
        },
        // 类型
        showTypeList: [
          {id: 1, title: this.$L.t('common.cz'), active: false},
          {id: 2, title: this.$L.t('common.tx'), active: false},
          {id: 3, title: this.$L.t('common.tzzz'), active: false},
          {id: 4, title: this.$L.t('common.fanshui'), active: false},
          {id: 5, title: this.$L.t('agent.agent_8.zh84'), active: false},
          {id: 15, title: this.$L.t('common.yxhb'), active: false},
          {id: 6, title: this.$L.t('common.caijin'), active: false},
          {id: 7, title: this.$L.t('common.koukuan'), active: false},
          {id: 8, title: this.$L.t('common.touzhu'), active: false},
          {id: 9, title: this.$L.t('common.shangfen'), active: false},
          {id: 10, title:this.$L.t('common.youhui') , active: false},
          {id: 11, title: this.$L.t('common.xiafen'), active: false},
          {id: 12, title: this.$L.t('common.rukuan'), active: false},
          {id: 13, title: this.$L.t('agent.agent_8.zh25'), active: false},
        ],
        days: '',
        chooseAllData:false
      }
    },
    created () {
      this.getActionSelect()
      // 根据传过来的类型给对应的类型改变状态
      // 若是 all 都全部选中
      let type = ''
      if (this.typeData.type == 'all') {
        for (let k in this.showTypeList) {
          this.showTypeList[k].active = true
        }
        type = this.getTypeId()
      }else if(this.typeData.type == 'alone'){//默认勾选彩金和反水
        this.showTypeList[3].active = true
        this.showTypeList[5].active = true
        this.showTypeList[9].active = true
        type = this.getTypeId()
      }else if(this.typeData.type == 1){//默认勾选充值和管理入款
        this.showTypeList[0].active = true
        this.showTypeList[11].active = true
        type = this.getTypeId()
      }else if(this.typeData.discount == 1){
        type = this.typeData.type
        this.showLogData.agent_uid = this.typeData.agent_uid || ''
      } else {
        for (let k in this.showTypeList) {
          if (this.typeData.type == this.showTypeList[k].id) {
            this.showTypeList[k].active = true
            type = this.typeData.type
          } else {
            this.showTypeList[k].active = false
          }
        }
      }
      this.showLogData.username = this.typeData.username || ''
      this.showLogData.type = type
      this.showLogData.fromTime = this.typeData.fromTime || ''
      this.showLogData.toTime = this.typeData.toTime || ''
      this.showLogData.isAgent = this.typeData.isAgent || '';
      this.getShowLogList(this.showLogData)
    },
    watch:{
      showTypeList:{
        handler(){
          for(let k in this.showTypeList){
            if(this.showTypeList[k].active == false){
                this.chooseAllData = false
                break
              }else{
                this.chooseAllData = true
            }
          }
        },
        deep:true
      }
    },
    methods: {
      ...mapActions([
        'getActionSelect',
        'getShowLogList',
      ]),
      // 全选
      chooseAll(e){
        if(e.target.checked){
          for(let key in this.showTypeList){
            this.showTypeList[key].active = true
          }
        }else{
          for(let key in this.showTypeList){
          this.showTypeList[key].active = false
          }
        }
      },
      // 返回类型名称
      getTypeName (id) {
        let data = this.moneyStore.actionSelect.data
        for (let k in data) {
          if (id == data[k].id) {
            return data[k].title
          }
        }
      },
      // 获得选择类型id
      getTypeId () {
        let list = this.showTypeList.filter(res => res.active).map(res => res.id)
        if (list.length == 0) {
          return ''
        }
        return list.join(',')
      },
      // 资金时间
      getTimer(start,end){
        this.showLogData.fromTime = start
        this.showLogData.toTime = end
      },
      // 快捷选时
      selectDay(d){
        this.days = d
      },
      // 提交搜索
      logFormCommit () {
        // 获取选中id 赋值
        this.showLogData.page = 1
        if(this.typeData.discount == 1){
         this.showLogData.type = this.typeData.type
         this.showLogData.agent_username = this.showLogData.username
         this.showLogData.username = ''
        }else{
          this.showLogData.type = this.getTypeId()
        }
        this.getShowLogList(this.showLogData)
      },
      // 分页
      showLogPage (data) {
        this.showLogData.page = data.page
        this.showLogData.limit = data.limit
        this.getShowLogList(this.showLogData)
      },
    },
    computed: {
      ...mapState([
        "moneyStore",
      ]),
      // 明细
      ShowlLogPageData () {
        return {
          page: this.showLogData.page,
          limit: this.showLogData.limit,
          sum: this.moneyStore.showLogList.data.Count || 0
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
// *{
//   -webkit-touch-callout: none;
//   -webkit-user-select: none;
//   -khtml-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
//   box-sizing: border-box;
// }
.info_none{
  td{
    text-align: center;
  }
}
.info_page{
  td{
    padding: 6px;
  }
}
// 明细
.distinct_container{
  color: #000;
  padding: 0 5px;
  overflow: hidden;
  .table{
    margin: 0 auto;
    width: 100%;
    margin-bottom: 5px;
    min-width: auto;
  }
  .table_text{
    height: 550px;
    overflow: auto;
    background: #fff;
    tr.odd>td{
      margin: 0;
      padding: 6px 4px;
      vertical-align: middle;
    }
  }
  // 搜索
  .header_search{
    padding:5px;
    .header_search_list{
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      &>div{
        display: flex;
        align-items: center;
        margin-right: 10px;
        span{
          margin-right: 5px;
        }
        &.showType{
          label{
            display: inline-flex;
            align-items: center;
            font-size: 12px;
            margin-right: 5px;
            line-height: 15px;
            input{
              margin-top: 2px;
              margin-right: 2px;
            }
          }
        }
      }
      .submitSeach{
        input{
          padding:2px 10px;
        }
      }
    }
  }
}
</style>
