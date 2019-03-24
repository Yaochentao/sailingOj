<template>
    <div class="details">
        <div class="details-header">
            <h3 class="details-title">个人信息</h3>
            <el-button style="display: inline-block" type="primary" size="mini" @click="edit" v-show="notdit">编辑</el-button>
            <el-button style="display: inline-block" type="primary" size="mini" @click="updata" v-show="!notdit">提交</el-button>
            <el-button style="display: inline-block" type="primary" size="mini">修改密码</el-button>
        </div>
        <div class="info-con">
            <div class="input-con">
                <span class="input-label">昵称</span>
                <el-input style="width: 50%" v-model="user.nick" :placeholder="user.nick" :disabled="notdit">
                </el-input>
            </div>
            <div class="input-con">
                <span class="input-label">手机</span>
                <span>{{user.user_id}}</span>

            </div>
            <div class="input-con">
                <span class="input-label">邮箱</span>
                <el-input style="width: 50%" v-model="user.email" :disabled="notdit">
                </el-input>
            </div>
            <div class="input-con">
                <span class="input-label">职业</span>
                <el-input style="width: 50%" v-model="user.career" :placeholder="user.career" :disabled="notdit">
                </el-input>
            </div>
            <div class="input-con">
                <span class="input-label">积分</span>
                <span>{{user.submit}}</span>
            </div>
            <div class="input-con">
                <span class="input-label">余额</span>
                <span style="margin-right: 20px;">{{user.money}}</span>
                <el-button style="display: inline-block" type="danger" size="mini" @click="chargeOpen">充值</el-button>
                <el-button style="display: inline-block" type="danger" size="mini" @click="depositOpen">提现</el-button>
            </div>

        </div>
        <el-card shadow="always" class="charge-con" v-show="chargeShow">
            <div class="card-header">
                <h3 class="card-title">充值</h3>
            </div>
            <div style="display: flex; height: 40px; margin-top: 10px;">
                <p class="input-label">充值账号</p><el-input size="small" v-model="chargeTel" style="width: 60%;" placeholder="请输入充值账号"></el-input>
            </div>
            <div style="margin-top: 10px;">
                <p class="img-label">收款码</p>
                <img class="qr-img" src="../../assets/img/qr.jpg">
                <img class="qr-img" src="../../assets/img/qr.jpg">
            </div>
            <div class="btn-con">
                <el-button style="display: inline-block" size="mini" type="primary" @click="charge">提交订单</el-button>
                <el-button style="display: inline-block" size="mini" @click="chargeClose">取消</el-button>
            </div>
        </el-card>
        <el-card shadow="always" class="deposit-con" v-show="depositShow">
            <div class="card-header">
                <h3 class="card-title">提现</h3>
            </div>
            <div style="display: flex; height: 40px; margin-top: 10px;">
                <p class="input-label">提现金额</p><el-input size="small" v-model="chargeTel" style="width: 60%;line-height: 40px;" placeholder="请输入支付宝账号"></el-input>
            </div>
            <div style="display: flex; height: 40px; margin-top: 10px;">
                <p class="input-label" style="margin-right: 10px">支付宝账号</p><el-input size="small" v-model="chargeTel" style="width: 60%;line-height: 40px;" placeholder="请输入支付宝账号"></el-input>
            </div>
            <div style="display: flex; height: 40px; margin-top: 10px;">
                <p class="input-label">微信账号</p><el-input size="small" v-model="chargeTel" style="width: 60%;line-height: 40px;" placeholder="请输入支付宝账号"></el-input>
            </div>
            <p>二者选填一项即可</p>
            <div class="btn-con">
                <el-button style="display: inline-block" size="mini" type="primary" @click="deposit">提交订单</el-button>
                <el-button style="display: inline-block" size="mini" @click="depositClose">取消</el-button>
            </div>
        </el-card>
    </div>
</template>
<script>
import qs from 'qs'
    export default {
        data() {
            return {
                user: {},
                chargeTel: '',
                chargeShow: false,
                depositShow: false,
                notdit: true
            }
        },
        created() {
            this.$http.post('http://47.102.159.98/php/personal/password-modify.php',qs.stringify({
                user_id: this.user_id
            }))
            .then((res) => {
                this.user = res.data.data[0];
            })
        },
        computed: {
            user_id() {
                return this.$store.state.user_id;
            },
        },
        methods: {
            chargeOpen() {
                this.chargeShow = true;
            },
            chargeClose() {
                this.chargeShow = false;
            },
            depositOpen() {
                this.depositShow = true;
            },
            depositClose() {
                this.depositShow = false;
            },
            edit() {
                this.notdit = false;
            },
            updata() {
                this.notdit = true;
                this.$http.post('http://47.102.159.98/php/personal/Personal-modify.php',qs.stringify({
                    user_id: this.user_id,
                    nick: this.user.nick,
                    career: this.user.career,
                    email: this.user.email
                }))
                .then((res) => {
                    console.log(res.data)
                })
            },
            charge() {
                 this.$http.post('http://47.102.159.98/php/personal/indent.php',qs.stringify({
                    user_id: this.user_id,
                    type: 0,
                }))
                .then((res) => {
                    console.log(res.data)
                })
            },
            deposit() {
                this.$http.post('http://47.102.159.98/php/personal/indent.php',qs.stringify({
                    user_id: this.user_id,
                    type: 1,
                    amount: 100,
                    wechat: '21321',
                    alipay: '213213'
                }))
                .then((res) => {
                    console.log(res.data)
                })
            }
        }
    }
</script>

<style scoped>
    .details {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .details-header {
        width: 60%;
        margin: 33px 0 23px 80px;
        padding-bottom: 10px;
        border-bottom: 2px solid #2e9d81;
    }

    .details-title {
        width: 60%;
        font-size: 20px;
        display: inline-block;
    }

    .info-con {
        margin-left: 80px;
    }

    .input-con {
        margin-top: 20px;
    }

    .input-label {
        margin-right: 23px;
        color: #8d8d8d;
        font-size: 14px;
    }
    .deposit-con {
        margin-left: -200px;
        margin-top: -150px;
        position: absolute;
        left: 50%;
        top: 50%;
        width: 400px;
        height: 300px;
    }
    .charge-con {
        margin-left: -200px;
        margin-top: -230px;
        position: absolute;
        left: 50%;
        top: 50%;
        width: 400px;
        height: 460px;
    }
    .card-header {
        border-bottom: 2px solid #2e9d81;
        padding-bottom: 10px;
        width: 60%;
    }
    .card-title {
        width: 60%;
        font-size: 20px;
        display: inline-block;
    }
    .input-label {
        text-align: center;
        line-height: 40px;
    }
    .img-label {
        margin-right: 20px;
        color: #8d8d8d;
        font-size: 14px;
    }
    .qr-img {
        margin: 20px 20px 0 0;
        display: inline-block;
        height: 120px;
        height: 120px;
    }
    .btn-con {
        position: absolute;
        bottom: 20px;
        right: 20px;
    }
</style>