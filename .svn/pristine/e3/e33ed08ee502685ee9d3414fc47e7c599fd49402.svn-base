<template>
    <div class="container">
        <table class="table clearfloat" id="search">
            <tbody>
              <tr class="nav">
                  <td>{{$L.t('chatRoom.zh35')}}</td>
              </tr>
              <tr>
                <td>
                  <div class="timeShow">
                    <div class="submitSeach">{{$L.t('chatRoom.zh36')}}
                      <input type="text" style="width: 140px" v-model="sendParmas.name">
                    </div>

                    <div class="submitSeach">{{$L.t('agent.agent_1.search')}}
                      <input type="text" style="width: 140px" v-model="sendParmas.username">
                    </div>
                    <div class="submitSeach" @click="seachCondition()">
                      <input type="submit"  :value="$L.t('submit')">
                    </div>
                    <div class="submitSeach" @click="addInfodata()">
                        <input type="submit" :value=" $L.t('chatRoom.zh37') ">
                    </div>
                    <div class="submitSeach" @click="synchInfodata()">
                        <input type="submit" :value=" $L.t('chatRoom.zh38') ">
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
      <table class="table">
        <tbody>
          <tr class="head">
            <td>{{$L.t('chatRoom.zh39')}}</td>
            <td>{{$L.t('chatRoom.zh40')}}</td>
            <td>{{$L.t('chatRoom.zh41')}}</td>
            <td>{{$L.t('chatRoom.zh42')}}</td>
            <td>{{$L.t('chatRoom.zh43')}}</td>
            <td>{{$L.t('annoucement.swtz_4.createTime')}}</td>
            <td>{{$L.t('chatRoom.zh44')}}</td>
            <td>{{$L.t('table.handle')}}</td>
          </tr>
          <tr class="odd" v-for="item in chatStore.groupChatList.data.data">
            <td>{{item.name}} ({{item.id}})</td>
            <td>{{item.number}}</td>
            <td>{{item.admin}}</td>
            <td>{{item.test}}</td>
            <td>{{item.isOnLine}}</td>
            <td>{{times(item.actionTime)}}</td>
            <td>{{item.status == '0'?$L.t('annoucement.xttz_5.zh5'):$L.t('chatRoom.zh45')}}</td>
            <td>
              <button class="popBtn" @click="upInfodata(item)">{{$L.t('fixed')}}</button>
              <button class="popBtn" @click="noRoomuser(item)">{{$L.t('chatRoom.zh46')}}</button>
              <button class="popBtn" @click="delectUser(item.id)">{{$L.t('delete')}}</button>
              <button class="popBtn"><a :href="'#/chatRoom/5?id='+item.id">{{$L.t('check')}}</a></button>
              <button v-if="item.status == 0" @click="setUser(1, item.id)">{{$L.t('chatRoom.zh45')}}</button>
              <button v-if="item.status == 1" @click="setUser(0, item.id)">{{$L.t('chatRoom.zh47')}}</button>
              <button @click="transferdata(item.id)">{{$L.t('chatRoom.zh160')}}</button>
            </td>
          </tr>
          <tr>
            <td colspan="9" class="notice-explain">{{$L.t('chatRoom.zh48')}}</td>
          </tr>
          <tr v-if="getPageData.sum>0">
            <td colspan="9">
              <page-limit :pageData="getPageData" :inputShow="'1'"
                @handlePage="handlePage"></page-limit>
            </td>
          </tr>
          <tr v-if="!chatStore.groupChatList.data.data">
            <td colspan="9" class="nodata">{{$L.t('noData')}}</td>
          </tr>

        </tbody>
      </table>
      <!-- 新增 -->
      <el-dialog
        :title="titleAnnout"
        :visible.sync="editInfoVisible"
        width="500px">
        <div v-if="editInfoVisible" class="form_container form_list">
          <div class="formBox_title">{{$L.t('chatRoom.zh49')}}</div>
          <ul>
            <li>
              <div class="formLi_title">
                {{$L.t('chatRoom.zh36')}}
              </div>
              <div class="formLi_content">
                <input type="text" v-model="addList.name" :placeholder="$L.t('chatRoom.zh50')">
              </div>
            </li>
            <li>
              <button class="form_commit" @click="submitValQz()">{{$L.t('submit')}}</button>
            </li>
          </ul>
        </div>
      </el-dialog>
      <!-- 获取不是当前群组的用户 -->
      <el-dialog
        :title="$L.t('chatRoom.zh58')"
        :visible.sync="userRoomVisible"
        width="800px">
        <div v-if="userRoomVisible" class="form_container form_list-two">
          <div class="formBox_title">{{$L.t('chatRoom.zh51')}}</div>
          <ul>
            <li>
              <div class="formLi_title">{{$L.t('chatRoom.zh52')}}：</div>
              <div class="formli_con">
                {{$L.t('chatRoom.zh53')}}
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('chatRoom.zh54')}}：</div>
              <div class="formli_con">
                <el-radio-group v-model="type">
                  <el-radio :label="0" @change="seachuser('1')">{{$L.t('agent.agent_0.huiy')}}</el-radio>
                  <el-radio :label="1" @change="seachuser('2')">{{$L.t('agent.agent_0.dl')}}</el-radio>
                  <el-radio :label="9" @change="seachuser('3')">{{$L.t('agent.agent_7.csh')}}</el-radio>
                  <el-radio :label="2" @change="seachuser('4')">{{$L.t('bonusGame.NiuNiuBetManage.zh24')}}</el-radio>
                  <el-radio :label="-1" @change="seachuser('5')">{{$L.t('search')}}</el-radio>
                </el-radio-group>
              </div>
            </li>
            <li v-if="seach_user == 1">
              <div class="formLi_title">{{$L.t('chatRoom.zh55')}}：</div>
              <div class="formli_con">
                <el-radio-group v-model="seachlevel">
                  <el-radio :label="1" @change="seachchoose">{{$L.t('table.username')}}</el-radio>
                    <el-radio :label="0" @change="seachchoose">{{$L.t('chatRoom.zh56')}}</el-radio>
                  </el-radio-group>
              </div>
            </li>
            <li v-if="seach_user == 1">
              <div class="formLi_title">{{$L.t('agent.agent_1.search')}}：</div>
              <div class="formli_con">
                <label v-if="seachlevel == 0">
                  {{$L.t('chatRoom.zh56')}}
                  <input type="number" v-model="userlevelmin" style="width: 50px"> -
                  <input type="number" v-model="userlevelmax" style="width: 50px">
                </label>
                <input type="text" v-if="seachlevel == 1" v-model="username" :placeholder="$L.t('agent.agent_1.import')">
                <button class="form_commit" @click="seachVal()">{{$L.t('search')}}</button>
                <button class="form_commit" @click="clearVal()">{{$L.t('empty')}}</button>
              </div>
            </li>
            <li v-if="userChoose">
              <div class="formLi_title">{{$L.t('agent.agent_1.alert4')}}：</div>
              <div class="formli_con">
                  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">{{$L.t('chatRoom.zh57')}}</el-checkbox>
                  <el-checkbox-group v-if="type ==2" v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox class="member_name" :title="item.levelName" v-for="(item,index) in userlist" :label="item" :key="index">{{item.levelName}}</el-checkbox>
                  </el-checkbox-group>
                  <el-checkbox-group v-else v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox  class="member_name" :title="item.username" v-for="(item,index) in userlist" :label="item" :key="index">{{item.username}}</el-checkbox>
                  </el-checkbox-group>
              </div>
            </li>
            <li>
            <button class="form_commit" @click="submitVal()">{{$L.t('submit')}}</button>
            </li>
          </ul>
        </div>
      </el-dialog>
          <!-- 提示弹窗 -->
    <comfirm-model
    v-if="confirmVisible"
    :content="$L.t('agent.agent_0.isDel')"
    @closeModel="confirmVisible = false"
    @commitModel="commitModel">
  </comfirm-model>

      <!-- 转移群组 -->
      <el-dialog
              :title="$L.t('chatRoom.zh160')"
              :visible.sync="transferVisible"
              width="500px"
              height="500px;">
        <div class="form_container form_list">
          <div class="formBox_title">{{$L.t('chatRoom.zh161')}}</div>
          <ul>
            <li style="line-height:50px;">
              <div class="formLi_title">{{$L.t('chatRoom.zh162')}}</div>
              <div class="formLi_content">
                <select v-model="transferData.id">
                  <option v-for="m in transList"  :value="m.key">{{m.value}}</option>
                </select>
              </div>
            </li>
            <li>
              <button class="form_commit" @click="submitTransfer()">{{$L.t('submit')}}</button>
            </li>
          </ul>
        </div>
      </el-dialog>

    </div>
  </template>
  <script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  import { Loading,Message,MessageBox} from 'element-ui';
      import {getSession} from '@/common/common'
      export default {
        data () {
          return {
            sendParmas:{
              page:1,
              limit:20,
              id:'',
              name:'',
              sum:'',
              username:''
            },
            // 新增内容
            addList:{
              name:'',
              id:''
            },
            editInfoVisible:false,

            titleAnnout:'',
            visibleNum:'',
            editid:'',
            itemid:'',
            userRoomVisible:false,
            type:'',
            username:'',
            seach_user:0,
            chartid:'',
            // 全选
            checkAll: false,
            checkedCities: [],
            isIndeterminate: true,
            userlist:[],
            userChoose:false,
            str:'',
            // 弹窗提示
            confirmVisible: false,
            confirmId:'',
            seachlevel:1,
            // 等级
            userlevelmin:'',
            userlevelmax:'',
            userType:'',

            transferVisible:false,
            transferData:{
              type:5,
              user:[],
              id:''
            },
            transId:[],
            transList:[]
          }
        },
        created (){
          this.getGroupChatList(this.sendParmas);
          this.getGroupChatListNew();
        },
        mounted(){

        },
        methods: {
          ...mapMutations([
          ]),
          ...mapActions([
            "getGroupChatList",
            "getGroupChatListNew",
            "addGroupChatList",
            "updaGroupChatList",
            "getNoGroupList",
            "searchUserList",
            "addUserRoom",
            "transferUsers",
            "deleteUserRoom",
            "getLevel",
            "getChatGroupDisable",
            "getSynchronization"
          ]),
          handleCheckAllChange(val) {
          this.checkedCities = val ? this.userlist : [];
          this.isIndeterminate = false;
          },
          handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.userlist.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.userlist.length;
          },
          // 搜索
          seachCondition(){
            this.sendParmas.page = 1
            this.getGroupChatList(this.sendParmas)
          },
          // 分页组件返回的参数
          handlePage (data) {
            this.sendParmas.page = data.page
            this.sendParmas.limit = data.limit
            this.getGroupChatList(this.sendParmas)
          },
          // 添加
          addInfodata(){
            this.titleAnnout = this.$L.t('chatRoom.zh58')
            this.editInfoVisible = true
            this.visibleNum = 1
            this.clernContent()
          },
          // 修改
          upInfodata(item) {
            this.titleAnnout = this.$L.t('fixed')
            this.visibleNum = 2
            this.itemid = item.id
            this.editInfoVisible = true
            this.addList.name = item.name
          },
          // 同步数组
          synchInfodata(){
            this.getSynchronization()
          },
          // 切换
          seachuser(item){
            // 用户类型
            this.userType = item
            this.checkAll = false
            this.checkedCities =[]
            if(this.type == -1){
              this.seach_user = 1
              this.userChoose = false
            }else if (this.type == 2){
              this.seach_user = 0
              this.getLevel().then(res=>{
                if(res.code == 0){
                    this.userChoose = true
                    this.userlist = res.data.data
                }else{
                  Message({
                    message:res.message,
                    type:"error",
                    showClose:true
                  })
                    this.userlist = []
                    this.userChoose = false
                }
              })
            }else{
              this.seach_user = 0
              this.getNoGroupList({
                id:this.chartid,
                type:this.type
              }).then(res=>{
                if(res.code == 0){
                    this.userChoose = true
                    this.userlist = res.data.data
                }else{
                  Message({
                    message:res.message,
                    type:"error",
                    showClose:true
                  })
                    this.userlist = []
                    this.userChoose = false
                }
              })
            }
          },
          // 删除
          delectUser(id){
            this.confirmVisible = true
            this.confirmId = id
          },
          commitModel(){
            this.deleteUserRoom({id:this.confirmId}).then(res=>{
              this.confirmVisible = false
              this.getGroupChatList(this.sendParmas)
            })
          },
          // 搜索框
          seachVal(){
            if(this.seachlevel == 1){//用户搜索
              this.searchUserList({id:this.chartid,username:this.username}).then(res=>{
                this.userlist = res.data
                if(res.data.length>0){
                  this.userChoose = true
                }else{
                  this.userChoose = false
                }
              })
            }else{
              this.searchUserList({
                id:this.chartid,
                userlevelmax:this.userlevelmax,
                userlevelmin:this.userlevelmin
              }).then(res=>{
                this.userlist = res.data
                if(res.data.length>0){
                  this.userChoose = true
                }else{
                  this.userChoose = false
                }
              })
            }
          },
          // 等级、用户名搜索清空上个记录
          seachchoose(){
            this.username = ''
            this.userlevelmin = ''
            this.userlevelmax = ''
            this.userChoose = false
            this.checkedCities = []
          },
          clearVal(){
            this.userlist = [],
            this.username = ''
            this.userlevelmin = ''
            this.userlevelmax = ''
            this.checkedCities = []
          },
          // 确认添加群组
          submitValQz(){
            if(this.visibleNum == 1){
              this.addGroupChatList(this.addList).then(res=>{
                this.editInfoVisible = false
                this.getGroupChatList(this.sendParmas)
              })
            }else{
              this.addList.id = this.itemid
              this.updaGroupChatList(this.addList).then(res=>{
                this.editInfoVisible = false
                this.getGroupChatList(this.sendParmas)
              })
            }
          },
          // 添加用户
          noRoomuser(item){
            this.userlist = []
            this.type = ''
            this.seach_user = 0
            this.userChoose = false
            this.userRoomVisible = true
            this.chartid = item.id
            this.checkedCities = []
            this.username = ''
            this.userlevelmin = ''
            this.userlevelmax = ''
            this.userType = ''
          },
          // 确认添加用户
          submitVal(){
            let str = []
            let da = {}
            if(this.type == 2){
              for(let i = 0;i< this.checkedCities.length;i++){
                if(this.checkedCities[i]){
                  str.push(this.checkedCities[i].id)
                }
              }
              this.users = str
            }else{
              for(let i = 0;i< this.checkedCities.length;i++){
                if(this.checkedCities[i]){
                  str.push(this.checkedCities[i].uid)
                }
              }
              this.users = str
            }
            da = {
              id:this.chartid,
              type:this.userType,
              user:this.users,
            }
            if(da.user == 0){
              Message({
                message:this.$L.t('chatRoom.zh59'),
                type:"error",
                showClose:true
              })
            }else{
              this.addUserRoom(da).then(res=>{
                this.user = ""
                str = []
                this.checkedCities = []
                this.userRoomVisible = false
                this.getGroupChatList(this.sendParmas)
              })
            }
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
           // 清空内容
          clernContent(){
            for (let k in this.addList) {
              this.addList[k] = ''
            }
          },
          // 转移群组
          transferdata(it){
            this.transList = [];
            this.transId = []
            this.transId.push(it)
            this.transferVisible = true;
            for (const [key, value] of Object.entries(this.chatStore.groupChatListNew.data.data)) {
              this.transList.push({key,value})
            }
            this.transferData.id = it
          },
          submitTransfer(){
            this.transferData.user = this.transId
            this.transferData.type = 6
            this.transferUsers(this.transferData).then(res=>{
              this.transferVisible = false
              this.getGroupChatList(this.sendParmas)
            })
          },
          // 禁言
          setUser(item,id){
            this.getChatGroupDisable({
              id:id,
              status:item
            }).then(()=>{
              this.getGroupChatList(this.sendParmas)
            })
          }
        },
        computed: {
          ...mapState([
            "indexStore",
            "chatStore",
            "memberStore"
          ]),
          getPageData () {
            return {
              page: this.sendParmas.page,
              limit: this.sendParmas.limit,
              sum: this.chatStore.groupChatList.data.count
            }
          }
        },
      }
    </script>
  <style lang="less" scoped>
    .member_name{
      width: 100px;
      overflow: hidden;
    }
    .form_list{
      height: 150px;
    }
  .form_container{
    padding: 10px;
    overflow: auto;
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
          width: 120px;
          padding-left: 5px;
          font-weight: bold;
          font-size: 14px;
        }
        .formli_con{
          width: 600px;
          div{
            label{
              width: 90px;
              &:first-child{
                margin-left: 30px!important;
              }
            }
          }
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
  .popBtn a{
    color: #000000;
  }
  .notice-explain{
    color: red
  }
    </style>
