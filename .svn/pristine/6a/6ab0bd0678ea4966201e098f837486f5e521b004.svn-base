<template>
  <div class="container">
    <table class="table" >
      <tbody>
      <tr class="nav">
        <td colspan="10">{{$L.t('moneyAdmin.Sum.info63')}}:
          <input type="button" :value="$L.t('today')" @click="selectDay(0)">
          <input type="button" :value="$L.t('yesterday')" @click="selectDay(1)">
          <input type="button" :value="$L.t('thisWeek')" @click="selectDay(6)">
          <input type="button" :value="$L.t('lastWeek')" @click="selectDay(14)">
          <input type="button" :value="$L.t('thisMonth')" @click="selectDay(30)">
          <input type="button" :value="$L.t('lastMonth')" @click="selectDay(60)">
        </td>
      </tr>
      <tr>
        <td colspan="10">
          <div class="header_search">
            <div class="header_search_list">
              <span>{{$L.t('table.time')}}: </span>
              <timer @sendTime="getTimer" :day="days"></timer>
              <div class="ser_list">
                <span>{{$L.t('agent.agent_8.zh28')}}:</span>
                <input type="text" v-model="seachParmas.username">
              </div>
              <div class="ser_list">
                <span>{{$L.t('table.status')}}:</span>
                <select v-model="seachParmas.status">
                  <option value="0">{{$L.t('moneyAdmin.Sum.info64')}}</option>
                  <option value="1">{{$L.t('success')}}</option>
                  <option value="2">{{$L.t('fail')}}</option>
                </select>
              </div>

              <div class="submitSeach" @click="seachCondition()">
                <input type="submit" :value="$L.t('submit')">
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr class="head">
        <td>{{$L.t('table.username')}}</td>
        <td>{{$L.t('moneyAdmin.Sum.info65')}}</td>
        <td>{{$L.t('chatRoom.zh69')}}</td>
        <td>{{$L.t('table.type')}}</td>
        <td>{{$L.t('table.time')}}</td>
        <td>{{$L.t('table.handle')}}</td>
      </tr>
      <tr class="odd" v-for="(item,index) in moneyStore.dataAbnormalList.data.data" :key="index">
        <td>{{item.username}}</td>
        <td>{{item.order_id}}</td>
        <td>{{item.coin}}</td>
        <td>{{item.type == 1?$L.t('common.shangfen'):$L.t('common.xiafen')}}</td>
        <td>{{getTimes(item.time)}}</td>
        <td><button @click="replenishment(item)" v-if="item.status == 0">{{$L.t('moneyAdmin.Sum.info66')}}</button></td>
      </tr>
      <tr v-if="getPageData.sum > 0">
        <td colspan="10">
          <span class="color-red">{{$L.t('common.total')}}: {{moneyStore.dataAbnormalList.data.allCoin}}</span>
        </td>
      </tr>
      <tr v-if="getPageData.sum > 0">
        <td colspan="10">
          <page-limit :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
        </td>
      </tr>
      <tr  v-if="!moneyStore.dataAbnormalList.data.data">
        <td colspan="10" class="nodata">
          {{$L.t('noData')}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  import {getSession,getTimes} from '@/common/common'
  export default {
    data () {
      return {
        seachParmas:{
          username:'',
          status:0,
          starTime:'',
          endTime:'',
          page:1,
          limit:20
        },
        days: '',
        // seachParmas:{
        //   page:1,
        //   limit:20,
        // },
        getTimes,
      }
    },
    created (){
      this.getAbnormalList(this.seachParmas)
    },
    mounted(){

    },
    methods: {
      ...mapMutations([

      ]),

      ...mapActions([
        "getAbnormalList",
        "getSelOrder"
      ]),
      handlePage (data) {
        this.seachParmas.page = data.page
        this.seachParmas.limit = data.limit
        this.getAbnormalList(this.seachParmas)
      },
      // 补单
      replenishment(item){
        this.getSelOrder({order_id:item.order_id}).then(()=>{
          this.getAbnormalList(this.seachParmas)
        })
      },
      // 获取时间
      getTimer(start,end){
        this.seachParmas.starTime = start
        this.seachParmas.endTime = end
      },
      selectDay(d){
        this.days = d
      },
      seachCondition(){
        this.seachParmas.page = 1
        this.getAbnormalList(this.seachParmas)
      }
    },
    components:{

    },
    computed: {
      ...mapState([
        "moneyStore",
      ]),
      getPageData () {
        return {
          page: this.seachParmas.page,
          limit: this.seachParmas.limit,
          sum: this.moneyStore.dataAbnormalList.data.count || 0
        }
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header_search{
  display: flex;
  flex-direction: column;
  .header_search_list{
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    &>span{
      margin-left: 10px;
    }
    span{
      margin-right: 10px;
    }
    .ser_list{
      display: flex;
      align-items: center;
      margin-left: 10px;
      label{
        margin: 0 5px;
      }
    }
  }
}
</style>
