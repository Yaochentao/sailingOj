<template>
    <div class="container">
        <div class="problem-list" :style="{height:(screenHeight-60)+'px'}">
            <div class="left-con">
                <h1 class="title">题库列表</h1>
                <div class="table-con" style="margin: 20px 0 20px 0">
                    <el-table :data="problems" stripe style="width: 100%;" @row-click="toProblemOj">
                        <el-table-column sortable prop="problem_id" label="序号" width="100">
                        </el-table-column>
                        <el-table-column prop="title" label="题目名称">
                        </el-table-column>
                        <el-table-column width='240' label="标签">
                            <template slot-scope="scope">
                                <el-tag v-if='scope.row.label[0]' size="small" style="margin-right: 3px">{{scope.row.label[0]}}</el-tag>
                                <el-tag v-if='scope.row.label[1]' size="small" type="success" style="margin-right: 3px">{{scope.row.label[1]}}</el-tag>
                                <el-tag v-if='scope.row.label[2]' size="small" type="warning" style="margin-right: 3px">{{scope.row.label[2]}}</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column sortable prop="ac" label="正确率">
                        </el-table-column>
                        <el-table-column sortable prop="sum" label="热度">
                        </el-table-column>
                    </el-table>
                    <div class="pagination-con" style="float: right; margin: 10px 0 10px 0;">
                        <el-pagination style="margin: 20px 0 20px 20px;float: right" :current-page="currentPage" :page-size="10" @current-change="handleCurrentChange"
                background layout="prev, pager, next" :total="this.totalPage*10">
            </el-pagination>
                    </div>

                </div>
            </div>
            <div class="right-con">
                <router-link to="/upload-problem"><span class="uploadBtn">上传题目</span></router-link>
                <div class="serch-con card">
                    <el-input size="small" placeholder="搜索题目" style="margin: 10px 0 10px 0" v-model="searchValue">
                        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
                    </el-input>
                    <!-- <el-radio-group v-model="rankType" @change="changeProblem">
                        <el-radio :label="1">按题号排序</el-radio>
                        <el-radio :label="2">按热度排序</el-radio>
                        <el-radio :label="3">按名称排序</el-radio>
                        <el-radio :label="4">按正确率排序</el-radio>
                    </el-radio-group> -->
                </div>
                <div class="card">
                    <h3 class="card-title" style="font-size: 18px;color: #000;line-height: 30px">基础算法</h3>
                    <el-tag v-for="item in tags.基础算法" v-bind:key="item.label_id" size="small" style="margin-right: 5px">{{item.content}}</el-tag>
                </div>
                <div class="card">
                    <h3 class="card-title" style="font-size: 18px;color: #000;line-height: 30px">排序</h3>
                    <el-tag v-for="item in tags.排序" v-bind:key="item.label_id" size="small" type="success" style="margin-right: 5px">{{item.content}}</el-tag>

                </div>
                <div class="card">
                    <h3 class="card-title" style="font-size: 18px;color: #000;line-height: 30px">查找</h3>
                    <el-tag v-for="item in tags.查找" v-bind:key="item.label_id" size="small" type="warning" style="margin-right: 5px">{{item.content}}</el-tag>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import qs from 'qs'
    export default {
        data() {
            return {
                searchValue: '',
                currentPage: 1,
                totalPage: '',
                tags: [],
                problems: [],
                rankType: '1',
                tableData: [],
                screenHeight: document.documentElement.clientHeight // 屏幕高度
            }
        },
        created() {
            this.$http.get('http://47.102.159.98/php/question-bank/label-group.php')
                .then((res) => {
                    this.tags = res.data;
                })
            this.getProblems('problem_id');

            var _this = this
            window.onresize = function () { // 定义窗口大小变更通知事件
                // _this.screenWidth = document.documentElement.clientWidth // 窗口宽度
                _this.screenHeight = document.documentElement.clientHeight // 窗口高度
            }

        },
        methods: {
            getProblems(rankType) {
                this.$http.post('http://47.102.159.98/php/question-bank/question-bank-list.php', qs.stringify({
                    'rank.type': rankType
                }))
                .then((res) => {
                    this.problems = res.data.data;
                    this.totalPage = res.data.pages
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
            changeProblem() {
                if(this.rankType == 1) {
                    this.getProblems('problem_id');
                }else if(this.rankType == 2) {
                    this.getProblems('submit');
                }else if(this.rankType == 3) {
                    this.getProblems('title');
                }else if(this.rankType == 4) {
                    this.getProblems('ac');
                }
            },
            search() {
                this.$http.post('http://47.102.159.98/php/question-bank/search.php',qs.stringify({
                    string: this.searchValue
                }))
                .then((res) => {
                    this.problems = res.data.data;
                })
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.$http.post('http://47.102.159.98/php/question-bank/question-bank-list.php', qs.stringify({
                    'rank.type': 'problem_id',
                    page: val
                }))
                .then((res) => {
                    this.problems = res.data.data;
                })
            }
        }
    }
</script>
<style scoped>
    .container {
        width: 960px;
        margin: 0 auto;
        background: #efefef;
    }

    .problem-list {
        padding: 2%;
        width: 96%;
        position: relative;
        display: flex;
    }

    .left-con {
        width: 680px;
        margin-right: 30px;
    }

    .title {
        padding-bottom: 10px;
        font-size: 28px;
        color: #000;
        border-bottom: 2px solid #41af94;
    }

    .right-con {
        flex: 1;
    }

    .uploadBtn {
        margin: 53px 0 20px 0;
        display: inline-block;
        width: 98%;
        height: 42px;
        border-radius: 14px;
        background: #41af94;
        color: #fff;
        font-size: 18px;
        line-height: 42px;
        text-align: center;
        cursor: pointer;
    }

    .card {
        width: 90%;
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 5px;
        background: #fff;
        -moz-box-shadow: 2px 2px 5px #a1a1a1;
        -webkit-box-shadow: 2px 2px 5px #a1a1a1;
        box-shadow: 2px 2px 5px #a1a1a1;
    }
</style>