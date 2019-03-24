<template>
    <div class="problem-manage">
        <div class="details-header">
            <h3 class="details-title">题目管理</h3>
            <el-button size='mini' type="primary" style="float: right;margin: 4px -160px 0 0">+上传</el-button>
        </div>
                <div class="table-con">
                    <el-input size="small" placeholder="搜索题目" style="margin: 10px 0 10px 0" v-model="searchValue">
                        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
                    </el-input>
                    <el-table :data="problems" style="width: 100%" @row-click="toProblemDetail">
                        <el-table-column prop="problem_id" label="题目编号">
                        </el-table-column>
                        <el-table-column prop="title" label="题目名称">
                        </el-table-column>
                        <el-table-column prop="user_id" label="上传者">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button v-if="scope.row.defunct == 1"  type="text" size="small" @click="pass(scope.row)">通过</el-button>
                                <el-button v-if="scope.row.defunct == 1"  type="text" size="small" @click="pass(scope.row)">不通过</el-button>
                                <el-button v-if="scope.row.defunct == 0" style="color: red" type="text" size="small" @click="deleteProblem(scope.row)">删除</el-button>
                            </template>
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
                activeName: 'first',
                problems: [],
                currentPage: 1,
                totalPage: '',
                searchValue: '',
            }
        },
        created() {
            this.getProblemList();
        },
        methods: {
            getProblemList() {
                this.$http.post('http://47.102.159.98/php/administrator/problem-list.php',qs.stringify({
                    type: 'show'
                }))
                    .then((res) => {
                        console.log(res.data);
                        this.problems = res.data.data;
                        this.totalPage = res.data.pages;
                    })
            },
            handleCurrentChange(val) {
                console.log(val);
                this.$http.post('http://47.102.159.98/php/administrator/problem-list.php', qs.stringify({
                        page: val,
                        type: 'show'
                    }))
                    .then((res) => {
                        console.log(res.data)
                        this.problems = res.data.data;
                    })
            },
            deleteProblem(problem) {
                console.log(problem)
                this.$http.post('http://47.102.159.98/php/administrator/problem-list.php',qs.stringify({
                    type: 'delete',
                    problem_id: problem.problem_id
                }))
                    .then((res) => {
                        console.log(res.data);
                        this.getProblemList();
                    })
            },
            pass(problem) {
                this.$http.post('http://47.102.159.98/php/administrator/problem-list.php',qs.stringify({
                    type: 'pass',
                    problem_id: problem.problem_id
                }))
                    .then((res) => {
                        console.log(res.data);
                        this.getProblemList();
                    })
            },
            toProblemDetail(row) {
                console.log(row.problem_id)
                this.$router.push({
                    path: '/problem-detail',
                    query: {
                        problem_id: row.problem_id
                    }
                })
            },
            search() {
                this.$http.post('http://47.102.159.98/php/question-bank/search.php',qs.stringify({
                    string: this.searchValue
                }))
                .then((res) => {
                    this.problems = res.data.data;
                    this.totalPage = res.data.pages
                })
            }
        },

    }
</script>


<style scoped>
    .problem-manage {
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