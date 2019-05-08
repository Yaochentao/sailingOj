<template>
    <div class="sign-up" :style="{height:(screenHeight-60)+'px'}">
        <div class="center-container" :style="{top:(screenHeight-60)/2-220+'px'}">
            <div class="sign-header">
                <div class="sign-title">
                    <span class="title-left">用户登录</span>
                    <span class="title-right">SIGN UP</span>
                </div>
                <p class="forget-btn" @click="toChangePwd">忘记密码，去找回></p>
            </div>
            <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="80px" style="margin-left: 34px;">
                <el-form-item class="form-item" label='账号' prop="id">
                    <el-input style="width: 70%;" v-model="ruleForm.id"></el-input>
                </el-form-item>
                <el-form-item class="form-item" label="密码" prop="password">
                    <el-input style="width: 70%;" v-model="ruleForm.password" placeholder="请输入密码" type="password"></el-input>
                </el-form-item>
                <el-form-item class="form-item" label="验证码" prop="code">
                    <el-input style="width: 30%; display: inline-block;vertical-align: top;" v-model="ruleForm.identifyCode"></el-input>
                    <div class="identifyCode" @click="refreshCode" style="display: inline-block;margin-left: 20px">
                        <s-identify :identifyCode="identifyCode"></s-identify>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                    <router-link style="margin-left: 20px" to="/sign-in"><el-button>去注册</el-button></router-link>
                </el-form-item>
            </el-form>

            <div class="sign-wrapper"></div>
        </div>
        <vue-particles class="particles-con" color="#fff" :particleOpacity="0.7" :particlesNumber="120" shapeType="circle"
            :particleSize="4" linesColor="#fff" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150"
            :moveSpeed="2" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
        </vue-particles>
    </div>
</template>
<script>
    import SIdentify from '../identify/identify'
    import qs from 'qs'
    export default {
        data() {
            
            return {
                input: '',
                screenHeight: document.documentElement.clientHeight, // 屏幕高度

                identifyCodes: "1234567890",
                identifyCode: "", //图片验证码



                ruleForm: {
                    id: '',
                    password: '',
                    identifyCode: ''
                },
                rules: {
                    id: [{
                            // required: true,  //设置必填  必填的话lable前会出现星号
                            message: '请输入注册手机号',
                            trigger: 'blur'
                        },
                        // {
                        //     min: 11,
                        //     max: 11,
                        //     message: '请正确输入11位手机号',
                        //     trigger: 'blur'
                        // }
                    ],
                    code: [{
                            // required: true,  //设置必填  必填的话lable前会出现星号
                            message: '请输入验证码',
                            trigger: 'blur'
                        },
                        // {
                        //     min: 4,
                        //     max: 4,
                        //     message: '请正确输入4位验证码',
                        //     trigger: 'blur'
                        // }
                    ],
                    password: [{
                        // required: true,
                        message: '请输入登录密码',
                        trigger: 'blur'
                    }],

                }
            }
        },
        mounted() {
            var _this = this
            window.onresize = function () { // 定义窗口大小变更通知事件
                    // _this.screenWidth = document.documentElement.clientWidth // 窗口宽度
                    _this.screenHeight = document.documentElement.clientHeight // 窗口高度
                },

                this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4); //初始化图片验证码

            
        },
        methods: {
            randomNum(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            },
            refreshCode() {
                this.identifyCode = "";
                this.makeCode(this.identifyCodes, 4);
            },
            makeCode(o, l) {
                for (let i = 0; i < l; i++) {
                    this.identifyCode += this.identifyCodes[
                        this.randomNum(0, this.identifyCodes.length)
                    ];
                }
                console.log(this.identifyCode);
            },
            toChangePwd() {
                this.$router.push('/change-pwd')
            },
            login() {
                if (this.ruleForm.identifyCode == this.identifyCode) {
                    console.log('codetrue')
                    this.$http.post('http://47.102.159.98/php/login/login.php', qs.stringify({
                        user_id: this.ruleForm.id,
                        password: this.ruleForm.password
                    }))
                    .then((res) => {
                        if(res.data.code == 1) {
                            this.$store.commit('upUser',res.data.data.user_id);
                            this.$store.commit('upNick',res.data.data.nick);
                            this.$store.commit('upPhoto',res.data.data.photo);
                            this.$message('登录成功');
                            this.$router.push('/home')
                        }
                        else {
                            this.$message('密码或账号错误');
                        }
                        
                    })
                } else {
                    this.$message('验证码错误');
                }

            }
        },
        components: {
            SIdentify
        }
    }
</script>

<style>
    .form-item .el-form-item__label {
        color: #000;
    }

    .sign-up {
        background-size: cover;
        background-repeat: repeat-y;
        background-image: url(../../assets/img/background.jpg);
        width: 100%;
        position: relative;

    }

    .particles-con {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

    }

    .center-container {
        padding: 34px 0;
        margin: 0 auto;
        position: relative;
        width: 560px;
        height: 440px;
        z-index: 100;
        border-radius: 10px;
    }

    .sign-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 560px;
        height: 440px;
        background: #fff;
        opacity: 0.3;
        z-index: -1;
        border-radius: 10px;
    }

    .sign-header {
        margin: 0 34px;
        position: relative;
        overflow: hidden;
    }

    .sign-title {

        height: 34px;
        font-size: 22px;
        line-height: 34px;
        border-bottom: 2px solid #41af94;
    }

    .title-left {
        font-weight: bold;
    }

    .title-right {
        font-weight: bold;
        color: #41af94;
        font-family: 'Courier New', Courier, monospace;
        font-size: 26px;
        float: right;
    }

    .forget-btn {
        height: 34px;
        line-height: 34px;
        font-size: 13px;
        float: right;
        cursor: pointer;
    }
</style>