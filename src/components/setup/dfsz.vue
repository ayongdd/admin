<template>
    <div class="container">
      <table class="table" >
        <tbody>
        <tr class="nav">
          <td colspan="10">
            {{$L.t('setup.info119')}}
            <input @click="addInfodata()" type="submit" :value=" $L.t('setup.info120') "></td>
        </tr>
        <tr class="head">
          <td>{{$L.t('moneyAdmin.ListDraw.info11')}}</td>
          <td>{{$L.t('setup.info121')}}</td>
          <td>{{$L.t('new.info3')}}</td>
          <td>{{$L.t('setup.info59')}}</td>
          <td>{{$L.t('new.info3')}}</td>
          <td>{{$L.t('moneyAdmin.ListRecharge.info7')}}</td>
          <td>{{$L.t('bonusGame.MoneyQuery.zh40')}}</td>
          <td>{{$L.t('bonusGame.MoneyQuery.zh41')}}</td>
          <td>{{$L.t('table.status')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr class="odd" v-for="item in setupStore.dataAdvanceList.data.data">
          <td>{{item.pay_name}}</td>
          <td>{{item.pay_alias}}</td>
          <td>{{item.userView}}</td>
          <td>{{item.partner_id}}</td>
          <td>{{item.userView}}</td>
          <td>{{item.exchangeRateName}}</td>
          <td>{{item.min_money}}</td>
          <td>{{item.max_money}}</td>
          <td>{{item.enable ==0?$L.t('setup.info122'):$L.t('annoucement.xttz_5.zh4')}}</td>
          <td>
            <button class="popBtn" @click="editInfoClick(item)">{{$L.t('manager.info21')}}</button>
            <button class="popBtn" @click="delectUser(item.id)">{{$L.t('delete')}}</button>
          </td>
        </tr>
        <tr v-if="getPageData.sum>0">
          <td colspan="9">
            <page-limit :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
          </td>
        </tr>
          <tr v-if="!setupStore.dataAdvanceList.data.data">
            <td colspan="9" class="nodata">{{$L.t('noData')}}</td>
          </tr>
        </tbody>
      </table>
      <!-- 新增修改 -->
      <el-dialog
        :title="titleAnnout"
        :visible.sync="editInfoVisible"
        width="700px">
        <div v-if="editInfoVisible" class="form_epayindex">
          <div class="formBox_title">{{$L.t('moneyAdmin.Draw.info4')}}</div>
          <ul>
            <li>
              <div class="formLi_title">{{$L.t('electronicGame.zh12')}}</div>
              <div class="formLi_content">
                <el-input v-model="addList.pay_name" :placeholder="$L.t('setup.info123')"></el-input>
              </div>
              <span style="color: red;">*{{$L.t('manager.info14')}}</span>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('new.info3')}}</div>
              <div class="money-section">
                <el-input v-model="addList.userView" :placeholder="$L.t('new.info3')"></el-input>
              </div>
              <span style="color: red;">*{{$L.t('manager.info14')}}</span>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('setup.info124')}}</div>
              <div class="formLi_content">
                <el-input v-model="addList.pay_alias" :placeholder="$L.t('setup.info125')"></el-input>
              </div>
              <span style="color: red;">*{{$L.t('manager.info14')}}</span>
              <span>（{{$L.t('setup.info126')}}）</span>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('setup.info59')}}</div>
              <div class="formLi_content">
                <el-input v-model="addList.partner_id" :placeholder="$L.t('setup.info127')"></el-input>
              </div>
              <span style="color: red;">*{{$L.t('manager.info14')}}</span>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('setup.info128')}}</div>
              <div class="money-section">

                <input type="number" v-model="addList.min_money"> &nbsp- &nbsp <input type="number" v-model="addList.max_money">
              </div>
              <span style="color: red;">*{{$L.t('manager.info14')}}</span>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('new.info4')}}</div>
              <div class="money-section">
                <select v-model="addList.exchangeRateName">
                  <option value="">{{$L.t('setup.info68')}}</option>
                  <option :value="item.exchangeRateName" v-for="(item,index) in setupStore.exchangeRateType" :key="index">
                    {{item.exchangeRateCname}}-{{item.exchangeRateName}}-{{item.exchangeRate}}
                  </option>
                </select>
              </div>
              <span style="color: red;">*{{$L.t('manager.info14')}}</span>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('setup.info69')}}</div>
              <div class="formLi_content">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 4}"
                  :placeholder="$L.t('setup.info129')"
                  v-model="addList.pay_key">
                </el-input>
              </div>
              <span style="color: red;">*{{$L.t('manager.info14')}}</span>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('setup.info131')}}</div>
              <div class="formLi_content">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 4}"
                  :placeholder="$L.t('setup.info130')"
                  v-model="addList.pay_public_key">
                </el-input>
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('table.status')}}</div>
              <div class="formli_con">
                <el-radio-group v-model="addList.enable">
                  <el-radio :label="0">{{$L.t('setup.info122')}}</el-radio>
                  <el-radio :label="1">{{$L.t('annoucement.xttz_5.zh4')}}</el-radio>
                </el-radio-group>
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('setup.info132')}}</div>
              <div class="formli_con">
                <el-radio-group v-model="addList.province">
                  <el-radio :label="1">{{$L.t('open')}}</el-radio>
                  <el-radio :label="0">{{$L.t('close')}}</el-radio>
                </el-radio-group>
              </div>
            </li>
            <li>
              <button class="form_commit" @click="submitVal()">{{$L.t('submit')}}</button>
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
    </div>
  </template>

  <script>

    import {mapState, mapMutations, mapActions} from 'vuex';
    import {getSession,toolbarOptions} from '@/common/common'
    export default {
      data () {
        return {
          sendParmas:{
            page:1,
            limit:20,
            enable:'',
          },
          // 新增内容
          addList:{
            id:'',
            enable:'',
            province:'',
            pay_alias:'',
            pay_name:'',
            partner_id:'',
            pay_key:'',
            pay_public_key:'',
            min_money:'',
            max_money:'',
            userView:'', //会员别名
            exchangeRateName:'CNY', //币种
          },
          editInfoVisible:false,
          titleAnnout:'',
          visibleNum:'',
          editid:'',
          // 弹窗提示
          confirmVisible: false,
          confirmId:'',
        }
      },
      created (){
        this.getExchangeRateType();
        this.getAdvanceList(this.sendParmas)
      },
      methods: {
        ...mapMutations([
        ]),
        ...mapActions([
          "getAdvanceList",
          "getInsertAdvanceList",
          "deleteAdvanceList",
          "getExchangeRateType"
        ]),

        // 分页组件返回的参数
        handlePage (data) {
          this.sendParmas.page = data.page
          this.sendParmas.limit = data.limit
          this.getAdvanceList(this.sendParmas)
        },
        // 添加
        addInfodata(){
          this.titleAnnout = this.$L.t('chatRoom.zh58')
          this.editInfoVisible = true
          this.visibleNum = 1
          this.clernContent()
          this.addList.enable=0;
          this.addList.province=0;
          this.addList.min_money='0';
          this.addList.max_money='5000';
        },
        // 修改
        editInfoClick (item) {
          this.editid = item.id
          this.titleAnnout = this.$L.t('manager.info21')
          this.editInfoVisible = true
          this.visibleNum = 2
          for (let k in this.addList) {
            this.addList[k] = item[k]
          }
          this.addList.enable = parseInt(item.enable)
          this.addList.province = parseInt(item.province)
        },
        // 提交
        submitVal(){
          if(this.visibleNum == 1){//新增
            this.addList.id = ''
          }else{//修改
            this.addList.id = this.editid
          }
          if(!this.addList.pay_name || !this.addList.pay_alias|| !this.addList.userView|| !this.addList.partner_id || this.addList.min_money=='' || this.addList.max_money == ''|| !this.addList.pay_key){
            this.$message.warning(this.$L.t('setup.info133'))
            return false;
          }
          this.getInsertAdvanceList(this.addList).then(res=>{
            this.editInfoVisible = false
            this.getAdvanceList(this.sendParmas)
          })
        },
        // 清空内容
        clernContent(){
          for (let k in this.addList) {
            this.addList[k] = ''
          }
        },
        // 删除
        delectUser(id){
          this.confirmVisible = true
          this.confirmId = id
        },
        commitModel(){
          this.deleteAdvanceList({id:this.confirmId}).then(res=>{
            this.confirmVisible = false
            this.getAdvanceList(this.sendParmas)
          })
        },
      },
      computed: {
        ...mapState([
          "setupStore"
        ]),
        getPageData () {
          return {
            page: this.sendParmas.page,
            limit: this.sendParmas.limit,
            sum: this.setupStore.dataAdvanceList.data.count || 0
          }
        }
      },
    }
  </script>

  <style lang="less" scoped>
.form_epayindex{
  padding: 0 10px;
  overflow: auto;
    height: 520px;
  // 头部
  .formBox_title{
    height: 25px;
    line-height: 23px;
    background: linear-gradient(left, #2DA4DD, #0E8CC7);
    font-size: 13px;
    color: #fff;
    padding-left: 5px;
    font-weight: bold;
  }
  ul{
    border: 1px solid #ccc;
    border-bottom: 0;
    li{
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
      padding: 4px 0;
      color: #000;
      input,select{
        height: 28px;
        line-height: 28px;
        padding:0 10px;
      }
      .formLi_title{
        width: 110px;
        padding-left: 5px;
        font-weight: bold;
        font-size: 14px;
      }
      .formLi_content{
        width: 350px;
        margin-right: 20px;
        input{
          width: 100%;
        }
        textarea{
          padding: 10px;
        }
      }
      .money-section{
        width: 300px;
        display: flex;
        input{
          width: 30%;
          border-radius: 4px;
          border-style:none;
          border: 1px solid #aaa;
        }
      }
      // 提交按钮
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
  }
}
  </style>
