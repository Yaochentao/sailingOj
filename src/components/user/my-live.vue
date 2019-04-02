<template>
    <div class="ablility">
        <div class="details-header">
            <h3 class="details-title">我的直播</h3>
            <el-button style="display: inline-block;float: right" type="primary" size="small" v-if="!create"
                @click="showCreate">创建直播</el-button>
            <el-button style="display: inline-block;float: right" type="primary" size="small" v-if="create"
                @click="hideCreate">取消</el-button>
        </div>
        <el-select v-model="selectedLive" placeholder="请选择" style="float: right; margin-right: 80px">
            <el-option v-for="item in lives" :key="item.id" :label="item.live_name" :value="item.id">
            </el-option>
        </el-select>
        <div class="container">
            <el-form label-position="right" label-width="80px" v-show="!this.create">
                <el-form-item label="直播地址">
                    <p>{{liveUrl}}</p>
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
                    <input name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update" />
                </el-form-item>
                <el-form-item>
                    <el-button style="display: inline-block;float: right;margin-left: 10px" type="primary" size="small"
                        v-show="haveLive" @click="changeLive">更新信息</el-button>
                    <el-button style="display: inline-block;float: right" type="primary" size="small"
                        v-if="liveDetail.is_living == 0" @click="startLive">开始直播</el-button>
                    <el-button style="display: inline-block;float: right" type="primary" size="small"
                        v-if="liveDetail.is_living == 1" @click="stopLive">停止直播</el-button>
                </el-form-item>
            </el-form>
            <el-form label-position="right" label-width="80px" v-show="this.create" :model="newLive">
                <el-form-item label="房间标题">
                    <el-input v-model="newLive.live_name"></el-input>
                </el-form-item>
                <el-form-item label="直播简介">
                    <el-input type="textarea" v-model="newLive.description" :rows="3"></el-input>
                </el-form-item>
                <el-form-item label="直播封面">
                    <img src="../../assets/img/live-img.jpg" width="400" height="200">
                </el-form-item>
                <el-form-item>
                    <el-button style="display: inline-block;float: right" type="primary" size="small"
                        @click="updataLive">提交申请</el-button>
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
                Hheader: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                user_name: '',
                password: '',
                create_time: '',
                liveDetail: {},
                haveLive: false,
                create: false,
                newLive: {
                    live_name: '',
                    description: '',
                },
                selectedLive: '',
                lives: [],
                options: [{
                    value: '选项1',
                    label: '黄金糕sadasdsadasd黄金糕sadasdsadasd黄金糕sadasdsadasd'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
            }
        },
        created() {
            this.getLive();
        },
        methods: {
            update(e) {
                let file = e.target.files[0];
                console.log(file)
                let reader = new FileReader(); //html5读文件
                reader.readAsDataURL(file);
                let that = this;
                reader.onload = function (e) {
                    let img64 = e.target.result;
                    // console.log(img64);
                    that.$http.post('http://47.102.159.98/php/live/updatephoto.php', qs.stringify({
                            img: img64,
                            id: that.liveDetail.id
                        }))
                        .then(response => {
                            console.log(response.data);
                        })
                }
                // let param = new FormData(); //创建form对象
                // param.append('file',file,file.name);//通过append向form对象添加数据
                // param.append('id','817433040768901332');//添加form表单中其他数据
                // console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
                // let config = {
                //     headers:{'Content-Type':'multipart/form-data'}
                // };  //添加请求头


            },
            getLive() {
                this.$http.post('http://47.102.159.98/php/live/getmylives.php', qs.stringify({
                        user_id: this.user_id,
                    }))
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.code == 1) {
                            this.liveDetail = res.data.data[0];
                            this.lives = res.data.data;
                            this.selectedLive = res.data.data[0].id;
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
            updataLive() { //保存直播信息
                this.$http.post('http://47.102.159.98/php/live/buildhome.php', qs.stringify({
                    user_id: this.user_id,
                    live_name: this.newLive.live_name,
                    description: this.newLive.description,
                }))
            },
            changeLive() { //更新直播信息
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
                            this.$http.post('http://open.facebac.com/api/manage/live/enable.do', qs
                                .stringify({
                                    token: this.token,
                                    id: this.liveDetail.id
                                }));
                            this.$http.post('http://47.102.159.98/php/live/updatelivestate.php', qs
                                .stringify({
                                    id: this.liveDetail.id,
                                    user_id: this.user_id,
                                    is_living: 1
                                })).then((res) => {
                                this.getLive();
                            })
                        })
                })
            },
            showCreate() {
                this.create = true;
            },
            hideCreate() {
                this.create = false;
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
                            this.$http.post('http://open.facebac.com/api/manage/live/close.do', qs
                                .stringify({
                                    token: this.token,
                                    id: this.liveDetail.id
                                }));
                            this.$http.post('http://47.102.159.98/php/live/updatelivestate.php', qs
                                .stringify({
                                    id: this.liveDetail.id,
                                    user_id: this.user_id,
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
            },
            liveUrl() {
                return `http://47.102.159.98/#/live?user_id=${this.liveDetail.user_id}&id=${this.liveDetail.id}`
            },
            resData() {
                return qs.stringify({
                    id: 817433040768901332
                })
            },
        },
        watch: {
            selectedLive(newSelectedLive) {
                let index = this.lives.findIndex((item) => {
                    return item.id == newSelectedLive;
                });
                this.liveDetail = this.lives[index];
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