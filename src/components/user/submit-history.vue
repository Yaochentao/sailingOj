<template>
    <div class="submit-history">
        <div class="details-header">
            <h3 class="details-title">做题记录</h3>
        </div>
        <div class="table-con">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="address" label="题目id">
                </el-table-column>
                <el-table-column prop="name" label="题目名称">
                </el-table-column>
                <el-table-column prop="date" label="提交时间">
                </el-table-column>
                <el-table-column prop="state" label="结果">
                </el-table-column>
            </el-table>
            <el-pagination style="margin: 20px 0 20px 20px;float: right" background layout="prev, pager, next" :total="1000">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: 'A+BProblem',
                    address: '23',
                    state: '正确'
                }, {
                    date: '2016-05-04',
                    name: '虫食算',
                    address: '90',
                    state: '正确'
                }, {
                    date: '2016-05-01',
                    name: '统计单词个数',
                    address: '200',
                    state: '正确'
                }, {
                    date: '2016-05-03',
                    name: '取数游戏',
                    address: '516',
                    state: '正确'
                }]
            }
        }
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

