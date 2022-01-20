<template>
    <div class="container">
      <table class="table" >
        <tbody>
        <tr class="nav">
          <td colspan="10">
            {{$L.t('setup.info134')}}
            <input @click="addInfodata()" type="submit" :value="$L.t('annoucement.tcgg_1.add')"></td>
        </tr>
        <tr class="head">
          <td>{{$L.t('bonusGame.NiuNiuBetManage.zh1')}}</td>
          <td>{{$L.t('setup.info135')}}</td>
          <td>{{$L.t('lottery.zh91')}}</td>
          <td>{{$L.t('setup.info136')}}</td>
          <td>{{$L.t('table.status')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr class="odd" v-for="item in datalist">
          <td>{{item.name}}</td>
          <td>{{item.home}}</td>
          <td>{{item.sort}}</td>
          <td><span>{{item.location == 0 ? $L.t('annoucement.tcgg_1.show'): $L.t('annoucement.tcgg_1.hide')}}</span></td>
          <td>
            <el-switch
            v-model="item.isDelete"
            @change="switchVal(item)"
            :active-text="$L.t('op')"
            :inactive-text="$L.t('clo')">
          </el-switch>
        </td>
          <td>
            <span>
              <button class="popBtn" @click="editInfoClick(item)">{{$L.t('fixed')}}</button>
            </span>
          </td>
        </tr>
        <tr v-if="getPageData.sum>0">
          <td colspan="6">
            <page-limit :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
          </td>
        </tr>
          <tr v-if="!datalist">
            <td colspan="6" class="nodata">{{$L.t('noData')}}</td>
          </tr>
        </tbody>
      </table>
      <!-- 新增修改 -->
      <el-dialog
        :title="titleAnnout"
        :visible.sync="editInfoVisible"
        width="700px">
        <div v-if="editInfoVisible" class="form_container">
          <div class="formBox_title">{{$L.t('setup.info134')}}</div>
          <ul>
            <li>
              <div class="formLi_title">{{$L.t('member.info142')}}</div>
              <div class="formLi_content">
                <input type="text" v-model="addList.name" :placeholder="$L.t('setup.info137')">
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('setup.info139')}}</div>
              <div class="formLi_content">
                  <input type="text" v-model="addList.bankNa" :placeholder="$L.t('setup.info138')">
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('setup.info140')}}</div>
              <div class="formLi_content">
                  <input type="text" v-model="addList.home" :placeholder="$L.t('setup.info141')">
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('setup.info142')}}</div>
              <div class="formLi_content">
                <input type="text" v-model="addList.sort" :placeholder="$L.t('setup.info143')">
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
              <div class="formLi_title">{{$L.t('setup.info136')}}</div>
              <div class="formLi_content">
                <el-radio v-model="addList.location" label="0">{{$L.t('annoucement.tcgg_1.show')}}</el-radio>
                <el-radio v-model="addList.location" label="1">{{$L.t('annoucement.tcgg_1.hide')}}</el-radio>
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('table.status')}}</div>
              <div class="formLi_content">
                <el-radio v-model="addList.isDelete" label="0">{{$L.t('annoucement.tcgg_1.show')}}</el-radio>
                <el-radio v-model="addList.isDelete" label="1">{{$L.t('annoucement.tcgg_1.hide')}}</el-radio>
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
    import {getSession,languageId} from '@/common/common'
    export default {
      data () {
        return {
          sendParmas:{
            page:1,
            limit:20,
            sum:'',
          },
          // 新增内容
          addList:{
            name:'',
            logo:'',
            home:'',
            isDelete:'',
            location:'',
            sort:'',
            bankNa:''
          },
          editInfoVisible:false,
          titleAnnout:'',
          editorOption: {
            placeholder: this.$L.t('agent.agent_5.alert18')
          },
          visibleNum:'',
          editid:'',
          datalist:[],
          acount:'',
          imageUrl:''
        }
      },
      created (){

      },
      mounted(){
        this.getData()
      },
      methods: {
        ...mapMutations([
        ]),
        ...mapActions([
          "getBankSetList",
          "updateBanklist",
          "upBankSetSwitch",
          "deleteAnnouList"
        ]),
        // 获取数据
        getData(){
          this.getBankSetList(this.sendParmas).then(res=>{
            this.acount = res.count
            this.datalist = res.data
            this.datalist.map(val=>{
              if(val.isDelete == 1){
                val.isDelete = false
              }else{
                val.isDelete = true
              }
              return val.isDelete
            })
          })
        },
        // 分页组件返回的参数
        handlePage (data) {
          this.sendParmas.page = data.page
          this.sendParmas.limit = data.limit
          this.getData()
        },
        // 添加
        addInfodata(){
          this.titleAnnout = this.$L.t('chatRoom.zh58')
          this.editInfoVisible = true
          this.visibleNum = 1
          this.imageUrl = ''
          this.clernContent()
        },
        // 修改
        editInfoClick (item) {
          this.editid = item.id
          this.titleAnnout = this.$L.t('manager.info21')
          this.editInfoVisible = true
          this.visibleNum = 2
          this.addList.name = item.name
          this.addList.home = item.home
          this.addList.bankNa = item.bankNa
          this.addList.sort = item.sort
          this.imageUrl = item.logo
          if(item.location == 0){
            this.addList.location = '0'
          }else{
            this.addList.location = '1'
          }
          if(item.isDelete == true){
            this.addList.isDelete = '0'
          }else{
            this.addList.isDelete = '1'
          }
        },
        // 提交
        submitVal(){
          var da = new FormData()
          let code = languageId(localStorage.getItem('languageId') || 'en')
          da.append('language',code)
          for(let k in this.addList){
            if(k != 'logo'){
              da.append(k,this.addList[k])
            }
          }
          if(this.visibleNum == 1){//新增
            da.append('logo', this.addList.logo)
            this.updateBanklist(da).then(res=>{
              this.editInfoVisible = false
              this.getData()
              this.addList.logo = ''
            })
          }else{//修改
            if(typeof(this.addList.logo) == 'object'){
              da.append('logo', this.addList.logo)
            }
            da.append('id', this.editid)
            this.updateBanklist(da).then(res=>{
              this.editInfoVisible = false
              this.getData()
              this.addList.logo = ''
            })
          }
        },
        // 开关
        switchVal(item){
          this.upBankSetSwitch({id:item.id,name:item.name}).then(res=>{
            this.getData()
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
          this.addList.logo = file.raw
        },
      },
      computed: {
        ...mapState([
          "indexStore",
          "setupStore"
        ]),
        getPageData () {
          return {
            page: this.sendParmas.page,
            limit: this.sendParmas.limit,
            sum: this.acount
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
.formLi_img{
  background-color: #fbfdff;
  border: 1px dashed #c0ccda;
  border-radius: 6px;
  box-sizing: border-box;
  width: 148px;
  height: 140px;
  cursor: pointer;
  line-height: 146px;
  vertical-align: top;
}
  </style>
