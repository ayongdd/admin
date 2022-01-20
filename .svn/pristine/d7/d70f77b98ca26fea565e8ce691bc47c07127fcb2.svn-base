<template>
    <div class="container">
      <table class="table" >
        <tbody>
        <tr class="nav">
          <td colspan="10">
            {{$L.t('setup.info161')}}
            <input @click="addInfodata()" type="submit" :value="$L.t('annoucement.tcgg_1.add') "></td>
        </tr>
        <tr class="head">
          <td>{{$L.t('setup.info162')}}</td>
          <td>{{$L.t('setup.info163')}}</td>
          <td>{{$L.t('annoucement.swtz_4.content')}}</td>
          <td>{{$L.t('annoucement.swtz_4.startTime')}}</td>
          <td>{{$L.t('annoucement.swtz_4.endTime')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr class="odd" v-for="item in setupStore.activitiesList.data.data">
          <td>{{item.title}}</td>
          <td><img width="140" height="60" :src="item.link" alt=""></td>
          <td>
            <div class="epayindex_content" v-html="item.content"></div>
          </td>
          <td>{{times(item.startime)}}</td>
          <td>{{times(item.endtime)}}</td>
          <td>
            <button class="popBtn" @click="editInfoClick(item)">{{$L.t('manager.info21')}}</button>
            <button class="popBtn" @click="deleteInfoClick(item.id)">{{$L.t('delete')}}</button>
          </td>
        </tr>
        <tr v-if="getPageData.sum>0">
          <td colspan="8">
            <page-limit :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
          </td>
        </tr>
        <tr v-if="!setupStore.activitiesList.data.data">
          <td colspan="8" class="nodata">{{$L.t('noData')}}</td>
        </tr>
        </tbody>
      </table>
      <!-- 新增修改 -->
      <el-dialog
        :title="titleAnnout"
        :visible.sync="editInfoVisible"
        width="700px">
        <div v-if="editInfoVisible" class="form_epayindex">
          <div class="formBox_title">{{$L.t('setup.info164')}}</div>
          <ul>
            <li>
              <div class="formLi_title">{{$L.t('annoucement.swtz_4.title')}}</div>
              <div class="formLi_content">
                <el-input v-model="addList.title" :placeholder="$L.t('annoucement.tcgg_1.importTitle')"></el-input>
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('setup.info165')}}</div>
              <div class="formLi_content">
                  <el-input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 4}"
                  :placeholder="$L.t('annoucement.tcgg_1.importContent')"
                  v-model="addList.description">
                </el-input>
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('setup.info166')}}</div>
              <div class="formLi_content-quill">
                <el-upload
                  class="avatar-uploader"
                  id="quill-upload"
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
              <div class="formLi_title">{{$L.t('setup.info144')}}</div>
              <div class="formLi_img">
                <el-upload
                  id="el-upload1"
                  class="avatar-uploader avatar-uploader_356x178
                  avatar-uploader_contain reception"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-change='formImageChange'
                  :auto-upload='false'
                  accept="image/jpeg, image/png"
                  :on-success="handleAvatarSuccess">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('annoucement.swtz_4.startTime')}}</div>
              <div class="formLi_content">
                  <el-date-picker
                    v-model="addList.startime"
                    type="datetime"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    format="yyyy-MM-dd HH:mm:ss"
                    :placeholder="$L.t('annoucement.tcgg_1.chooseTime')">
                  </el-date-picker>
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('annoucement.swtz_4.endTime')}}</div>
              <div class="formLi_content">
                  <el-date-picker
                    v-model="addList.endtime"
                    type="datetime"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    format="yyyy-MM-dd HH:mm:ss"
                    :placeholder="$L.t('annoucement.tcgg_1.chooseTime')">
                  </el-date-picker>
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('lottery.zh91')}}</div>
              <div class="formLi_content">
                <el-input v-model="addList.sort"></el-input>
              </div>
            </li>
            <!-- 修改时填写 -->
            <li>
              <div class="formLi_title">{{$L.t('table.status')}}</div>
              <div class="formli_con">
                <el-radio-group v-model="addList.enable">
                  <el-radio :label="0">{{$L.t('member.info112')}} </el-radio>
                  <el-radio :label="1">{{$L.t('open')}} </el-radio>
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
            typeid:'13',
            page:1,
            limit:20,
            sum:'',
          },
          // 新增内容
          addList:{
            id:'',
            startime:'',
            endtime:'',
            title:'',
            typeid:'13',
            content:'',  // 富文本内容
            link:'',
            description:'',
            sort:'',
            enable:''
          },
          editInfoVisible:false,
          titleAnnout:'',
          editorOption: {
            placeholder: this.$L.t('agent.agent_5.alert18'),
            theme: 'snow',  // or 'bubble'
            modules: {
              toolbar: {
                container: toolbarOptions,  // 工具栏
                handlers: {
                  'image': function (value) {
                    if (value) {
                      document.querySelector('#quill-upload input').click()
                    } else {
                      this.quill.format('image', false);
                    }
                  }
                }
              }
            }
          },
          visibleNum:'',
          editid:'',
          datalist:[],
          acount:'',
          imageUrl:'',
          // 弹窗提示
          confirmVisible: false,
          confirmId:'',

          diyUpdataImg:'',  // 富文本编辑，图片模板
        }
      },
      created (){
        this.getActivitiesList(this.sendParmas)
      },
      methods: {
        ...mapMutations([
        ]),
        ...mapActions([
          "getActivitiesList",
          "addActivities",
          "deleteActivities",
          "updateActivities",
          "addQcode",
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
        //  ==
        // 分页组件返回的参数
        handlePage (data) {
          this.sendParmas.page = data.page
          this.sendParmas.limit = data.limit
          this.getActivitiesList(this.sendParmas)
        },
        // 添加
        addInfodata(){
          this.titleAnnout = this.$L.t('chatRoom.zh58')
          this.editInfoVisible = true
          this.visibleNum = 1
          this.imageUrl = ''
          this.clernContent()
          this.addList.typeid = '13'
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
          this.imageUrl = item.link
          this.addList.typeid = '13'
          this.addList.enable = parseInt(item.enable)
          this.addList.startime = this.times(item.startime)
          this.addList.endtime = this.times(item.endtime)
        },
        // 提交
        submitVal(){
          try {
            this.addList.content = this.addList.content.replace(/_blank/g,"")
            this.addList.content = this.addList.content.replace(/&lt;/g, '<')
            this.addList.content = this.addList.content.replace(/&gt;/g, '>')
          }catch (e){
            // console.log("转义出了问题")
          }


          var da = new FormData()
          let code = languageId(localStorage.getItem('languageId') || 'en')
          da.append('language',code)
          for(let k in this.addList){
            if(k != 'link'){
              da.append(k,this.addList[k])
            }
          }
          if(this.visibleNum == 1){//新增
            da.append('link', this.addList.link)
            this.addActivities(da).then(res=>{
              this.editInfoVisible = false
              setTimeout(()=>{
                this.getActivitiesList(this.sendParmas)
              },2000)
            })
          }else{//修改
            if(typeof(this.addList.link) == 'object'){
              da.append('link', this.addList.link)
            }
            da.append('id', this.editid)
            this.updateActivities(da).then(res=>{
              this.editInfoVisible = false
              setTimeout(()=>{
                this.getActivitiesList(this.sendParmas)
              },2000)
            })
          }
        },
        // 删除
        deleteInfoClick(id){
          this.confirmVisible = true
          this.confirmId = id
        },
        commitModel(){
          this.deleteActivities({id:this.confirmId}).then(res=>{
            this.confirmVisible = false
            this.getActivitiesList(this.sendParmas)
          })
        },
        // 清空内容
        clernContent(){
          for (let k in this.addList) {
            this.addList[k] = ''
          }
        },
        //富文本编辑器  文本改变时 设置字段值
         onEditorChange({ editor, html, text }) {
          this.addList.content = html

        },
        // 上传图片
        handleAvatarSuccess (res, file) {
          this.imageUrl = URL.createObjectURL(file.raw)
        },
        formImageChange (file, fileList) {
          this.imageUrl = URL.createObjectURL(file.raw)
          this.addList.link = file.raw
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
            sum: this.setupStore.activitiesList.data.count || 0
          }
        }
      },
    }
  </script>

  <style lang="less" scoped>
.form_epayindex{
  padding: 0 10px;
  margin-bottom: 10px;
  overflow: auto;
  height: 600px;
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
        height: 148px;
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
.epayindex_content{
  width: 320px;
  height: 60px;
  overflow: hidden;
}
  </style>
