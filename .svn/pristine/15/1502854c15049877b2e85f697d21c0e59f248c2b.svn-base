<template>
  <div>


    <gameManage v-if="$route.params.mKey == 1"></gameManage>

    <betManage v-if="$route.params.mKey == 2"></betManage>

    <fsManage  v-if="$route.params.mKey == 3"></fsManage>

    <!--<moneyQuery v-if="$route.params.mKey == 3"></moneyQuery>-->

  </div>
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
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
  .head td, .head th{
    text-align: left;
  }
</style>
