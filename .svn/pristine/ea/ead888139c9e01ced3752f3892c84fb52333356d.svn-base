<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>{{$L.t('setup.info165')}}</td>
      </tr>
      </tbody>
    </table>
    <table class="table mytable">
      <tbody>
      <tr class="head">
        <td>{{$L.t('setup.info210')}}</td>
        <td>
          <button @click="getCountFn">{{$L.t('setup.info211')}}</button>
          <button @click="goRedFn">{{$L.t('chatRoom.zh68')}}</button>
        </td>
      </tr>
      <tr>
        <td colspan="9">
          <div class="div_flex">
            <span>{{$L.t('setup.info212')}} :</span>
            <el-radio @change="changeModel(1)" v-model="redData.redSwitchActive" label=1>{{$L.t('setup.info213')}}</el-radio>
            <el-radio @change="changeModel(2)" v-model="redData.redSwitchActive" label=2>{{$L.t('setup.info214')}}</el-radio>
            <el-radio @change="changeModel(3)" v-model="redData.redSwitchActive" label=0>{{$L.t('close')}}</el-radio>
            <input @click="setInfodata()" type="submit" :value="$L.t('setup.info215')  ">
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <!-- 模式一 -->
    <table class="table mytable" v-if="redData.redSwitchActive == 1 || redData.redSwitchActive == 0">
      <tbody>
        <tr class="head-low">
          <td colspan="9">
            <span>{{$L.t('setup.info216')}}：</span>
          </td>
        </tr>
        <tr>
          <td colspan="9">
            <span>{{$L.t('setup.info217')}} :</span> <input type="text" v-model="redData.redAmountActive"> {{$L.t('setup.info218')}}: <input type="text"  v-model="redData.redCountActive">
          </td>
        </tr>
        <tr>
          <td colspan="9">
            <span>{{$L.t('bonusGame.MoneyQuery.zh36')}} :</span>
            <el-time-picker
            is-range
            v-model="value4"
            :range-separator="$L.t('common.zhi')"
            :start-placeholder="$L.t('annoucement.swtz_4.startTime')"
            :end-placeholder="$L.t('annoucement.swtz_4.endTime')"
            :placeholder="$L.t('chatRoom.zh137')">
          </el-time-picker>
          </td>
        </tr>
        <tr>
          <td colspan="9">
            <span>{{$L.t('setup.info219')}} :</span> <input type="text"  v-model="redData.redRobCountActive">
          </td>
        </tr>
        <tr>
          <td colspan="9">
            <span>{{$L.t('setup.info220')}} :</span>
            <el-radio v-model="redData.redDistributionActive" label="1">{{$L.t('setup.info221')}}</el-radio>
            <el-radio v-model="redData.redDistributionActive" label="2">{{$L.t('setup.info222')}}</el-radio>
            <el-radio v-model="redData.redDistributionActive" label="3">{{$L.t('setup.info223')}}</el-radio>
            <el-radio v-model="redData.redDistributionActive" label="4">{{$L.t('setup.info224')}}</el-radio>
            <el-radio v-model="redData.redDistributionActive" label="0">{{$L.t('setup.info225')}}</el-radio>
          </td>
        </tr>
        <tr>
          <td colspan="9">
            <span>{{$L.t('setup.info226')}}：</span>
            <textarea name="" cols="10" rows="3"  v-model="redData.redActiveContent">
            </textarea>
          </td>
        </tr>
        <tr class="head-low">
          <td>
            {{$L.t('setup.info227')}}：
          </td>
          <td>
            <button @click="addRedList('zcsczsRedRule')">{{$L.t('bonusGame.NiuNiuBetManage.zh28')}} + </button>
          </td>
        </tr>
        <tr>
          <td colspan="9">
            <ul>
              <li v-for="(item, index) in zcsczsRedRule">
                <div>
                  {{$L.t('table.rechargeMoney')}}:
                </div>
                <div>
                  <input type="text"  v-model="item.key"> {{$L.t('yuan')}}
                </div>
                <div>
                  {{$L.t('lottery.zh110')}} <input type="text"  v-model="item.value">  {{$L.t('moneyAdmin.Draw.info54')}}
                </div>
                <div>
                  <button @click="deleteList(index,'zcsczsRedRule')">{{$L.t('delete')}}</button>
                </div>
              </li>
            </ul>
          </td>
        </tr>
        <tr class="head-low">
          <td>
            {{$L.t('setup.info228')}}：
          </td>
          <td>
            <button @click="addRedList('sczsRedRule')">{{$L.t('bonusGame.NiuNiuBetManage.zh28')}} + </button>
          </td>
        </tr>
        <tr>
          <td colspan="9">
            <ul>
              <li v-for="(item, index) in sczsRedRule">
                <div>
                  {{$L.t('table.rechargeMoney')}}:
                </div>
                <div>
                  <input type="text"  v-model="item.key"> {{$L.t('yuan')}}
                </div>
                <div>
                  {{$L.t('lottery.zh110')}} <input type="text"  v-model="item.value">  {{$L.t('moneyAdmin.Draw.info54')}}
                </div>
                <div>
                  <button @click="deleteList(index,'sczsRedRule')">{{$L.t('delete')}}</button>
                </div>
              </li>
            </ul>
          </td>
        </tr>
        <tr class="head-low">
          <td>
            {{$L.t('setup.info229')}}：
          </td>
          <td>
            <button @click="addRedList('ljzsRedRule')">{{$L.t('bonusGame.NiuNiuBetManage.zh28')}} + </button>
          </td>
        </tr>
        <tr>
          <td colspan="9">
            <ul>
              <li v-for="(item, index) in ljzsRedRule">
                <div>
                  {{$L.t('table.rechargeMoney')}}:
                </div>
                <div>
                  <input type="text"  v-model="item.key"> {{$L.t('yuan')}}
                </div>
                <div>
                  {{$L.t('lottery.zh110')}} <input type="text"  v-model="item.value">  {{$L.t('moneyAdmin.Draw.info54')}}
                </div>
                <div>
                  <button @click="deleteList(index,'ljzsRedRule')">{{$L.t('delete')}}</button>
                </div>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td colspan="9" align="center">
            <button @click="saveSetting">{{$L.t('saveChange')}}</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 模式二 -->
     <table class="table mytable" v-if="redData.redSwitchActive == 2">
      <tbody>
        <tr class="head-low">
          <td>
            {{$L.t('setup.info230')}}：
          </td>
          <td>
            <button @click="addModelList('modelData')">{{$L.t('bonusGame.NiuNiuBetManage.zh28')}} + </button>
          </td>
        </tr>
        <tr>
          <td colspan="9">
            <ul>
              <li v-for="(item, index) in modelData" :key="index">
                <div class="money_recharge">{{$L.t('table.rechargeMoney')}}: <input type="number" v-model="item.money"> {{$L.t('yuan')}}</div>
                <div class="sent_count">{{$L.t('lottery.zh110')}} <input type="text"  v-model="item.count" class="sendCount">  {{$L.t('moneyAdmin.Draw.info54')}}</div>
                <div class="money_limit">{{$L.t('manager.info74')}} <input type="number" :placeholder="$L.t('bonusGame.MoneyQuery.zh40')" v-model="item.reward_money_min" class="sendCount_money"> -
                <input :placeholder="$L.t('bonusGame.MoneyQuery.zh41')" type="number"  v-model="item.reward_money_max" class="sendCount_money"></div>
                <div><button @click="deleteList(index,'modelData')">{{$L.t('delete')}}</button></div>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td colspan="9" align="center">
            <button @click="saveModelSetting">{{$L.t('saveChange')}}</button>
          </td>
        </tr>
      </tbody>
     </table>
     <!-- 模式二结束 -->
    <el-dialog
      :title="$L.t('setup.info231')"
      :visible.sync="redCountState"
      width="930px">
      <div class="agent_modal" v-if="redCountState">
        <table class="table clearfloat">
          <tbody>
            <tr>
              <td>
                <div class="timeShow">
                  <div class="submitSeach">{{$L.t('table.username')}}:
                    <input type="text" :placeholder="$L.t('table.username')" v-model="redCountObj.username">
                  </div>
                  <div class="submitSeach">ID:
                    <input type="text" placeholder="ID" v-model="redCountObj.uid">
                  </div>
                  <timer class="submitSeach" @sendTime="getTimer" :day="days"></timer>
                  <div class="submitSeach" >
                    <button @click="redCountSearchFn">{{$L.t('search')}}</button>
                  </div>
                  <button @click="addRedCountFn">
                    {{$L.t('setup.info232')}}
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="table">
          <tbody>
          <tr class="head">
            <td>{{$L.t('table.username')}}</td>
            <td>{{$L.t('setup.info233')}}</td>
            <td>{{$L.t('setup.info234')}}</td>
            <td>{{$L.t('setup.info235')}}</td>
            <td>{{$L.t('table.rechargeMoney')}}</td>
            <td>{{$L.t('table.rechargeTime')}}</td>
          </tr>
          <tr v-for="y in specialOfferStore.envelopesCountList.data.data">
            <td>{{y.username}}</td>
            <td>{{y.count}}</td>
            <td>{{scType(y.type)}}</td>
            <td>{{y.amount}}</td>
            <td>{{y.czAmount}}</td>
            <td>{{getTimes(y.actionTime)}}</td>
          </tr>
          <tr v-if="getRedCountPage.sum > 0">
            <td colspan="10">
              <page-limit :pageData="getRedCountPage" :inputShow="'1'" @handlePage="redCountPageFn"></page-limit>
            </td>
          </tr>
          <tr v-if="!specialOfferStore.envelopesCountList.data.data">
            <td colspan="10" class="nodata">
              {{$L.t('noData')}}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </el-dialog>
    <el-dialog
      :title="$L.t('setup.info236')"
      :visible.sync="addRedCountVisible"
      width="600px">
      <div v-if="addRedCountVisible" class="form_container">
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('table.type')}}
            </div>
            <div class="formLi_content">
              <select v-model="addRedCountObj.type">
                <option value="1">{{$L.t('table.username')}}</option>
                <!-- <option value="2">userID</option> -->
              </select>
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('table.username')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="addRedCountObj.user">
            </div>
          </li>

          <li>
            <div class="formLi_title">
              {{$L.t('member.log_12.info5')}}
            </div>
            <div class="formLi_content">
              <input type="number" v-model="addRedCountObj.number" :placeholder="$L.t('setup.info237')">
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('table.remark')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="addRedCountObj.content" placeholder="$L.t('setup.info238')">
            </div>
          </li>
          <li>
            <button class="form_commit" @click="saveRedCountFn">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>
    <el-dialog
      :title="$L.t('chatRoom.zh68')"
      :visible.sync="RedRecordState"
      width="1100px">
      <div class="agent_modal" v-if="RedRecordState">
        <table class="table clearfloat">
          <tbody>
          <tr>
            <td>
              <div class="timeShow">
                <div class="submitSeach">{{$L.t('table.username')}}:
                  <input type="text" :placeholder="$L.t('table.username')" v-model="getRedRecordObj.username">
                </div>
                <div class="submitSeach">ID:
                  <input type="text" placeholder="ID" v-model="getRedRecordObj.uid">
                </div>
                <div class="submitSeach">{{$L.t('setup.info239')}}:
                  <select name="" v-model="getRedRecordObj.state">
                    <option value="2">{{$L.t('setup.info240')}}</option>
                    <option value="0">{{$L.t('bonusGame.MoneyQuery.zh16')}}</option>
                    <option value="1">{{$L.t('setup.info241')}}</option>
                  </select>
                </div>
                <timer class="submitSeach" @sendTime="getTimer" :day="days"></timer>
                <div class="submitSeach" >
                  <button @click="searchGetRedRecordFn">{{$L.t('search')}}</button>
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
            <td>{{$L.t('chatRoom.zh69')}}</td>
            <td>{{$L.t('setup.info242')}} </td>
            <td>{{$L.t('bonusGame.MoneyQuery.zh36')}}</td>
            <td>{{$L.t('setup.info243')}}</td>
            <td>{{$L.t('setup.info244')}}</td>
          </tr>
          <tr v-for="y in specialOfferStore.envelopesGetList.data.data">
            <td>{{y.username}}</td>
            <td>{{y.amount}}</td>
            <td>{{y.status*1 ? $L.t('true') : $L.t('false')}}</td>
            <td>{{getTimes(y.updateTime) || '--'}}</td>
            <td>{{getTimes(y.actionTime) || '--'}}</td>
            <td>{{y.state*1 ? $L.t('setup.info245') : $L.t('bonusGame.MoneyQuery.zh16')}}</td>
          </tr>
          <tr v-if="getRedRecordPage.sum > 0">
            <td colspan="10">
              <page-limit :pageData="getRedRecordPage" :inputShow="'1'" @handlePage="redRecordPageFn"></page-limit>
            </td>
          </tr>
          <tr  v-if="getRedRecordPage.sum > 0">
            <td colspan="10" class="nodata">
              {{$L.t('bonusGame.MoneyQuery.zh27')}}：<span> {{specialOfferStore.envelopesGetList.data.allNum}}</span>,
              {{$L.t('setup.info246')}}：<span> {{specialOfferStore.envelopesGetList.data.allMoney}}</span>,
              {{$L.t('setup.info247')}}：<span>{{specialOfferStore.envelopesGetList.data.wNum}}</span>,
              {{$L.t('setup.info248')}}：<span>{{specialOfferStore.envelopesGetList.data.wMoney}}</span>,
              {{$L.t('setup.info249')}}：<span>{{specialOfferStore.envelopesGetList.data.yNUm}}</span>,
              {{$L.t('setup.info250')}}：<span>{{specialOfferStore.envelopesGetList.data.yMoney}}</span>
            </td>
          </tr>
          <tr v-if="!specialOfferStore.envelopesGetList.data.data">
            <td colspan="10" class="nodata">
              {{$L.t('noData')}}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </el-dialog>
    <!-- 前台公告设置 -->
    <el-dialog
      :title="$L.t('setup.info251')"
      :visible.sync="setInfoVisible"
      width="700px">
      <div v-if="setInfoVisible" class="form_epayindex">
        <div class="formBox_title">{{$L.t('setup.info252')}}({{$L.t('manager.info14')}})</div>
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
              <el-input type="number" v-model="addList.sort" placeholder="$L.t('lottery.zh102')"></el-input>
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
  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  import {Message} from 'element-ui'
  import {getSession,toolbarOptions,times,getTimes,languageId} from '../../common/common'
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  import 'quill/dist/quill.bubble.css';
  import { quillEditor } from 'vue-quill-editor'
  export default {
    data () {
      return {
        times,
        getTimes,
        chooseValue:'1',
        startTime:'',
        endTime:'',
        days:'',
        value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        redData:{
          redSwitchActive:'',
          redAmountActive:'',
          redCountActive:'',
          redFromTimeActive:'',
          redRobCountActive:'',
          redDistributionActive:'',
          redActiveContent:'',
        },
        sczsRedRule:[],
        ljzsRedRule:[],
        zcsczsRedRule:[],

        redCountObj:{
          username:"",
          uid:'',
          fromTime:'',
          toTime:'',
          page:1,
          limit:10,

        },  // 红包次数
        redCountState:false,
        addRedCountVisible:false,
        addRedCountObj:{
          type:'1',
          user:'',
          number:'',
          content:'',
        },
        RedRecordState:false,
        getRedRecordObj:{
          username:'',
          uid:'',
          state:'2',
          fromTime:'',
          toTime:'',
          page:1,
          limit:10,
        },  // 红包领取记录
        modelData:[],
        // 前台公告设置
        setInfoVisible: false,
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
      }
    },
    components: {
      quillEditor
    },
    created (){
       this.enterData()
    },
    methods: {
      ...mapMutations([

      ]),
      ...mapActions([
        "getSpecialOffter",
        "setEnvelopes",
        "getEnvelopesCount",
        "setEnvelopesMemberCount",
        "getEnvelopesGet",
        "getRewardNotice",
        "editRewardNotice",
        "addQcode",
      ]),
      enterData(){
        this.getSpecialOffter({zsClass:'envelopes'}).then(res=>{
          this.redData = res.data.data
          this.modelData = res.data.YesterDayRedRule || []
          if(this.redData.redSwitchActive == 1){
            this.modelOneData()
          }
        })
      },
      modelOneData(){
        let timeArr = this.redData.redFromTimeActive.split('-')
        let getTime = (arr) => {
          let time = new Date()
          let y = time.getFullYear()
          let month = time.getMonth() + 1
          let day = time.getDate()
          let str = `${y}-${month}-${day}`
          return [new Date(str + ' ' + arr[0]), new Date(str + ' ' + arr[1])]
        }
        this.value4 = getTime(timeArr)
        let sczs = this.redData.sczsRedRule || ''
        let ljzs = this.redData.ljzsRedRule || ''
        let zcsc = this.redData.zcsczsRedRule || ''
        if (sczs) {
          this.reSetList(sczs,'sczsRedRule')
        }
        if (ljzs) {
          this.reSetList(ljzs,'ljzsRedRule')
        }
        if (zcsc) {
          this.reSetList(zcsc,'zcsczsRedRule')
        }
      },
      // 点击切换模式
      changeModel(item){
        if(item == 1 || item == 0){
          this.modelOneData()
        }
      },
      reSetList(data,name){
        let arr = []
        data = JSON.parse(data)
        for (let k in data) {
          let obj = {
            key: k,
            value: data[k]
          }
          arr.push(obj)
        }
        this[name] = arr
      },
      deleteList (index,name) {
        this[name].splice(index, 1)
      },
      addRedList (name) {
        this[name].push({key: '', value: ''})
      },
      setJsonFil(data){
        if(data.length > 0){
          let obj = {}
          for (let k in data) {
            obj[data[k].key] = data[k].value
          }
          return JSON.stringify(obj)
        }
      },
      saveSetting(){
        let getTime = (time) => {
          let filterTime = (num) => {return num < 10 ? '0' + num: num}
          let date = new Date(time)
          let h = filterTime(date.getHours())
          let m = filterTime(date.getMinutes())
          let s = filterTime(date.getSeconds())
          return  h + ':' + m + ':' + s
        }
        this.redData.redFromTimeActive = getTime(this.value4[0]) + '-' + getTime(this.value4[1])
        this.redData['sczsRedRule'] = this.setJsonFil(this.sczsRedRule) || ''
        this.redData['ljzsRedRule'] = this.setJsonFil(this.ljzsRedRule) || ''
        this.redData['zcsczsRedRule'] = this.setJsonFil(this.zcsczsRedRule) || ''
        this.setEnvelopes(this.redData).then(res=>{
          this.modelOneData()
        })
      },
      getTimer(start,end){
        this.startTime = start
        this.endTime = end
      },
      getCountFn(){
        this.redCountState = true
        this.redCountObj.page = 1
        this.redCountObj.username = ''
        this.redCountObj.uid = ''
        this.getEnvelopesCount(this.redCountObj)
      },
      redCountPageFn(data){
        this.redCountObj.page = data.page
        this.redCountObj.limit = data.limit
        this.getEnvelopesCount(this.redCountObj)
      },
      redCountSearchFn(){
        this.redCountObj.fromTime = this.startTime
        this.redCountObj.toTime = this.endTime
        this.redCountObj.page = 1
        this.getEnvelopesCount(this.redCountObj)
      },
      addRedCountFn(){
        this.addRedCountObj.user = ''
        this.addRedCountObj.number = ''
        this.addRedCountObj.content = ''
        this.addRedCountVisible = true
      },
      saveRedCountFn(){
        if(!this.addRedCountObj.user){
          Message({
            message:this.$L.t('setup.info259'),
            type:"warning",
            showClose:true
          })
          return;
        }if(!this.addRedCountObj.number){
          Message({
            message:this.$L.t('setup.info260'),
            type:"warning",
            showClose:true
          })
          return;
        }if(!this.addRedCountObj.content){
          Message({
            message:this.$L.t('setup.info261'),
            type:"warning",
            showClose:true
          })
          return;
        }
          this.setEnvelopesMemberCount(this.addRedCountObj).then(()=>{
              this.addRedCountVisible = false
          })
      },
      goRedFn(){
        this.RedRecordState = true
        this.getRedRecordObj.page = 1
        this.getRedRecordObj.username = ''
        this.getRedRecordObj.uid = ''
        this.getRedRecordObj.state = '2'
        this.getEnvelopesGet(this.getRedRecordObj)
      },
      redRecordPageFn(data){
        this.getRedRecordObj.page = data.page
        this.getRedRecordObj.limit = data.limit
        this.getEnvelopesGet(this.getRedRecordObj)
      },
      searchGetRedRecordFn(){
        this.getRedRecordObj.fromTime = this.startTime
        this.getRedRecordObj.toTime = this.endTime
        this.getRedRecordObj.page = 1
        this.getEnvelopesGet(this.getRedRecordObj)
      },

      getLocalTime(nS) {
        if(nS*1 > 1){
          let sj = nS*1000
          return new Date(parseInt(sj)).toLocaleString().replace(/:\d{1,2}$/,' ');
        }
        return false

      },
      scType(val){
        let txt = '';
        switch (val*1){
          case 1 : return txt = this.$L.t('setup.info262');break;
          case 2 : return txt = this.$L.t('setup.info263');break;
          case 3 : return txt = this.$L.t('setup.info264');break;
          case 4 : return txt = this.$L.t('setup.info265');break;
        }
      },
      // 新增模式二
      addModelList (name) {
        this[name].push({count: '', money: '',reward_money_max:'',reward_money_min:''})
      },
      // 保存
      saveModelSetting(){
        let moneyone = []
        let count = []
        let reward_money_max = []
        let reward_money_min = []
        for(let k in this.modelData){
          let obj = {}
          obj.money = this.modelData[k].money
          obj.count = this.modelData[k].count
          obj.reward_money_max = this.modelData[k].reward_money_max
          obj.reward_money_min = this.modelData[k].reward_money_min
          moneyone.push(obj)
        }
        this.setEnvelopes({
        redSwitchActive:'2',
         RedRule:moneyone
        }).then(res=>{
          this.getSpecialOffter({zsClass:'envelopes',model:'2'}).then(res=>{
            this.modelData = res.data.YesterDayRedRule
          })
        })
      },
      // 前台公告设置
      setInfodata(){
        this.getRewardNotice({typeid:30}).then(res=>{
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
        let code = languageId(localStorage.getItem('languageId') || 'en')
        this.diyUpdataImg = file.raw
        var da = new FormData()
        da.append('language',code)
        da.append('file',this.diyUpdataImg)
        da.append('typeid', '13')
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
        da.append('typeid', 30)
        this.editRewardNotice(da).then(res=>{
          this.setInfoVisible = false
        })
      },
    },
    computed: {
      ...mapState([
        "specialOfferStore",
      ]),
      getRedCountPage(){
        return {
          page: this.redCountObj.page,
          limit: this.redCountObj.limit,
          sum: this.specialOfferStore.envelopesCountList.data.count || 0
        }
      },
      getRedRecordPage(){
        return {
          page: this.getRedRecordObj.page,
          limit: this.getRedRecordObj.limit,
          sum: this.specialOfferStore.envelopesGetList.data.count || 0
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .agent_modal {
    height: 600px;
    overflow: auto;
    padding: 10px;
    input {
      width: 120px;
    }
    button {
      padding: 0 10px;
      margin: 0 10px;
    }
  }
  .nodata span{
    color:red;
    display: inline !important;
  }
  .table td span{
    display: inline-block;
    width: 80px;
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
  table ul{
    li {
      display: flex;
      height:40px;
      line-height:40px;
    div{
      margin: 0 15px;
    }
    }
  }
  .sendCount{
    width: 80px;
    padding: 0 3px;
  }
  .sendCount_money{
    width: 100px;
    padding: 0 3px;
  }
  .money_limit{
    min-width: 300px;
  }
  .sent_count{
    min-width: 130px;
  }
  .money_recharge{
    min-width: 250px;
  }


  // 新增
  .div_flex{
    display: flex;
    align-items: center;
    input{
      margin-left: 30px;
      cursor: pointer;
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
</style>
