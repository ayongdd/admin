<template>
  <div class="container">
      <table class="table">
        <tbody><tr class="head">
            <td colspan="2">{{$L.t('annoucement.wjtz_3.zh1')}}</td>
          </tr>
          <tr>
            <td>{{$L.t('agent.agent_0.huiy')}}</td>
            <td>
              <select v-model="sendData.status">
                <option value="1">{{$L.t('annoucement.wjtz_3.zh2')}}</option>
                <option value="0">{{$L.t('annoucement.wjtz_3.zh3')}}</option>
                <option value="2">{{$L.t('annoucement.wjtz_3.zh4')}}</option>
              </select>({{$L.t('annoucement.wjtz_3.zh5')}})
            </td>
          </tr>
          <tr id="inputMembers" v-if="sendData.status == 1">
            <td>{{$L.t('annoucement.wjtz_3.zh2')}}</td>
            <td>
              <textarea style="width: 460px;height:
                70px;resize: none;" v-model="sendData.users">,</textarea>
              <span style="display: inline-block">
                &nbsp;{{$L.t('annoucement.wjtz_3.zh6')}}。
                <br>
                &nbsp;{{$L.t('annoucement.wjtz_3.zh7')}}<span style="color: red" class="words-num">1</span>
              </span>
            </td>
          </tr>
          <tr id="inputAgents" v-if="sendData.status == 2">
            <td>{{$L.t('annoucement.wjtz_3.zh8')}}</td>
            <td>
              <textarea style="width: 460px;height:
                70px;resize: none;" v-model="sendData.users">,</textarea>
              <span style="display: inline-block">
                &nbsp;{{$L.t('annoucement.wjtz_3.zh9')}}。
                <br>
                &nbsp;{{$L.t('annoucement.wjtz_3.zh10')}}<span style="color: red" class="words-num">1</span>
              </span>
            </td>
          </tr>
          <tr>
            <td>{{$L.t('annoucement.swtz_4.title')}}</td>
            <td>
              <textarea style="width: 520px;height:50px;resize: none;" v-model="sendData.title"></textarea>
            </td>
          </tr>
          <tr>
            <td>{{$L.t('annoucement.swtz_4.content')}}</td>
            <td>
              <textarea rows="20" cols="100" v-model="sendData.content"></textarea>
            </td>
          </tr>
          <tr class="end">
            <td colspan="2">
              <input type="button" class="commit_btn" :value="$L.t('sure')" @click="commitClick()">
            </td>
          </tr>
        </tbody>
      </table>
    <table class="table">
      <tbody>
        <tr>
          <td colspan="6">
            {{$L.t('annoucement.wjtz_3.zh15')}}:
              <input type="text" v-model="sendParmas.username">
              <input type="button" class="search_btn" :value="$L.t('query')" @click="userSearch()">
          </td>
        </tr>
        <tr class="head head_title">
          <th>{{$L.t('annoucement.swtz_4.title')}}</th>
          <th class="content_limit">{{$L.t('annoucement.swtz_4.content')}}</th>
          <th>{{$L.t('annoucement.wjtz_3.zh14')}}</th>
          <th>{{$L.t('annoucement.wjtz_3.zh11')}}</th>
          <th>{{$L.t('annoucement.wjtz_3.zh12')}}</th>
          <th>{{$L.t('table.handle')}}</th>
        </tr>
        <tr v-for="(item, index) in annoucementStore.sendBoxList.data.data">
          <td>{{item.title}}</td>
          <td class="content_limit">
            {{item.content}}
          </td>
          <td>
            {{getTimes(item.time * 1000)}}
          </td>
          <td>{{item.from_username}}</td>
          <td>
            <span v-if="item.status == 0">{{$L.t('agent.agent_8.zh49')}}</span>
            <span v-else-if="item.status == 1">{{$L.t('annoucement.wjtz_3.zh2')}}</span>
            <span v-else>{{$L.t('annoucement.wjtz_3.zh13')}}</span>
          </td>
          <td>
            <button class="popBtn" @click="handleDel(item.mid)">{{$L.t('delete')}}</button>
          </td>
        </tr>
        <tr v-if="getPageData.sum>0">
            <td colspan="8">
              <page-limit :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
            </td>
          </tr>
        <tr v-if="!annoucementStore.sendBoxList.data.data">
          <td colspan="8" class="nodata">{{$L.t('noData')}}</td>
        </tr>
      </tbody>
    </table>
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
  import {getDate,setDate,copyobj,setSession,getSession,getchar,randomRange,getLocalTime,getTimes} from '@/common/common'
  export default {
    data () {
      return {
        sendParmas:{
          page:1,
          limit:20,
          username: '',
          sum:''
        },
        sendData: {
          status: '0',
          users: '',
          title: '',
          content: '',
        },
        getTimes,
        // 弹窗提示
        confirmVisible: false,
        confirmId:''
      }
    },
    created (){
      this.getSendboxList(this.sendParmas)
    },
    mounted(){

    },
    methods: {
      ...mapMutations([

      ]),
      ...mapActions([
        'getSendboxList',
        'AddSendboxList',
        'deleteSendboxList'
      ]),
      // 确定提交 发送通知
      commitClick () {
        this.sendData.users = this.sendData.users.replace(/\s+/g,"")
        this.AddSendboxList(this.sendData).then(res=>{
          this.getSendboxList(this.sendParmas)
          for(let k in this.sendData){
            this.sendData[k] = ''
          }
          this.sendData.status = '0'
        })
      },
      // 搜索用户名通知
      userSearch () {
        this.sendParmas.page = 1
        this.getSendboxList(this.sendParmas)
      },
      // 删除通知
      handleDel(id){
        this.confirmVisible = true
        this.confirmId = id
      },
      commitModel(){
        this.deleteSendboxList({mid:this.confirmId}).then(res=>{
          this.confirmVisible = false
          this.getSendboxList(this.sendParmas)
        })
      },
      // 分页组件返回的参数
      handlePage (data) {
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit
        this.getSendboxList(this.sendParmas)
      },
    },
    components:{

    },
    computed: {
      ...mapState([
        "annoucementStore",
      ]),
      getPageData () {
        return {
          page: this.sendParmas.page,
          limit: this.sendParmas.limit,
          sum: this.annoucementStore.sendBoxList.data.count
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
  .head_title{
    text-align: left;
  }
  .content_limit{
    width: 700px!important;
    white-space: normal;
    word-break: break-all;
  }
</style>
