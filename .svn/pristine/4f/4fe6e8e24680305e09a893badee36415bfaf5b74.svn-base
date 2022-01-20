<template>
    <div class="container">
      <table class="table" >
        <tbody>
        <tr class="nav">
          <td colspan="10">
            {{$L.t('setup.info186')}}
            <input @click="addInfodata()" type="submit" :value=" $L.t('setup.info187') "></td>
        </tr>
        <tr class="head">
          <td>{{$L.t('annoucement.swtz_4.title')}}</td>
          <td>{{$L.t('setup.info181')}}</td>
          <td>{{$L.t('annoucement.tcgg_1.addTime')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr class="odd" v-for="item in setupStore.dataLawList.data.data">
          <td>{{item.title}}</td>
          <td>{{item.enable == 1?$L.t('annoucement.tcgg_1.show'):$L.t('setup.info57')}}</td>
          <td>{{times(item.addTime)}}</td>
          <td>
            <button class="popBtn" @click="editInfoClick(item)">{{$L.t('fixed')}}</button>
            <button class="popBtn" @click="delectUser(item.id)">{{$L.t('delete')}}</button>
          </td>
        </tr>
        <tr v-if="getPageData.sum>0">
          <td colspan="6">
            <page-limit :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
          </td>
        </tr>
          <tr v-if="!setupStore.dataLawList.data.data">
            <td colspan="4" class="nodata">{{$L.t('noData')}}</td>
          </tr>
        </tbody>
      </table>
      <!-- 新增修改 -->
      <el-dialog
        :title="titleAnnout"
        :visible.sync="editInfoVisible"
        width="700px">
        <div v-if="editInfoVisible" class="form_epayindex">
          <div class="formBox_title">{{$L.t('setup.info188')}}</div>
          <ul>
            <li>
              <div class="formLi_title">{{$L.t('annoucement.swtz_4.title')}}</div>
              <div class="formLi_content">
                <el-input v-model="addList.title" :placeholder="$L.t('annoucement.tcgg_1.importTitle')"></el-input>
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('setup.info166')}}</div>
              <div class="formLi_content-quill">
                <el-upload
                  class="avatar-uploader"
                  id="quill-open-upload"
                  name="img"
                  action=""
                  :auto-upload='false'
                  accept="image/jpeg, image/png"
                  :show-file-list="false"
                  :on-change="uploadSuccess">
                </el-upload>
                <quill-editor ref="myTextEditor"
                :content="addList.content"
                :options = "editorOption"
                @change="onEditorChange($event)">
                </quill-editor>
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('table.status')}}</div>
              <div class="formli_con">
                <el-radio-group v-model="addList.enable">
                  <el-radio :label="0">{{$L.t('setup.info57')}}</el-radio>
                  <el-radio :label="1">{{$L.t('annoucement.tcgg_1.show')}}</el-radio>
                </el-radio-group>
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
    import {getSession,toolbarOptions,languageId} from '@/common/common'
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import { quillEditor } from 'vue-quill-editor'
    export default {
      data () {
        return {
          sendParmas:{
            typeid:'25',
            page:1,
            limit:20,
            sum:'',
          },
          // 新增内容
          addList:{
            id:'',
            title:'',
            typeid:'25',
            content:'',
            enable:''
          },
          editorOption: {
            placeholder: this.$L.t('agent.agent_5.alert18'),
            theme: 'snow',  // or 'bubble'
            modules: {
              toolbar: {
                container: toolbarOptions,  // 工具栏
                handlers: {
                  'image': function (value) {
                    if (value) {
                      document.querySelector('#quill-open-upload input').click()
                    } else {
                      this.quill.format('image', false);
                    }
                  }
                }
              }
            }
          },
          editInfoVisible:false,
          titleAnnout:'',
          visibleNum:'',
          editid:'',
          // 弹窗提示
          confirmVisible: false,
          confirmId:'',

          diyUpdataImg:'',  // 富文本编辑，图片模板
        }
      },
      created (){
        this.getLawList(this.sendParmas)
      },
      methods: {
        ...mapMutations([
        ]),
        ...mapActions([
          "getLawList",
          "addLawList",
          "updateLawList",
          "deleteSowingList",
          "addQcode"
        ]),
        uploadSuccess(file, fileList){
          this.diyUpdataImg = file.raw
          var da = new FormData()
          let code = languageId(localStorage.getItem('languageId') || 'en')
          da.append('language',code)
          da.append('file',this.diyUpdataImg)
          da.append('typeid','13')
          this.addQcode(da).then(res=>{
            let imgInfo = res.data.data
            let quill = this.$refs.myTextEditor.quill
            // 获取光标所在位置
            let length = quill.getSelection().index;
            // 插入图片  res.info为服务器返回的图片地址
            setTimeout(()=>{
              quill.insertEmbed(length, 'image', imgInfo)
              quill.setSelection(length + 1)
            },2000)

            // 调整光标到最后

          })

        },
        // 分页组件返回的参数
        handlePage (data) {
          this.sendParmas.page = data.page
          this.sendParmas.limit = data.limit
          this.getLawList(this.sendParmas)
        },
        // 添加
        addInfodata(){
          this.titleAnnout = this.$L.t('chatRoom.zh58')
          this.editInfoVisible = true
          this.visibleNum = 1
          this.clernContent()
          this.addList.typeid = '25'
        },
        // 修改
        editInfoClick (item) {
          this.editid = item.id
          this.titleAnnout = this.$L.t('manager.info21')
          this.editInfoVisible = true
          this.visibleNum = 2
          for (let k in this.addList) {
            this.addList[k] = item[k]
          }
          this.addList.typeid = '25'
          this.addList.enable = parseInt(item.enable)
        },
        // 提交
        submitVal(){
          if(this.visibleNum == 1){//新增
            this.addLawList(this.addList).then(res=>{
              this.editInfoVisible = false
              this.getLawList(this.sendParmas)
            })
          }else{//修改
            this.addList.id = this.editid
            this.updateLawList(this.addList).then(res=>{
              this.editInfoVisible = false
              this.getLawList(this.sendParmas)
            })
          }
        },
        // 清空内容
        clernContent(){
          for (let k in this.addList) {
            this.addList[k] = ''
          }
        },
        delectUser(id){
          this.confirmVisible = true
          this.confirmId = id
        },
        commitModel(){
          this.deleteSowingList({id:this.confirmId}).then(res=>{
            this.confirmVisible = false
            this.getLawList(this.sendParmas)
          })
        },
        //富文本编辑器  文本改变时 设置字段值
         onEditorChange({ editor, html, text }) {
          this.addList.content = html
        },
        times:function (t) {
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
      components: {
        quillEditor
      },
      computed: {
        ...mapState([
          "setupStore"
        ]),
        getPageData () {
          return {
            page: this.sendParmas.page,
            limit: this.sendParmas.limit,
            sum: this.setupStore.dataLawList.data.count || 0
          }
        }
      },
    }
  </script>

  <style lang="less" scoped>
.form_epayindex{
  padding: 0 10px;
  overflow: auto;
    height: 520px;
  // 头部
  .formBox_title{
    height: 25px;
    line-height: 23px;
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
      .formLi_content-quill{
        width: 520px;
        .quill-editor{
          .ql-container{
            height: 300px;
          }
        }
      }
      .formLi_img{
        background-color: #fbfdff;
        border: 1px dashed #c0ccda;
        border-radius: 6px;
        box-sizing: border-box;
        width: 148px;
        height: 100px;
        cursor: pointer;
        line-height: 146px;
        vertical-align: top;
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
