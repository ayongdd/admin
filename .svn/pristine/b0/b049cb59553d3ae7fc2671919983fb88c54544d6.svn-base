<template>
    <div class="container">
        <!-- <gameManage v-if="$route.params.mKey == 1"></gameManage> -->
      <reportTable_0 v-if="$route.params.key == 1"></reportTable_0>
  
      <reportTable_1 v-if="$route.params.key == indexid"></reportTable_1>
  
    </div>
  </template>
  
  <script>
  
    import {mapState, mapMutations, mapActions} from 'vuex';
    import {getDate,setDate,copyobj,setSession,getSession,getchar,randomRange} from '@/common/common'
    export default {
      data () {
        return {
          indexid:''
        }
      },
      created (){
        if(this.$route.params.key != 1){
            this.indexid = this.$route.params.key
          }
      },
      watch: {
        $route(){
          if(this.$route.params.key != 1){
            this.indexid = this.$route.params.key
          }
        }
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
  