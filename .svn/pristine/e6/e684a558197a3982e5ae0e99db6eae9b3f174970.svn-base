<template>
    <div class="container">
      <table class="table">
        <tbody>
          <tr class="nav">
            <td colspan="8">{{$L.t('annoucement.swtz_4.sysNotice')}}</td>
          </tr>
          <tr class="head">
            <td>{{$L.t('annoucement.swtz_4.title')}}</td>
            <td>{{$L.t('annoucement.swtz_4.content')}}</td>
            <td>{{$L.t('annoucement.swtz_4.notice')}}</td>
            <td>{{$L.t('annoucement.swtz_4.createTime')}}</td>
            <td>{{$L.t('annoucement.swtz_4.startTime')}}</td>
            <td>{{$L.t('annoucement.swtz_4.endTime')}}</td>
            <td>{{$L.t('annoucement.swtz_4.isAlert')}}</td>
          </tr>
          <tr class="odd" v-for="(item,index) in datalist.data" :key="index" v-if="item !== null">
            <td>{{item.name}}</td>
            <td>{{item.typename}}</td>
            <td class="notice_content">{{item.content}}</td>
            <td>{{times(item.create_time)}}</td>
            <td>{{times(item.start_time)}}</td>
            <td>{{times(item.end_time)}}</td>
            <td>{{item.is_tan == 1?$L.t('annoucement.swtz_4.pop'): $L.t('annoucement.swtz_4.nopop')}}</td>
          </tr>
          <tr v-if="getPageData.sum>0">
            <td colspan="8">
              <page-limit :pageData="getPageData" :inputShow="'1'"
                @handlePage="handlePage"></page-limit>
            </td>
          </tr>
          <tr v-if="!datalist.data">
            <td colspan="8" class="nodata">{{$L.t('noData')}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script>
      import {mapState, mapMutations, mapActions} from 'vuex';
      import {getSession} from '@/common/common'
      export default {
        data () {
          return {
            sendParmas:{
              page:1,
              limit:20,
              typeid:18,
              sum:'',
            },
            titleAnnout:'',
            visibleNum:'',
            editid:'',
            status:false,
            datalist:[]
          }
        },
        created (){
          this.getNoticeList(this.sendParmas).then(res=>{
            this.datalist = res
          })
        },
        mounted(){

        },
        methods: {
          ...mapMutations([
          ]),
          ...mapActions([
            "getNoticeList",
          ]),
          // 分页组件返回的参数
          handlePage (data) {
            this.sendParmas.page = data.page
            this.sendParmas.limit = data.limit
            this.getNoticeList(this.sendParmas).then(res=>{
              this.datalist = res
            })
          },
          times(t) {
            let date = new Date(t * 1000)
            let Y = date.getFullYear() + '-';
            let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            let d = date.getDate() + ' ';
            d = d < 10 ? ('0' + d) : d;
            let h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            let m = date.getMinutes();
            m = m < 10 ? ('0' + m) : m;
            let s = date.getSeconds();
            s = s < 10 ? ('0' + s) : s;
            return Y + M + d + ' ' + h + ':' + m + ':' + s;
          }
        },
        computed: {
          ...mapState([
            "indexStore",
            "annoucementStore"
          ]),
          getPageData () {
            return {
              page: this.sendParmas.page,
              limit: this.sendParmas.limit,
              sum: this.datalist.count
            }
          }
        },
      }
    </script>
  <style lang="less" scoped>
  .form_container{
    height: 350px;
    padding: 0 10px;
    overflow: auto;
    // 头部
    .formBox_title{
      height: 30px;
      line-height: 30px;
      background: linear-gradient(left, #2DA4DD, #0E8CC7);
      font-size: 13px;
      color: #fff;
      padding-left: 5px;
      font-weight: bold;
    }
    ul{
      border: 1px solid #ccc;
      border-bottom: 0;
      li{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        padding: 4px 0;
        color: #000;
        input,select{
          height: 28px;
          line-height: 28px;
          padding:0 10px;
        }
        .formLi_title{
          width: 110px;
          padding-left: 5px;
          font-weight: bold;
          font-size: 14px;
        }
        .formLi_content{
          width: 300px;
          margin-right: 20px;
          input{
            width: 100%;
          }
          textarea{
          padding: 10px;
        }
        }
        .formLi_hint{
          font-size: 12px;
        }
        // 提交按钮
        .form_commit{
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          padding: 0 20px;
          text-align: center;
          // background: #EAEAEA;
          background: linear-gradient(to left, #efefef, #eee);
          border: 1px solid #aaa;
          margin: 2px auto;
        }
      }
    }
  }
  .notice_content{
    width: 50%;
  }
    </style>
