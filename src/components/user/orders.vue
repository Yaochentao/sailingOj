<template>
    <div class="orders">
        <div class="details-header">
            <h3 class="details-title">我的订单</h3>
            <span style="margin-left: 10px;color: #8d8d8d;font-size: 14px;">余额 : 123</span>
        </div>
        <div class="table-con">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="日期">
                </el-table-column>
                <el-table-column prop="name" label="操作类型">
                </el-table-column>
                <el-table-column prop="address" label="金额">
                </el-table-column>
                <el-table-column prop="state" label="订单状态">
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
    .orders {
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