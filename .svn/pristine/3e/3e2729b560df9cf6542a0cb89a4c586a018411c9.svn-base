<template>
    <div class="container">
      <table class="table clearfloat" id="search">
        <tbody>
          <tr class="nav">
            <td>
              {{$L.t('manager.info51')}}:
              <input type="button" :value="$L.t('today')" @click="selectDay(0)">
              <input type="button" :value="$L.t('yesterday')" @click="selectDay(1)">
              <input type="button" :value="$L.t('thisWeek')" @click="selectDay(6)">
              <input type="button" :value="$L.t('lastWeek')" @click="selectDay(14)">
              <input type="button" :value="$L.t('thisMonth')" @click="selectDay(30)">
              <input type="button" :value="$L.t('lastMonth')" @click="selectDay(60)">
            </td>
          </tr>
          <tr>
            <td>
              <div class="timeShow">
                <timer class="submitSeach" @sendTime="getTimer" :day="days"></timer>
                <span class="manager_title"> {{$L.t('manager.info43')}} </span>
                <input type="text" style="width: 100px" v-model="sendParmas.username">

                <span class="manager_title"> IP </span>
                <input type="text" style="width: 100px" v-model="sendParmas.ip">

                <div class="submitSeach" @click="seachCondition()">
                  <input type="submit" :value="$L.t('submit')">
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table">
        <tbody>
          <tr class="head head_mage">
            <th>{{$L.t('table.username')}}</th>
            <th>{{$L.t('manager.info57')}}</th>
            <th>{{$L.t('manager.info52')}}</th>
            <th>{{$L.t('manager.info53')}}</th>
            <th>{{$L.t('manager.info54')}}</th>
            <th>{{$L.t('manager.info55')}}</th>
            <th>{{$L.t('table.time')}}</th>
            <th>{{$L.t('table.handle')}}</th>
          </tr>
          <tr class="odd" v-for="(item,index) in managerStore.dataLoginLog.data.data">
            <td>{{item.username}}</td>
            <td>{{item.loginIP}}</td>
            <td>{{item.area}}</td>
            <td>{{item.country}}</td>
            <td>{{item.browser}}</td>
            <td>{{item.os}}</td>
            <td>{{item.loginTime}}</td>
            <td>
              <button @click="CheckYour(item.username)">{{$L.t('manager.info56')}}</button>
            </td>
          </tr>
          <tr v-if="getPageData.sum>0">
            <td colspan="10">
              <page-limit :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
            </td>
          </tr>
          <tr v-if="!managerStore.dataLoginLog.data.data">
            <td colspan="8" class="nodata">{{$L.t('noData')}}</td>
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
          sendParmas:{
            page:1,
            limit:20,
            sum:'',
            username:'',
            ip:'',
            fromTime:'',
            toTime:''
          },
          days:'',
        }
      },
      created (){
        this.getLoginLog(this.sendParmas)
      },
      mounted(){

      },
      methods: {
        ...mapMutations([

        ]),

        ...mapActions([
          "getLoginLog"
        ]),
        timeTool(d){
          var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
          return datetime;
        },
        // 分页组件返回的参数
        handlePage (data) {
          this.sendParmas.page = data.page
          this.sendParmas.limit = data.limit
          this.getLoginLog(this.sendParmas)
        },
          //      获取时间
        getTimer(start,end){
          this.sendParmas.fromTime = start
          this.sendParmas.toTime = end
        },
        selectDay(d){
          this.days = d
        },
        // 搜索
        seachCondition(){
          this.sendParmas.page = 1
          this.getLoginLog(this.sendParmas)
        },
        // 只看此人
        CheckYour(username){
          this.sendParmas.username = username
          this.getLoginLog(this.sendParmas)
        }

      },
      computed: {
        ...mapState([
          "managerStore"
        ]),
        getPageData () {
          return {
            page: this.sendParmas.page,
            limit: this.sendParmas.limit,
            sum: this.managerStore.dataLoginLog.data.count
          }
        }
      },
    }
  </script>
  <style lang="less" scoped>
    .timeShow{
      align-items: center;
    }
    .manager_title{
      margin:0 10px;
    }
    .head_mage{
      text-align: left;
    }
  </style>
