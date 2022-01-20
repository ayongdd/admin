<template>
    <div class="container">
      <table class="table clearfloat" id="search">
        <tbody>
          <tr class="nav">
            <td>
              {{$L.t('member.log_17.info1')}}:
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

                <!--登录时间-->
                <!--<timer class="submitSeach" @sendTime="getTimer" :day="days"></timer>-->
                <!--<span style="padding-left: 5px">  访问时间</span>-->
                <!--<timer class="submitSeach" @sendTime="getTimer2" :day="days"></timer>-->


                <span class="manager_title"> {{$L.t('member.log_11.info1')}} </span>
                <input type="text" style="width: 100px" v-model="sendParmas.username">

                <span class="manager_title"> {{$L.t('member.log_17.info2')}} </span>
                <input type="text" style="width: 100px" v-model="sendParmas.ipList">

                <!--<span class="manager_title"> 操作对象 </span>-->
                <!--<input type="text" style="width: 100px" v-model="sendParmas.object">-->

                <!--<span class="manager_title"> 操作描述 </span>-->
                <!--<input type="text" style="width: 100px" v-model="sendParmas.action">-->

                <!--<span class="manager_title"> 在线状态 </span>-->
                <!--<select v-model="sendParmas.isOnline">-->
                  <!--<option value="">所有</option>-->
                  <!--<option value="1">在线</option>-->
                  <!--<option value="0">离线</option>-->
                <!--</select>-->

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
            <th>ip</th>
            <th>{{$L.t('member.log_17.info3')}}</th>
            <th>{{$L.t('member.log_17.info4')}}</th>
            <th >{{$L.t('member.log_17.info5')}}</th>
            <th >{{$L.t('member.log_17.info6')}}</th>

            <th >{{$L.t('member.log_17.info7')}}</th>
            <th >{{$L.t('member.log_17.info8')}}</th>

            <th >{{$L.t('member.log_17.info9')}}</th>
            <th >{{$L.t('member.log_17.info8')}}</th>

            <th >{{$L.t('member.log_17.info10')}}</th>
            <th >{{$L.t('member.log_17.info8')}}</th>


          </tr>

          <tr class="odd" v-for="(item,index) in managerStore.ipRouter.data.data">
            <td>{{item.loginIP}}</td>
            <td align="left">{{item.total}}</td>
            <td>{{item.ipAddress}}</td>
            <td style="width: 300px;overflow: auto;word-wrap:break-word;word-break:break-all;">{{item.username}}</td>
            <td ><span v-for="(i,index) in item.registerMemberList">{{i}} <span v-if="index+1<item.registerMemberList.length" style="color:red">| </span></span></td>
            <td  colspan="2" style=" word-wrap:break-word;word-break:break-all;">
              <span>{{$L.t('member.log_17.info11')}}:<b>{{item.bets.betsCount || 0}}</b></span>
              <!--<br/>-->
              <!--<span>投注ip:<b>{{item.bets.actionIP || 0}}</b></span>-->
              <br/>
              <span>{{$L.t('table.betUser')}}:<b>{{item.bets.username || 0}}</b></span>
              <br/>
              <span>{{$L.t('table.betMoney')}}:<b>{{item.bets.beishu || 0}}</b></span>
              <br/>
              <span>{{$L.t('table.winMoney')}}:<b>{{item.bets.bonus || 0}}</b></span>
            </td>


            <td  colspan="2" style=" word-wrap:break-word;word-break:break-all;">
              <span>{{$L.t('member.info51')}}:<b>{{item.recharge.rechargeCount || 0}}</b></span>
              <!--<br/>-->
              <!--<span>充值ip:<b>{{item.recharge.actionIP || ""}}</b></span>-->
              <br/>
              <span>{{$L.t('member.info46')}}:<b>{{item.recharge.username || 0}}</b></span>
              <br/>
              <span>{{$L.t('member.log_17.info12')}}:<b>{{item.recharge.rechargeAmount || 0}}</b></span>
            </td>


            <td  colspan="2" style=" word-wrap:break-word;word-break:break-all;">
              <span>{{$L.t('member.log_17.info13')}}:<b>{{item.cash.cashCount || 0}}</b></span>
              <!--<br/>-->
              <!--<span>提现ip:<b>{{item.cash.actionIP || ""}}</b></span>-->
              <br/>
              <span>{{$L.t('member.log_17.info14')}}:<b>{{item.cash.username || 0}}</b></span>
              <br/>
              <span>{{$L.t('member.log_17.info15')}}:<b>{{item.cash.cashAmount || 0}}</b></span>

            </td>

          </tr>
          <tr v-if="getPageData.sum>0">
            <td colspan="11">
              <page-limit :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
            </td>
          </tr>
          <tr v-if="!managerStore.ipRouter.data.data">
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
            ipList:'',
            // loginIp:'',
            // isOnline:'',
            // // describe:'',
            // startTime:'',
            // endTime:'',
            // endAccessTime:'',
            // startAccessTime:'',
          },
          days:'',
          dataList:{}
        }
      },
      created (){
        this.getIpRouterAction(this.sendParmas)
        this.getUserTypeList()
      },
      mounted(){

      },
      methods: {
        ...mapMutations([

        ]),

        ...mapActions([
          "getIpRouterAction",
          "getUserTypeList",
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
          this.getIpRouterAction(this.sendParmas)
        },
          //      获取时间
        getTimer(start,end){
          this.sendParmas.startTime = start
          this.sendParmas.endTime = end
        },
        //      获取时间
        getTimer2(start,end){
          this.sendParmas.startAccessTime = start
          this.sendParmas.endAccessTime = end
        },
        selectDay(d){
          this.days = d
        },
        // 搜索
        seachCondition(){
          this.sendParmas.page = 1
          this.getIpRouterAction(this.sendParmas)
        },
        // 只看此人
        CheckYour(username){
          this.sendParmas.username = username
          this.getIpRouterAction(this.sendParmas)
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
            sum: this.managerStore.ipRouter.data.count
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
