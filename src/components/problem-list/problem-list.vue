<template>
    <div class="container">
        <div class="problem-list">
        <div class="left-con">
            <h1 class="title">题库列表</h1>
            <div class="table-con" style="margin: 20px 0 20px 0" @click="toProblemOj">
                <el-table :data="tableData" stripe style="width: 100%;">
                    <el-table-column prop="date" label="序号" width="60">
                    </el-table-column>
                    <el-table-column prop="name" label="题目名称">
                    </el-table-column>
                    <el-table-column width='240'>
                        <template>
                            <el-tag size="small" style="margin-right: 3px">字符串</el-tag>
                            <el-tag size="small" type="success" style="margin-right: 3px">2019</el-tag>
                            <el-tag size="small" type="warning" style="margin-right: 3px">NOI系列</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column prop="address" label="正确率">
                    </el-table-column>
                    <el-table-column prop="address" label="热度">
                    </el-table-column>
                </el-table>
                <div class="pagination-con" style="float: right; margin: 10px 0 10px 0;">
                    <el-pagination background layout="prev, pager, next" :total="1000">
                    </el-pagination>
                </div>

            </div>
        </div>
        <div class="right-con">
            <span class="uploadBtn">上传题目</span>
            <div class="serch-con card">
                <el-input size="small" placeholder="搜索题目" style="margin: 10px 0 10px 0">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <el-radio-group v-model="radio2">
                    <el-radio :label="1">默认排序</el-radio>
                    <el-radio :label="3">按热度排序</el-radio>
                    <el-radio :label="6">按名称排序</el-radio>
                    <el-radio :label="9">按正确率排序</el-radio>
                </el-radio-group>
            </div>
            <div class="card">
                <h3 class="card-title" style="font-size: 18px;color: #000;line-height: 30px">知识点</h3>
                <el-tag size="small" style="margin-right: 5px">数组</el-tag>
                <el-tag size="small" style="margin-right: 5px">动态规划</el-tag>
                <el-tag size="small" style="margin-right: 5px">字符串</el-tag>
                <el-tag size="small" style="margin-right: 5px">树</el-tag>
                <el-tag size="small" style="margin-right: 5px">排序</el-tag>
                <el-tag size="small" style="margin-right: 5px">数组</el-tag>
                <el-tag size="small" style="margin-right: 5px">树</el-tag>
                <el-tag size="small" style="margin-right: 5px">动态规划</el-tag>
                <el-tag size="small" style="margin-right: 5px">字符串</el-tag>
                <el-tag size="small" style="margin-right: 5px">树</el-tag>
                <el-tag size="small" style="margin-right: 5px">排序</el-tag>
            </div>
            <div class="card">
                <h3 class="card-title" style="font-size: 18px;color: #000;line-height: 30px">时间</h3>
                <el-tag size="small" type="success" style="margin-right: 5px">2018</el-tag>
                <el-tag size="small" type="success" style="margin-right: 5px">2016</el-tag>
                <el-tag size="small" type="success" style="margin-right: 5px">2003</el-tag>
                <el-tag size="small" type="success" style="margin-right: 5px">2132</el-tag>
                <el-tag size="small" type="success" style="margin-right: 5px">1111</el-tag>
                <el-tag size="small" type="success" style="margin-right: 5px">2012</el-tag>
                <el-tag size="small" type="success" style="margin-right: 5px">2012</el-tag>
                <el-tag size="small" type="success" style="margin-right: 5px">4211</el-tag>
                <el-tag size="small" type="success" style="margin-right: 5px">2012</el-tag>
                <el-tag size="small" type="success" style="margin-right: 5px">1234</el-tag>
                <el-tag size="small" type="success" style="margin-right: 5px">2012</el-tag>
            </div>
            <div class="card">
                <h3 class="card-title" style="font-size: 18px;color: #000;line-height: 30px">赛事</h3>
                <el-tag size="small" type="warning" style="margin-right: 5px">数组</el-tag>
                <el-tag size="small" type="warning" style="margin-right: 5px">数组</el-tag>
                <el-tag size="small" type="warning" style="margin-right: 5px">数组</el-tag>
                <el-tag size="small" type="warning" style="margin-right: 5px">数组</el-tag>
                <el-tag size="small" type="warning" style="margin-right: 5px">数组</el-tag>
                <el-tag size="small" type="warning" style="margin-right: 5px">数组</el-tag>
                <el-tag size="small" type="warning" style="margin-right: 5px">数组</el-tag>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                radio2: '',
                tableData: [{
                    date: '1',
                    name: 'A+B',
                    address: '100'
                }, {
                    date: '2',
                    name: 'A+B',
                    address: '123'
                }, {
                    date: '3',
                    name: 'A+B',
                    address: '4213'
                }, {
                    date: '4',
                    name: 'A+B',
                    address: '4213'
                }, {
                    date: '5',
                    name: 'A+B',
                    address: '4213'
                }, {
                    date: '6',
                    name: 'A+B',
                    address: '4213'
                }, {
                    date: '7',
                    name: 'A+B',
                    address: '4213'
                }, {
                    date: '8',
                    name: 'A+B',
                    address: '4213'
                }, {
                    date: '9',
                    name: 'A+B',
                    address: '123'
                }]
            }
        },
        methods: {
            toProblemOj() {
                this.$router.push('/problem-oj')
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
        -moz-box-shadow:2px 2px 5px #a1a1a1;
        -webkit-box-shadow:2px 2px 5px #a1a1a1;
        box-shadow:2px 2px 5px #a1a1a1;
    }
</style>