<template>
  <div class="searchTime">
    <el-date-picker
      class="specificDate"
      v-model="queryDate"
      type="datetimerange"
      align="center"
      :range-separator="$L.t('common.zhi')"
      :start-placeholder="$L.t('chessGame.zh13')"
      :end-placeholder="$L.t('chessGame.zh14')"
      @change="changeTime"
    >
    </el-date-picker>
  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  import {dateDiff, getTimerAll} from  '@/common/common'
  import { Message,MessageBox} from 'element-ui';
  export default {
    props:["day"],
    data () {
      return {
        queryDate:[ '', ''],
      }
    },
    methods: {
      // 转换成时间 yy-mm-dd
      timeTool(d){
        var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        return datetime;
      },
      // 切换时间
      changeTime(){
        let start = this.timeTool(new Date(this.queryDate[0])) + ' 00:00:00'
        let end = this.timeTool(new Date(this.queryDate[1])) + ' 23:59:00'
        if(!this.timeFlit()){
          Message({
            message:this.$L.t('common.zh15'),
            type:"warning",
            showClose:true
          })
          // 赋值今天时间
          let today = getTimerAll.getSelfDayTime()
          start = today.startTime
          end = today.endTime
        }
        this.queryDate=[start, end]
        this.$emit('sendTime', start, end)
      },
      // 判断天数是否超过60天
      timeFlit(){
        let startTimer = this.timeTool(new Date(this.queryDate[0]))
        let endTimer = this.timeTool(new Date(this.queryDate[1]))
        let dateNum = dateDiff(startTimer,endTimer)
        if(dateNum*1 > 59){
          return false;
        }
        return true
      },
      // 根据day传的值 返回对应的时间
      getChangeDay (day) {
        let timer = ''
        switch (day) {
          case 0:
            timer = getTimerAll.getSelfDayTime()
            break;
          case 1:
            timer = getTimerAll.getPrevDayTimer()
            break;
          case 6:
            timer = getTimerAll.getSelfWeek('time')
            break;
          case 14:
            timer = getTimerAll.getPrevWeek('time')
            break;
          case 30:
            timer = getTimerAll.getSelfMonth('time')
            break;
          case 60:
            timer = getTimerAll.getPrevMonth('time')
            break;
        }
        return timer
      },
    },
    watch:{
      'day':function (n,o) {
        let allTime = this.getChangeDay(n)
        let start = allTime.startTime
        let end = allTime.endTime
        if(!this.timeFlit()){
          Message({
            message:this.$L.t('common.zh15'),
            type:"warning",
            showClose:true
          })
          // 赋值今天时间
          let today = getTimerAll.getSelfDayTime()
          start = today.startTime
          end = today.endTime
        }
        // console.log(start, end)
        this.queryDate= [start, end]
        this.$emit('sendTime', start, end)
      }
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
  .searchTime {
    position: relative;
  }
</style>
