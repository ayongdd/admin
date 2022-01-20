<template>
  <div>
    <div class="admin_container">
      <div class="admin_header">{{$L.t('setup.info197')}}</div>
      <div class="admin_content">
        <div class="admin_list_li">
          <span>{{$L.t('setup.info198')}}:</span>
          <div>
            <input type="number" v-model="specialOfferStore.specialOffter.data.data.zczs" :placeholder="$L.t('moneyAdmin.Gift.info12')">
            {{$L.t('yuan')}},{{$L.t('setup.info199')}}
          </div>
        </div>
        <div class="admin_list_btn" v-if="specialOfferStore.specialOffter.data.data.zczs">
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
      }
    },
    created (){
      this.getSpecialOffter({zsClass: 'zczs'})
    },
    methods: {
      ...mapActions([
        'getSpecialOffter',
        'setSpecialZczs',
      ]),
      // 保存设置
      saveSetting () {
        this.setSpecialZczs({zczs: this.specialOfferStore.specialOffter.data.data.zczs})
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
