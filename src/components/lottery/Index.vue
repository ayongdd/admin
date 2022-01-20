<template>
  <div>

    <lottery_0 v-if="$route.params.key == 1"></lottery_0>

    <lottery_1 v-if="$route.params.key == 2"></lottery_1>

    <lottery_2 v-if="$route.params.key == 3"></lottery_2>

    <lottery_3 v-if="$route.params.key == 4"></lottery_3>

    <lottery_4 v-if="$route.params.key == 5"></lottery_4>

    <lottery_5 v-if="$route.params.key == 6"></lottery_5>

    <lottery_6 v-if="$route.params.key == 7"></lottery_6>

    <lottery_7 v-if="$route.params.key == 8"></lottery_7>

    <lottery_8 v-if="$route.params.key == 9"></lottery_8>

    <lottery_9 v-if="$route.params.key == 10"></lottery_9>

    <lottery_10 v-if="$route.params.key == 11"></lottery_10>

    <lottery_11 v-if="$route.params.key == 12"></lottery_11>

    <lottery_12 v-if="$route.params.key == 13"></lottery_12>
    <lottery_14 v-if="$route.params.key == 14"></lottery_14>
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
</style>
