<template>
  <div class="container">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td>
          {{$L.t('lottery.zh26')}}
        </td>
      </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
      <tr class="head">
        <!-- <td>ID</td> -->
        <td>{{$L.t('lottery.zh28')}}</td>
        <td>{{$L.t('table.handle')}}</td>
      </tr>
      <tr class="odd" v-for="i in lotteryStore.lotteryRuleList.data">
        <!-- <td>{{i.id}}</td> -->
        <td>{{i.title}}</td>
        <td><button v-on:click="openGuize(i.id)">{{$L.t('fixed')}}</button></td>
      </tr>
      </tbody>
    </table>
    <!-- 修改 -->
    <el-dialog
      :title="$L.t('lottery.zh27')"
      :visible.sync="editInfoVisible"
      width="700px">
      <div v-if="editInfoVisible" class="form_container">
        <ul>
          <li>
            <div class="formLi_title">
              {{$L.t('lottery.zh28')}}
            </div>
            <div class="formLi_content">
              <input type="text" :placeholder="$L.t('annoucement.tcgg_1.importTitle')" v-model="setGuize.title">
            </div>
          </li>
          <li>
            <div class="formLi_content" style="width: 100%;" >
              <!--<textarea rows="10" cols="70" name="content" id="content"  placeholder="请输入内容" v-model="setGuize.content"></textarea>-->
              <el-upload
                class="avatar-uploader"
                id="quill-czgz-upload"
                name="img"
                action=""
                :auto-upload='false'
                accept="image/jpeg, image/png"
                :show-file-list="false"
                :on-change="uploadSuccess">
              </el-upload>
              <quill-editor ref="myTextEditor"
                            :content="setGuize.content"
                            :options = "editorOption"
                            @change="onEditorChange($event)">
              </quill-editor>
            </div>
          </li>
          <li>
            <button class="form_commit" v-on:click="editGuize">{{$L.t('submit')}}</button>
          </li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  import 'quill/dist/quill.bubble.css';
  import {toolbarOptions,languageId} from '@/common/common'
  import { quillEditor } from 'vue-quill-editor'
  export default {
    data () {
      return {
        editInfoVisible:false,
        setGuize:{
          id:'',
          title:'',
          content:'',
        },
        editorOption: {
          placeholder: this.$L.t('agent.agent_5.alert18'),
          theme: 'snow',  // or 'bubble'
          modules: {
            toolbar: {
              container: toolbarOptions,  // 工具栏
              handlers: {
                'image': function (value) {
                  if (value) {
                    document.querySelector('#quill-czgz-upload input').click()
                  } else {
                    this.quill.format('image', false);
                  }
                }
              }
            }
          }
        },
        diyUpdataImg:'',  // 富文本编辑，图片模板
      }
    },
    created (){
      this.getLotteryRule()
    },
    mounted(){

    },
    components: {
      quillEditor
    },
    methods: {
      ...mapMutations([

      ]),

      ...mapActions([
        "getLotteryRule",
        "getLotteryRuleInfo",
        "updateLotteryRule",
        "addQcode"
      ]),
      uploadSuccess(file, fileList){
        this.diyUpdataImg = file.raw
        var da = new FormData()
        let code = languageId(localStorage.getItem('languageId') || 'en')
        da.append('language',code)
        da.append('file',this.diyUpdataImg)
        da.append('typeid','13')
        this.addQcode(da).then(res=>{
          let imgInfo = res.data.data
          let quill = this.$refs.myTextEditor.quill
          // 获取光标所在位置
          let length = quill.getSelection().index;
          // 插入图片  res.info为服务器返回的图片地址
          setTimeout(()=>{
            quill.insertEmbed(length, 'image', imgInfo)
            quill.setSelection(length + 1)
          },2000)
          // 调整光标到最后

        })

      },
      onEditorChange({ editor, html, text }) {
        this.setGuize.content = html
      },
      openGuize(id){
        this.getLotteryRuleInfo({id:id}).then((res)=>{
            this.setGuize.id = res.data.id
          this.setGuize.title = res.data.title
          this.setGuize.content = res.data.content
          this.editInfoVisible = true
        })
      },
      editGuize(){
        this.updateLotteryRule(this.setGuize).then(()=>{
          this.editInfoVisible = false
        })
      }
    },
    computed: {
      ...mapState([
        "lotteryStore",
      ]),
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
  .head_select {
    height: 28px;
  }
  .set_level_modal {
    padding: 10px;
    height: 600px;
  }
  .set_level_modal >div {
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    margin-top: 10px;
  }
  .set_level_modal >div input,select {
    padding: 0 5px;
    height: 28px;
  }
  .set_level_modal >div span {
    display: inline-block;
    width: 170px;
  }
  .set_level_modal >div button {
    margin-left: 170px;
  }
  .form_container{
    height: 700px;
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
    width: 600px;
    margin-right: 20px;
  .quill-editor{
  .ql-container{
    height: 300px;
  }
  }
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
</style>
