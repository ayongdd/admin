<template>
  <div id="app">

    <headers></headers>

    <div class="leftSysNav"
         :style="$language() ?
         {'max-width':'204px','min-width':'204px','border-right':'1px solid #BFBFBF'}:
         {'max-width':'168px','min-width':'168px','border-right':'4px solid #BFBFBF'}">
      <leftNav></leftNav>
    </div>
    <!-- 加载锁定层 -->
    <div class="loadding_div" v-if="indexStore.loddingLock">
      <div style="margin-top: -120px;">
        <i class="el-icon-loading" style="font-size: 70px;"></i>
        <div class="lockLoing" style="margin-left: -15px;">
          <span>{{$L.t('index.locking')}}</span>
          <p class="loadding-close" @click="setLoddingLock(false)">{{$L.t('index.clickClose')}}</p>
        </div>
      </div>
    </div>
    <div id="contentMain" :style="$language() ? {'left':'204px'}:{'left':'170px'}">
      <!-- 加载层 -->
      <div class="loadding_div" v-if="indexStore.loddingFlag">
        <div>
          <i class="el-icon-loading"></i>
          <span>{{$L.t('index.loading')}}</span>
        </div>
      </div>
      <el-dialog
        :title="$L.t('index.memberData')"
        :append-to-body="false"
        :modal-append-to-body="false"
        :visible.sync="indexStore.memberParams.visible"
        width="1250px"
        @close="closeMember()">
        <div class="modelList_container" v-if="indexStore.memberParams.visible">
          <hygl_3 :allUserName="indexStore.memberParams.name"></hygl_3>
        </div>
      </el-dialog>
      <!-- 项目汇总注册，访问详情 -->
      <el-dialog
        :title="indexStore.memberParamsSum.title"
        :append-to-body="false"
        :modal-append-to-body="false"
        :visible.sync="indexStore.memberParamsSum.visible"
        width="1280px"
        @close="closeMember()">
        <div class="modelList_container" v-if="indexStore.memberParamsSum.visible">
          <hygl_copy :allUserNameSum="indexStore.memberParamsSum"></hygl_copy>
        </div>
      </el-dialog>

      <router-view/>
    </div>
    <!-- 彩金赠送存在失败提示 -->
    <comfirm-model
      v-if="constantStore.caijin.visible"
      :content="constantStore.caijin.content"
      :notBtn="'true'"
      @closeModel="closeCaiModel">
    </comfirm-model>

    <!-- 无权限弹窗 -->
    <!--<comfirm-model-->
      <!--v-if="constantStore.authVisible"-->
      <!--:content="perMsg"-->
      <!--:notBtn="'true'"-->
      <!--@closeModel="closeModel">-->
    <!--</comfirm-model>-->

    <!-- 无权限弹窗 -->
    <comfirm-model
      v-if="constantStore.gameNotVisible"
      :content="$L.t('index.upper')"
      :notBtn="'true'"
      @closeModel="closeGameModel">
    </comfirm-model>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex'
  import {getSession,cleraSeeion} from "../common/common";

  export default {
    name: 'App',
    data() {
      return {

      }
    },
    computed: {
      ...mapState([
        'indexStore',
        'constantStore'
      ]),
    },
    created() {

    },
    watch: {

    },
    methods: {
      ...mapMutations([
        'setAuthVisible',
        'setMemberVisible',
        "setGameNotVisible",
        "setCaiVisible",
        "setLoddingLock"
      ]),
      // 彩金弹窗关闭
      closeCaiModel () {
        this.setCaiVisible({visible: false, content: ''})
      },
      // 弹窗关闭回调
      closeModel () {
        this.setAuthVisible(false)
      },
      // 关闭会员列表弹窗
      closeMember () {
        this.setMemberVisible(false)
      },
      // 关闭
      closeGameModel () {
        this.setGameNotVisible(false)
      },
    },
  }
</script>
<!--scoped-->
<style lang="less">
#headerboxtop{
  display: flex;
  align-items: center;
  height: 50px;
}
.leftSysNav{
  position: absolute;
  max-width: 168px;
  min-width: 168px;
  left: 0;
  bottom: 0;
  top: 50px;
  z-index: 99;
  overflow-y: auto;
  padding-bottom: 5px;
  border-right:4px solid #BFBFBF;
  /*min-height: 900px;*/
  &.container{
    width: 100%;
    height: 100%;
  }
}
#contentMain{
  position: absolute;
  top: 50px;
  left: 170px;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  background: #fff;

  // z-index: 100;
}
  /* .leftSysNav{
    max-width: 168px;
    min-width: 168px;
    min-height: calc(100vh - 50px);
    float: left;
    width: 15%;
    border-right:2px solid #BFBFBF;
  } */
  /* #contentMain{
    position: relative;
    width: calc(100% - 171px);
    width: 85%;
    float: left;
    display: block;
    overflow: auto;
  } */


.loadding_div{
  position: fixed;
  top: 48px;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  /* opacity: .5; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #409eff;
  z-index: 9999;
}
.loadding_div i{
  font-size: 30px;
}
.loadding_div div{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-left: -100px;
  font-size: 14px;
}
/*html,body{margin: 0;padding: 0;}*/

.modelList_container{
  height: 680px;
  overflow: hidden;
}
</style>
