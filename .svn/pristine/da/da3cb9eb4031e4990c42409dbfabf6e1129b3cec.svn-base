<template>
    <div class="container">
        <table class="table">
          <tbody>
            <tr class="head">
              <td colspan="2">{{$L.t('chatRoom.zh1')}}</td>
            </tr>
            <tr>
              <td class="chat_set">{{$L.t('chatRoom.zh109')}}</td>
              <td>
                <el-radio v-model="sendParmas.ChatSwitch" label="1">{{$L.t('op')}}</el-radio>
                <el-radio v-model="sendParmas.ChatSwitch" label="0">{{$L.t('clo')}}</el-radio>
                <span class="chat_notice">{{$L.t('chatRoom.zh110')}}</span>
              </td>
            </tr>
            <tr>
              <td class="chat_set">{{$L.t('chatRoom.zh2')}}</td>
              <td>
                <el-radio v-model="sendParmas.signIn" label="1">{{$L.t('op')}}</el-radio>
                <el-radio v-model="sendParmas.signIn" label="0">{{$L.t('clo')}}</el-radio>
                <span class="chat_notice">{{$L.t('chatRoom.zh3')}}</span>
              </td>
            </tr>
            <tr>
              <td class="chat_set">{{$L.t('chatRoom.zh111')}}</td>
              <td>
                <el-radio v-model="sendParmas.redenvelopes" label="1">{{$L.t('op')}}</el-radio>
                <el-radio v-model="sendParmas.redenvelopes" label="0">{{$L.t('clo')}}</el-radio>
                <span class="chat_notice">{{$L.t('chatRoom.zh112')}}</span>
              </td>
            </tr>
            <tr>
              <td class="chat_set">{{$L.t('chatRoom.zh4')}}</td>
              <td>
                <el-radio v-model="sendParmas.noteSharing" label="1">{{$L.t('op')}}</el-radio>
                <el-radio v-model="sendParmas.noteSharing" label="0">{{$L.t('clo')}}</el-radio>
                <span class="chat_notice">{{$L.t('chatRoom.zh5')}}</span>
              </td>
            </tr>

            <tr>
              <td class="chat_set">{{$L.t('chatRoom.zh6')}}</td>
              <td>
                <el-radio v-model="sendParmas.notePopup" label="1">{{$L.t('op')}}</el-radio>
                <el-radio v-model="sendParmas.notePopup" label="0">{{$L.t('clo')}}</el-radio>
                <span class="chat_notice">{{$L.t('chatRoom.zh7')}}</span>
              </td>
            </tr>
            <tr>
              <td class="chat_set">{{$L.t('chatRoom.zh8')}}</td>
              <td>
                <el-radio v-model="sendParmas.todayLoss" label="1">{{$L.t('op')}}</el-radio>
                <el-radio v-model="sendParmas.todayLoss" label="0">{{$L.t('clo')}}</el-radio>
                <span class="chat_notice">{{$L.t('chatRoom.zh9')}}</span>
              </td>
            </tr>
            <tr>
              <td class="chat_set">{{$L.t('chatRoom.zh113')}}</td>
              <td>
                <el-radio v-model="sendParmas.rewardSwitch" label="1">{{$L.t('op')}}</el-radio>
                <el-radio v-model="sendParmas.rewardSwitch" label="0">{{$L.t('clo')}}</el-radio>
                <span class="chat_notice">{{$L.t('chatRoom.zh114')}}</span>
              </td>
            </tr>
            <tr>
              <td class="chat_set">{{$L.t('chatRoom.zh10')}}</td>
              <td>
                <el-radio v-model="sendParmas.longDragon" label="1">{{$L.t('op')}}</el-radio>
                <el-radio v-model="sendParmas.longDragon" label="0">{{$L.t('clo')}}</el-radio>
                <span class="chat_notice">{{$L.t('chatRoom.zh11')}}</span>
              </td>
            </tr>
            <tr>
              <td class="chat_set">{{$L.t('lottery.zh90')}}</td>
              <td>
                <el-radio v-model="sendParmas.planSwitch" label="1">{{$L.t('op')}}</el-radio>
                <el-radio v-model="sendParmas.planSwitch" label="0">{{$L.t('clo')}}</el-radio>
                <span class="chat_notice">{{$L.t('chatRoom.zh115')}}</span>
              </td>
            </tr>
            <tr>
              <td class="chat_set">{{$L.t('chatRoom.zh116')}}</td>
              <td>
                <el-radio v-model="sendParmas.planShareSwitch" label="1">{{$L.t('op')}}</el-radio>
                <el-radio v-model="sendParmas.planShareSwitch" label="0">{{$L.t('clo')}}</el-radio>
                <span class="chat_notice">{{$L.t('chatRoom.zh117')}}</span>
              </td>
            </tr>
            <tr>
              <td class="chat_set">{{$L.t('chatRoom.zh118')}}</td>
              <td>
                <el-radio v-model="sendParmas.redLevelSwitch" label="1">{{$L.t('op')}}</el-radio>
                <el-radio v-model="sendParmas.redLevelSwitch" label="0">{{$L.t('clo')}}</el-radio>
                <span class="chat_notice">{{$L.t('chatRoom.zh119')}}</span>
              </td>
            </tr>
            <tr>
              <td class="chat_set">{{$L.t('chatRoom.zh120')}}</td>
              <td>
                <el-radio v-model="sendParmas.rankingList" label="1">{{$L.t('op')}}</el-radio>
                <el-radio v-model="sendParmas.rankingList" label="0">{{$L.t('clo')}}</el-radio>
              </td>
            </tr>
            <tr>
              <td class="chat_set">{{$L.t('chatRoom.zh121')}}</td>
              <td>
                <el-radio v-model="sendParmas.UserRevoke" label="1">{{$L.t('op')}}</el-radio>
                <el-radio v-model="sendParmas.UserRevoke" label="0">{{$L.t('clo')}}</el-radio>
                <span class="chat_notice">{{$L.t('chatRoom.zh122')}}</span>
              </td>
            </tr>
             <tr>
              <td class="chat_set">{{$L.t('chatRoom.zh123')}}</td>
              <td>
                <el-radio v-model="sendParmas.ProhibitionsAdmin" label="1">{{$L.t('chatRoom.zh124')}}</el-radio>
                <el-radio v-model="sendParmas.ProhibitionsAdmin" label="0">{{$L.t('chatRoom.zh125')}}</el-radio>
                <span class="manager_notice">{{$L.t('chatRoom.zh126')}}</span>
              </td>
            </tr>
            <tr>
              <td class="chat_set">{{$L.t('chatRoom.zh127')}}</td>
              <td>
                <el-radio v-model="sendParmas.registerChatGroup" label="1">{{$L.t('chatRoom.zh128')}}</el-radio>
                <el-radio v-model="sendParmas.registerChatGroup" label="0">{{$L.t('chatRoom.zh129')}}</el-radio>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('chatRoom.zh130')}}</td>
              <td>
                <el-input class="input-red" v-model="sendParmas.redLevel" :placeholder="$L.t('chatRoom.zh131')"></el-input>
                <span class="chat_notice-in">{{$L.t('chatRoom.zh132')}} 1~20</span>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('chatRoom.zh12')}}</td>
              <td>
                <el-input class="input-red" v-model="sendParmas.scoreProp" :placeholder="$L.t('chatRoom.zh12')"></el-input>
                <span class="chat_notice-in">{{$L.t('chatRoom.zh13')}}</span>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('chatRoom.zh14')}}</td>
              <td>
                <el-input class="input-red" v-model="sendParmas.scoreMoney" :placeholder="$L.t('chatRoom.zh14')"></el-input>
                <span class="chat_notice-in">{{$L.t('chatRoom.zh15')}}</span>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('chatRoom.zh16')}}</td>
              <td>
                <el-input class="input-red" v-model="sendParmas.scoreMin" :placeholder="$L.t('chatRoom.zh16')"></el-input>
                <span class="chat_notice-in">{{$L.t('chatRoom.zh17')}}</span>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('chatRoom.zh18')}}</td>
              <td>
                  <el-input
                  type="textarea"
                  :rows="2"
                  :placeholder="$L.t('chatRoom.zh19')"
                  v-model="sendParmas.scoreRule">
                </el-input>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('chatRoom.zh20')}}</td>
              <td>
                  <el-input class="input-red" v-model="sendParmas.notePopupAmount" :placeholder="$L.t('chatRoom.zh21')"></el-input>
                  <span class="chat_notice-in">{{$L.t('chatRoom.zh22')}}</span>
              </td>
            </tr>

            <tr>
              <td>{{$L.t('chatRoom.zh133')}}</td>
              <td>
                <el-input class="input-red" v-model="sendParmas.dummyUserSwitch" :placeholder="$L.t('chatRoom.zh134')"></el-input>
                <span class="chat_notice-in">{{$L.t('chatRoom.zh135')}}</span>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('chatRoom.zh24')}}</td>
              <td>
                  <el-input class="input-red" v-model="sendParmas.ChatUserLevel" :placeholder="$L.t('chatRoom.zh23')"></el-input>
                  <span class="chat_notice-in">{{$L.t('chatRoom.zh27')}}</span>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('chatRoom.zh28')}}</td>
              <td>
                  <el-input class="input-red" v-model="sendParmas.signLevel" :placeholder="$L.t('chatRoom.zh28')" type="number"></el-input>
                  <span class="chat_notice-in">{{$L.t('chatRoom.zh30')}}</span>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('chatRoom.zh136')}}</td>
              <td class="video_input">
                  <el-time-picker
                  class="input-red"
                  is-range
                  selectableRange="string"
                  v-model="chatvalue"
                  value-format="HH:mm:ss"
                  format="HH:mm:ss"
                  :range-separator="$L.t('common.zhi')"
                  :start-placeholder="$L.t('annoucement.swtz_4.startTime')"
                  :end-placeholder="$L.t('annoucement.swtz_4.endTime')"
                  :placeholder="$L.t('chatRoom.zh137')">
                </el-time-picker>
                <span class="chat_notice-in">{{$L.t('chatRoom.zh158')}}！</span>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('chatRoom.zh159')}}</td>
              <td class="video_input">
                <el-time-picker
                  class="input-red"
                  is-range
                  selectableRange="string"
                  v-model="videovalue"
                  value-format="HH:mm:ss"
                  format="HH:mm:ss"
                  :range-separator="$L.t('common.zhi')"
                  :start-placeholder="$L.t('annoucement.swtz_4.startTime')"
                  :end-placeholder="$L.t('annoucement.swtz_4.endTime')"
                  :placeholder="$L.t('chatRoom.zh137')">
                </el-time-picker>
                <span class="chat_notice-in">{{$L.t('chatRoom.zh138')}}！</span>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('chatRoom.zh139')}}</td>
              <td>
                  <el-input class="input-red-link" v-model="sendParmas.videoLink" :placeholder="$L.t('chatRoom.zh139')"></el-input>
                  <span class="chat_notice-in">{{$L.t('chatRoom.zh140')}}</span>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('chatRoom.zh141')}}</td>
              <td>
                  <el-input class="input-red" v-model="sendParmas.videoGrade" :placeholder="$L.t('chatRoom.zh142')"></el-input>
                  <span class="chat_notice-in">{{$L.t('chatRoom.zh143')}}</span>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('chatRoom.zh144')}}</td>
              <td>
                  <el-input class="input-red" v-model="sendParmas.ComputerRedMoney"></el-input>
                  <span class="chat_notice-in">{{$L.t('chatRoom.zh145')}}</span>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('chatRoom.zh146')}}</td>
              <td class="video_input">
                  <el-input class="input-red" v-model="sendParmas.ComputerRedDate"></el-input>
                  <span class="chat_notice-in">{{$L.t('chatRoom.zh147')}}</span>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('chatRoom.zh148')}}</td>
              <td>
                <el-radio v-model="sendParmas.RedLevelType" label="1">{{$L.t('chatRoom.zh149')}}</el-radio>
                 <el-radio v-model="sendParmas.RedLevelType" label="2">{{$L.t('chatRoom.zh150')}}</el-radio>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('chatRoom.zh151')}}</td>
              <td>
                  <ul class="level_count">
                    <li v-for="(item,index) in datalist" style="width: 150px;" :key="index">
                      <span style="width: 50px;">{{item.levelName}}</span>
                      <input type="text" style="width:50px;" v-model="item.value">
                      <span> {{$L.t('chatRoom.zh152')}}</span>
                    </li>
                  </ul>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('chatRoom.zh153')}}</td>
              <td>
                  <el-input class="input-red" v-model="sendParmas.weChannel"></el-input>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('chatRoom.zh154')}}</td>
              <td>
                  <el-input class="input-red" v-model="sendParmas.weUser"></el-input>
              </td>
            </tr>
            <tr>
              <td class="chat_set">{{$L.t('chatRoom.zh31')}}</td>
              <td>
                <el-radio v-model="sendParmas.wetest" label="1">{{$L.t('op')}}</el-radio>
                <el-radio v-model="sendParmas.wetest" label="0">{{$L.t('clo')}}</el-radio>
              </td>
            </tr>
            <tr>
              <td class="chat_set">{{$L.t('chatRoom.zh155')}}</td>
              <td>
                <el-radio v-model="sendParmas.weSet" label="1">{{$L.t('op')}}</el-radio>
                <el-radio v-model="sendParmas.weSet" label="0">{{$L.t('clo')}}</el-radio>
              </td>
            </tr>
            <tr>
              <td class="chat_set">{{$L.t('chatRoom.zh156')}}</td>
              <td>
                  <ul class="level_count">
                    <li v-for="item in giftData" style="width:100px">
                      <span style="margin-right: 5px;">{{$L.t('chatRoom.zh157')}}{{item.name}}</span>
                      <input type="text" style="width:50px" v-model="item.value">
                    </li>
                  </ul>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('chatRoom.zh32')}}</td>
              <td>
                  <el-input
                  type="textarea"
                  :rows="2"
                  :placeholder="$L.t('chatRoom.zh33')"
                  v-model="sendParmas.vocabulary">
                </el-input>
                <span class="chat_notice">{{$L.t('chatRoom.zh34')}}</span>
              </td>
            </tr>
            <tr class="end">
              <td colspan="2">
                <input type="button" class="commit_btn" :value="$L.t('sure')" @click="commitClick()">
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  </template>

  <script>

    import {mapState, mapMutations, mapActions} from 'vuex';
    import {getDate,setDate,copyobj,setSession,getSession,getchar,randomRange,getLocalTime} from '@/common/common'
    export default {
      data () {
        return {
          sendParmas:{
            ChatSwitch:'1',
            signIn:'',
            redenvelopes:'',
            noteSharing:'',
            notePopup:'',
            todayLoss:'',
            rewardSwitch:'',
            longDragon:'',
            planSwitch:'',
            planShareSwitch:'',
            redLevelSwitch:'',
            rankingList:'',
            UserRevoke:'',
            ProhibitionsAdmin:'',
            registerChatGroup:'',
            redLevel:'',
            notePopupAmount:'',
            dummyUserSwitch:'',
            ChatUserLevel:'',
            signLevel:'',
            chatTime:'',
            videoTime:'',
            videoLink:'',
            videoGrade:'',
            vocabulary:'',
            scoreProp:'',
            scoreMoney:'',
            scoreMin:'',
            scoreRule:'',
            ComputerRedMoney:'',
            ComputerRedDate:'',
            RedLevelType:'',
            RedLevelCount:{},
            weChannel:'',
            weUser:'',
            wetest:'',
            weSet:'',
            GivAmount:{}
          },
          getLocalTime,
          chatvalue: ['', ''],
          videovalue: ['', ''],
          // 提交
          str:'',
          subdata:[],
          datalist:[],
          giftData:[
            {name:'1'},
            {name:'2'},
            {name:'3'},
            {name:'4'},
            {name:'5'},
            {name:'6'},
            {name:'7'},
            {name:'8'}]
        }
      },
      created (){
        this.enterData()
      },
      methods: {
        ...mapMutations([

        ]),
        ...mapActions([
          'gerChatSet',
          'getNoGroupList',
          'updateUserRoom',
          'getLevel'
        ]),
        enterData(){
          this.gerChatSet().then(res=>{
            for (let k in this.sendParmas) {
              this.sendParmas[k] = res.data[k]
            }
            var arr = res.data.chatTime.split(" - ");
            var arr1 = res.data.videoTime.split(" - ");
            this.chatvalue = arr
            this.videovalue = arr1
            // 等级限制
            let arry = JSON.parse(res.data.RedLevelCount)
            arry = Object.keys(arry).map((k, v) => {
              let obj = {}
              obj[k] = arry[k]
              return obj
            })

            this.getLevel().then(res=>{
              this.datalist = res.data.data
              for (let k in this.datalist) {
                let level = this.datalist[k].level
                let temp  = arry.filter(res => Object.keys(res)[0] == level)
                this.datalist[k].value = temp.map(res=>res[level])[0]
              }
            })
            // 礼物价格
            let giftarr = JSON.parse(res.data.GivAmount)
            giftarr = Object.keys(giftarr).map((k,v)=>{
              let obj = {}
              obj[k] = giftarr[k]
              return obj
            })
            for(let j in this.giftData){
              let giftid = this.giftData[j].name
              let temgift = giftarr.filter(res=>Object.keys(res)[0] == giftid)
              this.giftData[j].value = temgift.map(res=>res[giftid])[0]
            }
            if(!res.data.signLevel){
              this.sendParmas.signLevel = 0
            }
          })
        },
        // 确定提交
        commitClick () {
          var a = this.datalist.map(val=>{
            return val.value
          })
          // 等级抢红包个数限制
          let arr = {}
          for (let k in this.datalist) {
            let key = this.datalist[k]
            if(key.value){
              arr[key.level*1] = key.value
            }
          }
          // 礼物价格
          let giftarr = {}
          for(let k in this.giftData){
            let key = this.giftData[k]
            if(key.value){
              giftarr[key.name] = key.value
            }
          }
          this.sendParmas.RedLevelCount = JSON.stringify(arr)
          this.sendParmas.GivAmount = JSON.stringify(giftarr)
          this.sendParmas.chatTime = this.chatvalue.join(' - ')
          this.sendParmas.videoTime = this.videovalue.join(' - ')
          this.updateUserRoom(this.sendParmas).then(res=>{
            this.enterData()
          })
        },
      },
      components:{

      },
      computed: {
        ...mapState([
        "indexStore",
        "chatStore",
        "memberStore"
        ]),
      }
    }
  </script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="less" scoped>
    .chat_set{
      width: 200px;
    }
    .input-red{
      width: 280px;
    }
    .input-red-link{
      width: 900px;
    }
    .chat_notice{
      margin-left: 200px;
    }
    .chat_notice-in{
      margin-left: 30px;
    }
    .manager_notice{
      margin-left: 100px;
    }
    .level_count{
      display: flex;
      flex-wrap: wrap;
      width: 800px;
      li{
        margin:4px 0;
        display: flex;
        flex-wrap: wrap;
        input{
          margin-right: 2px;
        }
        span{
          display: block;
        }
      }
    }
  </style>
