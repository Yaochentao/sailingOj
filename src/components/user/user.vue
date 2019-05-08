<template>
    <div class="user" :style="{minHeight:(screenHeight-60)+'px'}">
        <div class="container">
            <div class="nav-con">
                <el-menu default-active="1" class="el-menu-vertical-demo" :style="{minHeight:(screenHeight-120)+'px',paddingTop: 60+'px'}">
                    <el-menu-item index="1" @click="toDetails">
                        <i class="el-icon-menu"></i>
                        <span slot="title">个人信息</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="toOrders">
                        <i class="el-icon-menu"></i>
                        <span slot="title">我的钱包</span>
                    </el-menu-item>
                    <el-menu-item index="3" @click="toNotice">
                        <i class="el-icon-document"></i>
                        <span slot="title">系统消息</span>
                    </el-menu-item>
                    <el-menu-item index="4" @click="toAbility">
                        <i class="el-icon-setting"></i>
                        <span slot="title">能力评价</span>
                    </el-menu-item>
                    <el-menu-item index="5" @click="toMyLive">
                        <i class="el-icon-setting"></i>
                        <span slot="title">我的直播</span>
                    </el-menu-item>
                    <el-menu-item index="6" @click="toSubmitHistory">
                        <i class="el-icon-setting"></i>
                        <span slot="title">做题记录</span>
                    </el-menu-item>
                    <el-menu-item index="7" @click="toUploadHistory">
                        <i class="el-icon-setting"></i>
                        <span slot="title">上传记录</span>
                    </el-menu-item>
                    <el-menu-item index="8" @click="toCollection">
                        <i class="el-icon-setting"></i>
                        <span slot="title">我的收藏</span>
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
        watch: {
            user_id(newUser_id) {
                console.log('111')
                if(!newUser_id) {
                    this.$router.push('/home')
                }
            }
        },
        methods: {
            toDetails() {
                this.$router.push('/user/details')
            },
            toOrders() {
                this.$router.push('/user/orders')
            },
            toNotice() {
                this.$router.push('/user/notice')
            },
            toAbility() {
                this.$router.push('/user/ability')
            },
            toMyLive() {
                this.$router.push('/user/my-live')
            },
            toSubmitHistory() {
                this.$router.push('/user/submit-history')
            },
            toUploadHistory() {
                this.$router.push('/user/upload-history')
            },
            toCollection() {
                this.$router.push('/user/collection')
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
        /* padding-top: 60px; */
    }
    .item-con {
        flex:1;
        min-height: 100%;
    }
</style>