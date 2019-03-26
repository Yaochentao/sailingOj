<template>
    <div class="orders">
        <div class="details-header">
            <h3 class="details-title">订单管理</h3>
        </div>
        <div class="table-con">
            <el-table :data="orders" style="width: 100%">
                <el-table-column prop="in_date" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="type" label="操作类型" width="100">
                </el-table-column>
                <el-table-column prop="alipay" label="账号">
                </el-table-column>
                <el-table-column prop="state" label="订单状态" width="100">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button v-if="scope.row.state == '待处理'" type="text" size="small" @click="pass(scope.row)">处理
                        </el-button>
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
                orders: [],
                _orders: [],
                currentPage: 1,
                totalPage: '',
            }
        },
        created() {
            this.getOrders();
        },
        methods: {
            getOrders() {
                this.$http.post('http://47.102.159.98/php/administrator/Order-management.php', qs.stringify({
                    user_id: this.user_id
                }))
                .then((res) => {
                    // console.log(res.data);
                    this._orders = res.data.data;
                    this.orders = res.data.data;
                    console.log(this._orders)
                    for (let i = 0; i < res.data.data.length; i++) {
                        if (this._orders[i].type == 0) {
                            this.orders[i].type = '充值'
                        } else if (this._orders[i].type == 1) {
                            this.orders[i].type = '提现'
                        }
                        if (this._orders[i].state == 0) {
                            this.orders[i].state = '待处理'
                        } else if (this._orders[i].state == 1) {
                            this.orders[i].state = '已处理'
                        } else if (this._orders[i].state == 2) {
                            this.orders[i].state = '未通过'
                        }
                    }
                    this.totalPage = res.data.pages;
                    console.log(this._orders)
                })
            },
            handleCurrentChange(val) {
                console.log(val);
                this.$http.post('http://47.102.159.98/php/administrator/Order-management.php', qs.stringify({
                        page: val,
                        user_id: this.user_id
                    }))
                    .then((res) => {
                        console.log(res.data);
                        this.orders = res.data.data;
                    })
            },
            pass(row) {
                console.log(row);
                if (row.type == '充值') {
                    this.$prompt('请输入充值金额', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                    }).then(({
                        value
                    }) => {
                        this.$http.post('http://47.102.159.98/php/administrator/indent-judge.php', qs
                                .stringify({
                                    indent_id: row.indent_id,
                                    state: 1,
                                    type: 0,
                                    amount: value,
                                    user_id: this.user_id
                                }))
                            .then((res) => {
                                this.$message({
                                    type: 'success',
                                    message: '处理成功'
                                });
                            })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '取消'
                        });
                    });
                } else if (row.type == '提现') {
                    this.$confirm('确认操作', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$http.post('http://47.102.159.98/php/administrator/indent-judge.php', qs
                                .stringify({
                                    indent_id: row.indent_id,
                                    state: 1,
                                    type: 1,
                                    amount: row.amount,
                                    user_id: this.user_id
                                }))
                            .then((res) => {
                                this.$message({
                                    type: 'success',
                                    message: '处理成功'
                                });
                            })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消'
                        });
                    });
                };
                this.getOrders();
            }
        },
        computed: {
            user_id() {
                return this.$store.state.user_id
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