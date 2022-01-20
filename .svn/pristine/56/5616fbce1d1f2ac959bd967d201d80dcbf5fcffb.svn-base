<template>
  <div class="container">
    <table class="table">
      <tbody>
        <tr>
          <td class="first">{{$L.t('financial.zh37')}}:</td>
          <td>
            <form method="post" name="main"
              action="http://webapi.hg454566.com/api/payment/go/jzf"
              target="_blank" onsubmit="return VerifyData()">
              <div style="padding:5px;">
                {{$L.t('financial.zh38')}}:<input id="amount" name="amount" style="color: red;"
                  maxlength="10" size="10">
                <p style="color:red">{{$L.t('financial.zh39')}}</p>
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
                <input type="hidden" id="username" name="username"
                  value="amao888">
                <input type="hidden" id="lid" name="lid" value="481">
                <input type="submit" id="submit" class="btnpaysub" :value="$L.t('financial.zh56')"><br>
              </div>
            </form>
          </td>
        </tr>
        <tr>
          <td class="first">{{$L.t('table.remark')}}</td>
          <td style="color: red;"> {{$L.t('financial.zh57')}}。</td>
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
