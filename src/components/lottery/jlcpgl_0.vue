<template>
  <div class="container">
    <table class="table">
      <tbody>
        <tr class="nav">
          <td colspan="13">
            <div class="lottery-head">
              <p>{{$L.t('lottery.zh81')}}</p>
              <span>{{$L.t('table.type')}}</span>
              <select v-model="sendParmas.lotteryType" @click="initLottery()">
                <option value="0">{{$L.t('lottery.zh3')}}</option>
                <option value="1">{{$L.t('lottery.zh4')}}</option>
                <option value="2">{{$L.t('lottery.zh5')}}</option>
              </select>
              <span>{{$L.t('table.status')}}</span>
              <select v-model="sendParmas.enable" @click="initLottery()">
                <option value="1">{{$L.t('annoucement.xttz_5.zh5')}}</option>
                <option value="2">{{$L.t('bonusGame.NiuNiuBetManage.zh43')}}</option>
                <option value="0">{{$L.t('close')}}</option>
              </select>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="13">
            <div class="lottery-nav">
              <button
                :class="{'active': sendParmas.lotteryClassID == item.id}"
                v-for="item in lotteryStore.lotteryClassList.data"
                @click="lotteryChange(item)">
                {{item.name}}
              </button>
            </div>
          </td>
        </tr>
        <tr class="head">
          <td>{{$L.t('lottery.zh77')}}</td>
          <td>{{$L.t('lottery.zh82')}}</td>
          <td>{{$L.t('lottery.zh83')}}</td>
          <td>{{$L.t('lottery.zh84')}}</td>
          <td>{{$L.t('lottery.zh85')}}</td>
          <td>{{$L.t('lottery.zh86')}}</td>
          <td>{{$L.t('lottery.zh87')}}</td>
          <td>{{$L.t('lottery.zh88')}}</td>
          <td>{{$L.t('table.status')}}</td>
          <td>{{$L.t('lottery.zh89')}}</td>
          <td>{{$L.t('lottery.zh90')}}</td>
          <td>{{$L.t('lottery.zh91')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr class="odd" v-for="item in lotteryLists">
          <td>
            {{item.title}}
          </td>
          <td>
              <img width="40" height="40" :src="item.typeIcon">
          </td>
          <td>
            <img width="40" height="40" :src="item.closeIcon">
          </td>
          <td>
            {{item.shortName}}
          </td>
          <td>
            {{item.info}}
          </td>
          <td>
            {{item.hot == 1 ?  $L.t('common.hot'): $L.t('common.normal')}}
          </td>
          <td>
            {{item.data_ftime}}
          </td>
          <td>
            {{item.profit}}
          </td>
          <td>
            {{item.enable == 1?$L.t('annoucement.xttz_5.zh5'): item.enable == 2? $L.t('bonusGame.NiuNiuBetManage.zh43'):$L.t('close')}}
          </td>
          <td>
            {{item.zhuihao == 1? $L.t('annoucement.xttz_5.zh5'): $L.t('close')}}
          </td>
          <td>
            {{item.planSwitch == 1? $L.t('annoucement.xttz_5.zh5'): $L.t('close')}}
          </td>
          <td>
            {{item.sort}}
          </td>
          <td>
            <button @click="editSetting(item)">{{$L.t('financial.zh104')}}</button>
          </td>
        </tr>
        <tr v-if="lotteryStore.lotteryList.code != 0">
          <td colspan="13" class="nodata">
            {{$L.t('noData')}}
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 配置修改 -->
    <el-dialog
      :title="$L.t('lottery.zh92')"
      :visible.sync="setVisible"
      width="700px">
      <div v-if="setVisible" class="form_container">
        <div class="formBox_title">{{$L.t('lottery.zh93')}}:{{handleInfo.title}}</div>
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh77')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="handleInfo.title" :placeholder="$L.t('lottery.zh94')">
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh95')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="handleInfo.shortName" :placeholder="$L.t('lottery.zh96')">
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh85')}}
            </div>
            <div class="formLi_content">
              <textarea v-model="handleInfo.info"></textarea>
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('common.hot')}}
            </div>
            <div class="formLi_content">
              <select v-model="handleInfo.hot">
                <option value="1">{{$L.t('common.hot')}}</option>
                <option value="0">{{$L.t('common.normal')}}</option>
              </select>
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh87')}}
            </div>
            <div class="formLi_content">
              <input type="number" v-model="handleInfo.data_ftime" :placeholder="$L.t('lottery.zh97')">
            </div>
          </li>
          <li v-if="handleInfo.isSys*1 == 1">
            <div class="formLi_title">
              {{$L.t('lottery.zh88')}}
            </div>
            <div class="formLi_content" style="margin-right: 10px;">
              <input type="text" v-model="handleInfo.profit" :placeholder="$L.t('lottery.zh98')">
            </div>
            <button @click="goOpenCode">{{$L.t('lottery.zh105')}}</button> &nbsp;
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh99')}}
            </div>
            <div class="formLi_content">
              <select v-model="handleInfo.enable">
                <option value="1">{{$L.t('open')}}</option>
                <option value="2">{{$L.t('bonusGame.NiuNiuBetManage.zh43')}}</option>
                <option value="0">{{$L.t('close')}}</option>
              </select>
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh90')}}
            </div>
            <div class="formLi_content">
              <select v-model="handleInfo.planSwitch" :disabled="planStateOnly">
                <option value="1">{{$L.t('open')}}</option>
                <option value="0">{{$L.t('close')}}</option>
              </select>
              <div class="form-planList" v-if="planList.length > 0 && handleInfo.planSwitch*1 == 1 && !planStateOnly">
                <p>{{$L.t('lottery.zh100')}}</p>
                <div>
                  <el-checkbox v-model="item.state" :label="item.class_groupname" border size="small" v-for="(item,index) in planList" :key="index"></el-checkbox>
                </div>
              </div>
              <span v-if="planStateOnly">( {{$L.t('lottery.zh101')}} )</span>
            </div>
          </li>
          <li>
            <!-- 上传彩种图标 -->
            <div class="formLi_title">{{$L.t('lottery.zh82')}}</div>
            <div class="formLi_img">
              <el-upload
                id="el-upload1"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-change='formImageChange'
                :auto-upload='false'
                accept="image/jpeg, image/png">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
          </li>
          <li>
            <!-- 上传维护图标 -->
            <div class="formLi_title">{{$L.t('lottery.zh83')}}</div>
            <div class="formLi_img">
              <el-upload
                id="el-upload1"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-change='mainImageChange'
                :auto-upload='false'
                accept="image/jpeg, image/png">
                <img v-if="maintenanceIcon" :src="maintenanceIcon" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh89')}}
            </div>
            <div class="formLi_content">
              <select v-model="handleInfo.zhuihao">
                <option value="1">{{$L.t('open')}}</option>
                <option value="0">{{$L.t('close')}}</option>
              </select>
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh91')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="handleInfo.sort" :placeholder="$L.t('lottery.zh102')">
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
  import {languageId} from '@/common/common'
  export default {
    data () {
      return {
        sendParmas: {
          enable: 1,
          lotteryType: '0',
          lotteryClassID: '',
        },
        handleInfo: {
          id:'',
          title:'',
          shortName:'',
          info:'',
          hot:'',
          data_ftime:'',
          isSys:'',
          profit:'',
          enable:'',
          planSwitch:'',
          zhuihao:'',
          sort:'',
        },
        setVisible: false,
        planList:[],
        planStateOnly:false,
        imageUrl:'',
        maintenanceIcon:'',
        typeIconImg:'',
        closeIconImg:'',
        lottyId:'',
        lotteryLists:[]
      }
    },
    created (){
      this.getLotteryClassList().then((res) => {
        if (res.data.length > 0) {
          this.sendParmas.lotteryClassID = res.data[0].id
          this.getLotteryList(this.sendParmas)
        }
      })
    },
    mounted(){

    },
    watch:{
      "lotteryStore.lotteryList.data"(n,o) {
        this.lotteryLists = n;
      }
    },
    methods: {
      ...mapMutations([
      ]),
      ...mapActions([
        'getLotteryList',
        'getLotteryClassList',
        'updateLotteryInfo',
        'addQcode'
      ]),
      // 彩种状态类型切换
      initLottery () {
        this.getLotteryList(this.sendParmas)
      },
      // 彩种切换
      lotteryChange (item) {
        this.sendParmas.lotteryClassID = item.id
        this.lottyId = item.id
        this.getLotteryList(this.sendParmas)
      },
      // 设置弹窗打开
      editSetting (item) {
        for (let k in this.handleInfo) {
          this.handleInfo[k] = item[k]
        }
        if(item.planGroupList){
          this.planList = JSON.parse(item.planGroupList)
          this.planStateOnly = false
        }else{
          this.planStateOnly = true
        }


        if(item.typeIcon){
          this.imageUrl = item.typeIcon
          this.typeIconImg = item.typeIcon
        }else{
          this.imageUrl = ''
          this.typeIconImg = ''
        }
        if(item.closeIcon){
          this.maintenanceIcon = item.closeIcon
          this.closeIconImg = item.closeIcon
        }else{
          this.maintenanceIcon = ''
          this.closeIconImg = ''
        }
        this.setVisible = true
      },
      goOpenCode(){
        this.$router.push({
          name:'lottery',
          params:{
            key:5
          },
          query:{
            from: 'lottery'
          }
        })
      },
      checkPlanState(){
        return this.planList.some(function (i) {
          return i.state
        })
      },
      formCommit () {
        delete this.handleInfo.planGroupList
        delete this.handleInfo.planGroup
        let flag = false
        //        计算 计划玩法
        //   计划是否开启
        if(this.handleInfo.planSwitch*1 == 1){
          if(!this.checkPlanState()){
            this.$message(this.$L.t('lottery.zh236'))
            return false
          }
          var postarr = []
          for(let i in this.planList) {
            let obj = {}
            if(this.planList[i].state){
              obj.class_type = this.planList[i].class_type
              obj.class_place = this.planList[i].class_place
              obj.class_groupname = this.planList[i].class_groupname
              postarr.push(obj)
            }
          }
          this.handleInfo.planGroup =  JSON.stringify(postarr)
        }
        this.handleInfo.typeIcon = this.typeIconImg
        this.handleInfo.closeIcon = this.closeIconImg
        for (let k in this.handleInfo) {
          if (this.handleInfo[k].toString() == '') {
            flag = true
            break
          }
        }

        if (flag) {
          this.$message(this.$L.t('lottery.zh104'))
          return false
        }
        this.updateLotteryInfo(this.handleInfo).then(() => {
          this.setVisible = false
          setTimeout(()=>{
            this.getLotteryClassList().then((res) => {
              if (res.data.length > 0) {
                if(this.lottyId){
                  this.sendParmas.lotteryClassID = this.lottyId
                }else{
                  this.sendParmas.lotteryClassID = res.data[0].id
                }
                this.getLotteryList(this.sendParmas)
              }
            })
          },2000)
        })
      },
      // 上传彩种图标
      formImageChange (file, fileList) {
        this.imageUrl = URL.createObjectURL(file.raw)
        this.handlIcon = file.raw
        var da = new FormData()
        let code = languageId(localStorage.getItem('languageId') || 'en')
        da.append('language',code)
        da.append('typeid', 13)
        da.append('file', file.raw)
        da.append('folder', 'typeIcon')
        this.addQcode(da).then(res=>{
          this.typeIconImg = res.data.data
        })
      },
      // 上传维护图标
      mainImageChange (file, fileList) {
        this.maintenanceIcon = URL.createObjectURL(file.raw)
        var da = new FormData()
        let code = languageId(localStorage.getItem('languageId') || 'en')
        da.append('language',code)
        da.append('typeid', 13)
        da.append('file', file.raw)
        da.append('folder', 'closeIcon')
        this.addQcode(da).then(res=>{
          this.closeIconImg = res.data.data
        })
      },
    },
    computed: {
      ...mapState([
        "lotteryStore",
        "setupStore"
      ]),
    },
  }
</script>
<style lang="less" scoped>
*{
  box-sizing: border-box;
}
.lottery-head{
  display: flex;
  align-items: center;
  p{
    margin-right: 20px;
  }
  span{
    margin-right: 10px;
    font-weight: normal;
  }
  select{
    margin-right: 10px;
    padding: 0 5px;
  }
}
.lottery-nav{
  padding: 5px 0;
  button{
    padding: 0 10px;
    margin-right: 10px;
    color: #666;
    &.active{
      color: red;
      background-color: buttonface;
      border-width: 2px;
      border-style: outset;
      border-color: buttonface;
      border-image: initial;
    }
  }
}

.form_container{
  .el-checkbox.is-bordered.el-checkbox--small {
    width:30%;
    margin: 0 1% 5px 1%;
  }
  ul > li {
    &>div.formLi_content{
      flex: 1;
      margin-right: 50px;
      textarea{
        width: 100%;
        min-height: 60px;
        padding-left: 10px;
      }
      .form-planList {
        padding: 5px;
        p{
          padding-bottom:5px;
          border-bottom: 1px solid #ddd;
          margin-bottom: 5px;
          text-align: center;
          color:dodgerblue;
        }
      }
    }
  }
}
.formLi_img{
  background-color: #fbfdff;
  border: 1px dashed #c0ccda;
  border-radius: 6px;
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  cursor: pointer;
  line-height: 80px;
  vertical-align: top;
}
</style>
