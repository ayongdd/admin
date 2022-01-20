import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/money/8'
    },
    {path: '/', name: 'index',component: index,children:[
      // 会员管理
      {path: '/member/:key',name: 'member',component: resolve => require(['@/components/member/Index'], resolve),props: true},
      // 资金管理
      {path: '/money/:key',name: 'money',component: resolve => require(['@/components/moneyAdmin/Index'], resolve),props: true},
      // 报表查询
      {path: '/report/:key',name: 'report',component: resolve => require(['@/components/report/Index'], resolve),props: true},
      // 聊天室管理
      {path: '/chatRoom/:key',name: 'chatRoom',component: resolve => require(['@/components/chatRoom/Index'], resolve),props: true},
      // 公告管理
      {path: '/annoucement/:key',name: 'annoucement',component: resolve => require(['@/components/annoucement/Index'], resolve),props: true},
      // 优惠活动
      {path: '/specialOffer/:key', name: 'specialOffer', component: resolve => require(['@/components/specialOffer/Index'], resolve), props: true },
      // 彩票管理
      {path: '/lottery/:key',name: 'lottery',component: resolve => require(['@/components/lottery/Index'], resolve),props: true},
      // 代理商管理
      {path: '/agent/:key',name: 'agent',component: resolve => require(['@/components/agent/Index'], resolve),props: true},
      // 系统设置
      {path: '/setup/:key',name: 'setup',component: resolve => require(['@/components/setup/Index'], resolve),props: true},
      // 财务管理
      {path: '/financialIndex/:key', name: 'financialIndex',  component: resolve => require(['@/components/financial/Index'], resolve), props: true},
      // 管理人员
      {path: '/manager/:key',name: 'manager',component: resolve => require(['@/components/manager/Index'], resolve),props: true},
      // 顶部变更密码
      {path: '/managerPassword', name: 'managerPassword',  component: resolve => require(['@/components/manager/manager_password'], resolve), props: true},
      // 网站安全设置
      {path: '/systemSafe/:key', name: 'systemSafe',  component: resolve => require(['@/components/systemSafe/Index'], resolve), props: true},

      //电子游戏管理
      {path: '/electronicGame/:key/:mKey/:id', name: 'electronicGame',  component: resolve => require(['@/components/electronicGame/index'], resolve), props: true},

      //视讯游戏管理
      {path: '/videoGame/:key/:mKey/:id', name: 'videoGame',  component: resolve => require(['@/components/electronicGame/index'], resolve), props: true},
      // 权限列表
      {path: '/managerset', name: 'managerset',  component: resolve => require(['@/components/manager/manager_set'], resolve), props: true},

      //棋牌游戏管理 key导航标识  mKey标识组件 id 运营商id
      {path: '/chessGame/:key/:mKey/:id', name: 'chessGame',  component: resolve => require(['@/components/electronicGame/index'], resolve), props: true},

      {path: '/sportGame/:key/:mKey/:id', name: 'sportGame',  component: resolve => require(['@/components/electronicGame/index'], resolve), props: true},
      // 电竞管理
      {path: '/dianjing/:key/:mKey/:id', name: 'dianjing',  component: resolve => require(['@/components/electronicGame/index'], resolve), props: true},
    ]},

    {path: "*", redirect: "/"},

    {path: '/login', name: 'login',  component: resolve => require(['@/components/login.vue'], resolve), props: true},

    // ip限制空白页
    {path: '/ipLimitBlank', name: 'ipLimitBlank',  component: resolve => require(['@/components/ipLimitBlank.vue'], resolve), props: true},
    //  第三方游戏记录弹窗
    {path: '/chessUrl/:id', name: 'chessUrl',  component: resolve => require(['@/components/chessUrl.vue'], resolve), props: true},
  ]
})
