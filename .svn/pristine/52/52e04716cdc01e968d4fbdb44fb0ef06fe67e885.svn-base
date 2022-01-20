<template>
  <div>
    <div class="admin_container">
      <div class="admin_header">{{$L.t('setup.info206')}}</div>
      <div class="admin_content">
        <div class="admin_list_li">
          <span>{{$L.t('setup.info207')}}:</span>
          <div>
            <input type="number" v-model="specialOfferStore.specialOffter.data.data.huoDongBindBank" :placeholder="$L.t('moneyAdmin.Gift.info12')">
            {{$L.t('yuan')}},{{$L.t('setup.info199')}}
          </div>
        </div>
        <div class="admin_list_btn" v-show="existData">
          <button @click="saveSetting()">{{$L.t('chatRoom.zh86')}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  export default {
    data () {
      return {
        existData:false
      }
    },
    created (){
      this.getSpecialOffter({zsClass: 'huoDongBindBank'}).then(res=>{
        this.existData = true
      })
    },
    methods: {
      ...mapActions([
        'getSpecialOffter',
        'huoDongBindBank',
      ]),
      // 保存设置
      saveSetting () {
        this.huoDongBindBank({huoDongBindBank: this.specialOfferStore.specialOffter.data.data.huoDongBindBank})
      },
    },
    computed: {
      ...mapState([
        "specialOfferStore",
      ]),
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.admin_content{

}
</style>
