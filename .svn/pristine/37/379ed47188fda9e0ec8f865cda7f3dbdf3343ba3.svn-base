<template>
  <div class="container">
    <table class="table">
      <tbody>
      <tr class="nav">
        <td colspan="10">
          {{$L.t('setup.info268')}}
          <span class="active_state">
            <span>{{$L.t('setup.info212')}}:</span>
            <el-radio @change="radioData" v-model="formData.upLevelReward" label="1">{{$L.t('open')}}</el-radio>
            <el-radio @change="radioData" v-model="formData.upLevelReward" label="0">{{$L.t('close')}}</el-radio>
          </span>
        </td>
      </tr>
      <tr>
        <td colspan="10">
          <div class="active_detail">{{$L.t('setup.info269')}}:
            <input @click="setInfodata()" type="submit" :value=" $L.t('setup.info215') ">
            <input @click="recodeInfodata()" type="submit" :value=" $L.t('setup.info270')">
          </div>
        </td>
      </tr>
      <tr class="active_time">
        <td colspan="9">
          <span>{{$L.t('bonusGame.MoneyQuery.zh36')}} :</span>
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
        </td>
      </tr>
      <tr class="active_time">
        <td colspan="9">
          <span>{{$L.t('setup.info271')}} :</span>
            <!-- datetime -->
          <el-date-picker
            v-model="activeTime"
            type="datetimerange"
            value-format="yyyy-MM-dd HH:mm:ss"
            format="yyyy-MM-dd HH:mm:ss"
            :range-separator="$L.t('common.zhi')"
            :start-placeholder="$L.t('annoucement.swtz_4.startTime')"
            :end-placeholder="$L.t('annoucement.swtz_4.endTime')">
          </el-date-picker>
        </td>
      </tr>
      <tr class="head">
        <td>{{$L.t('setup.info272')}}</td>
        <td>{{$L.t('setup.info273')}}</td>
        <td>{{$L.t('report.info3')}}</td>
        <td>{{$L.t('setup.info274')}}</td>
        <td>{{$L.t('setup.info275')}}</td>
      </tr>
      <tr v-for="(item,index) in formData.data" :key="index">
        <td>{{item.level}}</td>
        <td>{{item.levelName}}</td>
        <td>{{item.minScore}}</td>
        <td><input type="text" v-model="item.reward"></td>
        <td>{{item.jumpReward}}</td>
      </tr>
      <tr v-if="countData.code != 0">
        <td colspan="13" class="nodata">
          {{$L.t('noData')}}
        </td>
      </tr>
      <tr v-if="countData.code == 0">
        <td colspan="13" class="nodata">
         <input @click="editorInfodata()" type="submit" :value=" $L.t('saveChange') ">
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
        activeTime: [],
        itemInput:'',
        formData:[],
        countData:'',
        // 活动状态
        redSwitchActive:'1',
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
          type:28,
          username:'',
          fromTime:'',
          toTime:'',
          page:'1',
          limit:'20'
        },
        days: '',
        levelTime:[],
      }
    },
    created (){
      this.enterData()
    },
    components: {
      quillEditor
    },
    methods: {
      ...mapActions([
        'getLevel',
        'setRewardData',
        'setRewardStatus',
        'getRewardNotice',
        'editRewardNotice',
        'getRawardList',
        'addQcode'
      ]),
      enterData(){
        this.getLevel().then(res=>{
          this.countData = res
          this.formData = res.data
          this.levelTime = res.data.levelUpRewardSetting
          // 领取时间
          this.allTime = this.allTime.filter(function (s) {
              return s
          });
          this.allTime[0] = this.levelTime.dailyStart
          this.allTime[1] = this.levelTime.dailyEnd
          // 活动时间
          this.activeTime = this.activeTime.filter(function (res) {
              return res
          })
          this.activeTime[0] = this.levelTime.start
          this.activeTime[1] = this.levelTime.end

        })
      },
      // 保存修改
      editorInfodata(){
        var arry = []
        for(let k in this.formData.data){
          let obj = {}
          obj.id = this.formData.data[k].id
          obj.reward = this.formData.data[k].reward
          arry.push(obj)
        }
        this.setRewardData({
          datas:arry,
          dailyStart:this.allTime[0],
          dailyEnd:this.allTime[1],
          start:this.activeTime[0],
          end:this.activeTime[1]
        }).then(res=>{
          this.enterData()
        })
      },
      // 活动状态切换
      radioData(){
        this.setRewardStatus().then(res=>{
          this.enterData()
        })
      },
      // 前台公告设置
      setInfodata(){
        this.getRewardNotice({typeid:28}).then(res=>{
          this.setInfoVisible = true
          this.addList.title = res.data.title
          this.addList.description = res.data.description
          this.addList.content = res.data.content
          this.imageUrl = res.data.link
          this.addList.sort = res.data.sort
          this.addList.startime = this.times(res.data.startime)
          this.addList.endtime = this.times(res.data.endtime)
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
        da.append('typeid', 28)
        this.editRewardNotice(da).then(res=>{
          this.setInfoVisible = false
        })
      },
      // 奖金发放记录
      recodeInfodata(){
        this.seachData.fromTime = ''
        this.seachData.toTime = ''
        this.recodVisible = true
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
.active_state{
  float: right;
  padding-right: 20px;
  span{
    margin-right: 10px;
  }
}
.active_detail{
  line-height: 30px;
  input{
    margin-left:10px;
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
.active_time{
      line-height: 40px;
}
</style>
