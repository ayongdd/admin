<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
        <tr class="nav">
          <td>
            {{$L.t('financial.zh27')}}:
            <input type="button" :value="$L.t('today')" onclick="changeTime('today')">
            <input type="button" :value="$L.t('yesterday')" onclick="changeTime('yes')">
            <input type="button" :value="$L.t('thisWeek')" onclick="changeTime('week')">
            <input type="button" :value="$L.t('lastWeek')" onclick="changeTime('preweek')">
            <input type="button" :value="$L.t('thisMonth')" onclick="changeTime('month')">
            <input type="button" :value="$L.t('lastMonth')" onclick="changeTime('premonth')">
          </td>
        </tr>
        <tr>
          <td>
            <form method="GET" action="/epay/pay-list">
              <li>{{$L.t('chessGame.zh13')}}:<input type="text" name="startTime" id="startTime"
                                                    :placeholder="$L.t('chessGame.zh2')" value="2019-03-11" class="hasDatepicker"></li>
              <li>{{$L.t('chessGame.zh14')}}:<input type="text" name="endTime" id="endTime"
                                                    :placeholder="$L.t('chessGame.zh2')" value="2019-03-11 23:59:59"
                  class="hasDatepicker"></li>
              <li class="keyValue">{{$L.t('table.type')}}:<select name="type">
                <option value="">{{$L.t('agent.agent_8.zh49')}}</option>
                <option value="1">{{$L.t('financial.zh14')}}</option>
                <option value="2">{{$L.t('financial.zh28')}}</option>
                <option value="3">{{$L.t('financial.zh30')}}</option>
                <option value="4">{{$L.t('financial.zh29')}}</option>
              </select></li>
              <li><input type="submit" :value="$L.t('submit')"></li>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
        <tr class="head">
          <td>{{$L.t('financial.zh31')}}</td>
          <td>{{$L.t('financial.zh32')}}</td>
          <td>{{$L.t('member.info124')}}</td>
          <td>{{$L.t('table.type')}}</td>
          <td>IP</td>
          <td>{{$L.t('agent.agent_8.zh17')}}</td>
          <td>{{$L.t('financial.zh33')}}</td>
          <td>{{$L.t('financial.zh34')}}</td>
          <td>{{$L.t('financial.zh35')}}</td>
        </tr>
        <tr>
          <td colspan="18">{{$L.t('financial.zh36')}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

    import {mapState, mapMutations, mapActions} from 'vuex';
    import {getDate,setDate,copyobj,setSession,getSession,getchar,randomRange} from '@/common/common'

    export default {
      name: 'home',
      data () {
        return {

        }
      },
      mounted(){

      },
      created (){


      },
      methods: {
        ...mapMutations([

        ]),

        ...mapActions([

        ]),



      },
      components:{

      },
      computed: {


        ...mapState([
          "indexStore",
        ]),

      }
    }
  </script>
<style lang="css" scoped>
    .head td, .head th {
        background: #c8dadf;
        color: #313F44;
    }
  </style>
