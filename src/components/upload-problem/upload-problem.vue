<template>
    <div class="upload-problem">
        <div class="container" :style="{minHeight:(screenHeight-60)+'px'}">
            <div class="header">贡献题目</div>
            <div class="input-con">
                <h4>题目名称</h4>
                <el-input type="textarea" :rows="1" placeholder="请输入题目名称" v-model="textarea">
                </el-input>
                <h4>题目描述</h4>
                <el-input type="textarea" :rows="3" placeholder="请输入题目描述" v-model="textarea">
                </el-input>
                <h4>输入</h4>
                <el-input type="textarea" :rows="2" placeholder="请输入输入" v-model="textarea">
                </el-input>
                <h4>输出</h4>
                <el-input type="textarea" :rows="2" placeholder="请输入输出" v-model="textarea">
                </el-input>
                <h4>标准输入</h4>
                <el-input type="textarea" :rows="2" placeholder="请输入标准输入" v-model="textarea">
                </el-input>
                <h4>标准输出</h4>
                <el-input type="textarea" :rows="2" placeholder="请输入标准输出" v-model="textarea">
                </el-input>
                <h4>提示</h4>
                <el-input type="textarea" :rows="2" placeholder="请输入提示" v-model="textarea">
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
                screenHeight: document.documentElement.clientHeight, // 屏幕高度
                activeTab: '一对一'
            }
        },
        mounted() {
            var _this = this
            window.onresize = function () { // 定义窗口大小变更通知事件
                // _this.screenWidth = document.documentElement.clientWidth // 窗口宽度
                _this.screenHeight = document.documentElement.clientHeight // 窗口高度
            };
        },
        methods: {
            upload() {
                this.$http.post('http://47.102.159.98/php/question-bank/problem-add.php', qs.stringify({
                        user_id: this.user_id,
                        title: '12321321',
                        time_limit: '2',
                        memory_limit: '32',
                        label: '1,2',
                        description: '213',
                        input: '12',
                        output: '2',
                        sample_input: '213',
                        sample_output: '213',
                        hint: '213',
                        source: '213',
                        spj: 0
                    }))
                    .then((res) => {
                        console.log(res.data)
                    })
            }
        },
        computed: {
            user_id() {
                return this.$store.state.user_id;
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