<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>
          {{$L.t('lottery.zh129')}}
        </td>
      </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
      <tr class="head">
        <td>{{$L.t('table.danhao')}}</td>
        <td>{{$L.t('table.caizhong')}}</td>
        <td>{{$L.t('table.issue')}}</td>
        <td>{{$L.t('table.playType')}}</td>
        <td>{{$L.t('table.betNumber')}}</td>
        <td>{{$L.t('lottery.zh130')}}</td>
        <td>{{$L.t('table.beishu')}}</td>
        <td>{{$L.t('chatRoom.zh69')}}</td>
        <td>{{$L.t('table.benTime')}}</td>
        <td>{{$L.t('lottery.zh105')}}</td>

      </tr>
      <tr class="odd" v-for="kj in lotteryStore.checkLotteryKJList.data.data">
        <td>{{kj.wjorderId}}</td>
        <td>{{kj.typeName}}</td>
        <td>{{kj.actionNo}}</td>
        <td>{{kj.playedName}}</td>
        <td>{{kj.actionData}}</td>
        <td>{{kj.lotteryNo || $L.t('null')}}</td>
        <td>{{kj.bonusProp}}</td>
        <td>{{kj.amount}}</td>
        <td>{{kj.actionTime}}</td>
        <td>
          <button v-on:click="openCode(kj)" v-if="kj.lotteryNo">{{$L.t('lottery.zh105')}}</button>
          <button v-on:click="addCode(kj)" v-else>{{$L.t('financial.zh100')}}</button>
        </td>
      </tr>
      <tr v-if="getPageData.sum > 0">
        <td colspan="10">
          <page-limit :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
        </td>
      </tr>
      <tr v-if="!lotteryStore.checkLotteryKJList.data.data">
        <td colspan="15" class="nodata">
          {{$L.t('noData')}}
        </td>
      </tr>
      </tbody>
    </table>
    <el-dialog
      :title="$L.t('lottery.zh138')"
      :visible.sync="editOpenDataVisible"
      width="500px">
      <div v-if="editOpenDataVisible" class="form_container">
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('table.issue')}}
            </div>
            <div class="formLi_content">
              <input type="text" v-model="openData.number" readonly>
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh131')}}
            </div>
            <div class="formLi_content">
              <input type="tel" v-model="openData.time" readonly>
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh130')}}
            </div>
            <div class="formLi_content" >
              <input type="tel" v-model="openData.data" :placeholder="$L.t('lottery.zh132')">
            </div>
          </li>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh133')}}
            </div>
            <div class="formLi_content">
              {{$L.t('lottery.zh134')}}！ <br>
              {{$L.t('lottery.zh135')}}
            </div>
          </li>
          <li>
            <button class="form_commit" @click="saveOpenCodePlay">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  import {MessageBox,Message} from  'element-ui'
  export default {
    data () {
      return {
        sendParmas:{
          page:1,
          limit:'15',
        },
        openData:{
          data:'',
          number:'',
          time:'',
          type:'',
        },
        editOpenDataVisible:false
      }
    },
    created (){
        this.checkLotteryKJ(this.sendParmas)
    },
    methods: {
      ...mapMutations([

      ]),
      ...mapActions([
        "checkLotteryKJ",
        "addLotteryKJ"
      ]),
      handlePage(data){
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit
        this.checkLotteryKJ(this.sendParmas)
      },

      openCode(kj){
        this.$confirm(this.$L.t('lottery.zh136'), this.$L.t('chatRoom.zh52'), {
          confirmButtonText: this.$L.t('lottery.zh137'),
          cancelButtonText: this.$L.t('cancel'),
          type: 'warning'
        }).then(() => {

          this.addLotteryKJ({data:kj.lotteryNo,number:kj.actionNo,time:kj.kjTime,type:kj.type})

        }).catch(() => {

        });
      },
      addCode(kj){
        this.openData.data = kj.lotteryNo
        this.openData.number = kj.actionNo
        this.openData.time = kj.kjTime
        this.openData.type = kj.type
        this.editOpenDataVisible = true
      },
      saveOpenCodePlay(){
        if(!this.openData.data){
          Message({
            message:this.$L.t('lottery.zh132'),
            showClose:true
          })
          return;
        }
        this.addLotteryKJ(this.openData).then(()=>{
          this.editOpenDataVisible = false
        })
      },

    },
    components:{

    },
    computed: {
      ...mapState([
        "lotteryStore",
      ]),
      getPageData () {
        return {
          page: this.sendParmas.page,
          limit: this.sendParmas.limit,
          sum: this.lotteryStore.checkLotteryKJList.data.count || 0
        }
      }
    },
    filters:{

    }
  }
</script>
<style lang="css" scoped>
  table tr .odd:hover {
    background-color: #ccffcc;
  }
  .timeShow{
    display: flex;
  }
  .submitSeach{
    margin-left: 15px;
  }
  .submitSeach input{
    padding: 0 5px;
  }
  .form_container{
  ul > li {
  &>div.formLi_content{
      flex: 1;
      margin-right: 50px;
  textarea{
    width: 100%;
    min-height: 60px;
    padding-left: 10px;
  }
  }
  }
  }
</style>
