<template>
    <div class="container">
      <table class="table">
        <tbody>
          <tr class="nav">
            <td colspan="10">
              {{$L.t('annoucement.tcgg_1.popTitle')}}
              <input @click="addInfodata()" type="submit" :value="$L.t('annoucement.tcgg_1.add')"></td>
          </tr>
          <tr class="head">
            <td>{{$L.t('annoucement.swtz_4.title')}}</td>
            <td>{{$L.t('annoucement.swtz_4.content')}}</td>
            <td>{{$L.t('annoucement.tcgg_1.addTime')}}</td>
            <td>{{$L.t('table.status')}}</td>
            <td>{{$L.t('table.handle')}}</td>
          </tr>
          <tr class="odd" v-for="item in annoucementStore.popupList.data.data">
            <td>{{item.title}}</td>
            <td>
              <div class="operation_img">
                <img :src="item.content" alt="">
              </div>
            </td>
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
          <tr v-if="!annoucementStore.popupList.data.data">
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
          <div class="formBox_title">{{$L.t('annoucement.tcgg_1.popNotice')}}</div>
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
                <div class="formLi_title">
                  {{$L.t('agent.agent_0.herf')}}
                </div>
                <div class="formLi_content">
                  <input type="text" v-model="addList.link" :placeholder="$L.t('annoucement.tcgg_1.importHerf')">
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
            <li v-show="status">
              <div class="formLi_title">
                {{$L.t('table.status')}}
              </div>
              <div class="formLi_content">
                <el-radio v-model="addList.enable" label="1">{{$L.t('annoucement.tcgg_1.show')}} </el-radio>
                <el-radio v-model="addList.enable" label="0">{{$L.t('annoucement.tcgg_1.hide')}} </el-radio>
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
        import {getSession,languageId} from '@/common/common'
        export default {
          data () {
            return {
              sendParmas:{
                page:1,
                limit:20,
                typeid:'11',
                sum:'',
              },
              // 新增内容
              addList:{
                addTime:'',
                title:'',
                typeid:'11',
                enable:'',
                content:'',
                link:'',
                startime:'',
                endtime:'',
                id:''
              },
              editInfoVisible:false,
              titleAnnout:'',
              visibleNum:'',
              editid:'',
              status:false,
              imageUrl: '',
              // 弹窗提示
              confirmVisible: false,
              confirmId:''
            }
          },
          created (){
            this.getPopupList(this.sendParmas)
          },
          mounted(){

          },
          methods: {
            ...mapMutations([
            ]),
            ...mapActions([
              "getPopupList",
              "AddPopupList",
              "updatPopupList",
              "deletePopupList"
            ]),
            // 分页组件返回的参数
            handlePage (data) {
              this.sendParmas.page = data.page
              this.sendParmas.limit = data.limit
              this.getPopupList(this.sendParmas)
            },
            // 添加
            addInfodata(){
              this.titleAnnout = this.$L.t('annoucement.tcgg_1.add')
              this.status = false
              this.editInfoVisible = true
              this.visibleNum = 1
              this.clernContent()
              this.imageUrl = ''
            },
            // 修改
            editInfoClick (item) {
              this.editid = item.id
              this.titleAnnout =this.$L.t('fixed')
              this.status = true
              this.editInfoVisible = true
              this.visibleNum = 2
              for (let k in this.addList) {
                this.addList[k] = item[k]
              }
              this.imageUrl = this.addList.content
              this.addList.startime = this.times(item.startime)
              this.addList.endtime = this.times(item.endtime)
            },
            // 提交
            submitVal(){
              this.addList.typeid = '11'
              let d = new FormData()
              let code = languageId(localStorage.getItem('languageId') || 'en')
              d.append('language',code)
              for(let k in this.addList){
                if(k != 'content'){
                  d.append(k,this.addList[k])
                }
              }
              if(this.visibleNum == 1){//新增
                d.append('content',this.addList.content)
                this.AddPopupList(d).then(res=>{
                  this.editInfoVisible = false
                  setTimeout(()=>{
                    this.getPopupList(this.sendParmas)
                    this.addList.content = ''
                  },2000)
                })
              }else{//修改
                if(typeof(this.addList.content) == 'object'){
                  d.append('content', this.addList.content)
                }
                this.addList.id = this.editid
                this.updatPopupList(d).then(res=>{
                  this.editInfoVisible = false
                  setTimeout(()=>{
                    this.getPopupList(this.sendParmas)
                    this.addList.content = ''
                  },2000)
                })
              }
            },
            // 删除
            delectUser(id){
              this.confirmVisible = true
              this.confirmId = id
            },
            commitModel(){
              this.deletePopupList({id:this.confirmId}).then(res=>{
                this.confirmVisible = false
                this.getPopupList(this.sendParmas)
              })
            },
            // 清空内容
            clernContent(){
              for (let k in this.addList) {
                this.addList[k] = ''
              }
            },
            // 上传图片
            handleAvatarSuccess (res, file) {
              this.imageUrl = URL.createObjectURL(file.raw)
            },
            formImageChange (file, fileList) {
              this.imageUrl = URL.createObjectURL(file.raw)
              this.addList.content = file.raw
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
                sum: this.annoucementStore.popupList.data.count
              }
            }
          },
        }
      </script>
  <style lang="less" scoped>
    .operation_img{
      width: 150px;
      height: 58px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    .form_container{
      height: 450px;
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
