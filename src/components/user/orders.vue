<template>
    <div class="orders">
        <div class="details-header">
            <h3 class="details-title">我的订单</h3>
            <span style="margin-left: 10px;color: #8d8d8d;font-size: 14px;">余额 : 123</span>
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
                currentPage: 1,
                totalPage: '',
            }
        },
        created() {
            this.$http.post('http://47.102.159.98/php/personal/indent-show.php', qs.stringify({
                    user_id: this.user_id
                }))
                .then((res) => {
                    console.log(res.data);
                    let orders = res.data.data;
                    for (let i = 0; i < res.data.data.length; i++) {
                        if (orders[i].type == 0) {
                            orders[i].type = '充值'
                        } else if (orders[i].type == 1) {
                            orders[i].type = '提现'
                        }
                        if (orders[i].state == 0) {
                            orders[i].state = '待处理'
                        } else if (orders[i].state == 1) {
                            orders[i].state = '已处理'
                        } else if (orders[i].state == 2) {
                            orders[i].state = '未通过'
                        }
                    }
                    this.orders = orders;
                    this.totalPage = res.data.pages;
                })
        },
        methods: {
            handleCurrentChange(val) {
                console.log(val);
                this.$http.post('http://47.102.159.98/php/personal/indent-show.php', qs.stringify({
                        page: val,
                        user_id: this.user_id
                    }))
                    .then((res) => {
                        console.log(res.data);
                        this.orders = res.data.data;
                    })
            },
            pass(row) {
                console.log(row)
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