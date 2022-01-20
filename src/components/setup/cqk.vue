<template>
    <div class="container">
      <table class="table">
        <tbody>
          <tr class="head">
            <td colspan="2">{{$L.t('setup.info110')}}</td>
          </tr>
          <!-- <tr>
            <td>充值限制</td>
            <td>
              <el-input class="input-small input-red" v-model="sendParmas.wxappid"
                placeholder="￥"></el-input> -
              <el-input class="input-small input-red" v-model="sendParmas.wxappid"
                placeholder="￥"></el-input>
              <span class="chat_notice-in">元</span>
            </td>
          </tr>
          <tr>
            <td>支付宝/微信充值</td>
            <td>
              <el-input class="input-small input-red" v-model="sendParmas.wxappid"
                placeholder="￥"></el-input> -
              <el-input class="input-small input-red" v-model="sendParmas.wxappid"
                placeholder="￥"></el-input>
              <span class="chat_notice-in">元</span>
            </td>
          </tr> -->
          <tr>
            <td>{{$L.t('setup.info111')}}</td>
            <td>
              <el-input class="input-recharge input-red" type="number"
                v-model="sendParmas.cashMinAmount"></el-input>
              <span class="chat_notice-in"> %</span>
            </td>
          </tr>
          <tr>
            <td>{{$L.t('setup.info112')}}</td>
            <td>
              <el-input class="input-recharge input-red" type="number"
                v-model="sendParmas.registerTime"></el-input>
              <span class="chat_notice-in"> {{$L.t('moneyAdmin.Draw.info6')}}</span>
            </td>
          </tr>
          <tr>
            <td>{{$L.t('setup.info113')}}</td>
            <td>
              <el-input class="input-recharge input-red" type="number"
                v-model="sendParmas.cashMin"></el-input>
              <span class="chat_notice-in">{{$L.t('yuan')}}</span>
            </td>
          </tr>
          <tr>
            <td>{{$L.t('setup.info114')}}</td>
            <td>
              <el-input class="input-recharge input-red" type="number"
                v-model="sendParmas.cashMax"></el-input>
              <span class="chat_notice-in">{{$L.t('yuan')}}</span>
            </td>
          </tr>
<!--           <tr>
            <td>充值快捷金额</td>
            <td>
                <ul class="level_count">
                  <li v-for="(item,index) in giftData" style="width:150px">
                    <span style="margin-right: 5px;">快捷金额{{index +1}}</span>
                    <input type="number" style="width:60px" v-model="item.value">
                  </li>
                </ul>
            </td>
          </tr> -->
          <tr>
            <td>{{$L.t('setup.info115')}}</td>
            <td>
              <el-input class="input-recharge input-red"
                v-model="sendParmas.cashMin1"></el-input>
              <span class="chat_notice-in">{{$L.t('yuan')}}</span>
            </td>
          </tr>
          <tr>
            <td>{{$L.t('setup.info116')}}</td>
            <td>
              <el-input class="input-recharge input-red" type="number"
                v-model="sendParmas.cashMax1"></el-input>
              <span class="chat_notice-in">{{$L.t('yuan')}}</span>
            </td>
          </tr>
          <tr>
              <td>{{$L.t('setup.info117')}}</td>
            <td class="video_input">
              <el-time-picker
                class="input-red"
                is-range
                v-model="chatvalue"
                value-format="HH:mm:ss"
                format="HH:mm:ss"
                :range-separator="$L.t('common.zhi')"
                :start-placeholder="$L.t('annoucement.swtz_4.startTime')"
                :end-placeholder="$L.t('annoucement.swtz_4.endTime')"
                :placeholder="$L.t('chatRoom.zh137')">
              </el-time-picker>
            </td>
          </tr>
          <tr>
            <td>{{$L.t('setup.info118')}}</td>
            <td>
              <el-input
                class="input-recharge input-red-link"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 8}"
                v-model="sendParmas.rechargeNotice">
              </el-input>
            </td>
          </tr>
          <tr class="end">
            <td colspan="2">
              <input type="button" class="commit_btn" :value="$L.t('sure')"
                @click="commitClick()">
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
              cashMinAmount:'',
              cashMin:'',
              cashMax:'',
              cashMin1:'',
              cashMax1:'',
              cashFromTime:'',
              cashToTime:'',
              rechargeNotice:'',
              QuickSum:{},
              registerTime:''
            },
            chatvalue: ['',''],
            // 提交
            str:'',
            subdata:[],
            giftData:[
              {name:'1'},
              {name:'2'},
              {name:'3'},
              {name:'4'},
              {name:'5'},
              {name:'6'},
              {name:'7'},
              {name:'8'},
              {name:'9'}
            ]
          }
        },
        created (){
          this.getdata()
          // 礼物价格

        },
        methods: {
          ...mapMutations([

          ]),
          ...mapActions([
            'getCashSetUp',
            'updateCashSetUp'
          ]),
          getdata(){
            this.getCashSetUp().then(res=>{
              for (let k in this.sendParmas) {
                this.sendParmas[k] = res.data[k]
              }
              if(!res.data.registerTime){
                this.sendParmas.registerTime = 5
              }
              var arr = []
              arr.push(res.data.cashFromTime)
              arr.push(res.data.cashToTime)
              this.chatvalue = arr

              // let giftarr = JSON.parse(res.data.QuickSum)
              // giftarr = giftarr.map(k => {
              //   let obj = {
              //     'value': k
              //   }
              //   return obj
              // })
              // for (let i = giftarr.length; i < 9; i++) {
              //   let obj = {value: ''}
              //   giftarr.push(obj)
              // }
              // this.giftData = giftarr

            })


          },
          // 确定提交
          commitClick () {
            // let giftarr = [];

            // for(let k in this.giftData){
            //   let key = this.giftData[k]
            //   if(key.value){
            //     giftarr.push(key.value.toString())
            //   }
            // }

            // while (giftarr.length<9){
            //   giftarr.push("0")
            // }


            // this.sendParmas.QuickSum = JSON.stringify(giftarr);
            this.sendParmas.cashFromTime = this.chatvalue[0];
            this.sendParmas.cashToTime = this.chatvalue[1];
            this.updateCashSetUp(this.sendParmas).then(res=>{
              this.getdata();
            })
          },
        },
        components:{

        },
        computed: {
          ...mapState([
          "chatStore"
          ]),
        }
      }
    </script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="less" scoped>
      .chat_set{
        width: 200px;
      }
      .input-small{
        width: 100px;
      }
      .input-recharge{
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
      .chat_notice-time{
        margin-left: 30px;
      }
    .level_count{
      display: flex;
      flex-wrap: wrap;
      width: 50%;
      li{
        margin:4px 0;
        span{
          display: block;
          float: left;
        }
      }
    }
    </style>
