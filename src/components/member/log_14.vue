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
          <tr class="nav">
            <td>

              <input type="button" :value="$L.t('chatRoom.zh58')" @click="checkDetailAdd()">

            </td>
          </tr>
          <tr>
            <td>
              <div class="timeShow">
                <!--<timer class="submitSeach" @sendTime="getTimer" :day="days"></timer>-->
                <span class="manager_title"> {{$L.t('member.log_14.info1')}} </span>
                <input type="text" style="width: 100px" v-model="sendParmas.name">

                <!--<span class="manager_title"> IP </span>-->
                <!--<input type="text" style="width: 100px" v-model="sendParmas.ip">-->

                <!--<span class="manager_title"> 操作对象 </span>-->
                <!--<input type="text" style="width: 100px" v-model="sendParmas.object">-->

                <!--<span class="manager_title"> 操作描述 </span>-->
                <!--<input type="text" style="width: 100px" v-model="sendParmas.describe">-->

                <!--<span class="manager_title"> 分组类型 </span>-->
                <!--<select v-model="sendParmas.type">-->
                  <!--<option value="">所有</option>-->
                  <!--<option v-for="(item,index) in memberStore.userTypeList.data" :value="index">{{item}}</option>-->
                <!--</select>-->

                <div class="submitSeach" @click="seachCondition()">
                  <input type="submit" :value="$L.t('query')">
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table">
        <tbody>
          <tr class="head head_mage">
            <th>{{$L.t('member.log_14.info1')}}</th>
            <th>{{$L.t('member.log_14.info2')}}</th>
            <th>{{$L.t('table.handle')}}</th>
          </tr>
          <tr class="odd" v-for="(item,index) in memberStore.claslist.data.data">
          <!--<tr class="odd" v-for="(item,index) in 5">-->
            <td>{{item.name}}({{item.id}})</td>
            <td>{{item.order}}</td>
            <td>
              <button @click="checkDetailMod(item)">{{$L.t('manager.info21')}}</button>
              <button  @click="deleteUserClass(item.id)">{{$L.t('delete')}}</button>
            </td>
          </tr>
          <tr v-if="getPageData.sum>0">
            <td colspan="11">
              <page-limit :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
            </td>
          </tr>
          <tr v-if="!memberStore.claslist.data.data">
            <td colspan="11" class="nodata">{{$L.t('noData')}}</td>
          </tr>
        </tbody>
      </table>

      <el-dialog
        :title="$L.t('member.log_14.info3')"
        :visible.sync="tsVisibleAdd"
        :modal-append-to-body="tsVisibleAdd"
        :append-to-body="tsVisibleAdd"
        :modal="tsVisibleAdd"
        width="820px">
        <div class="user_detail">
          <table class="table">
            <tbody>
              <tr class="log-title">
                <td colspan="2"></td>
              </tr>
              <tr >
                <td class="datalog-name"><label>{{$L.t('member.log_14.info4')}}</label> </td>
                <td class="datalog-name"><input v-model="addUser.name" type="text"/> </td>
              </tr>
              <tr >
                <td class="datalog-name"><label>{{$L.t('member.log_14.info5')}}</label> </td>
                <td class="datalog-name"><input  v-model="addUser.order" type="number"/> </td>
              </tr>
            </tbody>
          </table>

          <div style="text-align: center; margin-top: 10px">
          <button class="form_commit" @click="formAddCommit()" style="padding: 0 8px">{{$L.t('bonusGame.NiuNiuBetManage.zh14')}}</button>

          <button class="form_commit" @click="tsVisibleAdd=false" style="padding: 0 8px">{{$L.t('cancel')}}</button>
          </div>
        </div>
      </el-dialog>

      <el-dialog
        :title="$L.t('member.log_14.info6')"
        :visible.sync="tsVisible"
        :modal-append-to-body="tsVisible"
        :append-to-body="tsVisible"
        :modal="tsVisible"
        width="820px">
        <div class="user_detail">
          <table class="table">
            <tbody>
            <tr class="log-title">
              <td colspan="2"></td>
            </tr>
            <tr >
              <td class="datalog-name"><label>{{$L.t('member.log_14.info4')}}</label> </td>
              <td class="datalog-name"><input v-model="editor.name" type="text"/> </td>
            </tr>
            <tr >
              <td class="datalog-name"><label>{{$L.t('member.log_14.info5')}}</label> </td>
              <td class="datalog-name"><input  v-model="editor.order" type="number"/> </td>
            </tr>
            </tbody>
          </table>

          <div style="text-align: center; margin-top: 10px">
            <button class="form_commit" @click="formModCommit()" style="padding: 0 8px">{{$L.t('bonusGame.NiuNiuBetManage.zh14')}}</button>

            <button class="form_commit" @click="tsVisible=false" style="padding: 0 8px">{{$L.t('cancel')}}</button>
          </div>
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
          tsVisibleAdd:false,
          sendParmas:{
            page:1,
            limit:20,
            sum:'',
            // username:'',
            // ip:'',
            // object:'',
            // describe:'',
            // type:'',
            // fromTime:'',
            // toTime:''
          },

          //新增模型
          addUser:{
            name:"",
            order:"",
          },
          modUser:{
            name:"",
            order:"",
            id:"",
          },
          editor:{
            name:"",
            order:"",
            id:"",
          },
          days:'',
          dataList:{}
        }
      },
      created (){
        this.getUseClaslist(this.sendParmas)
        this.getUserTypeList()
      },
      mounted(){

      },
      methods: {
        ...mapMutations([

        ]),

        ...mapActions([
          "getUseClaslist",
          "addUseClaslist",
          "modUseClaslist",
          "getUserTypeList",
          "getAdminOptionDetail",
          "deleteUseClaslist"
        ]),
        timeTool(d){
          var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
          return datetime;
        },
        // 分页组件返回的参数
        handlePage (data) {
          this.sendParmas.page = data.page
          this.sendParmas.limit = data.limit
          this.getUseClaslist(this.sendParmas)
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
          this.getUseClaslist(this.sendParmas)
        },
        // 只看此人
        CheckYour(username){
          this.sendParmas.username = username
          this.getUseClaslist(this.sendParmas)
        },

        // 查看详情
        checkDetail(id){
          this.tsVisible = true

          // this.getAdminOptionDetail({id:id}).then(res=>{
          //   if(res.code == 0){
          //     this.tsVisible = true
          //     this.dataList = res.data
          //     return false
          //   }
          //   if(res.code == 2){
          //     Message({
          //       message:res.message,
          //       type:"error",
          //       showClose:true
          //     })
          //   }
          // })
        },
        //新增
        checkDetailAdd(){
          this.tsVisibleAdd = true
          this.addUser.name="";
          this.addUser.order="";

        },
        //新增提交
        formAddCommit(){
          this.addUseClaslist(this.addUser).then(res=>{
            this.getUseClaslist(this.sendParmas)

            if(res.code == 0){
              this.tsVisibleAdd = false
              return false
            }
          })

        },



        //修改
        checkDetailMod(val){
          console.log(val);
          this.tsVisible = true
          this.editor = JSON.parse(JSON.stringify(val));
        },

        //修改提交
        formModCommit(){
          this.modUseClaslist(this.editor).then(res=>{
            this.getUseClaslist(this.sendParmas)
            if(res.code == 0){
              this.tsVisible = false
              return false
            }
          })

        },


        deleteUserClass(id){
          this.$confirm(this.$L.t('member.log_12.info8'), this.$L.t('member.log_12.info9'), {
            distinguishCancelAndClose: true,
            confirmButtonText: this.$L.t('member.log_12.info10'),
            cancelButtonText: this.$L.t('member.log_12.info11')
          })
            .then(() => {
              this.deleteUseClaslist({id:id}).then(()=>{
                this.getUseClaslist(this.sendParmas)
              });


            })
            .catch(action => {

            });
        },
        //提交新增
        formCommit(){
          this.tsVisible=false;
        },

      },
      computed: {
        ...mapState([
          "managerStore",
          "memberStore"
        ]),
        getPageData () {
          return {
            page: this.sendParmas.page,
            limit: this.sendParmas.limit,
            sum: this.memberStore.claslist.data.count
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
