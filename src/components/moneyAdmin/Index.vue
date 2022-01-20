<template>
  <div class="container">
    <!--  -->
    <money-amount v-if="$route.params.key == 1"></money-amount>
    <!-- 存款 -->
    <money-recharge v-if="$route.params.key == 2"></money-recharge>

    <money-list-recharge v-if="$route.params.key == 3"></money-list-recharge>

    <money-draw v-if="$route.params.key == 4"></money-draw>

    <money-list-draw v-if="$route.params.key == 5"></money-list-draw>

    <money-payment v-if="$route.params.key == 6"></money-payment>

    <money-payment-incomplete v-if="$route.params.key == 7"></money-payment-incomplete>

    <money-sum v-if="$route.params.key == 8"></money-sum>

    <money-gift v-if="$route.params.key == 9"></money-gift>

    <money-owed v-if="$route.params.key == 10"></money-owed>

    <money-score-info v-if="$route.params.key == 11"></money-score-info>

    <money-coupons v-if="$route.params.key == 12"></money-coupons>

    <money-coupons-list v-if="$route.params.key == 13"></money-coupons-list>

    <money-sxfdd v-if="$route.params.key == 14"></money-sxfdd>
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
      // console.log(this.$route)
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
