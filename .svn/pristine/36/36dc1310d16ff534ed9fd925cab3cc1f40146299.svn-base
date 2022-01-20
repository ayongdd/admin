<template>
  <div class="container" ref="authBox">
  <!-- 内容 -->
    <div class="auth_content">
      <!-- 提示 -->
      <div class="auth_tips">{{$L.t('manager.info85')}}</div>
      <div class="auth_name">
        {{$L.t('manager.info86')}}:
        <input type="text" v-model="authName" :placeholder="$L.t('manager.info87')">
      </div>
      <div class="auth_set">
        {{$L.t('manager.info88')}}
        <button @click="headAllCheck(1)">{{$L.t('agent.agent_1.allSelect')}}</button>
        <button @click="headAllCheck(0)">{{$L.t('manager.info89')}}</button>
        <div class="commit_btn">
          <button @click="authCommit()">{{$L.t('sure')}}</button>
          <button @click="authBack()">{{$L.t('common.go-1')}}</button>
        </div>

      </div>
      <ul>
        <li v-for="(item, index) in authList" :key="index">
          <div class="auth_title">
              <span>
                <span>{{item[$language()+'title']}}</span>
                <button v-if="!item.active" @click="listChange(item)">+</button>
                <button v-else @click="listChange(item)">-</button>
              </span>
            <div>
              <span @click="allCheck(index, 1)">{{$L.t('agent.agent_1.allSelect')}}</span>
              <span @click="allCheck(index, 0)">{{$L.t('manager.info89')}}</span>
            </div>
          </div>
          <div class="auth_in" v-if="item.active">
            <div v-for="(i, key) in item.list" :key="key" v-if="i.is_menu*1 == 1 && i.pid*1 != 0">
              <label>
                <input type="checkbox" v-model="i.checked">
                <span :class="{'color-red': i.is_menu == 1}">{{i[$language()+'title']}}</span>
              </label>
              <button @click="checkThirdChildFn(i,index,key)">{{$L.t('check')}}</button>
            </div>
          </div>
          <div v-if="childAuthState && childIndex == index && childList && childList.length > 0" class="third-child">
            <div class="third-child-title">
              <div>
                （<span>{{childTitle}}</span>）{{$L.t('manager.info90')}}
              </div>
              <div style="opacity: 0" >
                {{domReset}}

              </div>
              <div class="third-child-all-select">
                <span @click="childCheck(1)">{{$L.t('agent.agent_1.allSelect')}}</span>
                <span @click="childCheck(0)">{{$L.t('manager.info89')}}</span>
              </div>
            </div>

            <div class="third-child-all">
              <div v-for="(x, key) in  childList">
                <label>
                  <input type="checkbox" v-model="x.checked" @change="returnSecond(x)">
                  <span>{{x[$language()+'title']}}</span>
                </label>
              </div>
            </div>
          </div>
          <div class="third-child" v-show="childIndex == index" v-else>
            <span style="color:#0169CD;font-size: 18px">{{childTitle}}</span>{{$L.t('manager.info91')}}
          </div>

        </li>
      </ul>
      <div class="fixed_main" @click="scrollHead()">
        <span>{{$L.t('manager.info93')}}</span>
        <span>{{$L.t('manager.info92')}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  export default {
    props: ['authData', 'authDataName'],
    data () {
      return {
        authList: this.authData,
        authName: this.authDataName || '',
        authType: this.authDataName,

        childAuthState:true,
        childIndex:null,
        childList:'',
        childTitle:'',

        domReset:0,

        secondKey:'',
      }
    },
    created(){
//      console.log(this.authData)
    },
    methods: {
      returnSecond(x){
        try{
          for(let a in this.authList[this.childIndex].list) {
            if(this.authList[this.childIndex].list[a].id == x.pid && x.checked){
              this.authList[this.childIndex].list[a].checked = true
            }
          }
        }catch(e){

        }

      },
      checkThirdChildFn(i,index,key){
        this.childIndex = index
        this.childList = i.list
        this.childTitle = i[this.$language()+'title']
        this.secondKey = key
        // console.log(this.authData)
      },
      // 头部全选/全不选
      headAllCheck (type) {
        let { authList } = this
        for (let k in authList) {
          for (let t in authList[k].list) {
            if (type == 1) {
              authList[k].list[t].checked = true
            } else {
              authList[k].list[t].checked = false
            }
            for(let z in authList[k].list[t].list){
              if (type == 1) {
                authList[k].list[t].list[z].checked = true
              } else {
                authList[k].list[t].list[z].checked = false
              }
            }
          }
        }
        this.domReset += 1
      },
      // 显示隐藏
      listChange (item) {
        item.active = !item.active
      },
      childCheck(index){
        for(let a in this.childList){
          if(index == 0){
            this.childList[a].checked = false
          }else{
            this.childList[a].checked = true
            try {
              this.authList[this.childIndex].list[this.secondKey].checked = true
            }catch (e){

            }

          }
        }
        //  刷新视图
        this.domReset += 1
      },
      // 单个权限全选
      allCheck (index, type) {
        let listArr = this.authList[index].list
        for (let k in listArr) {
          if (type == 1) {
            listArr[k].checked = true
          } else {
            listArr[k].checked = false
          }
          for(let z in listArr[k].list){
            if (type == 1) {
              listArr[k].list[z].checked = true
            } else {
              listArr[k].list[z].checked = false
            }
          }
        }
      },
      // 回到顶部
      scrollHead () {
        window.scroll(0, 0)
        this.$refs.authBox.scrollTop = 0;
      },
      // 返回选中的权限对象
      getSelectList () {
        console.log(this.authList)
        let list = []
        let parentList = []
        for (let k in this.authList) {
          let lastArr = this.authList[k].list
          let arr = this.authList[k].list.filter(res => res.checked).map(res => res.id)
          console.log(arr)
          if (arr.length > 0) {
            parentList.push(this.authList[k].id)
            list.push(arr)
          }
          for(let z in lastArr){
            let abArr = lastArr[z].list.filter(res => res.checked).map(res => res.id)
            if (abArr.length > 0) {
              parentList.push(this.authList[k].id)
              list.push(abArr)
            }
          }
        }
        let temp = [].concat.apply([],list)
        let listAll = temp.concat(parentList)
        console.log(listAll.join(','))
        return listAll.join(',')
      },
      // 确定
      authCommit () {
        let list = this.getSelectList()
        if (!this.authName){
          this.$message(this.$L.t('manager.info87'))
          return false
        }
        // this.authType 如果有值则是修改  否则是添加
        if (this.authType) {
          this.$emit('commit', list, this.authName, 0)
        } else {
          this.$emit('commit', list, this.authName, 1)
        }
      },
      // 返回
      authBack () {
        this.$emit('confirmShow')
      }
    }
  }
</script>


  <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style lang="less" scoped>
 *{
  box-sizing: border-box;
 }
.header_btn{
  padding: 2px 5px;
  font-size: 12px;
  line-height: 18px;
}
.auth_set{
  position: relative;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #0299FF;
  border-left: 1px solid #0299FF;
  border-right: 1px solid #0299FF;
  line-height: 30px;
  font-size: 14px;
  font-weight: bold;
  color: black;
  background: #EDEDED;
  padding: 5px;
  button{
    height: 24px;
    line-height: 24px;
    padding: 0px 10px;
    margin-left: 10px;
  }
  .commit_btn{
    position: absolute;
    top: 5px;
    right: 50px;
    height: 30px;
    line-height: 30px;
    padding:0 15px;
  }
}
.auth_content{
  .auth_tips{
    line-height: 40px;
    color:#FE040D;
    padding: 0 5px;
    font-size: 16px;
  }
  background: #F2F2F2;
  margin: 0px auto 0 5px;
  border-collapse: collapse;
  width: 99%;
  min-width: 780px;
  border: 1px solid #cccccc;
  ul{
    margin: 5px;
    li{
      border-top:1px solid #333;
      padding: 10px 0;
      .auth_title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:first-child{
          font-weight: bold;
          color: black;
          background: #EDEDED;
          font-size:20px;
          padding:10px 0;
        }
        div{
          /* padding-right: 50px; */
          span{
            margin-right: 50px;
            color: red;
            font-weight: bold;
            font-size: 14px;
            cursor: pointer;
          }
        }
        button{
          margin-left: 10px;
          width: 22px;
          height: 22px;
          line-height: 22px;
          padding: 0;
          margin-bottom: 2px;
        }
      }
      .auth_in{
        margin: 0 30px;
        display: flex;
        flex-wrap: wrap;
        div{
          min-width: 180px;
          background:#F9F9F9;
          height: 40px;
          line-height: 40px;
          padding: 0 10px;
          border:1px solid #D1D1D1;
          margin-left:10px;
          margin-bottom:10px;
          overflow: hidden;
          label{
            // display: inline-block;
            width: 110px;
            height: 100%;
            input{
               float: left;
               margin-top: 15px;
               margin-right: 3px;
            }
            span{
              width: 110px;
              display: block;
              float: left;
              overflow:hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              -o-text-overflow:ellipsis;
            }
          }
        }
      }
      .third-child {
        margin: 10px 40px;
        padding:8px;
        border-top: 1px dashed #0169CD;
        font-size:13px;
        .third-child-title {
          height: 40px;
          line-height: 40px;
          color:#333;
          font-size: 16px;
          display: flex;
          margin-bottom:10px;
          > div{
            width: 33%;
          }
          .third-child-all-select {
            text-align: right;
            span {
              display: inline-block;
              margin-left: 35px;
              cursor: pointer;
            }
          }
          span {
            color:#0169CD;
          }
          &:nth-child(2){
            span {
              margin-right: 50px;
              color: #0169CD;
              font-weight: bold;
              font-size: 14px;
              cursor: pointer;
            }
          }
        }
        .third-child-all{
          display: flex;
          flex-wrap: wrap;
           div{
             min-width: 200px;
             background:#F9F9F9;
             height: 36px;
             line-height: 36px;
             padding: 0 10px;
             border:1px solid #D1D1D1;
             margin-left:10px;
             margin-bottom:10px;
             overflow: hidden;
             label{
               display: inline-block;
               width: 100%;
               height: 100%;
               color:#0169CD;
             }
           }
        }

      }
    }
  }
}
// 回到顶部
.fixed_main{
  position: fixed;
  width: 50px;
  height: 50px;
  right: 40px;
  top: 50%;
  background: red;
  border-radius: 50%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  cursor: pointer;
}
.container{
  overflow-y: auto;
  // padding: 0
  background: #fff;
}
.auth_name{
  width: 100%;
  padding: 10px;
  font-size: 15px;
  input{
    width: 200px;
    padding-left: 5px;
    margin-left: 5px;
    height: 30px;
  }
}
</style>
