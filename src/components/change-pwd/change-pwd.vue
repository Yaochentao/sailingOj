<template>
    <div class="sign-up" :style="{height:(screenHeight-60)+'px'}">
        <div class="center-container" :style="{top:(screenHeight-60)/2-220+'px'}">
            <div class="sign-header">
                <div class="sign-title">
                    <span class="title-left">找回密码</span>
                    <span class="title-right">FIND CODE</span>
                </div>
                <router-link to="/sign-up"><p class="forget-btn">我想起来了，去登陆></p></router-link>
            </div>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" style="margin-left: 34px;">
                <el-form-item class="form-item" label='验证手机' prop="id">
                    <el-input style="width: 70%;" v-model="ruleForm.id"></el-input>
                </el-form-item>
                <el-form-item class="form-item" label="重置密码" prop="password">
                    <el-input style="width: 70%;" v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item class="form-item" label="确认密码" prop="password">
                    <el-input style="width: 70%;" v-model="ruleForm.password"></el-input>
                </el-form-item>
                <!-- <el-form-item class="form-item" label="验证码" prop="password">
                    <el-input style="width: 30%; display: inline-block;vertical-align: top;" v-model="ruleForm.password"></el-input>
                    <div class="identifyCode" @click="refreshCode" style="display: inline-block;margin-left: 20px">
                        <s-identify :identifyCode="identifyCode"></s-identify>
                    </div>
                </el-form-item> -->
                <el-form-item class="form-item" label="验证码" prop="password">
                    <el-input style="width: 30%; display: inline-block;vertical-align: top;" v-model="ruleForm.password"></el-input>
                    <div style="display: inline-block;margin-left: 20px">
                        <el-button type="primary">发送验证码</el-button>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button style="float:right;margin-right: 140px" type="primary">确认</el-button>
                </el-form-item>
            </el-form>

            <div class="sign-wrapper"></div>
        </div>
        <vue-particles class="particles-con" color="#fff" :particleOpacity="0.7" :particlesNumber="120" shapeType="circle" :particleSize="4"
            linesColor="#fff" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="2"
            :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
        </vue-particles>
    </div>
</template>
<script>
    import SIdentify from '../identify/identify'
    export default {
        data() {
            return {
                screenHeight: document.documentElement.clientHeight, // 屏幕高度
                code: '',



                ruleForm: {
                    id: '',
                    password: ''
                },
                rules: {
                    id: [{
                            // required: true,  //设置必填  必填的话lable前会出现星号
                            message: '请输入注册手机号',
                            trigger: 'blur'
                        },
                        {
                            min: 11,
                            max: 11,
                            message: '请正确输入11位手机号',
                            trigger: 'blur'
                        }
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
                }

        },
        methods: {
            getVcode() {
                console.log('code')
                this.$http.post('http://47.102.159.98/php/login/check-vcode.php', qs.stringify({
                        user_id: 13372416908
                    }))
                    .then((res) => {
                        this.code = res.data.vcode
                    })
            },
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
        color: #000;
    }
</style>