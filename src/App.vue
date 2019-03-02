<template>
  <div id="app">

    <el-container>
      <el-header class="header" style="background: #2e302f; color: #2e7965;z-index: 1001;">
        <el-row>
          <el-col :span="4">
            <div class="nav-text">sailingOJ</div>
          </el-col>
          <el-col :span="4">
            <div>
              <span class="nav-text" @click="show = !show">题库</span>
              <el-collapse-transition>
                <div v-show="show">
                  <div class="transition-box">
                    <div class="nav-item" @click="toProblemList">题目列表</div>
                    <div class="nav-item">上传题目</div>
                    <div class="nav-item">提交记录</div>
                  </div>
                </div>
              </el-collapse-transition>
            </div>
          </el-col>
          <el-col :span="4">
            <div>
              <span class="nav-text" @click="show1 = !show1">直播</span>
              <el-collapse-transition>
                <div v-show="show1">
                  <div class="transition-box">
                    <div class="nav-item" @click="toLiveList">一对一辅导</div>
                    <div class="nav-item">一对多辅导</div>
                  </div>
                </div>
              </el-collapse-transition>
            </div>
          </el-col>
          <el-col :span="4">
            <div><span class="nav-text" v-on:click="toRank">排行榜</span></div>
          </el-col>
          <el-col :span="4">
            <div><span class="nav-text">论坛</span></div>
          </el-col>
          <el-col :span="4">
            <div class="sign-btn">
              <span @click="toSignUp" style='cursor: pointer;'>登录 </span>/
              <span @click="toSignIn" style='cursor: pointer;'> 注册</span>
              <!-- <span>失格丶</span> -->
            </div>
            <div style="display: inline-block; width: 66px">
              <span @click="show2 = !show2" class="avatars"></span>
              <el-collapse-transition>
                <div v-show="show2">
                  <div class="detail-btn">
                    <div class="nav-item" @click="toUser">个人信息</div>
                    <div class="nav-item">我的钱包</div>
                    <div class="nav-item">系统消息</div>
                    <div class="nav-item">能力评价</div>
                    <div class="nav-item">我的直播</div>
                    <div class="nav-item">做题记录</div>
                    <div class="nav-item">贡献题目</div>
                    <div class="nav-item">注销</div>
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
    <footer  style="background: #2e302f;height: 180px; position: relative">
      <div class="center-con" style="width: 960px; margin: 0 auto; position: relative;display: flex">
        <div class="footer-logo"><img src="./assets/img/logo.png" width="150" height="170"></div>
        <div class="qr">
          <img src="./assets/img/qr.jpg" width="103" height="103">
          <p style="text-align: center; font-size: 19px;color: #2e9d81;font-weight: bold">关 注 我 们</p>
        </div>
        <div class="foot-text">
          <a href="#">帮助中心</a>
          <a href="#">获取源代码</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        show: false,
        show1: false,
        show2: false
      }
    },
    created() {
      this.id = this.$route.query.id;
      console.log('app')
      console.log(this.id)
    },
    methods: {
      toRank() {
        this.$router.push("/rank")
      },
      toProblemList() {
        this.$router.push('/problem-list')
      },
      toSignUp() {
        this.$router.push('/sign-up')
      },
      toSignIn() {
        this.$router.push('/sign-in')
      },
      toLiveList () {
        this.$router.push('/live-list')
      },
      toUser () {
        this.$router.push('/user')
      }
      
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
    background-color: #fff;
    background-image: url(./assets/img/avatar.png);
    cursor: pointer;
  }
  .footer-logo {
    margin: 10px 0 0 10px;
    flex:1;
  }
  .qr {
    margin-top: 20px;
    flex:1;
    position: relative;
    text-align: center;
  }
  .qr img {
    
    display: inline-block;
    margin: 0 auto;
  }
  .foot-text {
    flex:1;
    text-align: center;
    margin-top: 20px;
  }
  .foot-text a{
    display: block;
    color: #fff;
  }

  
</style>