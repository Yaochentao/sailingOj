<template>
    <div class="collection-history">
        <div class="details-header">
            <h3 class="details-title">我的收藏</h3>
        </div>
        <div class="table-con">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="address" label="题目id">
                </el-table-column>
                <el-table-column prop="name" label="题目名称">
                </el-table-column>
                <el-table-column width='240' label="标签">
                        <template>
                            <el-tag size="small" style="margin-right: 3px">字符串</el-tag>
                            <el-tag size="small" type="success" style="margin-right: 3px">2019</el-tag>
                            <el-tag size="small" type="warning" style="margin-right: 3px">NOI系列</el-tag>
                        </template>
                    </el-table-column>
                <el-table-column prop="state" label="热度">
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
                    state: '21321'
                }, {
                    date: '2016-05-04',
                    name: '虫食算',
                    address: '90',
                    state: '213'
                }, {
                    date: '2016-05-01',
                    name: '统计单词个数',
                    address: '200',
                    state: '344'
                }, {
                    date: '2016-05-03',
                    name: '取数游戏',
                    address: '516',
                    state: '1'
                }]
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



