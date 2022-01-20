<template>
  <div class="container">
    <table class="table">
      <tbody>
        <tr class="nav">
          <td colspan="10">
            <span style="margin-right: 10px">{{$L.t('manager.info58')}}</span>
            <button class="header_btn" @click="goAuthList()">{{$L.t('manager.info59')}}</button>
          </td>
        </tr>
        <tr class="head">
          <td>{{$L.t('manager.info60')}}</td>
          <td>{{$L.t('manager.info61')}}</td>
          <td>{{$L.t('manager.info62')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr class="odd" v-for="(item,index) in
          managerStore.dataRoleList.data.data" :key="index">
          <td>{{item.name}}</td>
          <td :class="item.state == 1?'color_green_c':'color-red'">{{item.state == 0? $L.t('manager.info63'):$L.t('manager.info64')}}</td>
          <td>{{times(item.update)}}</td>
          <td>
            <button v-if="item.state == 0" class="popBtn" @click="enableChange(item.id, 1)">{{$L.t('lottery.zh126')}}</button>
            <button v-else  class="popBtn" @click="enableChange(item.id, 0)">{{$L.t('annoucement.xttz_5.zh4')}}</button>
            <button @click="editData(item)">{{$L.t('manager.info65')}}</button>
            <button v-if="item.id != 1" @click="delectData(item)">{{$L.t('delete')}}</button>
          </td>
        </tr>
        <tr v-if="getPageData.sum> 0">
          <td colspan="5">
            <page-limit :pageData="getPageData" :inputShow="'1'"
              @handlePage="handlePage"></page-limit>
          </td>
        </tr>
        <tr v-if="!managerStore.dataRoleList.data.data">
          <td colspan="8" class="nodata">{{$L.t('noData')}}</td>
        </tr>
      </tbody>
    </table>
    <!-- 权限页面组件 -->
    <div v-if="authVisible" class="authList_container">
      <manager-set
        :authData="authList"
        :authDataName="authDataName"
        @commit="getAuthIdList"
        @close="authVisible = false"
        @confirmShow="confrimShow">
      </manager-set>
    </div>

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
        visibleNum:'',
        addList:{
          username:'',
          password:'',
          role_id:'',
          cash_id:''
        },
        editid:'',
        passid:'',
        // 权限
        handleInfo: {},
        authVisible: false,
        authDataName: '',
        authList: [],
        // 弹窗限制
        confirmVisible: false,
        confirmContent: '',
        confirmType: '',
        confirmInfo: {},
      }
    },
    watch: {
      'managerStore.dataAuthList.data' (newList) {
        // console.log(newList)
        this.authList = newList
      }
    },
    created (){
      this.getRoleList(this.sendParmas)
      this.getAuthList()
    },
    computed: {
      ...mapState([
        'managerStore'
      ]),
      // 在线会员分页
      getPageData () {
        return {
          page: this.sendParmas.page,
          limit: this.sendParmas.limit,
          sum: this.managerStore.dataRoleList.data.count || 0
        }
      },
    },
    methods: {
      ...mapMutations([

      ]),
      ...mapActions([
        "getRoleList",
        // "getAllRoleList",
        "updateManInfo",
        "addBusiness",
        "updateManPassword",
        "getAuthList",
        "setDisable",
        'addRole',
        'editRoleList',
        "deleteRole"
      ]),
      // 添加角色
      goAuthList () {
        if (this.authList.length > 0) {
          this.authDataName = ''
          for (let k in this.authList) {
            this.authList[k].active = true
            for (let t in this.authList[k].list) {
              this.authList[k].list[t].checked = false
              for (let z in this.authList[k].list[t].list){
                this.authList[k].list[t].list[z].checked = false
              }
            }
          }
          this.authVisible = true
        } else {
          this.$message(this.$L.t('manager.info66'))
        }
      },
      // 列表分页
      handlePage (data) {
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit
        this.getRoleList(this.sendParmas)
      },
      // 删除
      delectData(item){
        this.confirmVisible = true
        this.confirmContent =  this.$L.t('manager.info67')+`${item.name}`+this.$L.t('manager.info68')
        this.confirmInfo = item
        this.confirmType = 'del'
      },
      // 提示弹窗 确定事件
      commitModel () {
        // 删除
        if (this.confirmType == 'del') {
          this.deleteRole({id:this.confirmInfo.id}).then(res=>{
            this.confirmVisible = false
            this.getRoleList(this.sendParmas)
          })
        }
        // 权限返回
        if (this.confirmType == 'back') {
          this.confirmVisible = false
          this.authVisible = false
        }
      },
      // 启用禁用
      enableChange(id,e){
        this.setDisable({id:id,state:e}).then(res=>{
          this.getRoleList(this.sendParmas)
        })
      },
      // 获取选中id
      getAuthIdList (list, name, type) {
        // console.log(list, name)
        // 添加
        if (type == 1) {
          this.addRole({
            name,
            ids: list
          }).then(() => {
            this.authVisible = false
            this.getRoleList(this.sendParmas)
          })
        } else {
          this.editRoleList({
            id: this.handleInfo.id,
            name,
            ids: list
          }).then(() => {
            this.authVisible = false
            this.getRoleList(this.sendParmas)
          })
        }
      },
      // 权限返回事件
      confrimShow () {
        this.confirmVisible = true
        this.confirmContent = this.$L.t('manager.info69')
        this.confirmType = 'back'
      },
      // 修改权限
      editData (item) {
        this.handleInfo = item
        let authId = item.mid.split(',')
        // console.log(authId)
        for (let k in this.authList) {
          this.authList[k].active = true
          let list = this.authList[k].list
          for (let t in list) {
            let flag = authId.some(res => res == list[t].id)
            if(flag) {
              list[t].checked = true
            } else {
              list[t].checked = false
            }
            let lastlist = list[t].list
            for (let z in lastlist) {
              let state = authId.some(res => res == lastlist[z].id)
              if(state) {
                lastlist[z].checked = true
              } else {
                lastlist[z].checked = false
              }
            }
          }
        }
        this.authDataName = item.name
        this.authVisible = true
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
      }
    }
  }
</script>
<style lang="less" scoped>
.container{
  position: absolute;
  top: 0;
  width: 100%;
  bottom: 5px;
  overflow: hidden;
}
.header_btn{
  padding: 0px 5px;
  font-size: 12px;
  line-height: 18px;
  a{
    color:black;
  }
}
.form_container{
  height: 250px;
}
.authList_container{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 99;
  overflow: hidden;
}
</style>
