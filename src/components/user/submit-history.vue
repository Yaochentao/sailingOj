<template>
    <div class="submit-history">
        <div class="details-header">
            <h3 class="details-title">做题记录</h3>
        </div>
        <div class="table-con">
            <el-table :data="submitHistory" style="width: 100%">
                <el-table-column prop="problem_id" label="题目id" width="100">
                </el-table-column>
                <el-table-column prop="title" label="题目名称">
                </el-table-column>
                <el-table-column prop="in_date" label="提交时间">
                </el-table-column>
                <el-table-column prop="result" label="结果">
                </el-table-column>
            </el-table>
            <el-pagination style="margin: 20px 0 20px 20px;float: right" :current-page="currentPage" :page-size="10" @current-change="handleCurrentChange"
                background layout="prev, pager, next" :total="this.totalPage*10">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import qs from 'qs'
    export default {
        data() {
            return {
                submitHistory: [],
                currentPage: 1,
                totalPage: ''
            }
        },
        created() {
            this.$http.post('http://47.102.159.98/php/personal/problem-solved-record.php', qs.stringify({
                    user_id: this.user_id,
                }))
                .then((res) => {
                    this.submitHistory = res.data.data;
                    this.totalPage = res.data.pages
                })
        },
        methods: {
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.$http.post('http://47.102.159.98/php/personal/problem-solved-record.php', qs.stringify({
                    user_id: this.user_id,
                    page: val
                }))
                .then((res) => {
                    this.submitHistory = res.data.data;
                })
            }
        },
        computed: {
            user_id() {
                return this.$store.state.user_id;
            },
        },
        watch: {
            user_id(newUser_id) {
                console.log('111')
                if(!newUser_id) {
                    this.$router.push('/home')
                }
            }
        },
    }
</script>


<style scoped>
    .submit-history {
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