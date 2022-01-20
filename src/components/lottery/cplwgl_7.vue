<template>
  <div class="container lottert_4">
      <table class="table">
        <tbody>
      <tr class="nav">
        <td colspan="1">
          <p>{{$L.t('lottery.zh2')}}</p>
        </td>
        <td colspan="8">
          <div class="lottery-head">

            <span>{{$L.t('table.type')}}</span>
            <select v-model="lotteryType">
              <option value="0">{{$L.t('lottery.zh3')}}</option>
              <option value="1">{{$L.t('lottery.zh4')}}</option>
              <option value="2">{{$L.t('lottery.zh5')}}</option>
            </select>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="1">
          {{$L.t('annoucement.xttz_5.zh2')}}
        </td>
        <td colspan="8">
          <div class="lottery-nav">
            <button
              :class="{'active': lotteryClassID == index}"
              v-for="(item,index) in lotteryStore.lotteryClassList.data"
              @click="lotTypeChange(item,index)">
              {{item.name}}
            </button>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="1">
          {{$L.t('table.caizhong')}}
        </td>
        <td colspan="8">
          <div class="lottery-nav">
            <button
              :class="{'active': lotteryId == index}"
              v-for="(item,index) in lotteryStore.lotteryTypeFromClassID.data"
              @click="lotteryChange(item,index)"
            >
              {{item.title}}
            </button>
          </div>
          <div class="lottery-nav" v-if="lotteryStore.lotteryTypeFromClassID.code != 0">
            {{$L.t('lottery.zh6')}}
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="9">
          <div class="timeShow">
            <div>
              {{$L.t('lottery.zh7')}}：
              <select name="" v-model="kjjcObj.class_type">
                <option value="1">{{$L.t('lottery.zh8')}}</option>
                <option value="2">{{$L.t('lottery.zh9')}}</option>
                <option value="3">{{$L.t('lottery.zh10')}}</option>
              </select>
            </div>
            <div>
              {{$L.t('lottery.zh11')}}：
              <select name="" v-model="kjjcObj.kj">
                <option value="2">{{$L.t('agent.agent_8.zh49')}}</option>
                <option value="0">{{$L.t('lottery.zh12')}}</option>
                <option value="1">{{$L.t('lottery.zh13')}}</option>
              </select>
            </div>
          </div>
        </td>
      </tr>
        </tbody>
      </table>
      <table class="table">
        <tbody>
      <tr class="head">
        <td>{{$L.t('lottery.zh14')}}</td>
        <td>{{$L.t('lottery.zh15')}}</td>
        <td>
          {{$L.t('lottery.zh16')}}</td>
        <td>{{$L.t('lottery.zh17')}}</td>
        <td>{{$L.t('lottery.zh18')}}</td>
        <td>
          {{$L.t('lottery.zh19')}}</td>
        <td>
          {{$L.t('lottery.zh20')}}</td>
        <td>
          {{$L.t('lottery.zh21')}}</td>
        <td>{{$L.t('table.handle')}}</td>
      </tr>
      <tr class="odd" v-for="kj in lotteryStore.planListTypeList.data.data" v-if="lotteryStore.lotteryTypeFromClassID.code == 0">
        <td>{{kj.actionNo}}</td>
        <td>{{kj.shwoNo}}</td>
        <td>{{kj.actionData}}</td>
        <td>{{kj.status}}</td>
        <td>{{kj.ExNo}}</td>
        <td>{{kj.number}}</td>
        <td>{{kj.result}}</td>
        <td>{{kj.update_time}}</td>
        <td><button v-if="kj.is_k == 'block'" v-on:click="editFn(kj)">{{$L.t('fixed')}}</button></td>
      </tr>
      <tr v-if="getKjPage.sum > 0 && lotteryStore.lotteryTypeFromClassID.code == 0">
        <td colspan="9">
          <page-limit :pageData="getKjPage" :inputShow="'1'" @handlePage="kjPageFn"></page-limit>
        </td>
      </tr>
      <tr v-if="!lotteryStore.planListTypeList.data.data || lotteryStore.lotteryTypeFromClassID.code != 0">
        <td colspan="9" class="nodata">
          {{$L.t('noData')}}
        </td>
      </tr>
      </tbody>
    </table>
    <el-dialog
      :title="$L.t('lottery.zh25')"
      :visible.sync="updataState"
      width="500px">
      <div v-if="updataState" class="form_container">
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh15')}}
            </div>
            <div class="formLi_content">
                {{lotteryTitle || $L.t('null')}}
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh16')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="setPlanObj.prediction" :placeholder="$L.t('lottery.zh22')">
            </div>
          </li>
          <li>
            <button class="form_commit" v-on:click="savePlanFn">{{$L.t('lottery.zh23')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  import {MessageBox,Message} from 'element-ui'
  export default {
    data () {
      return {
        lotteryClassID: 0,
        lotteryId:0,
        kjjcObj:{
          type:'',
          class_type:'1',
          kj:'2',
          page:1,
          limit:'10'
        },
        updataState:false,
        setPlanObj:{
          id:'',
          prediction:'',
        },
        lotteryTitle:'',
        lotteryType:'0',  // 2 官方 1 系统
        thislotteryId:'',
      }
    },
    created (){

      this.getLotteryClassList().then((res) => {
        if (res.code == 0) {
        this.thislotteryId = res.data[0].id
          this.getLotteryTypeFromClassID3({classID:res.data[0].id,apiType:'',lotteryType:this.lotteryType})
        }
      })
    },
    mounted(){

    },
    watch:{
      'kjjcObj.class_type':function (v) {
        this.kjjcObj.page = 1
        this.kjjcObj.limit = 10
        this.kjjcObj.type = this.lotteryStore.planLotteryType
        this.getPlanListType(this.kjjcObj)
      },
      'kjjcObj.kj':function (v) {
        this.kjjcObj.page = 1
        this.kjjcObj.limit = 10
        this.kjjcObj.type = this.lotteryStore.planLotteryType
        this.getPlanListType(this.kjjcObj)
      },
      'lotteryType'(n,o){
        this.lotteryId=0
        this.kjjcObj.kj = '2'
        this.kjjcObj.class_type = '1'
        this.kjjcObj.page = 1
        this.kjjcObj.limit = 10
        this.getLotteryTypeFromClassID3({classID:this.thislotteryId,apiType:'',lotteryType:n})
      }
    },
    methods: {
      ...mapMutations([
        "setGroupThis"
      ]),
      ...mapActions([
        'getLotteryClassList',
        "getLotteryTypeFromClassID3",
        "getPlanListType",
        "updatePlayInfo"
      ]),
      savePlanFn(){
        if(!this.setPlanObj.prediction){
          Message({
            message:this.$L.t('lottery.zh24'),
            type:"warning",
            showClose:true
          })
          return;
        }
        this.updatePlayInfo(this.setPlanObj).then(()=>{
          this.setPlanObj.prediction = ''
          this.updataState = false
          this.getPlanListType(this.kjjcObj)
        })
      },
      editFn(item){
        this.setPlanObj.id = item.id
        this.lotteryTitle = item.shwoNo
        this.updataState = true
      },
      kjPageFn(data){
        this.kjjcObj.page = data.page
        this.kjjcObj.limit = data.limit
        this.kjjcObj.type = this.lotteryStore.planLotteryType
        this.getPlanListType(this.kjjcObj)
      },
      // 彩种分类切换  获取彩种
      lotTypeChange (item,index) {
        this.lotteryClassID = index
        this.lotteryId=0
        this.thislotteryId = item.id
        this.kjjcObj.kj = '2'
        this.kjjcObj.class_type = '1'
        this.getLotteryTypeFromClassID3({classID:item.id,apiType:'',lotteryType:this.lotteryType})
      },
      // 彩种切换  获取彩种玩法
      lotteryChange(item,index){
        this.lotteryId = index
        this.kjjcObj.type = item.id
        this.kjjcObj.kj = '2'
        this.kjjcObj.class_type = '1'
        this.getPlanListType(this.kjjcObj)
      },
    },
    computed: {
      ...mapState([
        "lotteryStore",
      ]),
      getKjPage(){
        return {
          page: this.kjjcObj.page,
          limit: this.kjjcObj.limit,
          sum: this.lotteryStore.planListTypeList.data.count || 0
        }
      }
    },
  }
</script>
<style lang="less" scoped>
  *{
    box-sizing: border-box;
  }
  .lottery-head{
    display: flex;
    align-items: center;
  p{
    margin-right: 20px;
  }
  span{
    margin-right: 10px;
    font-weight: normal;
  }
  select{
    margin-right: 10px;
    padding: 0 5px;
  }
  }
  .lottery-nav{
    padding: 5px 0;
  button{
    padding: 0 10px;
    margin-right: 10px;
    color: #666;
    margin-bottom:10px;
  &.active{
     color: red;
     background-color: buttonface;
     border-width: 2px;
     border-style: outset;
     border-color: buttonface;
     border-image: initial;
   }
  }
  }

  .form_container{
  ul > li {
  &>div.formLi_content{
      flex: 1;
      margin-right: 50px;
  textarea{
    width: 100%;
    min-height: 60px;
    padding-left: 10px;
  }
  }
  }
  }
  .kjActive{
  button{
    margin: 0 10px;
  &.on {
     color:red;
   }
  }

  }
  .timeShow {
  button  {
    padding: 0 5px;
  }
  >div{
     margin: 0 5px;
  input{
    height: 26px;
  }
  }
  }

</style>
