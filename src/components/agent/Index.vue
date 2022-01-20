<template>
  <div class="container">

    <agent_0 v-if="$route.params.key == 1"></agent_0>

    <agent_1 v-if="$route.params.key == 2"></agent_1>

    <agent_2 v-if="$route.params.key == 3"></agent_2>

    <agent_3 v-if="$route.params.key == 4"></agent_3>

    <agent_4 v-if="$route.params.key == 5"></agent_4>

    <agent_5 v-if="$route.params.key == 6"></agent_5>

    <agent_6 v-if="$route.params.key == 7"></agent_6>

    <agent_7 v-if="$route.params.key == 8"></agent_7>

    <agent_8 v-if="$route.params.key == 9"></agent_8>

    <agent_9 v-if="$route.params.key == 10"></agent_9>

    <agent_10 v-if="$route.params.key == 11"></agent_10>

    <agent_11 v-if="$route.params.key == 12"></agent_11>

    <agent_12 v-if="$route.params.key == 13"></agent_12>

    <agent_13 v-if="$route.params.key == 14"></agent_13>
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
