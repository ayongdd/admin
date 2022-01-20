<template>
  <div class="container">
    <table class="table">
      <tbody>
      <tr class="nav">
        <td colspan="11">
          <div class="lottery-head">
            <p>{{$L.t('lottery.zh176')}}</p>
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
        <td colspan="11">
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
        <td colspan="11">
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
        <td colspan="1">
          {{$L.t('table.playType')}}
        </td>
        <td colspan="11">
          <div class="lottery-nav" v-if="lotteryStore.lotteryTypeFromClassID.code == 0">
            <button
              :class="{'active': groupTypeId == index}"
              v-for="(item,index) in lotteryStore.lotteryGroupFromgroupType.data"
              @click="groupTypeChange(item,index)"
            >
              {{item.groupName}}
            </button>
          </div>
          <div class="lottery-nav" v-if="lotteryStore.lotteryTypeFromClassID.code != 0">
            {{$L.t('lottery.zh6')}}
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="11">
          <select name="" v-model="selectValue">
            <option value="multiple">
              {{$L.t('bonusGame.MoneyQuery.zh35')}}
            </option>
            <option value="maxCount">
              {{$L.t('lottery.zh177')}}
            </option>
            <option value="minCharge">
              {{$L.t('lottery.zh178')}}
            </option>
          </select>
          <input type="text" v-model="setInputValue">
          <button v-on:click="readCheckFn">
            {{$L.t('lottery.zh179')}}
          </button>
          <button v-on:click="saveCheckFn">
            {{$L.t('lottery.zh180')}}
          </button>
        </td>
      </tr>
      <tr v-if="showZm16">
        <td colspan="11">
          <button @click="getZm16LotteryList({name:'一',num:0})" :style="{color:lotteryStore.zm16Index*1 == 0 ? 'red' : '#333'}">
            {{$L.t('lottery.zh181')}}
          </button>
          <button @click="getZm16LotteryList({name:'二',num:1})" :style="{color:lotteryStore.zm16Index*1 == 1 ? 'red' : '#333'}">
            {{$L.t('lottery.zh182')}}
          </button>
          <button @click="getZm16LotteryList({name:'三',num:2})" :style="{color:lotteryStore.zm16Index*1 == 2 ? 'red' : '#333'}">
            {{$L.t('lottery.zh183')}}
          </button>
          <button @click="getZm16LotteryList({name:'四',num:3})" :style="{color:lotteryStore.zm16Index*1 == 3 ? 'red' : '#333'}">
            {{$L.t('lottery.zh184')}}
          </button>
          <button @click="getZm16LotteryList({name:'五',num:4})" :style="{color:lotteryStore.zm16Index*1 == 4 ? 'red' : '#333'}">
            {{$L.t('lottery.zh185')}}
          </button>
          <button @click="getZm16LotteryList({name:'六',num:5})" :style="{color:lotteryStore.zm16Index*1 == 5 ? 'red' : '#333'}">
            {{$L.t('lottery.zh186')}}
          </button>
        </td>
      </tr>
      <tr class="head">
        <td>
          <input type="checkbox" class="checkbox-select" v-model="allChecked" @click="allCheck()">
        </td>
        <td>{{$L.t('table.playType')}}</td>
        <td>{{$L.t('bonusGame.MoneyQuery.zh35')}}</td>
        <td>{{$L.t('lottery.zh193')}}</td>
        <td>{{$L.t('lottery.zh177')}}</td>
        <td>{{$L.t('lottery.zh178')}}</td>
        <td>{{$L.t('table.status')}}</td>
        <td>{{$L.t('table.handle')}}</td>
      </tr>
      <tr v-for="(wf,index) in lotteryStore.lotteryPlayedFromgroupID.data" v-if="lotteryStore.lotteryTypeFromClassID.code == 0">
        <td>
          <input type="checkbox" class="checkbox-select" v-model="wf.checked" @click="handelCheck(wf)">
        </td>
        <td>{{wf.name}}</td>
        <td>{{wf.multiple}}</td>
        <td>{{wf.allCount}}</td>
        <td>{{wf.maxCount}}</td>
        <td>{{wf.minCharge}}</td>
        <td>{{wf.enable*1 == 1 ? $L.t('open') : $L.t('close')}}</td>
        <td><button @click="setPlay(wf)">{{$L.t('fixed')}}</button></td>
      </tr>
      <tr v-if="lotteryStore.lotteryTypeFromClassID.code != 0">
        <td colspan="13" class="nodata">
          {{$L.t('noData')}}
        </td>
      </tr>
      </tbody>
    </table>
    <el-dialog
      :title="$L.t('bonusGame.NiuNiuBetManage.zh31')"
      :visible.sync="editInfoVisible"
      width="700px">
      <div v-if="editInfoVisible" class="form_container">
        <div class="formBox_title"> {{$L.t('agent.agent_0.alert')}}</div>
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('bonusGame.MoneyQuery.zh35')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="setPlayMessage.multiple" :placeholder="$L.t('bonusGame.NiuNiuBetManage.zh32')">
            </div>
            <div class="formLi_hint">
              {{$L.t('lottery.zh192')}}
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh177')}}
            </div>
            <div class="formLi_content">
              <input type="tel" v-model="setPlayMessage.maxCount" :placeholder="$L.t('lottery.zh187')">
            </div>
            <div class="formLi_hint">
              {{$L.t('lottery.zh188')}}
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh178')}}
            </div>
            <div class="formLi_content">
              <input type="tel" v-model="setPlayMessage.minCharge" :placeholder="$L.t('lottery.zh189')">
            </div>
            <div class="formLi_hint">
              {{$L.t('lottery.zh190')}}
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('table.status')}}
            </div>
            <div class="formLi_content">
              <select v-model="setPlayMessage.enable">
                <option value="1">{{$L.t('open')}}</option>
                <option value="0">{{$L.t('close')}}</option>
              </select>
            </div>
            <div class="formLi_hint">
              {{$L.t('lottery.zh191')}}
            </div>
          </li>
          <li>
            <button class="form_commit" @click="saveLotteryPlay">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  import {Message} from 'element-ui'
  export default {
    data () {
      return {
        lotteryClassID: 0,
        lotteryId:0,
        groupTypeId:0,

        editInfoVisible:false,
        setPlayMessage:{
          id:'',
          maxCount:'',
          minCharge:'',
          multiple:'',
          enable:'',
        },
        groupThis:'',
        allChecked: false,
        setInputValue:'',
        selectValue:'multiple',
        lotteryType:'0',  // 2 官方 1 系统
        thislotteryId:'',

        showZm16:false,
      }
    },
    created (){
      this.getLotteryClassList().then((res) => {
        if (res.code == 0) {
          this.thislotteryId = res.data[0].id
          this.getLotteryTypeFromClassID({classID:res.data[0].id,apiType:1,lotteryType:this.lotteryType})
        }
      })
    },
    mounted(){

    },
    watch: {
      'lotteryStore.lotteryPlayedFromgroupID.data' (newValue) {
        this.allChecked = false
      },
      'lotteryType'(n,o){
        this.lotteryId=0
        this.groupTypeId=0
        this.getLotteryTypeFromClassID({classID:this.thislotteryId,apiType:1,lotteryType:n})
      },
      'lotteryStore.groupNameThis'(n,o){
        if(n == '正码特'){
          this.showZm16 = true
        }else{
          this.showZm16 = false
        }
      },


    },
    methods: {
      ...mapMutations([
          "setGroupThis",
        "getZm16LotteryList",
        "setGroupNameThis"
      ]),
      ...mapActions([
        'getLotteryClassList',
        "getLotteryTypeFromClassID",
        "getLotteryGroupFromgroupType",
        "getLotteryPlayedFromgroupID",
        "updateLotteryPlayed",
        "updateLotteryPlayedAll"
      ]),
      //  修改
      readCheckFn () {
        let list = this.getActiveList()
        if(list.length == 0){
          Message({
            message:this.$L.t('lottery.zh194'),
            type:"warning",
            showClose:true
          })
          return;
        }
        if(!this.setInputValue){
          Message({
            message:this.$L.t('lottery.zh195'),
            type:"warning",
            showClose:true
          })
          return;
        }
        let me = this
        this.lotteryStore.lotteryPlayedFromgroupID.data.forEach(function (v,i,arr) {
          if(v.checked){
            v[me.selectValue] = me.setInputValue
          }
        })
      },
      saveCheckFn(){
        let list = this.getActiveList()
        if(list.length == 0){
          Message({
            message:this.$L.t('lottery.zh194'),
            type:"warning",
            showClose:true
          })
          return;
        }
        if(!this.setInputValue){
          Message({
            message:this.$L.t('lottery.zh195'),
            type:"warning",
            showClose:true
          })
          return;
        }
        var myarr = []
        this.lotteryStore.lotteryPlayedFromgroupID.data.forEach(function (v,i,arr) {
          if(v.checked){
            let obj = {}
            obj.playedid = v.id
            obj.multiple = v.multiple
            obj.minCharge = v.minCharge
            obj.maxCount = v.maxCount
            myarr.push(obj)
          }
        })
        var mydata = {};
        mydata.groupid = this.lotteryStore.groupThis
        mydata.playedDatas = myarr
        this.updateLotteryPlayedAll(mydata).then(()=>{
          this.getLotteryPlayedFromgroupID({groupID:this.lotteryStore.groupThis,groupName:this.lotteryStore.groupNameThis})
        })
      },
      getActiveList () {
        let data = this.lotteryStore.lotteryPlayedFromgroupID.data
        let list = []
        for (let k in data) {
          if (data[k].checked) {
            list.push(data[k])
          }
        }
        return list
      },
      allCheck (type) {
        let data = this.lotteryStore.lotteryPlayedFromgroupID.data
        for (let k in data) {
          if (type) {
            // 清楚选中
            data[k].checked = false
            this.allChecked = false
          } else {
            // console.log(this.allChecked)
            if (!this.allChecked) {
              data[k].checked = true
            } else {
              data[k].checked = false
            }
          }
        }
      },
      // 单选
      handelCheck (item) {
        let data = this.lotteryStore.lotteryPlayedFromgroupID.data
        item.checked = !item.checked
        let flag = data.every((res) => {
          return res.checked
        })
        if (flag) {
          this.allChecked = true
        } else {
          this.allChecked = false
        }
      },
      setPlay(item){
        this.setPlayMessage.id = item.id
        this.setPlayMessage.maxCount = item.maxCount
        this.setPlayMessage.minCharge = item.minCharge
        this.setPlayMessage.multiple = item.multiple
        this.setPlayMessage.enable = item.enable
        this.editInfoVisible = true
      },
      saveLotteryPlay(){
        this.updateLotteryPlayed(this.setPlayMessage).then((res)=>{
          this.getLotteryPlayedFromgroupID({groupID:this.lotteryStore.groupThis,groupName:this.lotteryStore.groupNameThis})
          this.editInfoVisible = false
        })
      },
      // 彩种分类切换  获取彩种
      lotTypeChange (item,index) {
        this.lotteryClassID = index
        this.lotteryId=0
        this.groupTypeId=0
        this.thislotteryId = item.id
        this.getLotteryTypeFromClassID({classID:item.id,apiType:1,lotteryType:this.lotteryType})
      },
      // 彩种切换  获取彩种玩法
      lotteryChange(item,index){
        this.lotteryId = index
        this.groupTypeId=0
        this.getLotteryGroupFromgroupType({groupType:item.groupType})
      },
      groupTypeChange(item,index){
        this.groupTypeId = index
//        this.setGroupThis(item.id)
//        this.setGroupNameThis(item.groupName)
        this.getLotteryPlayedFromgroupID({groupID:item.id,groupName:item.groupName})
      }
    },
    computed: {
      ...mapState([
        "lotteryStore",
      ]),
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
        // flex: 1;
        margin-right: 50px;
        textarea{
          width: 100%;
          min-height: 60px;
          padding-left: 10px;
        }
      }
    }
  }
</style>
