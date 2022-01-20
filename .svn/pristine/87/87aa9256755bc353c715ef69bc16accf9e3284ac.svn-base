<template>
    <div class="container">
        <table class="table">
          <tbody>
            <tr class="head">
              <td colspan="2">{{$L.t('setup.info145')}}</td>
            </tr>
            <tr>
              <td>{{$L.t('setup.info146')}}</td>
              <td>
                <el-input class="input-red" v-model="sendParmas.wxappid" :placeholder="$L.t('setup.info147')"></el-input>
                <span class="chat_notice-in">{{$L.t('setup.info148')}}</span>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('setup.info149')}}</td>
              <td>
                  <el-input class="input-red" v-model="sendParmas.wxseckey" :placeholder="$L.t('setup.info149')"></el-input>
                  <span class="chat_notice-in">{{$L.t('setup.info150')}}</span>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('setup.info151')}}</td>
              <td>
                <el-input class="input-red" v-model="sendParmas.wxdomain"></el-input>
                <span class="chat_notice-in">{{$L.t('setup.info152')}}</span>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('setup.info153')}}</td>
              <td>
                  <el-input class="input-red" v-model="sendParmas.wxfandian"></el-input>
                  <span class="chat_notice-in">% {{$L.t('setup.info154')}}</span>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('setup.info155')}}1</td>
              <td>
                  <el-input class="input-red-link" v-model="sendParmas.wxtuiguang"></el-input>
                  <span class="chat_notice-in">{{$L.t('setup.info156')}}</span>
              </td>
            </tr>
            <tr>
              <td>{{$L.t('setup.info155')}}2</td>
              <td>
                  <el-input class="input-red-link" v-model="sendParmas.wxtuiguang2"></el-input>
                  <span class="chat_notice-in">{{$L.t('setup.info156')}}</span>
              </td>
            </tr>
            <tr>
              <td class="chat_set">{{$L.t('setup.info157')}}</td>
              <td>
                <el-radio v-model="sendParmas.wxBindAccount" label="0">{{$L.t('member.info112')}}</el-radio>
                <el-radio v-model="sendParmas.wxBindAccount" label="1">{{$L.t('open')}}</el-radio>
                <span class="chat_notice">{{$L.t('setup.info158')}}</span>
              </td>
            </tr>
            <tr>
              <td class="chat_set">{{$L.t('setup.info159')}}</td>
              <td>
                <el-radio v-model="sendParmas.wxUserType" label="0">{{$L.t('agent.agent_0.dl')}}</el-radio>
                <el-radio v-model="sendParmas.wxUserType" label="1">{{$L.t('member.info71')}}</el-radio>
                <span class="chat_notice">{{$L.t('setup.info160')}}</span>
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
            wxappid:'',
            wxseckey:'',
            wxdomain:'',
            wxfandian:'',
            wxtuiguang:'',
            wxtuiguang2:'',
            wxBindAccount:'',
            wxUserType:''
          },
          sendData: {
            status: 0,
            users: '',
            title: '',
            content: '',
          },
          getLocalTime,
          chatvalue: ['', ''],
          videovalue: ['', ''],
          // 提交
          str:'',
          subdata:[]
        }
      },
      created (){
        this.getGetwx().then(res=>{
          for (let k in this.sendParmas) {
            this.sendParmas[k] = res.data[k]
          }
        })
      },
      methods: {
        ...mapMutations([

        ]),
        ...mapActions([
          'getGetwx',
          'updateGetwx'
        ]),
        // 确定提交
        commitClick () {
          this.updateGetwx(this.sendParmas).then(res=>{
            this.getGetwx().then(res=>{
              for (let k in this.sendParmas) {
                this.sendParmas[k] = res.data[k]
              }
            })
          })
        },
      },
      components:{

      },
      computed: {
        ...mapState([
        "indexStore",
        "chatStore"
        ]),
      }
    }
  </script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="css" scoped>
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
    .chat_notice-time{
      margin-left: 30px;
    }
  </style>
