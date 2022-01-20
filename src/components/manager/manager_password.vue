<template>
  <div class="container">
    <div class="notice" v-show="managerNotice">
      <ul>
        <li>{{$L.t('manager.info77')}}</li>
      </ul>
    </div>
      <table class="table small_table">
        <tbody>
          <tr class="head">
            <td colspan="2">
              <strong>{{$L.t('manager.info12')}}:</strong>
              <span class="name_color">{{indexStore.topInfoData.data.username}}</span>
            </td>
          </tr>
          <tr>
            <td class="first">{{$L.t('manager.info78')}}:</td>
            <td>
              <input v-model="formData.oldpwd" name="oldPassword" type="password" id="oldPassword">
              <font color="#FF0000">&nbsp;</font>
            </td>
          </tr>
          <tr>
            <td class="first">{{$L.t('manager.info24')}}:</td>
            <td>
              <input v-model="formData.newpwd" name="password" type="password" id="password">
            </td>
          </tr>
          <tr>
            <td class="first">{{$L.t('manager.info79')}}:</td>
            <td>
              <input v-model="formData.password" name="rePassword" type="password" id="rePassword">
            </td>
          </tr>
          <tr>
            <td class="end" colspan="2">
              <input @click="confirmRevision" type="button" :value="$L.t('submit')">
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>
<script>
    import {mapState, mapMutations, mapActions} from 'vuex';
    import {getDate,setDate,copyobj,setSession,getSession,getchar,randomRange} from '@/common/common'

    export default {
      name: 'home',
      data () {
        return {
          managerNotice:false,
          formData:{
            oldpwd:'',
            newpwd:'',
            password:''
          }
        }
      },
      mounted(){

      },
      created (){
        this.getTopInfo()
      },
      methods: {
        ...mapMutations([]),
        ...mapActions([
          "getTopInfo",
          "managerEditPassword"
        ]),
        // 确认修改
        confirmRevision(){
          if(!this.formData.oldpwd){
            this.$message.warning(this.$L.t('manager.info80'));
            return false
          }
          if(!this.formData.newpwd){
            this.$message.warning(this.$L.t('manager.info81'));
            return false
          }
          if(!this.formData.password){
            this.$message.warning(this.$L.t('manager.info82'));
            return false
          }
          if(this.formData.oldpwd == this.formData.newpwd){
            this.$message.warning(this.$L.t('manager.info83'));
            return false
          }
          if(this.formData.newpwd != this.formData.password){
            this.$message.warning(this.$L.t('manager.info84'));
            return false
          }
          this.managerEditPassword({
            oldpwd:this.formData.oldpwd,
            password:this.formData.password,
          }).then(res=>{
            for (let k in this.formData) {
              this.formData[k] = ''
            }
            this.managerNotice = true
          })
        }
      },
      computed: {
        ...mapState([
          "indexStore",
          "managerStore"
        ]),

      }
    }
  </script>
<style lang="css" scoped>
  .name_color{
    color: rgb(255, 0, 0);
  }
  </style>
