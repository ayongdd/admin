<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>{{$L.t('agent.agent_5.alert1')}}</td>
      </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
      <tr class="head">
        <td colspan="2">{{$L.t('agent.agent_5.alert2')}}</td>
      </tr>
      <tr class="agent_user">
        <td>
          <span>{{$L.t('agent.agent_5.alert3')}}</span>
        </td>
        <td>
          <el-radio v-model="formData.switchDLBuy" label="1">{{$L.t('open')}}</el-radio>
          <el-radio v-model="formData.switchDLBuy" label="0">{{$L.t('close')}}</el-radio>
        </td>
      </tr>
      <tr class="agent_user">
        <td>
          <span>{{$L.t('agent.agent_5.alert4')}}</span>
        </td>
        <td>
          <el-radio v-model="formData.switchZDLBuy" label="1">{{$L.t('open')}}</el-radio>
          <el-radio v-model="formData.switchZDLBuy" label="0">{{$L.t('close')}}</el-radio>
        </td>
      </tr>
      <tr class="agent_user">
        <td>
          <span>{{$L.t('agent.agent_5.alert5')}}</span>
        </td>
        <td>
          <input type="number" :placeholder="$L.t('agent.agent_5.alert5')+'%'" v-model="formData.fanDianMax">%
        </td>
      </tr>
      <tr class="agent_user">
        <td>
          <span>{{$L.t('agent.agent_5.alert19')}}</span>
        </td>
        <td>
          <input type="number" v-model="formData.fanDianDiff" :placeholder="$L.t('agent.agent_5.alert19')+'%'">%
        </td>
      </tr>
      <!-- 真人 -->
      <tr class="agent_user">
        <td>
          <span>{{$L.t('agent.agent_5.alert8')}}</span>
        </td>
        <td>
          <input type="number" :placeholder="$L.t('agent.agent_5.alert8')+'%'" v-model="formData.fanDianPersonMax">%
        </td>
      </tr>
      <tr class="agent_user">
        <td>
          <span>{{$L.t('agent.agent_5.alert20')}}</span>
        </td>
        <td>
          <input type="number" v-model="formData.fanDianPersonMin" :placeholder="$L.t('agent.agent_5.alert20')+'%'">%
        </td>
      </tr>
      <tr class="agent_user">
        <td>
          <span>{{$L.t('agent.agent_5.alert10')}}</span>
        </td>
        <td>
          <input type="number" :placeholder="$L.t('agent.agent_5.alert10')+'%'" v-model="formData.fanDianElectronicsMax">%
        </td>
      </tr>
      <tr class="agent_user">
        <td>
          <span>{{$L.t('agent.agent_5.alert21')}}</span>
        </td>
        <td>
          <input type="number" v-model="formData.fanDianElectronicsMin" :placeholder="$L.t('agent.agent_5.alert21')+'%'">%
        </td>
      </tr>
      <tr class="agent_user">
        <td>
          <span>{{$L.t('agent.agent_5.alert11')}}</span>
        </td>
        <td>
          <input type="number" :placeholder="$L.t('agent.agent_5.alert11')+'%'" v-model="formData.fanDianChessMax">%
        </td>
      </tr>
      <tr class="agent_user">
        <td>
          <span>{{$L.t('agent.agent_5.alert22')}}</span>
        </td>
        <td>
          <input type="number" v-model="formData.fanDianChessMin" :placeholder="$L.t('agent.agent_5.alert22')+'%'">%
        </td>
      </tr>
      <tr class="agent_user">
        <td>
          <span>{{$L.t('agent.agent_5.alert14')}}</span>
        </td>
        <td>
          <input type="number" :placeholder="$L.t('agent.agent_5.alert14')+'%'" v-model="formData.fanDianSportsMax">%
        </td>
      </tr>
      <tr class="agent_user">
        <td>
          <span>{{$L.t('agent.agent_5.alert23')}}</span>
        </td>
        <td>
          <input type="number" v-model="formData.fanDianSportsMin" :placeholder="$L.t('agent.agent_5.alert23')+'%'">%
        </td>
      </tr>
      <!-- 电竞 -->
      <tr class="agent_user">
        <td>
          <span>{{$L.t('agent.agent_5.alert12')}}</span>
        </td>
        <td>
          <input type="number" :placeholder="$L.t('agent.agent_5.alert12')+'%'" v-model="formData.fanDianMatchMax">%
        </td>
      </tr>
      <tr class="agent_user">
        <td>
          <span>{{$L.t('agent.agent_5.alert24')}}</span>
        </td>
        <td>
          <input type="number" v-model="formData.fanDianMatchMin" :placeholder="$L.t('agent.agent_5.alert24')+'%'">%
        </td>
      </tr>
      <!-- <tr class="agent_user">
        <td>
          <span>返点限制</span>
        </td>
        <td>
          <input type="number" v-model="fanDianDiff" placeholder="最大返点限制">最大返点限制
        </td>
      </tr> -->
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
        btnState:false,
        formData:{
          switchZDLBuy:'', //总代理投注开关 1:开启   0:关闭
          switchDLBuy:'',
          fanDianDiff:'', //返点限制
          fanDianMax:'', //最大返点
          fanDianElectronicsMin:'',
          fanDianElectronicsMax:'',
          fanDianPersonMin:'',
          fanDianPersonMax:'',
          fanDianChessMin:'',
          fanDianChessMax:'',
          fanDianSportsMax:'',
          fanDianSportsMin:'',
          fanDianMatchMin:'0',
          fanDianMatchMax:'0'
        }
      }
    },
    created (){
      this.gettingAgentList().then((res) =>{
        if(res.code == 0){
          this.formData = res.data
          this.btnState = true
          if(!this.formData.fanDianMatchMin){
            this.formData.fanDianMatchMin = 0
          }
          if(!this.formData.fanDianMatchMax){
            this.formData.fanDianMatchMax = 0
          }
        }

      })
    },
    mounted(){

    },
    methods: {
      ...mapMutations([

      ]),

      ...mapActions([
        "gettingAgentList",
        "setAgentFandian"
      ]),
      saveSetting(){
        // if (isNaN(this.fanDianMax) || this.fanDianMax.indexOf('.') != '-1') {
        //   this.$message('返点最大值只能为正整数')
        //   return false
        // }
        // if (isNaN(this.fanDianDiff)) {
        //   this.$message('返点限制只能为正整数')
        //   return false
        // }
        console.log(this.formData)
        this.setAgentFandian(this.formData).then(()=>{
          this.gettingAgentList().then((res) =>{
            if(res.code == 0){
              this.formData = res.data
            this.btnState = true
            }

          })
        })
      },

    },
    components:{

    },
    computed: {
      ...mapState([
        "agentStore",
      ]),
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
</style>
