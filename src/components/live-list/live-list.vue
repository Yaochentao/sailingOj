<template>
    <div class="live-list" :style="{minHeight:(screenHeight-60)+'px'}">
        <div class="container" :style="{minHeight:(screenHeight-60)+'px'}">
            <div class="header">直播</div>
            <div class="tab-con">
                <el-radio-group v-model="activeTab" style="margin: 30px;">
                    <el-radio-button label="一对一"></el-radio-button>
                    <el-radio-button label="一对多"></el-radio-button>
                </el-radio-group>
                <el-input size="small" placeholder="搜索直播" style="margin: 40px 20px 10px 0;width: 240px;float: right">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
            <el-row :gutter="12">
                <el-col :span="8">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover" style="margin-bottom: 10px;position: relative">
                        <img src="../../assets/img/live-img.jpg" style="display: block;width: 100%">
                        <h4 @click="toLive" class="live-title">Google资深工程师深度讲解Go语言</h4>
                        <div class="live-title-con">
                            <span class="live-desc">基本语法、函数式编程、面向接口、并发编程、分布式爬虫实战 全面掌握Go语言</span>
                            <span class="audience-num">1234人<br>正在观看</span>
                        </div>
                        <span class="live-tag">直播中</span>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover" style="margin-bottom: 10px;position: relative">
                        <img src="../../assets/img/live-img1.jpg" style="display: block;width: 100%">
                        <h4 class="live-title">专为程序员设计的线性代数课程</h4>
                        <div class="live-title-con">
                            <span class="live-desc">创新设计+通俗易懂，这一次，bobo老师带你彻底学会线性代数！</span>
                            <span class="audience-num">1234人<br>正在观看</span>
                        </div>
                        <span class="live-tag">直播中</span>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover" style="margin-bottom: 10px;position: relative">
                        <img src="../../assets/img/live-img.jpg" style="display: block;width: 100%">
                        <h4 class="live-title">Google资深工程师深度讲解Go语言</h4>
                        <div class="live-title-con">
                            <span class="live-desc">基本语法、函数式编程、面向接口、并发编程、分布式爬虫实战 全面掌握Go语言</span>
                            <span class="audience-num">1234人<br>正在观看</span>
                        </div>
                        <span class="live-tag">直播中</span>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover" style="margin-bottom: 10px;position: relative">
                        <img src="../../assets/img/live-img.jpg" style="display: block;width: 100%">
                        <h4 class="live-title">Google资深工程师深度讲解Go语言</h4>
                        <div class="live-title-con" style="display:flex">
                            <span class="live-desc">基本语法、函数式编程、面向接口、并发编程、分布式爬虫实战 全面掌握Go语言</span>
                            <span class="audience-num">1234人<br>正在观看</span>
                        </div>
                        <span class="live-tag">直播中</span>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover" style="margin-bottom: 10px;position: relative">
                        <img src="../../assets/img/live-img.jpg" style="display: block;width: 100%">
                        <h4 class="live-title">Google资深工程师深度讲解Go语言</h4>
                        <div class="live-title-con" style="display:flex">
                            <span class="live-desc">基本语法、函数式编程、面向接口、并发编程、分布式爬虫实战 全面掌握Go语言</span>
                            <span class="audience-num">1234人<br>正在观看</span>
                        </div>
                        <span class="live-tag">直播中</span>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover" style="margin-bottom: 10px;position: relative">
                        <img src="../../assets/img/live-img.jpg" style="display: block;width: 100%">
                        <h4 class="live-title">Google资深工程师深度讲解Go语言</h4>
                        <div class="live-title-con" style="display:flex">
                            <span class="live-desc">基本语法、函数式编程、面向接口、并发编程、分布式爬虫实战 全面掌握Go语言</span>
                            <span class="audience-num">1234人<br>正在观看</span>
                        </div>
                        <span class="live-tag">直播中</span>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover" style="margin-bottom: 10px;position: relative">
                        <img src="../../assets/img/live-img.jpg" style="display: block;width: 100%">
                        <h4 class="live-title">Google资深工程师深度讲解Go语言</h4>
                        <div class="live-title-con" style="display:flex">
                            <span class="live-desc">基本语法、函数式编程、面向接口、并发编程、分布式爬虫实战 全面掌握Go语言</span>
                            <span class="audience-num">1234人<br>正在观看</span>
                        </div>
                        <span class="live-tag">直播中</span>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover" style="margin-bottom: 10px;position: relative">
                        <img src="../../assets/img/live-img.jpg" style="display: block;width: 100%">
                        <h4 class="live-title">Google资深工程师深度讲解Go语言</h4>
                        <div class="live-title-con" style="display:flex">
                            <span class="live-desc">基本语法、函数式编程、面向接口、并发编程、分布式爬虫实战 全面掌握Go语言</span>
                            <span class="audience-num">1234人<br>正在观看</span>
                        </div>
                        <span class="live-tag">直播中</span>
                    </el-card>
                </el-col>
            </el-row>
            <el-pagination style="margin: 10px;float: right" background layout="prev, pager, next" :total="1000">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                screenHeight: document.documentElement.clientHeight, // 屏幕高度
                activeTab: '一对一'
            }
        },
        mounted() {
            var _this = this
            window.onresize = function () { // 定义窗口大小变更通知事件
                // _this.screenWidth = document.documentElement.clientWidth // 窗口宽度
                _this.screenHeight = document.documentElement.clientHeight // 窗口高度
            };
        },
        methods: {
            toLive() {
                this.$router.push('/live');
                console.log('1')
            }
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