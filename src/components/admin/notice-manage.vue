<template>
    <div class="notice-manage">
        <el-card shadow="always" class="new-notice-card" v-show="cardShow">
            <div slot="header" class="clearfix">
                <span>发布公告</span>
            </div>
            <el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="textarea">
            </el-input>
            <p style="color: #c1c1c1;font-size: 14px;">{{noticeNum}}/140</p>
            <div class="btn-con">
                <el-button size='medium'>确定</el-button>
                <el-button size='medium' @click="cardShow = false">取消</el-button>
            </div>
        </el-card>
        <div class="details-header">
            <h3 class="details-title">历史公告</h3>
            <el-button size='mini' type="primary" style="float: right;margin: 4px 10px 0 0" @click="cardShow = true">+发布</el-button>
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
        data() {
            return {
                cardShow: false,
                textarea:'',
                activeName: 'first',
                tableData: [{
                    date: '2016-05-02',
                    name: '充值',
                    address: '23',
                    state: '完成'
                }, {
                    date: '2016-05-04',
                    name: '提现',
                    address: '90',
                    state: '完成'
                }, {
                    date: '2016-05-01',
                    name: '充值',
                    address: '200',
                    state: '处理中'
                }, {
                    date: '2016-05-03',
                    name: '充值',
                    address: '516',
                    state: '完成'
                }]
            }
        },
        computed: {
            noticeNum() {
                return(
                    this.textarea.length
                )
            }
        }
    }
</script>


<style scoped>
    .notice-manage {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .new-notice-card {
        position: absolute;
        top: 100px;
        left: 66px;
        width: 600px;
        height: 350px;
    }

    .card-header {
        width: 100%;
        text-align: center;
    }
    .btn-con {
        float: right;
    }

    .details-header {
        width: 60%;
        margin: 33px 0 23px 80px;
        padding-bottom: 10px;
        border-bottom: 2px solid #2e9d81;
    }

    .details-title {

        font-size: 20px;
        display: inline-block;
    }

    .table-con {
        margin: 33px 0 23px 80px;
        width: 80%;
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