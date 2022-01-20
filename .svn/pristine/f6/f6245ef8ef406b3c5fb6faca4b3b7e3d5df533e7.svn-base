<template>
  <div class="container">
    <table class="table">
      <tbody>
        <tr class="head">
          <td colspan="2">{{$L.t('lottery.zh196')}}</td>
        </tr>
        <tr>
          <td>{{$L.t('lottery.zh197')}}</td>
          <td>
            <el-radio v-model="sendParmas.switchBuy" label="1">{{$L.t('open')}}</el-radio>
            <el-radio v-model="sendParmas.switchBuy" label="0">{{$L.t('close')}}</el-radio>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('lottery.zh198')}}</td>
          <td>
            <el-radio v-model="sendParmas.cancelOrder" label="1">{{$L.t('open')}}</el-radio>
            <el-radio v-model="sendParmas.cancelOrder" label="0">{{$L.t('close')}}</el-radio>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('lottery.zh199')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.killingRate" :placeholder="$L.t('lottery.zh199')"></el-input>
            <span class="chat_notice-in">{{$L.t('lottery.zh200')}}</span>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('lottery.zh202')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.lhcWxJin" :placeholder="$L.t('lottery.zh202')"></el-input>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('lottery.zh203')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.lhcWxMu" :placeholder="$L.t('lottery.zh203')"></el-input>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('lottery.zh204')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.lhcWxShui" :placeholder="$L.t('lottery.zh204')"></el-input>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('lottery.zh205')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.lhcWxHuo" :placeholder="$L.t('lottery.zh205')"></el-input>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('lottery.zh206')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.lhcWxTu" :placeholder="$L.t('lottery.zh206')"></el-input>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('lottery.zh207')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.animalsYear" :placeholder="$L.t('lottery.zh207')"></el-input>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('lottery.zh208')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.lhcTeMa" :placeholder="$L.t('lottery.zh208')"></el-input>
            <span class="chat_notice-in">%({{$L.t('lottery.zh209')}})</span>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('lottery.zh210')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.bjk3Miss" :placeholder="$L.t('lottery.zh210')"></el-input>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('lottery.zh211')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.pk10Miss" :placeholder="$L.t('lottery.zh211')"></el-input>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('lottery.zh212')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.pcddMiss" :placeholder="$L.t('lottery.zh212')"></el-input>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('lottery.zh213')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.bjkl8Miss" :placeholder="$L.t('lottery.zh213')"></el-input>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('lottery.zh214')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.pcddHxiao" :placeholder="$L.t('lottery.zh214')"></el-input>
            <span class="chat_notice-in">{{$L.t('lottery.zh239')}}</span>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('lottery.zh216')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.pcddHdan" :placeholder="$L.t('lottery.zh216')"></el-input>
            <span class="chat_notice-in">{{$L.t('lottery.zh239')}}</span>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('lottery.zh217')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.pcddHxiaodan" :placeholder="$L.t('lottery.zh217')"></el-input>
            <span class="chat_notice-in">{{$L.t('lottery.zh239')}}</span>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('lottery.zh218')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.pcddHda" :placeholder="$L.t('lottery.zh218')"></el-input>
            <span class="chat_notice-in">{{$L.t('lottery.zh240')}}</span>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('lottery.zh219')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.pcddHshuang" :placeholder="$L.t('lottery.zh219')"></el-input>
            <span class="chat_notice-in">{{$L.t('lottery.zh240')}}</span>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('lottery.zh220')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.pcddHdashuang" :placeholder="$L.t('lottery.zh220')"></el-input>
            <span class="chat_notice-in">{{$L.t('lottery.zh240')}}</span>
          </td>
        </tr>

        <tr>
          <td>{{$L.t('lottery.zh221')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.LongDragon_interfere" :placeholder="$L.t('lottery.zh221')"></el-input>
            <span class="chat_notice-in">{{$L.t('lottery.zh222')}}<span style="color:red;">{{$L.t('lottery.zh223')}}</span>{{$L.t('lottery.zh224')}}</span>
          </td>
        </tr>


        <tr>
          <td>{{$L.t('lottery.zh225')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.LongDragon_probability" :placeholder="$L.t('lottery.zh225')"></el-input>
            <span class="chat_notice-in">0~100，<span style="color:red;">{{$L.t('lottery.zh226')}}</span>，{{$L.t('lottery.zh227')}}</span>
          </td>
        </tr>

        <tr class="end">
          <td colspan="2" style="padding: 20px 0;">
            <input type="button" class="commit_btn" :value="$L.t('sure')" @click="commitClick()">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  export default {
    data () {
      return {
        sendParmas:{
          switchBuy:'',
          cancelOrder:'',
          killingRate:'',
          lhcWxJin:'',
          lhcWxMu:'',
          lhcWxShui:'',
          lhcWxHuo:'',
          lhcWxTu:'',
          animalsYear:'',
          lhcTeMa:'',
          bjk3Miss:'',
          pk10Miss:'',
          pcddMiss:'',
          bjkl8Miss :'',
          pcddHxiao:'',
          pcddHdan:'',
          pcddHxiaodan:'',
          pcddHda:'',
          pcddHshuang:'',
          pcddHdashuang:'',
          LongDragon_interfere:0,
          LongDragon_probability:0
        },
      }
    },
    created (){
      this.getLotterySetting().then((res)=>{
        for (let k in this.sendParmas) {
          this.sendParmas[k] = res.data[k]
        }
      })
    },
    methods: {
      ...mapMutations([

      ]),
      ...mapActions([
        'getLotterySetting',
        'updateLotterySetting'
      ]),
      // 确定提交
      commitClick () {
        this.updateLotterySetting(this.sendParmas).then(res=>{
          this.getLotterySetting().then(res=>{
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
        "lotteryStore",
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
  textarea {
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
  }
  .commit_btn {
    width: 100px;height: 32px;font-size: 15px;
  }
</style>
