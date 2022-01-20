<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>{{$L.t('agent.agent_3.alert10')}}</td>
      </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
      <tr class="head">
        <td>{{$L.t('agent.agent_3.alert11')}}</td>
      </tr>
      <tr class="end">
        <td align="left">
          <textarea name="" v-model="agentDetails" cols="30" rows="10">

          </textarea>
        </td>
      </tr>
      <tr class="end" v-if="btnState">
        <td colspan="2" align="left">
          <button @click="saveSetting" style="margin-left: 25%;">{{$L.t('saveChange')}}</button>
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
        agentDetails:'',
        btnState:false
      }
    },
    created (){
      this.getAgentDetails().then((res) =>{
        if(res.code == 0){
          this.agentDetails = res.data.agentDetails
          this.btnState = true
        }

      })
    },
    mounted(){

    },
    methods: {
      ...mapMutations([

      ]),

      ...mapActions([
        "getAgentDetails",
        "settingAgentDetails",

      ]),
      saveSetting(){
        this.settingAgentDetails({agentDetails:this.agentDetails})
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
<style lang="css" scoped>
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
    margin: 5px;
  }
</style>
