<template>
  <div class="searchTime zjmx-time">
    <!--<el-date-picker-->
      <!--class="specificDate"-->
      <!--v-model="queryDate"-->
      <!--type="datetimerange"-->
      <!--align="center"-->
      <!--range-separator="至"-->
      <!--start-placeholder="开始日期"-->
      <!--end-placeholder="结束日期"-->
      <!--@change="changeTime"-->
      <!--&gt;-->
    <!--</el-date-picker>-->
    <!-- <span @click="CompareDate">开始时间:</span> -->
    <el-date-picker
            style="width: 190px;"
      v-model="startTime"
      type="datetime"
      :placeholder="$L.t('annoucement.swtz_4.startTime')"
      @change="changeTimer()">
    </el-date-picker>
    <span>-</span>
    <el-date-picker
            style="width: 190px;"
      v-model="endTime"
      type="datetime"
      :placeholder="$L.t('annoucement.swtz_4.endTime')"
      @change="changeTimer()">
    </el-date-picker>
  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  import {dateDiff, getTimerAll,getTimes} from  '@/common/common'
  import { Message,MessageBox} from 'element-ui';
  export default {
    props:["day", 'paramTime'],
    data () {
      return {
        // startTime: this.timeTool(new Date()) + ' 00:00:00',
        // endTime: this.timeTool(new Date()) + ' 23:59:59',
        startTime: this.timeTool(new Date()) + ' 00:00:00',
        endTime: this.timeTool(new Date()) + ' 23:59:59',
        days: {day: this.day},
      }
    },
    created (){
      if(this.day == 'hylb'){
        this.startTime =  ''
        this.endTime = ''
      }
      // console.log(this.paramTime)
      if (this.paramTime) {
        this.startTime = this.paramTime.fromTime || this.timeTool(new Date()) + ' 00:00:00'
        this.endTime = this.paramTime.toTime || this.timeTool(new Date()) + ' 23:59:59'
      }
    },
    methods: {
      // 转换成时间 yy-mm-dd
      timeTool(d){
        var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        return datetime;
      },
      getTimes (t) {
        let date = new Date(t)
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
        return Y + M + d + h + ':' + m + ':' + s;
      },
      // 选择时间
      changeTimer () {
        let start = this.getTimes(new Date(this.startTime))
        let end = this.getTimes(new Date(this.endTime))
        // 若是两个时间不为空才像 父组件返回值
        if (this.startTime && this.endTime) {
          if(this.CompareDate(start,end)){
            Message({
              message:this.$L.t('common.zh14'),
              type:"warning",
              showClose:true
            })
            this.startTime = this.timeTool(new Date()) + ' 00:00:00'
            this.endTime = new Date()
            start = this.timeTool(new Date()) + ' 00:00:00'
            end = this.timeTool(new Date()) + ' 23:59:59'
          }
          if(!this.timeFlit()){
            Message({
              message:this.$L.t('common.zh15'),
              type:"warning",
              showClose:true
            })
            // 赋值今天时间
            start = this.timeTool(new Date()) + ' 00:00:00'
            this.startTime = this.timeTool(new Date()) + ' 00:00:00'
            end = this.timeTool(new Date()) + ' 23:59:59'
            this.endTime = this.timeTool(new Date()) + ' 23:59:59'
          }
          // 默认加尾数时间
          // start = this.timeTool(new Date(this.startTime))
          // end = this.timeTool(new Date(this.endTime))
          this.$emit('sendTime', start, end)
        } else {
          this.$emit('sendTime', '', '')
        }
      },
      // 判断天数是否超过60天
      timeFlit(){
        let startTimer = this.startTime ? this.timeTool(new Date(this.startTime)) : this.timeTool(new Date())
        let endTimer = this.endTime ? this.timeTool(new Date(this.endTime)) : this.timeTool(new Date())
        let dateNum = dateDiff(startTimer,endTimer)
        if(dateNum*1 > 59){
          return false;
        }
        return true
      },
      CompareDate(d1,d2){
        return ((new Date(d1.replace(/-/g,"\/"))) > (new Date(d2.replace(/-/g,"\/"))))
      },
      // 根据day传的值 返回对应的时间
      getChangeDay (day) {
        let startTime = this.getTimes(new Date(this.startTime))
        let endTime = this.getTimes(new Date(this.endTime))
        let timer = ''
        switch (day) {
          case 'xx': timer = {startTime, endTime}; break;
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
          this.startTime =  allTime.startTime
          this.endTime = allTime.endTime
          if(!this.timeFlit()){
            Message({
              message:this.$L.t('common.zh15'),
              type:"warning",
              showClose:true
            })
            this.startTime = this.timeTool(new Date()) + ' 00:00:00'
            this.endTime = this.timeTool(new Date()) + ' 23:59:59'
          }
          this.$emit('sendTime', this.startTime, this.endTime)
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
