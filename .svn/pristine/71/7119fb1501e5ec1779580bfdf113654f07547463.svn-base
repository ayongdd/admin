import Cookies from 'js-cookie'

var tmep = {v:"0.1",developer:"beta",date:"2018/8/23"};


// 富文本编辑框 工具栏
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{'header': 1}, {'header': 2}],               // custom button values
  [{'list': 'ordered'}, {'list': 'bullet'}],
  [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
  [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
  [{'direction': 'rtl'}],                         // text direction

  [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
  [{'header': [1, 2, 3, 4, 5, 6, false]}],

  [{'color': []}, {'background': []}],          // dropdown with defaults from theme
  [{'font': []}],
  [{'align': []}],
  ['link', 'image', 'video'],
  ['clean']                                         // remove formatting button
]

/* 浅拷贝 */
function copyobj(json,obj) {
  obj = obj || {};
  return json.parse(json.stringify(obj))

}

/* 返回state选中个数 */
function stateConut(list){
     var count=0;
     for(var i in list){
         list[i].state ? count++ :!1;
     }
     return count;
}

// 转换时间
function getLocalTime(nS) {
  return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/,' ');
}
function getTimes (t) {
  let date = new Date(t * 1000)
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  let d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  let h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  let m = date.getMinutes();
  m = m < 10 ? ('0' + m) : m;
  let s = date.getSeconds();
  s = s < 10 ? ('0' + s) : s;
  return Y + M + d + ' ' + h + ':' + m + ':' + s;
}

function setSession(key,data){
  data=data || ""
  Cookies.set(key, data, { });
}

function getSession(key) {

  var data=Cookies.get(key) || false;
  return data;
};

function setDate(key,data){
  data=data || [];
  localStorage[key]=JSON.stringify(data);
}

function getDate(key) {
   var data=localStorage[key] || false;
   data=JSON.parse(data);
   return data;
};

function getDateStorage(key) {
  var data=localStorage[key] || false;
  data=JSON.parse(data);
  return data;
};
function cleraSeeion(key){
  Cookies.remove(key);
}

// 判断日期区间
function dateDiff(sDate1,sDate2){    //sDate1和sDate2是2006-12-18格式
  let  aDate,  oDate1,  oDate2,  iDays;
  aDate  =  sDate1.split("-")
  oDate1  =  new Date(aDate[0] , aDate[1]-1 ,  +  aDate[2])
  aDate  =  sDate2.split("-")
  oDate2  =  new Date(aDate[0] , aDate[1]-1 ,  +  aDate[2])
  iDays  =  parseInt(Math.abs(oDate1  -  oDate2)  /  1000  /  60  /  60  /24)    //把相差的毫秒数转换为天数
  return iDays+1;
}

/*随机字母*/

function getchar(){
  var character = String.fromCharCode(Math.floor( Math.random() * 26) + "a".charCodeAt(0));
  return character;
}


/*根据属性筛选对象*/
function filtrArr(list,name,target){
  var t={};

  list=list || [];
  list.forEach(function(val,index,arr){

    if(val[name]==target){
       t=val;
    }

  })

  return t;

}


// 搜索条件-获取时间方法
let getTimerAll = {
  now: new Date(),
  nowYear: new Date().getFullYear(), //当前年
  nowMonth: new Date().getMonth(), //当前月
  nowDay: new Date().getDate(), // 当前天
  nowDayOfWeek: new Date().getDay() - 1,
  // 格式化时间
  formatDate(date) {
    let myyear = date.getFullYear();
    let mymonth = date.getMonth()+1;
    let myweekday = date.getDate();

    if(mymonth < 10){
        mymonth = "0" + mymonth;
    }
    if(myweekday < 10){
        myweekday = "0" + myweekday;
    }
    return (myyear+"-"+mymonth + "-" + myweekday);
  },
  // 获得某月的天数
  getMonthDays(myMonth){
    var monthStartDate = new Date(this.nowYear, myMonth, 1);
    var monthEndDate = new Date(this.nowYear, myMonth + 1, 1);
    var days = (monthEndDate - monthStartDate)/(1000 * 60 * 60 * 24);
    return days;
  },
  // 获取本月开始时间   本月结束时间
  getSelfMonth (n) {
    // 开始时间
    let monthStartDate = new Date(this.nowYear, this.nowMonth, 1);
    let startTime = this.formatDate(monthStartDate);
    // 结束时间
    let monthEndDate = new Date(this.nowYear, this.nowMonth, this.getMonthDays(this.nowMonth));
    let endTime = this.formatDate(monthEndDate);
    if (n) {
      return {startTime: startTime + ' 00:00:00', endTime:endTime + ' 23:59:59'}
    }
    return {startTime, endTime}
  },
  // 获取上月开始时间   上月结束时间
  getPrevMonth (n) {
    // 开始时间
    let monthStartDate = new Date(this.nowYear, this.nowMonth - 1, 1);
    let startTime = this.formatDate(monthStartDate);
    // 结束时间
    let monthEndDate = new Date(this.nowYear, this.nowMonth - 1, this.getMonthDays(this.nowMonth - 1));
    let endTime = this.formatDate(monthEndDate);
    if (n) {
      return {startTime: startTime + ' 00:00:00', endTime:endTime + ' 23:59:59'}
    }
    return {startTime, endTime}
  },
  // 获得本周开始时间  结束时间
  getSelfWeek (n) {
    let week = new Date(this.nowYear, this.nowMonth, this.nowDay - this.nowDayOfWeek);
    let startTime = this.formatDate(week);
    let endWeek = new Date(this.nowYear, this.nowMonth, this.nowDay + (6 - this.nowDayOfWeek));
    let endTime = this.formatDate(endWeek);
    if (n) {
      return {startTime: startTime + ' 00:00:00', endTime:endTime + ' 23:59:59'}
    }
    return {startTime, endTime}
  },
  // 说的上周开始时间  结束时间
  getPrevWeek (n) {
    let week = new Date(this.nowYear, this.nowMonth, this.nowDay - this.nowDayOfWeek - 7)
    let startTime = this.formatDate(week);
    let endWeek = new Date(this.nowYear, this.nowMonth, this.nowDay - this.nowDayOfWeek - 1)
    let endTime = this.formatDate(endWeek);
    if (n) {
      return {startTime: startTime + ' 00:00:00', endTime:endTime + ' 23:59:59'}
    }
    return {startTime, endTime}
  },
  // 获取今天日期
  getSelfDay () {
    return this.formatDate(this.now)
  },
  // 获取昨天日期
  getPrevDay () {
    let date = new Date(this.now.getTime() - 1 * 24 * 3600 * 1000);
    return this.formatDate(date)
  },
  // 返回今天开始  结束  00:00 23:59
  getSelfDayTime () {
    let timer = this.formatDate(this.now)
    return {startTime: timer + ' 00:00:00', endTime:timer + ' 23:59:59'}
  },
  getPrevDayTimer () {
    let date = new Date(this.now.getTime() - 1 * 24 * 3600 * 1000);
    let timer = this.formatDate(date)
    return {startTime: timer + ' 00:00:00', endTime:timer + ' 23:59:59'}
  },
}

/*追号计算*/

//获得 当前期号相对的今天
function getextoday(Y,M,D){
  //月需要减一
  M=M*1-1;
  M<10 ? M="0"+M : !1;

  var data=new Date();
  data.setFullYear(Y);
  data.setMonth(M);
  data.setDate(D);

  data=this.getyyymmdd(data);
  return data;
}

//获得 YYYYMMDD转为DATE
function getDatetype(Y,M,D){
  M=M*1-1;
  // M<10 ? M="0"+M : !1;

  var data=new Date();
  data.setFullYear(Y);
  data.setMonth(M);
  data.setDate(D);
  return data;
}

//获得下 多少天天日期
function getnextDate(today,daynum){
  today=today || new Date();
  var t=new Date(today.getTime()+1000*60*60*24*daynum);
  // console.info(daynum)
  // console.info(t)
  return t;
}

//日期格式转为YYYMMDD
function getyyymmdd(nowDate){
  var year = nowDate.getFullYear();
  var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
  var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
  var dateStr = year + "" + month + "" + day;
  return dateStr;
}



//判断时间差
function timeSection(timeStart,timeEnd,daySize){
         let _start=timeStart.getTime();
         let _end=timeEnd.getTime();


           if((_end-_start)>31*24*60*60*1000){
             return {state:false,msg:"查询时间间隔,一个月内"};
           }

           return {state:true};

}

function getNowFormatDate(date) {
  date=date || new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}

function times(t) {
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
function languageId(languageCode) { //转换语言码
  let code = 0;
  switch (languageCode) {
    case 'zh':code = 0;break;
    case 'en':code = 1;break;
    case 'vi':code = 2;break;
    case 'th':code = 3;break;
    case 'ja':code = 4;break;
    case 'id':code = 5;break;
  }
  return code;
}
export {
  copyobj,stateConut,setSession,getLocalTime,getSession,times,
  cleraSeeion,getyyymmdd,getchar,filtrArr,timeSection,
  getNowFormatDate,getTimes,
  getDateStorage,getDate,
  setDate,dateDiff,getTimerAll,toolbarOptions,languageId
}

export default tmep


