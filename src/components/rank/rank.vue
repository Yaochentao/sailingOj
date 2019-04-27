<template>
    <div class="container">
        <div class="rank" :style="{height:(screenHeight-60)+'px'}">
            <h1 class="title">排行榜</h1>
        <!-- <div class="search">
            <el-input placeholder="搜索题目">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div> -->
        <div class="table-con" style="margin: 20px 0 20px 0">
            <el-table :data="rank" stripe style="width: 80%; margin: auto">
                <el-table-column prop="rowno" label="序号" width="180">
                </el-table-column>
                <el-table-column prop="nick" label="昵称" width="180">
                </el-table-column>
                <el-table-column prop="point" label="积分">
                </el-table-column>
                <el-table-column prop="solved" label="通过数量">
                </el-table-column>
            </el-table>
            <div class="pagination-con" style="float: right; margin: 10px 10% 10px 0;">
                <el-pagination style="margin: 20px 0 20px 20px;float: right" :current-page="currentPage" :page-size="10"
                @current-change="handleCurrentChange" background layout="prev, pager, next" :total="this.totalPage*10">
            </el-pagination>
            </div>

        </div>

    </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                screenHeight: document.documentElement.clientHeight, // 屏幕高度
                tableData: [],
                rank: [],
                currentPage: 1,
                totalPage: '',
            }
        },
         mounted() {
            var _this = this
            window.onresize = function () { // 定义窗口大小变更通知事件
                // _this.screenWidth = document.documentElement.clientWidth // 窗口宽度
                _this.screenHeight = document.documentElement.clientHeight // 窗口高度
            }
         },
         created() {
             this.$http.get('http://47.102.159.98/php/ranking-list/ranking-list.php')
             .then((res) => {
                 console.log(res.data)
                 this.rank = res.data.data
             })
         },
         methods: {
             handleCurrentChange(val) {
                console.log(val);
                this.$http.post('http://47.102.159.98/php/ranking-list/ranking-list.php', qs.stringify({
                        page: val,
                    }))
                    .then((res) => {
                        console.log(res.data)
                        this.rank = res.data.data;
                    })
            },
         }
    }
</script>

<style scoped>
    .container {
        width: 960px;
        margin: 0 auto;
        background: #efefef;
    }

    .rank {
        position: relative;
        padding: 20px;
        
    }
    .title {
        padding-bottom: 10px;
        font-size: 28px;
        color: #000;
        border-bottom: 2px solid #41af94;
    }

    .search {
        margin-right: 10%;
        float: right;
        width: 200px;
        margin-bottom: 20px;
    }
</style>