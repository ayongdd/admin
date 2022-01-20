<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>{{$L.t('setup.info276')}}</td>
      </tr>
      </tbody>
    </table>
    <table class="table mytable">
      <tbody>
      <tr class="head">
        <td colspan="9">{{$L.t('setup.info277')}}</td>
      </tr>
      <tr class="today_button">
        <td colspan="9">
          <span>{{$L.t('setup.info212')}} :</span>
          <el-radio @change="radioData" v-model="formData.status" label="1">{{$L.t('open')}}</el-radio>
          <el-radio @change="radioData" v-model="formData.status" label="0">{{$L.t('close')}}</el-radio>

          <input @click="setInfodata()" type="submit" :value=" $L.t('setup.info215') ">
          <input @click="recodeInfodata()" type="submit" :value=" $L.t('setup.info270') ">
        </td>
      </tr>
      <tr class="head-low">
        <td colspan="9">
          {{$L.t('setup.info278')}}：
        </td>
      </tr>
      <tr>
        <td colspan="9">
          <span class="time_span">{{$L.t('setup.info279')}}:</span>
          <el-time-picker
          is-range
          v-model="allTime"
          value-format="HH:mm:ss"
          format="HH:mm:ss"
          :range-separator="$L.t('common.zhi')"
          :start-placeholder="$L.t('annoucement.swtz_4.startTime')"
          :end-placeholder="$L.t('annoucement.swtz_4.endTime')"
          :placeholder="$L.t('chatRoom.zh137')">
        </el-time-picker>
      <!-- <button @click="saveSetting">保 存 修 改</button> -->
        </td>
      </tr>
      <tr>
        <td colspan="9">
          <span class="time_span">{{$L.t('setup.info280')}}：</span> <input type="text"  v-model="formData.gradeOne">
        </td>
      </tr>
      <tr>
        <td colspan="9">
          <span class="time_span">{{$L.t('setup.info281')}}：</span> <input type="text"  v-model="formData.gradeTwo">
        </td>
      </tr>
      <tr>
        <td colspan="9">
          <span class="time_span">{{$L.t('setup.info282')}}：</span> <input type="text"  v-model="formData.gradeThree">
        </td>
      </tr>
      <tr class="head-low">
        <td>
          {{$L.t('setup.info283')}}：
        </td>
        <td>
          <button @click="addDataList(formData.data)">{{$L.t('bonusGame.NiuNiuBetManage.zh28')}} + </button>
        </td>
      </tr>
      <tr>
        <td colspan="9">
          <ul class="level_grade">
            <li v-for="(item, index) in formData.data" :key="index">
              <div>{{$L.t('chatRoom.zh56')}}
                <select v-model="item.level_sel">
                  <option v-for="(i,index) in leveData.data" :key="index" :value="i.level">{{i.levelName}}</option>
                </select>
              </div>
              <div class="levebl">{{$L.t('setup.info284')}} <input type="text"  v-model="item.garde_one"> %</div>
              <div class="levebl">{{$L.t('setup.info285')}} <input type="text"  v-model="item.garde_two"> %</div>
              <div class="levebl">{{$L.t('setup.info286')}} <input type="text"  v-model="item.garde_three"> %</div>
              <div class="levebl"><button @click="deleteList(index,formData.data)">{{$L.t('delete')}}</button></div>
            </li>
          </ul>
        </td>
      </tr>
      <tr v-if="formData.data">
        <td colspan="9" align="center" style="padding: 30px 0;">
          <button @click="saveSetting">{{$L.t('saveChange')}}</button>
        </td>
      </tr>
      </tbody>
    </table>
    <!-- 前台公告设置 -->
    <el-dialog
      :title="$L.t('setup.info251')"
      :visible.sync="setInfoVisible"
      width="700px">
      <div v-if="setInfoVisible" class="form_epayindex">
        <div class="formBox_title">{{$L.t('setup.info252')}}</div>
        <ul>
          <li>
            <div class="formLi_title">{{$L.t('annoucement.swtz_4.title')}}({{$L.t('manager.info14')}})</div>
            <div class="formLi_content">
              <el-input v-model="addList.title" :placeholder="$L.t('annoucement.tcgg_1.importTitle')"></el-input>
            </div>
          </li>
          <li>
            <div class="formLi_title">{{$L.t('setup.info165')}}({{$L.t('manager.info14')}})</div>
            <div class="formLi_content">
                <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                :placeholder="$L.t('setup.info253')"
                v-model="addList.description">
              </el-input>
            </div>
          </li>
          <li>
            <div class="formLi_title">{{$L.t('setup.info254')}}({{$L.t('manager.info14')}})</div>
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
            <div class="formLi_title">{{$L.t('setup.info144')}}({{$L.t('manager.info14')}})</div>
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
            <div class="formLi_title">{{$L.t('lottery.zh91')}}({{$L.t('manager.info14')}})</div>
            <div class="formLi_content" style="width:220px;">
              <el-input type="number" v-model="addList.sort" :placeholder="$L.t('lottery.zh102')"></el-input>
            </div>
            <span class="red">{{$L.t('setup.info255')}}</span>
          </li>
           <li>
            <div class="formLi_title">{{$L.t('annoucement.swtz_4.startTime')}}({{$L.t('manager.info14')}})</div>
            <div class="formLi_content" style="width:220px;">
              <el-date-picker
                v-model="addList.startime"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm:ss"
                format="yyyy-MM-dd HH:mm:ss"
                :placeholder="$L.t('annoucement.tcgg_1.chooseTime')"
                :picker-options="pickerOptionsStart">
              </el-date-picker>
            </div>
            <span class="red">{{$L.t('setup.info256')}}</span>
          </li>
          <li>
            <div class="formLi_title">{{$L.t('annoucement.swtz_4.endTime')}}({{$L.t('manager.info14')}})</div>
            <div class="formLi_content" style="width:220px;">
              <el-date-picker
                v-model="addList.endtime"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm:ss"
                format="yyyy-MM-dd HH:mm:ss"
                :placeholder="$L.t('annoucement.tcgg_1.chooseTime')"
                :picker-options="pickerOptionsEnd">
              </el-date-picker>
            </div>
            <span class="red">{{$L.t('setup.info257')}}</span>
          </li>
          <li>
            <button class="form_commit" @click="submitVal()">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>
    <!-- 奖金发放记录 -->
    <el-dialog
      :title="$L.t('setup.info270')"
      :visible.sync="recodVisible"
      :modal-append-to-body="recodVisible"
      :append-to-body="recodVisible"
      :modal="recodVisible"
      width="860px">
      <set-Announcement v-if="recodVisible" :setformData="seachData"></set-Announcement>
    </el-dialog>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  import {Message} from 'element-ui'
  import {getSession,toolbarOptions,times,languageId} from '@/common/common'
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  import 'quill/dist/quill.bubble.css';
  import { quillEditor } from 'vue-quill-editor'
  export default {
    data () {
      return {
        times,
        allTime: ['', ''],
        formData:[],
        leveData:[],
        // 编辑
        setInfoVisible:false,
        addList:{
          title:'',
          description:'',
          content:'',
          link:'',
          startime:'',
          endtime:'',
          sort:''
        },
        pickerOptionsStart: {
          disabledDate: time => {
            let endDateVal = this.addList.endtime;
            if (endDateVal) {
                return time.getTime() > new Date(endDateVal).getTime();
            }
          }
        },
        pickerOptionsEnd: {
          disabledDate: time => {
              let beginDateVal = this.addList.startime;
              if (beginDateVal) {
                  return (
                      time.getTime() <
                      new Date(beginDateVal).getTime()
                  );
              }
          },
        },
        editorOption: {
          placeholder: this.$L.t('setup.info258'),
          theme: 'snow',
          modules: {
            toolbar: {
              container: toolbarOptions,
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
        diyUpdataImg:'',
        imageUrl:'',
        recodVisible:false,
        seachData:{
          type:29,
          username:'',
          fromTime:'',
          toTime:'',
          page:'1',
          limit:'20'
        },
        days: '',
      }
    },
    created (){
      this.enterData()
    },
    components: {
      quillEditor
    },
    methods: {
      ...mapMutations([

      ]),
      ...mapActions([
        'getLevel',
        'getDailyReward',
        'editDailyRewardSet',
        'switchDailyReward',
        'getRewardNotice',
        'addQcode',
        'editRewardNotice',
        'getRawardList',
      ]),
      enterData(){
        this.getLevel().then(res=>{
          this.leveData = res.data
        })
        this.getDailyReward().then(res=>{
          this.formData = res.data
          this.formData.status = this.formData.status.toString()
          this.allTime = this.allTime.filter(function (s) {
              return s
          });
          this.allTime.push(this.formData.startTime)
          this.allTime.push(this.formData.endTime)
        })
      },
      deleteList (index,name) {
        name.splice(index, 1)
      },
      // 增加
      addDataList (name) {
        name.push({garde_one: '0', garde_three: '0',garde_two:'0',level_sel:'1'})
      },
      saveSetting(){
        var startTime = ''
        var endTime = ''

        for(let k in this.allTime){
          startTime = this.allTime[0],
          endTime = this.allTime[1]
        }
        var arry = []
        var arry1 = []
        var arry2 = []
        var arry3 = []
        var submitdata = this.formData.data
        for(let k in submitdata){
          arry.push(submitdata[k].garde_one)
          arry1.push(submitdata[k].garde_three)
          arry2.push(submitdata[k].garde_two)
          arry3.push(submitdata[k].level_sel)
        }

        var da = {
          startTime:startTime,
          endTime:endTime,
          gradeOne:this.formData.gradeOne,
          gradeTwo:this.formData.gradeTwo,
          gradeThree:this.formData.gradeThree,
          garde_one:arry,
          garde_three:arry1,
          garde_two:arry2,
          level_sel:arry3
        }
        this.editDailyRewardSet(da).then(res=>{
          this.getLevel().then(res=>{
            this.leveData = res.data
          })
          this.getDailyReward().then(res=>{
            this.formData = res.data
            this.formData.status = this.formData.status.toString()
          })
        })
      },
      // 活动状态切换
      radioData(){
        this.switchDailyReward().then(res=>{
          this.getLevel().then(res=>{
            this.leveData = res.data
          })
          this.getDailyReward().then(res=>{
            this.formData = res.data
            this.formData.status = this.formData.status.toString()
          })
        })
      },
      // 前台公告设置
      setInfodata(){
        this.getRewardNotice({typeid:29}).then(res=>{
          this.setInfoVisible = true
          this.addList.title = res.data.title
          this.addList.description = res.data.description
          this.addList.content = res.data.content
          this.addList.sort = res.data.sort
          this.addList.startime = this.times(res.data.startime)
          this.addList.endtime = this.times(res.data.endtime)
          this.imageUrl = res.data.link
          this.addList.link = ""
        })
      },
      //富文本编辑器
      onEditorChange({ editor, html, text }) {
        this.addList.content = html
      },
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
          let length = quill.getSelection().index;
          setTimeout(()=>{
            quill.insertEmbed(length, 'image', imgInfo)
            quill.setSelection(length + 1)
          },2000)
        })
      },
      // 上传图片
      handleAvatarSuccess (res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
      },
      formImageChange (file, fileList) {
        this.imageUrl = URL.createObjectURL(file.raw)
        this.addList.link = file.raw
      },
      // 提交前台公告设置
      submitVal(){
        if(!this.addList.title || !this.addList.description || !this.imageUrl || !this.addList.content
        || !this.addList.startime || !this.addList.endtime || !this.addList.sort){
          Message({
            message:this.$L.t('manager.info38'),
            type:"warning",
            showClose:true
          })
          return false
        }
        var da = new FormData()
        let code = languageId(localStorage.getItem('languageId') || 'en')
        da.append('language',code)
        for(let k in this.addList){
          if(k != 'link'){
            da.append(k,this.addList[k])
          }else if(typeof(this.addList.link) == 'object'){
            da.append('link', this.addList.link)
          }
        }
        da.append('typeid', 29)
        this.editRewardNotice(da).then(res=>{
          this.setInfoVisible = false
        })
      },
      // 奖金发放记录
      recodeInfodata(){
        this.recodVisible = true
        this.seachData.fromTime = ''
        this.seachData.toTime = ''
        // this.getRawardList(this.seachData)
      },
      // 快捷选时
      selectDay(d){
        this.days = d
      },
      getTimer(start,end){
        this.seachData.fromTime = start
        this.seachData.toTime = end
      },
      // 搜索
      seachFormCommit(){
        this.seachData.page = 1
        this.getRawardList(this.seachData)
      },
      handleMoreLogPage (data) {
        this.seachData.page = data.page
        this.seachData.limit = data.limit
        this.getRawardList(this.seachData)
      },
    },
    computed: {
      ...mapState([
        'memberStore',
        'specialOfferStore'
      ]),
      getMoreLogData () {
        return {
          page: this.seachData.page,
          limit: this.seachData.limit,
          sum: this.specialOfferStore.dataRawardList.data.count || 0
        }
      },
    },
  }
</script>

<style lang="less" scoped>
  .table td span{
    display: inline-block;
    width: 100px;
  }
  .head-low {
    background: #ddd;
    color:#000;
    font-weight: 600;
  }
  .mytable input {
    height: 24px;
  }
  .mytable textarea {
    min-height: 100px;
    height: auto;
    line-height: 20px;
    padding: 6px 10px;
    resize: vertical;
    border-width: 1px;
    border-style: solid;
    background-color: #fff;
    border-radius: 2px;
    color: #666;
    border-color: #e6e6e6;
    margin: 5px;
  }
  .level_grade{
    li {
      display: flex;
      height:40px;
      line-height:40px;
      input[type='text']{
        width: 50px;
      }
      div:first-child{
        width: 210px;
        margin: 0 15px;
      }
      .levebl{
         width: 345px;
      }
      select{
        width: 150px;
        padding: 3px 5px;
      }
    }
  }
  .today_button{
    input{
      margin: 0 50px;
    }
  }
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
        width: 180px;
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
      // 提交按钮
      .form_commit{
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        padding: 0 20px;
        text-align: center;
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
// 调节颜色
.log_content{
  color: #444;
  font-size: 13px;
  .odd > td{
    padding: 6px 4px;
  }
  .pointer{
    color: #000;
  }
  .header_search{
      display: flex;
      align-items: center;
    }
}
</style>
