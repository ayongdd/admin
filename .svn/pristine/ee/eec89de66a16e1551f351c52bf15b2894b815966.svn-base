<template>
  <div class="container">
    <table class="table">
      <tbody>
        <tr class="nav">
          <td colspan="10">
            {{$L.t('annoucement.tcgg_1.title')}}
            <input @click="addInfodata()" type="submit" :value="$L.t('annoucement.tcgg_1.add')"></td>
        </tr>
        <tr class="head">
          <td>{{$L.t('annoucement.swtz_4.title')}}</td>
          <td class="operation">{{$L.t('annoucement.swtz_4.content')}}</td>
          <td>{{$L.t('annoucement.tcgg_1.addTime')}}</td>
          <td>{{$L.t('table.status')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr class="odd" v-for="item in annoucementStore.chatList.data.data">
          <td>{{item.title}}</td>
          <td>{{item.content}}</td>
          <td>{{times(item.addTime)}}</td>
          <td :class="item.enable == 1?'color_green_c':'color-red'">{{item.enable == 0 ? $L.t('annoucement.tcgg_1.hide'): $L.t('annoucement.tcgg_1.show')}}</td>
          <td>
            <span>
              <button class="popBtn" @click="editInfoClick(item)">{{$L.t('fixed')}}</button>
            </span>
            <span>
              <button class="popBtn" @click="delectUser(item.id)">{{$L.t('delete')}}</button>
            </span>
          </td>
        </tr>
        <tr v-if="getPageData.sum>0">
          <td colspan="5">
            <page-limit :pageData="getPageData" :inputShow="'1'"
              @handlePage="handlePage"></page-limit>
          </td>
        </tr>
        <tr v-if="!annoucementStore.chatList.data.data">
          <td colspan="5" class="nodata">{{$L.t('noData')}}</td>
        </tr>
      </tbody>
    </table>
    <!-- 修改 -->
    <el-dialog
      :title="titleAnnout"
      :visible.sync="editInfoVisible"
      width="700px">
      <div v-if="editInfoVisible" class="form_container">
        <div class="formBox_title">{{$L.t('annoucement.tcgg_1.roomNotice')}}</div>
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
            <div class="formLi_title">
              {{$L.t('annoucement.swtz_4.content')}}
            </div>
            <div class="formLi_content">
              <textarea rows="10" cols="70" name="content" id="content"
                        :placeholder="$L.t('annoucement.tcgg_1.importContent')" v-model="addList.content"></textarea>
            </div>
          </li>
          <li v-show="status">
            <div class="formLi_title">
              状态
            </div>
            <div class="formLi_content">
              <el-radio v-model="addList.enable" label="1">{{$L.t('annoucement.tcgg_1.hide')}} </el-radio>
              <el-radio v-model="addList.enable" label="0">{{$L.t('annoucement.tcgg_1.show')}} </el-radio>
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
            typeid:19,
            sum:'',
          },
          // 新增内容
          addList:{
            title:'',
            typeid:19,
            enable:'',
            content:'',
            id:''
          },
          editInfoVisible:false,
          titleAnnout:'',
          visibleNum:'',
          editid:'',
          status:false,
          // 弹窗提示
          confirmVisible: false,
          confirmId:''
        }
      },
      created (){
        this.getChatList(this.sendParmas)
      },
      mounted(){

      },
      methods: {
        ...mapMutations([
        ]),
        ...mapActions([
          "getChatList",
          "AddChaList",
          "updataChaList",
          "deleteChatList"
        ]),
        // 分页组件返回的参数
        handlePage (data) {
          this.sendParmas.page = data.page
          this.sendParmas.limit = data.limit
          this.getChatList(this.sendParmas)
        },
        // 添加
        addInfodata(){
          this.titleAnnout = this.$L.t('annoucement.tcgg_1.add')
          this.status = false
          this.editInfoVisible = true
          this.visibleNum = 1
          this.clernContent()
        },
        // 修改
        editInfoClick (item) {
          this.editid = item.id
          this.titleAnnout = this.$L.t('fixed')
          this.status = true
          this.editInfoVisible = true
          this.visibleNum = 2
          for (let k in this.addList) {
            this.addList[k] = item[k]
          }
        },
        // 提交
        submitVal(){
          this.addList.typeid ="19"
          if(this.visibleNum == 1){//新增
            this.AddChaList(this.addList).then(res=>{
              this.editInfoVisible = false
              this.getChatList(this.sendParmas)
            })
          }else{//修改
            this.addList.id = this.editid
            this.updataChaList(this.addList).then(res=>{
              this.editInfoVisible = false
              this.getChatList(this.sendParmas)
            })
          }
        },
        // 删除
        delectUser(id){
          this.confirmVisible = true
          this.confirmId = id
        },
        commitModel(){
          this.deleteChatList({id:this.confirmId}).then(res=>{
            this.confirmVisible = false
            this.getChatList(this.sendParmas)
          })
        },
        // 清空内容
        clernContent(){
          for (let k in this.addList) {
            this.addList[k] = ''
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
        }
      },
      computed: {
        ...mapState([
          "indexStore",
          "annoucementStore"
        ]),
        getPageData () {
          return {
            page: this.sendParmas.page,
            limit: this.sendParmas.limit,
            sum: this.annoucementStore.chatList.data.count
          }
        }
      },
    }
  </script>
<style lang="less" scoped>
  .operation{
      width: 60%;
    }
.form_container{
  height: 350px;
  padding: 0 10px;
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
