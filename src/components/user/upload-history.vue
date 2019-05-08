<template>
    <div class="upload-history">
        <div class="details-header">
            <h3 class="details-title">上传记录</h3>
        </div>
        <div class="table-con">
            <el-table :data="uploadHistory" style="width: 100%">
                <el-table-column prop="problem_id" label="题目id" width="100">
                </el-table-column>
                <el-table-column prop="title" label="题目名称">
                </el-table-column>
                <el-table-column prop="in_date" label="提交时间">
                </el-table-column>
                <!-- <el-table-column prop="state" label="状态">
                </el-table-column> -->
                <el-table-column prop="money" label="平台币收益">
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
                uploadHistory: [],
                currentPage: 1,
                totalPage: '',
            }
        },
        created() {
            this.$http.post('http://47.102.159.98/php/personal/upload-problem-record.php',qs.stringify({
                user_id: this.user_id
            }))
            .then((res) => {
                console.log(res.data)
                this.uploadHistory = res.data.data;
                this.totalPage = res.data.pages
            })
        },
        methods: {
            handleCurrentChange(val) {
                console.log(val);
                this.$http.post('http://47.102.159.98/php/personal/upload-problem-record.php',qs.stringify({
                user_id: this.user_id,
                page: val
            }))
            .then((res) => {
                console.log(res.data)
                this.uploadHistory = res.data.data;
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
    .upload-history {
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



