<template>
  <div class="container">
    <div id="left">
      <ul id="menu">
        <li v-for="(item, index) in indexStore.indexMeauList" :key="index">
          <a href="javascript:void(0)"
             class="levelA leveliconmember"
             :class="{'clickeds': item.active}"
             :style="item.active ? {'backgroundPosition':'-210px 0'} : $language() ? {'backgroundPosition':'5px -36px'}:{'backgroundPosition':'-10px -36px'}"
             @mouseenter="mouseStyle($event,'3px 0',item.active)"
             @mouseleave="mouseStyle($event,'5px -36px',item.active)"
             @click="meauChange(index)">
            <span><img src="static/images/new/collapse.png">{{item.title}}</span>
            <div class="lvright"></div>
            <img class="levposimg" :src="'static/images/tg/' + item.icon">
          </a>
          <ul id="nav_tr_1" v-for="(i, key) in item.list" :key="key" v-if="item.active">
            <li>
              <!--{{$language()}}-->
              <!--@click="routerClick(item, i)"-->
              <a class="normal"
                 @click="routerClick(item, i)"
                 :href="getHref(item, i)"
                 :class="[(i.menu_id || i.node) == $route.params.key && ($route.name == getMeauOpen(item.node))?'color-red':'', {'color-red': i.default || flagMeauClass(i)}]">
                {{i.title}}
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import { copyobj,  setDate, getDate, getchar,getDateStorage } from '../common/common'
export default {
  name: 'leftNav',
  data() {
    return {
      selectIndex: 0,
      list: [],
      titleVal:''
    }
  },
  watch: {
    $route(to, from) {
      // console.log(to)
      // 关闭加载层
      this.setLoddingData(false)
      // 关闭无权限提示
      this.setAuthVisible(false)
    }
  },
  created() {
    this.getIndexMeauList().then(() => {
      this.getRouterMeau(this.$route.name)
    })
    // console.log(getDateStorage('titleVal'))
  },
  methods: {
    ...mapMutations([
      'setLoddingData',
      'setAuthVisible',
      'setIndexMeau',
    ]),
    ...mapActions([
      "getChessinfoAction",
      "getAgencyList",
      "getIndexMeauList",
      "getTopInfo"
    ]),
    mouseStyle(event,postion,active) {
      let dom = event.target.style;
      dom.backgroundPosition = postion;
      if(active) {
        dom.backgroundPosition = '-210px 0';
      }
    },
    getHref(item, i) {
      if (item.id * 1 == 553) {
        return '#/' + i.node
      } else {
        return '#/' + this.getMeauOpen(item.node) + '/' + i.node;
      }
    },
    // 根据当前路由name 展开初始化菜单
    getRouterMeau(name) {
      this.titleVal = getDateStorage('titleVal')
      let list = this.indexStore.indexMeauList
      for (let k in list) {
        if (this.getMeauOpen(list[k].node) == name) {
          list[k].active = true
          // console.log(list[k].list)
          let keys = this.$route.params.key
          let titleList = list[k].list.filter(res => res.node.indexOf(keys) == '0' || res.node == keys)
          if(this.titleVal && this.titleVal.length>0){
            document.title = this.titleVal +' - '+ titleList[0].title
          }else{
            document.title = titleList[0].title
          }
        } else {
          list[k].active = false
        }
      }
      this.setIndexMeau(list)
    },
    // 根据当前路由name 展开对应的菜单方法
    getMeauOpen(name) {
      let routeName = {
        // 会员管理
        'member': 'member',
        // 资金管理
        'recharge': 'money',
        // 报表查询
        'profit': 'report',
        // 聊天室
        'chat': 'chatRoom',
        // 公告
        'notice': 'annoucement',
        // 优惠活动
        'activity': 'specialOffer',
        // 彩种
        'lottery': 'lottery',
        // 视讯管理
        'zhenren': 'videoGame',
        // 电子管理
        'dianzi': 'electronicGame',
        // 棋牌管理
        'chess': 'chessGame',
        // 体育管理
        'tiyu': 'sportGame',
        // 电竞
        'dianjing':'dianjing',
        // 代理
        'agent': 'agent',
        // 系统设置
        'website': 'setup',
        // 财务管理
        'finance': 'financialIndex',
        // 管理人员
        'manage': 'manager',
        // 网站安全
        'system': 'systemSafe',
      }
      for (let k in routeName) {
        if (name == k) {
          return routeName[k]
        }
      }
    },
    // 菜单切换
    meauChange(index) {
      // console.log(index)
      let list = this.indexStore.indexMeauList
      for (let k in list) {
        if (k == index) {
          list[k].active = !list[k].active
        } else {
          list[k].active = false
        }
      }
      this.setIndexMeau(list)
    },
    // 路由跳转
    routerClick(item, i) {
      // 是否存在快捷菜单
      this.titleVal = getDateStorage('titleVal')
      if (item.id == '553') {
        this.$router.push({ path: '/' + i.node })
      } else {
        this.$router.push({ path: '/' + this.getMeauOpen(item.node) + '/' + i.node })
      }
      if(this.titleVal && this.titleVal.length>0){
        document.title = this.titleVal +' - '+ i.title

      }else{
        document.title = i.title
      }
    },
    // 判断快捷菜单的红色字体
    flagMeauClass(i) {
      // 不是快捷菜单的直接返回false
      if (i.pid != '553') return false;
      let key = this.$route.params.key
      let name = this.$route.name
      let num = i.node.replace(/[^0-9]/ig, '')
      return i.node.indexOf(name) != '-1' && key == num
    }
  },
  computed: {
    ...mapState([
      "indexStore",
      "electronicGame",
      "tableStore"
    ]),
  },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#menu li ul li {
  border-bottom: 1px dotted #999;
}

#menu li ul li a.color-red {
  color: red;
}
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width:2px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  -webkit-box-shadow:inset006pxrgba(0,0,0,0.3);
  border-radius:2px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius:5px;
  background:rgba(0,0,0,0.1);
  -webkit-box-shadow:inset006pxrgba(0,0,0,1);
}
::-webkit-scrollbar-thumb:window-inactive {
  background:rgba(255,0,0,0.4);
}

</style>
