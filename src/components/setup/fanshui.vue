<template>
    <div class="container">
      <div>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <!-- 二维码 -->
            <el-tab-pane :label="$L.t('setup.info82')" name="first">
              <div class="code_content">
                <div class="formLi_title">{{$L.t('setup.info167')}}：</div>
                <div class="change_code">
                  <div class="formLi_img">
                    <el-upload
                      id="el-upload1"
                      class="avatar-uploader avatar-uploader_356x178
                      avatar-uploader_contain reception"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :on-change='formImageChange'
                      :auto-upload='false'
                      accept="image/jpeg, image/png"
                      :on-success="handleAvatarSuccess">
                      <img v-if="imageUrl" :src="imageUrl" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <!-- 首页轮播图 -->
            <el-tab-pane :label="$L.t('setup.info168')" name="second">
                <wheel_img v-if="secondcontent == 1"></wheel_img>
            </el-tab-pane>
            <!-- 对联 -->
            <el-tab-pane :label="$L.t('setup.info169')" name="third">
                <wheel_img0  v-if="thirdcontent == 2"></wheel_img0>
            </el-tab-pane>
          </el-tabs>
      </div>
  </div>
  </template>

  <script>

    import {mapState, mapMutations, mapActions} from 'vuex';
    import {getDate,setDate,copyobj,setSession,getSession,getchar,randomRange,languageId} from '@/common/common'

    export default {
      name: 'home',
      data () {
        return {
          activeName: 'first',
          imageUrl:'',
          secondcontent:'',
          thirdcontent:''
        }
      },
      mounted(){

      },
      created (){
        this.getQcodeList({typeid:23}).then(res=>{
          this.imageUrl = res.data[0].content
        })
      },
      methods: {
        ...mapMutations([

        ]),

        ...mapActions([
          "getQcodeList",
          "addQcode"
        ]),

        handleClick(tab, event) {
          if(tab.name == 'first'){
            this.getQcodeList({typeid:23}).then(res=>{
              this.imageUrl = res.data[0].content
            })
          }else if(tab.name == 'second'){
            this.secondcontent = 1
          }else{
              this.thirdcontent = 2
          }
        },
        // 上传图片
        handleAvatarSuccess (res, file) {
          this.imageUrl = URL.createObjectURL(file.raw)
        },
        formImageChange (file, fileList) {
          this.imageUrls = file.raw
          var da = new FormData()
          let code = languageId(localStorage.getItem('languageId') || 'en')
          da.append('language',code)
          da.append('file',this.imageUrls)
          da.append('typeid','23')
          this.addQcode(da).then(res=>{
            setTimeout(()=>{
                // this.getActivitiesList(this.sendParmas)
              this.getQcodeList({typeid:23}).then(res=>{
                this.imageUrl = res.data[0].content
              })
            },2000)
          })
        },
      },
      components:{

      },
      computed: {


        ...mapState([
          "setupStore",
        ]),

      }
    }
  </script>

  <style lang="less" scoped>
    .container{
      padding: 0 10px;
      .code_content{
        width: 300px;
        .formLi_title{
          font-size: 16px;
          padding-top: 10px;
          padding-bottom: 20px;
        }
        .change_code{
          border: 1px dashed #c0ccda;
          padding: 30px 0;
          margin-left: 20px;
          .formLi_img{
            margin: auto;
            background-color: #fbfdff;
            border-radius: 6px;
            box-sizing: border-box;
            width: 200px;
            height: 200px;
            cursor: pointer;
            line-height: 146px;
            vertical-align: top;
          }
        }
      }
    }
  </style>
