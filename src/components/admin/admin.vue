<template>
    <div class="admin" :style="{minHeight:(screenHeight-60)+'px'}">
        <div class="container">
            <div class="nav-con">
                <el-menu default-active="1" class="el-menu-vertical-demo" :style="{minHeight:(screenHeight-120)+'px',paddingTop: 60+'px'}">
                    <el-menu-item index="1" @click="toUserM">
                        <i class="el-icon-menu"></i>
                        <span slot="title">用户管理</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="toProblemM">
                        <i class="el-icon-menu"></i>
                        <span slot="title">题目管理</span>
                    </el-menu-item>
                    <el-menu-item index="3" @click="toOrder">
                        <i class="el-icon-document"></i>
                        <span slot="title">订单管理</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title" @click="toLiveManage">直播管理</span>
                    </el-menu-item>
                    <el-menu-item index="5" @click="toNoticeM">
                        <i class="el-icon-setting"></i>
                        <span slot="title">公告管理</span>
                    </el-menu-item>
                    <el-menu-item index="6" @click="toTagManage">
                        <i class="el-icon-setting"></i>
                        <span slot="title">标签管理</span>
                    </el-menu-item>
                </el-menu>
            </div>
            <div class="item-con">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                screenHeight: document.documentElement.clientHeight, // 屏幕高度
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
            toUserM() {
                this.$router.push('/admin/user-manage')
            },
            toProblemM() {
                this.$router.push('/admin/problem-manage')
            },
            toNoticeM() {
                this.$router.push('/admin/notice-manage')
            },
            toLiveManage() {
                this.$router.push('/admin/live-manage')
            },
            toTagManage() {
                this.$router.push('/admin/tag-manage')
            },
            toOrder() {
                this.$router.push('/admin/orderManager')
            }


        }
    }
</script>

<style scoped>
    .container {
        width: 960px;
        margin: 0 auto;
        /* background: #efefef; */
        min-height: 100%;
        display: flex;
        -moz-box-shadow: 1px 1px 9px #333333;
        -webkit-box-shadow: 1px 1px 9px #333333;
        box-shadow: 1px 1px 9px #333333;
    }
    .nav-con {
        width: 20%;
    }
    .item-con {
        flex:1;
        min-height: 100%;
    }
</style>