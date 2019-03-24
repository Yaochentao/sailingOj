<template>
    <div class="notice">
        <div class="details-header">
            <h3 class="details-title">公告</h3>
            <el-button size='mini' type="primary" style="float: right;margin: 4px 10px 0 0" @click="cardShow = true">+发布</el-button>
        </div>
        <div class="notice-list">
            <div class="notice-card" v-for="item in notices" :key="item.index">
                <h4 class="notice-title">{{item.title}}<span>{{item.time}}</span></h4>
                <p class="notice-content">{{item.content}}</p>
            </div>

        </div>
        <el-pagination style="margin: 20px 40px 20px 20px;float: right" :current-page="currentPage" :page-size="10" @current-change="handleCurrentChange"
                background layout="prev, pager, next" :total="this.totalPage*10">
        </el-pagination>
    </div>
</template>
<script>
import qs from 'qs'
    export default {
        data() {
            return {
                notices: null,
                currentPage: 1,
                totalPage: '',
            }
        },
        created() {
            this.getNotice();
        },
        methods: {
            getNotice() {
                this.$http.get('http://47.102.159.98/php/administrator/Announcement-list.php')
                .then((res) => {
                    console.log(res.data);
                    this.notices = res.data.data;
                    this.totalPage = res.data.pages
                })
            },
            handleCurrentChange(val) {
                console.log(val);
                this.$http.post('http://47.102.159.98/php/administrator/Announcement-list.php',qs.stringify({
                page: val
            }))
            .then((res) => {
                console.log(res.data)
                this.notices = res.data.data;
            })
            }
        },
        computed: {
            noticeNum() {
                return(
                    this.content.length
                )
            }
        }
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
        min-height: 66px;
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