<template>
  <div class="container">
    <table class="table">
      <tbody>
        <tr class="nav">
          <td colspan="10">
            <span style="margin-right: 10px">{{$L.t('manager.info1')}}</span>
            <button class="header_btn" @click="addData()">{{$L.t('manager.info2')}}</button>
          </td>
        </tr>
        <tr class="head">
          <td>{{$L.t('table.username')}}</td>
          <td>{{$L.t('manager.info3')}}</td>
          <td>{{$L.t('manager.info4')}}</td>
          <td>{{$L.t('manager.info5')}}</td>
          <td>{{$L.t('lottery.zh53')}}</td>
          <td>{{$L.t('table.status')}}<td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr class="odd" v-for="(item,index) in managerStore.dataBusinessList.data.data" :key="index">
          <td>{{item.username}}</td>
          <td>{{item.loginIP}}</td>
          <td>{{item.name}}</td>
          <td>{{item.loginTime}}</td>
          <td :style="{color:item.safeStatus*1 == 1 ? 'green' : 'red'}">{{item.safeStatus*1 == 1 ? $L.t('manager.info7') : $L.t('manager.info8')}}</td>
          <td v-html="item.online"></td>
          <td></td>
          <td>
            <button @click="goBindAdmin" v-if="item.uid == 27 && item.safeStatus*1 == 0">{{$L.t('manager.info9')}}</button>
            <button @click="bindSafe(item)" v-if="item.uid != 27">{{item.safeStatus*1 == 1 ? $L.t('manager.info10') : $L.t('manager.info11')}}</button>
            <button @click="editPassword(item)">{{$L.t('manager.info12')}}</button>
            <button @click="editData(item)">{{$L.t('manager.info13')}}</button>
            <button @click="delectData(item)">{{$L.t('delete')}}</button>
          </td>
        </tr>
        <tr v-if="getPageData.sum> 0">
          <td colspan="10">
            <page-limit :pageData="getPageData" :inputShow="'1'"
              @handlePage="handlePage"></page-limit>
          </td>
        </tr>
        <tr v-if="!managerStore.dataBusinessList.data.data">
          <td colspan="10" class="nodata">{{$L.t('noData')}}</td>
        </tr>
      </tbody>
    </table>
    <!-- 添加管理员 -->
    <el-dialog
      :title="titleAnnout"
      :visible.sync="editInfoVisible"
      width="500px">
      <div v-if="editInfoVisible" class="form_container form_list">
        <div class="formBox_title">{{titleMnage}}</div>
        <ul>
          <li v-if="visibleNum == 1">
            <div class="formLi_title">{{$L.t('table.username')}}({{$L.t('manager.info14')}})</div>
            <div class="formLi_content">
              <input type="text" v-model="addList.username"
                   :placeholder="$L.t('agent.agent_1.import')">
            </div>
          </li>
          <li v-if="visibleNum == 1">
            <div class="formLi_title">{{$L.t('login.pwd')}}({{$L.t('manager.info14')}})</div>
            <div class="formLi_content">
              <input type="password" v-model="addList.password" :placeholder="$L.t('manager.info15')">
            </div>
          </li>
          <li>
            <div class="formLi_title">{{$L.t('manager.info4')}}({{$L.t('manager.info14')}})</div>
            <div class="formLi_content">
                <select v-model="addList.role_id">
                  <option value="">{{$L.t('manager.info17')}}</option>
                  <option v-for="(item,index) in managerStore.dataAllRoleList.data.role" :key="index" :value="item.id">{{item.name}}</option>
                </select>
            </div>
          </li>
          <li>
            <div class="formLi_title">{{$L.t('manager.info18')}}</div>
            <div class="formLi_content">
                <select v-model="addList.cash_id">
                  <option value="">{{$L.t('manager.info19')}}</option>
                  <option v-for="(item,index) in managerStore.dataAllRoleList.data.amount" :key="index" :value="item.id">{{item.name}}</option>
                </select>
                <span style="color:red;">({{$L.t('manager.info20')}})</span>
            </div>
          </li>
          <li>
            <button class="form_commit" @click="submitVal()">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>
    <!-- 修改密码 -->
    <el-dialog
      :title="$L.t('manager.info21')"
      :visible.sync="editPassVisible"
      width="500px">
      <div v-if="editPassVisible" class="form_container form_list">
        <div class="formBox_title">{{$L.t('login.pwd')}}</div>
        <ul>
          <li v-if="!indexStore.dataAdminInfo.updateName">
            <div class="formLi_title">{{$L.t('manager.info22')}}</div>
            <div class="formLi_content">
              <input type="password" v-model="modify.oldpwd"
                     :placeholder="$L.t('manager.info23')">
            </div>
          </li>
          <li>
            <div class="formLi_title">{{$L.t('manager.info24')}}</div>
            <div class="formLi_content">
              <input type="password" v-model="newpassword" :placeholder="$L.t('manager.info25')">
            </div>
          </li>
          <li>
            <div class="formLi_title">{{$L.t('manager.info26')}}</div>
            <div class="formLi_content">
              <input type="password" v-model="modify.password" :placeholder="$L.t('manager.info27')">
            </div>
          </li>
          <li>
            <button class="form_commit" @click="submitValpassword()">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>
    <!-- 绑定安全盾 -->
    <el-dialog
      :title="$L.t('manager.info11')"
      :visible.sync="safeDunState"
      width="600px">
      <div v-if="safeDunState" class="safe-dun">
        <div style="text-align: center;">
          <p>{{$L.t('manager.info28')}}</p>
          <img :src="safeCodeImg" alt="">
        </div>
        <div class="safe-dun-from">
          <p>{{$L.t('manager.info29')}}</p>
          <el-input type="number" :placeholder="$L.t('manager.info30')" v-model="safeDunObj.adminCode"></el-input>
          <el-input type="number" :placeholder="$L.t('manager.info31')" v-model="safeDunObj.userCode"></el-input>
          <el-button type="primary" plain @click="bindSafeDunPost">{{$L.t('manager.info32')}}</el-button>
        </div>

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
  import { Loading,Message,MessageBox} from 'element-ui';
  export default {
    data () {
      return {
        sendParmas: {
          page: 1,
          limit: 20,
          sum:''
        },
        titleAnnout:'',
        editInfoVisible:false,
        editPassVisible:false,
        visibleNum:'',
        addList:{
          username:'',
          password:'',
          role_id:'',
          cash_id:''
        },
        editid:'',
        newpassword:'',
        modify:{
          uid:'',
          password:'',
          oldpwd:''
        },
        passid:'',
        confirmVisible: false,
        confirmContent: '',
        confirmId: '',
        username:'',
        titleMnage:"",
        safeDunState:false,  // 安全盾
        safeDunObj:{
          uid:'',
          adminCode:'',
          userKey:'',
          userCode:'',
        },
        safeCodeImg:'',
        safeUrl:'',
        headInfo:{}

      }
    },
    created (){
      this.getBusinessList(this.sendParmas)
      this.getAllRoleList()
      this.safeUrl= window.host;
      this.getTopInfo().then(res => {
        this.headInfo = res.data
      })
    },
    computed: {
      ...mapState([
        'managerStore',
        'indexStore'
      ]),
      // 在线会员分页
      getPageData () {
        return {
          page: this.sendParmas.page,
          limit: this.sendParmas.limit,
          sum: this.managerStore.dataBusinessList.data.count || 0
        }
      },
    },
    methods: {
      ...mapMutations([

      ]),
      ...mapActions([
        "getBusinessList",
        "getAllRoleList",
        "updateManInfo",
        "addBusiness",
        "updateManPassword",
        "deleteManager",
        "getSystemVerifyCodeSecret",
        "managerBindSafeKey",
        "getTopInfo"
      ]),
      goBindAdmin(){
        this.$router.push({
          name:'systemSafe',
          params:{
            key:1
          }
        })
      },
      bindSafe(i){
        this.safeDunObj.adminCode =''
        this.safeDunObj.userCode =''
        this.getSystemVerifyCodeSecret({username:i.username}).then((res)=>{
          if(res.code == 0 || res.code == 8888){
            this.safeDunObj.uid = i.uid
            this.safeDunObj.userKey = res.data.secret
            this.safeCodeImg = this.safeUrl + res.data.qrCodeUrl
            this.safeDunState = true
          }else{
            Message({
              message:this.$L.t('manager.info33'),
              type:"warning",
              showClose:true
            })
          }
        })
      },
      bindSafeDunPost(){
        if(!this.safeDunObj.adminCode){
          Message({
            message:this.$L.t('manager.info41'),
            type:"warning",
            showClose:true
          })
          return
        }
        if(!this.safeDunObj.userCode){
          Message({
            message:this.$L.t('manager.info34'),
            type:"warning",
            showClose:true
          })
          return
        }
        this.managerBindSafeKey(this.safeDunObj).then(()=>{
          this.safeDunState = false
          this.getBusinessList(this.sendParmas)
        })


      },
      // 列表分页
      handlePage (data) {
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit
        this.getBusinessList(this.sendParmas)
      },
      // 添加
      addData(){
        this.titleAnnout = this.$L.t('chatRoom.zh58')
        this.titleMnage = this.$L.t('financial.zh32')
        this.editInfoVisible = true
        this.visibleNum = 1
        this.clernContent()
      },
      // 修改
      editData (item) {
        this.visibleNum = 2
        this.editid = item.uid
        this.titleAnnout = this.$L.t('manager.info21')
        this.editInfoVisible = true
        this.addList.role_id = item.id
        if(item.cid == null){
          this.addList.cash_id = ''
          this.titleMnage = this.$L.t('manager.info4')
        }
        this.getAllRoleList().then(res=>{
          var amoutdata = res.data.amount
          for(let k in amoutdata){
            if(amoutdata[k].id == item.cid){
              this.addList.cash_id = amoutdata[k].id
            }
          }
        })

        this.addList.username = '',
        this.addList.password = ''
      },
      // 修改密码
      editPassword(item){
        this.passid = item.uid
        this.editPassVisible = true
        this.modify.oldpwd = ''
        this.newpassword = ''
        this.modify.password = ''
      },
      // 确认修改密码
      submitValpassword(){
        if(!this.indexStore.dataAdminInfo.updateName){//普通用户
          if(!this.modify.oldpwd){
            Message({
              message:this.$L.t('manager.info35'),
              type:"warning",
              showClose:true
            })
            return false
          }
        }
        if(!this.newpassword || !this.modify.password){
          Message({
            message:this.$L.t('manager.info36'),
            type:"warning",
            showClose:true
          })
        }else if(this.newpassword != this.modify.password){
          Message({
            message:this.$L.t('manager.info37'),
            type:"warning",
            showClose:true
          })
        }else{
          this.modify.uid = this.passid
          this.updateManPassword(this.modify).then(res=>{
            this.editPassVisible = false
          })
        }
      },
      // 提交
      submitVal(){
        if(this.visibleNum == 1){//新增
          if(!this.addList.username || !this.addList.password || !this.addList.role_id){
            Message({
              message:this.$L.t('manager.info38'),
              type:"warning",
              showClose:true
            })
          }else{
            this.addBusiness({
              username:this.addList.username,
              password:this.addList.password,
              role_id:this.addList.role_id,
              cash_id:this.addList.cash_id,
            }).then(res=>{
              this.editInfoVisible = false
              this.getBusinessList(this.sendParmas)
            })
          }
        }else{//修改
          this.updateManInfo({
            uid:this.editid,
            role_id:this.addList.role_id,
            cash_id:this.addList.cash_id,
          }).then(res=>{
            this.editInfoVisible = false
            this.getBusinessList(this.sendParmas)
          })
        }
      },
      // 清空内容
      clernContent(){
        for (let k in this.addList) {
          this.addList[k] = ''
        }
      },
      // 删除
      delectData(item){
        this.confirmVisible = true
        this.confirmContent = this.$L.t('manager.info39')+`${item.username}`+this.$L.t('manager.info40')
        this.confirmId = item.uid
        this.username = item.username
      },
      commitModel(){
        this.deleteManager({username:this.username,uid:this.confirmId}).then(res=>{
          this.confirmVisible = false
          this.getBusinessList(this.sendParmas)
        })
      },
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .header_btn{
    padding: 0px 5px;
    font-size: 12px;
    line-height: 18px;
  }
  .form_container{
    height: 250px;
  }
  .safe-dun {
    padding: 10px;
    height: 300px;
    display: flex;
    p{
      line-height: 40px;
      color:dodgerblue;
    }
  }

  .safe-dun .safe-dun-from {
    padding-left: 50px;
    width: 260px;
  }
  .safe-dun img{
    max-height: 100%;
    max-width: 100%;
  }

  .form_container ul li .formLi_title{
       width:141px;
  }
</style>
