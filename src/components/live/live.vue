<template>
    <div class="live" :style="{minHeight:(screenHeight-60)+'px'}">
        <div class="container" :style="{minHeight:(screenHeight-60)+'px'}">
            <div class="live-header">
                <h3 class="title">Google资深工程师深度讲解Go语言</h3>
                <div class="teacher-con">
                    <span class="avatar"></span>
                    <span class="teacher-name">XXX<br>Google高级软件工程师</span>
                </div>
            </div>
            <div class="flex-con" style="display: flex">
                <div class="player">
                    <video-player autoplay class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"
                        @play="onPlayerPlay($event)" @pause="onPlayerPause($event)">
                    </video-player>
                </div>
                <div class="comment-con">
                    <el-scrollbar style="height:100%">
                        <div class="comment">
                            <li style="line-height: 30px;"><span style="color: #AFDEFF">失格丶：</span><span style="">这是一条弹幕</span></li>
                            <li style="line-height: 30px;"><span style="color: #AFDEFF">失格丶：</span><span style="">这是一条弹幕</span></li>
                            <li style="line-height: 30px;"><span style="color: #AFDEFF">失格丶：</span><span style="">这是一条弹幕</span></li>
                            <li style="line-height: 30px;"><span style="color: #AFDEFF">失格丶：</span><span style="">这是一条弹幕</span></li>
                            <li style="line-height: 30px;"><span style="color: #AFDEFF">失格丶：</span><span style="">这是一条弹幕</span></li>
                            <li style="line-height: 30px;"><span style="color: #AFDEFF">失格丶：</span><span style="">这是一条弹幕</span></li>
                            <li style="line-height: 30px;"><span style="color: #AFDEFF">失格丶：</span><span style="">这是一条弹幕</span></li>
                            <li style="line-height: 30px;"><span style="color: #AFDEFF">失格丶：</span><span style="">这是一条弹幕</span></li>
                            <li style="line-height: 30px;"><span style="color: #AFDEFF">失格丶：</span><span style="">这是一条弹幕</span></li>
                            <li style="line-height: 30px;"><span style="color: #AFDEFF">失格丶：</span><span style="">这是一条弹幕</span></li>
                            <li style="line-height: 30px;"><span style="color: #AFDEFF">失格丶：</span><span style="">这是一条弹幕</span></li>
                            <li style="line-height: 30px;"><span style="color: #AFDEFF">失格丶：</span><span style="">这是一条弹幕</span></li>
                            <li style="line-height: 30px;"><span style="color: #AFDEFF">失格丶：</span><span style="">这是一条弹幕</span></li>
                            <li style="line-height: 30px;"><span style="color: #AFDEFF">失格丶：</span><span style="">这是一条弹幕</span></li>
                            <li style="line-height: 30px;"><span style="color: #AFDEFF">失格丶：</span><span style="">这是一条弹幕</span></li>
                        </div>
                    </el-scrollbar>
                </div>
            </div>
            <div class="live-list-con">
                <h3 style="font-weight:bold;line-height: 2;">相关直播推荐</h3>
                <el-row :gutter="12">
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

                </el-row>

            </div>
        </div>
    </div>
</template>
<script>
    require('video.js/dist/video-js.css')
    require('vue-video-player/src/custom-theme.css')
    import 'videojs-contrib-hls'
    import {
        videoPlayer
    } from 'vue-video-player';
    export default {
        data() {
            return {
                screenHeight: document.documentElement.clientHeight, // 屏幕高度
                playerOptions: {
                    // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: true, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        // type: "video/mp4",
                        // src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" //你的视频地址（必填）
                        // src: 'http://img.ksbbs.com/asset/Mon_1703/05cacb4e02f9d9e.mp4',
                        // type:'rtmp/flv',
                        // src: 'rtmp://58.200.131.2:1935/livetv/hunantv'
                        withCredentials: false,
                        type: 'application/x-mpegURL',
                        src: 'https://1.mms.vlog.xuite.net/hls/ftvtv/index.m3u8'
                        // src: 'http://hls.facebac.com/live/22cdf607ab95c3fd2f2e/playlist.m3u8?token=ab0b79ea551404bb69a6&secret=07172e29373d5484_cfd2f3d6'
                    }],
                    // poster: "../../assets/img/live-img1.jpg", //你的封面地址
                    width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: false,
                        durationDisplay: false,
                        remainingTimeDisplay: false,
                        currentTimeDisplay: false, // 当前时间
                        volumeControl: false, // 声音控制键
                        playToggle: false, // 暂停和播放键
                        progressControl: false, // 进度条
                        fullscreenToggle: true // 全屏按钮
                    },
                },
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
            onPlayerPlay(player) {
                console.log("play");
            },
            onPlayerPause(player) {
                console.log("pause");
            },
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player;
            }
        },
        components: {
            videoPlayer
        },
    }
</script>

<style scoped>
    .container {
        padding-bottom: 30px;
        width: 960px;
        margin: 0 auto;
        background: #efefef;
    }

    .live-header {
        padding-top: 10px;
        width: 100%;
        height: 166px;
        background-size: 100% 100%;
        background-image: url(../../assets/img/live-header-bg.jpeg)
    }

    .title {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 20px;
        font-size: 20px;
        line-height: 40px;
        color: #fff;
        border-bottom: 2px solid #2e9d81;
    }

    .teacher-con {
        width: 80%;
        margin: 0 auto;
    }

    .avatar {
        display: inline-block;
        width: 38px;
        height: 38px;
        border-radius: 19px;
        background: #2e9d81;
    }

    .teacher-name {
        display: inline-block;
        margin: 0px 0 0 10px;
        font-size: 13px;
        color: #fff;
        vertical-align: top;
    }

    .player {
        padding: 20px;
        width: 65%;
    }

    .comment-con {
        flex: 1;
        padding: 0 10px 10px 10px;
        margin: 20px 20px 20px 0;
        height: 332px;
        border-radius: 5px;
        padding: 10px;
        background: #fff;
        -moz-box-shadow: 1px 1px 9px #333333;
        -webkit-box-shadow: 1px 1px 9px #333333;
        box-shadow: 1px 1px 9px #333333;
    }

    .live-list-con {
        margin: 20px;
        padding: 10px;
        border-radius: 5px;
        background: #fff;
        -moz-box-shadow: 1px 1px 9px #333333;
        -webkit-box-shadow: 1px 1px 9px #333333;
        box-shadow: 1px 1px 9px #333333;
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