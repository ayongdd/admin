<template>
    <div class="container">
      <table class="table clearfloat" id="search">
        <tbody>
          <!--<tr class="nav">-->
            <!--<td>-->
              <!--操作日志&nbsp;&nbsp;&nbsp;&nbsp;快捷选时:-->
              <!--<input type="button" value="今天" @click="selectDay(0)">-->
              <!--<input type="button" value="昨天" @click="selectDay(1)">-->
              <!--<input type="button" value="本周" @click="selectDay(6)">-->
              <!--<input type="button" value="上周" @click="selectDay(14)">-->
              <!--<input type="button" value="本月" @click="selectDay(30)">-->
              <!--<input type="button" value="上月" @click="selectDay(60)">-->
            <!--</td>-->
          <!--</tr>-->
          <tr>
            <td>
              <div class="timeShow">
                <!--<timer class="submitSeach" @sendTime="getTimer" :day="days"></timer>-->



                <span class="manager_title"> {{$L.t('member.log_12.info1')}} </span>

                <!--<span class="manager_title"> 类型 </span>-->
                <select v-model="sendParmas.status">
                  <option value="">{{$L.t('agent.agent_2.all')}}</option>
                  <!--<option v-for="(item,index) in managerStore.userTypeList.data" :value="index">{{item}}</option>-->
                  <!--<option v-for="(item,index) in managerStore.userTypeList.data" :value="index">{{item}}</option>-->
                  <!--<option v-for="(item,index) in managerStore.userTypeList.data" :value="index">{{item}}</option>-->
                  <option :value="1"> > </option>
                  <option :value="2"> = </option>
                  <option :value="3"> < </option>
                </select>

                <input type="number" style="width: 100px" v-model="sendParmas.loginNumber">

                <span class="manager_title"> {{$L.t('member.log_12.info2')}} </span>
                <input type="text" style="width: 100px" v-model="sendParmas.loginName">

                <span class="manager_title"> {{$L.t('member.log_12.info3')}} </span>
                <input type="text" style="width: 100px" v-model="sendParmas.loginIp">

                <!--<span class="manager_title"> 操作描述 </span>-->
                <!--<input type="text" style="width: 100px" v-model="sendParmas.describe">-->



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
            <th>{{$L.t('member.log_12.info4')}}</th>
            <th>{{$L.t('member.log_12.info5')}}</th>
            <th>ip</th>

            <th>{{$L.t('table.handle')}}</th>
          </tr>
          <tr class="odd" v-for="(item,index) in managerStore.useBlacklist.data.data">
            <td>{{item.country}}</td>
            <td>{{item.errorNumber}}</td>
            <td>{{item.ip}}</td>

            <td>
              <button  @click="checkDetail(item)">{{$L.t('agent.agent_8.zh57')}}</button>
            </td>
          </tr>
          <tr v-if="getPageData.sum>0">
            <td colspan="11">
              <page-limit :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
            </td>
          </tr>
          <tr v-if="!managerStore.useBlacklist.data.data">
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
          <table class="table" >
            <tbody>
              <tr class="log-title">
                <td colspan="1">{{$L.t('member.log_12.info6')}}</td>
                <td colspan="1">ip</td>
                <td colspan="1">{{$L.t('table.handle')}}</td>
              </tr>
              <tr v-for="(item,index) in infoObj" :key="index">
                <td class="datalog-content">{{item.username}}</td>
                <td class="datalog-content">{{item.ip}}</td>
                <td class="datalog-content"><button @click="deleteRecord(item)">{{$L.t('member.log_12.info7')}}</button></td>
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
    import {Message,confirm} from 'element-ui'
    export default {
      data () {
        return {
          tsVisible:false,
          sendParmas:{
            page:1,
            limit:20,
            sum:'',
            fromTime:'',
            toTime:'',
            loginNumber:"",
            loginName:"",
            loginIp:"",
            status:"",
          },
          infoObj:[],
          days:'',
          dataList:{}
        }
      },
      created (){
        this.getUseBlacklist(this.sendParmas)
        this.getUserTypeList()
      },
      mounted(){

      },
      methods: {
        ...mapMutations([

        ]),

        ...mapActions([
          "getUseBlacklist",
          "getUserTypeList",
          "getAdminOptionDetail",
          "deleteRecordAction"
        ]),
        timeTool(d){
          var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
          return datetime;
        },
        // 分页组件返回的参数
        handlePage (data) {
          this.sendParmas.page = data.page
          this.sendParmas.limit = data.limit
          this.getUseBlacklist(this.sendParmas)
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
          this.getUseBlacklist(this.sendParmas)
        },
        // 只看此人
        CheckYour(username){
          this.sendParmas.username = username
          this.getUseBlacklist(this.sendParmas)
        },
        // 查看详情
        checkDetail(temp){
          this.tsVisible = true
          this.infoObj=temp.members;
        },

        deleteRecord(data) {

          this.$confirm(this.$L.t('member.log_12.info8'), this.$L.t('member.log_12.info9'), {
            distinguishCancelAndClose: true,
            confirmButtonText: this.$L.t('member.log_12.info10'),
            cancelButtonText: this.$L.t('member.log_12.info11')
          })
            .then(() => {
              this.deleteRecordAction({ip: data.ip, username: data.username}).then(res => {
                if (res.code == 0) {
                  Message({
                    message: res.message,
                    type: "success",
                    showClose: true
                  })
                  this.tsVisible = false
                  this.getUseBlacklist(this.sendParmas)
                  return false
                }
                if (res.code == 2) {
                  Message({
                    message: res.message,
                    type: "error",
                    showClose: true
                  })
                }
              })
              // this.$message({
              //   type: 'info',
              //   message: '保存修改'
              // });
            })
            .catch(action => {
              // this.$message({
              //   type: 'info',
              //   message: action === 'cancel'
              //     ? '放弃保存并离开页面'
              //     : '停留在当前页面'
              // })
            });

          return;

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
            sum: this.managerStore.useBlacklist.data.count
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
