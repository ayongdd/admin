<template>
  <div class="container">

    <system_0 v-if="$route.params.key == 1"></system_0>
    <system_1 v-if="$route.params.key == 2"></system_1>
  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
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
