<template>
  <div class="container">
    <table class="table">
      <tbody>
        <tr>
          <td class="first">{{$L.t('search')}}:</td>
          <td>
            <div class="userList-search">
              <span><span v-if="allUserNameSum.sumData == 'detail'">{{$L.t('member.hylbCopy.info2')}}</span><span v-if="allUserNameSum.sumData == 'detail1'">{{$L.t('member.hylbCopy.info1')}}</span>{{$L.t('table.time')}}</span>
              <!-- <timer @sendTime="getSearchTimer"  :day="diyDays"></timer> -->
              <timer @sendTime="getSearchTimer" :day="diyDays" :paramTime="showLogData"></timer>
              <input type="button" :value="$L.t('submit')" class="search-submit" @click="searchCommit()">
            </div>
          </td>
          <td class="right">
            <button @click="addUser()">{{$L.t('member.info57')}}</button>
            <button @click="commitCheck()">{{$L.t('member.info58')}}</button>
            <button @click="allCheck('clear')">{{$L.t('member.info60')}}</button>
            <button @click="sendData()"  v-if="indexStore.dataAdminInfo.updateName && indexStore.dataAdminInfo.updateName==true">{{$L.t('lottery.zh45')}}</button>
          </td>
        </tr>
      </tbody></table>
    <table class="table" id="out-table">
      <tbody>
        <tr class="head">
          <td width="20">
            <input type="checkbox" class="checkbox-select" v-model="allChecked" @click="allCheck()">
          </td>
          <td>{{$L.t('chessGame.zh26')}}</td>
          <td>{{$L.t('table.name')}}</td>
          <td>{{$L.t('table.status')}}</td>
          <td>{{$L.t('member.info61')}}</td>
          <td>{{$L.t('table.yue')}}</td>
          <!-- <td>借款金额</td> -->

          <td>{{$L.t('member.info62')}}</td>
          <td><div style="width: 70px;white-space: normal;line-height: 15px;">{{$L.t('table.sjYK')}}<div class="help-tip"><p>{{$L.t('member.hylb_3.info6')}}</p></div></div></td>
          <td>{{$L.t('chatRoom.zh83')}}</td>
          <td>{{$L.t('member.info66')}}</td>
          <!-- <td>提款打码量</td> -->
          <td>{{$L.t('member.info30')}}</td>
          <td>{{$L.t('member.info67')}}</td>
          <td>{{$L.t('member.info68')}}</td>
          <td>{{$L.t('table.zcLY')}}</td>
          <td>{{$L.t('table.registerTime')}}</td>
          <td>{{$L.t('agent.agent_8.zh41')}}</td>
          <td>{{$L.t('table.remark')}}</td>
          <td class="act">{{$L.t('financial.zh85')}}</td>
        </tr>
        <tr class="odd" v-for="(item, index) in memberStore.userList.data.data">
          <td>
            <input type="checkbox" class="checkbox-select" v-model="item.checked" @click="handelCheck(item)"></td>
          <td :class="{'color-red': item.usertype == 9}">{{item.username}}
            <!-- <br><font color="blue">{{item.uid}}</font> -->
          </td>
          <td>{{item.name}}</td>
          <td v-if="item.enable == 0">
            {{$L.t('member.info70')}}<br/>
            <button class="popBtn" @click="enableChange(item.uid, 1)">{{$L.t('lottery.zh126')}}</button>
          </td>
          <td v-if="item.enable == 1">
            {{$L.t('bonusGame.NiuNiuBetManage.zh42')}}<br/>
            <button  class="popBtn" @click="enableChange(item.uid, 0)">{{$L.t('member.info70')}}</button>
          </td>
          <td>
            {{getLevelName(item.grade)}}
            <br>
            <button class="popBtn" @click="changeFcClcik(item)">{{$L.t('member.info72')}}</button>
          </td>

          <td class="win">
            {{item.coin}}
            <br>
            <button class="popBtn"
              @click="distinctClick(item)">{{$L.t('member.info73')}}</button>
          </td>
          <!-- <td>{{item.borrowMoney}}</td> -->
          <td class="win">{{item.fcoin}}</td>
          <td>{{item.yingkui}}</td>
          <td>{{item.score}}</td>
          <td>
              {{item.betsCodeSum}}
              <br><button class="popBtn"
              @click="dmClick(item)">{{$L.t('member.info66')}}</button>
          </td>
          <!-- <td>
            {{item.needBetsCode}}
          </td> -->
          <td>{{item.parentName}}</td>
          <td>- <br> <button class="popBtn"
              @click="xjClick(item)">{{$L.t('agent.agent_0.xj')}}</button>
          </td>
          <td><button class="popBtn"
              @click="logClick(item)">{{$L.t('member.info68')}}</button>
          </td>
          <td>
            {{item.source == 1 ? $L.t('member.info74') : item.source == 2 ? $L.t('member.info75') : $L.t('agent.agent_7.zwzc') }}
          </td>
          <td class="new" :style="{'color': rginterTimer(item.regTime) ? '#000' : ''}">
            {{item.regTime}}
          </td>
          <td>
            {{item.regFrom}}
          </td>
          <td>{{item.attach}}</td>
          <td>
            <span>
              <button class="popBtn" @click="czmmClick(item)">{{$L.t('member.info76')}}</button>
            </span>
            <span>
              <button class="popBtn" @click="resetPassword(item)">{{$L.t('member.info178')}}</button>
            </span>
            <span>
              <button class="popBtn" @click="editInfoClick(item)">{{$L.t('member.info77')}}</button>
            </span>
            <span>
              <button class="popBtn" @click="bankClick(item)">{{$L.t('member.info177')}}</button>
            </span>
            <br>
            <span>
              <button class="popBtn" @click="tsMoneyClick(item)">{{$L.t('member.info78')}}</button>
            </span>
            <span>
              <button class="popBtn" @click="projectClick(item)">{{$L.t('member.info79')}}</button>
            </span>
            <span>
              <button class="popBtn" @click="zsljClick(item)">{{$L.t('agent.agent_0.zsCj')}}</button>
            </span>
            <span>
              <button class="popBtn" @click="sdckClick(item)">{{$L.t('member.info80')}}</button>
            </span>
           <!--  <span>
              <button class="popBtn" @click="userSumClick(item)">用户统计</button>
            </span> -->
            <span>
              <button class="popBtn" @click="delectUser(item)">{{$L.t('delete')}}</button>
            </span>
            <span v-if="indexStore.topInfoData.data.updateName">
              <button class="popBtn" @click="setNameUser(item)">{{$L.t('member.info81')}}</button>
            </span>
          </td>
        </tr>
        <tr v-if="getPageData.sum == 0">
          <td colspan="19" style="text-align: center">{{$L.t('noData')}}</td>
        </tr>
        <tr>
          <td colspan="19">
            <page-limit v-if="getPageData.sum > 0" :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
            <p>{{$L.t('member.info82')}}</p></td>
        </tr>

      </tbody></table>

      <!-- 添加会员 -->
      <el-dialog
        :title="$L.t('member.info57')"
        :visible.sync="userVisible"
        :modal-append-to-body="userVisible"
        :append-to-body="userVisible"
        :modal="userVisible"
        width="600px">
        <div v-if="userVisible" class="form_container">
          <!-- <div class="formBox_title">添加会员</div> -->
          <ul>
            <li>
              <div class="formLi_title">
                {{$L.t('member.info179')}}
              </div>
              <div class="formLi_content">
                <select v-model="userForm.type">
                  <option value="0">{{$L.t('agent.agent_0.huiy')}}</option>
                  <option value="1">{{$L.t('agent.agent_0.dl')}}</option>
                  <option value="9">{{$L.t('member.info180')}}</option>
                </select>
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('table.username')}}
              </div>
              <div class="formLi_content">
                <input type="text" :placeholder="$L.t('agent.agent_1.import')" v-model="userForm.username">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('login.pwd')}}
              </div>
              <div class="formLi_content">
                <input type="password" :placeholder="$L.t('manager.info15')" v-model="userForm.password">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('member.info98')}}
              </div>
              <div class="formLi_content">
                <input type="password" :placeholder="$L.t('member.info181')" v-model="userForm.coinPassword">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li v-if="userForm.type == 1">
              <div class="formLi_title">
                {{$L.t('agent.agent_0.tjm')}}
              </div>
              <div class="formLi_content">
                <input type="number" :placeholder="$L.t('member.info182')" v-model="userForm.rCode">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li v-if="userForm.type == 1">
              <div class="formLi_title">
                {{$L.t('member.hylb_3.info7')}}
              </div>
              <div class="formLi_content">
                <input type="number" :placeholder="$L.t('member.hylb_3.info8')" v-model="userForm.fanDian">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <!-- 真人 -->
            <li v-if="userForm.type == 1">
              <div class="formLi_title">
                {{$L.t('member.hylb_3.info10')}}
              </div>
              <div class="formLi_content">
                <input type="number" :placeholder="$L.t('member.hylb_3.info9')" v-model="userForm.ag_type">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <!-- 电子 -->
            <li v-if="userForm.type == 1">
              <div class="formLi_title">
                {{$L.t('member.hylb_3.info11')}}
              </div>
              <div class="formLi_content">
                <input type="number" :placeholder="$L.t('member.hylb_3.info12')" v-model="userForm.pw_type">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <!-- 棋牌 -->
            <li v-if="userForm.type == 1">
              <div class="formLi_title">
                {{$L.t('member.hylb_3.info13')}}
              </div>
              <div class="formLi_content">
                <input type="number" placeholder="$L.t('member.hylb_3.info14')" v-model="userForm.ch_type">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <!-- 体育 -->
            <li v-if="userForm.type == 1">
              <div class="formLi_title">
                {{$L.t('member.hylb_3.info16')}}
              </div>
              <div class="formLi_content">
                <input type="number" placeholder="$L.t('member.hylb_3.info15')" v-model="userForm.st_type">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li v-if="userForm.type == 1">
              <div class="formLi_title">
                {{$L.t('member.hylb_3.info17')}}
              </div>
              <div class="formLi_content">
                <input type="number" placeholder="$L.t('member.hylb_3.info18')" v-model="userForm.mt_type">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li class="formLi_flex_btn" v-if="userForm.type == 1">
              <span @click="prevlVisible = true">{{$L.t('member.info183')}}>>></span>
            </li>
            <li>
              <button class="form_commit" @click="commitAddUser()">{{$L.t('submit')}}</button>
            </li>
          </ul>
        </div>
      </el-dialog>

      <!-- 关于降赔率返点设置说明 -->
      <el-dialog
        :title="$L.t('member.info86')"
        :visible.sync="prevlVisible"
        :modal-append-to-body="prevlVisible"
        :append-to-body="prevlVisible"
        :modal="prevlVisible"
        width="410px">
        <div class="hint_container">
          <p>
            1、 {{$L.t('member.info87')}}。
          </p>
          <p>
            2、 {{$L.t('member.info88')}}。
          </p>
          <p>
            3、 {{$L.t('member.info89')}}。
          </p>
        </div>
      </el-dialog>

      <!-- 批量调整分层 -->
      <el-dialog
        :title="$L.t('member.info58')"
        :visible.sync="allFcVisible"
        :modal-append-to-body="allFcVisible"
        :append-to-body="allFcVisible"
        :modal="allFcVisible"
        width="600px">
        <div v-if="allFcVisible" class="form_container">
          <div class="formBox_title">
            {{$L.t('member.info90')}}
          </div>
          <ul>
            <li>
              <div class="formLi_title">
                {{$L.t('member.info91')}}
              </div>
              <div class="formLi_content">
                <select v-model="formData.grade">
                  <option value="">{{$L.t('member.info92')}}</option>
                  <option
                    v-for="(item, index) in memberStore.levelAdminList.data.data"
                    :value="item.id">{{item.levelName}}</option>
                </select>
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li class="formLi_flexCenter">
              <button class="form_commit" @click="cimmitAllCheck()">{{$L.t('sure')}}</button>
              {{$L.t('member.info93')}}{{activeNum}}{{$L.t('agent.agent_0.huiy')}} ({{$L.t('member.info95')}})
            </li>
          </ul>

        </div>
      </el-dialog>

      <el-dialog
        :title="$L.t('member.info81')"
        :visible.sync="setNameVisible"
        :modal-append-to-body="setNameVisible"
        :append-to-body="setNameVisible"
        :modal="setNameVisible"
        width="500px">
        <div v-if="setNameVisible" class="form_container">
          <div class="formBox_title">{{$L.t('member.info81')}}</div>
          <ul>
            <li>
              <div class="formLi_title">
                {{$L.t('financial.zh101')}}
              </div>
              <div class="formLi_content">
                <input type="text" v-model="setNameObj.name">
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('member.info96')}}
              </div>
              <div class="formLi_content">
                <input type="text" :placeholder="$L.t('member.info184')" v-model="setNameObj.vercode">
              </div>
            </li>
            <li>
              <button class="form_commit" @click="saveUsernames">{{$L.t('fixed')}}</button>
            </li>
          </ul>
        </div>
      </el-dialog>
      <!-- 重置登陆密码 -->
      <el-dialog
        :title="$L.t('member.info97')"
        :visible.sync="codeVisible"
        :modal-append-to-body="codeVisible"
        :append-to-body="codeVisible"
        :modal="codeVisible"
        width="600px">
        <div v-if="codeVisible" class="form_container">
          <div class="formBox_title">{{$L.t('manager.info12')}}</div>
          <ul>
            <li>
              <div class="formLi_title">
                {{$L.t('login.pwd')}}
              </div>
              <div class="formLi_content">
                <input type="password" v-model="formData.password">
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('member.info98')}}
              </div>
              <div class="formLi_content">
                <input type="password" v-model="formData.repPassword">
              </div>
            </li>
            <li>
              <button class="form_commit" @click="formCommit('codeVisible')">{{$L.t('manager.info12')}}</button>
            </li>
          </ul>
        </div>
      </el-dialog>

      <!-- 调整分层 -->
      <el-dialog
        :title="$L.t('member.info72')"
        :visible.sync="changeFcVisible"
        :modal-append-to-body="changeFcVisible"
        :append-to-body="changeFcVisible"
        :modal="changeFcVisible"
        width="600px">
        <div v-if="changeFcVisible" class="form_container">
          <div class="formBox_title">{{$L.t('financial.zh104')}}: {{handleInfo.username}}</div>
          <ul>
            <li>
              <div class="formLi_title">
                {{$L.t('member.info91')}}
              </div>
              <div class="formLi_content">
                <select v-model="formData.grade">
                  <option
                    v-for="(item, index) in memberStore.levelAdminList.data.data"
                    :value="item.id">{{item.levelName}}</option>
                </select>
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li>
              <button class="form_commit" @click="formCommit('changeFcVisible')">{{$L.t('submit')}}</button>
            </li>
          </ul>
        </div>
      </el-dialog>

      <!-- 资料修改 -->
      <el-dialog
        :title="$L.t('member.info77')"
        :visible.sync="editInfoVisible"
        :modal-append-to-body="editInfoVisible"
        :append-to-body="editInfoVisible"
        :modal="editInfoVisible"
        width="700px">
        <div v-if="editInfoVisible" class="form_container">
          <div class="formBox_title">{{$L.t('financial.zh104')}}:{{editInfoVal.username}},{{$L.t('member.info99')}}: {{editInfoVal.name}}</div>
          <ul>
            <li>
              <div class="formLi_title">
                {{$L.t('table.nikename')}}
              </div>
              <div class="formLi_content">
                <input type="text" v-model="editInfoVal.nickname" :placeholder="$L.t('member.info100')">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>

            <li v-if="typeof(editInfoVal.mobile) != 'undefined'">
              <div class="formLi_title">
                {{$L.t('member.info101')}}
              </div>
              <div class="formLi_content">
                <input type="number" v-model="editInfoVal.mobile" :placeholder="$L.t('member.info102')">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li v-if="typeof(editInfoVal.mobile) != 'undefined'">
              <div class="formLi_title">
                QQ
              </div>
              <div class="formLi_content">
                <input type="number" v-model="editInfoVal.qq" :placeholder="$L.t('member.info103')">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li v-if="typeof(editInfoVal.mobile) != 'undefined'">
              <div class="formLi_title">
                {{$L.t('agent.agent_7.wechat')}}
              </div>
              <div class="formLi_content">
                <input type="text" v-model="editInfoVal.wechat" :placeholder="$L.t('member.info104')">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li v-if="typeof(editInfoVal.mobile) != 'undefined'">
              <div class="formLi_title">
                {{$L.t('agent.agent_7.email')}}
              </div>
              <div class="formLi_content">
                <input type="text" v-model="editInfoVal.email" :placeholder="$L.t('member.info105')">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('agent.agent_0.memberType')}}
              </div>
              <div class="formLi_content">
                <select v-model="editInfoVal.type">
                  <option value="0">{{$L.t('agent.agent_0.huiy')}}</option>
                  <option value="1">{{$L.t('agent.agent_0.dl')}}</option>
                  <option value="9" v-if="editInfoVal.type*1 == 9">{{$L.t('agent.agent_7.csh')}}</option>
                </select>
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>

            <li>
              <div class="formLi_title">
                {{$L.t('member.info106')}}
              </div>
              <div class="formLi_content">
                <select v-model="editInfoVal.exclass_id">
                  <option v-for="(item,index) in memberStore.claslist.data.data" :key="index" :value="item.id">
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
                {{$L.t('member.info54')}}
              </div>
              <div class="formLi_content">
                <el-radio v-model="editInfoVal.isEnjoy" label="1">{{$L.t('true')}}</el-radio>
                <el-radio v-model="editInfoVal.isEnjoy" label="0">{{$L.t('false')}}</el-radio>
              </div>
              <div class="formLi_hint">
                * {{$L.t('member.info107')}}
              </div>
            </li>

            <li>
              <div class="formLi_title">
                {{$L.t('member.info108')}}
              </div>
              <div class="formLi_content">
                <el-radio v-model="editInfoVal.isBet" label="1">{{$L.t('true')}}</el-radio>
                <el-radio v-model="editInfoVal.isBet" label="0">{{$L.t('false')}}</el-radio>
              </div>
              <div class="formLi_hint">
                * {{$L.t('member.info109')}}
              </div>
            </li>

            <li v-if="editInfoVal.type*1 == 1">
              <div class="formLi_title">
                {{$L.t('member.info111')}}
              </div>
              <div class="formLi_content">
                <el-radio v-model="editInfoVal.isFanDian" label="1">{{$L.t('open')}}</el-radio>
                <el-radio v-model="editInfoVal.isFanDian" label="0">{{$L.t('member.info112')}}</el-radio>
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>

            <li>
              <div class="formLi_title">
                {{$L.t('member.info113')}}
              </div>
              <div class="formLi_content">
                <input type="text" v-model="editInfoVal.redCount" :placeholder="$L.t('member.info114')">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('member.info115')}}
              </div>
              <div class="formLi_content">
                <input type="text" v-model="editInfoVal.editNameCount" :placeholder="$L.t('member.info116')">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('member.hylbCopy.info3')}}
              </div>
              <div class="formLi_content">
                <input type="text" v-model="editInfoVal.needBetsCode" :placeholder="$L.t('member.info83')">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('table.cprebates')}}
              </div>
              <div class="formLi_content">
                <input type="text" v-model="editInfoVal.fanDian" :placeholder="$L.t('agent.agent_0.plhcp')">
              </div>
              <!-- <div class="formLi_hint">* <span>返点不能大于11.00,并且不能小于1.00</span></div> -->
            </li>
            <!-- 真人 -->
            <li>
              <div class="formLi_title">
                {{$L.t('table.zrrebates')}}
              </div>
              <div class="formLi_content">
                <input type="text" v-model="editInfoVal.ag_type" :placeholder="$L.t('agent.agent_0.plhzr')">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <!-- 电子 -->
            <li>
              <div class="formLi_title">
                {{$L.t('table.dzrebates')}}
              </div>
              <div class="formLi_content">
                <input type="text" v-model="editInfoVal.pw_type" :placeholder="$L.t('agent.agent_0.plhdz')">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <!-- 棋牌 -->
            <li>
              <div class="formLi_title">
                {{$L.t('table.qprebates')}}
              </div>
              <div class="formLi_content">
                <input type="text" v-model="editInfoVal.ch_type" :placeholder="$L.t('agent.agent_0.plhqp')">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('table.tyrebates')}}
              </div>
              <div class="formLi_content">
                <input type="text" v-model="editInfoVal.st_type" :placeholder="$L.t('agent.agent_0.plhty')">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('table.djrebates')}}
              </div>
              <div class="formLi_content">
                <input type="text" v-model="editInfoVal.mt_type" :placeholder="$L.t('agent.agent_0.plhdj')">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('member.info117')}}
              </div>
              <div class="formLi_content">
                <input type="password" v-model="editInfoVal.coinPassword">
              </div>
              <div class="formLi_hint">
                {{$L.t('member.info118')}}
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('table.remark')}}
              </div>
              <div class="formLi_content">
                <textarea class="text-content" :placeholder="$L.t('member.hylb_3.info19')" v-model="editInfoVal.attach"></textarea>
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li>
              <button class="form_commit" @click="formCommit('editInfoVisible')">{{$L.t('submit')}}</button>
            </li>
          </ul>
        </div>
      </el-dialog>

      <!-- 打码量-->
      <el-dialog
        :title="$L.t('member.info66')"
        :visible.sync="dmVisible"
        :modal-append-to-body="dmVisible"
        :append-to-body="dmVisible"
        :modal="dmVisible"
        width="700px">
        <div v-if="dmVisible" class="table_container">
          <ul>
            <li v-for="(item, index) in memberStore.ximaInfoData.data.data">
              <div class="table_title_30">{{item.name}}</div>
              <div class="table_number">{{item.AllBet}}</div>
              <div>
                <button @click="dmDetailClick(item)">{{$L.t('bonusGame.MoneyQuery.zh14')}}</button>
              </div>
            </li>
            <li>
              <div class="table_title_30">{{$L.t('chessGame.zh12')}}</div>
              <div class="table_number color-red">{{memberStore.ximaInfoData.data.zjBet || '0'}}</div>
            </li>
            <li v-if="!memberStore.ximaInfoData.data.data">
              <div style="justify-content: center">{{$L.t('noData')}}</div>
            </li>
          </ul>
        </div>
      </el-dialog>
      <!-- 打码量 数据详情 -->
      <el-dialog
        :title="$L.t('bonusGame.MoneyQuery.zh14')"
        :visible.sync="dmDetailVisibile"
        :modal-append-to-body="dmDetailVisibile"
        :append-to-body="dmDetailVisibile"
        :modal="dmDetailVisibile"
        width="1200px">
          <order-detail v-if="dmDetailVisibile" :paramsData="dmDetailParmas"></order-detail>
      </el-dialog>
      <!-- 下级 -->
      <el-dialog
        :title="$L.t('agent.agent_0.xj')"
        :visible.sync="xjVisible"
        :modal-append-to-body="xjVisible"
        :append-to-body="xjVisible"
        :modal="xjVisible"
        width="1200px">
        <div v-if="xjVisible" class="model_table table_550">
          <table class="table">
            <tbody>
              <tr class="head">
                <td>{{$L.t('chessGame.zh26')}}</td>
                <td>{{$L.t('table.name')}}</td>
                <td>{{$L.t('table.status')}}</td>
                <td>{{$L.t('member.info61')}}</td>
                <td>{{$L.t('table.yue')}}</td>
                <td>{{$L.t('member.info62')}}</td>
                <td>{{$L.t('chessGame.zh10')}}</td>
                <td>{{$L.t('chatRoom.zh83')}}</td>
              </tr>
              <tr class="odd" v-for="(item, index) in memberStore.userLowerList.data.data" :key="index">
                <td  :class="{'color-red': item.usertype == 9}">{{item.username}}</td>
                <td>{{item.name || '-'}}</td>
                <td>{{item.enable == 1 ? $L.t('bonusGame.NiuNiuBetManage.zh42') : $L.t('member.info70')}}</td>
                <td>{{getLevelName(item.grade)}}</td>
                <td class="color-red">{{item.coin || 0}}</td>
                <td class="color_green_c">{{item.fcoin || 0}}</td>
                <td :class="item.yingkui > 0 ? 'color-red' : 'color-green'">{{item.yingkui || 0}}</td>
                <td>{{item.score || 0}}</td>
              </tr>
              <tr class="info_none" v-if="getLowerData.sum == 0">
                <td colspan="8">
                  {{$L.t('noData')}}
                </td>
              </tr>
              <tr class="info_page" v-if="getLowerData.sum > 0">
                <td colspan="8">
                  <page-limit :pageData="getLowerData" @handlePage="handleLowerPage"></page-limit>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </el-dialog>

      <el-dialog
        :title="$L.t('member.info78')"
        :visible.sync="tsVisible"
        :modal-append-to-body="tsVisible"
        :append-to-body="tsVisible"
        :modal="tsVisible"
        width="1200px">
        <div class="user_detail" v-if="tsVisible">
          <table class="table" v-if="userSumList">
            <tbody>
              <tr>
                <td class="td1">{{$L.t('table.username')}}</td>
                <td class="td2">
                  {{userSumList.username || '-'}}
                </td>
              </tr>
              <tr>
                <td class="td1">{{$L.t('table.yue')}}</td>
                <td class="td2">{{userSumList.coin || 0}}</td>
              </tr>
              <tr>
                <td class="td1">{{$L.t('agent.agent_0.betAll')}}</td>
                <td class="td2">{{userSumList.betAmount || 0}}</td>
              </tr>
              <tr>
                <td class="td1">{{$L.t('agent.agent_8.zh91')}}</td>
                <td class="td2">{{userSumList.zjAmount || 0}}</td>
              </tr>
              <tr>
                <td class="td1">{{$L.t('common.cz')}}</td>
                <td class="td2">{{userSumList.rechargeAmount || 0}}</td>
              </tr>
              <tr>
                <td class="td1">{{$L.t('common.tx')}}</td>
                <td class="td2">{{userSumList.cashAmount || 0}}</td>
              </tr>
              <tr>
                <td class="td1">{{$L.t('common.youhui')}}</td>
                <td class="td2">{{userSumList.activeAmount || 0}}</td>
              </tr>
              <tr>
                <td class="td1">{{$L.t('agent.agent_8.zh73')}}</td>
                <td class="td2">{{userSumList.brokerageAmount || 0}}</td>
              </tr>
              <tr>
                <td class="td1">{{$L.t('chatRoom.zh83')}}</td>
                <td class="td2">{{userSumList.score || 0}}</td>
              </tr>
              <tr>
                <td class="td1">{{$L.t('member.info120')}}</td>
                <td class="td2">{{userSumList.allCount || 0}}</td>
              </tr>
            </tbody>
          </table>
          <table class="table" v-if="memberStore.userAmountList.data">
            <tbody>
            <tr>
              <td class="td1">{{$L.t('member.info30')}}</td>
              <td class="td2">{{$L.t('table.yue')}}</td>
              <td @click="sxCoinFn" style="color:red;cursor: pointer;"><a>{{$L.t('member.info121')}}</a></td>
            </tr>
            <tr v-for="x in memberStore.userAmountList.data">
              <td>{{x.name}}</td>
              <td class="balance" id="SP">
                <span style="color: red;" v-if="!memberStore.balanceLoading">{{x.money}}</span>
                <i v-if="memberStore.balanceLoading" class="el-icon-loading"></i>
              </td>
              <td><a style="color:#0066cc;" @click="recycleFund(x)">{{$L.t('member.info122')}}</a></td>
            </tr>
            </tbody>
          </table>
        </div>
      </el-dialog>

      <!-- 项目汇总 -->
      <el-dialog
        :title="$L.t('member.info79')"
        :visible.sync="projectVisible"
        :modal-append-to-body="projectVisible"
        :append-to-body="projectVisible"
        :modal="projectVisible"
        width="1200px">
        <project-sum v-if="projectVisible" :typeData="modelParmas"></project-sum>
      </el-dialog>
      <!-- 资金流水 -->
      <el-dialog
        :title="$L.t('member.info73')"
        :visible.sync="distinctVisible"
        :modal-append-to-body="distinctVisible"
        :append-to-body="distinctVisible"
        :modal="distinctVisible"
        width="1250px">
        <fund-water v-if="distinctVisible" :typeData="modelParmas"></fund-water>
      </el-dialog>

      <!-- 手动存款 -->
      <el-dialog
        :title="$L.t('member.info80')"
        :visible.sync="sdckVisible"
        :modal-append-to-body="sdckVisible"
        :append-to-body="sdckVisible"
        :modal="sdckVisible"
        width="700px">
        <div v-if="sdckVisible" class="form_container">
          <ul>
            <li>
              <div class="formLi_title">
                {{$L.t('member.info123')}}
              </div>
              <div class="formLi_content">
                <input type="text" :value="handleInfo.username" readonly>
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('member.info124')}}
              </div>
              <div class="formLi_content">
                <input type="number" v-model="formData.payPrice" :placeholder="$L.t('member.hylbCopy.info4')">
              </div>
              <div class="formLi_hint">
                {{$L.t('member.info185')}}
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('member.info126')}}
              </div>
              <div class="formLi_content">
                <select v-model="formData.recharge">
                  <option value="1">{{$L.t('chatRoom.zh82')}}</option>
                  <option value="0">{{$L.t('member.info127')}}</option>
                </select>
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('member.info128')}}
              </div>
              <div class="formLi_content">
                <input type="number" v-model="formData.rechargeValue" :placeholder="$L.t('member.info129')">
              </div>
              <div class="formLi_hint">
                % {{$L.t('member.info130')}}
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('member.info66')}}
              </div>
              <div class="formLi_content">
                <select v-model="formData.xmNumber">
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
                <input type="text" v-model="formData.remark" :placeholder="$L.t('member.hylb_3.info29')">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li>
              <button class="form_commit" @click="formCommit('sdckVisible')">{{$L.t('submit')}}</button>
            </li>
          </ul>
        </div>
      </el-dialog>

      <!-- 赠送礼金 -->
      <el-dialog
        :title="$L.t('member.info134')"
        :visible.sync="zsljVisible"
        :modal-append-to-body="zsljVisible"
        :append-to-body="zsljVisible"
        :modal="zsljVisible"
        width="700px">
        <div v-if="zsljVisible" class="form_container">
          <ul>
            <li>
              <div class="formLi_title">
                {{$L.t('member.info123')}}
              </div>
              <div class="formLi_content">
                <input type="text" :value="handleInfo.username" readonly>
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('member.info124')}}
              </div>
              <div class="formLi_content">
                <input type="number" v-model="formData.payPrice" :placeholder="$L.t('member.hylb_3.info30')">
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
                <select v-model="formData.xmNumber">
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
                <input type="text" v-model="formData.remark" :placeholder="$L.t('member.hylb_3.info29')">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li>
              <button class="form_commit" @click="formCommit('zsljVisible')">{{$L.t('submit')}}</button>
            </li>
          </ul>
        </div>
      </el-dialog>

      <!-- 登录日志 -->
      <el-dialog
        :title="$L.t('member.info138')"
        :visible.sync="logVisible"
        :modal-append-to-body="logVisible"
        :append-to-body="logVisible"
        :modal="logVisible"
        width="1200px">
        <div v-if="logVisible" class="model_table table_550 log_content">
          <table class="table">
            <tbody>
              <tr class="head">
                <td>{{$L.t('chessGame.zh26')}}</td>
                <td>IP/{{$L.t('member.info139')}}</td>
                <td>{{$L.t('agent.agent_8.zh41')}}</td>
                <td>{{$L.t('member.info186')}}</td>
                <td>{{$L.t('member.info140')}}</td>
              </tr>
              <tr class="odd" v-for="(item, index) in memberStore.userMoreLogList.data.data" :key="index">
                <td  :class="{'color-red': item.usertype == 9}">{{item.username}}</td>
                <td class="pointer" @click="logIpCommit(item.loginIP)">
                  <span class="color-blue_c">{{item.loginIP}}</span>
                  {{item.loginIPcountry + item.loginIParea}}
                </td>
                <td>{{getDevice(item.loginFrom)}}</td>
                <td>
                  {{timeMins(new Date(item.loginTime * 1000))}}
                </td>
                <td>{{item.loginDomain}}</td>
              </tr>
              <tr class="info_none" v-if="getMoreLogData.sum == 0">
                <td colspan="5">{{$L.t('noData')}}</td>
              </tr>
              <tr class="info_page" v-if="getMoreLogData.sum > 0">
                <td colspan="5">
                  <page-limit :pageData="getMoreLogData" @handlePage="handleMoreLogPage"></page-limit>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </el-dialog>

      <!-- 银行卡 -->
      <el-dialog
        :title="$L.t('member.info177')"
        :visible.sync="bankVisible"
        :modal-append-to-body="bankVisible"
        :append-to-body="bankVisible"
        :modal="bankVisible"
        width="1200px">
        <div v-if="bankVisible" class="model_table table_550">
          <div class="bank_btn">
            <button @click="addUserBank()">{{$L.t('member.info141')}}</button>
          </div>
          <div class="formBox_title">{{$L.t('table.username')}}: {{handleInfo.username}}</div>
          <table class="table">
            <tbody>
              <tr class="head">
                <td>{{$L.t('table.username')}}</td>
                <td>{{$L.t('member.info142')}}</td>
                <td>{{$L.t('table.bankId')}}</td>
                <td>{{$L.t('table.khName')}}</td>
                <td>{{$L.t('table.khhang')}}</td>
                <td>{{$L.t('member.info143')}}</td>
                <td>{{$L.t('financial.zh85')}}</td>
              </tr>
              <tr class="odd" v-for="(item, index) in memberStore.userBankList.data.data" :key="index">
                <td>{{item.userAccount}}</td>
                <td>{{item.bankName}}</td>
                <td>{{item.account}}</td>
                <td  :class="{'color-red': item.usertype == 9}">{{item.username}}</td>
                <td>{{item.countname}}</td>
                <td>{{item.is_default == 1 ?$L.t('member.info145') : $L.t('member.info146')}}</td>
                <td>
                  <button @click="editUserBank(item)">{{$L.t('financial.zh104')}}</button>
                  <button @click="delUserBank(item)">{{$L.t('delete')}}</button>
                </td>
              </tr>
              <tr class="info_none" v-if="getBankData.sum == 0">
                <td colspan="7">{{$L.t('noData')}}</td>
              </tr>
              <tr class="info_page" v-if="getBankData.sum > 0">
                <td colspan="7">
                  <page-limit :pageData="getBankData" @handlePage="bankPage"></page-limit>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </el-dialog>

      <!-- 添加/修改银行卡 -->
      <el-dialog
        :title="bankTitle"
        :visible.sync="addBankVisible"
        :modal-append-to-body="addBankVisible"
        :append-to-body="addBankVisible"
        :modal="addBankVisible"
        width="600px">
        <div v-if="addBankVisible" class="form_container">
          <!-- <div class="formBox_title">{{bankTitle}}</div> -->
          <ul>
            <li>
              <div class="formLi_title">
                {{$L.t('member.info147')}}
              </div>
              <div class="formLi_content">
                <input type="text" v-model="bankFormData.username" :placeholder="$L.t('member.info148')" :disabled="bankInputDisable">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('member.info149')}}
              </div>
              <div class="formLi_content">
                <select v-model="bankFormData.bankId">
                  <option value="">{{$L.t('member.info150')}}</option>
                  <option
                    v-for="(item, index) in memberStore.bankDataList.data.banks"
                    :key="index"
                    :value="item.id">
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
                {{$L.t('member.info151')}}
              </div>
              <div class="formLi_content">
                <input type="text" v-model="bankFormData.countname" :placeholder="$L.t('member.info152')">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('member.info153')}}
              </div>
              <div class="formLi_content">
                <input type="number" v-model="bankFormData.account" :placeholder="$L.t('member.info154')">
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li>
              <div class="formLi_title">
                {{$L.t('member.info143')}}
              </div>
              <div class="formLi_content">
                <select v-model="bankFormData.is_default">
                  <option value="1">{{$L.t('member.info145')}}</option>
                  <option value="0">{{$L.t('member.hylb_3.info31')}}</option>
                </select>
              </div>
              <div class="formLi_hint">
                *
              </div>
            </li>
            <li>
              <button class="form_commit" @click="bankCommit()">{{$L.t('submit')}}</button>
            </li>
          </ul>
        </div>
      </el-dialog>
    <!--导出数据-->
    <el-dialog
      :title="$L.t('lottery.zh45')"
      class="confirmModel dataSend"
      :visible.sync="exportDataVisible"
      :modal-append-to-body="exportDataVisible"
      :append-to-body="exportDataVisible"
      :modal="exportDataVisible"
      width="450px">
       <div class="model-main">
         {{$L.t('member.info155')}}
       </div>
        <div class="model-input">
          <span>{{$L.t('lottery.zh53')}}：</span>
          <input type="text" :placeholder="$L.t('lottery.zh54')" v-model="exportObj.vercode">
        </div>
        <div class="ser_list" style="height:305px">
          <p>{{$L.t('lottery.zh55')}}: &nbsp
            <label @click="chooseAll">
              <input id="quan" type="checkbox" v-model="chooseAllData">
              {{$L.t('agent.agent_1.allSelect')}}
            </label>
          </p>
          <label class="label-choose" v-for="(item, index) in exportTypeList">
            <div>
                <input type="checkbox" :value="item.id" v-model="item.active">
                {{item.title}}
            </div>
          </label>&nbsp
        </div>
        <div class="model-footer-btn">
          <button @click="exportDataVisible = false">{{$L.t('cancel')}}</button>
          <button @click="exportData()" :disabled="exportSuccess === 1">{{$L.t('sure')}}</button>
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

  import {mapState, mapMutations, mapActions} from 'vuex';
  import {getDate,setDate,copyobj,setSession,getSession,getchar,dateDiff} from '@/common/common'
  export default {
    props: ['allUserNameSum'],
    data () {
      return {
        diyDays:'hylb',
        exportDataVisible:false, // 导出数据弹窗
        exportObj:{
          vercode:'', // 安全盾
        },
        exportSuccess:0,
        sendParmas: {
          page: 1,
          limit: 20,
          data: {
            fromTime: '',
            toTime: '',
            username:'',
            isAgent:'0'
          }
        },
        rechargeLimit:'=',
        rechargeNumber:'',
        selectKey: 'username',
        selectInput: '',
        allChecked: false,
        // 下级代理
        lowerParmas: {
          page: 1,
          limit: 20,
          data: {},
        },
        // 日志
        moreLogParmas: {
          uid: '',
          ip: '',
          page: 1,
          limit: 10
        },
        // 弹窗状态
        codeVisible: false,
        editInfoVisible: false,
        changeFcVisible: false,
        distinctVisible: false,
        // 打码量  下级
        dmVisible: false,
        xjVisible: false,
        tsVisible: false,
        sdckVisible: false,
        zsljVisible: false,
        projectVisible: false,
        logVisible: false,
        bankVisible: false,
        addBankVisible: false,
        allFcVisible: false,
        days:'',
        // 当前用户信息
        handleInfo: {},
        // 表单对象
        formData: {
          payPrice: '',
          xmNumber: '',
          recharge: '',
          rechargeValue: '',
          grade: '',
          password: '',
          repPassword: '',
          remark: '',
        },
        // 修改资料对象
        editInfoVal: {
          uid: '',
          type: '',
          name: '',
          username: '',
          mobile: '',
          nickname: '',
          qq: '',
          wechat: '',
          isEnjoy:'',
          isBet:'',
          exclass_id:'',
          coinPassword: '',
          fanDian: '',
          needBetsCode: '',
          attach: '',
          email: '',
          redCount: '',
          editNameCount:'',
          isFanDian:1,
          ch_type:'',
          ag_type:'',
          pw_type:'',
          st_type:'',
          mt_type:''
        },
        // 银行卡参数
        bankParmas: {
          uid: '',
          page: 1,
          limit: 20,
        },
        bankTitle: '',
        bankInputDisable:false,  // 真实姓名锁定
        bankInputName:'',  // 银行卡操作真实姓名
        // 添加修改银行卡
        bankFormData: {
          uid: '',
          bankId: '',
          username: '',
          account: '',
          countname: '',
          is_default: 1,
        },
        // 添加会员
        userVisible: false,
        prevlVisible: false,
        userSumVisible: false,
        userSumList: {},
        userForm: {
          type: '',
          username: '',
          password: '',
          coinPassword: '',
          rCode: '',
          fanDian: '',
          ch_type:'',
          ag_type:'',
          pw_type:'',
          st_type:'',
          mt_type:''
        },
        // 组件传递 参数
        modelParmas: {
          username: '',
          type: 2,
          fromTime: '',
          toTime: '',
        },
        // 提示弹窗
        confirmVisible: false,
        confirmContent: '',
        // 调用提示弹窗事件 储存值已备确定事件使用
        confirmInfo: {},
        // 用来判断是点击那种类型调用的弹窗
        confirmType: '',
        // 打码量详情
        dmDetailVisibile: false,
        dmDetailParmas: {},
        // uid
        codeUid:'',
        //  修改真实姓名
        setNameVisible:false,
        setNameObj:{
          uid:'',
          name:'',
          vercode:''
        },
        // 导出条件
        chooseAllData:true,
        exportTypeList: [
          {id: 1, title: this.$L.t('chessGame.zh26'),name:'username', active: true},
          {id: 2, title: this.$L.t('table.name'), name:'name',active: true},
          {id: 3, title: this.$L.t('table.yue'), name:'coin', active: true},
          {id: 4, title: this.$L.t('member.info64'),  name:'rechargeAmount',active: true},
          {id: 5, title: this.$L.t('member.info65'),  name:'cashAmount',active: true},
          {id: 6, title: this.$L.t('table.sjYK'),  name:'yingkui',active: true},
          {id: 7, title: this.$L.t('member.info149'), name:'bankId', active: true},
          {id: 8, title:  this.$L.t('table.khhang'), name:'countname', active: true},
          {id: 9, title: this.$L.t('member.info41'), name:'account', active: true},
          {id: 10, title: this.$L.t('table.superior'), name:'parentName', active: true},
          {id: 11, title: this.$L.t('member.info156'), name:'mobile', active: true},
          {id: 12, title: this.$L.t('agent.agent_7.wechat'), name:'wechat', active: true},
          {id: 13, title: 'qq', name:'qq', active: true},
          {id: 14, title: this.$L.t('agent.agent_0.memberType'), name:'type', active: true},
          {id: 15, title: this.$L.t('agent.agent_7.email'), name:'email', active: true},
          {id: 16, title: this.$L.t('member.info157'), name:'regTime', active: true},
          {id: 17, title: this.$L.t('manager.info5'), name:'lastLogin', active: true},
        ],
        chooseData:[],
        showLogData:{
          fromTime:'',
          toTime:''
        }
      }
    },
    watch: {
      'memberStore.userList.data.data' (newValue) {
        this.allChecked = false
      },
      $route (to, from) {
        // console.log(to, from)
        if (to.name == from.name) {
          // console.log(1111)
          this.selectInput = ''
          this.searchCommit()
        }
      },
        // 监听单选时取消全选
      exportTypeList: {
        handler(){
          for(let k in this.exportTypeList){
            if(this.exportTypeList[k].active == false){
              this.chooseAllData = false;
              break
            }else {
              this.chooseAllData = true;
            }
          }
        },
        deep: true
      }
    },
    created (){
      // console.log(this.allUserNameSum.isAgent);
      this.sendParmas.data.isAgent = this.allUserNameSum.isAgent
      this.lowerParmas.data['isAgent'] = this.allUserNameSum.isAgent

      this.sendParmas.data.username = this.allUserNameSum.name || this.$route.query.username || ''
      this.showLogData.fromTime = this.allUserNameSum.fromTime
      this.showLogData.toTime = this.allUserNameSum.toTime
      this.sendParmas.data.fromTime = this.allUserNameSum.fromTime
      this.sendParmas.data.toTime = this.allUserNameSum.toTime
      if(!this.sendParmas.data.fromTime){
        this.sendParmas.data.fromTime =  this.timeTool(new Date()) + ' 00:00:00'
      }
      if(!this.sendParmas.data.toTime){
        this.sendParmas.data.toTime = this.timeTool(new Date()) + ' 23:59:59'
      }
      // 深拷贝对象
      let data = this.copyObj(this.sendParmas)
      // 条件
      if(this.allUserNameSum.sumData == 'detail1'){
        data.data['accessCount'] = 1
      }

      this.getUserLists(data)
      this.getLevel()
      this.getBankDataList()
      this.getUseClaslist(this.sendParmas)
    },
    methods: {
      ...mapMutations([
        'setBalanceLoading'
      ]),
      ...mapActions([
        'getUserLists',
        'getUserLowerList',
        'getEnable',
        'updatePassword',
        'getLevel',
        'updateLevel',
        'moneyRechargeAction',
        'updateUser',
        'getUserAmount',
        'userBackAgency',
        'updateUserDelete',
        'moneyCaijinAction',
        'getUserMoreLog',
        'getUserBankList',
        'getBankDataList',
        'userUpdateBank',
        'deleteMemberBank',
        'getXimaInfoData',
        'resetHandPass',
        'addUserAction',
        'setUsersLevel',
        'getBetInfo',
        'getUserDetailAmount',
        "settingUpdateName",
        'getCashExcel',
        "getUseClaslist"
      ]),
//      修改真实姓名
      setNameUser(i){
        this.setNameObj.vercode = ''
        this.setNameObj.uid = i.uid
        this.setNameObj.name = i.name
        this.setNameVisible = true
      },
      saveUsernames(){
        if(!this.setNameObj.vercode || !this.setNameObj.name){
          this.$message(this.$L.t('member.info160'))
          return
        }
        this.settingUpdateName(this.setNameObj).then(()=>{
          this.setNameVisible = false
          this.getUserLists(this.getHeadParmas())
        })
      },

      // 搜索栏条件切换
      headSelect (val) {
        this.selectInput = ''
        if(val == 'accessCount'){
          this.selectInput = '1'
        }
      },
      // 返回分层等级
      getLevelName (id) {
        let data = this.memberStore.levelAdminList.data.data
        let name = ''
        for (let k in data){
          if (id == data[k].id) {
            name = data[k].levelName
            break
          } else {
            name = this.$L.t('member.info159')
          }
        }
        return name
      },
      // 返回资金类型名称
      getLiqName (key) {
        let data = this.memberStore.appCoinLogList.data.liqTypeName
        for (let k in data) {
          if (k == key) {
            return data[k]
          }
        }
      },
      // 清空表单内容
      clearForm () {
        for (let k in this.formData) {
          this.formData[k] = ''
        }
      },
      clearEditInfo () {
        for (let k in this.editInfoVal) {
          this.editInfoVal[k] = ''
        }
      },
      getSearchTimer(start, end){
        this.sendParmas.data.fromTime = start
        this.sendParmas.data.toTime = end
        // console.log(this.sendParmas)
      },
      // 全选
      allCheck (type) {
        let data = this.memberStore.userList.data.data
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
        let data = this.memberStore.userList.data.data
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
      sendData(){
        this.exportDataVisible = true
        this.exportObj.vercode = ''
        for(let k in this.exportTypeList){
          this.exportTypeList[k].active = true
        }
      },
      // 全选
      chooseAll(e){
        if(e.target.checked){
          for(let key in this.exportTypeList){
            this.exportTypeList[key].active = true
            this.chooseData.push(this.exportTypeList[key].active);
          }
        }else{
          for(let key in this.exportTypeList){
            this.exportTypeList[key].active = false
            this.chooseData = []
          }
        }
      },
      // 导出数据
      exportData(){
        let list  = this.exportTypeList.filter(res=>res.active)
          let rows = []
          let obj = {}
          for(let k in list){
            obj[list[k].name] = list[k].title
          }

          if(JSON.stringify(obj) == "{}"){
            for(let k in this.exportTypeList){
              obj[this.exportTypeList[k].name] = ''
            }
          }
        if(!this.exportObj.vercode){
          this.$message(this.$L.t('lottery.zh54'))
          return
        }
        let exportDataObj = this.getHeadParmas()
        exportDataObj.vercode = this.exportObj.vercode
         exportDataObj.rows = obj
        this.getCashExcel(exportDataObj).then(res=>{
          if(res.code == 0){
            this.exportObj.vercode = ''
            this.exportDataVisible = false
            let blob = new Blob([res.data.table], {
              // type: 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
              type:'application/vnd.ms-excel'
            })
            if (window.navigator.msSaveOrOpenBlob) {
              navigator.msSaveBlob(blob);
            } else {
              let elink = document.createElement('a');
              elink.download = res.data.filename+'.xls';
              elink.style.display = 'none';
              elink.href = URL.createObjectURL(blob);
              document.body.appendChild(elink);
              elink.click();
              document.body.removeChild(elink);
            }
          }else{
            this.$message(res.message)
          }
        })
        this.exportSuccess = 1
        setTimeout(()=>{
          this.exportSuccess = 0
        },3000)
      },
      // 获取选中的len
      getActiveList () {
        let data = this.memberStore.userList.data.data
        let list = []
        for (let k in data) {
          if (data[k].checked) {
            list.push(data[k])
          }
        }
        return list
      },
      // 批量调整分层 提交选中
      commitCheck () {
        let list = this.getActiveList()
        if (list.length > 0) {
          this.allFcVisible = true
          this.formData.grade = ''
        }
      },
      // 提交
      cimmitAllCheck () {
        let list = this.getActiveList()
        let arr = list.map((res) => {
          return res.uid
        })
        if (this.formData.grade.toString() == '') {
          this.$message(this.$L.t('member.info162'))
          return false
        }
        this.setUsersLevel({
          grade: this.formData.grade,
          ids: arr.join(',')
        }).then(() => {
          // 更新会员列表
          this.getUserLists(this.getHeadParmas())
          this.allFcVisible = false
        })
      },
      // 添加会员弹窗
      addUser () {
        this.userVisible = true
        for (let k in this.userForm) {
          this.userForm[k] = ''
        }
        this.userForm.type = 0
      },
      // 添加会员提交
      commitAddUser () {
        // console.log(this.userForm)
        if (!this.userForm.username) {
          this.$message(this.$L.t('agent.agent_1.import'))
          return false
        }
        if (!this.userForm.password) {
          this.$message(this.$L.t('manager.info15'))
          return false
        }
        if (this.userForm.password != this.userForm.coinPassword) {
          this.$message(this.$L.t('member.info165'))
          return false
        }
        // 代理
        if (this.userForm.type == 1) {
          this.addUserAction({
            type: this.userForm.type,
            username: this.userForm.username,
            password: this.userForm.password,
            rCode: this.userForm.rCode,
            fanDian: this.userForm.fanDian,
            ch_type:this.userForm.ch_type,
            ag_type:this.userForm.ag_type,
            pw_type:this.userForm.pw_type,
            st_type:this.userForm.st_type,
            mt_type:this.userForm.mt_type
          }).then(() => {
            // 更新会员列表
            this.getUserLists(this.getHeadParmas())
            this.userVisible = false
          })
        } else {
          // 会员
          this.addUserAction({
            type: this.userForm.type,
            username: this.userForm.username,
            password: this.userForm.password
          }).then(() => {
            // 更新会员列表
            this.getUserLists(this.getHeadParmas())
            this.userVisible = false
          })
        }
      },
      // 深拷贝对象
      copyObj (obj) {
        let data = {}
        for (let k in obj) {
          if (typeof(obj[k]) == 'object') {
            data[k] = {...obj[k]}
          } else {
            data[k] = obj[k]
          }
        }
        return data
      },
      // 会员搜索
      searchCommit () {
        this.sendParmas.page = 1
        // this.sendParmas.limit = 20
        if(this.allUserNameSum.sumData == 'detail1'){
          this.sendParmas.data['accessCount'] = 1
        }
        // 更新参数
        this.getUserLists(this.getHeadParmas())
      },
      // 更新信息后 得到输入的参数
      getHeadParmas () {
        if(this.allUserNameSum.sumData == 'detail1'){
          this.sendParmas.data['accessCount'] = 1
        }
        let sendData = this.copyObj(this.sendParmas)
        if(this.rechargeNumber){
          sendData.data.firstPunch  = this.rechargeLimit + this.rechargeNumber
        }
        // 条件
        sendData.data[this.selectKey] = this.selectInput
        return sendData
      },
      // 冻结/启动
      enableChange (uid, enable) {
        this.getEnable({uid, enable}).then(() => {
          // 更新列表数据
          this.getUserLists(this.getHeadParmas())
        })
      },
      // 分页组件返回的参数
      handlePage (data) {
        // console.log(data)
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit

        if(this.allUserNameSum.sumData == 'detail1'){
          this.sendParmas.data['accessCount'] = 1
        }
        // 更新参数
        this.getUserLists(this.getHeadParmas())
      },
      // 调整分层
      changeFcClcik (item) {
        this.changeFcVisible = true
        this.handleInfo = item
        this.formData.grade = item.grade
      },
      // 明细
      distinctClick (item) {
        this.modelParmas.username = item.username
        this.modelParmas.type = 'all'
        this.modelParmas.fromTime = this.sendParmas.fromTime
        this.modelParmas.toTime = this.sendParmas.toTime
        this.distinctVisible = true
      },
      // 重置登陆密码
      czmmClick (item) {
        this.codeVisible = true
        this.handleInfo = item
        this.clearForm()
      },
      // 重置手势密码
      resetPassword (item) {
        this.confirmVisible = true
        this.confirmType = 'code'
        this.confirmContent = this.$L.t('member.info166')+`“${item.username}”`+this.$L.t('member.hylb_3.info32')
        this.confirmInfo = item
      },
      // 资料修改
      editInfoClick (item) {
        // 先清空数据
        this.clearEditInfo()
        this.editInfoVisible = true
        this.handleInfo = item
        for (let k in this.editInfoVal) {
          if (k != 'coinPassword') {
            this.editInfoVal[k] = item[k]
          }
        }
      },
      // 打码量
      dmClick (item) {
        this.dmVisible = true
        this.handleInfo = item
        this.codeUid = item.uid
        this.getXimaInfoData({uid: item.uid})
      },
      // 打码量详情
      dmDetailClick (item) {
        this.dmDetailVisibile = true
        this.dmDetailParmas.username = this.handleInfo.username
        this.dmDetailParmas.agency_id = item.id
        this.dmDetailParmas.uid = this.codeUid
      },
      // 下级
      xjClick (item) {
        this.xjVisible = true
        this.lowerParmas.page = 1
        this.lowerParmas.data['parent'] = item.username
        this.getUserLowerList(this.lowerParmas)
      },
      handleLowerPage (data) {
        this.lowerParmas.page = data.page
        this.lowerParmas.limit = data.limit
        this.getUserLowerList(this.lowerParmas)
      },
      // 日志
      logClick (item) {
        this.logVisible = true
        this.moreLogParmas.page = 1
        this.moreLogParmas.ip = ''
        this.moreLogParmas.uid = item.uid
        this.getUserMoreLog(this.moreLogParmas)
      },
      // 点击ip
      logIpCommit (ip) {
        this.moreLogParmas.page = 1
        this.moreLogParmas.uid = ''
        this.moreLogParmas.ip = ip
        this.getUserMoreLog(this.moreLogParmas)
      },
      handleMoreLogPage (data) {
        this.moreLogParmas.page = data.page
        this.moreLogParmas.limit = data.limit
        this.getUserMoreLog(this.moreLogParmas)
      },
      // 厅室余额
      tsMoneyClick (item) {
        this.tsVisible = true
        this.handleInfo = item
        this.getUserAmount({uid: item.uid, username: item.username})
        this.getUserDetailAmount({uid: item.uid}).then(res => {
          // console.log(res)
          this.userSumList = res
        })
      },
      sxCoinFn(){
        this.setBalanceLoading(true)
        this.getUserAmount({uid:this.handleInfo.uid,username:this.handleInfo.username})
      },
      // // 用户统计
      // userSumClick (item) {
      //   this.userSumVisible = true
      //   this.getUserDetailAmount({uid: item.uid}).then(res => {
      //     // console.log(res)
      //     this.userSumList = res
      //   })
      // },
      // 回收厅余额
      recycleFund (item) {
        if (item.money == 0) {
          this.$message(this.$L.t('member.info168'))
          return false
        }
        this.confirmVisible = true
        this.confirmType = 'fund'
        this.confirmContent = this.$L.t('member.info169')+`${item.name}“${item.money}”`+this.$L.t('table.zijin')
        this.confirmInfo = item
      },
      // 项目汇总
      projectClick (item) {
        this.modelParmas.username = item.username
        this.modelParmas.fromTime = this.sendParmas.fromTime
        this.modelParmas.toTime = this.sendParmas.toTime

        this.projectVisible = true
      },
      // 删除
      delectUser (item) {
        this.confirmVisible = true
        this.confirmType = 'user'
        this.confirmContent = this.$L.t('manager.info67')+`“${item.username}”`+this.$L.t('member.info170')
        this.confirmInfo = item
      },
      // 手动存款
      sdckClick (item) {
        this.handleInfo = item
        this.sdckVisible = true
        this.clearForm()
        this.formData.xmNumber = 1
        this.formData.recharge = 0
        this.formData.rechargeValue = 1
      },
      // 赠送礼金
      zsljClick (item) {
        this.zsljVisible = true
        this.handleInfo = item
        this.clearForm()
        this.formData.xmNumber = 1
      },
      // 提交按钮
      formCommit (type) {
        let uid = this.handleInfo.uid
        // 重置登陆密码
        if (type == 'codeVisible') {
          if (!this.formData.password || !this.formData.repPassword) {
            this.$message(this.$L.t('member.info171'))
            return false
          }
          if (this.formData.password != this.formData.repPassword) {
            this.$message(this.$L.t('member.info172'))
            return false
          }
          this.updatePassword({
            uid,
            password: this.formData.password
          }).then(() => {
            this.codeVisible = false
          })
        }
        // 调整分层
        if (type == 'changeFcVisible') {
          if (this.formData.grade == this.handleInfo.grade) {
            this.changeFcVisible = false
            return false
          }
          this.updateLevel({uid, grade: this.formData.grade}).then(() => {
            // 更新信息
            this.getUserLists(this.getHeadParmas())
            this.changeFcVisible = false
          })
        }
        // 手动充值 赠送礼金
        if (type == 'sdckVisible' || type == 'zsljVisible') {
          if (!this.formData.payPrice) {
            this.$message(this.$L.t('member.hylbCopy.info5'))
            return false
          }
          if (!this.formData.remark) {
            this.$message(this.$L.t('member.hylb_3.info19'))
            return false
          }
          if (type == 'sdckVisible') {
            if (this.formData.recharge == 1 && this.formData.rechargeValue.toString() == '') {
              this.$message(this.$L.t('member.info129'))
              return false
            }
            let value = this.formData.rechargeValue
            if (this.formData.recharge == 0 && this.formData.rechargeValue.toString() == '') {
              value = 1
            }
            this.moneyRechargeAction({
              username: this.handleInfo.username,
              amount: this.formData.payPrice,
              rechargeLargess: this.formData.recharge,
              rechargeLargessPt: value,
              xima: this.formData.xmNumber,
              comment: this.formData.remark
            }).then(() => {
              // 更新信息
              this.getUserLists(this.getHeadParmas())
              this.sdckVisible = false
            })
          }
          if (type == 'zsljVisible') {
            this.moneyCaijinAction({
              username: this.handleInfo.username,
              amount: this.formData.payPrice,
              xima: this.formData.xmNumber,
              comment: this.formData.remark,
            }).then(() => {
              // 更新信息
              this.getUserLists(this.getHeadParmas())
              this.zsljVisible = false
            })
          }

        }

        // 资料修改
        if (type == 'editInfoVisible') {
          let temp = {}
          for (let k in this.editInfoVal) {
            temp[k] = this.handleInfo[k]
          }
          if (JSON.stringify(this.editInfoVal) == JSON.stringify(temp)) {
            // 未修改 直接关闭
            this.editInfoVisible = false
            return false
          } else {
            if (this.editInfoVal.fanDian && this.editInfoVal.fanDian < 0) {
              this.$message(this.$L.t('member.info173'))
              return false
            }

            this.updateUser(this.editInfoVal).then(() => {
              // 更新信息
              this.getUserLists(this.getHeadParmas())
              this.editInfoVisible = false
            })
          }
        }

        // 资料修改
        if (type == 'editInfoVisible') {
          let temp = {}
          for (let k in this.editInfoVal) {
            temp[k] = this.handleInfo[k]
          }
          if (JSON.stringify(this.editInfoVal) == JSON.stringify(temp)) {
            // 未修改 直接关闭
            this.editInfoVisible = false
            return false
          } else {
            if (this.editInfoVal.fanDian && this.editInfoVal.fanDian < 0) {
              this.$message(this.$L.t('member.info173'))
              return false
            }
            this.updateUser(this.editInfoVal).then(() => {
              // 更新信息
              this.getUserLists(this.getHeadParmas())
              this.editInfoVisible = false
            })
          }
        }
      },
      // 弹窗 时间
      timeMins (d) {
        let year = d.getFullYear(),
            month =  d.getMonth() + 1,
            day = d.getDate(),
            hour = d.getHours(),
            mins = d.getMinutes();
        hour = hour < 10 ? '0' + hour : hour
        mins = mins < 10 ? '0' + mins : mins
        return `${year}-${month}-${day} ${hour}:${mins}`;
      },
      // 银行卡
      bankClick (item) {
        // console.log(item)
        this.handleInfo = item
        this.bankParmas.uid = item.uid
        this.bankFormData.uid = item.uid
        this.bankVisible = true
        // 初始化真实姓名
        this.bankInputName = ''

        if(item.name){
          this.bankInputName = item.name
          this.bankInputDisable = true
        }else{
          this.bankInputDisable = false
        }
        this.getUserBankList(this.bankParmas)

      },
      // 银行卡分页
      bankPage (data) {
        this.bankParmas.page = data.page
        this.bankParmas.limit = data.limit
        this.getUserBankList(this.bankParmas)
      },
      // 添加银行卡
      addUserBank () {
        this.bankTitle = this.$L.t('member.info174')
        this.addBankVisible = true

        // 添加标识
        this.handleInfo.isEdit = 0
        this.bankFormData.bankId = ''
        this.bankFormData.username = this.bankInputName || ''
        this.bankFormData.account = ''
        this.bankFormData.countname = ''
        this.bankFormData.is_default = 1
      },
      // 修改银行卡
      editUserBank (item) {
        this.bankTitle = this.$L.t('member.info175')
        this.addBankVisible = true
        this.bankInputDisable = true
        // 添加标识
        this.handleInfo.isEdit = 1
        this.handleInfo.bankId = item.id
        for (let k in this.bankFormData) {
          this.bankFormData[k] = item[k]
        }
      },
      delUserBank (item) {
        // console.log(item)
        this.confirmVisible = true
        this.confirmType = 'bank'
        this.confirmContent = this.$L.t('member.info176')+`“${item.account}”`+this.$L.t('member.info177')
        this.confirmInfo = item

      },
      // 银行卡提交
      bankCommit () {
        for (let k in this.bankFormData) {
          if (this.bankFormData[k].toString() == '') {
            this.$message(this.$L.t('lottery.zh104'))
            return false
          }
        }
        if (this.handleInfo.isEdit == 1) {
          // 修改
          let id = this.handleInfo.bankId
          let data = {id, ...this.bankFormData}
          this.userUpdateBank(data).then(() => {
            this.addBankVisible = false
            this.getUserBankList(this.bankParmas)
          })
        } else {
          // 添加
          this.userUpdateBank(this.bankFormData).then(() => {
            this.addBankVisible = false
            this.bankVisible = false
            this.getUserBankList(this.bankParmas)
            this.getUserLists(this.getHeadParmas())
          })
        }
      },
      // 注册时间
      rginterTimer (time) {
        let startTimer = this.timeTool(new Date(time))
        let endTimer = this.timeTool(new Date())
        let dateNum = dateDiff(startTimer,endTimer)
        // console.log(dateNum)
        if(dateNum > 30){
          return true;
        }
        return false
      },
      // 提示弹窗确定事件
      commitModel () {
        // console.log(this.confirmType)
        let item = this.confirmInfo
        // 重置手势密码
        if (this.confirmType == 'code') {
          this.resetHandPass({uid: item.uid}).then(() => {
            this.confirmVisible = false
          })
        }
        // 删除用户
        if (this.confirmType == 'user') {
          this.updateUserDelete({uid: item.uid}).then(() => {
            this.confirmVisible = false
            // 更新信息
            this.getUserLists(this.getHeadParmas())
          })
        }
        // 删除银行卡
        if (this.confirmType == 'bank') {
          this.deleteMemberBank({id: item.id}).then(() => {
            this.confirmVisible = false
            // 更新信息
            this.getUserBankList(this.bankParmas)
          })
        }
        // 回收资金
        if (this.confirmType == 'fund') {
          this.userBackAgency({
            uid: this.handleInfo.uid,
            id: item.id,
            gameCoin: item.money
          }).then(() => {
            this.confirmVisible = false
            this.getUserAmount({uid: this.handleInfo.uid, username: this.handleInfo.username})
          })
        }
      },
      // 转换成时间 yy-mm-dd
      timeTool(d){
        var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        return datetime;
      },
      getDevice(num) {
        let name = ''
        switch(num) {
          case '1': name = 'PC'; break;
          case '2': name = 'WAP'; break;
          case '3': name = 'ios'; break;
          case '4': name = 'Android'; break;
        }
        return name
      },
    },
    computed: {
      ...mapState([
        "memberStore",
        "indexStore"
      ]),
      // 返回选中的个数
      activeNum () {
        let arr = this.getActiveList()
        return arr.length
      },
      // 返回当前页数 页面 总数量传给分页组件
      getPageData () {
        return {
          page: this.sendParmas.page,
          limit: this.sendParmas.limit,
          sum: this.memberStore.userList.data.count || 0
        }
      },
      // 返回会员下级列表 页数 页面 总数量传给分页组件
      getLowerData () {
        return {
          page: this.lowerParmas.page,
          limit: this.lowerParmas.limit,
          sum: this.memberStore.userLowerList.data.count || 0
        }
      },
      // 返回当前页数 页码  总数量给日志页
      getMoreLogData () {
        return {
          page: this.moreLogParmas.page,
          limit: this.moreLogParmas.limit,
          sum: this.memberStore.userMoreLogList.data.count || 0
        }
      },
      // 银行卡分页页码
      getBankData () {
        return {
          page: this.bankParmas.page,
          limit: this.bankParmas.limit,
          sum: this.memberStore.userBankList.data.count || 0
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
.label-choose{
      width: 130px;
    float: left;
  div{
    width: 130px;
  }
}
// 列表搜索头部
.userList-search{
  display: flex;
  flex-wrap: wrap;
  align-items:center;
  line-height: 30px;
  &>span{
    margin: 0 10px;
  }
  .search-level{
    input{
      width: 80px;
    }
  }
  .search-submit{
    padding: 1px 10px;
    margin-left: 20px;
  }
}

.userSum_list{
  .table_number{
    color: #000;
  }
}


.table_click{
  color: #0066cc;
  span{
    cursor: pointer;
  }
}
.table_red{
  color: red;
}
.model-page{
  margin: 10px 0;
}

.formBox_title{
  height: 25px;
  line-height: 25px;
  background: url(../../../static/images/new/headtd.jpg) repeat-x left center;
  // background: -webkit-linear-gradient(left, #2DA4DD, #0E8CC7);
  // background: linear-gradient(to right, #2DA4DD, #0E8CC7);
  font-size: 13px;
  color: #fff;
  padding-left: 5px;
  font-weight: bold;
}

// 表格类
.table_container{
  height: 550px;
  overflow: auto;
  padding: 5px;
  ul{
    border-top: 1px solid #ccc;
    li{
      display: flex;
      align-items: center;
      background: #F2F2F2;
      border: 1px solid #ccc;
      border-top: 0;
      height: 30px;
      line-height: 30px;
      color: #000;
      div{
        padding: 0;
        padding-left: 5px;
        border-right: 1px solid #ccc;
        flex:  1;
        &.table_title_30{
          width: 30%;
          padding-right: 40px;
          flex: none;
        }
        &:first-child{
          // font-weight: bold;
          color: #333;
        }
        &:last-child{
          border-right: 0;
          button{
            padding: 0 5px;
            margin-bottom: 3px;
          }
        }
        &.lower-ss{
          text-align: center;
          width: 50px;
          flex: none;
        }
        &.lower-small{
          text-align: center;
          width: 70px;
          flex: none;
        }
        &.lower-middle{
          width: 80px;
          flex: none;
        }
      }
    }
  }
}

// 表格公共样式
.table_flex{
  border: 1px solid #ccc;
  border-bottom: 0;
  li{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    color: #000;
    background: #F2F2F2;
    &>div{
      flex: 1;
      font-size: 13px;
      padding: 5px 0px 5px 5px;
      border-right: 1px solid #ccc;
      &:last-child{
        border-right: 0;
      }
    }
    &.tab_title{
      background: #C8DADF;
      div{
        color: #444;
        font-weight: bold;
      }
    }
    &.table_total{
      padding: 5px 30px 5px;
      span{
        margin-left: 20px;
      }
    }
  }
}

.bank_btn{
  position: absolute;
  top: 5px;
  left: 70px;
  button{
    padding: 0 5px;
    font-size: 12px;
  }
}
// .formBox_title{
//   height: 30px;
//   line-height: 30px;
//   background: -webkit-linear-gradient(left, #2DA4DD, #0E8CC7);
//   background: linear-gradient(to right, #2DA4DD, #0E8CC7);
//   font-size: 13px;
//   color: #fff;
//   padding-left: 5px;
//   font-weight: bold;
// }

.form_container{
  position: relative;
  .formLi_flexCenter{
    justify-content: center;
    padding: 10px 0;
    button{
      margin: 0 10px;
    }
  }
}
.formLi_flex_btn{
  justify-content: center;
  padding: 10px;
  color: red;
  cursor: pointer;
}

.hint_container{
  height: 400px;
  padding: 10px 10px 50px;
  p{
    font-size: 15px;
    margin: 5px 0;
  }
}


// 调节颜色
.log_content{
  color: #444;
  font-size: 13px;
  .odd > td{
    padding: 6px 4px;
  }
  .pointer{
    color: #000;
  }
}

.user_detail{
  height: 580px;
  overflow: auto;
  padding: 5px;
  font-size:12px;
  table:first-child{
    margin-top: 0;
  }
  tr{
    td:first-child{
       width: 200px;
    }
    td{
      padding-left: 8px;
    }
  }
}
.text-content{
  width: 300px;
  padding: 10px;
  height: 100px;
  resize:none;
}
</style>
