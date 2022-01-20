<template>
  <div class="container">
  <table class="table clearfloat" id="search">
      <tbody>
        <tr class="nav">
          <td>{{$L.t('agent.agent_1.transferM')}}</td>
        </tr>
      </tbody>
    </table>
    <table class="table">
        <tbody>
          <tr class="head">
            <td colspan="2">{{$L.t('agent.agent_1.transferM')}}</td>
          </tr>
          <tr class="agent_user">
            <td>{{$L.t('agent.agent_1.search')}}</td>
            <td>
              <input type="text" v-model="user" :placeholder="$L.t('agent.agent_1.import')">
              <button @click="search()" class="popBtn">{{$L.t('agent.agent_1.search')}}</button>
              <button @click="clearSearch()" class="popBtn">{{$L.t('agent.agent_1.clear')}}</button>
              <span>{{$L.t('agent.agent_1.alert1')}}</span>
            </td>
          </tr>
          <tr class="agent_user">
            <td>{{$L.t('agent.agent_1.alert2')}}</td>
            <td>
              <input type="text" v-model="daili" :placeholder="$L.t('agent.agent_1.alert3')">
              <button @click="examination()" class="popBtn">{{$L.t('agent.agent_1.alert10')}}</button>
              <span>{{$L.t('agent.agent_1.alert11')}}</span>
            </td>
          </tr>
          <!-- 彩票返点 -->
          <tr class="agent_user">
            <td>{{$L.t('agent.agent_1.alert12')}}</td>
            <td>
              <input type="number" v-model="fanDian" :placeholder="$L.t('agent.agent_0.plhcp')">
              <span>%</span>
              <span v-show="returnPoint" class="red">{{$L.t('agent.agent_7.qsr')}}{{point.fanDianDiff + '-' + point.fanDianMax}}%{{$L.t('agent.agent_8.zh25')}}</span>
            </td>
          </tr>
          <!-- 真人返点 -->
          <tr class="agent_user">
            <td>{{$L.t('agent.agent_1.alert13')}}</td>
            <td>
              <input type="number" v-model="ag_type" :placeholder="$L.t('agent.agent_0.plhzr')">
              <span>%</span>
              <span v-show="returnPoint" class="red">{{$L.t('agent.agent_7.qsr')}}{{point.fanDianPersonMin + '-' + point.fanDianPersonMax}}%{{$L.t('agent.agent_8.zh25')}}</span>
            </td>
          </tr>
          <!-- 电子返点 -->
          <tr class="agent_user">
            <td>{{$L.t('agent.agent_1.alert14')}}</td>
            <td>
              <input type="number" v-model="pw_type" :placeholder="$L.t('agent.agent_0.plhdz')">
              <span>%</span>
              <span v-show="returnPoint" class="red">{{$L.t('agent.agent_7.qsr')}}{{point.fanDianElectronicsMin + '-' + point.fanDianElectronicsMax}}%{{$L.t('agent.agent_8.zh25')}}</span>
            </td>
          </tr>
          <!-- 棋牌返点 -->
          <tr class="agent_user">
            <td>{{$L.t('agent.agent_1.alert15')}}</td>
            <td>
              <input type="number" v-model="ch_type" :placeholder="$L.t('agent.agent_0.plhqp')">
              <span>%</span>
              <span v-show="returnPoint" class="red">{{$L.t('agent.agent_7.qsr')}}{{point.fanDianChessMin + '-' + point.fanDianChessMax}}%{{$L.t('agent.agent_8.zh25')}}</span>
            </td>
          </tr>
          <!-- 体育返点 -->
          <tr class="agent_user">
            <td>{{$L.t('agent.agent_1.alert16')}}</td>
            <td>
              <input type="number" v-model="st_type" :placeholder="$L.t('agent.agent_0.plhty')">
              <span>%</span>
              <span v-show="returnPoint" class="red">{{$L.t('agent.agent_7.qsr')}}{{point.fanDianSportsMin + '-' + point.fanDianSportsMax}}%{{$L.t('agent.agent_8.zh25')}}</span>
            </td>
          </tr>
          <!-- 电竞返点 -->
          <tr class="agent_user">
            <td>{{$L.t('agent.agent_1.alert17')}}</td>
            <td>
              <input type="number" v-model="mt_type" :placeholder="$L.t('agent.agent_0.plhdj')">
              <span>%</span>
              <span v-show="returnPoint" class="red">{{$L.t('agent.agent_7.qsr')}}{{point.fanDianMatchMin + '-' + point.fanDianMatchMax}}%{{$L.t('agent.agent_8.zh25')}}</span>
            </td>
          </tr>
          <tr class="agent_user" v-if="userid == 1">
            <td>{{$L.t('agent.agent_1.alert4')}}</td>
              <td ref="table">
                  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">{{$L.t('agent.agent_1.allSelect')}}</el-checkbox>
                  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="(item,index) in datalist" :label="item" :key="index">{{item.username}}</el-checkbox>
                  </el-checkbox-group>
              </td>
            </tr>
          <tr class="end">
            <td colspan="2">
              <input @click="sureTransfer()" type="submit" :value="$L.t('agent.agent_1.transfer')">
              <p>{{$L.t('agent.agent_1.alert5')}}。
                </p>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
  </template>

  <script>

    import {mapState, mapMutations, mapActions} from 'vuex';
    import {getDate,setDate,copyobj,setSession,getSession,getchar,randomRange} from '@/common/common'
    export default {
      data () {
        return {
          user:'',
          daili:'',
          datalist:[],
          userid: 0,
          newdata:[],
          point:'',
          fanDian:'',
          returnPoint:false,
          // 全选
          checkAll: false,
          checkedCities: [],
          isIndeterminate: true,
          users:'',
          ch_type:'',
          ag_type:'',
          pw_type:'',
          st_type:'',
          mt_type:'',
        }
      },
      created (){
      },
      methods: {
        ...mapMutations([
        ]),
        ...mapActions([
          "searchUser",
          "upAgentTransfer",
          "upAgentDochange"
        ]),
        handleCheckAllChange(val) {
          this.checkedCities = val ? this.datalist : [];
          this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
          let checkedCount = value.length;
          this.checkAll = checkedCount === this.datalist.length;
          this.isIndeterminate = checkedCount > 0 && checkedCount < this.datalist.length;
        },
        // 搜索
        search(){
          if(this.user){
            this.searchUser({user:this.user}).then((res)=>{
              this.datalist = this.datalist.concat(res)
              var arr2=[]
              this.datalist.forEach(item=>{
                let uids = arr2.map(item=>item.uid)
                if(uids.indexOf(item.uid)<0){
                  arr2.push(item)
                }
              })
              this.datalist = arr2
              this.userid = 1
            })
          }else{
            this.$message({
              message: this.$L.t('agent.agent_1.alert6'),
              type: 'warning'
            });
          }
        },
        // 清空搜索
        clearSearch(){
          this.user = ""
          this.datalist = []
          this.userid = '0'
          this.checkedCities = []
        },
        // 点击审查
        examination(){
          if(this.user == this.daili){
            this.$message({
              message: this.$L.t('agent.agent_1.alert7'),
              type: 'warning'
            });
          }else{
            if(this.daili){
              this.upAgentTransfer({daili:this.daili}).then(res=>{
                this.point = res
                console.log(this.point)
                this.returnPoint = true
              })
            }else{
              this.$message({
                message: this.$L.t('agent.agent_1.alert3'),
                type: 'warning'
              });
            }
          }
        },
        // 确认转移
        sureTransfer(){
          if(!this.user){
            this.$message({
              message: this.$L.t('agent.agent_1.alert8'),
              type: 'warning'
            });
          }else if(!this.daili){
            this.$message({
              message: this.$L.t('agent.agent_1.alert3'),
              type: 'warning'
            });
          }else if(this.user == this.daili){
            this.$message({
              message: this.$L.t('agent.agent_1.alert9'),
              type: 'warning'
            });
          }else{
            let str = []
            for(let i = 0;i< this.checkedCities.length;i++){
              str.push(this.checkedCities[i].uid)
            }
            this.users = str.join(',')
            let da = {
              touser:this.daili,
              users:this.users,
              fanDian:this.fanDian,
              ch_type:this.ch_type,
              ag_type:this.ag_type,
              pw_type:this.pw_type,
              st_type:this.st_type,
              mt_type:this.mt_type,
            }
            this.upAgentDochange(da).then(res=>{
              this.returnPoint = false
              this.user = ""
              str = []
              this.daili = '',
              this.fanDian = ''
              this.ch_type = ''
              this.ag_type = ''
              this.pw_type = ''
              this.st_type = ''
              this.mt_type = ''
              this.checkedCities = []
              this.datalist = []
              this.userid = '0'
            })
          }
        },
      },
      computed: {
        ...mapState([
          "indexStore",
          "agentStore"
        ]),
      },
    }
  </script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="less" scoped>
    .agent_title{
      height: 30px;
      line-height: 30px;
      background: #c8dadf;
      font-size: 13px;
      color: #313F44;
      padding-left: 5px;
      font-weight: bold;
    }
    .agent{
      margin: 10px auto 0 5px;
    }
    .agent_user{
      td{
        input{
          line-height: 20px;
        }
        &:first-child{
          width: 150px;
        }
      }
    }
    .end{
      input{
        padding:3px 15px;
      }
    }
  </style>
