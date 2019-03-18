<template>
    <div class="user-manage">
        <div class="details-header">
            <h3 class="details-title">用户管理</h3>
        </div>
        <div class="table-con">
            <el-table :data="users" style="width: 100%">
                <el-table-column prop="nick" label="用户名">
                </el-table-column>
                <el-table-column prop="user_id" label="账号">
                </el-table-column>
                <el-table-column prop="group" label="权限">
                    <template slot-scope="scope">
                        <span v-if="scope.row.group == 1">管理员</span>
                        <span v-if="scope.row.group == 0">普通用户</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button v-if="scope.row.group == 1"  type="text" size="small" @click="unset(scope.row)">取消管理员</el-button>
                        <el-button v-if="scope.row.group == 0"  type="text" size="small" @click="set(scope.row)">设为管理员</el-button>
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
                users: [],
            }
        },
        created() {
            this.getUserList();
        },
        methods: {
            getUserList() {
                this.$http.post('http://47.102.159.98/php/administrator/Personal-management.php', qs.stringify({
                        user_id: this.user_id
                    }))
                    .then((res) => {
                        this.users = res.data.data
                    })
            },
            set(member) {
                console.log(member.user_id)
                this.$http.post('http://47.102.159.98/php/administrator/Personal-management.php', qs.stringify({
                        user_id: this.user_id,
                        member_id: member.user_id,
                        level: 'up',
                        
                    }))
                    .then((res) => {
                        this.getUserList();
                    })
            },
            unset(member) {
                this.$http.post('http://47.102.159.98/php/administrator/Personal-management.php', qs.stringify({
                        user_id: this.user_id,
                        level: 'down',
                        member_id: member.user_id
                    }))
                    .then((res) => {
                        this.getUserList();
                    })
            }
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