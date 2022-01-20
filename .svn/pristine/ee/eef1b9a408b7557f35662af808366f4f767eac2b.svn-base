<template>
  <div class="container agentEx">
    <table class="table clearfloat" id="search">
      <tbody>
      <tr class="nav">
        <td colspan="2">{{$L.t('agent.agent_5.alert15')}}</td>
      </tr>
      </tbody>
    </table>
    <table class="table">
      <tbody>
      <tr class="head">
        <td colspan="2">{{$L.t('agent.agent_5.alert16')}}</td>
      </tr>
      <tr>
        <td align="left">
          {{$L.t('agent.agent_5.alert17')}}
        </td>
        <td align="left">
          <div class="formLi_content-quill">
            <el-upload
              class="avatar-uploader"
              id="agent-quill-upload"
              name="img"
              action=""
              :auto-upload='false'
              accept="image/jpeg, image/png"
              :show-file-list="false"
              :on-change="uploadSuccess">
            </el-upload>
            <quill-editor ref="myTextEditor"
                          :content="agentObj.content"
                          :options = "editorOption"
                          @change="onEditorChange($event)">
            </quill-editor>

          </div>
        </td>
      </tr>
      <tr class="end" v-if="btnState">
        <td colspan="2" align="left">
          <button @click="saveSetting" style="margin-left: 30%;">{{$L.t('saveChange')}}</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  import {mapState, mapMutations, mapActions} from 'vuex';
  import {toolbarOptions,languageId} from '@/common/common'
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  import 'quill/dist/quill.bubble.css';
  import { quillEditor } from 'vue-quill-editor'
  export default {
    data () {
      return {
        agentObj:{
          content:'',
          id:'',
        },
        btnState:true,
        editorOption: {
          placeholder: this.$L.t('agent.agent_5.alert18'),
          theme: 'snow',  // or 'bubble'
          modules: {
            toolbar: {
              container: toolbarOptions,  // 工具栏
              handlers: {
                'image': function (value) {
                  if (value) {
                    document.querySelector('#agent-quill-upload input').click()
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
      this.getAgentExplain().then((res) =>{
        if(res.code == 0){
          this.agentObj.content = res.data.content
          this.agentObj.id = res.data.id
          this.btnState = true
        }

      })
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
        "addQcode",
        "getAgentExplain",
        "setAgentExplain"
      ]),
      //富文本编辑器  文本改变时 设置字段值
      onEditorChange({ editor, html, text }) {
        this.agentObj.content = html
      },
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
      saveSetting(){
        this.setAgentExplain(this.agentObj)
      },

    },
    computed: {
      ...mapState([
        "indexStore",
      ]),
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  textarea {
    min-height: 100px;
    height: auto;
    line-height: 20px;
    padding: 6px 10px;
    resize: vertical;
    border-width: 1px;
    border-style: solid;
    background-color: #fff;
    border-radius: 2px;
    color: #666;
    border-color: #e6e6e6;
    margin: 5px;
  }

</style>
