<template>
    <div class="live-list" :style="{minHeight:(screenHeight-60)+'px'}">
        <div class="container" :style="{minHeight:(screenHeight-60)+'px'}">
            <div class="header">直播</div>
            <!-- <div class="tab-con">
                <el-radio-group v-model="activeTab" style="margin: 30px;">
                    <el-radio-button label="一对一"></el-radio-button>
                    <el-radio-button label="一对多"></el-radio-button>
                </el-radio-group>
                <el-input size="small" placeholder="搜索直播" style="margin: 40px 20px 10px 0;width: 240px;float: right">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div> -->
            <el-row :gutter="12" style="margin-top: 20px;">
                <el-col :span="8" v-for="(item,index) in liveList" :key="index">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover" style="margin-bottom: 10px;position: relative">
                        <img @click="toLive(item)" src="../../assets/img/live-img.jpg" style="display: block;width: 100%;cursor: pointer;">
                        <h4 @click="toLive(item)" class="live-title">{{item.live_name}}</h4>
                        <div class="live-title-con">
                            <span class="live-desc">{{item.description}}</span>
                            <!-- <span class="audience-num">1234人<br>正在观看</span> -->
                        </div>
                        <span class="live-tag" v-if="item.is_living == 1">直播中</span>
                    </el-card>
                </el-col>
            </el-row>
            <el-pagination style="margin: 20px 0 20px 20px;float: right" :current-page="currentPage" :page-size="10"
                @current-change="handleCurrentChange" background layout="prev, pager, next" :total="this.totalPage*10">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import qs from 'qs';
    export default {
        data() {
            return {
                liveList: [],
                screenHeight: document.documentElement.clientHeight, // 屏幕高度
                activeTab: '一对一',
                currentPage: 1,
                totalPage: '',
            }
        },
        mounted() {
            var _this = this
            window.onresize = function () { // 定义窗口大小变更通知事件
                // _this.screenWidth = document.documentElement.clientWidth // 窗口宽度
                _this.screenHeight = document.documentElement.clientHeight // 窗口高度
            };
        },
        created() {
            this.getLiveList();
        },
        methods: {
            toLive(item) {

                this.$router.push({
                    path: '/live',
                    query: {
                        user_id: item.user_id,
                        id: item.id
                    }
                })
            },
            getLiveList() {
                this.$http.get('http://47.102.159.98/php/live/getlive-list.php')
                .then((res) => {
                    this.liveList = res.data.data;
                    this.totalPage = res.data.pages;
                })
            },
            handleCurrentChange(val) {
                console.log(val);
                this.$http.post('http://47.102.159.98/php/live/getlive-list.php', qs.stringify({
                        page: val,
                    }))
                    .then((res) => {
                        console.log(res.data)
                        this.liveList = res.data.data;
                    })
            },
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

    .header {
        padding-bottom: 10px;
        width: 95%;
        border-bottom: 2px solid #2e9d81;
        font-size: 20px;
    }

    .live-title {
        padding-left: 5%;
        cursor: pointer;
    }

    .live-title-con {
        display: flex;
    }

    .live-desc {
        padding-left: 5%;
        width: 65%;
        color: #99979c;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .audience-num {
        flex: 1;
        display: inline-block;
        width: 25%;
        font-size: 12px;
        text-align: right;
        color: #3ea358;
        margin-right: 5%;
        vertical-align: top;
    }

    .live-tag {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 10px;
        height: 30px;
        font-size: 13px;
        line-height: 30px;
        background: #ef1a1a;
        color: #fff;
        text-align: center;
        border-radius: 15px;
        
    }
</style>