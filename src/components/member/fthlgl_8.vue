<template>
  <div class="container">
    <table class="table">
      <tbody>
        <tr class="head fthead">
          <!-- <th>用户ID</th> -->
          <th>{{$L.t('table.username')}}</th>
          <th>{{$L.t('manager.info5')}}</th>
        </tr>
        <tr class="odd" v-for="(item,index) in memberStore.appClosureLists.data.data">
          <!-- <td>{{item.uid}}</td> -->
          <td :class="{'color-red': item.usertype == 9}">{{item.username}}</td>
          <td>{{item.updateTime}}</td>
        </tr>
        <tr>
          <td colspan="3">
            <page-limit v-if="getPageData.sum > 0" :pageData="getPageData" :inputShow="'1'" @handlePage="handlePage"></page-limit>
          </td>
        </tr>
        <tr v-if="!memberStore.appClosureLists.data.data">
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
          sum:''
        },
      }
    },
    created (){
      this.getClosureLists(this.sendParmas)
    },
    mounted(){

    },
    methods: {
      ...mapMutations([

      ]),

      ...mapActions([
        "getClosureLists"
      ]),
      // 分页组件返回的参数
      handlePage (data) {
        this.sendParmas.page = data.page
        this.sendParmas.limit = data.limit
        this.getClosureLists(this.sendParmas)
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
          sum: this.memberStore.appClosureLists.data.count
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
  .fthead th{
    text-align: left!important;
  }
</style>
