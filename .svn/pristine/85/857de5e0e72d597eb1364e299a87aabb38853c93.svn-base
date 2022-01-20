<template>
    <div class="container">
      <table class="table" style="table-layout:fixed">
        <tbody>
          <tr class="nav">
            <td colspan="10"> {{$L.t('setup.info55')}}

                <div style="display: inline-flex">
                    <span>{{$L.t('agent.agent_8.zh9')}}：</span>
                    <select v-model="searchInfo.typeId" style="width: 100px;">
                        <option value="">{{$L.t('agent.agent_8.zh49')}}</option>
                        <option value="2">{{$L.t('moneyAdmin.Draw.info3')}}</option>
                        <option value="1">{{$L.t('agent.agent_8.zh36')}}</option>
                    </select>
                </div>

                <div style="display: inline-flex;margin-left: 10px;">
                    <span>{{$L.t('moneyAdmin.Sum.info46')}}：</span>
                    <input type="text" v-model="searchInfo.title">
                </div>
              <input @click="handleSearch()" type="submit" :value="$L.t('search')">
              <input @click="addInfodata()" type="submit" :value="$L.t('annoucement.tcgg_1.add')">
              <input @click="collectionType()" type="submit" :value="$L.t('moneyAdmin.ListRecharge.info3')"></td>
          </tr>
          <tr class="head">
            <td>{{$L.t('table.type')}}</td>
            <td>{{$L.t('moneyAdmin.Sum.info46')}}</td>
            <td>{{$L.t('financial.zh34')}}</td>
            <td>{{$L.t('moneyAdmin.Sum.info48')}}</td>
            <td class="key_account">{{$L.t('moneyAdmin.Sum.info49')}}（KEY）</td>
            <td>{{$L.t('agent.agent_0.zsCj')}}(%)</td>
            <td>{{$L.t('setup.info56')}}</td>
            <td>{{$L.t('table.status')}}</td>
            <td>{{$L.t('lottery.zh91')}}</td>
            <td>{{$L.t('table.handle')}}</td>
          </tr>
          <tr class="odd" v-for="(item,index) in datalist" :key="index">
            <td>{{item.typeId == 1?$L.t('agent.agent_8.zh36'):$L.t('moneyAdmin.Draw.info3')}}</td>
            <td>{{item.title}}</td>
            <td>{{item.bankName}}</td>
            <td>{{item.username}}</td>
            <td class="key_account">{{item.account}}</td>
            <td>{{item.zs_money}}</td>
            <td>{{item.today_money}}</td>
            <td>
              <el-switch
                v-model="item.enable"
                @change="switchVal(item)"
                :active-text="$L.t('annoucement.tcgg_1.show')"
                :inactive-text="$L.t('setup.info57')">
              </el-switch>
            </td>
            <td>{{item.sort}}</td>
            <td>
              <button class="popBtn" @click="editInfoClick(item,index)">{{$L.t('fixed')}}</button>
              <button class="popBtn" @click="deleteInfoClick(item.id)">{{$L.t('delete')}}</button>
            </td>
          </tr>
          <tr v-if="getPageData.sum>0">
            <td colspan="10">
              <page-limit :pageData="getPageData" :inputShow="'1'"
                @handlePage="handlePage"></page-limit>
            </td>
          </tr>
          <!-- <tr v-if="!datalist"> -->
          <tr v-if="!getPageData.sum">
            <td colspan="10" class="nodata">{{$L.t('noData')}}</td>
          </tr>
        </tbody>
      </table>
      <!-- 新增修改 -->
      <el-dialog
        :title="titleAnnout"
        :visible.sync="editInfoVisible"
        width="1200px">
        <div v-if="editInfoVisible" class="form_bankindex">
          <div>
            <ul>
              <li>
                <div class="formLi_title">{{$L.t('agent.agent_8.zh9')}}：</div>
                <div class="formLi_content">
                  <select v-model="addList.typeId" v-bind:disabled="visibleNum ==2" @change="chooseBank">
                    <option :value="1">{{$L.t('agent.agent_8.zh36')}}</option>
                    <option :value="2">{{$L.t('moneyAdmin.Draw.info3')}}</option>
                  </select>
                  <select v-if="addList.typeId == 1" v-model="addList.bankId" @change="selectPaylist">
                    <option value="0">{{$L.t('setup.info58')}}</option>
                    <option v-for="(items,index) in paylist" :key="index"
                      :value="index">{{items}}</option>
                  </select>
                </div>
              </li>
              <li>
                <div class="formLi_title">{{$L.t('electronicGame.zh12')}}：</div>
                <div class="formLi_content">
                  <input type="text" v-model="addList.title">
                </div>
              </li>
              <li v-if="addList.typeId == 1">
                <div class="formLi_title">{{$L.t('setup.info59')}}：</div>
                <div class="formLi_content">
                  <input type="text" v-model="addList.username">
                </div>
              </li>
              <li v-if="addList.typeId == 2">
                <div class="formLi_title">{{$L.t('member.info147')}}：</div>
                <div class="formLi_content">
                  <input type="text" v-model="addList.username">
                </div>
              </li>
              <li v-if="addList.typeId == 2">
                <div class="formLi_title">{{$L.t('chessGame.zh26')}}：</div>
                <div class="formLi_content">
                  <input type="text" v-model="addList.account">
                </div>
              </li>
              <li v-if="addList.typeId == 2">
                <div class="formLi_title">{{$L.t('member.info42')}}：</div>
                <div class="formLi_content">
                  <input type="text" v-model="addList.payinfo.openbank">
                </div>
              </li>
              <li>
                <div class="formLi_title">{{$L.t('agent.agent_0.zsCj')}}：</div>
                <div class="formLi_content-small">
                  <input type="text" v-model="addList.zs_money" placeholder=""> %
                  {{$L.t('setup.info60')}}
                </div>
              </li>
              <li>
                <div class="formLi_title">{{$L.t('setup.info61')}}：</div>
                <div class="formLi_content">
                  <select v-model="addList.show_access" @change="levelLimit">
                    <option value="">{{$L.t('setup.info62')}}</option>
                    <option :value="0">{{$L.t('setup.info63')}}</option>
                    <option :value="1">{{$L.t('setup.info64')}}</option>
                    <option :value="2">{{$L.t('setup.info65')}}</option>
                    <option :value="3">{{$L.t('member.info51')}}</option>
                    <option :value="4">{{$L.t('setup.info66')}}</option>

                  </select>
                  <input v-if="addList.show_access == 2 || addList.show_access ==3" class="level_input" type="text" v-model="lev_value">
                </div>
              </li>
              <li v-if="addList.show_access == 1">
                <div class="formLi_title"></div>
                <div class="formli_level">
                  <P v-for="(item,index) in dataLevel" :key="index">
                    <label>
                      <input type="checkbox" v-model="item.active">
                      <span>LEVEL{{item.level}}</span>
                    </label>
                  </P>
                </div>
              </li>

              <li v-if="addList.show_access == 4">
                <div class="formLi_title"></div>
                <div class="formli_level">
                  <P v-for="(item,index) in groupingData" :key="index">
                    <!--{{memberStore.claslist.data.data}}-->
                    <label>
                      <input type="checkbox" v-model="item.active">
                      <span>{{item.name}}</span>
                    </label>
                  </P>
                </div>
              </li>

              <!--<li>-->
                <!--<div class="formLi_title">微信展示：</div>-->
                <!--<div class="formLi_content">-->
                  <!--<el-radio v-model="addList.wx_show" label="0">显示</el-radio>-->
                  <!--<el-radio v-model="addList.wx_show" label="1">不显示</el-radio>-->
                <!--</div>-->
              <!--</li>-->
              <li>
                <div class="formLi_title">{{$L.t('table.status')}}：</div>
                <div class="formLi_content">
                  <el-radio v-model="addList.enable" label="1">{{$L.t('annoucement.tcgg_1.show')}}</el-radio>
                  <el-radio v-model="addList.enable" label="0">{{$L.t('setup.info57')}}</el-radio>
                </div>
              </li>
              <li>
                <div class="formLi_title">{{$L.t('lottery.zh91')}}：</div>
                <div class="formLi_content">
                  <input type="number" v-model="addList.sort">
                </div>
              </li>

              <li>
                <div class="formLi_title">{{$L.t('setup.info67')}}：</div>
                <div class="formLi_content">
                  <select v-model="addList.exchangeRateName">
                    <option value="">{{$L.t('setup.info68')}}</option>
                    <option v-for="(items,index) in exchangeRateList" :key="index"
                            :value="items.exchangeRateName">{{items.exchangeRateCname}}-{{items.exchangeRateName}}-{{items.exchangeRate}}</option>
                  </select>
                </div>
              </li>
            </ul>
            <ul>
              <li v-if="addList.typeId == 1">
                <div class="formLi_title">{{$L.t('setup.info69')}}：</div>
                <div class="formLi_content">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    :placeholder="$L.t('setup.info70')"
                    v-model="addList.account">
                  </el-input>
                </div>
              </li>
              <li v-if="addList.typeId == 1">
                <div class="formLi_title">{{$L.t('setup.info71')}}：</div>
                <div class="formLi_content">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    :placeholder="$L.t('setup.info72')"
                    v-model="addList.payinfo.publickey">
                  </el-input>
                </div>
              </li>
              <li v-if="addList.typeId == 1">
                <div class="formLi_title">{{$L.t('setup.info73')}}：</div>
                <div class="formLi_content">
                  <input type="text" v-model="addList.payinfo.payurl"
                    :placeholder="$L.t('setup.info74')">
                </div>
              </li>
              <!--<li v-if="addList.typeId == 1">-->
                <!--<div class="formLi_title">指定通道：</div>-->
                <!--<div class="formLi_content">-->
                  <!--<input type="text" v-model="addList.payinfo.otherpara"-->
                    <!--placeholder="填写三方通道编码(不填写默认走技术对接的通道)">-->
                <!--</div>-->
              <!--</li>-->

              <li v-if="addList.typeId == 2">
                <div class="formLi_title">{{$L.t('setup.info75')}}：</div>
                <div class="formLi_content">
                  <input type="text" v-model="addList.custom_title"
                         :placeholder="$L.t('setup.info76')">
                </div>
              </li>
              <li v-if="addList.typeId == 2">
                <div class="formLi_title">{{$L.t('setup.info77')}}：</div>
                <div class="formLi_content">
                  <input type="text" v-model="addList.custom_placeholder"
                         :placeholder="$L.t('setup.info78')">
                </div>
              </li>

              <li class="ipWrapper"  v-if="addList.typeId != 2">
                <div class="formLi_title">{{$L.t('setup.info79')}}：</div>
                <div class="formLi_content" style="">
                  <el-input
                          type="textarea"
                          style="width: 50%;"
                          :autosize="{ minRows: 4, maxRows: 6}"
                          :placeholder="$L.t('setup.info80')"
                          v-model="addList.ip_firewall">
                  </el-input>

                  <div style="width: 50%;margin-left: 20px;">
                   <span class="chat-ipban-span">{{$L.t('setup.info81')}} "<b style="color:red;">{{$L.t('setup.info17')}}</b>"{{$L.t('setup.info18')}}
                    {{$L.t('setup.info19')}}:<br><b style="color:red;">11.21.31</b><br>
                        <b style="color:red;">10.20.30.40</b><br>
                        <b style="color:red;">12.22.32.42</b>
                  </span>
                  </div>
                </div>
              </li>


              <li v-if="addList.typeId == 2">
                <div class="formLi_title">{{$L.t('setup.info82')}}：</div>
                <div class="formLi_content change_img formLi_img">
                  <el-upload
                    id="el-upload1"
                    class="avatar-uploader avatar-uploader_356x178
                    avatar-uploader_contain reception"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-change='formImageChangeCode'
                    :auto-upload='false'
                    accept="image/jpeg, image/png"
                    :on-success="handleAvatarSuccessCode">
                    <img v-if="imageUrlCode" :src="imageUrlCode" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </div>
              </li>
              <li v-if="payway == 1 && addList.typeId == 2">
                <div class="formLi_title">{{$L.t('moneyAdmin.Owed.info14')}}：</div>
                <div class="formLi_content">
                  <select v-model="addList.pay_type">
                    <option value="0">{{$L.t('setup.info83')}}</option>
                    <option v-for="(item,index) in typeData" :key="index" :value="item.id">{{item.alias}}</option>
                  </select>
                  <select v-if="addList.typeId == 2 && addList.pay_type == 5" v-model="typebankId">
                    <option value="0">{{$L.t('setup.info84')}}</option>
                    <option v-for="(items,index) in paylist" :key="index"
                      :value="index">{{items}}</option>
                  </select>
                </div>
              </li>
              <li v-if="addList.typeId == 2">
                <div class="formLi_title">{{$L.t('setup.info85')}}：</div>
                <div class="formLi_content">
                  <input type="text" v-model="addList.memo">
                </div>
              </li>
              <li v-if="addList.typeId == 2">
                <div class="formLi_title">{{$L.t('manager.info74')}}：</div>
                <div class="formLi_content-small">
                  <input type="text" v-model="addList.payinfo.price_min"> -
                  <input type="text" v-model="addList.payinfo.price_max">
                </div>
              </li>
            </ul>
          </div>
          <!-- 支付方式 -->
          <div class="pay-way" v-if="addList.typeId == 1">
            <div>
              <div class="formLi_title">{{$L.t('moneyAdmin.Owed.info14')}}：</div>
              <div class="pay_div">
                <div v-for="(item,index) in typeData" :key="index">
                  <label>
                    <input type="checkbox"
                      :value="item.id"
                      v-model="item.active"
                      @click="checkVal(item)">
                    <span>{{item.alias}}</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="pay-money">
              <!-- 支付宝 -->
              <div class="pay_mode" v-for="(item,index) in paywaydata" :key="index">
                <div class="formLi_title">{{item.title}}：</div>
                <div class="formLi_content-small">
                  <!-- addList.price_min -->
                  <input class="fomall" type="text" v-model="item.price_min"> -
                  <input class="fomall" type="text" v-model="item.price_max">
                  <!--<span><input type="checkbox" v-model="item.active">开启条码</span>-->
                  <!--<span>支付通道金额限制<span>10-1000000</span></span>-->

                  <div style="display: inline-block;margin-left: 100px;">
                    <span class="formLi_title">{{$L.t('setup.info86')}}：</span>
                    <input type="text" v-model="item.otherpara" class="fomall"
                           style="width: 200px;font-size: 10px;"
                           :placeholder="$L.t('setup.info80')"
                    >
                  </div>
                      <!-- <3?'10-199999':'10-1000000'}})</span></span> -->
                </div>
              </div>
            </div>
          </div>

          <!--充值快捷金额-->
          <div>
            <div class="formLi_title" style="display: inline-block">{{$L.t('setup.info87')}}：</div>
            <div class="formLi_content" style="display: inline-block">
              <el-radio v-model="addList.is_fixed" label="1">{{$L.t('setup.info88')}}</el-radio>
              <el-radio v-model="addList.is_fixed" label="2">{{$L.t('setup.info89')}}</el-radio>
            </div>
          </div>

          <div class="quiky_price">
            <div class="quiky_title">{{$L.t('setup.info87')}}：</div>
            <div class="quiky_content">
              <div v-for="(item,index) in giftData" :key="index">
                <span>{{$L.t('setup.info90')}}{{index +1}}</span>
                <input type="number" v-model="item.value">
              </div>
            </div>
          </div>
          <div class="forsub">
            <button class="form_commit" @click="submitVal()">{{$L.t('lottery.zh23')}}</button>
            <button class="form_commit" @click="editInfoVisible= false">{{$L.t('cancel')}}</button>
          </div>
        </div>
      </el-dialog>
      <!-- 收款类型列表 -->
      <el-dialog
        :title="$L.t('setup.info91')"
        :visible.sync="typeVisible"
        width="950px">
        <input style="position: absolute;left: 160px;top:7px;" @click="addGaterType()" type="submit" :value="$L.t('annoucement.tcgg_1.add')">
        <input class="gathering" @click="noticeText()" type="submit" :value="$L.t('hint')">
        <div v-if="typeVisible" class="project_container">
          <ul class="table_flex">
            <li class="tab_title">
              <div class="project_name" >{{$L.t('setup.info92')}}</div>
              <div>{{$L.t('setup.info93')}}</div>
              <div>{{$L.t('electronicGame.zh13')}}</div>
              <div>{{$L.t('electronicGame.zh12')}}</div>
              <div>{{$L.t('table.status')}}</div>
              <div>{{$L.t('table.handle')}}</div>
            </li>
            <li v-for="(item, index) in typeData" :key="index">
              <div class="project_name">
                <!-- {{item.sort}} -->
                <input type="text" v-model="item.sort">
              </div>
              <div>{{item.title}}</div>
              <div class="collectImg">
                <div>
                  <img :src="item.icon" alt="">
                </div>
              </div>
              <div>
                <input type="text" v-model="item.alias">
              </div>
              <div>
                <el-switch
                  v-model="item.isshow"
                  @change="switchValType(item)"
                  :active-text="$L.t('op')"
                  :inactive-text="$L.t('clo')">
                </el-switch>
              </div>
              <div class="color_green_c">
                <button class="popBtn" @click="editTypeClick(item)">{{$L.t('bonusGame.NiuNiuBetManage.zh14')}}</button>
                <button class="popBtn" @click="changeImg(item)">{{$L.t('setup.info94')}}</button>
                <button class="popBtn" @click="deleteTypeClick(item.id)">{{$L.t('delete')}}</button>
              </div>
            </li>
          </ul>
          <!-- <div class="forsub">
            <button class="form_commit" @click="typeVisible= false">关闭</button>
          </div> -->
        </div>
      </el-dialog>

      <el-dialog
        :title="$L.t('setup.info94')"
        :visible.sync="changeImgVisible"
        width="300px">
        <div v-if="changeImgVisible" class="project_container">
          <div class="change_img formLi_img">
            <el-upload
              id="el-upload1"
              class="avatar-uploader avatar-uploader_356x178
              avatar-uploader_contain reception"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-change='formImageChange'
              :auto-upload='false'
              accept="image/jpeg, image/png"
              :on-success="handleAvatarSuccess">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
          <div class="forsubclose">
            <button class="form_commit" @click="sureChangeVal()">{{$L.t('setup.info95')}}</button>
          </div>
        </div>
      </el-dialog>
      <!-- 新增收款类型 -->
      <el-dialog
        :title="$L.t('setup.info96')"
        :visible.sync="gaterVisible"
        width="600px">
        <div v-if="gaterVisible" class="form_container">
          <div class="formBox_title">{{$L.t('setup.info97')}}</div>
          <ul>
            <li>
              <div class="formLi_title">{{$L.t('moneyAdmin.Owed.info15')}}</div>
              <div class="formLi_content">
                <input type="text" v-model="typeList.title" :placeholder="$L.t('setup.info98')">
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('electronicGame.zh12')}}</div>
              <div class="formLi_content">
                <input type="text" v-model="typeList.alias" :placeholder="$L.t('setup.info99')">
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('setup.info100')}}</div>
              <div class="formLi_img">
                <el-upload
              id="el-upload1"
              class="avatar-uploader avatar-uploader_356x178
              avatar-uploader_contain reception"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-change='typeImageChange'
              :auto-upload='false'
              accept="image/jpeg, image/png">
              <img v-if="fileImgUrl" :src="fileImgUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
              </div>
            </li>
            <li>
              <button class="form_commit" @click="typeSubmitVal()">{{$L.t('submit')}}</button>
            </li>
          </ul>
        </div>
      </el-dialog>


      <!-- 提示弹窗 -->
      <comfirm-model
        v-if="confirmVisible"
        :content="$L.t('agent.agent_0.isDel')"
        @closeModel="confirmVisible = false"
        @commitModel="commitModel">
      </comfirm-model>
      <!-- 提示弹窗2 -->
      <comfirm-model
        v-if="confirmNotice"
        :content="$L.t('setup.info101')"
        @closeModel="confirmNotice = false"
        @commitModel="commitNotice">
      </comfirm-model>
    </div>
  </template>

  <script>

        import {mapState, mapMutations, mapActions} from 'vuex';
        import {getSession,languageId} from '@/common/common'
          import { Loading,Message,MessageBox} from 'element-ui';
        export default {
          data () {
            return {
              confirmNotice:false,
              sendParmas:{
                page:1,
                limit:20,
                sum:'',
              },
                searchInfo:{
                    typeId:"",
                    title:""
                },
              // 人工时的支付银行
              typebankId:'0',
              // 新增内容
              addList:{
                custom_title:"",
                custom_placeholder:"",
                typeId:'1',
                is_fixed:'1',
                ip_firewall:'',
                exchangeRateName:'',
                title:'',
                username:'',
                account:'',
                zs_money:'0',
                show_access:'',
                show_value:'',
                // wx_show:'',
                pic:'',
                pay_type:'0',
                bankId:'0',
                memo:'',
                enable:'1',
                sort:'',
                payinfo:{
                  // 为1
                  publickey: '',
                  payurl: '',
                  // otherpara: '',
                  // 为2
                  openbank: '',
                  price_min: '1',
                  price_max: '1000000',
                  QuickSum: {},
                }
              },
              editInfoVisible:false,
              gaterVisible:false,
              titleAnnout:'',
              editorOption: {
                placeholder: this.$L.t('agent.agent_5.alert18')
              },
              visibleNum:'',
              editid:'',
              datalist:[],
              acount:'',
              typeData:[],
              typeVisible:false,
              typeid:'',
              changeImgVisible:false,
              imageUrl:'',
              imgdata:'',
              imgid:'',
              imageUrlCode:'',
              payway:'1',
              paywaydata: [],
              paylist:{},
              dataLevel:[],
              groupingData:[],
              lev_value:'',
              pay_typeone:'',
              checktypeid:'',
              // 弹窗提示
              confirmVisible: false,
              confirmId:'',
              // 新增快捷金额
              giftData:[],
              fileImgUrl:'',
              typeList:{
                title:'',
                alias:'',
                file:''
              },
              deleid:'',
              exchangeRateList:[],
            }
          },
          created (){
            this.getExchangeRateType()
                    .then(res=>{
                      this.exchangeRateList = res
                      console.log(res);
                    })
            // 初始化快捷金额
            this.initQuity_price()
            // 获取数据
            this.getData(this.sendParmas)
            this.getLevelPayList().then(res=>{
              for(let k in res.data){
                  res.data[k].active = false
              }
              this.dataLevel = res.data
            })


            this.getUseClaslist()
                .then(res=>{
                  let data = res.data.data;
                  data.forEach(i=>{
                    i.active = false
                    return i
                  })
                  this.groupingData = data;
                })
          },
          methods: {
            ...mapMutations([
            ]),
            ...mapActions([
              "getReceBankSetList",
              "updateReceBankStatus",
              "addReceBankSetList",
              "updateBanklist",
              "receBankType",
              "updateReceBankType",
              "updateReceBankImg",
              "deleteReceBankSetList",
              "getBankPayList",
              "getLevelPayList",
              "addReceBankSetimg",
              "addPayTypeList",
              "delPayType",
              "getUseClaslist",
              "getIpFirewall",
              "getExchangeRateType"
            ]),
            // 提示弹窗
            noticeText(){
              this.confirmNotice = true
            },
            // 初始化快捷金额
            initQuity_price () {
              // 创建充值快捷金额
              let arr = []
              for (let i = 0; i < 9; i++) {
                let obj = {name: i, value: (i + 1) * 100}
                arr.push(obj)
              }
              this.giftData = arr
            },
            //
            levelLimit(){
              if(this.addList.show_access !=1){
                for(let k in this.dataLevel){
                  this.dataLevel[k].active = false
                }
              }


              if(this.addList.show_access != 4 && this.groupingData.length != 0) {
                this.groupingData.forEach(i=>{
                  i.active = false
                  return i
                })
              }
            },
            // 获取数据
            getData(params){
              this.getReceBankSetList(params).then(res=>{
                if(!res.data){
                  this.acount = res.count
                  this.datalist = []
                  return false
                }
                if(res.data.length>0){
                  this.acount = res.count
                  this.datalist = res.data
                  this.datalist.map(val=>{
                    if(val.enable == 1){
                      val.enable = true
                    }else{
                      val.enable = false
                    }
                    return val.enable
                  })
                  let { QuickSum } = res.data.payinfo || ''
                  if (QuickSum) {
                    for (let k in this.giftData) {
                      this.giftData[k].value = QuickSum[k]
                    }
                  }
                }
              })
            },
            // 分页组件返回的参数
            handlePage (data) {
              this.sendParmas.page = data.page
              this.sendParmas.limit = data.limit
              this.getData(this.sendParmas)
            },
            // 添加
            addInfodata(){
              // 初始化快捷金额
              this.initQuity_price()
              this.clernContent()
              this.paywaydata = []
              this.titleAnnout = this.$L.t('setup.info102')
              this.editInfoVisible = true
              this.visibleNum = 1
              this.addList.typeId = 1
              this.addList.is_fixed = "1";
              this.receBankType().then(res=>{
                if(res.data.length>0){
                  if(this.addList.typeId == 1){
                    for (let k in res.data) {
                      res.data[k].active = false
                    }
                  }
                  this.typeData = res.data
                }
              })
              for(let k in this.dataLevel){
                this.dataLevel[k].active = false
              }

              for(let k in this.groupingData){
                this.groupingData[k].active = false
              }

              // // 获取支付分类
              this.chooseBank()
            },
            // 新增收款类型gaterVisible
            addGaterType(){
              this.gaterVisible = true
            },
            //选择收款银行
            async selectPaylist(){
              const result = await this.getIpFirewall({id:this.addList.bankId})
              this.addList.ip_firewall = result.ip_firewall
            },
            chooseBank(){
              if(this.addList.typeId == 1){
                // 获取支付分类
                this.getBankPayList({
                  type:'1'
                }).then(res=>{
                  this.paylist = res.data
                })
              }else{
                // 为人工时默认设置金额限制
                this.addList.payinfo.price_min = '1'
                this.addList.payinfo.price_max = '1000000'
                // 获取人工
                this.getBankPayList({
                  type:'0'
                }).then(res=>{
                  this.paylist = res.data
                })
              }
            },
            // 修改
            editInfoClick (item) {
              this.editid = item.id
              this.titleAnnout = this.$L.t('setup.info103')
              this.editInfoVisible = true
              this.visibleNum = 2
              // 复制快捷金额
              // console.log(item)
              let { QuickSum } = item.payinfo || ''
              if (QuickSum) {
                for (let k in this.giftData) {
                  this.giftData[k].value = QuickSum[k]
                }
              } else {
                this.initQuity_price()
              }
              // 当限制分层为等级显示时
              for(let k in this.dataLevel){
                this.dataLevel[k].active = false
              }
              if(item.show_access == 1){
                let inlist = item.show_value
                for(let k in this.dataLevel){
                  let flag = inlist.some(res => res == this.dataLevel[k].id)
                  if(flag){
                    this.dataLevel[k].active = true
                  }else{
                    this.dataLevel[k].active = false
                  }
                }
              }

              for(let k in this.groupingData){
                this.groupingData[k].active = false
              }
              if(item.show_access == 4){
                let inlist = item.show_value
                for(let k in this.groupingData){
                  let flag = inlist.some(res => res == this.groupingData[k].id)
                  if(flag){
                    this.groupingData[k].active = true
                  }else{
                    this.groupingData[k].active = false
                  }
                }
              }

              // 当限制分层为
              if(item.show_access == 2 || item.show_access == 3){
                this.lev_value = item.show_value
              }
              this.receBankType().then(res=>{
                let info = item.payinfo
                // typeData 赋值
                let data = res.data
                let list = []
                for (let k in data) {
                  let flag = info[data[k].id]
                  // 复选框赋值
                  if (flag) {
                    data[k].active = true
                    info[data[k].id].title = data[k].title
                    info[data[k].id].id = data[k].id
                    if(item.typeId == '2'){
                      this.addList.pay_type = info[data[k].id].id
                      this.addList.payinfo.price_min = info[data[k].id].price_min
                      this.addList.payinfo.price_max = info[data[k].id].price_max
                      this.addList.payinfo.openbank = item.payinfo[info[data[k].id].id].openbank
                    }
                    list.push(info[data[k].id])
                  } else {
                    data[k].active = false
                  }
                }
                this.typeData = data
                this.paywaydata = list
              })
              for (let k in this.addList) {
                this.addList[k] = item[k]
              }
              if(item.enable == false){
                this.addList.enable = '0'
              }else{
                this.addList.enable = '1'
              }
              this.imageUrlCode = item.pic

              if(this.addList.typeId == 1){
                this.getBankPayList({
                  type:'1'
                }).then(res=>{
                  this.paylist = res.data;

                  if(this.addList.bankId != 0) {
                    this.selectPaylist()
                  }
                })
              }
              // 获取人工银行列表
              if(this.addList.typeId == 2 || this.addList.pay_type == 5){
                this.typebankId = item.bankId
                this.getBankPayList({
                  type:'0'
                }).then(res=>{
                  this.paylist = res.data;

                  if(this.addList.bankId != 0) {
                    this.selectPaylist()
                  }
                })
              }
            },
            typeSubmitVal(){
              if(!this.typeList.alias || !this.typeList.title || !this.typeList.file){
                Message({
                  message:this.$L.t('manager.info38'),
                  type:"warning",
                  showClose:true
                })
                return
              }
              let da = new FormData()
              let code = languageId(localStorage.getItem('languageId') || 'en')
              da.append('language',code)
              da.append("alias",this.typeList.alias)
              da.append("title",this.typeList.title)
              da.append("file",this.typeList.file)
              this.addPayTypeList(da).then(()=>{
                setTimeout(()=>{
                  this.typedataList()
                },2000)
                this.gaterVisible = false
              })
            },
              //搜索
              handleSearch() {
                this.params = Object.assign({},this.sendParmas,this.searchInfo)
                this.getData(this.params)
              },
            // 提交
            submitVal(){
              if(this.addList.typeId == 1) {
                for (let k in this.addList.payinfo) {
                  if (!isNaN(k)) {
                    delete this.addList.payinfo[k]
                  }
                }
                // 在线的支付方式
                for (let k in this.paywaydata) {
                  let key = this.paywaydata[k]
                  let tiaoma = key.active ? 1 : 0
                  this.addList.payinfo[key.id] = {
                    price_min: key.price_min,
                    price_max: key.price_max,
                    tiaoma,
                    otherpara: key.otherpara
                  }
                }
              }
              //必填验证
              if(this.addList.typeId == 1 && this.addList.bankId == 0) {
                this.$message.warning(this.$L.t('setup.info58'));
                return
              }
              if(!this.addList.title) {
                this.$message.warning(this.$L.t('setup.info104'));
                return
              }
              if(this.addList.typeId == 1 && !this.addList.username) {
                this.$message.warning(this.$L.t('setup.info105'));
                return
              }
              if(!this.addList.exchangeRateName) {
                this.$message.warning(this.$L.t('setup.info68'));
                return
              }
              if(this.addList.typeId == 1 && !this.addList.account) {
                this.$message.warning(this.$L.t('setup.info106'));
                return
              }
              if(this.addList.typeId == 1 && this.paywaydata.length === 0) {
                this.$message.warning(this.$L.t('setup.info83'));
                return
              }
              if(this.addList.typeId == 1 && this.addList.ip_firewall === 0) {
                this.$message.warning(this.$L.t('setup.info107'));
                return
              }

              if(this.addList.typeId == 1) {
                for (let k in this.paywaydata) {
                  let key = this.paywaydata[k]
                  if(!this.addList.payinfo[key.id].price_min || !this.addList.payinfo[key.id].price_max || !this.addList.payinfo[key.id].otherpara) {
                    this.$message.warning(this.$L.t('setup.info108'));
                    return
                  }
                }
              }

              if(this.addList.show_access == 2 || this.addList.show_access == 3){
                this.addList.show_value = this.lev_value
              }
              if(this.addList.show_access == 1){
                let list = this.dataLevel.filter(res => res.active).map(res => res.id)
                this.addList.show_value = list
              }

              if(this.addList.show_access == 4){
                let list = this.groupingData.filter(res => res.active).map(res => res.id)
                this.addList.show_value = list
              }
              if(this.addList.typeId == 2){
                // 选择其他支付方式时清除网银支付
                if(this.addList.pay_type != 5){
                  this.typebankId = '0'
                  this.addList.bankId = '0'
                }
              }
              // 快捷金额
              let giftFlag = this.giftData.every(k => k.value)
              if (!giftFlag) {
                this.$message(this.$L.t('setup.info109'))
                return false
              }
              if(this.visibleNum == 1){//新增
                  if (this.addList.typeId == 2) {//人工上传图片
                    let d = new FormData()
                    let code = languageId(localStorage.getItem('languageId') || 'en')
                    d.append('language',code)
                    for(let k in this.addList){
                      if(k != 'pic'){
                        d.append(k,this.addList[k])
                      }
                    }
                    d.append('bankId',this.typebankId)
                    d.append('pic',this.addList.pic)
                    d.append('pay_type',this.addList.pay_type)
                    d.append('payinfo[openbank]',this.addList.payinfo.openbank)
                    d.append('payinfo[price_min]',this.addList.payinfo.price_min)
                    d.append('payinfo[price_max]',this.addList.payinfo.price_max)
                    for(let k in this.giftData) {
                      let key = this.giftData[k].name
                      d.append('payinfo[QuickSum][' + key + ']', this.giftData[k].value)
                    }
                    this.addReceBankSetimg(d).then(res=>{
                      this.editInfoVisible = false
                      this.getData(this.sendParmas)
                      this.addList.pic = ''
                    })
                  }else{
                    if(this.addList.typeId == 1){
                      if(this.addList.typeId == 1){
                        var ac = ''
                        for(let k in this.paywaydata){
                          ac = this.paywaydata[k].id
                        }
                        this.addList.pay_type = ac//在线的支付方式任意第一个
                      }
                    }
                    this.$delete(this.addList,'id')
                    let temp = {}
                    for(let k in this.giftData) {
                      let key = this.giftData[k].name
                      temp[key] = this.giftData[k].value
                    }
                    this.addList.payinfo.QuickSum = temp
                    this.addReceBankSetList(this.addList).then(res=>{
                      this.editInfoVisible = false
                      this.getData(this.sendParmas)
                    })
                  }
                }else{ // 编辑
                  if (this.addList.typeId == 2) {//人工上传图片
                    let d = new FormData()
                    let code = languageId(localStorage.getItem('languageId') || 'en')
                    d.append('language',code)
                    for(let k in this.addList){
                      if(k != 'pic'){
                        d.append(k,this.addList[k])
                      }
                    }
                    if(this.visibleNum == 2){
                      d.append('id',this.editid)
                    }
                    d.append('bankId',this.typebankId)
                    d.append('pic',this.addList.pic)
                    d.append('pay_type',this.addList.pay_type)
                    d.append('payinfo[openbank]',this.addList.payinfo.openbank)
                    d.append('payinfo[price_min]',this.addList.payinfo.price_min)
                    d.append('payinfo[price_max]',this.addList.payinfo.price_max)

                    for(let k in this.giftData) {
                      let key = this.giftData[k].name
                      d.append('payinfo[QuickSum][' + key + ']', this.giftData[k].value)
                    }

                    // 快捷金额
                    this.addReceBankSetimg(d).then(res=>{
                      this.editInfoVisible = false
                      this.getData(this.sendParmas)
                      this.addList.pic = ''
                    })
                  }else{
                    if(this.addList.typeId == 1){
                      var ac = ''
                      for(let k in this.paywaydata){
                        ac = this.paywaydata[k].id
                      }
                      this.addList.pay_type = ac//在线的支付方式任意第一个
                    }
                    this.addList.id = this.editid
                    let temp = {}
                    for(let k in this.giftData) {
                      let key = this.giftData[k].name
                      temp[key] = this.giftData[k].value
                    }
                    this.addList.payinfo.QuickSum = temp
                    this.addReceBankSetList(this.addList).then(res=>{
                      this.editInfoVisible = false
                      this.getData(this.sendParmas)
                    })
                  }
                }
            },

            deleteTypeClick(id){
              this.confirmVisible = true
              this.confirmId = id
            },
            // 删除
            deleteInfoClick(id){
              this.confirmVisible = true
              this.confirmId = id
              this.deleid = 1
            },

            commitNotice(){
              this.confirmNotice = false
            },
            commitModel(){
                this.confirmVisible = false
              if(this.deleid == 1){
                this.deleteReceBankSetList({id:this.confirmId}).then(res=>{
                  this.confirmVisible = false
                  this.getData(this.sendParmas)
                })
              }else{
                this.delPayType({id:this.confirmId}).then(res=>{
                  this.confirmVisible = false
                  this.typedataList()
                })
              }
            },
            // 清空内容
            clernContent(){
              for (let k in this.addList) {
                if(k == "payinfo"){
                  for(let t in this.addList.payinfo){
                    this.addList.payinfo[t] = ''
                  }
                }else{
                  this.addList[k] = ''
                }
              }
              this.imageUrlCode = ""
              this.addList.zs_money ='0'
              this.addList.enable = '1'
              this.addList.typeId = '1'
              this.addList.pay_type = '0'
              this.addList.bankId = '0'
              this.typebankId = '0'
            },
            // 开关
          switchVal(item){
            this.updateReceBankStatus({id:item.id,bid:item.bankId,title:item.title}).then(res=>{
              let params = Object.assign({},this.sendParmas,this.searchInfo);
              this.getData(params)
            })
          },
          // 收款列表状态修改开关
          switchValType(item){
            this.typeid = item.isshow == true?1:0
          },
          // 保存类型
          editTypeClick(item){
            this.typeid = item.isshow == true?1:0
            this.updateReceBankType({id:item.id,isshow:this.typeid,alias:item.alias,title:item.title,sort:item.sort}).then(res=>{
              this.typedataList()
            })
          },
          // 获取收取类型
          typedataList(){
            this.receBankType().then(res=>{
              if(res.data.length>0){
                this.typeData = res.data
                this.typeData.map(val=>val.isshow = val.isshow == 1?true:false
                )
              }
            })
          },
          collectionType(){
            this.typeVisible = true
            this.typedataList()
          },
          // 更换图片
          changeImg(item){
            this.imageUrl = item.icon
            this.imgid = item.id
            this.changeImgVisible = true
          },
          // 更换图片上传
          handleAvatarSuccess (res, file) {
            this.imageUrl = URL.createObjectURL(file.raw)
          },
          formImageChange (file, fileList) {
            this.imageUrl = URL.createObjectURL(file.raw)
            this.imgdata = file.raw
          },
          // 二维码图片
          handleAvatarSuccessCode (res, file) {
            this.imageUrlCode = URL.createObjectURL(file.raw)
          },
          formImageChangeCode (file, fileList) {
            this.imageUrlCode = URL.createObjectURL(file.raw)
            this.addList.pic = file.raw
          },
          // 新增收款类型图片
          typeImageChange (file, fileList) {
            this.fileImgUrl = URL.createObjectURL(file.raw)
            this.typeList.file = file.raw
          },
          // 确认更换图片
          sureChangeVal(){
            var formdata=new FormData();
            let code = languageId(localStorage.getItem('languageId') || 'en')
            formdata.append('language',code)
            formdata.append("file",this.imgdata);
            formdata.append("id",this.imgid);
            this.updateReceBankImg(formdata).then(res=>{
              setTimeout(()=>{
                this.typedataList()
              },2000)
              this.imgdata = ''
              this.changeImgVisible = false
            })
          },
          // 复选框选择支付方式
          checkVal(item){
            this.checktypeid = item.id
            item.active = !item.active
            let max = item.id < 3?'199999':'1000000'
            let obj = {
              id: item.id,
              title:item.title,
              price_min: 10,
              price_max: max,
              active: false,
            }
            let flag = this.paywaydata.some(res => res.id == item.id)
            if (item.active) {
              if (!flag) {
                this.paywaydata.push(obj)
              }
            } else {
              if (flag) {
                for (let  k in this.paywaydata) {
                  if (this.paywaydata[k].id == item.id) {
                    this.paywaydata.splice(k, 1)
                  }
                }
              }
            }
          },
        },
          computed: {
            ...mapState([
              "indexStore",
              "setupStore",
              "memberStore"
            ]),
            getPageData () {
              return {
                page: this.sendParmas.page,
                limit: this.sendParmas.limit,
                sum: this.acount
              }
            }
          },
        }
      </script>
  <style lang="less" scoped>
  .project_name{
    width: 100px;
  }
    table td{
      overflow-wrap: break-word;
    }
    .form_bankindex{
      height: 560px;
      padding: 0 10px;
      overflow: auto;
      div:first-child{
        display: flex;
      }
      .ipWrapper{
        display: flex;
        justify-content: flex-start;
        margin-bottom: 20px;
        .formLi_title{
          font-weight: bold;
          width: 94px;
        }
        .formLi_content{
          display: flex;
          justify-content: flex-start;
        }
      }
      ul{
        &:first-child{
          width: 45%;
        }
        &:nth-child(2){
          width: 50%;
          margin-left: 30px;
        }
        li{
          display: flex;
          align-items: center;
          margin-bottom:20px;
          .formLi_title{
            width: 120px;
            padding-left: 5px;
            font-weight: bold;
            font-size: 14px;
          }

          .formli_level{
              width: 100%;

              p{
                float: left;
                width: 25%;
              }
            }
          .formLi_content{
            width: 100%;
            margin-right: 20px;
            select{
              height: 30px;
              padding:0 5px;
            }
            input{
              width: 100%;
              height: 30px;
              padding:0 5px;
            }
            .level_input{
              width: 100px;
            }
          }
          .formLi_content-small{
            width: 100%;
            margin-right: 20px;
            select{
              height: 30px;
              padding:0 5px;
            }
            input{
              width: 80px;
              height: 30px;
              padding:0 5px;
            }
          }
      }
      .tips_bank{
        p{
          text-align: center;

        }
      }
      }
    }
    /* 支付方式 */
    .pay-way{
        border-top: 1px solid lightgray;
        padding-top: 10px;
        .pay_div{
          margin-left: 20px;
          display:flex;
          div{
            align-items: center;
            &:first-child{
              margin-left: 0px;
            }
            margin-left:10px;
            margin-right: 10px;
            span{
              margin-left:3px;
            }
          }
        }
        .pay-money{
          .pay_mode{
            display:flex;
            margin-bottom:10px;
            .formLi_title{
              width: 100px;
            }
          }
          margin: 15px 0;
          .fomall{
            width: 90px;
            height: 25px;
            padding: 0 5px;
          }
          span{
            margin-left:20px;
          }
          .formLi_title{
            align-items: center;
          }
        }
      }
    .forsub{
      text-align: center;
      margin-bottom: 30px;
      .form_commit{
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        padding: 0 20px;
        text-align: center;
        // background: #EAEAEA;
        background: linear-gradient(to left, #efefef, #eee);
        border: 1px solid #aaa;
        margin: 2px auto;
      }
      .formLi_content{
        width: 100%;
        margin-right: 20px;
        display: flex;
        div{}
        input{
          width: 100%;
          height: 30px;
          padding:0 5px;
        }
      }
    }
    .forsubclose{
      text-align: center;
      margin-top: 10px;
      margin-bottom: 10px;
      .form_commit{
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          padding: 0 20px;
          text-align: center;
          // background: #EAEAEA;
          background: linear-gradient(to left, #efefef, #eee);
          border: 1px solid #aaa;
          margin: 2px auto;
        }
    }
    .project_container{
      padding: 5px;
    }
    .table_flex{
      border: 1px solid #ccc;
      border-bottom: 0;
      height: 530px;
      overflow: auto;
      li{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        color: #000;
        background: #F2F2F2;
        &>div{
          height:auto;
          flex: 1;
          font-size: 13px;
          padding: 5px 0px 5px 5px;
          /*border-right: 1px solid #ccc;*/
          &:last-child{
            border-right: 0;
          }
          img{
            height: 100%;
          }
          input{
            width: 115px;
          }
        }
        &.tab_title{
          background: #C8DADF;
          div{
            color: #444;
            font-weight: bold;
            height: 20px;
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
    .formLi_img{
      background-color: #fbfdff;
      border: 1px dashed #c0ccda;
      border-radius: 6px;
      box-sizing: border-box;
      width: 148px;
      height: 148px;
      cursor: pointer;
      line-height: 146px;
      vertical-align: top;
    }
    .change_img {
      margin: auto
    }
    .account{
      width: 400px;
      overflow: hidden;
    }
    .collectImg{
      width: 100px;
      overflow: hidden;
      div{
        width: 40px;
        height: 40px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }

  // 快捷金额样式
  .quiky_price{
    display: flex;
    align-items: center;
    border-top: 1px solid lightgray;
    padding-top: 10px;
    margin-bottom: 20px;
    .quiky_title{
      display: block !important;
      width: 180px;
    }
    .quiky_content{
      margin-left: 10px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      div{
        display: flex;
        width: 155px;
        margin: 5px;
        span{
          display: inline-block;
          width: 70px;
          margin-right: 5px;
        }
        input{
          width: 70px;
        }
      }
    }
  }
  //
  .gathering{
    position: absolute;
    top: 7px;
    left: 205px;
  }
</style>
