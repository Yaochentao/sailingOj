<template>
    <div class="ablility">
        <div class="details-header">
            <h3 class="details-title">我的直播</h3>
        </div>
        <div class="container">
            <el-form label-position="right" label-width="80px">
                <el-form-item label="直播地址">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="房间标题">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="推流地址">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="直播简介">
                    <el-input type="textarea" :rows="3"></el-input>
                </el-form-item>
                <el-form-item label="直播封面">
                    <img src="../../assets/img/live-img.jpg" width="400" height="200">
                </el-form-item>
                <el-form-item>
                    <el-button style="display: inline-block;float: right" type="primary" size="small">确认</el-button>
                </el-form-item>
                
            </el-form>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {

        },
        components: {}
    }
</script>
<style lang="css" scoped>
    .ability {
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

    .container {
        margin: 40px 10%;
    }
</style>