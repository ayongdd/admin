<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>{{$L.t('agent.agent_3.alert1')}}</td>
      </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
      <tr class="head">
        <td colspan="2">{{$L.t('agent.agent_3.alert2')}}</td>
      </tr>
      <tr class="agent_user">
        <td>
          <el-radio v-model="agentMode" label="0">{{$L.t('agent.agent_3.alert3')}}</el-radio>
          <span class="fan_span">{{$L.t('agent.agent_3.alert12')}}</span>
          <input type="number" v-model="agentNum[0]">%
        </td>
        <td>
          <span> （{{$L.t('agent.agent_3.alert13')}}。）</span>
        </td>
      </tr>
      <tr class="agent_user">
        <td>
          <el-radio v-model="agentMode" label="1">{{$L.t('agent.agent_3.alert14')}}</el-radio>
          <span class="fan_span">{{$L.t('agent.agent_3.alert12')}}</span>
          <input type="number" v-model="agentNum[1]">%
        </td>
        <td>
          <span>（{{$L.t('agent.agent_3.alert15')}}。）</span>
        </td>
      </tr>
      <tr class="agent_user">
        <td>
          <el-radio v-model="agentMode" label="2">{{$L.t('agent.agent_3.alert16')}}</el-radio>
          <span class="fan_span">{{$L.t('agent.agent_3.alert12')}}</span>
          <input type="number" v-model="agentNum[2]">%
        </td>
        <td>
          <span> （{{$L.t('agent.agent_3.alert17')}}。）</span>
        </td>
      </tr>
      <tr class="end" v-if="btnState">
        <td colspan="2">
          <button @click="saveSetting">{{$L.t('saveChange')}}</button>
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
        agentMode: '',
        agentNum: {
          0: '10',
          1: '10',
          2: '10',
        },
        btnState:false
      }
    },
    created (){
      this.initListAction()
    },
    methods: {
      ...mapMutations([

      ]),
      ...mapActions([
        "getAgentMode",
        "settingAgentMode"
      ]),
      // 加载数据
      initListAction () {
        this.getAgentMode().then((res) =>{
          // console.log(res)
          if(res.code == 0) {
            this.agentMode = res.data.agentMode
            for (let k in this.agentNum) {
              if (k == this.agentMode) {
                this.agentNum[k] = res.data.fanDianMax
              } else {
                this.agentNum[k] = '10'
              }
            }
            this.btnState = true
          }
        })
      },
      // 设置
      saveSetting(){
        this.settingAgentMode({
          agentMode: this.agentMode,
          fandian: this.agentNum[this.agentMode]
        }).then(() => {
          this.initListAction()
        })
      },

    },
    components:{

    },
    computed: {
      ...mapState([
        "indexStore",
      ]),
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.agent_user{
  td{
    label{
      display: inline-block;
      width: 305px;
    }
    input{
      width: 80px;
      padding-left: 5px;
      margin-right: 5px;
    }
    .fan_span{
      padding-left: 20px;
      padding-right: 10px;
    }
  }
}
</style>
