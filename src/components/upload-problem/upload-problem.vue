<template>
    <div class="upload-problem">
        <div class="container" :style="{minHeight:(screenHeight-60)+'px'}">
            <div class="header">贡献题目</div>
            <div class="input-con">
                <h4>题目名称</h4>
                <el-input type="textarea" :rows="1" placeholder="请输入题目名称" v-model="title">
                </el-input>
                <h4>题目描述</h4>
                <el-input type="textarea" :rows="3" placeholder="请输入题目描述" v-model="description">
                </el-input>
                <h4>题目标签（选填）</h4>
                <el-select v-model="SelectTags" multiple placeholder="请选择" :multiple-limit='limit' style="width: 100%">
                    <el-option-group v-for="group in options" :key="group.label" :label="group.label">
                        <el-option v-for="item in group.options" :key="item.label_id" :label="item.content"
                            :value="item.label_id">
                        </el-option>
                    </el-option-group>
                </el-select>
                <h4>输入</h4>
                <el-input type="textarea" :rows="2" placeholder="请输入输入" v-model="input">
                </el-input>
                <h4>输出</h4>
                <el-input type="textarea" :rows="2" placeholder="请输入输出" v-model="output">
                </el-input>
                <h4>标准输入</h4>
                <el-input type="textarea" :rows="2" placeholder="输入样本" v-model="sample_input">
                </el-input>
                <h4>标准输出</h4>
                <el-input type="textarea" :rows="2" placeholder="输出样本" v-model="sample_output">
                </el-input>
                <h4>提示（选填）</h4>
                <el-input type="textarea" :rows="2" placeholder="请输入提示" v-model="hint">
                </el-input>
                <el-button style="margin-top: 20px;float: right" size="medium" @click="upload">提交</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import qs from 'qs'
    export default {
        data() {
            return {
                textarea: '',
                title: '',
                description: '',
                input: '',
                output: '',
                sample_input: '',
                sample_output: '',
                hint: '',
                limit: 3,
                screenHeight: document.documentElement.clientHeight, // 屏幕高度
                options: [{
                    label: '基础算法',
                    options: []
                }, {
                    label: '排序',
                    options: []
                }, {
                    label: '查找',
                    options: []
                }],
                SelectTags: [],

            }
        },
        mounted() {
            var _this = this
            window.onresize = function () { // 定义窗口大小变更通知事件
                // _this.screenWidth = document.documentElement.clientWidth // 窗口宽度
                _this.screenHeight = document.documentElement.clientHeight // 窗口高度
            };
        },
        created() {
            this.$http.get('http://47.102.159.98/php/question-bank/label-group.php')
                .then((res) => {
                    console.log(res.data);
                    this.options[0].options = res.data.基础算法;
                    this.options[1].options = res.data.排序;
                    this.options[2].options = res.data.查找;
                })
        },
        methods: {
            upload() {
                this.$http.post('http://47.102.159.98/php/question-bank/problem-add.php', qs.stringify({
                        user_id: this.user_id,
                        title: this.title,
                        time_limit: '2',
                        memory_limit: '32',
                        label: this.label_string,
                        description: this.description,
                        input: this.input,
                        output: this.output,
                        sample_input: this.sample_input,
                        sample_output: this.sample_output,
                        hint: this.hint,
                        source: '',
                        spj: 0
                    }))
                    .then((res) => {
                        console.log(res.data.code)
                        if (res.data.code == 1) {
                            this.$message({
                                message: '上传成功',
                                type: 'success'
                            });
                        }
                    })
            }
        },
        computed: {
            user_id() {
                return this.$store.state.user_id;
            },
            label_string() {
                let string_1 = '';
                for (let i = 0; i < this.SelectTags.length; i++) {
                    if (string_1.length > 0) {
                        string_1 = this.SelectTags[i] + ',' + string_1;
                    } else {
                        string_1 = this.SelectTags[i] + string_1;
                    }
                }
                return string_1;
            }
        }
    }
</script>

<style scoped>
    h4 {
        line-height: 2;
        margin: 10px 0;
    }

    .container {
        width: 960px;
        margin: 0 auto;
        background: #efefef;
        overflow: hidden;
        padding: 40px;
    }

    .header {
        padding-bottom: 10px;
        width: 100%;
        border-bottom: 2px solid #2e9d81;
        font-size: 20px;
        margin-bottom: 20px;
    }

    .input-con {
        width: 100%;
        margin: 0 auto;

    }
</style>