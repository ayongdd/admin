<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody><tr class="nav">
        <td>
          {{$L.t('chessGame.zh1')}}:
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
          <form method="GET" action="/mg/index">
            <li>{{$L.t('chessGame.zh13')}}:<input type="text" name="startTime" id="startTime" :placeholder="$L.t('chessGame.zh2')" value="2019-03-15" class="hasDatepicker"></li>
            <li>{{$L.t('chessGame.zh14')}}:<input type="text" name="endTime" id="endTime" :placeholder="$L.t('chessGame.zh2')" value="2019-03-15 23:59:59" class="hasDatepicker"></li>
            <li class="keyValue">{{$L.t('chessGame.zh3')}}
              <select name="searchKey" id="searchKey">
                <option value="playerName">{{$L.t('table.username')}}</option>
                <option value="mid">{{$L.t('chessGame.zh4')}}</option>
                <option value="betId">{{$L.t('chessGame.zh5')}}</option>
                <option value="mgsGameId">{{$L.t('chessGame.zh6')}}</option>
              </select>::
            </li>
            <li class="keyValue">
              <input type="text" name="searchVal" id="searchVal" value="">
            </li>
            <li>
              <input type="submit" :value="$L.t('submit')">
            </li>
          </form>
        </td>
      </tr>
      </tbody></table>
    <table class="table">
      <tbody>
      <tr class="head">
        <th height="25">{{$L.t('chessGame.zh7')}}</th>
        <th>{{$L.t('agent.agent_0.huiy')}}</th>
        <th>{{$L.t('chessGame.zh4')}}</th>
        <th>{{$L.t('chessGame.zh5')}}</th>
        <th>{{$L.t('agent.agent_0.zh89')}}</th>
        <th>{{$L.t('chessGame.zh6')}}</th>
        <th>{{$L.t('chessGame.zh8')}}</th>
        <th>{{$L.t('chessGame.zh9')}}</th>
        <th>{{$L.t('chessGame.zh69')}}</th>
        <th>{{$L.t('agent.agent_0.zh53')}}</th>
        <th>{{$L.t('chessGame.zh10')}}</th>
      </tr>
      <tr><td>03-15 05:12:54</td><td>huaxuefei</td><td>76034034</td><td>760340340287001154</td><td>阿拉斯加钓鱼</td><td>1154</td><td>1</td><td>0</td><td>9.00</td><td>9.00</td><td class="lose">-9.00</td></tr>
      <tr><td>03-15 05:12:51</td><td>huaxuefei</td><td>76034034</td><td>760340340287001153</td><td>阿拉斯加钓鱼</td><td>1153</td><td>1</td><td>0</td><td>9.00</td><td>9.00</td><td class="lose">-9.00</td></tr>
      <tr><td>03-15 05:12:49</td><td>huaxuefei</td><td>76034034</td><td>760340340287001152</td><td>阿拉斯加钓鱼</td><td>1152</td><td>1</td><td>0</td><td>9.00</td><td>9.00</td><td class="lose">-9.00</td></tr>
      <tr><td>03-15 05:12:46</td><td>huaxuefei</td><td>76034034</td><td>760340340287001151</td><td>阿拉斯加钓鱼</td><td>1151</td><td>1</td><td>0</td><td>9.00</td><td>9.00</td><td class="lose">-9.00</td></tr>
      <tr><td>03-15 05:12:44</td><td>huaxuefei</td><td>76034034</td><td>760340340287001150</td><td>阿拉斯加钓鱼</td><td>1150</td><td>1</td><td>0</td><td>9.00</td><td>9.00</td><td class="lose">-9.00</td></tr>
      <tr><td>03-15 05:12:42</td><td>huaxuefei</td><td>76034034</td><td>760340340287001149</td><td>阿拉斯加钓鱼</td><td>1149</td><td>1</td><td>0</td><td>9.00</td><td>9.00</td><td class="lose">-9.00</td></tr>
      <tr><td>03-15 05:12:40</td><td>huaxuefei</td><td>76034034</td><td>760340340287001148</td><td>阿拉斯加钓鱼</td><td>1148</td><td>1</td><td>0</td><td>9.00</td><td>9.00</td><td class="lose">-9.00</td></tr>
      <tr><td>03-15 05:12:37</td><td>huaxuefei</td><td>76034034</td><td>760340340287001147</td><td>阿拉斯加钓鱼</td><td>1147</td><td>1</td><td>0</td><td>9.00</td><td>9.00</td><td class="lose">-9.00</td></tr>
      <tr><td>03-15 05:12:35</td><td>huaxuefei</td><td>76034034</td><td>760340340287001146</td><td>阿拉斯加钓鱼</td><td>1146</td><td>1</td><td>0</td><td>9.00</td><td>9.00</td><td class="lose">-9.00</td></tr>
      <tr><td>03-15 05:12:32</td><td>huaxuefei</td><td>76034034</td><td>760340340287001145</td><td>阿拉斯加钓鱼</td><td>1145</td><td>1</td><td>1</td><td>9.00</td><td>9.00</td><td class="lose">-7.50</td></tr>
      <tr><td>03-15 05:12:31</td><td>huaxuefei</td><td>76034034</td><td>760340340287001144</td><td>阿拉斯加钓鱼</td><td>1144</td><td>1</td><td>0</td><td>9.00</td><td>9.00</td><td class="lose">-9.00</td></tr>
      <tr><td>03-15 05:12:27</td><td>huaxuefei</td><td>76034034</td><td>760340340287001143</td><td>阿拉斯加钓鱼</td><td>1143</td><td>1</td><td>1</td><td>9.00</td><td>9.00</td><td class="win">42.30</td></tr>
      <tr><td>03-15 05:12:22</td><td>huaxuefei</td><td>76034034</td><td>760340340287001142</td><td>阿拉斯加钓鱼</td><td>1142</td><td>1</td><td>1</td><td>9.00</td><td>9.00</td><td class="lose">-3.00</td></tr>
      <tr><td>03-15 05:12:18</td><td>huaxuefei</td><td>76034034</td><td>760340340287001141</td><td>阿拉斯加钓鱼</td><td>1141</td><td>1</td><td>1</td><td>9.00</td><td>9.00</td><td class="lose">0.00</td></tr>
      <tr><td>03-15 05:12:17</td><td>huaxuefei</td><td>76034034</td><td>760340340287001140</td><td>阿拉斯加钓鱼</td><td>1140</td><td>1</td><td>0</td><td>9.00</td><td>9.00</td><td class="lose">-9.00</td></tr>
      <tr><td>03-15 05:12:14</td><td>huaxuefei</td><td>76034034</td><td>760340340287001139</td><td>阿拉斯加钓鱼</td><td>1139</td><td>1</td><td>0</td><td>9.00</td><td>9.00</td><td class="lose">-9.00</td></tr>
      <tr><td>03-15 05:12:11</td><td>huaxuefei</td><td>76034034</td><td>760340340287001138</td><td>阿拉斯加钓鱼</td><td>1138</td><td>1</td><td>0</td><td>9.00</td><td>9.00</td><td class="lose">-9.00</td></tr>
      <tr><td>03-15 05:12:10</td><td>huaxuefei</td><td>76034034</td><td>760340340287001137</td><td>阿拉斯加钓鱼</td><td>1137</td><td>1</td><td>0</td><td>9.00</td><td>9.00</td><td class="lose">-9.00</td></tr>
      <tr><td>03-15 05:12:08</td><td>huaxuefei</td><td>76034034</td><td>760340340287001136</td><td>阿拉斯加钓鱼</td><td>1136</td><td>1</td><td>0</td><td>9.00</td><td>9.00</td><td class="lose">-9.00</td></tr>
      <tr><td>03-15 05:10:52</td><td>huaxuefei</td><td>76034034</td><td>760340340287001135</td><td>阿拉斯加钓鱼</td><td>1135</td><td>1</td><td>1</td><td>9.00</td><td>9.00</td><td class="win">171.00</td></tr>
      <tr class="pager"><td colspan="20">
        <span class="pageBar">
          <span>[1185]</span>
          <span class="pageNow">1</span>
          <span><a href="/mg/index/_page-2-1185_?startTime=2019-03-15&amp;endTime=2019-03-15+23%3A59%3A59&amp;searchVal=&amp;searchKey=&amp;pageSize=20" title="第 2 页 " target="_self">[ 2 ]</a>
          </span>
          <span><a href="/mg/index/_page-3-1185_?startTime=2019-03-15&amp;endTime=2019-03-15+23%3A59%3A59&amp;searchVal=&amp;searchKey=&amp;pageSize=20" title="第 3 页 " target="_self">[ 3 ]</a></span>
          <span><a href="/mg/index/_page-4-1185_?startTime=2019-03-15&amp;endTime=2019-03-15+23%3A59%3A59&amp;searchVal=&amp;searchKey=&amp;pageSize=20" title="第 4 页 " target="_self">[ 4 ]</a></span>
          <span><a href="/mg/index/_page-5-1185_?startTime=2019-03-15&amp;endTime=2019-03-15+23%3A59%3A59&amp;searchVal=&amp;searchKey=&amp;pageSize=20" title="第 5 页 " target="_self">[ 5 ]</a></span>
          <span><a href="/mg/index/_page-6-1185_?startTime=2019-03-15&amp;endTime=2019-03-15+23%3A59%3A59&amp;searchVal=&amp;searchKey=&amp;pageSize=20" title="第 6 页 " target="_self">[ 6 ]</a></span>
          <span>…</span> <span><a href="/mg/index/_page-60-1185_?startTime=2019-03-15&amp;endTime=2019-03-15+23%3A59%3A59&amp;searchVal=&amp;searchKey=&amp;pageSize=20" title="最后页" target="_self">[ 60 ]</a></span>
          <span><a href="/mg/index/_page-2-1185_?startTime=2019-03-15&amp;endTime=2019-03-15+23%3A59%3A59&amp;searchVal=&amp;searchKey=&amp;pageSize=20" title="下一页" target="_self">{{$L.t('common.next')}}</a></span> &nbsp;
          <select name="pageSize" class="numOptions" onchange="window.location.href = this.getAttribute(&quot;data-url&quot;).replace(/pageSize=(\d+)/, &quot;pageSize=&quot; + this.options[this.selectedIndex].text);" data-url="/mg/index/_page-1-1185_?startTime=2019-03-15&amp;endTime=2019-03-15+23%3A59%3A59&amp;searchVal=&amp;searchKey=&amp;pageSize=20">
            <option selected="selected">20 {{$L.t('common.tiaoye')}}</option><option>40 {{$L.t('common.tiaoye')}}</option><option>60 {{$L.t('common.tiaoye')}}</option>
            <option>80 {{$L.t('common.tiaoye')}}</option><option>100 {{$L.t('common.tiaoye')}}</option><option>120 {{$L.t('common.tiaoye')}}</option>
          </select>&nbsp;&nbsp;
        </span>
        <span class="net">{{$L.t('chessGame.zh12')}}: {{$L.t('chessGame.zh10')}}:-9.27 , {{$L.t('chessGame.zh16')}}:7599.35 , {{$L.t('common.yxtze')}}:7599.35 </span></td></tr>
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
