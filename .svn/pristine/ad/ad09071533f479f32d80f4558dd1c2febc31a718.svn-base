<template>
  <div class="container">
    <table class="table">
      <tbody>
        <tr class="head">
          <td colspan="2">{{$L.t('setup.info1')}}</td>
        </tr>
        <tr>
          <td>{{$L.t('setup.info2')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.webName"
              :placeholder="$L.t('setup.info2')"></el-input>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('setup.info3')}}</td>
          <td>
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
<i v-else class="el-icon-plus avatar-u
ploader-icon"></i>
              </el-upload>
            </div>
            <!-- <span class="chat_notice">图片规格：260X75，文件大小：300KB以内，上传后需清空缓存</span> -->
          </td>
        </tr>
        <tr>
          <td>{{$L.t('setup.info4')}}</td>
          <td class="support-logo">
            <div class="formLi_img">
              <el-upload
              id="el-upload1"
              class="avatar-uploader avatar-uploader_356x178
              avatar-uploader_contain reception"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-change='formImageSuppor'
              :auto-upload='false'
              accept="image/jpeg, image/png"
              :on-success="handleSuccessSuppor">
              <img v-if="imageSuppor" :src="imageSuppor" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            </div>
            <span class="chat_left-notice">{{$L.t('setup.info5')}}</span>
          </td>
        </tr>
        <!-- <tr>
          <td class="chat_set">平台开关</td>
          <td>
            <el-radio v-model="sendParmas.switchWeb" label="1">开启</el-radio>
            <el-radio v-model="sendParmas.switchWeb" label="0">关闭</el-radio>
          </td>
        </tr> -->
        <tr>
          <td>{{$L.t('setup.info6')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.beiAn"
              :placeholder="$L.t('setup.info6')"></el-input>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('member.info140')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.yuMing"
              :placeholder="$L.t('member.info140')"></el-input>
          </td>
        </tr>
        <tr>
          <td class="chat_set">{{$L.t('agent.agent_0.tjm')}}</td>
          <td>
            <div>
              <el-radio v-model="sendParmas.regCode" label="1">{{$L.t('open')}}</el-radio>
              <el-radio v-model="sendParmas.regCode" label="0">{{$L.t('close')}}</el-radio>
              <span class="chat_notice">{{$L.t('setup.info7')}}</span>
            </div>
            <div v-if="sendParmas.regCode*1 == 1">
              <el-radio v-model="sendParmas.codeRequired" label="1">{{$L.t('manager.info14')}}</el-radio>
              <el-radio v-model="sendParmas.codeRequired" label="0">{{$L.t('new.info6')}}</el-radio>
              <span class="chat_notice">{{$L.t('setup.info8')}}</span>
            </div>
          </td>
        </tr>
        <tr>
          <td class="chat_set">{{$L.t('member.info117')}}</td>
          <td>
            <el-radio v-model="sendParmas.coinPwd" label="1">{{$L.t('open')}}</el-radio>
            <el-radio v-model="sendParmas.coinPwd" label="0">{{$L.t('close')}}</el-radio>
            <span class="chat_notice">{{$L.t('setup.info9')}}</span>
          </td>
        </tr>

        <tr>
            <td class="chat_set">{{$L.t('setup.info10')}}</td>
            <td>
                <el-radio v-model="sendParmas.rechargeAfterBindingCard" label="1">{{$L.t('open')}}</el-radio>
                <el-radio v-model="sendParmas.rechargeAfterBindingCard" label="0">{{$L.t('close')}}</el-radio>
                <span class="chat_notice">{{$L.t('setup.info11')}}</span>
            </td>
        </tr>
        <!--<tr>-->
            <!--<td class="chat_set">注册登录开启验证码</td>-->
            <!--<td>-->
                <!--<el-radio v-model="sendParmas.verifySwitch" label="1">开启</el-radio>-->
                <!--<el-radio v-model="sendParmas.verifySwitch" label="0">关闭</el-radio>-->
                <!--<span class="chat_notice">开启后，注册必须填写验证码</span>-->
            <!--</td>-->
        <!--</tr>-->

        <tr>
          <td>{{$L.t('setup.info12')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.reglimit24"></el-input>
            <span class="chat_notice-in">{{$L.t('setup.info13')}}</span>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('setup.info14')}}</td>
          <td  class="banregist-ip">
            <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 4}"
                      :placeholder="$L.t('setup.info15')" v-model="sendParmas.banRegistIP"></el-input>
            <span class="chat-ipban-span">{{$L.t('setup.info16')}} "<b style="color:red;">{{$L.t('setup.info17')}}</b>"{{$L.t('setup.info18')}}
              {{$L.t('setup.info19')}}:<br><b style="color:red;">11.21.31</b><br>
                  <b style="color:red;">10.20.30.40</b><br>
                  <b style="color:red;">12.22.32.42</b>
            </span>
          </td>
        </tr>

        <!--<tr>-->
            <!--<td>登录次数限制</td>-->
            <!--<td  class="banregist-ip">-->
                <!--<el-input type="number" class="input-red" v-model="sendParmas.loginErrorLimitCount"></el-input>-->
                <!--<span class="chat-ipban-span">登录密码输入错误超过该次数后限制该IP登录，为0则关闭</span>-->
            <!--</td>-->
        <!--</tr>-->

        <tr>
          <td>{{$L.t('setup.info20')}}</td>
          <td  class="banregist-ip">
            <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 4}"
                      :placeholder="$L.t('setup.info15')" v-model="sendParmas.banVisitIP"></el-input>
            <span class="chat-ipban-span">{{$L.t('setup.info21')}} "<b style="color:red;">{{$L.t('setup.info17')}}</b>"{{$L.t('setup.info18')}}
              {{$L.t('setup.info19')}}:<br><b style="color:red;">11.21.31</b><br>
                  <b style="color:red;">10.20.30.40</b><br>
                  <b style="color:red;">12.22.32.42</b>
            </span>
          </td>
        </tr>

        <tr>
        <td>{{$L.t('setup.info22')}}</td>
        <td>
        <el-input class="input-red" v-model="sendParmas.loginErrorLimitCount"></el-input>
        <span class="chat_notice-in">{{$L.t('setup.info23')}}</span>
        </td>
        </tr>

        <tr>
            <td>{{$L.t('setup.info24')}}</td>
            <td  class="banregist-ip">
                <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 4}"
                          :placeholder="$L.t('setup.info15')" v-model="sendParmas.whileLoginIp"></el-input>
                <span class="chat-ipban-span">{{$L.t('setup.info25')}}</span>
            </td>
        </tr>

        <!--<tr>-->
          <!--<td>{{$L.t('setup.info26')}}</td>-->
          <!--<td>-->
            <!--<el-input type="number" class="input-red" v-model="sendParmas.kefuQQ"></el-input>-->
          <!--</td>-->
        <!--</tr>-->
        <!--<tr>-->
          <!--<td>{{$L.t('setup.info27')}}</td>-->
          <!--<td>-->
            <!--<el-input type="text" class="input-red" v-model="sendParmas.kefuWechat"></el-input>-->
          <!--</td>-->
        <!--</tr>-->
        <tr>
          <td>{{$L.t('setup.info28')}}</td>
          <td>
            <el-input type="text" class="input-red" v-model="sendParmas.kefuContent"></el-input>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('setup.info29')}}</td>
          <td>
            <el-input class="input-red" v-model="sendParmas.kefuGG"></el-input>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('setup.info30')}}</td>
          <td>
            <el-input class="input-red" type="number" v-model="sendParmas.SameName"></el-input>
            <span style="margin-left: 58px;">{{$L.t('setup.info31')}}</span>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('setup.info32')}}</td>
          <td>
            <el-input class="input-red" type="number" v-model="sendParmas.EditNameCount"></el-input>
            <span style="margin-left: 58px;">{{$L.t('setup.info33')}}</span>
          </td>
        </tr>
        <tr>
          <td class="chat_set">{{$L.t('setup.info34')}}</td>
          <td>
            <el-radio v-model="sendParmas.DisplayData" label="1">{{$L.t('open')}}</el-radio>
            <el-radio v-model="sendParmas.DisplayData" label="0">{{$L.t('close')}}</el-radio>
            <span class="chat_notice">{{$L.t('setup.info35')}}</span>
          </td>
        </tr>
        <tr>
          <td class="chat_set">{{$L.t('setup.info36')}}</td>
          <td>
            <el-radio v-model="sendParmas.siteLogined" label="1">{{$L.t('open')}}</el-radio>
            <el-radio v-model="sendParmas.siteLogined" label="0">{{$L.t('close')}}</el-radio>
            <span class="chat_notice">{{$L.t('setup.info37')}}</span>
          </td>
        </tr>
        <!--<tr>-->
          <!--<td class="chat_set">转账设置</td>-->
          <!--<td>-->
            <!--<el-radio v-model="sendParmas.rechargeText" label="1">需要</el-radio>-->
            <!--<el-radio v-model="sendParmas.rechargeText" label="0">不需要</el-radio>-->
            <!--<span style="margin-left:184px">设置用户手动转账是否需要填写昵称</span>-->
          <!--</td>-->
        <!--</tr>-->
        <tr>
          <td class="chat_set">{{$L.t('setup.info38')}}</td>
          <td>
            <el-radio v-model="sendParmas.msg_pop" label="0">{{$L.t('annoucement.swtz_4.nopop')}}</el-radio>
            <el-radio v-model="sendParmas.msg_pop" label="1">{{$L.t('annoucement.swtz_4.pop')}}</el-radio>
            <span class="chat_notice">{{$L.t('setup.info39')}}</span>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('setup.info40')}}</td>
          <td>
            <el-input class="input-red" type="text" v-model="sendParmas.userLevelMsg"></el-input>
            <span style="margin-left: 58px;">{{$L.t('setup.info41')}}</span>
          </td>
        </tr>
        <tr>
          <td class="chat_set">{{$L.t('setup.info42')}}</td>
          <td>
            <el-radio v-model="sendParmas.ChessSet" label="1">{{$L.t('open')}}</el-radio>
            <el-radio v-model="sendParmas.ChessSet" label="0">{{$L.t('close')}}</el-radio>
            <span class="chat_notice">{{$L.t('setup.info43')}}</span>
          </td>
        </tr>
        <tr>
          <td class="chat_set">{{$L.t('setup.info44')}}</td>
          <td>
            <el-radio v-model="sendParmas.AGset" label="1">{{$L.t('open')}}</el-radio>
            <el-radio v-model="sendParmas.AGset" label="0">{{$L.t('close')}}</el-radio>
            <span class="chat_notice">{{$L.t('setup.info45')}}</span>
          </td>
        </tr>
        <tr>
          <td class="chat_set">{{$L.t('setup.info46')}}</td>
          <td>
            <el-radio v-model="sendParmas.ElectronicsSet" label="1">{{$L.t('open')}}</el-radio>
            <el-radio v-model="sendParmas.ElectronicsSet" label="0">{{$L.t('close')}}</el-radio>
            <span class="chat_notice">{{$L.t('setup.info47')}}</span>
          </td>
        </tr>
        <tr>
          <td class="chat_set">{{$L.t('setup.info48')}}</td>
          <td>
            <el-radio v-model="sendParmas.SportSet" label="1">{{$L.t('open')}}</el-radio>
            <el-radio v-model="sendParmas.SportSet" label="0">{{$L.t('close')}}</el-radio>
          </td>
        </tr>
        <tr>
          <td class="chat_set">{{$L.t('setup.info49')}}</td>
          <td>
            <el-radio v-model="sendParmas.MatchSet" label="1">{{$L.t('open')}}</el-radio>
            <el-radio v-model="sendParmas.MatchSet" label="0">{{$L.t('close')}}</el-radio>
          </td>
        </tr>
        <tr>
            <td>{{$L.t('setup.info50')}}</td>
            <td>
              <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}"
                :placeholder="$L.t('annoucement.tcgg_1.importContent')" v-model="sendParmas.webCloseServiceResult"></el-input>
            </td>
          </tr>
        <tr>
          <td>{{$L.t('setup.info51')}}</td>
          <td>
            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}"
              :placeholder="$L.t('setup.info51')" v-model="sendParmas.statCode"></el-input>
          </td>
        </tr>
        <tr>
          <td>{{$L.t('setup.info52')}}</td>
          <td>
            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}"
              :placeholder="$L.t('setup.info53')" v-model="sendParmas.appDownLoadLink"></el-input>
          </td>
        </tr>

        <tr>
            <td>{{$L.t('setup.info54')}}</td>
            <td>
                <el-input
                        type="textarea"
                        :rows="2"
                        :placeholder="$L.t('chatRoom.zh33')"
                        v-model="sendParmas.nickname_forbidden_words">
                </el-input>
                <span class="chat_notice">{{$L.t('chatRoom.zh34')}}</span>
            </td>
        </tr>

        <tr class="end">
          <td colspan="2">
            <input type="button" class="commit_btn" :value="$L.t('sure')"
              @click="commitClick()">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

    import {mapState, mapMutations, mapActions} from 'vuex';
    import {getDate,setDate,copyobj,setSession,getSession,getchar,randomRange,getLocalTime,languageId} from '@/common/common'
    export default {
      data () {
        return {
          sendParmas:{
            webName:'',
            loginErrorLimitCount:'',
            rechargeAfterBindingCard:'0',
            siteLogo:'',
            // switchWeb:'',
            webCloseServiceResult:'',
            beiAn:'',
            yuMing:'',
            regCode:'',
            coinPwd:'',
            // verifySwitch:'0',
            reglimit24:'',
            banRegistIP:'',
            banVisitIP:'',
            codeRequired:'',
            siteLogined:'',
            // rechargeText:'',
            msg_pop:'',
            statCode:'',
            appDownLoadLink:'',
            // kefuQQ:'',
            // kefuWechat: '',
            kefuContent:'',
            kefuGG:'',
            ChessSet:'',
            AGset:'',
            ElectronicsSet:'',
            SameName:'',
            EditNameCount:'',
            SportSet:'',
            MatchSet:'0',
            DisplayData:'',
            userLevelMsg:'',
            supportLogo:'',
            whileLoginIp:'',
            nickname_forbidden_words:""
          },
          imageUrl:'',
          imageSuppor:''
        }
      },
      created (){
        this.getWebSetUp().then(res=>{
          for (let k in this.sendParmas) {
            if(res.data[k] == 'undefined'){
              res.data[k] = ''
            }
            try {
              this.sendParmas[k] = res.data[k]

            }catch (e){}
          }
          this.imageUrl = res.data.siteLogo
          this.imageSuppor = res.data.supportLogo
          if(!res.data.MatchSet){
            this.sendParmas.MatchSet = '0'
          }
        })
      },
      methods: {
        ...mapMutations([

        ]),
        ...mapActions([
          'getWebSetUp',
          'updateWebSetUp'
        ]),
        // 确定提交
        commitClick () {
          let d = new FormData()
            let code = languageId(localStorage.getItem('languageId') || 'en')
            d.append('language',code)
          for(let k in this.sendParmas){
            if(k != 'siteLogo' && k != 'supportLogo'){
              d.append(k,this.sendParmas[k])
            }
          }
          if(typeof(this.sendParmas.siteLogo) == 'object'){
            d.append('siteLogo', this.sendParmas.siteLogo)
          }
          if(typeof(this.sendParmas.supportLogo) == 'object'){
            d.append('supportLogo', this.sendParmas.supportLogo)
          }
          let language = languageId(localStorage.getItem('languageId') || 'en')
           d.append('language',language)
            this.updateWebSetUp(d).then(res=>{
            this.getWebSetUp().then(res=>{
              for (let k in this.sendParmas) {
                this.sendParmas[k] = res.data[k]
              }
            })
          })
        },
        // 上传图片
        handleAvatarSuccess (res, file) {
          this.imageUrl = URL.createObjectURL(file.raw)
        },
        formImageChange (file, fileList) {
          this.imageUrl = URL.createObjectURL(file.raw)
          this.sendParmas.siteLogo = file.raw
        },

        // 上传技术支持logo
        handleSuccessSuppor (res, file) {
          this.imageSuppor = URL.createObjectURL(file.raw)
        },
        formImageSuppor (file, fileList) {
          this.imageSuppor = URL.createObjectURL(file.raw)
          this.sendParmas.supportLogo = file.raw
        },
      },
      components:{

      },
      computed: {
        ...mapState([
        "setupStore"
        ]),
      }
    }
  </script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
    .chat-ipban-span {
      display: inline-block;
      width: 45%;
      height: 50px;
    }
    .chat_set{
      width: 200px;
    }
    .input-red{
      width: 280px;
    }
    .input-red-link{
      width: 900px;
    }
    .chat_notice{
      margin-left: 200px;
    }
    .chat_notice-in{
      margin-left: 58px;
    }
    .chat_notice-time{
      margin-left: 30px;
    }
    .chat_left-notice{
      margin-left: 58px;
      color: red;
    }
    .formLi_img{
      background-color: #fbfdff;
      border-radius: 6px;
      box-sizing: border-box;
      width: 200px;
      height: 100px;
      cursor: pointer;
      line-height: 146px;
      vertical-align: top;
    }
    .support-logo{
      display: flex;
      align-items: center;
    }
  </style>
