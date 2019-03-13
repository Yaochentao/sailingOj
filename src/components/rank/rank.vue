<template>
    <div class="container">
        <div class="rank" :style="{height:(screenHeight-60)+'px'}">
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
                <el-table-column prop="point" label="通过数量">
                </el-table-column>
                <el-table-column prop="solved" label="积分">
                </el-table-column>
            </el-table>
            <div class="pagination-con" style="float: right; margin: 10px 10% 10px 0;">
                <el-pagination background layout="prev, pager, next" :total="1">
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
                rank: []
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
             this.$http.get('http://118.25.176.42/php/ranking-list/ranking-list.php')
             .then((res) => {
                 console.log(res.data)
                 this.rank = res.data.data
             })
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

    .search {
        margin-right: 10%;
        float: right;
        width: 200px;
        margin-bottom: 20px;
    }
</style>