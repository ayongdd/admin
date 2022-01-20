<template>
    <div class="container">
      <table class="table clearfloat" id="search">
        <tbody>
          <tr class="nav">
            <td>
              {{$L.t('manager.info42')}}:
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
                <span class="manager_title"> {{$L.t('manager.info43')}} </span>
                <input type="text" style="width: 100px" v-model="sendParmas.username">

                <span class="manager_title"> IP </span>
                <input type="text" style="width: 100px" v-model="sendParmas.ip">

                <span class="manager_title"> {{$L.t('manager.info44')}} </span>
                <input type="text" style="width: 100px" v-model="sendParmas.object">

                <span class="manager_title"> {{$L.t('manager.info45')}} </span>
                <input type="text" style="width: 100px" v-model="sendParmas.describe">

                <span class="manager_title"> {{$L.t('manager.info46')}} </span>
                <select v-model="sendParmas.type">
                  <option value="">{{$L.t('agent.agent_2.all')}}</option>
                  <option v-for="(item,index) in managerStore.dataTypeList.data" :value="index">{{item}}</option>
                </select>

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
          <tr class="head head_mage">
            <th>{{$L.t('table.username')}}</th>
            <th>{{$L.t('manager.info47')}}</th>
            <th>{{$L.t('manager.info3')}}</th>
            <th>{{$L.t('manager.info45')}}</th>
            <!-- <th>对应ID</th> -->
            <th>{{$L.t('manager.info44')}}</th>
            <th>{{$L.t('table.time')}}</th>
            <th>{{$L.t('table.handle')}}</th>
          </tr>
          <tr class="odd" v-for="(item,index) in managerStore.dataControlLog.data.data">
            <td>{{item.username}}</td>
            <td>{{item.type}}</td>
            <td>{{item.actionIP}}</td>
            <td>{{item.action}}</td>
            <!-- <td>{{item.id}}</td> -->
            <td>{{item.extfield1}}</td>
            <td>{{item.actionTime}}</td>
            <td>
              <button v-if='item.info == 1' @click="checkDetail(item.id)">{{$L.t('agent.agent_8.zh57')}}</button>
            </td>
          </tr>
          <tr v-if="getPageData.sum>0">
            <td colspan="11">
              <page-limit :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
            </td>
          </tr>
          <tr v-if="!managerStore.dataControlLog.data.data">
            <td colspan="11" class="nodata">{{$L.t('noData')}}</td>
          </tr>
        </tbody>
      </table>

      <el-dialog
        :title="$L.t('manager.info48')"
        :visible.sync="tsVisible"
        :modal-append-to-body="tsVisible"
        :append-to-body="tsVisible"
        :modal="tsVisible"
        width="820px">
        <div class="user_detail">
          <table class="table" v-if="dataList.update_Before">
            <tbody>
              <tr class="log-title">
                <td colspan="2">{{$L.t('manager.info49')}}</td>
              </tr>
              <tr v-for="(item,index) in dataList.update_Before" :key="index">
                <td class="datalog-name">{{index}}</td>
                <td class="datalog-content">{{item}}
                </td>
              </tr>
            </tbody>
          </table>
          <table class="table">
            <tbody>
              <tr class="log-title">
                <td colspan="2">{{$L.t('manager.info50')}}</td>
              </tr>
              <tr v-for="(item,index) in dataList.update_After" :key="index">
                <td class="datalog-name">{{index}}</td>
                <td class="datalog-content">
                  <div v-html="item"></div>
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
    import {getDate,setDate,copyobj,setSession,getSession,getchar,randomRange} from '@/common/common'
    import {Message} from 'element-ui'
    export default {
      data () {
        return {
          tsVisible:false,
          sendParmas:{
            page:1,
            limit:20,
            sum:'',
            username:'',
            ip:'',
            object:'',
            describe:'',
            type:'',
            fromTime:'',
            toTime:''
          },
          days:'',
          dataList:{}
        }
      },
      created (){
        this.getControlLog(this.sendParmas)
        this.getTypeList()
      },
      mounted(){

      },
      methods: {
        ...mapMutations([

        ]),

        ...mapActions([
          "getControlLog",
          "getTypeList",
          "getAdminOptionDetail"
        ]),
        timeTool(d){
          var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
          return datetime;
        },
        // 分页组件返回的参数
        handlePage (data) {
          this.sendParmas.page = data.page
          this.sendParmas.limit = data.limit
          this.getControlLog(this.sendParmas)
        },
          //      获取时间
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
          this.getControlLog(this.sendParmas)
        },
        // 只看此人
        CheckYour(username){
          this.sendParmas.username = username
          this.getControlLog(this.sendParmas)
        },
        // 查看详情
        checkDetail(id){
          this.getAdminOptionDetail({id:id}).then(res=>{
            if(res.code == 0){
              this.tsVisible = true
              this.dataList = res.data
              return false
            }
            if(res.code == 2){
               Message({
                message:res.message,
                type:"error",
                showClose:true
              })
            }
          })
        }

      },
      computed: {
        ...mapState([
          "managerStore"
        ]),
        getPageData () {
          return {
            page: this.sendParmas.page,
            limit: this.sendParmas.limit,
            sum: this.managerStore.dataControlLog.data.count
          }
        }
      },
    }
  </script>
  <style lang="less" scoped>
    .timeShow{
      align-items: center;
    }
    .manager_title{
      margin:0 10px;
    }
    .head_mage{
      text-align: left;
    }
    .user_detail{
      height: 580px;
      overflow: auto;
      padding: 5px;
      font-size:12px;
      table:first-child{
        margin-top: 0;
      }
      tr{
        // td:first-child{
        //   width: 200px;
        // }
        td{
          padding-left: 8px;
        }
      }
      .datalog-name{
        // width: 200px;
      }
      .datalog-content{
        // width: 200px;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        width:600px;
      }
    }
    .log-title{
      color: #313F44;
      font-weight: bold;
      background: #c8dadf;
    }
  </style>
