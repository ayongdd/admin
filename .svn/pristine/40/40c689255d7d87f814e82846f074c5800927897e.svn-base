<template>
    <div class="container">
      <table class="table clearfloat" id="search">
        <tbody>
          <tr class="nav">
            <td>
              {{$L.t('member.hyzyjl_7.info1')}}:
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
          <tr class="head change_header">
            <th>{{$L.t('member.hyzyjl_7.info2')}}</th>
            <th>{{$L.t('member.hyzyjl_7.info3')}}</th>
            <th>{{$L.t('member.hyzyjl_7.info4')}}</th>
          </tr>
          <tr class="odd" v-for="(item,index) in memberStore.userTransList.data.data">
            <td :class="{'color-red': item.usertype == 9}">{{item.username}}</td>
            <td>{{item.actionTime | times}}</td>
            <td>{{item.action}}</td>
          </tr>
          <tr v-if="getPageData.sum>0">
            <td colspan="10">
              <page-limit :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
            </td>
          </tr>
          <tr v-if="!memberStore.userTransList.data.data">
            <td colspan="3" class="nodata">{{$L.t('noData')}}</td>
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
            fromTime:'',
            toTime:''
          },
          days:'',
        }
      },
      created (){
        this.getTransfer(this.sendParmas)
      },
      mounted(){

      },
      methods: {
        ...mapMutations([

        ]),

        ...mapActions([
          "getTransfer"
        ]),
        timeTool(d){
          var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
          return datetime;
        },
        // 分页组件返回的参数
        handlePage (data) {
          this.sendParmas.page = data.page
          this.sendParmas.limit = data.limit
          this.getTransfer(this.sendParmas)
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
          this.getTransfer(this.sendParmas)
        },
      },
      computed: {
        ...mapState([
          "indexStore",
          "memberStore"
        ]),
        getPageData () {
          return {
            page: this.sendParmas.page,
            limit: this.sendParmas.limit,
            sum: this.memberStore.userTransList.data.count
          }
        }
      },
      filters:{
        times:function (t) {
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
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="less" scoped>
    .change_header{
        text-align: left;
      }
  </style>
