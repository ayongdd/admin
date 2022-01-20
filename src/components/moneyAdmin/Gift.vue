<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
        <tr class="nav">
          <td>
            {{$L.t('moneyAdmin.Gift.info1')}}:
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
                    {{$L.t('agent.agent_8.zh28')}}:<input type="text" v-model="sendParmas.username">
                  </div>
                  <div class="submitSeach" @click="seachCondition()">
                      <input type="submit" :value="$L.t('submit')">
                  </div>
              </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table">
        <tbody>
          <tr>
            <td>
              <button class="popBtn" @click="modelShow('zscjVisible')">{{$L.t('moneyAdmin.Amount.info4')}}</button>
              <button class="popBtn" @click="modelShow('plzsVisible')">{{$L.t('moneyAdmin.Gift.info2')}}</button>
              <button class="popBtn" @click="modelShow('typeVisible')">{{$L.t('moneyAdmin.Gift.info3')}}</button>
              <font color="red">{{$L.t('moneyAdmin.Gift.info11')}}</font>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table">
        <tbody>
          <tr class="head">
            <td>{{$L.t('financial.zh31')}}</td>
            <td>{{$L.t('agent.agent_0.huiy')}}</td>
            <td>{{$L.t('chatRoom.zh69')}}</td>
            <td>{{$L.t('table.type')}}</td>
            <td>{{$L.t('table.remark')}}</td>
            <td>{{$L.t('table.time')}}</td>
            <td>{{$L.t('moneyAdmin.Amount.info6')}}</td>
          </tr>
          <tr v-for="(item, index) in moneyStore.systemPresenter.data.data" :key="index">
            <td>{{item.rechargeId}}</td>
            <td :class="{'color-red': item.usertype == 9}">{{item.username}}</td>
            <td>{{item.amount}}</td>
            <td>{{item.type}}</td>
            <td>{{item.info}}</td>
            <td>{{item.rechargeTime}}</td>
            <td>{{item.actionUid}}</td>
          </tr>
          <tr v-if="getPageData.sum == 0">
            <td colspan="18" style="text-align: center">
              {{$L.t('noData')}}
            </td>
          </tr>
          <tr v-if="getPageData.sum > 0">
            <td colspan="18">
              <page-limit class="padding_page" :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
            </td>
          </tr>
        </tbody>
    </table>

    <!-- 独立赠送彩金 -->
    <el-dialog
      :title="$L.t('moneyAdmin.Gift.info4')"
      :visible.sync="zscjVisible"
      width="700px">
      <div v-if="zscjVisible" class="form_container">
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('agent.agent_8.zh28')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="formData.username" :placeholder="$L.t('moneyAdmin.Amount.info9')">
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('chatRoom.zh69')}}
            </div>
            <div class="formLi_content">
              <input type="number" v-model="formData.amount" :placeholder="$L.t('member.hylb_3.info30')">
            </div>
            <div class="formLi_hint">
              * ({{$L.t('member.info136')}})
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('member.info66')}}
            </div>
            <div class="formLi_content">
              <select v-model="formData.xima">
                <option value="0">{{$L.t('member.info137')}}</option>
                <option v-for="i in 50" :value="i">{{i}}</option>
              </select>
            </div>
            <div class="formLi_hint">
              {{$L.t('member.hylb_3.info28')}}
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('table.remark')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="formData.comment" :placeholder="$L.t('member.hylb_3.info29')">
            </div>
            <div class="formLi_hint">
              *
            </div>
          </li>
          <li>
            <button class="form_commit" @click="formCommit('zscjVisible')">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>

    <!-- 批量赠送彩金 -->
    <el-dialog
      :title="$L.t('moneyAdmin.Gift.info2')"
      :visible.sync="plzsVisible"
      width="700px">
      <div v-if="plzsVisible" class="form_container">
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('agent.agent_8.zh28')}}
            </div>
            <div class="formLi_content">
              <textarea type="text" v-model="formData.username" :placeholder="$L.t('moneyAdmin.Amount.info9')">

              </textarea>
              <!-- <input type="text" v-model="formData.username" placeholder="请输入会员名(*必填)"> -->
            </div>
            <div class="formLi_hint color-red">
              * {{$L.t('moneyAdmin.Gift.info5')}}(,)
              <br/>
              {{$L.t('moneyAdmin.Gift.info6')}}
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('chatRoom.zh69')}}
            </div>
            <div class="formLi_content">
              <input type="number" v-model="formData.amount" :placeholder="$L.t('member.hylb_3.info30')">
            </div>
            <div class="formLi_hint">
              * ({{$L.t('member.info136')}})
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('member.info66')}}
            </div>
            <div class="formLi_content">
              <select v-model="formData.xima">
                <option value="0">{{$L.t('member.info137')}}</option>
                <option v-for="i in 50" :value="i">{{i}}</option>
              </select>
            </div>
            <div class="formLi_hint">
              {{$L.t('member.hylb_3.info28')}}
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('table.remark')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="formData.comment" :placeholder="$L.t('member.hylb_3.info29')">
            </div>
            <div class="formLi_hint">
              *
            </div>
          </li>
          <li>
            <button class="form_commit" @click="formCommit('plzsVisible')">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>

    <!-- 按条件赠送彩金 -->
    <el-dialog
      :title="$L.t('moneyAdmin.Gift.info3')"
      :visible.sync="typeVisible"
      width="800px">
      <div v-if="typeVisible" class="form_container">
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('moneyAdmin.Gift.info7')}}
            </div>
            <div class="formLi_content">
              <select v-model="formData.level">
                <option value="">{{$L.t('member.info92')}}</option>
                <option
                  v-for="(item, index) in memberStore.levelAdminList.data.data"
                  :value="item.id">{{item.levelName}}</option>
              </select>
            </div>
            <div class="formLi_hint">
              {{$L.t('moneyAdmin.Gift.info8')}}
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('table.registerTime')}}
            </div>
            <div class="formLi_content" :style="$language() ? {width:'460px','marginLeft':'20px'}:''">
              <timer class="submitSeach" @sendTime="getModelTimer" :day="days"></timer>
            </div>
            <div class="formLi_hint">
              {{$L.t('moneyAdmin.Gift.info9')}}
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('chatRoom.zh69')}}
            </div>
            <div class="formLi_content">
              <input type="number" v-model="formData.amount" :placeholder="$L.t('member.hylb_3.info30')">
            </div>
            <div class="formLi_hint">
              * ({{$L.t('member.info136')}})
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('member.info66')}}
            </div>
            <div class="formLi_content">
              <select v-model="formData.xima">
                <option value="0">{{$L.t('member.info137')}}</option>
                <option v-for="i in 50" :value="i">{{i}}</option>
              </select>
            </div>
            <div class="formLi_hint">
              {{$L.t('member.hylb_3.info28')}}
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('table.remark')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="formData.comment" :placeholder="$L.t('member.hylb_3.info29')">
            </div>
            <div class="formLi_hint">
              *
            </div>
          </li>
          <li>
            <button class="form_commit" @click="formCommit('typeVisible')">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>

  </div>
 </template>
  <script>
    import {mapState, mapMutations, mapActions} from 'vuex';
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
          // 赠送彩种
          zscjVisible: false,
          plzsVisible: false,
          typeVisible: false,
          // 参数
          formData: {
            username: '',
            level: '',
            amount: '',
            xima: 0,
            comment: '',
            fromTime: '',
            toTime: '',
          },
        }
      },
      created (){
        this.getSystemPresenter(this.sendParmas)
        // 获取等级
        this.getLevel()
      },
      methods: {
        ...mapMutations([
        ]),
        ...mapActions([
          'getSystemPresenter',
          'batchCaijinAction',
          'getLevel',
        ]),
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
         // this.sendParmas.limit = 20
         this.getSystemPresenter(this.sendParmas)
        },
        // 分页回调
        handlePage (data) {
          this.sendParmas.page = data.page
          this.sendParmas.limit = data.limit
          this.getSystemPresenter(this.sendParmas)
        },
        // 赠送彩金弹窗
        modelShow (key) {
          // 初始化表单值
          for (let k in this.formData) {
            if (k == 'xima') {
              this.formData[k] = 0
            } else {
              this.formData[k] = ''
            }
          }
          this[key] = true
        },
        // 时间
        getModelTimer(start,end){
          this.formData.fromTime = start
          this.formData.toTime = end
        },
        // 赠送彩金提交
        formCommit (type) {
          if (type == 'zscjVisible' || type == 'plzsVisible') {
            if (!this.formData.username) {
              this.$message(this.$L.t('moneyAdmin.Amount.info17'))
              return false
            }
            if (!this.formData.amount) {
              this.$message(this.$L.t('moneyAdmin.Gift.info12'))
              return false
            }
            if (!this.formData.comment) {
              this.$message(this.$L.t('member.hylb_3.info19'))
              return false
            }
          }
          // 独立赠送彩金
          if (type == 'zscjVisible') {
            this.batchCaijinAction({
              username: this.formData.username,
              amount: this.formData.amount,
              xima: this.formData.xima,
              comment: this.formData.comment
            }).then(() => {
              this.zscjVisible = false
              this.getSystemPresenter(this.sendParmas)
            })
          }
          // 批量
          if (type == 'plzsVisible') {
            this.batchCaijinAction({
              username: this.formData.username,
              amount: this.formData.amount,
              xima: this.formData.xima,
              comment: this.formData.comment
            }).then(() => {
              this.plzsVisible = false
              this.getSystemPresenter(this.sendParmas)
            })
          }
          // 条件
          if (type == 'typeVisible') {
            if (this.formData.level.toString() == '') {
              this.$message(this.$L.t('moneyAdmin.Gift.info10'))
              return false
            }
            if (!this.formData.fromTime || !this.formData.toTime) {
              this.formData.fromTime = this.timeTool(new Date()) + ' 00:00:00'
              this.formData.toTime = this.timeTool(new Date()) + ' 23:59:59'
              // this.$message('请选择注册开始时间和介绍时间')
              // return false
            }
            if (!this.formData.amount) {
              this.$message(this.$L.t('moneyAdmin.Gift.info12'))
              return false
            }
            if (!this.formData.comment) {
              this.$message(this.$L.t('member.hylb_3.info19'))
              return false
            }
            this.batchCaijinAction(this.formData).then(() => {
              this.typeVisible = false
              this.getSystemPresenter(this.sendParmas)
            })
          }
        },
        timeTool(d){
          var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
            return datetime;
        },
      },
      computed: {
        ...mapState([
          'memberStore',
          "moneyStore",
        ]),
        // 列表分页data
        getPageData () {
          return {
            page: this.sendParmas.page,
            limit: this.sendParmas.limit,
            sum: this.moneyStore.systemPresenter.data.Count || 0
          }
        },
      }
    }
  </script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="less" scoped>
  *{
    box-sizing: border-box;
  }
  .form_container{
    ul{
      li{
        &>div.formLi_content{
          // min-width: 300px;
          // width: 400px;
          .submitSeach{
            margin-left: 0;
          }
        }
      }
    }
  }
  .formLi_content{
    textarea{
      width: 300px;
      height: 100px !important;
      padding: 5px;
      box-sizing: border-box;
      resize: none;
      overflow-x:visible;
      overflow-y:visible;
    }
  }
  </style>
