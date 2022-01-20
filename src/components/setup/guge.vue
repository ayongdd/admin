<template>
    <div class="container">
      <table class="table" >
        <tbody>
        <tr class="nav">
          <td colspan="10"> {{$L.t('setup.info170')}} </td>
        </tr>
        <tr class="head">
          <td>{{$L.t('setup.info171')}}</td>
          <td>{{$L.t('setup.info172')}}</td>
          <td>{{$L.t('setup.info173')}}</td>
          <td>{{$L.t('manager.info14')}}</td>
          <td>{{$L.t('annoucement.tcgg_1.show')}}</td>
          <td>{{$L.t('setup.info174')}}</td>
          <td>{{$L.t('lottery.zh91')}}</td>
          <td>{{$L.t('table.handle')}}</td>
        </tr>
        <tr class="odd" v-for="item in datalist">
          <td>{{item.name}}</td>
          <td>{{item.typename}}</td>
          <td>{{item.tips}}</td>
           <td>{{item.required == 0?$L.t('setup.info175'):$L.t('manager.info14')}}</td>
          <td>{{item.isshow == 0?$L.t('annoucement.tcgg_1.hide'):$L.t('annoucement.tcgg_1.show')}}</td>
          <td>
            <button v-if="item.dlshow == 0" class="popBtn" @click="showClick(item,1)">{{$L.t('setup.info176')}}</button>
            <button v-else class="popBtn" @click="showClick(item,0)">{{$L.t('setup.info177')}}</button>
          </td>
          <td>{{item.sort}}</td>
          <td><button class="popBtn" @click="editInfoClick(item)">{{$L.t('fixed')}}</button></td>
        </tr>
          <tr v-if="!datalist">
            <td colspan="7" class="nodata">{{$L.t('noData')}}</td>
          </tr>
        </tbody>
      </table>
      <!-- 新增修改 -->
      <el-dialog
        :title="$L.t('fixed')"
        :visible.sync="editInfoVisible"
        width="700px">
        <div v-if="editInfoVisible" class="form_container">
          <div class="formBox_title">{{$L.t('setup.info178')}}</div>
          <ul>
            <li>
              <div class="formLi_title">{{$L.t('setup.info171')}}</div>
              <div class="formLi_content">
                <input type="text" v-model="addList.label" :placeholder="$L.t('setup.info179')">
              </div>
            </li>
            <!-- <li>
              <div class="formLi_title">字段格式</div>
              <div class="formLi_content">
                  <input type="text" v-model="addList.bankNa" placeholder="请输入字段格式">
              </div>
            </li> -->
            <li>
              <div class="formLi_title">{{$L.t('setup.info173')}}</div>
              <div class="formLi_content">
                  <input type="text" v-model="addList.tips" :placeholder="$L.t('setup.info180')">
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('lottery.zh91')}}</div>
              <div class="formLi_content">
                  <input type="text" v-model="addList.sort" :placeholder="$L.t('lottery.zh102')">
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('table.type')}}</div>
              <div class="formLi_content">
                  <select v-model="addList.type">
                    <option v-for="(it,index) in otherData" :key="index" :value="index">{{it}}</option>
                  </select>
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('setup.info181')}}</div>
              <div class="formLi_content">
                <el-radio v-model="addList.isshow" label="1">{{$L.t('annoucement.tcgg_1.show')}}</el-radio>
                <el-radio v-model="addList.isshow" label="0">{{$L.t('annoucement.tcgg_1.hide')}}</el-radio>
              </div>
            </li>
            <li>
              <div class="formLi_title">{{$L.t('setup.info182')}}</div>
              <div class="formLi_content">
                <el-radio v-model="addList.required" label="1">{{$L.t('true')}}</el-radio>
                <el-radio v-model="addList.required" label="0">{{$L.t('false')}}</el-radio>
              </div>
            </li>
            <li>
              <button class="form_commit" @click="submitVal()">{{$L.t('submit')}}</button>
            </li>
          </ul>
        </div>
      </el-dialog>
    </div>
  </template>

  <script>

    import {mapState, mapMutations, mapActions} from 'vuex';
    import {getSession} from '@/common/common'
    export default {
      data () {
        return {
          // 新增内容
          addList:{
            id:'',
            label:'',
            type:'',
            tips:'',
            isshow:'',
            required:'',
            sort:''
          },
          editInfoVisible:false,
          editid:'',
          datalist:[],
          otherData:[]
        }
      },
      created (){
        this.getData()
      },
      methods: {
        ...mapMutations([
        ]),
        ...mapActions([
          "getParamsSetting",
          "updateDlhow",
          "updateParamsSetting",
        ]),
        // 获取数据
        getData(){
          this.getParamsSetting().then(res=>{
              this.datalist = res.data
              this.acount = res.count
          })
        },
        // 修改
        editInfoClick (item) {
          this.editid = item.id
          this.getParamsSetting(this.sendParmas).then(res=>{
            this.otherData = res.otherData
          })
          this.editInfoVisible = true
          for (let k in this.addList) {
            this.addList[k] = item[k]
          }
        },
        // 修改显示隐藏
        showClick(item,index){
          this.updateDlhow({
            id:item.id,
            dlshow:index
          }).then(res=>{
            this.getData()
          })
        },
        // 提交
        submitVal(){
          this.updateParamsSetting(this.addList).then(res=>{
            this.editInfoVisible = false
            this.getData()
          })
        },
      },
      computed: {
        ...mapState([
          "setupStore"
        ]),
      },
    }
  </script>

  <style lang="less" scoped>
.form_container{
  height: 350px;
  padding: 0 10px;
  overflow: auto;
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
        width: 300px;
        margin-right: 20px;
        input{
          width: 100%;
        }
        textarea{
        padding: 10px;
      }
      }
      .formLi_hint{
        font-size: 12px;
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
