<template>
  <div>

    <annoucement_0 v-if="$route.params.key == 1"></annoucement_0>

    <annoucement_1 v-if="$route.params.key == 2"></annoucement_1>

    <annoucement_2 v-if="$route.params.key == 3"></annoucement_2>

    <annoucement_3 v-if="$route.params.key == 4"></annoucement_3>

    <annoucement_4 v-if="$route.params.key == 5"></annoucement_4>

    <annoucement_5 v-if="$route.params.key == 6"></annoucement_5>

    <!--<annoucement_6 v-if="$route.params.key == 7"></annoucement_6>-->

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
