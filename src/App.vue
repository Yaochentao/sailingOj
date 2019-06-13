<template>
  <div id="app">

    <el-container>
      <el-header class="header" style="background: #2e302f; color: #fff;z-index: 1001;">
        <el-row>
          <el-col :span="4">
            <img src="./assets/img/h-logo.png" height="60" width="100" style="cursor: pointer;display:block;width:100px;margin: 0 auto;"
              class="h-logo" @click="toHome">
          </el-col>
          <el-col :span="4">
            <div @mouseover="show = true" @mouseout="show = false">
              <span class="nav-text" @click="toProblemList">题库</span>
              <el-collapse-transition>
                <div v-show="show">
                  <div class="transition-box">
                    <div class="nav-item" @click="toProblemList">题目列表</div>
                    <div class="nav-item" @click="toUpload">上传题目</div>
                    <!-- <div class="nav-item" @click="toSubmitHistory">提交记录</div> -->
                  </div>
                </div>
              </el-collapse-transition>
            </div>
          </el-col>
          <el-col :span="4">
            <div @mouseover="show1 = true" @mouseout="show1 = false">
              <span class="nav-text" @click="toLiveList">在线辅导</span>
              <!-- <el-collapse-transition>
                <div v-show="show1">
                  <div class="transition-box">
                    <div class="nav-item" @click="toLiveList">一对一辅导</div>
                    <div class="nav-item">一对多辅导</div>
                  </div>
                </div>
              </el-collapse-transition> -->
            </div>
          </el-col>
          <el-col :span="4">
            <div><span class="nav-text" v-on:click="toRank">排行榜</span></div>
          </el-col>
          <el-col :span="4">
            <a href="http://118.25.176.42/index.php"><span class="nav-text">论坛</span></a>
          </el-col>
          <el-col :span="4">
            <div class="sign-btn">
              <span v-show="!user_id" @click="toSignUp" style='cursor: pointer;'>登录 / </span>
              <span v-show="!user_id" @click="toSignIn" style='cursor: pointer;'> 注册</span>
              <span v-show="user_id">{{nick}}</span>
            </div>
            <div v-show="user_id" @mouseover="show2 = true" @mouseout="show2 = false" style="display: inline-block; width: 66px">
              <img @click="toUser" class="avatars" :src="photo"/>
              <el-collapse-transition>
                <div v-show="show2">
                  <div class="detail-btn">
                    <div class="nav-item" @click="toUser">个人信息</div>
                    <div class="nav-item" @click="toOrders">我的钱包</div>
                    <div class="nav-item" @click="toNotice">系统消息</div>
                    <div class="nav-item" @click="toAbility">能力评价</div>
                    <div class="nav-item" @click="toMyLive">我的直播</div>
                    <div class="nav-item" @click="toSubmitHistory">做题记录</div>
                    <div class="nav-item" @click="toUpload">贡献题目</div>
                    <div class="nav-item" @click="toCollection">我的收藏</div>
                    <div class="nav-item" @click="toAdmin" v-if="this.group == 1">管理</div>
                    <div class="nav-item" @click="logout">注销</div>
                  </div>
                </div>
              </el-collapse-transition>
            </div>

          </el-col>
        </el-row>
      </el-header>
      <div style="padding: 0;margin-top: 60px; position: relative">
        <router-view />
      </div>
      <!-- <el-footer  style="background: #2e302f;height: 180px; position: relative">
        <img src="./assets/img/logo.png" width="150" height="170" class="footer-logo">
        <div class="qr">
          <img src="./assets/img/qr.jpg" width="103" height="103">
          <p style="text-align: center; font-size: 19px;color: #2e9d81;font-weight: bold">关 注 我 们</p>
        </div>
        <div class="foot-text">
          <a href="#">帮助中心</a>
          <a href="#">获取源代码</a>
        </div>
      </el-footer> -->
      <!-- <div class="test" style="height: 1000px"></div> -->
    </el-container>
    <footer style="background: #2e302f;height: 180px; position: relative">
      <div class="center-con" style="width: 960px; margin: 0 auto; position: relative;display: flex">
        <div class="footer-logo"><img src="./assets/img/f-logo.png" width="150" height="140"></div>
        <div class="qr">
          <img src="./assets/img/qrcode.jpg" width="103" height="103">
          <p style="text-align: center; font-size: 19px;color: #2e9d81;font-weight: bold">关 注 我 们</p>
        </div>
        <div class="foot-text">
          <a href="https://github.com/Yaochentao/sailingOj">获取源代码</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs'
  export default {
    data() {
      return {
        show: false,
        show1: false,
        show2: false,
        test: '',

      }
    },
    created() {



      console.log(this.$store.state.user_id)

      // axios.get('http://116.62.124.130:3000/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA')
      // .then((res)=> {
      //   console.log(res.data)
      // })
      // axios.post('http://118.25.176.42/php/problem/problem-content.php',qs.stringify({
      //   problem_id: 1030
      // }))
      // .then((res)=>{
      //   console.log(res.data.data.input)
      //   this.test = res.data.data.input
      // })
    },
    methods: {
      toUpload() {
        this.$router.push('/upload-problem')
      },
      toHome() {
        this.$router.push('/home')
      },
      toRank() {
        this.$router.push("/rank")
      },
      toProblemList() {
        this.$router.push('/problem-list')
        this.show = false;
        this.show1 = false;
        this.show2 = false;
      },
      toMyLive() {
        this.$router.push('/user/my-live')
        this.show = false;
        this.show1 = false;
        this.show2 = false;
      },
      toSignUp() {
        this.$router.push('/sign-up')
        this.show = false;
        this.show1 = false;
        this.show2 = false;
      },
      toSignIn() {
        this.$router.push('/sign-in')
        this.show = false;
        this.show1 = false;
        this.show2 = false;
      },
      toLiveList() {
        this.$router.push('/live-list')
        this.show = false;
        this.show1 = false;
        this.show2 = false;
      },
      toUser() {
        this.$router.push('/user')
        this.show = false;
        this.show1 = false;
        this.show2 = false;
      },
      toOrders() {
        this.$router.push('/user/orders')
        this.show = false;
        this.show1 = false;
        this.show2 = false;
      },
      toNotice() {
        this.$router.push('/user/notice')
        this.show = false;
        this.show1 = false;
        this.show2 = false;
      },
      toAbility() {
        this.$router.push('/user/ability')
        this.show = false;
        this.show1 = false;
        this.show2 = false;
      },
      toSubmitHistory() {
        this.$router.push('/user/submit-history')
        this.show = false;
        this.show1 = false;
        this.show2 = false;
      },
      toUploadHistory() {
        this.$router.push('/user/upload-history')
        this.show = false;
        this.show1 = false;
        this.show2 = false;
      },
      toCollection() {
        this.$router.push('/user/collection')
        this.show = false;
        this.show1 = false;
        this.show2 = false;
      },
      toAdmin() {
        this.$router.push('/admin')
      },
      logout() {
        this.$store.commit('upUser', '');
        this.$message('注销成功');
      }

    },
    computed: {
      user_id() {
        return this.$store.state.user_id;
      },
      group() {
        return this.$store.state.group
      },
      nick() {
        return this.$store.state.nick;
      },
      photo() {
        return 'http://47.102.159.98'+this.$store.state.photo;
        // return 'https://farm4.staticflickr.com/3931/15532327436_74c32632ac_k.jpg'
      }

    },
    watch: {
      
    }
  }
</script>


<style scoped>
  #app {
    background: #fff;
    min-height: 100%;
  }


  .header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }

  .nav-text {
    width: 100%;
    display: inline-block;
    line-height: 60px;
    height: 54px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    color: #fff;
  }

  .nav-item {
    font-size: 12px;
    line-height: 2;
    cursor: pointer;
  }

  .nav-item:hover {
    color: #fff;
    font-size: 13px;
  }

  .transition-box {
    width: 60%;
    margin-left: 20%;
    border-radius: 4px;
    background: #2e302f;
    text-align: center;
    color: #c6c8c7;
    box-sizing: border-box;

  }

  .detail-btn {
    width: 66px;
    border-radius: 4px;
    background: #2e302f;
    text-align: center;
    color: #c6c8c7;
    box-sizing: border-box;
  }

  .sign-btn {
    display: inline-block;
    margin-top: 10px;
    height: 40px;
    line-height: 40px;
    vertical-align: top;
  }

  .avatars {
    margin: 10px 0 0 10px;
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    /* background-color: #fff; */
    
    cursor: pointer;
  }

  .footer-logo {
    margin: 10px 0 0 10px;
    flex: 1;
  }

  .qr {
    margin-top: 20px;
    flex: 1;
    position: relative;
    text-align: center;
  }

  .qr img {

    display: inline-block;
    margin: 0 auto;
  }

  .foot-text {
    flex: 1;
    text-align: center;
    margin-top: 20px;
  }

  .foot-text a {
    display: block;
    color: #fff;
  }
</style>