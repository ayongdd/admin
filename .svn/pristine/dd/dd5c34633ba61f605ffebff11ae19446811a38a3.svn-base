<template>
  <div>
    <div class="admin_container">
      <div class="admin_header">{{$L.t('setup.info208')}}</div>
      <div class="admin_content">
        <div class="admin_list_addlist">
          <span>{{$L.t('setup.info209')}}:</span>
          <ul>
            <li v-for="(item, index) in listArr">
              <span>{{$L.t('bonusGame.NiuNiuBetManage.zh22')}}:</span>
              <input type="number" v-model="item.key">
              <span>{{$L.t('lottery.zh110')}}</span>
              <input type="number" v-model="item.value">
              <span>%</span>
              <button @click="delList(index)">{{$L.t('delete')}}</button>
            </li>
            <li>
              <button @click="addList()">{{$L.t('financial.zh100')}} +</button>
            </li>
          </ul>
        </div>
        <div class="admin_list_btn">
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
        listArr: [],
      }
    },
    watch: {
      'specialOfferStore.specialOffter.data.data' (newValue) {
        // console.log(newValue.mrfs)
        let data = newValue.mrfs
        if (!data) {
          return false
        }
        let arr = []
        data = JSON.parse(data)
        for (let k in data) {
          let obj = {
            key: k,
            value: data[k]
          }
          arr.push(obj)
        }
        this.listArr = arr
      }
    },
    created (){
      this.getSpecialOffter({zsClass: 'mrfs'})
    },
    methods: {
      ...mapActions([
        'getSpecialOffter',
        'setSpecialMrfs',
      ]),
      // 添加元素
      addList () {
        this.listArr.push({key: '', value: ''})
      },
      // 删除
      delList (index) {
        this.listArr.splice(index, 1)
      },
      // 保存设置
      saveSetting () {
        // console.log(this.listArr)
        let [arr, amount] = [[],[]]
        if (this.listArr.length > 0) {
          arr = this.listArr.map((res) => {
            return res.key
          })
          amount = this.listArr.map((res) => {
            return res.value
          })
        }
        this.setSpecialMrfs({
          mrfs: arr,
          mrfs_amount: amount,
        })
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
  // 标题
  .setting_title{
    background: #fff;
    padding: 15px 20px;
    border-left: 5px solid #009688;
    font-size: 13px;
    color: #666;
  }
}
</style>
