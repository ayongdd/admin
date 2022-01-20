<template>
    <div>
        <manager_1 v-if="$route.params.key == 1"></manager_1>

        <manager_2 v-if="$route.params.key == 2"></manager_2>

        <manager_3 v-if="$route.params.key == 3"></manager_3>

        <manager_4 v-if="$route.params.key == 4"></manager_4>
        
        <manager_5 v-if="$route.params.key == 5"></manager_5>
    </div>
  </template>
  
  <script>
  
    import {mapState, mapMutations, mapActions} from 'vuex';
    import {getDate,setDate,copyobj,setSession,getSession,getchar,randomRange} from '@/common/common'
  
    export default {
      name: 'home',
      data () {
        return {
  
        }
      },
      mounted(){
  
      },
      created (){
  
  
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
  
  <style lang="css" scoped>
  </style>
  