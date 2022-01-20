<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
        <tr class="nav">
          <td>
            {{$L.t('moneyAdmin.Owed.info1')}}:
            <input type="button" :value="$L.t('today')" @click="selectDay(0)">
            <input type="button" :value="$L.t('yesterday')" @click="selectDay(1)">
            <input type="button" :value="$L.t('thisWeek')" @click="selectDay(6)">
            <input type="button" :value="$L.t('lastWeek')" @click="selectDay(14)">
            <input type="button" :value="$L.t('thisMonth')" @click="selectDay(30)">
            <input type="button" :value="$L.t('lastMonth')" @click="selectDay(60)">
          </td>
        </tr>
        <tr>
          <td>
            <div class="timeShow">
                <timer class="submitSeach" @sendTime="getTimer" :day="days"></timer>
                <div class="submitSeach">
                  {{$L.t('bonusGame.MoneyQuery.zh2')}}:
                  <select v-model="sendParmas.userTypes">
                    <option value="0">{{$L.t('bonusGame.MoneyQuery.zh3')}}</option>
                    <option value="1">{{$L.t('bonusGame.MoneyQuery.zh4')}}</option>
                  </select>
                </div>
                <div class="submitSeach">
                  {{$L.t('table.username')}}:
                </div>
                <div class="submitSeach">
                    <input type="text" v-model="sendParmas.username">
                </div>
                <div class="submitSeach">
                  <input type="submit" :value="$L.t('submit')" @click="seachCondition()">
                </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="table"  >
      <tbody>
      <tr>
        <td>
          <button class="popBtn" @click="jfClick()">{{$L.t('moneyAdmin.Owed.info2')}}</button>
          <font color="red">{{$L.t('moneyAdmin.Amount.info5')}}</font>
        </td>
      </tr>
      </tbody>
    </table>

    <table class="table">
      <tbody>
        <tr class="head">
          <td>{{$L.t('table.username')}}</td>
          <td>{{$L.t('moneyAdmin.Owed.info3')}}</td>
          <td>{{$L.t('moneyAdmin.Owed.info4')}}</td>
          <td>{{$L.t('table.remark')}}</td>
        </tr>
        <tr v-for="(item, index) in moneyStore.scoreListData.data.data" :key="index">
          <td :class="{'color-red': item.usertype == 9}">{{item.username}}</td>
          <td>{{item.scoreTotal}}</td>
          <td>{{item.actionTime}}</td>
          <td>{{item.info}}</td>
        </tr>
        <tr v-if="getPageData.sum == 0">
          <td colspan="4" style="text-align: center">
            {{$L.t('noData')}}
          </td>
        </tr>
        <tr v-if="getPageData.sum > 0">
          <td colspan="4">
            <page-limit class="padding_page" :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 赠送积分 -->
    <el-dialog
            :title="$L.t('moneyAdmin.Owed.info2')"
            :visible.sync="jfVisible"
            width="700px">
      <div v-if="jfVisible" class="form_container">
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('agent.agent_8.zh28')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="formData.username" :placeholder="$L.t('moneyAdmin.Amount.info9')">
            </div>
            <div class="formLi_hint" style="padding-left: 10px; color: red;">
              *
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('chatRoom.zh83')}}
            </div>
            <div class="formLi_content">
              <input type="number" v-model="formData.amount" :placeholder="$L.t('moneyAdmin.Owed.info5')">
            </div>
            <div class="formLi_hint" style="padding-left: 10px; color: red;">
              *

            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('table.remark')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="formData.comment" :placeholder="$L.t('member.hylb_3.info19')">
            </div>
            <div class="formLi_hint" style="padding-left: 10px;">

            </div>
          </li>
          <li>
            <button class="form_commit" @click="formCommit()">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>

  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  import {Message } from 'element-ui';
  import {getDate,setDate,copyobj,setSession,getSession,getchar,randomRange} from '@/common/common'
  export default {
    data () {
      return {
        sendParmas:{
          page: 1,
          limit: 20,
          username: '',
          userTypes: 0,
          fromTime:'',
          toTime:''
        },
        days:'',
        // 表单对象
        formData: {
          username: '',
          amount: '',
          comment:''
        },
        jfVisible:false
      }
    },
    created (){
      this.getScoreListData(this.sendParmas)
    },
    methods: {
      ...mapActions([
        'getScoreListData',
        'ximaScoretotal'
      ]),
      //积分调整
      jfClick() {
        this.jfVisible = true
      },
      formCommit() {
        if(!this.formData.username || !this.formData.amount) {
          Message({
            message:this.$L.t('moneyAdmin.Owed.info6'),
            showClose:true
          })
          return;
        }
        this.ximaScoretotal(this.formData).then(res=>{
          this.formData.username = '';
          this.formData.amount = '';
          this.formData.comment = '';
          this.jfVisible = false;

          //更新列表
          this.getScoreListData(this.sendParmas)
        })
      },
      // 时间
      getTimer(start,end){
        this.sendParmas.fromTime = start
        this.sendParmas.toTime = end
      },
      // 快捷选时
      selectDay(d){
        this.days = d
      },
      // 搜索
      seachCondition(){
        this.sendParmas.page = 1
        this.getScoreListData(this.sendParmas)
      },
      // 分页
      handlePage (data) {
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit
        this.getScoreListData(this.sendParmas)
      },
    },
    computed: {
      ...mapState([
        "moneyStore",
      ]),
      // 列表分页data
      getPageData () {
        return {
          page: this.sendParmas.page,
          limit: this.sendParmas.limit,
          sum: this.moneyStore.scoreListData.data.Count || 0
        }
      },
    }
  }
</script>
<style lang="css" scoped>
</style>
