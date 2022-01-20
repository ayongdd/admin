<template>
  <div class="container">
    <table class="table" >
      <tbody>
      <tr class="nav">
        <td colspan="10">{{$L.t('member.info1')}}</td>
      </tr>
      <tr class="head">
        <td>-</td>
        <td>{{$L.t('chessGame.zh26')}}</td>
        <td>{{$L.t('table.name')}}</td>
        <td>{{$L.t('table.registerTime')}}</td>
        <td>{{$L.t('member.info2')}}/IP</td>
        <td>{{$L.t('member.info3')}}</td>
        <td>{{$L.t('member.info4')}}</td>
        <td>{{$L.t('member.info5')}}</td>
        <td>{{$L.t('member.info6')}}/IP</td>
        <td>{{$L.t('financial.zh85')}}</td>
      </tr>
      <tr class="odd" v-for="i in memberStore.appOnlineList.data.data">
        <td>{{i.id}}</td>
        <td><button class="popBtn" >{{i.username}}</button> </td>
        <td>{{i.name}}</td>
        <td class="">{{getTimes(i.regTime)}}</td>
        <td>{{getTimes(i.loginTime)}}<font color="red">{{i.loginIP}}</font><br>{{i.loginIPcountry}}</td>
        <td>{{getTimes(i.accessTime)}}</td>
        <td>{{i.onlineTime}}</td>
        <td>{{i.Domain}}</td>
        <td>{{getTimes(i.lastLoginTime)}}<font color="red">{{i.lastIP}}</font><br>{{i.lastIPcountry}} <button class="popBtn" >{{$L.t('member.info7')}}</button></td>
        <td>
          <a class="thickbox button">{{$L.t('member.info8')}}</a>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="textCenter" v-if="!memberStore.appOnlineList.data.data">
      {{$L.t('noData')}}
    </div>
  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  import {getSession,getTimes} from '@/common/common'
  export default {
    data () {
      return {
        onlineObj:{
          page:1,
          limit:10,
          online:'app',
          getTimes
        }
      }
    },
    created (){
      this.getAppOnline(this.onlineObj)
    },
    mounted(){

    },
    methods: {
      ...mapMutations([

      ]),

      ...mapActions([
        "getAppOnline",
      ]),

    },
    components:{

    },
    computed: {
      ...mapState([
        "indexStore",
        "memberStore"
      ]),
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
</style>
