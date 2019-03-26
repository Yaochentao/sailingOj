<template>
    <div class="ablility">
        <div class="details-header">
            <h3 class="details-title">我的直播</h3>
            <el-button style="display: inline-block;float: right" type="primary" size="small" v-if="liveDetail.is_living == 0" @click="startLive">开始直播</el-button>
            <el-button style="display: inline-block;float: right" type="primary" size="small" v-if="liveDetail.is_living == 1" @click="stopLive">停止直播</el-button>
        </div>
        <div class="container">
            <el-form label-position="right" label-width="80px">
                <el-form-item label="直播地址">
                    <p>{{liveDetail.id}}</p>
                </el-form-item>
                <el-form-item label="房间标题">
                    <el-input v-model="liveDetail.live_name"></el-input>
                </el-form-item>
                <el-form-item label="推流地址">
                    <p>{{liveDetail.m3u8_url}}</p>
                </el-form-item>
                <el-form-item label="直播简介">
                    <el-input type="textarea" v-model="liveDetail.description" :rows="3"></el-input>
                </el-form-item>
                <el-form-item label="直播封面">
                    <img src="../../assets/img/live-img.jpg" width="400" height="200">
                </el-form-item>
                <el-form-item>
                    <el-button style="display: inline-block;float: right" type="primary" size="small"
                        v-show="!haveLive">创建直播</el-button>
                    <el-button style="display: inline-block;float: right" type="primary" size="small" v-show="haveLive"
                        @click="changeLive">更新信息</el-button>
                </el-form-item>

            </el-form>
        </div>
    </div>
</template>
<script>
    import qs from 'qs'
    export default {
        data() {
            return {
                token: '',
                user_name: '',
                password: '',
                create_time: '',
                liveDetail: {},
                haveLive: false,
            }
        },
        created() {
            this.getLive();
        },
        methods: {
            getLive() {
                this.$http.post('http://47.102.159.98/php/live/getlive.php', qs.stringify({
                        user_id: this.user_id,
                    }))
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.code == 1) {
                            this.liveDetail = res.data.data;
                            this.haveLive = true;
                        } else {
                            this.haveLive = false;
                        }
                    })
            },
            first() {
                this.$http.get('http://47.102.159.98/php/live/token.php').then((res) => {
                    console.log(res.data);
                    this.user_name = res.data.user_name;
                    this.password = res.data.password;
                    this.create_time = res.data.create_time;
                    this.getToken()
                })
            },
            getToken() {
                this.$http.post('http://open.facebac.com/api/manage/user/get_token.do', qs.stringify({
                        user_name: this.user_name,
                        password: this.password,
                        create_time: this.create_time
                    }))
                    .then((res) => {
                        console.log(res.data);
                        this.token = res.data.data;
                            this.createLive();
                    })
            },
            createLive() {
                this.$http.post('http://open.facebac.com/api/manage/live/create.do', qs.stringify({
                    token: this.token,
                    live_name: 'test',
                    live_text: 'test test'
                }))
            },
            updataLive() {  //保存直播信息
                this.$http.post('http://47.102.159.98/php/live/savelive.php', qs.stringify({
                    user_id: this.user_id,
                    live_name: 'test',
                    id: '817433040768901386',
                    push_site: 'rtmp://push.facebac.com/live/45283e7d1592a4710f0d?token=ab0b79ea551404bb69a6&secret=2181ad8e9dd3185e_f0324e06',
                    description: 'test test',
                    img_url: 'live-img.jpg',
                    m3u8_url: 'http://hls.facebac.com/live/45283e7d1592a4710f0d/playlist.m3u8?token=ab0b79ea551404bb69a6&secret=2181ad8e9dd3185e_f0324e06'
                }))
            },
            changeLive() {  //更新直播信息
                this.$http.post('http://47.102.159.98/php/live/updatelive.php', qs.stringify({
                        id: this.liveDetail.id,
                        description: this.liveDetail.description,
                        live_name: this.liveDetail.live_name,
                        img_url: 'live-img.jpg'
                    }))
                    .then((res) => {
                        this.$message({
                            showClose: true,
                            message: '修改成功'
                        });
                        this.getLive();
                    })
            },
            startLive() {
                 this.$http.get('http://47.102.159.98/php/live/token.php').then((res) => {
                    console.log(res.data);
                    this.user_name = res.data.user_name;
                    this.password = res.data.password;
                    this.create_time = res.data.create_time;
                    this.$http.post('http://open.facebac.com/api/manage/user/get_token.do', qs.stringify({
                        user_name: this.user_name,
                        password: this.password,
                        create_time: this.create_time
                    }))
                    .then((res) => {
                        console.log(res.data);
                        this.token = res.data.data;
                        this.$http.post('http://open.facebac.com/api/manage/live/enable.do',qs.stringify({
                            token: this.token,
                            id: this.liveDetail.id
                        }));
                        this.$http.post('http://47.102.159.98/php/live/updatelivestate.php',qs.stringify({
                            id: this.liveDetail.id,
                            is_living: 1
                        })).then((res) => {
                            this.getLive();
                        })
                    })
                })
            },
            stopLive() {
                 this.$http.get('http://47.102.159.98/php/live/token.php').then((res) => {
                    console.log(res.data);
                    this.user_name = res.data.user_name;
                    this.password = res.data.password;
                    this.create_time = res.data.create_time;
                    this.$http.post('http://open.facebac.com/api/manage/user/get_token.do', qs.stringify({
                        user_name: this.user_name,
                        password: this.password,
                        create_time: this.create_time
                    }))
                    .then((res) => {
                        console.log(res.data);
                        this.token = res.data.data;
                        this.$http.post('http://open.facebac.com/api/manage/live/close.do',qs.stringify({
                            token: this.token,
                            id: this.liveDetail.id
                        }));
                        this.$http.post('http://47.102.159.98/php/live/updatelivestate.php',qs.stringify({
                            id: this.liveDetail.id,
                            is_living: 0
                        })).then((res) => {
                            this.getLive();
                        })
                    })
                })
            }
        },
        computed: {
            user_id() {
                return this.$store.state.user_id;
            }
        },
        components: {}
    }
</script>
<style lang="css" scoped>
    .ability {
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

    .container {
        margin: 40px 10%;
    }
</style>