<template>
  <div class="container">
    <table class="table">
      <tbody><tr>
        <td class="first">{{$L.t('financial.zh58')}}</td>
        <td><span style="color:red;">2019-03-31 ({{$L.t('financial.zh59')}})</span></td>
      </tr>
      <tr>
        <td class="first">{{$L.t('financial.zh60')}}</td>
        <td><span style="color:red;">60000.00</span></td>
      </tr>
      <tr>
        <td class="first">{{$L.t('financial.zh61')}}:</td>
        <td>
          <form method="post" name="main" action="http://webapi.zhongwoshiye.cn/api/payment/go/xlf" target="_blank" onsubmit="return VerifyData()">
            <div style="padding:5px;">
                {{$L.t('financial.zh62')}}:<select id="month" name="month" onchange="changeRealamount()">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3" selected="">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                  <option value="12">12</option>
                </select>&nbsp;&nbsp;{{$L.t('financial.zh63')}}
                <span style="color:red;">{{$L.t('financial.zh64')}}</span>{{$L.t('financial.zh65')}}。
            </div>
            <div style="padding:5px;">
                {{$L.t('financial.zh38')}}:<input id="amount" name="amount" style="color: red;" maxlength="10" size="10" readonly="true" onclick="alert($L.t('financial.zh66'))" value="180000">
                <p style="color:red">{{$L.t('financial.zh67')}}!</p>
            </div>
            <div style="padding:5px;">
                {{$L.t('financial.zh40')}}:<select name="bank" id="bankid">
                <!--<option value="ICBC-NET-B2C">工商银行</option>-->
                <option value="CCB-NET-B2C">{{$L.t('financial.zh41')}}</option>
                <option value="ABC-NET-B2C">{{$L.t('financial.zh42')}}</option>
                <option value="CMBCHINA-NET-B2C">{{$L.t('financial.zh43')}}</option>
                <option value="BOCO-NET-B2C">{{$L.t('financial.zh44')}}</option>
                <option value="CMBC-NET-B2C">{{$L.t('financial.zh45')}}</option>
                <option value="CIB-NET-B2C">{{$L.t('financial.zh46')}}</option>
                <option value="BOC-NET-B2C">{{$L.t('financial.zh47')}}</option>
                <option value="ECITIC-NET-B2C">{{$L.t('financial.zh48')}}</option>
                <option value="POST-NET-B2C">{{$L.t('financial.zh49')}}</option>
                <option value="SPDB-NET-B2C">{{$L.t('financial.zh50')}}</option>
                <option value="HXB-NET-B2C">{{$L.t('financial.zh51')}}</option>
                <option value="PINGANBANK-NET">{{$L.t('financial.zh52')}}</option>
                <option value="SDB-NET-B2C">{{$L.t('financial.zh53')}}</option>
                <option value="GDB-NET-B2C">{{$L.t('financial.zh54')}}</option>
                <option value="HKBEA-NET-B2C">{{$L.t('financial.zh55')}}</option>
              </select>
            </div>
            <div style="padding:5px;">
              <input type="hidden" id="username" name="username" value="amao888">
              <input type="hidden" id="lid" name="lid" value="481">
              <input type="submit" id="submit" class="btnpaysub" :value="$L.t('financial.zh56')"><br>
            </div>
          </form>
        </td>
      </tr>
      <tr>
          <td class="first">{{$L.t('table.remark')}}</td>
          <td style="color: red;"> {{$L.t('financial.zh68')}}。</td>
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
  </style>
