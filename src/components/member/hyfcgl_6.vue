<template>
  <div class="container">
    <table class="table clearfloat">
      <tbody>
      <tr class="nav level_nav">
        <td>
          {{$L.t('member.info9')}}:&nbsp;&nbsp;&nbsp;
          <select name="" id="" class="head_select" v-model="levelType">
            <option value="bet">{{$L.t('member.info10')}}</option>
            <option value="recharge">{{$L.t('member.info11')}}</option>
          </select>
          <button class="key_set" @click="setLevelSum">{{$L.t('member.info12')}}</button>
        </td>
      </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
        <tr class="head">
          <td>{{$L.t('chatRoom.zh56')}}</td>
          <td>{{$L.t('member.info13')}}</td>
          <td>{{$L.t('member.info14')}}</td>
          <td>{{$L.t('member.info15')}}</td>
          <td>{{$L.t('member.info16')}}</td>
          <td>{{$L.t('member.info17')}}(%)</td>
          <!-- <td>可借金额/元</td> -->
          <td>{{$L.t('fixed')}}</td>
        </tr>
        <tr class="odd" v-for="i in memberStore.levelAdminList.data.data">
          <td>{{i.level}}</td>
          <td>{{i.levelName}}</td>
          <td>{{i.minScore}}</td>
          <td>{{i.maxBets}}</td>
          <td class="operation">
            {{i.maxToCashCount}}
          </td>
          <td class="operation">
            {{i.fee}}
          </td>
          <!-- <td>
            {{i.borrowMoney}}
          </td> -->
          <td>
            <button @click="setDanLevel(i)">{{$L.t('fixed')}}</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 等级设置 -->
    <el-dialog
    :title="$L.t('member.info18')"
    :visible.sync="setLevelState"
    width="700px">
    <div v-if="setLevelState" class="form_container">
      <ul>
        <li>
          <div class="formLi_title">{{$L.t('member.info13')}}</div>
          <div class="formLi_content">
            <input type="text" v-model="levelObj.levelName" :placeholder="$L.t('member.info19')">
          </div>
          <div class="formLi_hint">
            *
          </div>
        </li>
        <li>
          <div class="formLi_title">
            {{$L.t('chessGame.zh16')}}
          </div>
          <div class="formLi_content">
            <input type="text" v-model="levelObj.minScore" :placeholder="$L.t('member.info20')">
          </div>
          <div class="formLi_hint">
            *
          </div>
        </li>
        <li>
          <div class="formLi_title">
            {{$L.t('member.info21')}}
          </div>
          <div class="formLi_content">
            <input type="text" v-model="levelObj.maxBets"  :placeholder="$L.t('member.info22')">
          </div>
          <div class="formLi_hint">
            *
          </div>
        </li>
        <li>
          <div class="formLi_title">
            {{$L.t('member.info16')}}
          </div>
          <div class="formLi_content">
            <input type="text" v-model="levelObj.maxToCashCount" :placeholder="$L.t('member.info23')">
          </div>
          <div class="formLi_hint">
            *
          </div>
        </li>
        <li>
          <div class="formLi_title">
            {{$L.t('member.info17')}}(%)
          </div>
          <div class="formLi_content">
            <input type="text" v-model="levelObj.fee" :placeholder="$L.t('member.info24')">
          </div>
          <div class="formLi_hint">
            *
          </div>
        </li>
        <!-- <li>
          <div class="formLi_title">
              可借金额/元
          </div>
          <div class="formLi_content">
            <input type="number" v-model="levelObj.borrowMoney" placeholder="请输入可借金额">
          </div>
          <div class="formLi_hint">
            *
          </div>
        </li> -->
        <li>
          <button class="form_commit" @click="saveLevelset">{{$L.t('submit')}}</button>
        </li>
      </ul>
    </div>
  </el-dialog>
  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  export default {
    data () {
      return {
        levelType:'no',
        setLevelState:false,
        levelObj:{
          id:'',
          levelName:'',
          maxBets:'',
          maxToCashCount:"",
          fee:'',
          minScore:'',
          // borrowMoney:'',
        }
      }
    },
    created (){
      this.getLevel().then((res)=>{
        if(res.code == 0){
          this.levelType = res.data.userLevelFrom
        }
      })
    },
    mounted(){

    },
    methods: {
      ...mapMutations([

      ]),

      ...mapActions([
        "getLevel",
        "setMemberLevel",
        "setLevelAll"
      ]),
      setLevelSum(){
        this.setMemberLevel({userLevelFrom:this.levelType})
      },
      setDanLevel(it){
        this.levelObj.id = it.id
        this.levelObj.levelName = it.levelName
        this.levelObj.minScore = it.minScore
        this.levelObj.maxBets = it.maxBets
        this.levelObj.maxToCashCount = it.maxToCashCount
        this.levelObj.fee = it.fee
        // this.levelObj.borrowMoney = it.borrowMoney
        this.setLevelState = true
      },
      saveLevelset(){
        this.setLevelAll(this.levelObj).then((res)=>{
          if(res.code == 0){
            this.setLevelState = false
          }

        });
      }
    },
    components:{

    },
    computed: {
      ...mapState([
        "indexStore",
        "memberStore"
      ]),
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  *{
    box-sizing: border-box;
  }
  .set_level_modal {
    padding: 10px;
    height: 600px;
  }
  .set_level_modal >div {
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    margin-top: 10px;
  }
  .set_level_modal >div input,select {
    padding: 0 5px;
    height: 28px;
  }
  .set_level_modal >div span {
    display: inline-block;
    width: 170px;
  }
  .set_level_modal >div button {
    margin-left: 170px;
  }

  //
  .level_nav{
    padding: 0;
    td{
      margin: 2px 0;
      padding: 0 4px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      height: 29px;
      select,button{
        height: 21px;
        line-height: 20px;
        font-size: 12px;
        padding:0;
        margin: 0;
        box-sizing: border-box;
      }
      button{
        margin-left: 10px;
      }
    }
  }
</style>
