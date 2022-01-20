<template>
  <div>
    <div class="system-container">
      <div class="system_header">{{$L.t('chatRoom.zh77')}} <button @click="signRecord()">{{$L.t('chatRoom.zh78')}}</button></div>
      <ul class="system_ul">
        <li>{{$L.t('chatRoom.zh79')}}</li>
        <li v-for="(item,index) in datalist" :key="index">
          <div class="set_title"> {{$L.t('chatRoom.zh80')}}:</div>
          <div class="set_vale"><input type="text" v-model="item.key">&nbsp;{{$L.t('chatRoom.zh81')}}</div>
          <div class="set_title"> {{$L.t('chatRoom.zh82')}} </div>
          <div class="set_vale"><input type="text" v-model="item.value">&nbsp;{{$L.t('chatRoom.zh83')}}</div>
          <div class="set_btn">
            <button @click="detaleSignIn(index)">{{$L.t('delete')}}</button>
          </div>
        </li>
      </ul>
      <div class="addtelget">
        <button @click="addsignIn()">{{$L.t('bonusGame.NiuNiuBetManage.zh28')}} + </button>
      </div>
      <ul class="system_ul">
          <li>{{$L.t('chatRoom.zh84')}}</li>
          <li v-for="(item,index) in cumlist" :key="index">
            <div class="set_title"> {{$L.t('chatRoom.zh85')}}:</div>
            <div class="set_vale"><input type="text" v-model="item.key">&nbsp;{{$L.t('chatRoom.zh81')}}</div>
            <div class="set_title"> {{$L.t('chatRoom.zh82')}} </div>
            <div class="set_vale"><input type="text" v-model="item.value">&nbsp;{{$L.t('chatRoom.zh83')}}</div>
            <div class="set_btn">
              <button @click="detalCode(index)">{{$L.t('delete')}}</button>
            </div>
          </li>
        </ul>
      <div class="addtelget">
        <button @click="setSafeCode()">{{$L.t('bonusGame.NiuNiuBetManage.zh28')}} + </button>
      </div>
      <div class="addtelget">
          <button @click="setPreservation()"> {{$L.t('chatRoom.zh86')}} </button>
        </div>
    </div>
<!-- 签到记录 -->
    <el-dialog
      :title="$L.t('chatRoom.zh88')"
      :visible.sync="signVisible"
      width="880px">
      <div class="computer_modal" v-if="signVisible">
        <table class="table clearfloat">
          <tbody>
          <tr>
            <td>
              <div class="timeShow">
                <div class="sinname">{{$L.t('table.username')}}:
                  <input type="text" v-model="signData.username">
                </div>
                <timer class="submitSeach" @sendTime="getTimer" :day="days"></timer>
                <div class="submitSeach">
                  <input type="submit" :value="$L.t('query')" @click="searchComputerFn">
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
            <td>{{$L.t('chatRoom.zh89')}}</td>
            <td>{{$L.t('chatRoom.zh90')}}</td>
            <td>{{$L.t('chatRoom.zh91')}}</td>
          </tr>
          <tr class="odd" v-for="y in chatStore.dataSignList.data.data">
            <td>{{y.username}}</td>
            <td>{{y.signCount}}</td>
            <td>{{y.count}}</td>
            <td>{{y.signTime}}</td>
          </tr>
          <tr v-if="getComputerPage.sum > 0">
            <td colspan="8">
              <page-limit :pageData="getComputerPage" :inputShow="'1'" @handlePage="handlePage"></page-limit>
            </td>
          </tr>
          <tr v-if="!chatStore.dataSignList.data.data">
            <td colspan="8" class="nodata">
              {{$L.t('noData')}}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </el-dialog>


  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  export default {
    data () {
      return {
        // 连续签到
        datalist:[],
        // 累积签到
        cumlist:[],
        // 新增
        arry: [],
        signVisible:false,
        signData:{
          username:'',
          fromTime:'',
          toTime:'',
          page:1,
          limit:20
        },
        days:''
      }
    },
    created (){
      this.returnAmountList().then(res=>{
        // signOne
        var data = JSON.parse(res.data.signOne)
        let arr = []
        for (let k in data) {
          let obj = {}
          obj.key = k
          obj.value = data[k]
          arr.push(obj)
        }
        this.datalist = arr
        // signTwo
        var datatwo = JSON.parse(res.data.signTwo)
        let arrtwo = []
        for (let k in datatwo) {
          let objtwo = {}
          objtwo.key = k
          objtwo.value = datatwo[k]
          arrtwo.push(objtwo)
        }
        this.cumlist = arrtwo
      })
    },
    methods: {
      ...mapActions([
        'returnAmountList',
        'returnsignInList',
        'getSignLists'
      ]),
      // 新增
      addsignIn(){
        this.datalist.push({})
      },
       // 累计新增
       setSafeCode(){
        this.cumlist.push({})
      },
      // 删除
      detaleSignIn(index){
        this.datalist.splice(index,1);
      },
      // 累计删除
      detalCode(index){
        this.cumlist.splice(index,1);
      },
      // 保存
      setPreservation(){
        // 连续签到次数
        var a = this.datalist.map(val=>{
          return val.key
        })
        // 连续签到赠送积分
        var integral = this.datalist.map(val=>{
          return val.value
        })
        // 累计签到次数
        var count = this.cumlist.map(val=>{
          return val.key
        })
        // 累计签到赠送积分
        var signintegral = this.cumlist.map(val=>{
          return val.value
        })
        this.returnsignInList({
          signOne:a,
          signOne_amount:integral,
          signTwo:count,
          signTwo_amount:signintegral
        })
      },
      handlePage (data) {
        this.signData.page = data.page
        this.signData.limit = data.limit
        this.getSignLists(this.signData)
      },
      getTimer(start, end){
        this.signData.fromTime = start
        this.signData.toTime = end
      },
      signRecord(){
        this.signData.username = ''
        this.signData.fromTime = ''
        this.signData.toTime = ''
        this.signData.page = 1
        this.signVisible = true
        this.getSignLists(this.signData)
      },
      searchComputerFn(){
        this.signData.page = 1
        this.getSignLists(this.signData)
      }
    },
    computed: {
      ...mapState([
        "systemSafeStore",
        "chatStore"
      ]),
      getComputerPage(){
        return {
          page: this.signData.page,
          limit: this.signData.limit,
          sum: this.chatStore.dataSignList.data.count || 0
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.computer_modal {
  height: 600px;
  overflow: auto;
  padding: 10px;
}
.sinname{
  width: 180px!important;
  display: flex;
  align-items: center;
  input{
    width: 70%;
    line-height: 20px;
  }
}
.system-container{
  margin: 10px 5px;
  background: #f2f2f2;
  border: 1px solid #ccc;

  .addtelget{
    height: 26px;
    padding-bottom:20px;
    button{
      padding: 0 10px;
      height: 26px;
      box-sizing: border-box;
      margin-left: 20px;
    }
  }
  .system_header{
    background: #f6f6f6;
    color: #000;
    font-weight: bold;
    padding:3px 10px;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
    justify-content: space-between;
    button{
      margin-right: 10px;
    }
  }
  // 内容
  .system_ul{
    padding: 20px 20px 10px;
    // min-height: 100vh;
    li{
      display: flex;
      align-items: center;
      font-size: 15px;
      padding-bottom: 10px;
      &.li_title{
        padding-bottom: 10px;
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
  padding-left: 120px;
  flex-direction: column;
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
