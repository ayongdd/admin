<template>
    <div class="container">
      <table class="table">
        <tbody>
          <tr class="nav">
            <td colspan="10">
              {{$L.t('setup.info169')}}
              <input @click="addInfodata()" type="submit" :value="$L.t('annoucement.tcgg_1.add')"></td>
          </tr>
          <tr class="head">
            <td>{{$L.t('annoucement.swtz_4.title')}}</td>
            <td>{{$L.t('setup.info163')}}</td>
            <td>{{$L.t('setup.info191')}}</td>
            <td>{{$L.t('lottery.zh91')}}</td>
            <td>{{$L.t('annoucement.tcgg_1.addTime')}}</td>
            <td>{{$L.t('table.status')}}</td>
            <td>{{$L.t('table.handle')}}</td>
          </tr>
          <tr class="odd" v-for="item in setupStore.dataCoupletsList.data.data">
            <td>{{item.title}}</td>
            <td><img width="140" height="60" :src="item.content" alt=""></td>
            <td>{{item.typeid == 15?$L.t('setup.info192'):$L.t('setup.info193')}}</td>
            <td>{{item.sort}}</td>
            <td>{{times(item.addTime)}}</td>
            <td>{{item.enable == 0?$L.t('setup.info57'):$L.t('annoucement.tcgg_1.show')}}</td>
            <td>
              <span>
                <button class="popBtn" @click="editInfoClick(item)"> {{$L.t('manager.info21')}}</button>
              </span>
              <span>
                <button class="popBtn" @click="delectUser(item.id)"> {{$L.t('delete')}}</button>
              </span>
            </td>
          </tr>
          <tr v-if="getPageData.sum>0">
            <td colspan="8">
              <page-limit :pageData="getPageData" :inputShow="'1'"
                @handlePage="handlePage"></page-limit>
            </td>
          </tr>
          <tr v-if="!setupStore.dataCoupletsList.data.data">
            <td colspan="8" class="nodata"> {{$L.t('noData')}}</td>
          </tr>
        </tbody>
      </table>
      <!-- 修改 -->
      <el-dialog
        :title="titleAnnout"
        :visible.sync="editInfoVisible"
        width="700px">
        <div v-if="editInfoVisible" class="form_container">
          <div class="formBox_title"> {{$L.t('setup.info169')}}</div>
          <ul>
            <li>
              <div class="formLi_title"> {{$L.t('setup.info191')}}(*{{$L.t('manager.info14')}})</div>
              <div class="formLi_content">
                <select v-model="addList.typeid">
                  <option value="">{{$L.t('setup.info194')}}</option>
                  <option :value="15">{{$L.t('setup.info195')}}</option>
                  <option :value="16">{{$L.t('setup.info196')}}</option>
                </select>
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('annoucement.swtz_4.title')}}(*{{$L.t('manager.info14')}})</div>
              <div class="formLi_content">
                <input type="text" v-model="addList.title" :placeholder="$L.t('annoucement.tcgg_1.importTitle')">
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('lottery.zh91')}}(*{{$L.t('manager.info14')}})</div>
              <div class="formLi_content">
                <input type="text" v-model="addList.sort" :placeholder="$L.t('lottery.zh102')">
              </div>
            </li>
            <li>
                <div class="formLi_title">{{$L.t('agent.agent_0.herf')}}(*{{$L.t('manager.info14')}})</div>
                <div class="formLi_content">
                  <input type="text" v-model="addList.link" :placeholder="$L.t('annoucement.tcgg_1.importHerf')">
                </div>
              </li>
            <li>
              <div class="formLi_title">{{$L.t('setup.info144')}}(*{{$L.t('manager.info14')}})</div>
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
                  <img v-if="addList.content" :src="addList.content" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
            </li>
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
        import {getSession,languageId} from '@/common/common'
        export default {
          data () {
            return {
              sendParmas:{
                page:1,
                limit:20,
                typeid:'',
                sum:'',
              },
              // 新增内容
              addList:{
                title:'',
                typeid:'',
                content:'',
                id:'',
                sort:'',
                link:'',
                enable:''
              },
              editInfoVisible:false,
              titleAnnout:'',
              visibleNum:'',
              editid:'',
              status:false,
              imageUrl: '',
              file:'',
              // 弹窗提示
              confirmVisible: false,
              confirmId:''
            }
          },
          created (){
            this.getCoupletsList(this.sendParmas)
          },
          mounted(){

          },
          methods: {
            ...mapMutations([
            ]),
            ...mapActions([
              "getCoupletsList",
              "addCoupletsList",
              "deleteSowingList",
              "updateCoupletsList",
              "deletePopupList"
            ]),
            // 分页组件返回的参数
            handlePage (data) {
              this.sendParmas.page = data.page
              this.sendParmas.limit = data.limit
              this.getCoupletsList(this.sendParmas)
            },
            // 添加
            addInfodata(){
              this.titleAnnout = this.$L.t('chatRoom.zh58')
              this.status = false
              this.editInfoVisible = true
              this.visibleNum = 1
              this.clernContent()
              this.addList.enable = 1
            },
            // 修改
            editInfoClick (item) {
              this.editid = item.id
              this.titleAnnout = this.$L.t('manager.info21')
              this.status = true
              this.editInfoVisible = true
              this.visibleNum = 2
              for (let k in this.addList) {
                this.addList[k] = item[k]
              }
              this.addList.enable = parseInt(item.enable)
            },
            // 删除
            delectUser(id){
              this.confirmVisible = true
              this.confirmId = id
            },
            commitModel(){
              this.deleteSowingList({id:this.confirmId}).then(res=>{
                this.confirmVisible = false
                this.getCoupletsList(this.sendParmas)
              })
            },
            // 提交
            submitVal(){
              if(this.addList.title == '' || this.addList.typeid == '' || this.addList.content == ''|| this.addList.sort == ''|| this.addList.link == ''){
                this.$message(this.$L.t('manager.info38'))
                return false
              }
              let d = new FormData()
              let code = languageId(localStorage.getItem('languageId') || 'en')
              d.append('language',code)
              for(let k in this.addList){
                if(k != 'content'){
                  d.append(k,this.addList[k])
                }
              }
              if(this.visibleNum == 1){//新增
                d.append('content',this.file)
                this.addCoupletsList(d).then(res=>{
                  this.editInfoVisible = false
                  setTimeout(()=>{
                    this.getCoupletsList(this.sendParmas)
                  },2000)
                    this.file = ''
                })
              }else{//修改
                if(typeof(this.file) == 'object'){
                  d.append('content', this.file)
                }
                this.addList.id = this.editid
                this.updateCoupletsList(d).then(res=>{
                  this.editInfoVisible = false
                  setTimeout(()=>{
                    this.getCoupletsList(this.sendParmas)
                  },2000)
                  this.file = ''
                })
              }
            },
            // 清空内容
            clernContent(){
              for (let k in this.addList) {
                this.addList[k] = ''
              }
            },
            // 上传图片
            handleAvatarSuccess (res, file) {
              this.addList.content = URL.createObjectURL(file.raw)
            },
            formImageChange (file, fileList) {
              this.addList.content = URL.createObjectURL(file.raw)
              this.file = file.raw
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
              "setupStore"
            ]),
            getPageData () {
              return {
                page: this.sendParmas.page,
                limit: this.sendParmas.limit,
                sum: this.setupStore.dataCoupletsList.data.count
              }
            }
          },
        }
      </script>
  <style lang="less" scoped>
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
            width: 150px;
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
