<template>
  <div class="container">

    <specialOffer_0 v-if="$route.params.key == 1"></specialOffer_0>

    <specialOffer_1 v-if="$route.params.key == 2"></specialOffer_1>

    <specialOffer_2 v-if="$route.params.key == 3"></specialOffer_2>

    <!--<specialOffer_3 v-if="$route.params.key == 4"></specialOffer_3>-->

     <specialOffer_4 v-if="$route.params.key == 5"></specialOffer_4>

    <specialOffer_5 v-if="$route.params.key == 4"></specialOffer_5>
    <specialOffer_6 v-if="$route.params.key == 6"></specialOffer_6>
    <specialOffer_7 v-if="$route.params.key == 7"></specialOffer_7>
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
