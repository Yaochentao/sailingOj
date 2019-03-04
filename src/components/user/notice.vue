<template>
    <div class="notice">
        <div class="details-header">
            <h3 class="details-title">系统消息</h3>
        </div>
        <div class="notice-list">
            <div class="notice-card">
                <h4 class="notice-title">独家直播！雪未来第十年纪念演唱会<span>2019-02-10 15:00:00</span></h4>
                <p class="notice-content">在雪未来(SNOW MIKU)步入第10年之际，bilibili将独家线上放送「SNOW MIKU LIVE! 2019」2月10日
                    夜场演唱会，给你一个冰雪之夜！直播时间：16:00-19:00，直播间更能赢取丰富奖品！听从雪的召唤，我们
                    官方直播间见！→<a href="">https://live.bilibili.com/5440</a> 2月11日开启大会员专享精彩回看！→ <a href="">https://www.bili
                    bili.com/bangumi/play/ss26484</a> </p>
            </div>
            
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .notice {
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

    .notice-list {
        margin: 33px 0 23px 80px;
        width: 80%;
    }

    .notice-card {
        margin: 20px 0;
        border-radius: 5px;
        padding: 10px;
        width: 100%;
        background: #f6f6f6;
        -moz-box-shadow: 1px 1px 9px #333333;
        -webkit-box-shadow: 1px 1px 9px #333333;
        box-shadow: 1px 1px 9px #333333;
    }

    .notice-title {
        font-size: 16px;
    }

    .notice-title span {
        margin-right: 20px;
        font-size: 13px;
        color: #acadad;
        float: right;
    }
    .notice-content a {
        color: #4398e3;
    }

    .notice-content {
        font-size: 13px;
        color: #acadad;
    }
</style>