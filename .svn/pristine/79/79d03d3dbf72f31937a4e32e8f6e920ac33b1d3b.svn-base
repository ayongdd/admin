<template>
    <div class="container">
        <table class="table clearfloat" id="search">
            <tbody>
              <tr class="nav">
                  <td>{{$L.t('chatRoom.zh92')}}</td>
              </tr>
              <tr>
                <td>
                  <div class="timeShow">
                    <div class="submitSeach">{{$L.t('table.username')}}
                      <input type="text" style="width: 140px" v-model="sendParmas.username">
                    </div>
                    <div class="submitSeach">{{$L.t('table.nikename')}}
                      <input type="text" style="width: 140px" v-model="sendParmas.nickname">
                    </div>
                    <!-- <div class="submitSeach">群组
                        <select v-model="sendParmas.id">
                          <option value="">所有</option>
                          <option v-for="(item,index) in chatStore.chatGroupSeach.data.data" :key="index" :value="index">{{item}}</option>
                        </select>
                      </div> -->
                    <div class="submitSeach">{{$L.t('table.type')}}::
                      <select v-model="sendParmas.type">
                        <option value="">{{$L.t('agent.agent_2.all')}}</option>
                        <option value="1">{{$L.t('chatRoom.zh93')}}</option>
                        <option value="2">{{$L.t('agent.agent_0.dl')}}</option>
                        <option value="3">{{$L.t('chatRoom.zh94')}}</option>
                        <option value="4">{{$L.t('agent.agent_0.huiy')}}</option>
                      </select>
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
          <tr class="head">
            <td>{{$L.t('table.username')}}</td>
            <td>{{$L.t('table.nikename')}}</td>
            <td>{{$L.t('chatRoom.zh95')}}</td>
            <td>{{$L.t('agent.agent_7.userType')}}</td>
            <td>{{$L.t('chatRoom.zh108')}}</td>
            <td>{{$L.t('chatRoom.zh96')}}</td>
            <td>{{$L.t('chatRoom.zh97')}}</td>
            <td>{{$L.t('chatRoom.zh98')}}</td>
            <td>{{$L.t('chatRoom.zh99')}}</td>
            <td>{{$L.t('chatRoom.zh100')}}</td>
            <td>{{$L.t('table.handle')}}</td>
          </tr>
          <tr class="odd" v-for="item in chatStore.chatUserList.data.data">
            <td>{{item.username}}</td>
            <td>{{item.nickname}}</td>
            <td>{{item.scoreTotal}}</td>
            <td>
              <span v-if="item.type == 0">{{$L.t('agent.agent_0.huiy')}}</span>
              <span v-else-if="item.type == 1">{{$L.t('agent.agent_0.dl')}}</span>
              <span v-else-if="item.type == 2">{{$L.t('chatRoom.zh101')}}</span>
              <span v-else>{{$L.t('agent.agent_7.csh')}}</span>
            </td>
            <td>{{item.name + '(' + item.id + ')'}}</td>
            <td>{{item.chatAdmin == 0? $L.t('false'): $L.t('true')}}</td>
            <td>{{item.disable == 0? $L.t('false'): $L.t('true')}}</td>
            <td>{{item.status == 0? $L.t('false'): $L.t('true')}}</td>
            <td>{{item.isRegister == 0? $L.t('false'): $L.t('true')}}</td>
            <td>{{item.isOnLine == 0?$L.t('agent.agent_8.zh37'):$L.t('agent.agent_8.zh36')}}</td>
            <td>
              <button v-if="item.disable == 0" @click="setUser(3, item.uid)">{{$L.t('chatRoom.zh103')}}</button>
              <button v-if="item.disable == 1" @click="setUser(4, item.uid)">{{$L.t('chatRoom.zh102')}}</button>
              <button v-if="item.status == 0" @click="setUser(1, item.uid)">{{$L.t('chatRoom.zh45')}}</button>
              <button v-if="item.status == 1" @click="setUser(2, item.uid)">{{$L.t('chatRoom.zh47')}}</button>
              <button v-if="item.chatAdmin == 0" @click="changeState(1, item)">{{$L.t('chatRoom.zh104')}}</button>
              <button v-if="item.chatAdmin == 1" @click="changeState(0, item)">{{$L.t('chatRoom.zh105')}}</button>
              <button @click="clearnOption(item.uid)">{{$L.t('chatRoom.zh106')}}</button>
            </td>
          </tr>
          <tr v-if="getPageData.sum>0">
            <td colspan="11">
              <page-limit :pageData="getPageData" :inputShow="'1'"
                @handlePage="handlePage"></page-limit>
            </td>
          </tr>
          <tr v-if="!chatStore.chatUserList.data.data">
            <td colspan="11" class="nodata">{{$L.t('noData')}}</td>
          </tr>
        </tbody>
      </table>
      <!-- 修改 -->
      <el-dialog
        :title="titleAnnout"
        :visible.sync="editInfoVisible"
        width="700px">
        <div v-if="editInfoVisible" class="form_container">
          <ul>
            <li>
              <div class="formLi_title">
                {{$L.t('annoucement.swtz_4.title')}}
              </div>
              <div class="formLi_content">
                <input type="text" v-model="addList.title" :placeholder="$L.t('annoucement.tcgg_1.importTitle')">
              </div>
            </li>
            <li>
              <button class="form_commit" @click="submitVal()">{{$L.t('submit')}}</button>
            </li>
          </ul>
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
            sendParmas:{
              page:1,
              limit:20,
              id:this.$route.query.id,
              username:'',
              nickname:'',
              type:'',
              sum:'',
            },
            // 新增内容
            addList:{
              addTime:'',
              title:'',
              typeid:19,
              enable:'',
              content:'',
              id:''
            },
            editInfoVisible:false,
            titleAnnout:'',
            visibleNum:'',
            status:false
          }
        },
        created (){
          this.getChatUserList(this.sendParmas)
          this.getGroupSeach()
        },
        mounted(){

        },
        methods: {
          ...mapMutations([
          ]),
          ...mapActions([
            "getChatUserList",
            "updateGroupAdmin",
            "operationAction",
            "getGroupSeach",
            "delFrequently"
          ]),
          // 搜索
          seachCondition(){
            this.sendParmas.page = 1
            this.getChatUserList(this.sendParmas)
          },
          // 设置群组管理员
          changeState(admin, item) {
            let d = {
              id:item.id,
              uid:item.uid,
              admin
            }
            this.updateGroupAdmin(d).then(res=>{
              this.getChatUserList(this.sendParmas)
            })
          },
          // 分页组件返回的参数
          handlePage (data) {
            this.sendParmas.page = data.page
            this.sendParmas.limit = data.limit
            this.getChatUserList(this.sendParmas)
          },
          // 添加
          addInfodata(){
            this.titleAnnout = '新增公告'
            this.status = false
            this.editInfoVisible = true
            this.visibleNum = 1
            this.clernContent()
          },
          setUser(id,uid){
            this.operationAction({
              type:id,
              uid:uid
            }).then(res=>{
              this.getChatUserList(this.sendParmas)
            })
          },
          // 清除频繁操作
          clearnOption(item){
            this.delFrequently({uid:item})
          }
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
              sum: this.chatStore.chatUserList.data.count || 0
            }
          }
        },
      }
    </script>
  <style lang="less" scoped>
  .form_container{
    height: 350px;
    padding: 0 10px;
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
    </style>
