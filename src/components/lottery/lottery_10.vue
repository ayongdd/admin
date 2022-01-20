<template>
    <div>
      <div class="admin_container">
        <div class="admin_header">{{$L.t('lottery.zh106')}}</div>
        <div class="admin_content">
        <el-radio v-model="radio" label="2">{{$L.t('lottery.zh107')}}</el-radio>
        <el-radio v-model="radio" label="1">{{$L.t('lottery.zh108')}}</el-radio>


      <!-- 等级 -->
          <div class="admin_list_addlist" v-if="radio == '2'">
            <ul>
              <li v-for="(item, index) in datalist" :key="index">
                <span>{{$L.t('bonusGame.NiuNiuBetManage.zh24')}} {{item.key}} {{$L.t('bonusGame.NiuNiuBetManage.zh21')}}：</span>
                <input type="number" v-model="item.value" :placeholder="$L.t('lottery.zh109')">%
              </li>
            </ul>
          </div>

      <!-- 金额方案 -->
          <div class="admin_list_addlist"  v-if="radio == '1'">
            <ul>
              <li v-for="(item, index) in listArr" :key="index">
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

          <div class="admin_list_btn" v-if="radio == '1'">
            <button @click="saveSetting()">{{$L.t('chatRoom.zh86')}}</button>
          </div>
          <div class="admin_list_btn" v-if="radio == '2'">
            <button @click="saveLevelSetting()">{{$L.t('chatRoom.zh86')}}</button>
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
          datalist:[],
          radio:'1'
        }
      },
      watch: {
        'specialOfferStore.specialOffter.data' (newValue) {
          let data = newValue.data.mrfs
          // 不存在值的时候 默认为1
          if(newValue.type){
            this.radio = newValue.type
          }else{
            this.radio = '1'
          }

          if (!data) {
            return false
          }
          if(data){
            var arr = []
            data = JSON.parse(data)
            for (let k in data) {
              let obj = {
                key: k,
                value: data[k]
              }
              arr.push(obj)
            }

            if(newValue.type == 1){
              this.listArr = arr

              let arrner = []
              for(let i=1;i < 21;i++){
                let obj = {
                  key: i,
                  value: '0'
                }
                arrner.push(obj)
              }
              this.datalist = arrner
            }else{
              this.datalist = arr
              this.listArr = []
            }
          }else{
            this.startData()
          }
        }
      },
      created (){
        this.getSpecialOffter({zsClass: 'mrfs'}).then(res=>{
          if(!res.data.data.mrfs){
            this.startData()
          }
          var test = res.data.type
          this.radio = test.toString()
        })
      },
      methods: {
        ...mapActions([
          'getSpecialOffter',
          'setSpecialMrfs',
          'getLevel'
        ]),
        startData(){
          var arrner = []
          let data = {
            key:1,
            value:0
          }
          for(let i = 1;i<21;i++){
            let obj = {
              key: i,
              value: '0'
            }
            arrner.push(obj)
          }
          this.datalist = arrner
        },
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
            mrfs_type:1
          })

        },
        saveLevelSetting(){
          let [arr, amount] = [[],[]]
          if (this.datalist.length > 0) {
            arr = this.datalist.map((res) => {
              return res.key
            })
            amount = this.datalist.map((res) => {
              return res.value
            })
          }
          this.setSpecialMrfs({
            mrfs: arr,
            mrfs_amount: amount,
            mrfs_type:2
          })

        }
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
