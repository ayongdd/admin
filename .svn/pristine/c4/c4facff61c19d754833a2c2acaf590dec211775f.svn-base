<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
        <tr class="nav">
          <td>
            <!-- {{electronicGame.agency.name}} -->
            {{$route.query.title}}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{$L.t('agent.agent_8.zh51')}}:
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
              <!--<li class="keyValue">游戏::<select name="searchKey" id="searchKey" v-model="sendParmas.game_id">-->
              <!--<option value="" >全部</option>-->
              <!--<option :value="key" v-for="(i,key,index) in electronicGame.gameListKey.data">{{i}}</option>-->
              <!--</select>-->
              <!--</li>-->
              <div class="keyValue">
                {{$L.t('table.username')}}::
                <input type="text" name="searchVal" id="searchVal" value="" v-model="sendParmas.username">
              </div>
              <div class="keyValue">
                {{$L.t('bonusGame.MoneyQuery.zh2')}}:
                <select v-model="sendParmas.isTest">
                  <option value="1">{{$L.t('bonusGame.MoneyQuery.zh3')}}</option>
                  <option value="0">{{$L.t('bonusGame.MoneyQuery.zh4')}}</option>
                </select>
              </div>
              <div class="submitSeach" @click="submitQuery()">
                <input type="submit" :value="$L.t('submit')">
              </div>
              <div class="submitSeach" style="margin-left: 30px;">
                <input type="submit" :value="$L.t('electronicGame.zh8')" @click="showBackwater()">
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
          <td>{{$L.t('bonusGame.MoneyQuery.zh9')}}</td>
          <td>{{$L.t('agent.agent_8.zh52')}}</td>
          <td>{{$L.t('agent.agent_8.zh53')}}</td>
          <!-- <td>id</td> -->
          <td>{{$L.t('agent.agent_8.zh54')}}</td>
          <td>{{$L.t('agent.agent_8.zh46')}}</td>
          <td>{{$L.t('common.fsbfb')}}</td>
          <td>{{$L.t('common.fsrq')}}</td>
        </tr>
        <tr v-for="(i,index) in electronicGame.waterList.data">
          <td class="lose" :class="{'color-red': i.usertype == 9}">{{i.username}}</td>
          <td>{{i.game_title}}</td>
          <td>{{i.bets}}</td>
          <td>{{i.cellScore}}</td>
          <!-- <td>{{i.id}}</td> -->
          <td>{{i.profit}}</td>
          <td>{{i.bonus}}</td>
          <td>{{i.baifenbi}}</td>
          <td>{{i.actionTime}}</td>
          <!--<td><button class="popBtn" onclick="tb_show('归零','/mg/fanshui/zero?mid=67551286&amp;TB_iframe=1&amp;width=780&amp;height=450')">归零</button> <button class="popBtn" onclick="tb_show('给予返水','/mg/fanshui/fanshui?mid=67551286&amp;TB_iframe=1&amp;width=780&amp;height=450')">给予返水</button> </td>-->
        </tr>
        <tr v-if="getPageData.sum>0">
          <td colspan="12">
            <page-limit :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
          </td>
        </tr>
        <tr v-if="!electronicGame.waterList.data">
          <td colspan="12" class="nodata">
            {{$L.t('noData')}}
          </td>
        </tr>
      </tbody>
    </table>
    <!--<font color="red">&nbsp;&nbsp;注：统计2019-03-15 06:00:00之前未返水的数据。</font>-->
    <el-dialog :title="$L.t('electronicGame.zh9')" :visible.sync="backwaterVisible" width="820px">
      <div class="backwater-container" v-if="backwaterVisible">
        <table class="table">
          <tr class="backwater_nav">
            <td colspan="3">
              <div class="back_head">
                <div class="back_search">
                  {{$L.t('table.username')}}:
                  <input type="text" v-model="backParmas.username" style="width: 120px;">
                </div>
                <div class="back_search">
                  {{$L.t('electronicGame.zh10')}}:
                  <select v-model="backParmas.type">
                    <option value="0">{{$L.t('agent.agent_8.zh49')}}</option>
                    <option value="1">{{$L.t('annoucement.xttz_5.zh4')}}</option>
                    <option value="2">{{$L.t('annoucement.xttz_5.zh5')}}</option>
                  </select>
                </div>
                <div class="back_submit">
                  <input type="submit" :value="$L.t('submit')" @click="backwaterSeartch()">
                </div>
              </div>
            </td>
          </tr>
          <tr class="head">
            <td>{{$L.t('table.username')}}</td>
            <td>{{$L.t('electronicGame.zh10')}}</td>
            <td>{{$L.t('table.handle')}}</td>
          </tr>
          <tr class="odds" v-for="(item, index) in electronicGame.backwaterList.data.data" :key="index">
            <td>{{item.username}}</td>
            <td :class="item.isProhibit == 1 ? 'color-red': 'color-green'">{{item.isProhibit == 1 ?$L.t('annoucement.xttz_5.zh4') : $L.t('annoucement.xttz_5.zh5')}}</td>
            <td>
              <button v-if="item.isProhibit == 0" @click="backState(1, item.uid)">{{$L.t('annoucement.xttz_5.zh4')}}</button>
              <button v-if="item.isProhibit == 1" @click="backState(0, item.uid)">{{$L.t('annoucement.xttz_5.zh5')}}</button>
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
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import { getDate, setDate, copyobj, setSession, getSession, getchar, randomRange, getTimerAll } from '@/common/common'
export default {
  data() {
    return {
      days: 1,
      sendParmas: {
        page: 1,
        limit: '20',
        sum: 100,
        fromTime: '',
        toTime: '',
        username: "",
        class_id: "",
        agency_id: "",
        isTest:1
      },
      // 用户返水列表
      backwaterVisible: false,
      backParmas: {
        class_id: '',
        agency_id: '',
        username: '',
        type: 0,
        page: 1,
        limit: 20,
      }
    }
  },
  created() {
    this.init();
  },
  methods: {
    ...mapMutations([

    ]),

    ...mapActions([
      "get_water_listAction",
      'getBackwaterList',
      'updateBackwaterState',
    ]),

    init() {
      this.sendParmas.username = "";
      this.sendParmas.page = 1;
      this.sendParmas.class_id = this.$route.query.class_id;
      this.sendParmas.agency_id = this.$route.params.id;
      this.selectDay(0)
      this.get_water_listAction(this.sendParmas);
    },

    selectDay(d) {
      this.days = d
    },

    submitQuery() {
      this.sendParmas.page = 1;
      this.get_water_listAction(this.sendParmas)
    },


    handlePage(data) {
      this.sendParmas.page = data.page;
      this.sendParmas.limit = data.limit;
      //查询
      this.get_water_listAction(this.sendParmas)
    },

    times(date) {
      let Y = date.getFullYear() + '-';
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      let d = date.getDate() + ' ';
      d = d < 10 ? ('0' + d) : d;
      let h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      let m = date.getMinutes();
      m = m < 10 ? ('0' + m) : m;
      let s = date.getSeconds();
      s = s < 10 ? ('0' + s) : s;
      return Y + M + d + ' ' + h + ':' + m + ':' + s;
    },

    /*set时间组件返回时间*/
    getTimer(start, end) {
      this.sendParmas.fromTime = start
      this.sendParmas.toTime = end
      this.sendParmas.page = 1;
    },

    // 以下为用户返水列表
    showBackwater() {
      this.backwaterVisible = true
      this.backParmas.class_id = this.$route.query.class_id
      this.backParmas.agency_id = this.$route.params.id
      this.backParmas.page = 1
      this.backParmas.limit = 20
      this.getBackwaterList(this.backParmas)
    },
    backwaterSeartch() {
      this.backParmas.page = 1
      this.getBackwaterList(this.backParmas)
    },
    handleBackPage(data) {
      this.backParmas.page = data.page
      this.backParmas.limit = data.limit
      this.getBackwaterList(this.backParmas)
    },
    backState(type, uid) {
      this.updateBackwaterState({
        uid,
        type,
        class_id: this.backParmas.class_id,
        agency_id: this.backParmas.agency_id
      }).then(() => {
        this.getBackwaterList(this.backParmas)
      })
    },
  },
  components: {


  },
  computed: {
    ...mapState([
      "electronicGame",
    ]),

    /*传入 分页组件 参数*/
    getPageData() {
      return {
        page: this.sendParmas.page,
        limit: this.sendParmas.limit,
        sum: this.electronicGame.waterList.count
      }
    },
    // 返水列表分页参数
    backPageData() {
      return {
        page: this.backParmas.page,
        limit: this.backParmas.limit,
        sum: this.electronicGame.backwaterList.data.count || 0
      }
    },
  },
  watch: {
    "$route": {
      handler: function(nv, ov) {
        this.init();
      },
      deep: true
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.head td,
.head th {
  text-align: left;
}

.keyValue {
  margin: 0 10px;
}

.keyValue>input {
  height: 20px;
}

.submitSeach>input {
  cursor: pointer;
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

    .back_head {
      display: flex;
      padding: 5px 10px;

      .back_search {
        margin-right: 15px;

        input {
          height: 20px;
        }

        select {
          height: 24px;
          padding: 0 5px;
        }
      }

      .back_submit {
        input {
          padding: 2px 5px;
        }
      }
    }
  }
}

</style>
