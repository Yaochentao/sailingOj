<template>
    <div class="details">
        <div class="details-header">
            <h3 class="details-title">个人信息</h3>
            <el-button style="display: inline-block" type="primary" size="mini">编辑</el-button>
            <el-button style="display: inline-block" type="primary" size="mini">修改密码</el-button>
        </div>
        <div class="info-con">
            <div class="input-con">
                <span class="input-label">昵称</span>
                <el-input style="width: 50%" placeholder="失格丶" :disabled="true">
                </el-input>
            </div>
            <div class="input-con">
                <span class="input-label">手机</span>
                <span>123456324</span>
                
            </div>
            <div class="input-con">
                <span class="input-label">邮箱</span>
                <el-input style="width: 50%" placeholder="123@qq.com" :disabled="true">
                </el-input>
            </div>
            <div class="input-con">
                <span class="input-label">地区</span>
                <el-input style="width: 50%" placeholder="浙江 杭州" :disabled="true">
                </el-input>
            </div>
            <div class="input-con">
                <span class="input-label">职业</span>
                <el-input style="width: 50%" placeholder="学生" :disabled="true">
                </el-input>
            </div>
            <div class="input-con">
                <span class="input-label">性别</span>
                <el-input style="width: 50%" placeholder="男" :disabled="true">
                </el-input>
            </div>
            <div class="input-con">
                <span class="input-label">积分</span>
                <span>213213</span>
            </div>
            <div class="input-con">
                <span class="input-label">余额</span>
                <span style="margin-right: 20px;">2132</span>
                <el-button style="display: inline-block" type="danger" size="mini">充值</el-button>
                <el-button style="display: inline-block" type="danger" size="mini">提现</el-button>
            </div>

        </div>
    </div>
</template>
<script>
    export default {

    }
</script>

<style scoped>
    .details {
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
        margin-right: 20px;
        color: #8d8d8d;
        font-size: 14px;
    }
</style>