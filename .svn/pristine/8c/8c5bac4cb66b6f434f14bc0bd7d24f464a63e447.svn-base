<template>
    <div class="container">
        <table class="table clearfloat" id="search">
            <tbody>
              <tr class="nav">
                <td>{{$L.t('chatRoom.zh60')}}:
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
                    <div class="submitSeach">{{$L.t('table.username')}}
                      <input type="text" style="width: 140px" v-model="sendParmas.username">
                    </div>
                    <div class="submitSeach">{{$L.t('table.status')}}
                        <select v-model="sendParmas.state">
                          <option value="0">{{$L.t('agent.agent_8.zh49')}}</option>
                          <option value="1">{{$L.t('bonusGame.MoneyQuery.zh16')}}</option>
                          <option value="2">{{$L.t('bonusGame.MoneyQuery.zh17')}}</option>
                          <option value="3">{{$L.t('bonusGame.MoneyQuery.zh18')}}</option>
                          <option value="4">{{$L.t('bonusGame.MoneyQuery.zh19')}}</option>
                        </select>
                      </div>
                    <div class="submitSeach" @click="seachCondition()">
                      <input type="submit" :value="$L.t('submit')">
                    </div>
                    <div class="submitSeach" @click="retrunRed()">
                      <input type="submit" :value="$L.t('chatRoom.zh61')">
                    </div>
                    <div class="submitSeach" @click="openComputer">
                      <input type="submit" :value="$L.t('chatRoom.zh62')">
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
      <table class="table">
        <tbody>
          <tr class="head">
            <td>{{$L.t('table.username')}}</td>
            <td>{{$L.t('chatRoom.zh63')}}</td>
            <td>{{$L.t('chatRoom.zh64')}}</td>
            <td>{{$L.t('chatRoom.zh65')}}</td>
            <td>{{$L.t('chatRoom.zh66')}}</td>
            <td>{{$L.t('annoucement.xttz_5.zh3')}}</td>
            <td>{{$L.t('agent.agent_7.userType')}}</td>
            <td>{{$L.t('table.status')}}</td>
            <td>{{$L.t('table.handle')}}</td>
          </tr>
          <tr class="odd" v-for="item in chatStore.evelopesList.data.data">
            <td>{{item.username}}</td>
            <td>{{item.amount}}</td>
            <td>{{item.receive_amount}}</td>
            <td>{{item.count}}</td>
            <td>{{item.receive_count}}</td>
            <td>{{times(item.actionTime)}}</td>
            <td>
              <span v-if="item.type == 0">{{$L.t('agent.agent_0.huiy')}}</span>
              <span v-else-if="item.type == 1">{{$L.t('agent.agent_0.dl')}}</span>
              <span v-else>{{$L.t('agent.agent_7.csh')}}</span>
            </td>
            <td>
              <span v-if="item.state == 1">{{$L.t('bonusGame.MoneyQuery.zh16')}}</span>
              <span v-else-if="item.state == 2">{{$L.t('bonusGame.MoneyQuery.zh17')}}</span>
              <span v-else-if="item.state == 3">{{$L.t('bonusGame.MoneyQuery.zh18')}}</span>
              <span v-else>{{$L.t('bonusGame.MoneyQuery.zh19')}}</span>
            </td>
            <td>
              <span>
                <button class="popBtn" @click="noRoomuser(item.id)">{{$L.t('chatRoom.zh67')}}</button>
              </span>
            </td>
          </tr>
          <tr v-if="getPageData.sum>0">
            <td colspan="9">
              <page-limit :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
            </td>
          </tr>
          <tr v-if="!chatStore.evelopesList.data.data">
            <td colspan="9" class="nodata">{{$L.t('noData')}}</td>
          </tr>
        </tbody>
      </table>
      <!-- 红包领取记录 -->
      <el-dialog
      class="dialog_list"
        :title="$L.t('chatRoom.zh68')"
        :visible.sync="projectVisible"
        width="800px">
        <div v-if="projectVisible" class="project_container">
          <ul class="table_flex">
            <li class="tab_title">
              <div>{{$L.t('table.username')}}</div>
              <div>{{$L.t('table.type')}}</div>
              <div>{{$L.t('chatRoom.zh69')}}</div>
              <div>{{$L.t('bonusGame.MoneyQuery.zh36')}}</div>
            </li>
            <li v-for="(item, index) in chatStore.receiveList.data.data" :key="index">
              <div>
                {{item.username}}
              </div>
              <div>
                <span v-if="item.type == 0">{{$L.t('agent.agent_0.huiy')}}</span>
                <span v-else-if="item.type == 1">{{$L.t('agent.agent_0.dl')}}</span>
                <span v-else-if= "item.type == 9">{{$L.t('bonusGame.MoneyQuery.zh19')}}</span>
                <span v-else>{{$L.t('agent.agent_2.PC')}}</span>
              </div>
              <div>{{item.amount}}</div>
              <div>{{times(item.actionTime)}}</div>
            </li>
            <li class="chat_nodata" v-if="!chatStore.receiveList.data.data"><p>{{$L.t('noData')}}</p></li>
            <li>
              <page-limit v-if="getProjectData.sum > 0" class="model-page" :pageData="getProjectData" @handlePage="handleProjectPage"></page-limit>
            </li>
          </ul>
        </div>
      </el-dialog>
      <el-dialog
        :title="$L.t('chatRoom.zh70')"
        :visible.sync="computerRedState"
        width="1200px">
        <div class="computer_modal" v-if="computerRedState">
          <table class="table clearfloat">
            <tbody>
            <tr>
              <td>
                <div class="timeShow">
                  <timer class="submitSeach" @sendTime="getTimer" :day="days"></timer>
                  <div class="submitSeach">
                    <input type="submit" :value="$L.t('query')" @click="searchComputerFn">
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
          <table class="table">
            <tbody>
            <tr class="head">
              <td>{{$L.t('table.username')}}</td>
              <td>{{$L.t('chatRoom.zh71')}}</td>
              <td>{{$L.t('chatRoom.zh72')}}</td>
              <td>{{$L.t('chatRoom.zh73')}}</td>
              <td>{{$L.t('chatRoom.zh74')}}</td>
              <td>{{$L.t('chatRoom.zh75')}}</td>
              <td>{{$L.t('table.handle')}}</td>
            </tr>
            <tr class="odd" v-for="y in chatStore.computerRedSumList.data.data">
              <td>{{y.username}}</td>
              <td>{{y.allAmount}}</td>
              <td>{{y.count}}</td>
              <td>{{times(y.actionTime)}}</td>
              <td>{{y.countNum}}</td>
              <td>{{y.amount}}</td>
              <td style="color:red;">
                <button @click="noRoomuser(y.rid)">{{$L.t('chatRoom.zh67')}}</button>
              </td>
            </tr>
            <tr v-if="getComputerPage.sum > 0">
              <td colspan="8">
                <page-limit :pageData="getComputerPage" :inputShow="'1'" @handlePage="computerPageFn"></page-limit>
              </td>
            </tr>
            <tr v-if="chatStore.computerRedSumList.data.data">
              <td colspan="8" class="nodata" style="color:red">
                {{$L.t('chatRoom.zh63')}}: <span>{{chatStore.computerRedSumList.data.AllMoney}}</span> &nbsp; {{$L.t('chatRoom.zh76')}} : <span>{{chatStore.computerRedSumList.data.AllCount}}</span>
              </td>
            </tr>
            <tr v-if="!chatStore.computerRedSumList.data.data">
              <td colspan="8" class="nodata">
                {{$L.t('noData')}}
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </el-dialog>
    </div>
  </template>
  <script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  import {getSession} from '@/common/common'
      export default {
        data () {
          return {
            days:'',
            sendParmas:{
              page:1,
              limit:20,
              username:'',
              state:'0',
              formTime:'',
              toTime:'',
              sum:'',
            },
            projectParmas:{
              page:1,
              limit:20,
              id:''
            },
            projectVisible: false,
            computerRedState:false,
            computerObj:{
              page:1,
              limit:20,
              formTime:'',
              toTime:'',
            }
          }
        },
        created (){
          this.envelopesList(this.sendParmas)
        },
        methods: {
          ...mapMutations([
          ]),
          ...mapActions([
            "envelopesList",
            "getReceiveList",
            "returnList",
            "getComputerList"
          ]),
          getTimer(start, end){
            this.sendParmas.formTime = start
            this.sendParmas.toTime = end
            this.computerObj.formTime = start
            this.computerObj.toTime = end
          },
          // 搜索
          seachCondition(){
            this.sendParmas.page = 1
            this.envelopesList(this.sendParmas)
          },
          // 分页组件返回的参数
          handlePage (data) {
            this.sendParmas.page = data.page
            this.sendParmas.limit = data.limit
            this.envelopesList(this.sendParmas)
          },
          // 红包记录分页
          handleProjectPage (data) {
            this.projectParmas.page = data.page
            this.projectParmas.limit = data.limit
            this.getReceiveList(this.projectParmas)
          },
          // 红包领取记录
          noRoomuser(item){
            // this.projectParmas.page = 1
            // this.projectParmas.limit = 20
            this.projectVisible = true
            this.projectParmas.id = item
            this.getReceiveList(this.projectParmas)
          },
          // 手动退回红包
          retrunRed(){
            this.returnList()
          },
//          红包统计
          openComputer(){
            // this.computerObj.page = 1
            // this.computerObj.limit = 20
            this.computerObj.formTime = ''
            this.computerObj.toTime = ''
            this.computerRedState = true
            this.getComputerList(this.computerObj)
          },
          computerPageFn(data){
            this.computerObj.page = data.page
            this.computerObj.limit = data.limit
            this.getComputerList(this.computerObj)
          },
          searchComputerFn(){
            // this.computerObj.page = 1
            // this.computerObj.limit = 20
            this.getComputerList(this.computerObj)
          },
          times(t) {
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
          },
          selectDay(d){
            this.days = d
          },
        },
        computed: {
          ...mapState([
            "indexStore",
            "chatStore"
          ]),
          getPageData () {
            return {
              page: this.sendParmas.page,
              limit: this.sendParmas.limit,
              sum: this.chatStore.evelopesList.data.count
            }
          },
          // 返回当前页数红包领取记录
          getProjectData () {
            return {
              page: this.projectParmas.page,
              limit: this.projectParmas.limit,
              sum: this.chatStore.receiveList.data.count || 0
            }
          },
          getComputerPage(){
            return {
              page: this.computerObj.page,
              limit: this.computerObj.limit,
              sum: this.chatStore.computerRedSumList.data.count || 0
            }
          }
        },
      }
    </script>
  <style lang="less" scoped>
    .computer_modal {
      height: 600px;
      overflow: auto;
      padding: 10px;
    }
  .form_container{
    /* height: 350px; */
    padding: 10px;
    overflow: auto;
    // 头部
    .formBox_title{
      height: 30px;
      line-height: 30px;
      background: linear-gradient(left, #2DA4DD, #0E8CC7);
      font-size: 13px;
      color: #fff;
      padding-left: 5px;
      font-weight: bold;
    }
    ul{
      border: 1px solid #ccc;
      border-bottom: 0;
      li{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        padding: 4px 0;
        color: #000;
        input,select{
          height: 28px;
          line-height: 28px;
          padding:0 10px;
        }
        .formLi_title{
          width: 110px;
          padding-left: 5px;
          font-weight: bold;
          font-size: 14px;
        }
        .formLi_content{
          width: 300px;
          margin-right: 20px;
          input{
            width: 100%;
          }
          textarea{
          padding: 10px;
        }
        }
        .formLi_hint{
          font-size: 12px;
        }
        // 提交按钮
        .form_commit{
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          padding: 0 20px;
          text-align: center;
          // background: #EAEAEA;
          background: linear-gradient(to left, #efefef, #eee);
          border: 1px solid #aaa;
          margin: 2px auto;
        }
      }
    }
  }
  // 表格公共样式
.table_flex{
  border: 1px solid #ccc;
  border-bottom: 0;
  li{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    color: #000;
    background: #F2F2F2;
    &>div{
      flex: 1;
      font-size: 13px;
      padding: 5px 0px 5px 5px;
      border-right: 1px solid #ccc;
      &:last-child{
        border-right: 0;
      }
    }
    &.tab_title{
      background: #C8DADF;
      div{
        color: #444;
        font-weight: bold;
      }
    }
    &.table_total{
      padding: 5px 30px 5px;
      span{
        margin-left: 20px;
      }
    }
  }
}
.dialog_list .el-dialog .project_container{
  padding: 10px;
  height: 580px;
  overflow: auto;
}
.el-dialog{
  height: 500px;
}
    </style>
