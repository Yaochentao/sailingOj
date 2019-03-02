<template>
    <div class="home">
        <div class="container">
            <div class="banner">
                <el-carousel indicator-position="outside" height="324px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
                <div class="banner-contents">
                    <h3 class="banner-title">直播热度排行</h3>
                    <li class="banner-item">1.每天15分钟，21天带你写出一手漂亮好字</li>
                    <li class="banner-item">2.锤子科技/快如科技/快如科技2019.01.15发布会</li>
                    <li class="banner-item">1.每天15分钟，21天带你写出一手漂亮好字</li>
                    <li class="banner-item">2.锤子科技/快如科技/快如科技2019.01.15发布会</li>
                </div>
                <div class="banner-contents-swiper"></div>
            </div>
            <h2 class="title">题库最新热度</h2>
            <ul class="problem-list">
                <li class="problem-item">
                    <span class="problem-label">入门难度</span>
                    <h3 class="problem-title">1.超级玛丽游戏</h3>
                    <p class="problem-content">广州市车管所为每一辆入户的汽车都发放一块车牌，车牌的号码由六个字符组成...</p>
                </li>
                <li class="problem-item">
                    <span class="problem-label">入门难度</span>
                    <h3 class="problem-title">1.超级玛丽游戏</h3>
                    <p class="problem-content">广州市车管所为每一辆入户的汽车都发放一块车牌，车牌的号码由六个字符组成...</p>
                </li>
                <li class="problem-item">
                    <span class="problem-label">入门难度</span>
                    <h3 class="problem-title">1.超级玛丽游戏</h3>
                    <p class="problem-content">广州市车管所为每一辆入户的汽车都发放一块车牌，车牌的号码由六个字符组成...</p>
                </li>
                <li class="problem-item">
                    <span class="problem-label">入门难度</span>
                    <h3 class="problem-title">1.超级玛丽游戏</h3>
                    <p class="problem-content">广州市车管所为每一辆入户的汽车都发放一块车牌，车牌的号码由六个字符组成...</p>
                </li>
                <li class="problem-item">
                    <span class="problem-label">入门难度</span>
                    <h3 class="problem-title">1.超级玛丽游戏</h3>
                    <p class="problem-content">广州市车管所为每一辆入户的汽车都发放一块车牌，车牌的号码由六个字符组成...</p>
                </li>
                <li class="problem-item">
                    <span class="problem-label">入门难度</span>
                    <h3 class="problem-title">1.超级玛丽游戏</h3>
                    <p class="problem-content">广州市车管所为每一辆入户的汽车都发放一块车牌，车牌的号码由六个字符组成...</p>
                </li>
                <li class="problem-item">
                    <span class="problem-label">入门难度</span>
                    <h3 class="problem-title">1.超级玛丽游戏</h3>
                    <p class="problem-content">广州市车管所为每一辆入户的汽车都发放一块车牌，车牌的号码由六个字符组成...</p>
                </li>
            </ul>

            <div class="slide-con">
                <div class="slide-left">
                    <div class="data-con" style="padding: 10px;">
                        <div style="display: flex; width: 100%">
                            <div style="width: 180px">
                                <h3 style="font-size: 26px; color: #2e9d81">Hi , <i style="font-size: 18px; color: #cdd1cc">失格丶</i></h3>
                                <p style="font-size: 13px;color: #cdd1cc">打卡记录你的进步</p>
                                <span class="register-btn">点击打卡</span>
                            </div>
                            <div style="flex: 1;display: flex">
                                <div class="month">一月</div>
                                <div class="data">
                                    <p class="day">31</p>
                                    <p class="week">Thursday</p>
                                </div>
                            </div>
                        </div>
                        <div class="saying-con">
                            <p class="saying">时间是一切财富中最宝贵的财富</p>
                            <p class="celebrity">———— 德奥弗拉斯多</p>
                        </div>
                    </div>
                    <div class="rank-con">
                        <h3 class="title">积分排行榜</h3>
                        <li class="rank-item">1.xxx</li>
                        <li class="rank-item">2.xxx</li>
                        <li class="rank-item">3.xxx</li>
                        <li class="rank-item">4.xxx</li>
                        <li class="rank-item">5.xxx</li>
                        <li class="rank-item">6.xxx</li>
                        <li class="rank-item">7.xxx</li>
                        <li class="rank-item">8.xxx</li>
                        <p class="my-rank">我的排名： 45</p>
                    </div>
                    <div class="radar-con">
                        <span class="avatars"></span>
                        <span class="name">失格丶</span>
                        <radar />
                    </div>
                </div>
                <div class="slide-right"></div>
            </div>
        </div>

    </div>
</template>

<script>
    import Radar from '../radar/radar'
    export default {
        components: {
            Radar
        }
    }
</script>

<style scoped>
    .container {
        width: 960px;
        margin: 0 auto;
        background: #efefef;
        overflow: hidden;
        padding: 20px;
    }

    .banner {
        position: relative;
    }

    .banner-contents-swiper {
        position: absolute;
        top: 20px;
        left: 50px;
        width: 200px;
        height: 280px;
        background: #000;
        opacity: 0.4;
        z-index: 10;
    }

    .banner-contents {
        padding: 10px;
        position: absolute;
        top: 20px;
        left: 50px;
        width: 200px;
        height: 280px;
        z-index: 100;
    }

    .banner-title {
        color: #2e9d81;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .banner-item {
        width: 90%;
        font-size: 13px;
        color: #fff;
    }

    .title {
        font-size: 18px;
        color: #2e9d81;
        font-weight: bold;
    }

    .problem-item {
        margin-top: 10px;
        padding: 10px;
        width: 502px;
        height: 82px;
        background: #fff;
        border-radius: 8px;
    }

    .problem-label {
        padding: 0 4px 0 4px;
        line-height: 22px;
        display: inline-block;
        height: 22px;
        font-size: 14px;
        color: #fff;
        border-radius: 11px;
        background: #ffef34;
    }

    .problem-title {
        font-size: 17px;
    }

    .problem-content {
        font-size: 13px;
    }

    .problem-list {
        float: left;
    }

    .slide-con {
        margin-top: 10px;

        float: right;
    }

    .slide-left {
        width: 290px;
        height: 100%;
        float: left;
    }

    .slide-right {
        width: 40px;
        height: 100%;
        float: right;
    }

    .register-btn {
        margin-top: 22px;
        display: block;
        width: 128px;
        height: 42px;
        line-height: 42px;
        border-radius: 21px;
        text-align: center;
        background: #2e9d81;
        color: #fff;
        font-size: 20px;
    }

    .month {
        padding-top: 10px;
        font-size: 20px;
        color: #2c684a;
        width: 22px;
    }

    .day {
        flex: 1;
        margin-left: 10px;
        font-size: 50px;
        color: #d38c30;
    }

    .week {
        color: #2c684a;
        font-size: 18px;
    }

    .saying-con {
        margin-top: 20px;
    }

    .saying {
        font-size: 14px;
        text-align: left;
        font-weight: bold;
    }

    .celebrity {
        font-size: 14px;
        text-align: right;
        color: #4e4a44;
    }

    .rank-con {
        border-radius: 5px;
        padding: 10px;
        background: #fff;
        -moz-box-shadow: 1px 1px 9px #333333;
        -webkit-box-shadow: 1px 1px 9px #333333;
        box-shadow: 1px 1px 9px #333333;
    }

    .rank-item {
        font-size: 18px;
        line-height: 26px;
        color: #a8a8a8;
    }

    .radar-con {
        border-radius: 5px;
        margin-top: 20px;
        width: 100%;
        background: #fff;
        -moz-box-shadow: 1px 1px 9px #333333;
        -webkit-box-shadow: 1px 1px 9px #333333;
        box-shadow: 1px 1px 9px #333333;
    }

    .avatars {
        vertical-align: top;
        margin: 10px 20px 0 10px;
        display: inline-block;
        width: 76px;
        height: 76px;
        border-radius: 38px;
        background: #555;
    }

    .name {
        margin-top: 10px;
        line-height: 76px;
        vertical-align: top;
        color: #dbddda;
        font-size: 19px;
        height: 76px;
        display: inline-block;

    }



    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>