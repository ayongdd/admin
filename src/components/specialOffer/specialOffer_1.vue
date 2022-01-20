<template>
  <div>
    <div class="admin_container">
      <div class="admin_header">{{$L.t('setup.info200')}}</div>
      <div class="admin_content">
        <div class="admin_list_li">
          <span>{{$L.t('setup.info201')}}1:</span>
          <div>
            <input type="number" v-model="listData.sczs" :placeholder="$L.t('moneyAdmin.Gift.info12')">
            %，{{$L.t('setup.info202')}}
          </div>
        </div>
        <div class="admin_list_addlist">
          <span>{{$L.t('setup.info201')}}2:</span>
          <ul>
            <li v-for="(item, index) in listArr">
              <span>{{$L.t('common.cz')}}:</span>
              <input type="number" v-model="item.key">
              <span>{{$L.t('lottery.zh110')}}</span>
              <input type="number" v-model="item.value">
              <span>{{$L.t('yuan')}}</span>
              <button @click="delList(index)">{{$L.t('delete')}}</button>
            </li>
            <li>
              <button @click="addList()">{{$L.t('financial.zh100')}} +</button>
            </li>
          </ul>
        </div>
        <div class="setting_title">
          {{$L.t('setup.info203')}}
        </div>
        <div class="admin_list_li">
          <span>{{$L.t('setup.info204')}}:</span>
          <div>
            <input type="number" v-model="listData.czzs" :placeholder="$L.t('moneyAdmin.Gift.info12')">
            %，{{$L.t('setup.info202')}}
          </div>
        </div>


        <!--<div class="admin_list_li">-->
          <!--<span>每日首充赠送:</span>-->
          <!--<div>-->
            <!--<input type="number" v-model="listData.mrsczs" placeholder="请输入金额">-->
            <!--%，无活动请留空 或者为0-->
          <!--</div>-->
        <!--</div>-->

        <div class="admin_list_addlist">
          <span>{{$L.t('setup.info205')}}:</span>
          <ul>
            <li v-for="(item, index) in listArr2">
              <span>{{$L.t('common.cz')}}:</span>
              <input type="number" v-model="item.key">
              <span>{{$L.t('lottery.zh110')}}</span>
              <input type="number" v-model="item.value">
              <span>{{$L.t('yuan')}}</span>
              <button @click="delList2(index)">{{$L.t('delete')}}</button>
            </li>
            <li>
              <button @click="addList2()">{{$L.t('financial.zh100')}} +</button>
            </li>
          </ul>
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
        listData: {
          czzs: '',
          sczs: '',
          mrsczs: '',
        },
        listArr: [],
        listArr2: [],
        existData:false
      }
    },
    watch: {
      'specialOfferStore.specialOffter.data.data' (newValue) {
        this.listData = newValue
        let data = newValue.sczs2
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
        this.existData = true


        let data2 = newValue.mrsczs
        if (!data2) {
          return false
        }
        let arr2 = []
        data2 = JSON.parse(data2)
        for (let k in data2) {
          let obj = {
            key: k,
            value: data2[k]
          }
          arr2.push(obj)
        }

        this.listArr2 = arr2

      }



    },
    created (){
      this.getSpecialOffter({zsClass: 'czzs'}).then(res=>{
        this.existData = true
      })
    },
    methods: {
      ...mapActions([
        'getSpecialOffter',
        'setSpecialCzzs',
      ]),
      // 添加元素
      addList () {
        this.listArr.push({key: '', value: ''})
      },
      addList2 () {
        this.listArr2.push({key: '', value: ''})
      },
      // 删除
      delList (index) {
        this.listArr.splice(index, 1)
      },
      delList2 (index) {
        this.listArr2.splice(index, 1)
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

        let [arr2, amount2] = [[],[]]
        if (this.listArr2.length > 0) {
          arr2 = this.listArr2.map((res) => {
            return res.key
          })
          amount2 = this.listArr2.map((res) => {
            return res.value
          })
        }

        this.setSpecialCzzs({
          czzs: this.listData.czzs,
          sczs: this.listData.sczs,
          sczs2: arr,
          sczs2_amount: amount,

          // mrsczs: this.listData.mrsczs,
          mrsczs: arr2,
          mrsczs_amount: amount2,

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
