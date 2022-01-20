<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody><tr class="nav">
        <td>
          {{$L.t('chessGame.zh22')}}:
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
          <form method="GET" action="/bbin/jackpot">
            <li>{{$L.t('chessGame.zh13')}}:<input type="text" name="startTime" id="startTime" :placeholder="$L.t('chessGame.zh2')" value="2019-03-15" class="hasDatepicker"></li>
            <li>{{$L.t('chessGame.zh14')}}:<input type="text" name="endTime" id="endTime" :placeholder="$L.t('chessGame.zh2')" value="2019-03-15 23:59:59" class="hasDatepicker"></li>
            <li class="keyValue">{{$L.t('chessGame.zh3')}}<select name="searchKey" id="searchKey"><option value="playerName">{{$L.t('table.username')}}</option><option value="mid">{{$L.t('chessGame.zh23')}}</option><option value="BetId">{{$L.t('chessGame.zh24')}}</option></select>::</li><li class="keyValue"><input type="text" name="searchVal" id="searchVal" value=""></li>                <li><input type="submit" :value=" $L.t('submit') "></li>
          </form>
        </td>
      </tr>
      </tbody></table>

    <table class="table">
      <tbody>
      <tr class="head">
        <th height="25">{{$L.t('chessGame.zh7')}}</th>
        <th>{{$L.t('chessGame.zh5')}}</th>
        <th>{{$L.t('chessGame.zh4')}}</th>
        <th>{{$L.t('chessGame.zh26')}}</th>
        <th>{{$L.t('chessGame.zh25')}}</th>
      </tr>

      <tr class="pager">
        <td>2018-8-8</td>
        <td>{{$L.t('chessGame.zh5')}}</td>
        <td>{{$L.t('chessGame.zh4')}}</td>
        <td>{{$L.t('chessGame.zh26')}}</td>
        <td>{{$L.t('chessGame.zh25')}}</td>
      </tr>

      <tr class="pager"><td colspan="20">
        {{$L.t('videoGame.info5')}}</td></tr>
      </tbody></table></div>

</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  import {getDate,setDate,copyobj,setSession,getSession,getchar,randomRange} from '@/common/common'
  export default {
    data () {
      return {

      }
    },
    created (){


    },
    mounted(){

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
</style>
