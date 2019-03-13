<template>
    <div class="problem-manage">
        <div class="details-header">
            <h3 class="details-title">题目管理</h3>
            <el-button size='mini' type="primary" style="float: right;margin: 4px -160px 0 0">+上传</el-button>
        </div>
        <el-tabs v-model="activeName" class="table-con" type="card">
            <el-tab-pane label="已有题目" name="first">
                <div>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="date" label="题目编号">
                        </el-table-column>
                        <el-table-column prop="name" label="题目名称">
                        </el-table-column>
                        <el-table-column prop="address" label="上传者">
                        </el-table-column>
                        <el-table-column label="操作">
                            <el-button type="text" size="small">编辑</el-button>
                            <el-button style="color: red" type="text" size="small">删除</el-button>
                        </el-table-column>
                    </el-table>
                    <el-pagination style="margin: 20px 0 20px 20px;float: right" background layout="prev, pager, next"
                        :total="1000">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="待审核题目" name="second">
                <div>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="date" label="题目编号">
                        </el-table-column>
                        <el-table-column prop="name" label="题目名称">
                        </el-table-column>
                        <el-table-column prop="address" label="上传者">
                        </el-table-column>
                        <el-table-column label="操作">
                            <el-button type="text" size="small">通过</el-button>
                            <el-button type="text" size="small">查看</el-button>
                            <el-button type="text" size="small">驳回</el-button>
                        </el-table-column>
                    </el-table>
                    <el-pagination style="margin: 20px 0 20px 20px;float: right" background layout="prev, pager, next"
                        :total="1000">
                    </el-pagination>
                </div>
            </el-tab-pane>
        </el-tabs>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeName: 'first',
                tableData: [{
                    date: '2016-05-02',
                    name: '充值',
                    address: '23',
                    state: '完成'
                }, {
                    date: '2016-05-04',
                    name: '提现',
                    address: '90',
                    state: '完成'
                }, {
                    date: '2016-05-01',
                    name: '充值',
                    address: '200',
                    state: '处理中'
                }, {
                    date: '2016-05-01',
                    name: '充值',
                    address: '200',
                    state: '处理中'
                }, {
                    date: '2016-05-01',
                    name: '充值',
                    address: '200',
                    state: '处理中'
                }, {
                    date: '2016-05-01',
                    name: '充值',
                    address: '200',
                    state: '处理中'
                },  {
                    date: '2016-05-01',
                    name: '充值',
                    address: '200',
                    state: '处理中'
                }, {
                    date: '2016-05-03',
                    name: '充值',
                    address: '516',
                    state: '完成'
                }]
            }
        }
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