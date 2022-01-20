<template>
  <div class="container">
    <table class="table">
      <tbody>
        <tr class="nav">
          <td colspan="10">
            <span style="margin-right: 10px">{{$L.t('manager.info70')}}</span>
            <button class="header_btn" @click="addMoneyLimit">{{$L.t('manager.info71')}}</button>
          </td>
        </tr>
        <tr class="head">
          <td>{{$L.t('manager.info72')}}</td>
          <td>{{$L.t('manager.info73')}}</td>
          <td>{{$L.t('manager.info61')}}</td>
          <td>{{$L.t('manager.info62')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr class="odd" v-for="ml in managerStore.dataAdminAmountList.data.data">
          <td>
            {{ml.name}}
          </td>
          <td>
            {{ml.amount}}
          </td>
          <td :style="{color:ml.state*1 == 1 ? '#009900' : '#ff0000'}">
            {{ml.state*1 == 1 ? $L.t('annoucement.xttz_5.zh5') : $L.t('close')}}
          </td>
          <td>
            {{getTimes(ml.updateTime)}}
          </td>
          <td>
            <button @click="editLimit(ml)">{{$L.t('manager.info21')}}</button> &nbsp; <button @click="deleteLimit(ml)">{{$L.t('delete')}}</button>
          </td>
        </tr>
        <tr v-if="getPageData.sum > 0">
          <td colspan="10">
            <page-limit :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
          </td>
        </tr>
        <tr v-if="!managerStore.dataAdminAmountList.data.data">
          <td colspan="8" class="nodata">{{$L.t('noData')}}</td>
        </tr>
      </tbody>
    </table>
    <el-dialog :title="moneyText" :visible.sync="updataState" width="500px">
      <div v-if="updataState" class="form_container">
        <div class="formBox_title">{{$L.t('manager.info74')}}</div>
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('manager.info72')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="MoneyObj.name">
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('manager.info75')}}
            </div>
            <div class="formLi_content">
              <input type="number" v-model="MoneyObj.amount">
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('table.status')}}
            </div>
            <div class="formLi_content">
              <el-radio v-model="MoneyObj.state" label="0">{{$L.t('close')}}</el-radio>
              <el-radio v-model="MoneyObj.state" label="1">{{$L.t('annoucement.xttz_5.zh5')}}</el-radio>
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh91')}}
            </div>
            <div class="formLi_content">
              <input type="number" v-model="MoneyObj.sort">
            </div>
          </li>
          <li>
            <button class="form_commit" @click="saveSetMoney">{{$L.t('lottery.zh23')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>
    <!-- 提示弹窗 -->
    <comfirm-model v-if="confirmVisible" :content="confirmContent" @closeModel="confirmVisible = false" @commitModel="commitModel">
    </comfirm-model>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import {getTimes} from '../../common/common'
import { MessageBox, Message } from 'element-ui'
export default {
  data() {
    return {
      sendParmas: {
        page: 1,
        limit: 20
      },
      updataState: false,
      isAdd: false,
      MoneyObj: {
        name: '',
        amount: '',
        state: '',
        sort: '',
      },
      getTimes,
      moneyText: '',
      // 弹窗限制
      confirmVisible: false,
      confirmContent: '',
      confirmInfo: {},
    }
  },
  created() {
    this.getAdminAmountList(this.sendParmas)
  },
  computed: {
    ...mapState([
      'managerStore'
    ]),
    // 在线会员分页
    getPageData() {
      return {
        page: this.sendParmas.page,
        limit: this.sendParmas.limit,
        sum: this.managerStore.dataAdminAmountList.data.count || 0
      }
    },
    MessageState() {
      if (!this.MoneyObj.name || !this.MoneyObj.amount || !this.MoneyObj.state || !this.MoneyObj.sort) {
        return false;
      }
      return true;
    }
  },
  methods: {
    ...mapMutations([

    ]),
    ...mapActions([
      "getAdminAmountList",
      "addAmount",
      "deleteAmount",
      "editAmount",
    ]),
    saveSetMoney() {
      if (!this.MessageState) {
        Message({
          message: this.$L.t('messageInfo.complement'),
          type: "warning",
          showClose: true
        })
        return;
      }
      if (this.isAdd) {
        this.addAmount(this.MoneyObj).then(() => {
          this.updataState = false
          // this.sendParmas.page = 1
          // this.sendParmas.limit = 20
          this.getAdminAmountList(this.sendParmas)
        })
      } else {
        this.editAmount(this.MoneyObj).then(() => {
          this.updataState = false
          // this.sendParmas.page = 1
          // this.sendParmas.limit = 20
          this.getAdminAmountList(this.sendParmas)
        })
      }

    },
    addMoneyLimit() {
      delete this.MoneyObj.id
      this.MoneyObj.name = ''
      this.MoneyObj.amount = ''
      this.MoneyObj.state = ''
      this.MoneyObj.sort = ''
      this.moneyText = this.$L.t('chatRoom.zh58')
      this.updataState = true
      this.isAdd = true
    },
    editLimit(item) {
      this.MoneyObj.id = item.id
      this.MoneyObj.name = item.name
      this.MoneyObj.amount = item.amount
      this.MoneyObj.state = item.state
      this.MoneyObj.sort = item.sort
      this.moneyText = this.$L.t('manager.info21')
      this.updataState = true
      this.isAdd = false
    },
    // 列表分页
    handlePage(data) {
      this.sendParmas.page = data.page
      this.sendParmas.limit = data.limit
    },
    getLocalTime(nS) {
      let sj = nS * 1000
      return new Date(parseInt(sj)).toLocaleString().replace(/:\d{1,2}$/, ' ');
    },
    deleteLimit(item) {
      this.confirmVisible = true
      this.confirmContent = this.$L.t('manager.info67')+`${item.name}`+this.$L.t('manager.info76')
      this.confirmInfo = item
    },
    // 确定删除
    commitModel() {
      this.deleteAmount({ id: this.confirmInfo.id }).then(() => {
        this.confirmVisible = false
        this.getAdminAmountList(this.sendParmas)
      })
    },
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header_btn {
  padding: 0px 5px;
  font-size: 12px;
  line-height: 18px;
}

.form_container {
  ul>li {
    &>div.formLi_content {
      flex: 1;
      margin-right: 50px;

      textarea {
        width: 100%;
        min-height: 60px;
        padding-left: 10px;
      }
    }
  }
}

</style>
