<template>
  <div class="container">
    <table class="table">
      <tbody>
        <tr class="nav">
          <td colspan="10">
            {{$L.t('lottery.zh123')}}
          </td>
        </tr>
        <tr class="head">
          <td>ID</td>
          <td>{{$L.t('lottery.zh77')}}</td>
          <td>{{$L.t('agent.agent_8.zh58')}}</td>
          <td>{{$L.t('lottery.zh91')}}</td>
          <td>{{$L.t('table.status')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr class="odd" v-for="item in lotteryStore.lotteryClassList.data">
          <td>{{item.id}}</td>
          <td>
            {{item.hideName}}
          </td>
          <td>
            <!-- <input type="text" v-model="item.name"> -->
            {{item.name}}
          </td>
          <td>
            {{item.sort}}
            <!-- <input type="number" v-model="item.sort"> -->
          </td>
          <td>
            <span :class="item.state == 1 ? 'color-blue_c' : 'color-red'">
              {{item.state == 1 ? $L.t('lottery.zh124'): $L.t('lottery.zh125')}}
            </span>
          </td>
          <td class="handle_btn">
            <button @click="handleEdit(item)">{{$L.t('financial.zh104')}}</button>
            <button v-if="item.state == 0" @click="stateChange(item, 1)">{{$L.t('lottery.zh126')}}</button>
            <button v-if="item.state == 1" @click="stateChange(item, 0)">{{$L.t('annoucement.xttz_5.zh4')}}</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 彩种分类修改 -->
    <el-dialog
      :title="$L.t('lottery.zh127')"
      :visible.sync="classVisible"
      width="600px">
      <div v-if="classVisible" class="form_container">
        <div class="formBox_title">{{hanleInfo.hideName}}</div>
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('agent.agent_8.zh58')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="hanleInfo.name">
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh99')}}
            </div>
            <div class="formLi_content">
              <select v-model="hanleInfo.state">
                <option value="1">{{$L.t('open')}}</option>
                <option value="0">{{$L.t('close')}}</option>
              </select>
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh128')}}
            </div>
            <div class="formLi_content">
              <input type="number" v-model="hanleInfo.sort">
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
  export default {
    data () {
      return {
        hanleInfo: {},
        classVisible: false,
      }
    },
    created (){
      this.getLotteryClassList()
    },
    mounted(){

    },
    methods: {
      ...mapMutations([
      ]),
      ...mapActions([
        'getLotteryClassList',
        'updateLotteryClassInfo',
      ]),
      handleEdit (item) {
        this.hanleInfo = item
        this.classVisible = true
      },
      // 保存设置
      formCommit () {
        console.log(this.hanleInfo)
        let data = {
          id: '',
          name: '',
          state: '',
          sort: ''
        }
        let flag = false
        for (let k in data) {
          if (this.hanleInfo[k].toString() == '') {
            flag = true
            break
          }
          data[k] = this.hanleInfo[k]
        }
        if (flag) {
          this.$message(this.$L.t('lottery.zh104'))
          return false
        }
        this.updateLotteryClassInfo(data).then(() => {
          this.classVisible = false
        })
      },
      // 状态切换
      stateChange (item, state) {
        this.updateLotteryClassInfo({
          id: item.id,
          state
        })
      },
    },
    computed: {
      ...mapState([
        "lotteryStore",
      ]),
    },
  }
</script>
<style lang="less" scoped>
.handle_btn{
  button{
    margin-right: 10px;
  }
}
</style>
