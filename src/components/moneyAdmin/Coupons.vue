<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
        <tr class="nav">
          <td>
            {{$L.t('moneyAdmin.Coupons.info1')}}:
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
                <div class="submitSeach">
                  <button class="header_btn" @click="addCoupons()">{{$L.t('moneyAdmin.Coupons.info2')}}</button>
                </div>
               <!--  <div class="submitSeach">
                  时间:
                </div> -->
                <timer class="submitSeach" @sendTime="getTimer" :day="days"></timer>
                <!-- <div class="submitSeach">
                  测试号限制:
                  <select v-model="sendParmas.userTypes">
                    <option value="0">过滤测试号</option>
                    <option value="1">不过滤测试号</option>
                  </select>
                </div>
                <div class="submitSeach">
                  会员名:
                </div>
                <div class="submitSeach">
                  <input type="text" v-model="sendParmas.username">
                </div> -->
                <div class="submitSeach">
                  <input type="submit" :value="$L.t('submit')" @click="seachCondition()">
                </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
        <tr class="head">
          <td>{{$L.t('moneyAdmin.Coupons.info3')}}</td>
          <td>{{$L.t('chatRoom.zh69')}}</td>
          <td>{{$L.t('moneyAdmin.Coupons.info4')}}</td>
          <td>{{$L.t('annoucement.tcgg_1.addTime')}}</td>
          <td>{{$L.t('financial.zh58')}}</td>
          <!-- <td>导出状态</td> -->
        </tr>
        <tr v-for="(item, index) in moneyStore.couponsListData.data.data" :key="index">
          <td>{{item.title}}</td>
          <td>{{item.coin}}</td>
          <td>{{item.codes}}</td>
          <td>{{item.addTime}}</td>
          <td>{{item.expTime}}</td>
          <!-- <td>{{item.download_status == 1 ? '已导出' : '未导出'}}</td> -->
        </tr>
        <tr v-if="getPageData.sum == 0">
          <td colspan="7" style="text-align: center">
            {{$L.t('noData')}}
          </td>
        </tr>
        <tr v-if="getPageData.sum > 0">
          <td colspan="7">
            <page-limit class="padding_page" :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 添加充值卷 -->
    <el-dialog
      :title="$L.t('moneyAdmin.Coupons.info2')"
      :visible.sync="couponsVisible"
      width="600px">
      <div v-if="couponsVisible" class="form_container">
        <div class="formBox_title">{{$L.t('moneyAdmin.Coupons.info11')}}</div>
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('moneyAdmin.Coupons.info5')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="formData.title">
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('moneyAdmin.Coupons.info6')}}
            </div>
            <div class="formLi_content">
              <input type="number" v-model="formData.coin">
            </div>
            <div class="formLi_hint">
              {{$L.t('moneyAdmin.Coupons.info7')}}
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('moneyAdmin.Coupons.info8')}}
            </div>
            <div class="formLi_content">
              <input type="number" v-model="formData.number">
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('moneyAdmin.Coupons.info9')}}
            </div>
            <div class="formLi_content">
              <!-- <input type="date" v-model="formData.expTime"> -->
              <el-date-picker
                class="data_input"
                v-model="formData.expTime"
                type="date"
                :placeholder="$L.t('lottery.zh170')">
              </el-date-picker>
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
  import {getDate,setDate,copyobj,setSession,getSession,getchar,randomRange} from '@/common/common'
  import {Message} from 'element-ui'
  export default {
    data () {
      return {
        sendParmas:{
          page: 1,
          limit: 20,
          fromTime:'',
          toTime:''
        },
        days:'',
        // 添加充值卷
        couponsVisible: false,
        formData: {
          title: '',
          coin: '',
          number: '',
          expTime: '',
        },
      }
    },
    created (){
      this.getCouponsListData(this.sendParmas)
    },
    methods: {
      ...mapActions([
        'getCouponsListData',
        'addCouponsAction',
      ]),
      timeTool(d){
        var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        return datetime;
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
        this.getCouponsListData(this.sendParmas)
      },
      // 分页
      handlePage (data) {
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit
        this.getCouponsListData(this.sendParmas)
      },
      // 添加充值卷
      addCoupons () {
        this.couponsVisible = true
        for (let k in this.formData) {
          this.formData[k] = ''
        }
      },
      // 提交
      formCommit () {
        if(!this.formData.expTime){
          Message({
            message:this.$L.t('moneyAdmin.Coupons.info10'),
            type:"warning",
            showClose:true
          })
          return
        }
        this.formData.expTime = this.timeTool(new Date(this.formData.expTime))
        this.addCouponsAction(this.formData).then(() => {
          this.couponsVisible = false
          this.getCouponsListData(this.sendParmas)
        })
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
          sum: this.moneyStore.couponsListData.data.Count || 0
        }
      },
    }
  }
</script>
<style lang="less" scoped>
*{
  box-sizing: border-box;
}
.header_btn{
  font-size: 13px;
  padding: 0 5px;
  margin-right: 20px;
}
</style>
