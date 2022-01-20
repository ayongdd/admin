<template>
  <div>
    <div class="system-container">
      <div class="system_header">{{$L.t('systemSafe.info24')}}</div>
      <ul class="system_ul">
        <li>
          <div class="set_title">
            {{$L.t('systemSafe.info25')}}:
          </div>
          <div class="set_vale">
            <div class="set_vale_radio">
              <el-radio v-model="sendParmas.verifySwitch" label="1">{{$L.t('open')}}</el-radio>
              <el-radio v-model="sendParmas.verifySwitch" label="0">{{$L.t('close')}}</el-radio>
            </div>
            <div class="set_vale_text">
              <p>1、{{$L.t('systemSafe.info26')}}</p>
              <p>2、{{$L.t('systemSafe.info27')}}</p>
            </div>
          </div>
        </li>
        <li>
          <div class="set_title">
            {{$L.t('systemSafe.info28')}}:
          </div>
          <div class="set_vale">
            <el-input v-model="sendParmas.registerVerifyNums" :placeholder="$L.t('annoucement.tcgg_1.importContent')"></el-input>
          </div>
          <div>
            <span>{{$L.t('systemSafe.info29')}}</span>
          </div>
        </li>
        <li class="set-btn">
            <button @click="titleName()">{{$L.t('submit')}}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  import { getDateStorage, setDate } from '../../common/common'
  export default {
    data () {
      return {
        sendParmas: {
          registerVerifyNums:'',
          verifySwitch:'0'
        },
      }
    },
    created (){
       this.getWebSetUp().then(res=>{
         this.sendParmas.registerVerifyNums = res.data.registerVerifyNums
         this.sendParmas.verifySwitch = res.data.verifySwitch
       })
    },
    methods: {
      ...mapActions([
        'getWebSetUp',
        'updateWebSetUp'
      ]),
      titleName(){
        if(!this.sendParmas.registerVerifyNums){
          this.$message(this.$L.t('systemSafe.info30'))
          return false
        }
        this.updateWebSetUp(this.sendParmas).then(res=>{
          this.getWebSetUp().then(res=>{
            for (let k in this.sendParmas) {
              this.sendParmas[k] = res.data[k]
            }
          })
        })
      }
    },
    computed: {
      ...mapState([
        "systemSafeStore",
      ]),
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.chat_notice{
  margin-left: 20px;
}
.system-container{
  margin: 10px 5px;
  border: 1px solid #ccc;
  .system_header{
    background: #f6f6f6;
    color: #000;
    font-weight: bold;
    padding:3px 10px;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
  }
  // 内容
  .system_ul{
    background: #f2f2f2;
    padding: 20px 20px 10px;
    // min-height: 100vh;
    li{
      display: flex;
      // align-items: center;
      font-size: 15px;
      padding-bottom: 20px;
      &.li_title{
        padding-bottom: 10px;
      }
      .set_title{
        width: 100px;
        text-align: right;
      }
      .setadmin_title{
        width: 144px;
        text-align: right;
      }
      .set_vale{
        margin: 0 20px;
        // width: 200px;
        color: #555;
        display: flex;
        input{
          padding-left: 10px;
        }
        // ip限制
        .set_textarea{
          flex-direction: column;
          textarea{
            min-width: 300px;
            max-width: 300px;
            min-height: 100px;
            padding: 10px;
            font-size: 16px;
          }
          div{
            margin-top: 10px;
            font-size: 13px;
            color: #999;
          }
        }
        .set_vale_text{
          color: rgb(0, 0, 0);
          margin-left: 85px;
        }
      }
    }
  }
}
.set-btn{
  height: 75px;
  button{
    margin: auto;
    padding: 5px 30px;
  }
}
</style>
