<template>
    <div class="live" :style="{minHeight:(screenHeight-60)+'px'}">
        <div class="container" :style="{minHeight:(screenHeight-60)+'px'}">
            <div class="live-header">
                <h3 class="live-title">Google资深工程师深度讲解Go语言</h3>
                <div class="teacher-con">
                    <span class="avatar"></span>
                    <span class="teacher-name">XXX<br>Google高级软件工程师</span>
                </div>
            </div>
            <div class="flex-con" style="display: flex">
                <div class="player">
                    <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"
                        @play="onPlayerPlay($event)" @pause="onPlayerPause($event)">
                    </video-player>
                </div>
                <div class="comment-con">
                    <el-scrollbar style="height:100%">
                        <div style="height: 1000px"></div>
                    </el-scrollbar>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    require('video.js/dist/video-js.css')
    require('vue-video-player/src/custom-theme.css')
    import {
        videoPlayer
    } from 'vue-video-player';
    export default {
        data() {
            return {
                screenHeight: document.documentElement.clientHeight, // 屏幕高度
                playerOptions: {
                    // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "video/mp4",
                        src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" //你的视频地址（必填）
                    }],
                    poster: "../../assets/img/live-img1.jpg", //你的封面地址
                    width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    //        controlBar: {
                    //          timeDivider: true,
                    //          durationDisplay: true,
                    //          remainingTimeDisplay: false,
                    //          fullscreenToggle: true  //全屏按钮
                    //        }
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
                alert("play");
            },
            onPlayerPause(player) {
                alert("pause");
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

    .live-title {
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
        height: 400px;
    }
</style>