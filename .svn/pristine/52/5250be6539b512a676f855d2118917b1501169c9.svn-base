<template>
  <div class="container">
    <table class="table">
      <tbody>
      <tr class="nav">
        <td colspan="10">
          {{$L.t('annoucement.xttz_5.zh1')}}
          <input @click="addInfodata()" type="submit" :value="$L.t('annoucement.tcgg_1.add')"></td>
      </tr>
      <tr class="head">
        <td>{{$L.t('annoucement.xttz_5.zh2')}}</td>
        <td>{{$L.t('table.caizhong')}}</td>
        <td>{{$L.t('annoucement.swtz_4.title')}}</td>
        <td>{{$L.t('annoucement.swtz_4.content')}}</td>
        <td>{{$L.t('table.status')}}</td>
        <td>{{$L.t('annoucement.xttz_5.zh3')}}</td>
        <th>{{$L.t('annoucement.swtz_4.startTime')}}</th>
        <td>{{$L.t('annoucement.swtz_4.endTime')}}</td>
        <td>{{$L.t('table.handle')}}</td>
      </tr>
      <tr class="odd" v-for="item in annoucementStore.lotteryColorList.data.data">
        <td>{{item.className}}</td>
        <td>
          {{item.link}}
        </td>
        <td>{{item.title}}</td>
        <td>
          <div class="operation_img">
            <img :src="item.content" alt="">
          </div>
        </td>
        <td :class="item.enable*1 == 1 ? 'color_green_c':'color-red'">
          {{item.enable*1 == 0 ?$L.t('annoucement.xttz_5.zh4'): $L.t('annoucement.xttz_5.zh5')}}
        </td>
        <td>
          {{times(item.addTime)}}
        </td>
        <td>
          {{times(item.startime)}}
        </td>

        <td>{{times(item.endtime)}}</td>
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
        <td colspan="15">
          <page-limit :pageData="getPageData" :inputShow="'1'"
                      @handlePage="handlePage"></page-limit>
        </td>
      </tr>
      <tr v-if="!annoucementStore.lotteryColorList.data.data">
        <td colspan="15" class="nodata">{{$L.t('noData')}}</td>
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
              {{$L.t('annoucement.xttz_5.zh2')}}
            </div>
            <div class="formLi_content">
              <select v-model="addList.nodeId" @change="nodeIdadd">
                <option value="">{{$L.t('annoucement.xttz_5.zh6')}}</option>
                <option :value="i.id" v-for="(i,index) in lotteryNotice" :key="index">{{i.name}}</option>
              </select>
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('table.caizhong')}}
            </div>
            <div class="formLi_content">
              <select v-model="addList.link">
                <option value="">{{$L.t('annoucement.xttz_5.zh7')}}</option>
                <option :value="i.id" v-for="(i,index) in lotterydata" :key='index'>{{i.title}}</option>
              </select>
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
              <el-radio v-model="addList.enable" label="1">{{$L.t('annoucement.xttz_5.zh5')}} </el-radio>
              <el-radio v-model="addList.enable" label="0">{{$L.t('annoucement.xttz_5.zh4')}} </el-radio>
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
  import {Message} from 'element-ui'
  export default {
    data () {
      return {
        sendParmas:{
          page:1,
          limit:20,
          typeid:'31',
        },
        // 新增内容
        addList:{
          title:'',
          nodeId:'',
          typeid:'31',
          content:'',
          id:'',
          link:'',
          startime:'',
          endtime:'',
          enable:'',
        },
        editInfoVisible:false,
        titleAnnout:'',
        visibleNum:'',
        editid:'',
        status:false,
        imageUrl: '',
        // 弹窗提示
        confirmVisible: false,
        confirmId:'',

        lotteryNotice:'',
        lotterydata:[],
        lottid:''
      }
    },
    created (){
      this.getNoticeLotteryClassList().then(res=>{
         this.lotteryNotice = res.data
      })
      this.getLotteryColorList(this.sendParmas)
    },
    mounted(){

    },
    methods: {
      ...mapMutations([
      ]),
      ...mapActions([
        "getLotteryColorList",
        "addColorInsert",
        "updataColorInsert",
        "deleteColorNotice",
        "getNoticeLotteryClassList",
        "getLotteryTypeList"
      ]),
      // 分页组件返回的参数
      handlePage (data) {
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit
        this.getLotteryColorList(this.sendParmas)
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
      // 通过彩种类型获取彩种
      nodeIdadd(){
        // this.addList.nodeId
        this.getLotteryTypeList({classID:this.addList.nodeId}).then(res=>{
          this.lotterydata = res.data
          this.addList.link = ''
        })
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
        this.getLotteryTypeList({classID:item.nodeId}).then(res=>{
          this.lotterydata = res.data
          for(let k in this.lotterydata){
            if(this.lotterydata[k].title == item.link){
              this.addList.link = this.lotterydata[k].id
              return false
            }
          }
        })
        this.imageUrl = this.addList.content
        this.addList.startime = this.times(item.startime)
        this.addList.endtime = this.times(item.endtime)

      },
      // 提交
      submitVal(){
        if(!this.addList.nodeId){
          Message({
            message:this.$L.t('annoucement.xttz_5.zh6'),
            type:"warning",
            showClose:true
          })
          return
        }
        if(!this.addList.link){
          Message({
            message:this.$L.t('annoucement.xttz_5.zh7'),
            type:"warning",
            showClose:true
          })
          return
        }
        this.addList.typeid = '31'
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
          this.addColorInsert(d).then(res=>{
            setTimeout(()=>{
              this.editInfoVisible = false
              this.getLotteryColorList(this.sendParmas)
            },2000)
          })
        }else{//修改
          if(typeof(this.addList.content) == 'object'){
            d.append('content', this.addList.content)
          }
          this.addList.id = this.editid
          this.updataColorInsert(d).then(res=>{
            setTimeout(()=>{
              this.editInfoVisible = false
              this.getLotteryColorList(this.sendParmas)
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
        this.deleteColorNotice({id:this.confirmId}).then(res=>{
          this.confirmVisible = false
          this.getLotteryColorList(this.sendParmas)
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
          sum: this.annoucementStore.lotteryColorList.data.count
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
    height: 480px;
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
