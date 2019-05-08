<template>
    <div class="collection-history">
        <div class="details-header">
            <h3 class="details-title">我的收藏</h3>
        </div>
        <div class="table-con">
            <el-table :data="collections" style="width: 100%" @row-click="toProblemOj">
                <el-table-column prop="problem_id" label="题目id">
                </el-table-column>
                <el-table-column prop="title" label="题目名称">
                </el-table-column>
                <el-table-column width='240' label="标签">
                    <template slot-scope="scope">
                        <el-tag v-if='scope.row.label[0]' size="small" style="margin-right: 3px">{{scope.row.label[0]}}
                        </el-tag>
                        <el-tag v-if='scope.row.label[1]' size="small" type="success" style="margin-right: 3px">
                            {{scope.row.label[1]}}</el-tag>
                        <el-tag v-if='scope.row.label[2]' size="small" type="warning" style="margin-right: 3px">
                            {{scope.row.label[2]}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="submit" label="热度">
                </el-table-column>
            </el-table>
            <el-pagination style="margin: 20px 0 20px 20px;float: right" :current-page="currentPage" :page-size="10"
                @current-change="handleCurrentChange" background layout="prev, pager, next" :total="this.totalPage*10">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import qs from 'qs'
    export default {
        data() {
            return {
                collections: [],
                currentPage: 1,
                totalPage: '',
            }
        },
        created() {
            this.showCollection();
        },
        methods: {
            showCollection() {
                this.$http.post('http://47.102.159.98/php/personal/collection.php', qs.stringify({
                        user_id: this.user_id,
                        type: 'show'
                    }))
                    .then((res) => {
                        console.log(res.data);
                        this.collections = res.data.data;
                        this.totalPage = res.data.pages;
                    })
            },
            handleCurrentChange(val) {
                console.log(val);
                this.$http.post('http://47.102.159.98/php/personal/collection.php', qs.stringify({
                        user_id: 'admin',
                        page: val
                    }))
                    .then((res) => {
                        console.log(res.data)
                        this.uploadHistory = res.data.data;
                    })
            },
            toProblemOj(row) {
                console.log(row.problem_id)
                this.$router.push({
                    path: '/problem-oj',
                    query: {
                        problem_id: row.problem_id
                    }
                })
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
        computed: {
            user_id() {
                return this.$store.state.user_id;
            }
        }
    }
</script>


<style scoped>
    .collection-history {
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