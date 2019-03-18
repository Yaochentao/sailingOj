<template>
    <div class="tab-manage">
        <div class="details-header">
            <h3 class="details-title">标签管理</h3>
            <el-button v-if="!closable" size='mini' type="text" style="float: right;margin: 4px 10px 0 0" @click="chengeCloseble">编辑</el-button>
            <el-button v-if="closable" size='mini' type="text" style="float: right;margin: 4px 10px 0 0" @click="chengeCloseble">取消编辑</el-button>
        </div>
        <div class="card-list">
            <el-card shadow="always" style="width: 100%;height: 100%">
                <div slot="header" class="clearfix">
                    <span>现有标签</span>
                </div>
                <div style="height: 450px;width: 100%;">
                    <el-scrollbar style="height: 100%">
                        <div>
                            <el-card style="width: 99%;margin-bottom: 10px;">
                                <div class="tag-group">
                                    知识点
                                    <el-button size='mini' type="text" style="float: right;margin: 4px 10px 0 0" @click="addTag('基础算法')">添加</el-button>
                                </div>
                                <el-tag v-for="item in labelGroup1" :key="item.label_id" :closable="closable" size="small"
                                    style="margin: 5px" @click="editTag(item.label_id)" @close="deleteTag(item.label_id)">{{item.content}}</el-tag>
                            </el-card>
                            <el-card style="width: 99%;margin-bottom: 10px;">
                                <div class="tag-group">
                                    排序
                                    <el-button size='mini' type="text" style="float: right;margin: 4px 10px 0 0" @click="addTag('排序')">添加</el-button>
                                    </div>
                                <el-tag type="success" v-for="item in labelGroup2" :key="item.label_id" :closable="closable"
                                    size="small" style="margin: 5px" @click="editTag(item.label_id)" @close="deleteTag(item.label_id)">{{item.content}}</el-tag>
                            </el-card>
                            <el-card style="width: 99%;margin-bottom: 10px;">
                                <div class="tag-group">
                                    查找
                                    <el-button size='mini' type="text" style="float: right;margin: 4px 10px 0 0" @click="addTag('查找')">添加</el-button>
                                </div>
                                <el-tag type="warning" v-for="item in labelGroup3" :key="item.label_id" :closable="closable"
                                    size="small" style="margin: 5px" @click="editTag(item.label_id)" @close="deleteTag(item.label_id)">{{item.content}}</el-tag>
                            </el-card>
                        </div>
                    </el-scrollbar>
                </div>

            </el-card>
        </div>
    </div>
</template>
<script>
    import qs from 'qs'
    export default {
        data() {
            return {
                closable: false,
                labelGroup1: null,
                labelGroup2: null,
                labelGroup3: null
            }
        },
        created() {
            this.getLabel();
        },
        methods: {
            chengeCloseble() {
                this.closable = !this.closable;
            },
            getLabel() {
                this.$http.get('http://47.102.159.98/php/question-bank/label-group.php')
                    .then((res) => {
                        this.labelGroup1 = res.data.基础算法;
                        this.labelGroup2 = res.data.排序;
                        this.labelGroup3 = res.data.查找;
                    })
            },
            editTag(label_id) {
                if (!this.closable) {
                    return
                }
                console.log('edit');
                this.$prompt('请输入新标签名', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({
                    value
                }) => {
                    this.$http.post('http://47.102.159.98/php/administrator/update-label.php', qs.stringify({
                            label_id: label_id,
                            content: value,
                        }))
                        .then((res) => {
                            this.getLabel();
                            this.$message({
                                type: 'success',
                                message: '成功修改‘' + value + '’标签'
                            });
                        })

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            addTag(group) {
                this.$prompt('请输入标签名', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({
                    value
                }) => {
                    
                    this.$http.post('http://47.102.159.98/php/administrator/newlabel.php', qs.stringify({
                            // label_id: label_id,
                            content: value,
                            group: group
                        }))
                        .then((res) => {
                            this.getLabel();
                            this.$message({
                                type: 'success',
                                message: '成功添加‘' + value + '’标签'
                            });
                        })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            deleteTag(label_id) {
                console.log('delete');
                this.$confirm('此操作将永久删除该标签, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$http.post('http://47.102.159.98/php/administrator/Delete-tag.php',qs.stringify({
                        label_id: label_id
                    }))
                    .then((res) => {
                        this.getLabel();
                        this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    })
                    
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
    }
</script>


<style scoped>
    .tab-manage {
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

    .card-list {
        margin: 20px auto;
        width: 90%;
        height: 80%;
    }

    .tag-group {
        margin: -10px 0 5px 0;
    }
</style>