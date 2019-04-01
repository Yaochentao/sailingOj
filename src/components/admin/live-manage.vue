<template>
    <div class="user-manage">
        <div class="details-header">
            <h3 class="details-title">直播审核</h3>
        </div>
        <div class="table-con">
            <el-table :data="lives" style="width: 100%">
                <el-table-column prop="nick" label="用户名">
                </el-table-column>
                <el-table-column prop="live_name" label="直播标题">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <!-- <el-button v-if="scope.row.defunct == 0"  type="text" size="small" @click="changgeDefunct(scope.row)">解封</el-button> -->
                        <el-button v-if="scope.row.defunct == 0"  type="text" size="small" @click="first(scope.row)">审核通过</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- <el-pagination style="margin: 20px 0 20px 20px;float: right" background layout="prev, pager, next" :total="1000">
            </el-pagination> -->
        </div>
    </div>
</template>
<script>
    import qs from 'qs'
    export default {
        data() {
            return {
                lives: [],
                user_name: '',
                password: '',
                create_time: '',
                token: '',
                live_id: '',
                push_url: '',
                m3u8_url: '',
            }
        },
        created() {
            this.getLiveList();
        },
        methods: {
            first(row) {
                console.log(row)
                this.$http.get('http://47.102.159.98/php/live/token.php').then((res) => {
                    console.log(res.data);
                    this.user_name = res.data.user_name;
                    this.password = res.data.password;
                    this.create_time = res.data.create_time;
                    this.getToken(row)
                })
            },
            getToken(row) {
                this.$http.post('http://open.facebac.com/api/manage/user/get_token.do', qs.stringify({
                        user_name: this.user_name,
                        password: this.password,
                        create_time: this.create_time
                    }))
                    .then((res) => {
                        console.log(res.data);
                        this.token = res.data.data;
                        this.createLive(row);
                    })
            },
            createLive(row) {
                this.$http.post('http://open.facebac.com/api/manage/live/create.do', qs.stringify({
                    token: this.token,
                    live_name: row.live_name,
                    live_text: row.description
                }))
                .then((res) => {
                    this.live_id = res.data.data.live_id;
                    this.push_url = res.data.data.push_url;
                    this.m3u8_url = res.data.data.m3u8_url;	
                    this.updataLive(row);
                })
            },
            updataLive(row) { //保存直播信息
                this.$http.post('http://47.102.159.98/php/live/savelive.php', qs.stringify({
                    id: this.live_id,
                    push_site: this.push_url,
                    home_id: row.home_id,
                    m3u8_url: this.m3u8_url
                }))
                this.changgeDefunct(row)
            },
            changgeDefunct(row) {
                this.$http.post('http://47.102.159.98/php/live/updatelivestate.php',qs.stringify({
                    home_id: row.home_id,
                    user_id: this.user_id,
                    defunct: 1
                }))
            },
            getLiveList() {
                this.$http.post('http://47.102.159.98/php/live/check-defunct.php')
                    .then((res) => {
                        this.lives = res.data.data
                    })
            },
            set() {},
            ban() {
                console.log('ban')
            },
        },
        computed: {
            user_id() {
                return this.$store.state.user_id;
            },
        }
    }
</script>


<style scoped>
    .user-manage {
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

        font-size: 20px;
        display: inline-block;
    }

    .table-con {
        margin: 33px 0 23px 80px;
        width: 80%;
    }
</style>