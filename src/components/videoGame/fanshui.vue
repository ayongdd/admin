<template>
  <div class="container">
    <table class="table">
      <tbody><tr class="head">
        <td>{{$L.t('agent.agent_0.huiy')}}</td><td>{{$L.t('chessGame.zh15')}}</td><td>{{$L.t('chessGame.zh16')}}</td><td>{{$L.t('chessGame.zh17')}}</td><td>{{$L.t('chessGame.zh18')}}</td><td>{{$L.t('table.handle')}}</td>
      </tr>
      <tr>
        <td>wangrong</td>
        <td class="lose">-7.55</td>
        <td>19</td>
        <td>23.75</td>
        <td>23.75</td>
        <td><button class="popBtn" onclick="tb_show($L.t('chessGame.zh19'),'/mg/fanshui/zero?mid=67551286&amp;TB_iframe=1&amp;width=780&amp;height=450')">{{$L.t('chessGame.zh19')}}</button> <button class="popBtn" onclick="tb_show($L.t('chessGame.zh20'),'/mg/fanshui/fanshui?mid=67551286&amp;TB_iframe=1&amp;width=780&amp;height=450')">{{$L.t('chessGame.zh20')}}</button> </td>
      </tr>
      <tr>
        <td>huaxuefei</td>
        <td class="win">2.65</td>
        <td>1153</td>
        <td>7570.50</td>
        <td>7570.50</td>
        <td><button class="popBtn" onclick="tb_show($L.t('chessGame.zh19'),'/mg/fanshui/zero?mid=76034034&amp;TB_iframe=1&amp;width=780&amp;height=450')">{{$L.t('chessGame.zh19')}}</button> <button class="popBtn" onclick="tb_show($L.t('chessGame.zh20'),'/mg/fanshui/fanshui?mid=76034034&amp;TB_iframe=1&amp;width=780&amp;height=450')">{{$L.t('chessGame.zh20')}}</button> </td>
      </tr>
      <tr>
        <td>dy19950817</td>
        <td class="lose">-1.45</td>
        <td>2</td>
        <td>1.80</td>
        <td>1.80</td>
        <td><button class="popBtn" onclick="tb_show($L.t('chessGame.zh19'),'/mg/fanshui/zero?mid=117620437&amp;TB_iframe=1&amp;width=780&amp;height=450')">{{$L.t('chessGame.zh19')}}</button> <button class="popBtn" onclick="tb_show($L.t('chessGame.zh20'),'/mg/fanshui/fanshui?mid=117620437&amp;TB_iframe=1&amp;width=780&amp;height=450')">{{$L.t('chessGame.zh20')}}</button> </td>
      </tr>
      <tr>
        <td>zjq1009</td>
        <td class="lose">-2.92</td>
        <td>11</td>
        <td>3.30</td>
        <td>3.30</td>
        <td><button class="popBtn" onclick="tb_show($L.t('chessGame.zh19'),'/mg/fanshui/zero?mid=121147219&amp;TB_iframe=1&amp;width=780&amp;height=450')">{{$L.t('chessGame.zh19')}}</button> <button class="popBtn" onclick="tb_show($L.t('chessGame.zh20'),'/mg/fanshui/fanshui?mid=121147219&amp;TB_iframe=1&amp;width=780&amp;height=450')">{{$L.t('chessGame.zh20')}}</button> </td>
      </tr>
      </tbody></table>
    <font color="red">&nbsp;&nbsp;{{$L.t('zhu')}}：{{$L.t('videoGame.info4')}}。</font></div>
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
