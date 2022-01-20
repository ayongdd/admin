<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
        <tr class="nav">
          <td>
            {{$L.t('moneyAdmin.Sum.info1')}}:
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
                {{$L.t('agent.agent_8.zh28')}}:
              </div>
              <div class="submitSeach">
                <input type="text" v-model="sendParmas.username">
              </div>
              <div class="submitSeach" @click="searchCommit()">
                  <input type="submit" :value="$L.t('submit')">
              </div>
              <div style="margin-left: 20px;cursor: pointer;">
                <label id="quanx">
                  <input type="checkbox" id="vehicle1" name="quanx" v-model="checkboxVal">
                  {{$L.t('moneyAdmin.Sum.info2')}}
                </label>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table" style="border-spcing: 0px;">
      <tbody>
        <tr class="head">
          <td colspan="4" class="sumTd_div">
            <span>{{$L.t('moneyAdmin.Sum.info3')}}</span>
            <span>{{$L.t('member.hylb_3.info1')}}</span>
            <span>{{$L.t('moneyAdmin.Sum.info4')}}</span>
            <span>{{$L.t('moneyAdmin.Sum.info5')}}</span>
            <span>{{$L.t('moneyAdmin.Sum.info6')}}</span>
            <span>{{$L.t('moneyAdmin.Sum.info7')}}</span>
            <span>{{$L.t('moneyAdmin.Sum.info8')}}</span>
          </td>
        </tr>
        <tr>
          <td colspan="4" class="sumTd_div">
            <span>{{getData.todayReg || 0}}
              <button style="float:right;" class="popBtn" @click="countPunch('detail')">{{$L.t('detail')}}</button>
            </span>
            <span>{{getData.todayLoginCount || 0 }}
              <button style="float:right;" class="popBtn" @click="countPunch('detail1')">{{$L.t('detail')}}</button>
            </span>
            <span>{{getData.firstPunch || 0}}
              <button style="float:right;" class="popBtn" @click="firstPunch()">{{$L.t('detail')}}</button>
            </span>
            <span>{{getData.allPunch || 0}}</span>
            <span>
              {{getData.betsAll || 0}}
             <button style="float:right;" class="popBtn" @click="registerPunch(3)">{{$L.t('detail')}}</button>
            </span>
            <span>{{getData.sysGameSy || 0}}</span>
            <span>{{getData.allUserCoin || 0}}</span>
          </td>
        </tr>
        <tr>
          <td colspan="4" style="border-color: #fff;background: #fff; padding-bottom: 5px;"></td>
        </tr>
        <tr class="head">
          <td>{{$L.t('agent.agent_8.zh44')}}</td>
          <td>{{$L.t('chatRoom.zh69')}}</td>
          <td>{{$L.t('agent.agent_8.zh79')}}</td>
          <td>{{$L.t('chatRoom.zh69')}}</td>
        </tr>
        <tr class="float_btn">
          <td class="lose">{{$L.t('table.lotteryBet')}} (<span class="color-red">{{$L.t('common.gong')}}{{getData.cpUser || 0}}{{$L.t('ren')}}</span>)</td>
          <td>{{getData.cpBetAmount || 0}}
            <button class="popBtn" @click="lotteryVisible = true">{{$L.t('detail')}}</button>
          </td>
          <td class="lose">{{$L.t('moneyAdmin.Sum.info9')}}(<span class="color-red">{{$L.t('common.gong')}}{{getData.chGameUser || 0}}{{$L.t('ren')}}</span>)</td>
          <td>{{getData.chAllBets || 0}}
            <button class="popBtn" @click="getGameDetail('1')">{{$L.t('detail')}}</button>
          </td>
        </tr>
        <tr class="float_btn">
          <td class="lose">{{$L.t('moneyAdmin.Sum.info10')}}</td>
          <td>{{getData.cpZjAmount || 0}}
            <!--<button class="popBtn" @click="changeDetail('3')">详细</button>-->
          </td>
          <td class="lose">{{$L.t('agent.agent_8.zh53')}}</td>
          <td>{{getData.chCellScore || 0 }}
            <!--<button class="popBtn" @click="getGameDetail('1')">详细</button>-->
          </td>
        </tr>
        <tr class="float_btn">
          <td class="lose">{{$L.t('moneyAdmin.Sum.info11')}}</td>
          <td>{{getData.cpFanshui || 0}}
            <!-- <button class="popBtn" @click="changeDetail('4')">详细</button> -->
            <button class="popBtn" @click="lotteryFanVisible = true">{{$L.t('detail')}}</button>
          </td>
          <td class="lose">{{$L.t('moneyAdmin.Sum.info12')}}</td>
          <td>{{getData.chFanShui || 0}}
            <button class="popBtn" @click="gameFanshuiDetail(1)">{{$L.t('detail')}}</button>
          </td>
        </tr>
         <tr class="float_btn">
          <td class="lose">{{$L.t('moneyAdmin.Sum.info13')}}</td>
          <td>{{getData.cpProfit || 0}}
            <!--<button class="popBtn" @click="changeDetail('3')">详细</button>-->
          </td>
          <td class="lose">{{$L.t('moneyAdmin.Sum.info14')}}</td>
          <td>{{getData.chProfit || 0}}
            <!--<button class="popBtn" @click="getGameDetail('1')">详细</button>-->
          </td>
        </tr>
        <tr>
          <td colspan="4" style="border-color: #fff;background: #fff; padding-bottom: 5px;"></td>
        </tr>
        <tr class="head">
          <td>{{$L.t('agent.agent_8.zh80')}}</td>
          <td>{{$L.t('chatRoom.zh69')}}</td>
          <td>{{$L.t('agent.agent_8.zh81')}}</td>
          <td>{{$L.t('chatRoom.zh69')}}</td>
        </tr>
        <tr class="float_btn">
          <td class="lose">{{$L.t('moneyAdmin.Sum.info15')}} (<span class="color-red">{{$L.t('common.gong')}}{{getData.agGameUser || 0}}{{$L.t('ren')}}</span>)</td>
          <td>{{getData.agAllBets || 0}}
            <button class="popBtn" @click="getGameDetail('3')">{{$L.t('detail')}}</button>
          </td>
          <td class="lose">{{$L.t('moneyAdmin.Sum.info16')}}(<span class="color-red">{{$L.t('common.gong')}}{{getData.enGameUser || 0}}{{$L.t('ren')}}</span>)</td>
          <td>{{getData.enAllBets || 0}}
            <button class="popBtn" @click="getGameDetail('4')">{{$L.t('detail')}}</button>
          </td>
        </tr>
         <tr class="float_btn">
          <td class="lose">{{$L.t('agent.agent_8.zh53')}}</td>
          <td>{{getData.agCellScore || 0}}
            <!--<button class="popBtn" @click="getGameDetail('3')">详细</button>-->
          </td>
          <td class="lose">{{$L.t('agent.agent_8.zh53')}}</td>
          <td>{{getData.enCellScore || 0}}
            <!--<button class="popBtn" @click="getGameDetail('4')">详细</button>-->
          </td>
        </tr>
        <tr class="float_btn">
          <td class="lose">{{$L.t('moneyAdmin.Sum.info17')}}</td>
          <td>{{getData.agFanShui || 0}}
            <button class="popBtn" @click="gameFanshuiDetail(3)">{{$L.t('detail')}}</button>
          </td>
          <td class="lose">{{$L.t('moneyAdmin.Sum.info18')}}</td>
          <td>{{getData.enFanShui || 0}}
            <button class="popBtn" @click="gameFanshuiDetail(4)">{{$L.t('detail')}}</button>
          </td>
        </tr>
         <tr class="float_btn">
          <td class="lose">{{$L.t('moneyAdmin.Sum.info19')}}</td>
          <td>{{getData.agProfit || 0}}
            <!--<button class="popBtn" @click="getGameDetail('3')">详细</button>-->
          </td>
          <td class="lose">{{$L.t('moneyAdmin.Sum.info20')}}</td>
          <td>{{getData.enProfit || 0}}
            <!--<button class="popBtn" @click="getGameDetail('4')">详细</button>-->
          </td>
        </tr>

        <!-- 体育 -->
        <tr>
          <td colspan="4" style="border-color: #fff;background: #fff; padding-bottom: 5px;"></td>
        </tr>

        <tr class="head">
          <td>{{$L.t('agent.agent_8.zh83')}}</td>
          <td>{{$L.t('chatRoom.zh69')}}</td>
          <td>{{$L.t('agent.agent_8.zh85')}}</td>
          <td>{{$L.t('chatRoom.zh69')}}</td>
        </tr>
        <tr class="float_btn">
          <td class="lose">{{$L.t('moneyAdmin.Sum.info21')}} (<span class="color-red">{{$L.t('common.gong')}}{{getData.spoGameUser || 0}}{{$L.t('ren')}}</span>)</td>
          <td>{{getData.spoAllBets || 0}}
            <button class="popBtn" @click="getGameDetail('5')">{{$L.t('detail')}}</button>
          </td>

          <td class="lose">{{$L.t('moneyAdmin.Sum.info22')}}(<span class="color-red">{{$L.t('common.gong')}}{{getData.mtGameUser || 0}}{{$L.t('ren')}}</span>)</td>
          <td>{{getData.mtAllBets || 0}}
            <button class="popBtn" @click="getGameDetail('7')">{{$L.t('detail')}}</button>
          </td>
        </tr>
         <tr class="float_btn">
          <td class="lose">{{$L.t('agent.agent_8.zh53')}}</td>
          <td>{{getData.spoCellScore || 0}}
          </td>

          <td class="lose">{{$L.t('agent.agent_8.zh53')}}</td>
          <td>{{getData.mtCellScore || 0}}
          </td>
        </tr>
        <tr class="float_btn">
          <td class="lose">{{$L.t('moneyAdmin.Sum.info23')}}</td>
          <td>{{getData.spoFanShui || 0}}
            <button class="popBtn" @click="gameFanshuiDetail(5)">{{$L.t('detail')}}</button>
          </td>
          <td class="lose">{{$L.t('moneyAdmin.Sum.info24')}}</td>
          <td>{{getData.mtFanShui || 0}}
            <button class="popBtn" @click="gameFanshuiDetail(7)">{{$L.t('detail')}}</button>
          </td>
        </tr>
         <tr class="float_btn">
          <td class="lose">{{$L.t('moneyAdmin.Sum.info25')}}</td>
          <td>{{getData.spoProfit || 0}}
          </td>
          <td class="lose">{{$L.t('moneyAdmin.Sum.info26')}}</td>
          <td>{{getData.mtProfit || 0}}
          </td>
        </tr>

        <tr>
          <td colspan="4" style="border-color: #fff;background: #fff; padding-bottom: 5px;"></td>
        </tr>
        <tr>
          <td colspan="12" style="color:red;">{{$L.t('moneyAdmin.Sum.info27')}}</td>
        </tr>
        <tr class="head">
          <td>{{$L.t('moneyAdmin.Sum.info28')}}</td>
          <td>{{$L.t('moneyAdmin.Sum.info29')}}</td>
          <td>{{$L.t('moneyAdmin.Sum.info30')}}</td>
          <td>{{$L.t('moneyAdmin.Sum.info31')}}</td>
        </tr>
        <tr>
          <td class="lose">{{$L.t('moneyAdmin.Sum.info32')}} ( <font color="red">{{$L.t('common.gong')}}{{getData.userReCount || 0}}{{$L.t('moneyAdmin.Sum.info33')}}, {{getData.userReUsers || 0}}{{$L.t('ren')}}</font> ) </td>
          <td>
            {{getData.userReAmount || 0}}
            <span style="float:right;">
              <button class="popBtn" @click="payDetail('projectVisible')">{{$L.t('detail')}}</button>
            </span>
          </td>
          <td>{{$L.t('moneyAdmin.Sum.info35')}} ( <font color="red">{{$L.t('common.gong')}}{{getData.cashAll || 0}}{{$L.t('moneyAdmin.Sum.info33')}}, {{getData.cashUsers || 0}}{{$L.t('ren')}}</font> ) </td>
          <td>
            {{getData.cashAmount || 0}}
            <span style="float:right;">
              <button class="popBtn" @click="changeDetail('2')">{{$L.t('detail')}}</button>
            </span>
          </td>
        </tr>
        <tr>
          <td class="lose">{{$L.t('moneyAdmin.Sum.info34')}} ( <font color="red">{{$L.t('common.gong')}}{{getData.onlineReCount || 0}}{{$L.t('moneyAdmin.Sum.info33')}}, {{getData.onlineReUsers || 0}}{{$L.t('ren')}}</font> )</td>
          <td>
            {{getData.onlineReAmount || 0}}
            <span style="float:right;">
              <button class="popBtn" @click="payDetail('payVisible')">{{$L.t('detail')}}</button>
            </span>
          </td>
          <td>{{$L.t('common.fanshui')}} ( <font color="red">{{$L.t('common.gong')}} {{getData.bonusCount || 0}}{{$L.t('moneyAdmin.Sum.info33')}}, {{getData.bonusUsers || 0}}{{$L.t('ren')}}</font> )</td>
          <td>
            {{getData.bonusAmount || 0}}
            <span style="float:right;">
              <button class="popBtn" @click="changeDetail('4')">{{$L.t('detail')}}</button>
            </span>
          </td>
        </tr>
        <tr>
          <td class="lose">{{$L.t('moneyAdmin.Sum.info36')}} ( <font color="red">{{getData.cashFeeCount || 0}}</font> )</td>
          <td>
            {{getData.cashFee || 0}}
            <span style="float:right;">
              <button class="popBtn" @click="payDetail('withdrawalVisible')">{{$L.t('detail')}}</button>
            </span>
          </td>
          <td>{{$L.t('common.youhui')}} ( <font color="red">{{$L.t('common.gong')}}{{getData.discountReCount || 0}}{{$L.t('moneyAdmin.Sum.info33')}}, {{getData.discountReUsers || 0}}{{$L.t('ren')}}</font> )</td>
          <td>
            {{getData.discountReAmount || 0}}
            <span style="float:right;">
              <button class="popBtn" @click="changeDetail('10')">{{$L.t('detail')}}</button>
            </span>
          </td>
        </tr>
        <tr>
          <td class="lose">{{$L.t('moneyAdmin.Sum.info37')}} ( <font color="red">0</font> )</td>
          <td>0</td>
          <td>{{$L.t('common.caijin')}} ( <font color="red">{{$L.t('common.gong')}}{{getData.giveReCount || 0}}{{$L.t('moneyAdmin.Sum.info33')}}, {{getData.giveReUsers || 0}}{{$L.t('ren')}}</font> )</td>
          <td>
            {{getData.giveReAmount || 0}}
            <span style="float:right;">
              <button class="popBtn" @click="changeDetail('6')">{{$L.t('detail')}}</button>
            </span>
          </td>
        </tr>
        <tr>
          <td class="lose">{{$L.t('member.info80')}} ( <font color="red">{{$L.t('common.gong')}}{{getData.adminReCoin || 0}}{{$L.t('moneyAdmin.Sum.info33')}}, {{getData.adminReUsers || 0}}{{$L.t('ren')}}</font> )</td>
          <td>
            {{getData.adminReAmount || 0}}
            <span style="float:right;">
              <button class="popBtn" @click="changeDetail('12')">{{$L.t('detail')}}</button>
            </span>
          </td>
          <td>{{$L.t('moneyAdmin.Amount.info2')}} ( <font color="red">{{$L.t('common.gong')}}{{getData.deductionReCoin || 0}}{{$L.t('moneyAdmin.Sum.info33')}}, {{getData.deductionReUsers || 0}}{{$L.t('ren')}}</font> )</td>
          <td>
            {{getData.deductionReAmount || 0}}
            <span style="float:right;">
              <button class="popBtn" @click="changeDetail('7')">{{$L.t('detail')}}</button>
            </span>
          </td>
        </tr>
        <tr>
          <td colspan="4">
            {{$L.t('moneyAdmin.Sum.info38')}}: {{getData.allReCoin || 0}}
            <br>
            {{$L.t('moneyAdmin.Sum.info39')}}: {{getData.fictitiousReCoin || 0}}
            <br>
            {{$L.t('moneyAdmin.Sum.info40')}}:
            <span class="lose">{{getData.trueReCoin || 0}}</span>
            <br>
            <font color="red">
              {{$L.t('moneyAdmin.Sum.info41')}}【
              <!-- <a :href="'#/financialIndex/2?formTime=' + sendParmas.fromTime + '&toTime=' + sendParmas.toTime">所有项目汇总</a> -->
              <a @click="showProject()" class="color-red">{{$L.t('moneyAdmin.Sum.info42')}}</a>
              】{{$L.t('moneyAdmin.Sum.info43')}}，
              <br>
              {{$L.t('moneyAdmin.Sum.info44')}}
            </font>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 资金流水 -->
    <el-dialog
      :title="$L.t('detail')"
      :visible.sync="showLogVisible"
      width="1250px">
      <fund-water v-if="showLogVisible" :typeData="logInfoData"></fund-water>
    </el-dialog>

    <!-- 项目入款 -->
    <el-dialog
      :title="$L.t('detail')"
      :visible.sync="projectVisible"
      width="1250px">
      <div v-if="projectVisible" class="ject_container">
        <table class="table" style="table-layout:fixed">
          <tr class="project_title">
            <td colspan="6">
              {{$L.t('moneyAdmin.Sum.info32')}}<span>{{$L.t('moneyAdmin.Sum.info45')}}</span>
            </td>
          </tr>
          <tr class="head">
            <td>{{$L.t('moneyAdmin.Sum.info46')}}</td>
            <td>{{$L.t('moneyAdmin.Sum.info47')}}</td>
            <td>{{$L.t('moneyAdmin.Sum.info48')}}</td>
            <td class="key_account">{{$L.t('moneyAdmin.Sum.info49')}}（KEY）</td>
            <td>{{$L.t('agent.agent_0.zsCj')}}(%)</td>
            <td>{{$L.t('chatRoom.zh69')}}</td>
          </tr>
          <tr class="odds" v-for="(item, index) in priceList.data">
            <td>{{item.title}}</td>
            <td>{{item.bankName}}</td>
            <td :class="{'color-red': item.usertype == 9}">{{item.username}}</td>
            <td class="key_account">{{item.account}}</td>
            <td>{{item.zs_money || 0}}</td>
            <td class="color-red">{{item.today_money || 0}}</td>
          </tr>
          <tr v-if="projectPageData.sum == 0">
            <td colspan="6" style="text-align: center;">{{$L.t('noData')}}</td>
          </tr>
          <tr v-if="projectPageData.sum > 0">
            <td colspan="6">
              <page-limit class="padding_page" :pageData="projectPageData" @handlePage="projectPage"></page-limit>
            </td>
          </tr>
        </table>
      </div>
    </el-dialog>

    <!--取款手续费详情-->
    <el-dialog
            :title="$L.t('moneyAdmin.Sum.info50')"
            :visible.sync="withdrawalVisible"
            width="1250px">
      <div v-if="withdrawalVisible" class="ject_container">
        <table class="table" style="table-layout:fixed">
          <tr class="head">
            <td>{{$L.t('table.username')}}</td>
            <td>{{$L.t('financial.zh101')}}</td>
            <td>{{$L.t('member.info42')}}</td>
            <td>{{$L.t('member.info41')}}</td>
            <td>{{$L.t('table.type')}}</td>
            <td>{{$L.t('chatRoom.zh69')}}</td>
            <td>{{$L.t('table.sxFEI')}}</td>
            <td>{{$L.t('moneyAdmin.Sum.info51')}}</td>
            <td>{{$L.t('moneyAdmin.ListDraw.info4')}}</td>

          </tr>
          <tr class="odds" v-for="(item, index) in priceList.data">
            <td>{{item.username}}</td>
            <td>{{item.bankName}}</td>
            <td >{{item.name}}</td>
            <td>{{item.account}}</td>
            <td>{{item.pay_name}}</td>
            <td class="color-red">{{item.amount || 0}}</td>
            <td class="color-red">{{item.fee  || 0}}</td>
            <td class="color-red">{{item.actualAmount   || 0}}</td>
            <td>{{item.addTime}}</td>
          </tr>
          <tr v-if="projectPageData.sum == 0">
            <td colspan="9" style="text-align: center;">{{$L.t('noData')}}</td>
          </tr>
          <tr v-if="projectPageData.sum > 0">
            <td colspan="9">
              <page-limit class="padding_page" :pageData="projectPageData" @handlePage="projectcashPage"></page-limit>
            </td>
          </tr>
        </table>
      </div>
    </el-dialog>

    <!-- 在线充值 -->
    <el-dialog
      :title="$L.t('detail')"
      :visible.sync="payVisible"
      width="1250px">
      <div v-if="payVisible" class="ject_container">
        <table class="table" style="table-layout:fixed">
          <tr class="project_title">
            <td colspan="6">
              {{$L.t('agent.agent_0.zxcz')}}<span>{{$L.t('moneyAdmin.Sum.info52')}}</span>
            </td>
          </tr>
          <tr class="head">
            <td>{{$L.t('moneyAdmin.Sum.info46')}}</td>
            <td>{{$L.t('moneyAdmin.Sum.info47')}}</td>
            <td>{{$L.t('moneyAdmin.Sum.info48')}}</td>
            <td class="key_account">{{$L.t('moneyAdmin.Sum.info49')}}（KEY）</td>
            <td>{{$L.t('agent.agent_0.zsCj')}}(%)</td>
            <td>{{$L.t('chatRoom.zh69')}}</td>
          </tr>
          <tr class="odds" v-for="(item, index) in priceList.data">
            <td>{{item.title}}</td>
            <td>{{item.bankName}}</td>
            <td>{{item.username}}</td>
            <td class="key_account">{{item.account}}</td>
            <td>{{item.zs_money || 0}}</td>
            <td class="color-red">{{item.today_money || 0}}</td>
          </tr>
          <tr v-if="payPageData.sum == 0">
            <td colspan="6" style="text-align: center;">{{$L.t('noData')}}</td>
          </tr>
          <tr v-if="payPageData.sum > 0">
            <td colspan="6">
              <page-limit class="padding_page" :pageData="payPageData" @handlePage="payPage"></page-limit>
            </td>
          </tr>
        </table>
      </div>
    </el-dialog>
    <!-- 项目汇总 -->
    <el-dialog
      :title="$L.t('moneyAdmin.Sum.info53')"
      :visible.sync="proSumVisible"
      width="1250px">
      <project-sum v-if="proSumVisible" :typeData="sendParmas"></project-sum>
    </el-dialog>
    <!-- 首充人数 -->
    <el-dialog
      :title="$L.t('detail')"
      :visible.sync="firstPunchVisible"
      width="1250px">
      <div class="firstPunch-container" v-if="firstPunchVisible">
        <table class="table">
          <tr class="head">
            <td>{{$L.t('table.username')}}</td>
            <td>{{$L.t('table.name')}}</td>
            <td>{{$L.t('table.superior')}}</td>
            <td>{{$L.t('table.danhao')}}</td>
            <td>{{$L.t('table.rechargeMoney')}}</td>
            <td>{{$L.t('table.reality')}}</td>
            <td>{{$L.t('table.rechargeType')}}</td>
            <td>{{$L.t('table.rechargeTime')}}</td>
            <td>{{$L.t('table.registerTime')}}</td>
            <td>{{$L.t('table.remark')}}</td>
          </tr>
          <tr class="odds" v-for="item in moneyStore.datafirstPunchList.data.data">
            <td>{{item.username}}</td>
            <td>{{item.name}}</td>
            <td>{{item.parent}}</td>
            <td>{{item.rechargeId}}</td>
            <td>{{item.amount}}</td>
            <td>{{item.rechargeAmount}}</td>
            <td>
              <span v-if="item.typeid == 1">{{$L.t('agent.agent_0.zxcz')}}</span>
              <span v-else-if="item.typeid == 2">{{$L.t('agent.agent_0.zzcc')}}</span>
              <span v-else-if="item.typeid == 3">{{$L.t('agent.agent_0.xtzs')}}</span>
              <span v-else-if="item.typeid == 4">{{$L.t('agent.agent_0.czdh')}}</span>
              <span v-else-if="item.typeid == 5">{{$L.t('agent.agent_0.gethb')}}</span>
              <span v-else-if="item.typeid == 6">{{$L.t('agent.agent_0.yhds')}}</span>
              <span v-else-if="item.typeid == 7">{{item.rechargeAmount > 0?$L.t('moneyAdmin.Sum.info54'):$L.t('moneyAdmin.Sum.info55')}}</span>
              <span v-else-if="item.typeid == 8">{{$L.t('moneyAdmin.Sum.info56')}}</span>
              <span v-else>{{$L.t('moneyAdmin.Sum.info57')}}</span>
            </td>
            <td>{{times(item.rechargeTime)}}</td>
            <td>{{times(item.regTime)}}</td>
            <td>{{item.info}}</td>
          </tr>
          <tr v-if="firstPunchPage.sum == 0">
            <td colspan="10" style="text-align: center;">{{$L.t('noData')}}</td>
          </tr>
          <tr v-if="firstPunchPage.sum > 0">
            <td colspan="10">
              <page-limit class="padding_page" :pageData="firstPunchPage" @handlePage="firstPunchHandlePage"></page-limit>
            </td>
          </tr>
        </table>
      </div>
    </el-dialog>

    <!-- 游戏注单列表 -->
    <el-dialog
      :title="$L.t('detail')"
      :visible.sync="gameListVisible"
      width="1250px">
      <div v-if="gameListVisible" class="gameList_info">
        <table class="table">
          <tr class="head">
            <td>{{$L.t('table.username')}}</td>
            <td>{{$L.t('bonusGame.MoneyQuery.zh7')}}</td>
            <td>{{$L.t('bonusGame.MoneyQuery.zh9')}}</td>
            <td>{{$L.t('common.zongxiazhu')}}</td>
            <td>{{$L.t('common.yxxiazhu')}}</td>
            <td>{{$L.t('agent.agent_8.zh54')}}</td>
          </tr>
          <tr class="odds" v-if="gameListData.data" v-for="(item, index) in gameListData.data">
            <td>{{item.username}}</td>
            <td>{{item.agency_name}}</td>
            <td>{{item.game_name}}</td>
            <td>{{item.AllBet}}</td>
            <td>{{item.CellScore}}</td>
            <td>{{item.Profit}}</td>
          </tr>
          <tr v-if="gamePageData.sum > 0">
            <td colspan="6" class="color-red total_info">
              <span>{{$L.t('electronicGame.zh5')}}: {{gameListData.bestCount || 0}}</span>
              <span>{{$L.t('moneyAdmin.Sum.info58')}}: {{gameListData.CellScoreCount || 0}}</span>
              <span>{{$L.t('electronicGame.zh6')}}: {{gameListData.profitCount || 0}}</span>
            </td>
          </tr>
          <tr v-if="gamePageData.sum == 0">
            <td colspan="6" style="text-align: center;">{{$L.t('noData')}}</td>
          </tr>
          <tr v-if="gamePageData.sum > 0">
            <td colspan="6">
              <page-limit class="padding_page" :pageData="gamePageData" @handlePage="gameInfoPage"></page-limit>
            </td>
          </tr>
        </table>
      </div>
    </el-dialog>



    <!-- 投注人数详情 -->
    <el-dialog
            :title="$L.t('moneyAdmin.Sum.info59')"
            :visible.sync="betListVisible"
            width="1250px">
      <div v-if="betListVisible" class="gameList_info">
        <table class="table">
          <tr class="head">
            <td>{{$L.t('table.username')}}</td>
            <td>{{$L.t('agent.agent_8.zh52')}}</td>
            <td>{{$L.t('table.lotteryBet')}}</td>
            <td>{{$L.t('moneyAdmin.Sum.info10')}}</td>
            <td>{{$L.t('moneyAdmin.Sum.info60')}}</td>
            <td>{{$L.t('moneyAdmin.Sum.info61')}}</td>
            <td>{{$L.t('agent.agent_8.zh87')}}</td>
          </tr>
          <tr class="odds" v-for="(item, index) in moneyStore.dataDetailsList.data.data">
            <td>{{item.username}}</td>
            <td>{{item.bestCoin}}</td>
            <td>{{item.cpBetsCoin}}</td>
            <td>{{item.cpzjCoin}}</td>
            <td>{{item.agencyBetsCoin}}</td>
            <td>{{item.agencyProfitCoin}}</td>
            <td>{{item.profitCoin}}</td>
          </tr>
          <tr v-if="registerPageData.sum == 0">
            <td colspan="11" style="text-align: center;">{{$L.t('noData')}}</td>
          </tr>
          <tr v-if="registerPageData.sum > 0">
            <td colspan="11">
              <page-limit class="padding_page" :pageData="registerPageData" @handlePage="registerInfoPage"></page-limit>
            </td>
          </tr>
        </table>
      </div>
    </el-dialog>

    <!-- 第三方游戏详细弹窗 -->
    <el-dialog
      :title="$L.t('detail')"
      :visible.sync="gameAgentVisible"
      width="1250px">
      <game-list-info v-if="gameAgentVisible" :parmasData="gameAgentParmas"></game-list-info>
    </el-dialog>

    <!-- 彩票返水 -->
    <el-dialog
      :title="$L.t('moneyAdmin.Sum.info11')"
      :visible.sync="lotteryFanVisible"
      width="1250px">
      <fanshui-model v-if="lotteryFanVisible" :getMessage="sendParmas"></fanshui-model>
    </el-dialog>

    <!-- 彩票投注详情弹窗 -->
    <el-dialog
      :title="$L.t('detail')"
      :visible.sync="lotteryVisible"
      width="1250px">
      <lottery_8 v-if="lotteryVisible" class="lottery_model" :lotteryData="sendParmas"></lottery_8>
    </el-dialog>
    <!-- 返水 -->
    <el-dialog
      :title="$L.t('moneyAdmin.Sum.info62')"
      :visible.sync="fanShuiVisible"
      width="1250px">
      <ch-list-fanshui v-if="fanShuiVisible" :parmasData="fanShuiParmas"></ch-list-fanshui>
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
          username: '',
          fromTime:'',
          toTime:'',
          isAgent:'0'
        },
        checkboxVal:false,
        days:'',
        // 项目汇总
        proSumVisible: false,
        // 资金流水传参
        logInfoData: {
          type: '',
          name: '',
          fromTime: '',
          toTime: '',
          isAgent:'0'
        },
        // 彩票投注
        lotteryVisible: false,
        // 资金流水
        showLogVisible: false,
        // 项目入款 /  在线充值
        projectVisible: false,
        payVisible: false,
        withdrawalVisible:false,
        // 项目入款
        projectParmas: {
          page: 1,
          limit: 20,
          typeId: 2,
          username:'',
          fromTime:'',
          toTime:'',
          isAgent:'0'
        },
        // 线上充值
        payParmas: {
          page: 1,
          limit: 20,
          typeId: 1,
          username:'',
          fromTime:'',
          toTime:'',
          isAgent:'0'
        },
        priceList: {
          data: [],
          count: 0,
        },
        // 首充人数列表
        firstPunchVisible: false,
        firstPunchParmas:{
          page: 1,
          limit: 20,
          fromTime:'',
          toTime:'',
          isAgent:'0'
        },
        // 游戏注单列表
        gameListVisible: false,
        betListVisible:false,
        gameListParmas: {
          class_id: '',
          page: 1,
          limit: 20,
          fromTime: '',
          toTime: '',
          isAgent:'0'
        },
        gameListData: {},
        // 第三方游戏详细弹窗- -
        gameAgentVisible: false,
        gameAgentParmas: {
          class_id: '',
          username:'',
          fromTime: '',
          toTime: '',
          isAgent:'0'
        },
        // 彩票返水
        lotteryFanVisible: false,
        // 棋牌返水
        fanShuiVisible: false,
        fanShuiParmas: {
          class_id: '',
          username: '',
          fromTime: '',
          toTime: '',
          isAgent:'0'
        },

        registerSendParmas:{
          page:1,
          limit:20,
          type:'',
          fromTime:'',
          toTime:'',
          isAgent:'0'
        },
      }
    },
    created (){
      this.init(this.checkboxVal)
      this.getCountDataList(this.sendParmas)
    },
    watch:{
      'checkboxVal'(n,o) {
        // console.log('n',n);
        this.init(n)
      }
    },
    methods: {
      ...mapMutations([
        'setMemberVisibleSum',
        'setMemberNameSum'
      ]),
      ...mapActions([
        'getCountDataList',
        'getReceBankSetList',
        'gameInfoListAction',
        'getfirstPunchList',
        'cashHandlingFeeDetail',
        'getDetailsList'
      ]),
      init(data) {
        if(!data) {
          this.sendParmas.isAgent = 0;
          this.projectParmas.isAgent = 0;
          this.logInfoData.isAgent = 0;
          this.payParmas.isAgent = 0;
          this.firstPunchParmas.isAgent = 0;
          this.gameListParmas.isAgent = 0;
          this.gameAgentParmas.isAgent = 0;
          this.fanShuiParmas.isAgent = 0;
          this.registerSendParmas.isAgent = 0;
        }else {
          this.sendParmas.isAgent = 1
          this.projectParmas.isAgent = 1
          this.logInfoData.isAgent = 1;
          this.payParmas.isAgent = 1;
          this.firstPunchParmas.isAgent = 1;
          this.gameListParmas.isAgent = 1;
          this.gameAgentParmas.isAgent = 1;
          this.fanShuiParmas.isAgent = 1;
          this.registerSendParmas.isAgent = 1;
        }
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
      searchCommit(){
        this.getCountDataList(this.sendParmas)
      },
      // 资金类型详情
      changeDetail (type) {
        // console.log(type)
        this.logInfoData.type = type
        this.logInfoData.username = this.sendParmas.username
        this.logInfoData.fromTime = this.sendParmas.fromTime
        this.logInfoData.toTime = this.sendParmas.toTime
        // // 弹窗显示
        this.showLogVisible = true
      },
      // 项目入款 / 在线充值弹窗
      payDetail (key) {
        this[key] = true
        if (key == 'projectVisible') {
          // 获取在线充值、 人工列表
          this.getReceBankSetList(this.projectParmas).then(res => {
            this.projectParmas.username = this.sendParmas.username
            this.projectParmas.fromTime = this.sendParmas.fromTime
            this.projectParmas.toTime = this.sendParmas.toTime
            this.priceList = res
          })
        }
        if (key == 'payVisible') {
          this.payParmas.username = this.sendParmas.username
          this.payParmas.fromTime = this.sendParmas.fromTime
          this.payParmas.toTime = this.sendParmas.toTime
          // 获取在线充值、 人工列表
          this.getReceBankSetList(this.payParmas).then(res => {
            this.priceList = res
          })
        }
        if (key == 'withdrawalVisible') {
          this.payParmas.username = this.sendParmas.username
          this.payParmas.fromTime = this.sendParmas.fromTime
          this.payParmas.toTime = this.sendParmas.toTime
          // 获取取款手续费详情
          this.cashHandlingFeeDetail(this.payParmas).then(res => {
            this.priceList = res
          })
        }
      },
      // 项目入款分页
      projectPage (data) {
        this.projectParmas.page = data.page
        this.projectParmas.limit = data.limit
        this.getReceBankSetList(this.projectParmas).then(res => {
          this.priceList = res
        })
      },
      // 取款手续费详情分页
      projectcashPage (data) {
        this.projectParmas.page = data.page
        this.projectParmas.limit = data.limit
        this.cashHandlingFeeDetail(this.projectParmas).then(res => {
          this.priceList = res
        })
      },
      // 在线充值分页
      payPage (data) {
        this.payParmas.page = data.page
        this.payParmas.limit = data.limit
        this.getReceBankSetList(this.payParmas).then(res => {
            this.priceList = res
          })
      },
      // 所有项目汇总
      showProject () {
        this.proSumVisible = true
      },
      // 第三方注单列表
      getGameDetail (type) {
        this.gameAgentParmas.class_id = type
        this.gameAgentParmas.username = this.sendParmas.username
        this.gameAgentParmas.fromTime = this.sendParmas.fromTime
        this.gameAgentParmas.toTime = this.sendParmas.toTime
        this.gameAgentVisible = true
        // this.gameListVisible = true
        // this.gameListParmas.class_id = type
        // this.gameListParmas.fromTime = this.sendParmas.fromTime
        // this.gameListParmas.toTime = this.sendParmas.toTime
        // this.gameInfoListAction(this.gameListParmas).then(data => {
        //   console.log(data)
        //   this.gameListData = data
        // })
      },
      gameInfoPage (data) {
        this.gameListParmas.page = data.page
        this.gameListParmas.limit = data.limit
        this.gameInfoListAction(this.gameListParmas).then(data => {
          this.gameListData = data
        })
      },

      // 注册详情
      registerPunch(type){
        // if(type == 1){
        //   this.registerListVisible = true
        // }
        // if(type == 2){
        //   this.visitListVisible = true
        // }
        if(type == 3){
          this.betListVisible = true
        }
        this.registerSendParmas.type = type
        this.registerSendParmas.username = this.sendParmas.username
        this.registerSendParmas.fromTime = this.sendParmas.fromTime
        this.registerSendParmas.toTime = this.sendParmas.toTime
        this.getDetailsList(this.registerSendParmas)
      },

      // 注册,访问人数
      countPunch(value){
        // this.setMemberVisible(true)
        let data = {
          visible:true,
          title:'',
          isAgent:this.checkboxVal? '1':'0',
          fromTime:this.sendParmas.fromTime,
          toTime:this.sendParmas.toTime,
          name:this.sendParmas.username,
          sumData:value
        }
        if(value == 'detail'){
          data.title = this.$L.t('moneyAdmin.Sum.info3')
        }else{
          data.title = this.$L.t('member.hylb_3.info1')
        }
        this.setMemberNameSum(data)
      },

      registerInfoPage (data) {
        this.registerSendParmas.page = data.page
        this.registerSendParmas.limit = data.limit
        this.getDetailsList(this.registerSendParmas)
      },
      // 首充
      firstPunch () {
        this.firstPunchVisible = true
        this.firstPunchParmas.page = 1
        // this.firstPunchParmas.limit = 20
        this.firstPunchParmas.fromTime = this.sendParmas.fromTime,
        this.firstPunchParmas.toTime = this.sendParmas.toTime
        // 调用请求获取首充详情
        this.getfirstPunchList(this.firstPunchParmas)
      },
      // 首充分页
      firstPunchHandlePage (data) {
        this.firstPunchParmas.page = data.page
        this.firstPunchParmas.limit = data.limit
        this.firstPunchParmas.fromTime = this.sendParmas.fromTime,
        this.firstPunchParmas.toTime = this.sendParmas.toTime
        this.getfirstPunchList(this.firstPunchParmas)
      },
      // 第三方返水
      gameFanshuiDetail (type) {
        this.fanShuiVisible = true
        this.fanShuiParmas.class_id = type
        this.fanShuiParmas.username = this.sendParmas.username
        this.fanShuiParmas.fromTime = this.sendParmas.fromTime
        this.fanShuiParmas.toTime = this.sendParmas.toTime
      },
      times(t) {
        let date = new Date(t * 1000)
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
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
    },
    computed: {
      ...mapState([
        "moneyStore"
      ]),
      getData () {
        return this.moneyStore.countDataList.data
      },
      // 项目入款
      projectPageData () {
        return {
          page: this.projectParmas.page,
          limit: this.projectParmas.limit,
          sum: this.priceList.count || 0
        }
      },
      // 在线充值
      payPageData () {
        return {
          page: this.payParmas.page,
          limit: this.payParmas.limit,
          sum: this.priceList.count || 0
        }
      },
      // 第三方数据
      gamePageData () {
        return {
          page: this.gameListParmas.page,
          limit: this.gameListParmas.limit,
          sum: this.gameListData.count || 0
        }
      },
      // 首充人数数据
      firstPunchPage () {
        return {
          page: this.firstPunchParmas.page,
          limit: this.firstPunchParmas.limit,
          sum: this.moneyStore.datafirstPunchList.data.count || 0
        }
      },
      // 注册人数详情
      registerPageData () {
        return {
          page: this.registerSendParmas.page,
          limit: this.registerSendParmas.limit,
          sum: this.moneyStore.dataDetailsList.data.count || 0
        }
      },
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
font{
  a{
    color: blue;
  }
}
// 公司入款 / 在线充值
.ject_container{
  height: 550px;
  overflow: auto;
  padding: 5px;
  box-sizing: border-box;
  table{
    border-collapse: collapse;
    border: none;
    color: #000;
    margin-top: 0;
    tr{
      height: 30px;
      line-height: 30px;
      background: #F3F3F3;
      &.odds:hover{
        background: #ccffcc;
      }
      &.project_title{
        background: #ddd;
        text-align: center;
        span{
          margin-left: 5px;
        }
      }
      td{
        border:1px solid #ccc;
      }
    }
  }
}
.odds{
  background-color: #f2f2f2;
  font-size: 12px;
  color: #000000;
}
// 项目汇总表格 标题
.sumTd_div{
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  span{
    float: left;
    width: 14.28%;
    box-sizing: border-box;
    border-right: 1px solid #ccc;
    padding: 3px 3px 3px 5px;
    &:last-child{
      border-right: 0;
    }
  }
}
// 体育
.sportContent{
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  div,span{
    float: left;
    height: 35px;
    width: 50%;
    box-sizing: border-box;
    border-right: 1px solid #ccc;
    padding: 3px 3px 3px 5px;
    &:last-child{
      border-right: 0;
    }
    u{
      text-decoration: none;
    }
  }
}
.sport-button{
  button{
    float: right;
  }
}
// .sportChild{
//   width: 100%;
//   .sport-child_count{
//     width: 50%;
//   }
// }

// 第三方游戏数据
.gameList_info{
  height: 580px;
  overflow: auto;
  .table{
    margin-bottom: 5px;
    min-width: auto;
  }
  .total_info{
    padding:8px 5px;
    span{
      margin-right: 20px;
    }
  }
}

// 表格浮动按钮 -- -
.float_btn{
  button{
    float: right;
  }
  td{
    height: 35px;
    box-sizing: border-box;
  }
}

.firstPunch-container{
  height: 580px;
  overflow: auto;
  .table{
    margin:5px 5px 10px;
  }
}

.lottery_model{
  height: 650px;
  overflow: auto;
}
table td{
  overflow-wrap: break-word;
}
  table .head td{
    white-space: normal;
    height: 20px;
  }
</style>
