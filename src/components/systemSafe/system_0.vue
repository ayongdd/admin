<template>
  <div>
    <div class="system-container">
      <div class="system_header">{{$L.t('systemSafe.info1')}}</div>
      <ul class="system_ul">
        <li>
          <div class="set_title">
            {{$L.t('systemSafe.info2')}}:
          </div>
          <div class="set_vale">
            <input type="text" v-model="safeCode.value">
          </div>
          <div class="set_btn">
            <button @click="setSafeCode()">{{$L.t('submit')}}</button>
          </div>
        </li>
        <li>
          <div class="set_title">
            {{$L.t('systemSafe.info3')}}:
          </div>
          <div class="set_vale">
            <div class="set_textarea">
              <textarea v-model="safeSet.value"></textarea>
              <div>({{$L.t('systemSafe.info4')}})</div>
            </div>
          </div>
          <div class="set_btn">
            <button @click="setSafeSetting()">{{$L.t('submit')}}</button>
          </div>
        </li>
        <li>
          <div class="set_title">
            {{$L.t('systemSafe.info5')}}:
          </div>
          <div class="set_vale">
            <div class="set_vale_radio">
              <el-radio-group v-model="safeCodeMode.mode">
                <el-radio :label="0">{{$L.t('systemSafe.info6')}}</el-radio>
                <el-radio :label="1">{{nameTest}}{{$L.t('login.safeCode')}}</el-radio>
              </el-radio-group>
            </div>
            <div class="set_vale_text">
              <span>{{$L.t('systemSafe.info7')}}</span>
              <span>{{$L.t('systemSafe.info8')}}</span>
            </div>
          </div>
          <div class="set_btn">
            <button @click="commitCodeMode()">{{$L.t('submit')}}</button>
          </div>
        </li>
        <!-- DGG安全验证码 -->
        <li
          class="dgg_code"
          v-if="safeCodeMode.isVerify == 0">
          <div class="set_title">
            {{$L.t('systemSafe.info9')}}:
          </div>
          <div>
            <div class="dgg_code_head">

              <div class="dgg_code_type" style="margin-left: 20px;">
                <span>{{$L.t('systemSafe.info10')}}</span>
                <div class="dgg_code_img">
                  <img :src="$api + systemSafeStore.systemCodeSecret.data.qrCodeUrl" alt="">
                </div>
              </div>
              <div class="dgg_code_type">
                <span>{{$L.t('systemSafe.info11')}}</span>
                <div class="dgg_code_img color-red">
                  {{systemSafeStore.systemCodeSecret.data.secret}}
                </div>
              </div>
            </div>
            <div class="dgg_code_form" style="margin-left: 20px;">
              <input type="text" :placeholder="$L.t('systemSafe.info12')" v-model="isVerifyValue">
              <button @click="isVerifyCode()" style="margin-left: 20px;">{{$L.t('systemSafe.info13')}}</button>
            </div>
          </div>
        </li>
        <li v-if="safeCodeMode.isVerify == 1">
          <div class="set_title">
            {{$L.t('systemSafe.info9')}}:
          </div>
          <div class="set_vale">
            {{$L.t('systemSafe.info14')}}
          </div>
        </li>
        <li style="margin-top: 20px;">
          <div class="setadmin_title">
            {{$L.t('systemSafe.info15')}}:
          </div>
          <div class="set_vale">
            <input type="text" v-model="titleVal">
          </div>
          <div class="set_btn">
            <button @click="titleName()">{{$L.t('submit')}}</button>
          </div>
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
        safeCode: {
          name: 'adminSafeCode',
          value: '',
        },
        safeSet: {
          name: 'adminLoginIP',
          value: '',
        },
        safeCodeMode: {
          mode: 0
        },
        codeSecret: {},
        isVerifyValue: '',
        nameTest:'',
        titleVal:getDateStorage('titleVal')
      }
    },
    watch: {
      'systemSafeStore.systemSafeCode.data' (newValue) {
        // console.log(newValue)
        this.safeCode.value = newValue.adminSafeCode
      },
      'systemSafeStore.systemLoginIP.data' (newValue) {
        // console.log(newValue)
        this.safeSet.value = newValue.adminLoginIP
      },
      'systemSafeStore.systemCodeMode.data' (newValue) {
        this.safeCodeMode = newValue
        if (newValue.isVerify == 0) {
          this.getSystemVerifyCodeSecret()
        }
      }
    },
    created (){
      if(window.headerLogo == 1){
        this.nameTest = this.$L.t('systemSafe.info16')
      }
      if(window.headerLogo == 2){
        this.nameTest = this.$L.t('systemSafe.info17')
      }
      this.getSystemSafeCode()
      this.getSystemLoginIP()
      this.getSystemCodeMode()
      if(!this.titleVal){
        this.titleVal =''
      }
    },
    methods: {
      ...mapActions([
        'getSystemSafeCode',
        'systemSafeSetting',
        'getSystemLoginIP',
        'systemSafeSetting',
        'getSystemCodeMode',
        'getSystemVerifyCodeSecret',
        'setSystemVerifyMode',
        "VerifyDGGsafeCode"
      ]),
      // 设置安全码
      setSafeCode () {
        if (!this.safeCode.value) {
          this.$message(this.$L.t('systemSafe.info18'))
          return false
        }
        if (this.safeCode.value == this.systemSafeStore.systemSafeCode.data.adminSafeCode) {
          this.$message(this.$L.t('systemSafe.info19'))
          return false
        }
        this.systemSafeSetting(this.safeCode)
      },
      // 设置后台限制ip
      setSafeSetting () {
        if (this.safeSet.value == this.systemSafeStore.systemLoginIP.data.adminLoginIP) {
          this.$message(this.$L.t('systemSafe.info20'))
          return false
        }
        this.systemSafeSetting(this.safeSet)
      },
      // 验证DGG验证码
      isVerifyCode () {
        if (!this.isVerifyValue || this.isVerifyValue.length != 6) {
          this.$message(this.$L.t('systemSafe.info21'))
          return false
        }
        this.VerifyDGGsafeCode({
          code: this.isVerifyValue,
          secret: this.systemSafeStore.systemCodeSecret.data.secret
        })
      },
      // 提交验证码模式
      commitCodeMode () {
        if (this.systemSafeStore.systemCodeMode.data.mode.toString() == '') {
          return false
        }
        if (this.safeCodeMode.mode == 1 && this.safeCodeMode.isVerify == 0) {
          this.$message(this.$L.t('systemSafe.info22'))
          return false
        }
        this.setSystemVerifyMode({mode: this.safeCodeMode.mode})
      },
      titleName(){
        if(this.titleVal){
          document.title = this.titleVal+' - '+this.$L.t('systemSafe.info23')
        }else{
          document.title =this.$L.t('systemSafe.info23')
        }
        setDate("titleVal",this.titleVal);
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
    padding: 20px 20px 50px;
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
        .set_vale_radio{
          div{
            display: flex;
            flex-direction: column;
            .el-radio+.el-radio{
              margin-left: 0;
            }
            label{
              line-height: 20px;
              margin-bottom: 10px;
            }
          }
        }
        .set_vale_text{
          display: flex;
          flex-direction: column;
          color: #999;
          margin:0 20px;
          span{
            line-height: 20px;
            margin-bottom: 10px;
            font-size: 13px;
          }
        }
      }
      .set_btn{
        height: 26px;
        button{
          padding: 0 10px;
          height: 26px;
          box-sizing: border-box;
        }
      }
    }
  }
}

.dgg_code{
  /*flex-direction: column;*/
  .dgg_code_head{
    display: flex;
    div{
      margin-right: 20px;
      span{
        color: #999;
      }
      .dgg_code_img{
        padding-top: 10px;
        width: 200px;
        height: 200px;
        line-height: 200px;
        text-align: center;
        font-size: 17px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .dgg_code_form{
    display: flex;
    margin-top: 10px;
    input{
      width: 200px;
      height: 30px;
      box-sizing: border-box;
      padding-left: 5px;
    }
    button{
      background-color: #409eff;
      border:1px solid #409eff;
      color: #fff;
      font-size: 14px;
      border-radius: 4px;
      padding: 0 20px;
      height: 30px;
    }
  }
}
</style>
