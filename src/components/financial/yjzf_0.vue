<template>
  <div class="container">
    <table class="table">
      <tbody>
        <tr class="nav">
          <td colspan="13">
            {{$L.t('financial.zh78')}}:
            <input type="button" :value="$L.t('today')" @click="selectDay(0)">
            <input type="button" :value="$L.t('yesterday')" @click="selectDay(1)">
            <input type="button" :value="$L.t('thisWeek')" @click="selectDay(6)">
            <input type="button" :value="$L.t('lastWeek')" @click="selectDay(14)">
            <input type="button" :value="$L.t('thisMonth')" @click="selectDay(30)">
            <input type="button" :value="$L.t('lastMonth')" @click="selectDay(60)">
          </td>
        </tr>
        <tr>
          <td colspan="13">
            <div class="header_timer">
              <timer @sendTime="getTimer" :day="days"></timer>
              <div class="submitSeach" @click="seachCondition()">
                <input type="submit" :value="$L.t('submit')">
              </div>
              <!--<div class="submitSeach" style="margin-left: 40px;">-->
                <!--<input type="submit" value="额度转换" @click="limitVisible = true">-->
              <!--</div>-->
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="13" class="color-red">
            * {{$L.t('financial.zh10')}}
          </td>
        </tr>
        <tr class="head">
          <td>{{$L.t('financial.zh79')}}</td>
          <td>{{$L.t('electronicGame.zh13')}}</td>
          <td>{{$L.t('electronicGame.zh11')}}</td>
          <td>{{$L.t('electronicGame.zh12')}}</td>
          <td>{{$L.t('financial.zh80')}}</td>
          <!-- <td>可用额度</td> -->
          <td>{{$L.t('agent.agent_8.zh92')}}</td>
          <td>{{$L.t('financial.zh81')}}</td>
          <td>{{$L.t('member.info85')}}</td>
          <td>{{$L.t('financial.zh82')}}</td>
          <td>{{$L.t('agent.agent_8.zh55')}}</td>
          <td>{{$L.t('financial.zh83')}}</td>
          <td>{{$L.t('financial.zh84')}}</td>
          <td>{{$L.t('financial.zh85')}}</td>
        </tr>
        <tr class="odd" v-for="(item, index) in financialStore.gameAgencyList.data">
          <td>{{item.sore}}</td>
          <td>
            <img :src="item.icon" width="120" height="40">
          </td>
          <td>{{item.title}}</td>
          <td>
            {{item.name}}
          </td>
          <td>
            {{item.state == 0 ? $L.t('annoucement.xttz_5.zh4') : item.state == 1 ? $L.t('annoucement.xttz_5.zh5') : $L.t('bonusGame.NiuNiuBetManage.zh43')}}
          </td>
          <!-- <td>
            {{item.cellScore}}
          </td> -->
          <td>
            {{item.userCount || 0}}
          </td>
          <td>
            {{item.bets || 0}}
          </td>
          <td>
            {{item.cellScore || 0}}
          </td>
          <td>
            {{item.profit || 0}}
          </td>
          <td>
            {{item.revenue || 0}}
          </td>
          <td class="color-red">
            {{item.enable == 1 ?  $L.t('annoucement.xttz_5.zh5') : $L.t('close')}}
          </td>
          <td class="color-red">
            {{item.is_ban == 1 ? $L.t('financial.zh86') : $L.t('bonusGame.NiuNiuBetManage.zh42')}}
          </td>
          <td>
            <button v-if="item.enable == 0" @click="changeState(item, 1)">{{$L.t('annoucement.xttz_5.zh5')}}</button>
            <button v-else @click="changeState(item, 0)">{{$L.t('annoucement.xttz_5.zh4')}}</button>
            <button @click="goGameList(item)">{{$L.t('financial.zh87')}}</button>
            <button v-if="item.is_ban == 0" @click="changeUserType(item)">{{$L.t('financial.zh88')}}</button>
            <button v-else @click="changeUserType(item)">{{$L.t('financial.zh89')}}</button>
            <button @click="gameSort(item)">{{ $L.t('bonusGame.NiuNiuBetManage.zh20')}}</button>
          </td>
        </tr>
        <tr v-if="!financialStore.gameAgencyList.data">
          <td colspan="13" style="text-align: center">{{$L.t('noData')}}</td>
        </tr>
      </tbody>
    </table>
    <!-- 第三方额度转换 -->
    <el-dialog :title="$L.t('financial.zh90')" :visible.sync="limitVisible" width="560px">
      <div v-if="limitVisible" class="form_container formGame_container">
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('financial.zh91')}}
            </div>
            <div class="formLi_content">
              <select v-model="limitParmas.fromAgencyId">
                <option value="">{{$L.t('financial.zh92')}}</option>
                <option v-for="(item, index) in financialStore.threeGameList.data" :key="index" :value="item.id">
                  {{item.name}}
                </option>
              </select>
            </div>
            <div class="formLi_hint">
              {{$L.t('financial.zh93')}}:
              <span class="color-red">
                {{getGamePrice(limitParmas.fromAgencyId)}}
              </span>
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('financial.zh94')}}
            </div>
            <div class="formLi_content">
              <select v-model="limitParmas.toAgencyId">
                <option value="">{{$L.t('financial.zh95')}}</option>
                <option v-for="(item, index) in financialStore.threeGameList.data" :key="index" :value="item.id">
                  {{item.name}}
                </option>
              </select>
            </div>
            <div class="formLi_hint">
              *
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('financial.zh96')}}
            </div>
            <div class="formLi_content">
              <input type="number" v-model="limitParmas.quota" :placeholder="$L.t('financial.zh97')" style="width: 200px;">
            </div>
            <div class="formLi_hint">
              {{$L.t('financial.zh98')}}:
              <span class="color-red">
                {{getGameNum}}
                <!-- {{getGamePrice(limitParmas.fromAgencyId)}} -->
              </span>
            </div>
          </li>
          <li>
            <button class="form_commit" @click="formCommit()">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>
    <el-dialog :title="$L.t('financial.zh99')" :visible.sync="backwaterVisible" width="820px">
      <div class="backwater-container" v-if="backwaterVisible">
        <table class="table">
          <tr class="backwater_nav">
            <td colspan="3">
              <button @click="addBanbet()">{{$L.t('financial.zh100')}}</button>
            </td>
          </tr>
          <tr class="head">
            <td>{{$L.t('table.username')}}</td>
            <td>{{$L.t('financial.zh101')}}</td>
            <td>{{$L.t('table.handle')}}</td>
          </tr>
          <tr class="odds" v-for="(item, index) in financialStore.banGetInfoList.data.data" :key="index">
            <td>{{item.username}}</td>
            <td>{{item.name}}</td>
            <td>
              <button @click="delecteBanbet(item)">{{$L.t('delete')}}</button>
            </td>
          </tr>
          <tr v-if="backPageData.sum == 0">
            <td colspan="3" style="text-align: center">{{$L.t('noData')}}</td>
          </tr>
          <tr v-if="backPageData.sum > 0">
            <td colspan="3">
              <page-limit class="padding_page" :pageData="backPageData" @handlePage="handleBackPage"></page-limit>
            </td>
          </tr>
        </table>
      </div>
    </el-dialog>
    <!-- 添加用户禁止转入 -->
    <el-dialog :title="$L.t('financial.zh102')" :visible.sync="banBetVisible" width="600px">
      <div v-if="banBetVisible" class="form_container banBet_container">
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('table.username')}}
            </div>
            <div class="formLi_content">
              <textarea v-model="banBetName" :placeholder="$L.t('agent.agent_1.import')"></textarea>
            </div>
            <div class="formLi_hint">
              {{$L.t('financial.zh103')}}
            </div>
          </li>
          <li>
            <button class="form_commit" @click="banBetCommit()">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>

    <!-- 添加用户禁止转入 -->
    <el-dialog :title="$L.t('bonusGame.NiuNiuBetManage.zh20')" :visible.sync="gameSortVisible" width="600px">
      <div v-if="gameSortVisible" class="form_container banBet_container">
        <div class="formBox_title">
          {{$L.t('financial.zh104')}}
        </div>
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('financial.zh79')}}
            </div>
            <div class="formLi_content">
              <input type="number" v-model="gameSortValue.sore" :placeholder="$L.t('financial.zh105')">
            </div>
            <div class="formLi_hint">
              {{$L.t('financial.zh107')}}
            </div>
          </li>
          <!--<li v-if="gameSortValue.a_id*1 >= 999">-->
            <!--<div class="formLi_title">-->
              <!--{{$L.t('electronicGame.zh12')}}-->
            <!--</div>-->
            <!--<div class="formLi_content">-->
              <!--<input type="text" v-model="gameSortValue.name" :placeholder="$L.t('financial.zh106')">-->
            <!--</div>-->
          <!--</li>-->
          <!--<li v-if="gameSortValue.a_id*1 >= 999">-->
            <!--<div class="formLi_title">-->
              <!--{{$L.t('financial.zh108')}}-->
            <!--</div>-->
            <!--<div class="formLi_content">-->
              <!--<input type="text" v-model="gameSortValue.title" :placeholder="$L.t('financial.zh106')">-->
            <!--</div>-->
          <!--</li>-->
          <!--<li v-if="gameSortValue.a_id*1 >= 999">-->
            <!--<div class="formLi_title">-->
              <!--{{$L.t('financial.zh109')}}-->
            <!--</div>-->
            <!--<div class="formLi_content">-->
              <!--<div class="formLi_img">-->
                <!--<el-upload-->
                  <!--id="el-upload1"-->
                  <!--class="avatar-uploader avatar-uploader_356x178-->
              <!--avatar-uploader_contain reception"-->
                  <!--action="https://jsonplaceholder.typicode.com/posts/"-->
                  <!--:show-file-list="false"-->
                  <!--:on-change='formImageChange'-->
                  <!--:auto-upload='false'-->
                  <!--accept="image/jpeg, image/png"-->
                  <!--:on-success="handleAvatarSuccess">-->
                  <!--<img v-if="imageUrl" :src="imageUrl" class="avatar">-->
                  <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
                <!--</el-upload>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
          <li>
            <button class="form_commit" @click="gameSortCommit()">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>

    <!-- 提示弹窗 -->
    <comfirm-model
      v-if="confirmVisible"
      :content="confirmContent"
      @closeModel="confirmVisible = false"
      @commitModel="commitModel">
    </comfirm-model>

  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import {languageId} from '@/common/common'
export default {
  data() {
    return {
      sendParmas: {
        formTime: '',
        toTime: '',
      },
      days: '',
      // 第三方转换
      limitVisible: false,
      limitParmas: {
        fromAgencyId: '',
        toAgencyId: '',
        quota: '',
      },
      // 以下为禁止转入列表
      backwaterVisible: false,
      backParmas: {
        agency_id: '',
        page: 1,
        limit: 20,
      },
      banBetName: '',
      banBetVisible: false,
      // 删除弹窗
      confirmVisible: false,
      confirmInfo: {},
      confirmContent: '',
      // 排序
      gameSortVisible: false,
      gameSortValue: {
        a_id: '',
        sore: '',
        name:'',
        title:'',
        icon:'',
        file:'',
      },
      //  上传图标
      imageUrl:'',
    }
  },
  created() {
    this.getGameAgencyList()
    this.getThreeGameList()
  },
  computed: {
    ...mapState([
      "financialStore",
    ]),
    // 返水列表分页参数
    backPageData() {
      return {
        page: this.backParmas.page,
        limit: this.backParmas.limit,
        sum: this.financialStore.banGetInfoList.data.count || 0
      }
    },
    getGameNum () {
      let value = this.limitParmas.quota
      let data = this.financialStore.threeGameList.data
      let selfVal = data.filter(res => res.id == this.limitParmas.fromAgencyId)
      let toVal = data.filter(res => res.id == this.limitParmas.toAgencyId)
      if (selfVal.length == 0 || toVal.length == 0) {
        return ''
      }
      // console.log(selfVal, toVal)
      let num = value*selfVal[0].current_proportion/toVal[0].current_proportion
      return Math.round(num * 100) / 100 || this.$L.t('financial.zh97')
    },
  },
  methods: {
    ...mapActions([
      'getGameAgencyList',
      'updateAgencyEnable',
      'getThreeGameList',
      'changeGamePrice',
      'getBanGetInfoList',
      'addBanUserAction',
      'delCancelBanUser',
      'updateGameUserTypes',
      'editGameSort',
    ]),

    // 上传图片
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    formImageChange (file, fileList) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.gameSortValue.file = file.raw
    },

    // 搜索
    seachCondition() {
      this.getGameAgencyList(this.sendParmas)
    },
    // 回调获取时间
    getTimer(start, end) {
      this.sendParmas.fromTime = start
      this.sendParmas.toTime = end
    },
    selectDay(time) {
      this.days = time
    },
    // 状态切换
    changeState(item, state) {
      this.updateAgencyEnable({
        id: item.a_id,
        enable: state,
      }).then(() => {
        this.getGameAgencyList(this.sendParmas)
      })
    },
    // 获取当前额度
    getGamePrice(id) {
      let list = this.financialStore.threeGameList.data.filter(res => res.id == id)
      // console.log(list)
      if (list.length > 0) {
        return list[0].effective
      }
      return 0
    },
    // 确定额度转换
    formCommit() {
      // console.log(this.limitParmas)
      if (this.limitParmas.fromAgencyId.toString() == '') {
        this.$message(this.$L.t('financial.zh92'))
        return false
      }
      if (this.limitParmas.toAgencyId.toString() == '') {
        this.$message(this.$L.t('financial.zh95'))
        return false
      }
      if (this.limitParmas.quota == '') {
        this.$message(this.$L.t('financial.zh110'))
        return false
      }
      if (this.limitParmas.quota < 0) {
        this.$message(this.$L.t('financial.zh111'))
        return false
      }
      this.changeGamePrice(this.limitParmas).then(() => {
        this.getThreeGameList()
        for (let k in this.limitParmas) {
          this.limitParmas[k] = ''
        }
      })
    },
    // 以下为禁止转入列表
    goGameList(item) {
      this.backwaterVisible = true
      this.backParmas.agency_id = item.a_id
      this.backParmas.page = 1
      this.backParmas.limit = 20
      this.getBanGetInfoList(this.backParmas)
    },
    // 列表分页
    handleBackPage(data) {
      this.backParmas.page = data.page
      this.backParmas.limit = data.limit
      this.getBanGetInfoList(this.backParmas)
    },
    // 添加
    addBanbet() {
      this.banBetVisible = true
      this.banBetName = ''
    },
    // 添加提交
    banBetCommit() {
      if (this.banBetName == '') {
        this.$message(this.$L.t('agent.agent_1.import'))
        return false
      }
      this.addBanUserAction({
        agency_id: this.backParmas.agency_id,
        usernames: this.banBetName
      }).then(() => {
        this.banBetVisible = false
        this.getBanGetInfoList(this.backParmas)
      })
    },
    // 删除
    delecteBanbet(item) {
      // console.log(item)
      this.confirmVisible = true
      this.confirmInfo = item
      this.confirmContent =this.$L.t('financial.zh112')+`${item.username}`+this.$L.t('financial.zh113')
    },
    // 删除确定弹窗
    commitModel () {
      this.delCancelBanUser({
        agency_id: this.backParmas.agency_id,
        uid: this.confirmInfo.uid
      }).then(res => {
        this.confirmVisible = false
        if (res) {
          this.getBanGetInfoList(this.backParmas)
        }
      })
    },
    // 设置排序弹窗
    gameSort (item) {
      this.gameSortValue.file = ''
      this.gameSortValue.a_id = item.a_id
      this.gameSortValue.sore = item.sore
      // console.log(item)
      this.gameSortVisible = true
      if(item.a_id*1 >= 999) {
        this.gameSortValue.name = item.name
        this.gameSortValue.title = item.title
        this.gameSortValue.icon = item.icon
        this.imageUrl = item.icon
      }else{
        this.gameSortValue.name = ''
        this.gameSortValue.title = ''
        this.gameSortValue.icon = ''
        this.imageUrl = ''
      }
    },
    //提交排序
    gameSortCommit () {

      console.log(this.gameSortValue)
      if (this.gameSortValue.sore.toString() == '') {
        this.$message(this.$L.t('financial.zh105'))
        return false
      }
      if(this.gameSortValue.a_id >= 999 && !this.gameSortValue.icon && !this.gameSortValue.file){
        this.$message(this.$L.t('financial.zh114'))
        return false
      }

      var d = new FormData()
      let code = languageId(localStorage.getItem('languageId') || 'en')
      d.append('language',code)
      for(let k in this.gameSortValue){
        if(k != 'file'){
          d.append(k,this.gameSortValue[k])
        }
      }
      if(typeof(this.gameSortValue.file) == 'object'){
        d.append('file', this.gameSortValue.file)
      }
      this.editGameSort(d).then(() => {
        this.gameSortVisible = false
        this.getGameAgencyList(this.backParmas)
      })


    },
    // 测试号转入第三方状态 切换
    changeUserType (item) {
      this.updateGameUserTypes({agency_id: item.a_id}).then(() => {
        this.getGameAgencyList(this.sendParmas)
      })
    },
  },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
* {
  box-sizing: border-box;
}

.header_timer {
  display: flex;
  align-items: center;
  padding: 5px 0;
}

.formGame_container ul>li>div.formLi_content {
  width: 200px;
  margin-right: 50px;
}

.banBet_container ul>li>div.formLi_content>textarea {
  width: 300px;
  height: 100px;
  padding: 5px;
  max-width: 300px;
}

.submitSeach {
  input {
    cursor: pointer;
  }
}

.backwater-container {
  height: 600px;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 10px;

  .table {
    margin-top: 0;
  }

  .backwater_nav {
    background: #F2F2F2;

    button {
      margin: 2px 5px;
      padding: 2px 5px;
    }
  }
}
.formLi_img{
  /* margin: auto; */
  border:1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box;
  width: 200px;
  height: 100px;
  cursor: pointer;
  line-height: 100px;
  vertical-align: top;
  margin-left: 10px;
}
</style>
