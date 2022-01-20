<template>
  <div>
    <iframe :src="electronicGame.gameDetailsUrl" frameborder="no" id="iframe">

    </iframe>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex'
  export default {
    data(){
      return {

      }
    },
    created(){
      this.see_game_details({id:this.$route.params.id})
    },
    computed: {
      ...mapState([
          "electronicGame"
      ])
    },
    watch:{
      '$route'(n,o){
        this.see_game_details({id:this.$route.params.id})
      }
    },
    methods: {
      ...mapActions([
        "see_game_details"
      ])
    },
  }
</script>
<style lang="less" scoped>
  div{
    iframe{
      width: 100%;
      min-height:1000px;
    }
  }
</style>
