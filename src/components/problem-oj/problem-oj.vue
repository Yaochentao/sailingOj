<template>
    <div class="container">
        <div class="problem-oj" :style="{height:(screenHeight-60)+'px'}">
            <div class="header">
                <h2 class="problem-name">{{problem.problem_id}}.{{problem.title}}</h2>
                <el-tag v-if='label[0]' size="small" style="margin-right: 10px">{{label[0]}}</el-tag>
                <el-tag v-if='label[1]' size="small" type="success" style="margin-right: 10px">{{label[1]}}</el-tag>
                <el-tag v-if='label[2]' size="small" type="warning" style="margin-right: 10px">{{label[2]}}</el-tag>
                <span v-if="!ifCollect" style="font-size: 12px; color: #666;cursor: pointer;" @click="collection">收藏</span>
                <span v-if="ifCollect" style="font-size: 12px; color: #666;cursor: pointer;" @click="unCollection">取消收藏</span>
            </div>
            <div class="left-con" :style="{height:(screenHeight-220)+'px'}">
                <el-container style="height: 100%">
                    <el-header style="display: flex;height: 42px; border-bottom: 3px solid #fff">
                        <h3 class="title">题目描述</h3>
                        <div class="block"></div>
                    </el-header>
                    <el-main>
                        <div class="problem-detail">
                            <p class="problem-txt">{{problem.description}}</p>
                            <div class="example card" style="padding: 0">
                                <h2 style="width: 100%;background: #dcdcdc;padding-left: 10px;font-size: 14px;line-height: 2">示例</h2>
                                <div style="padding: 10px;">
                                    <h3 style="color: #00a080;font-size: 15px;">标准输入</h3>
                                    <p class="card">{{problem.input}}</p>
                                    <h3 style="margin-top: 10px;color: #00a080;font-size: 15px;">标准输出</h3>
                                    <p class="card">{{problem.output}}</p>
                                </div>
                            </div>
                        </div>
                    </el-main>

                </el-container>



            </div>
            <div class="right-con" :style="{height:(screenHeight-220)+'px'}">
                <div style="display: flex;height: 39px; border-bottom: 3px solid #fff">
                    <h3 style="margin-left:20px" class="title">编辑代码</h3>
                    <div class="block">
                        <el-select v-model="value" placeholder="请选择" size="mini" class="code-select">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="codemirror-con"><textarea ref="code"></textarea></div>
            </div>
            <div class="btn-con">
                <div class="btn-con-left">
                    <div style="float: right; margin: 10px 10px 0 0">
                        <!-- <el-button size="medium">上一题</el-button>
                        <span> {{problem_id - 999}}/902 </span>
                        <el-button size="medium">下一题</el-button> -->
                        <el-button size="medium" @click="back">返回题目列表</el-button>
                    </div>
                </div>
                <div class="btn-con-right">
                    <div style="float: right; margin: 10px 10px 0 0">
                        <!-- <el-button size="medium" @click="test">执行代码</el-button> -->
                        <el-button size="medium" @click="submit">提交</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import qs from 'qs';
    import "codemirror/theme/duotone-light.css";
    import "codemirror/lib/codemirror.css";

    let CodeMirror = require("codemirror/lib/codemirror");
    require("codemirror/addon/edit/matchbrackets");
    require("codemirror/addon/selection/active-line");
    require("codemirror/mode/clike/clike");
    require("codemirror/addon/hint/show-hint");
    //   require("codemirror/addon/hint/");
    export default {
        data() {
            return {
                problem_id: '',
                solution_id: '',
                label: [],
                problem: {},
                editor: {},
                ifCollect: false,
                options: [{
                    value: '选项1',
                    label: 'c'
                }, {
                    value: '选项2',
                    label: 'c++'
                }, {
                    value: '选项3',
                    label: 'java'
                }, {
                    value: '选项4',
                    label: 'python'
                }, {
                    value: '选项5',
                    label: '.net'
                }],
                value: '选项1',
                screenHeight: document.documentElement.clientHeight // 屏幕高度
            }
        },
        mounted() {
            var _this = this
            window.onresize = function () { // 定义窗口大小变更通知事件
                // _this.screenWidth = document.documentElement.clientWidth // 窗口宽度
                _this.screenHeight = document.documentElement.clientHeight // 窗口高度
            }




            let mime = 'text/x-csrc'
            //let theme = 'ambiance'//设置主题，不设置的会使用默认主题
            let editor = CodeMirror.fromTextArea(this.$refs.code, {
                mode: "text/x-csrc", //c
                lineNumbers: true, //显示行号
                theme: "duotone-light", //设置主题
                lineWrapping: true, //代码折叠
                foldGutter: true,
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                matchBrackets: true, //括号匹配
                //readOnly: true,        //只读

                autofocus: true,
                // extraKeys: {
                //     'Ctrl': 'autocomplete'
                // }, //自定义快捷键
            })
            this.editor = editor;
            editor.setSize('100%', this.screenHeight - 280); //设置代码框的宽高

            editor.setValue("");
            //代码自动提示功能，记住使用cursorActivity事件不要使用change事件，这是一个坑，那样页面直接会卡死
            // editor.on('cursorActivity', function () {
            //   editor.showHint()
            // })
        },
        created() {
            this.getId();
            this.getProblem();
            if (this.user_id.length > 0) {
                this.checkClection();
            } else {
                console.log('unlogin')
            }


        },
        methods: {
            getId() {
                this.problem_id = this.$route.query.problem_id
                console.log(this.problem_id);
            },
            getProblem() {
                this.$http.post('http://47.102.159.98/php/question-bank/problem-content.php', qs.stringify({
                        problem_id: this.$route.query.problem_id
                    }))
                    .then((res) => {
                        this.problem = res.data.data
                        this.label = res.data.label
                    })
            },
            back() {
                this.$router.back();
            },
            submit() {
                if (this.user_id) {
                    let code = this.editor.getValue()
                    console.log(code)
                    this.$http.post('http://47.102.159.98/php/problem/solution-add.php', qs.stringify({
                            user_id: this.user_id,
                            problem_id: this.problem_id,
                            source_code: code,
                            language: '0'
                        }))
                        .then((res) => {
                            console.log(res.data)
                            this.solution_id = res.data.solution_id;
                            var t;
                            clearTimeout(t);
                            let that = this;
                            t = setTimeout(function () {
                                that.getRes();
                            }, 2000)
                        })
                } else {
                    this.$message('请登录再操作');
                }

            },
            test() {
                this.$alert('test', '', {
                    confirmButtonText: '确定',
                    type: 'success'
                })
            },
            getRes() {
                this.$http.post('http://47.102.159.98/php/problem/problem-source-result.php', qs.stringify({
                        solution_id: this.solution_id
                    }))
                    .then((res) => {
                        console.log(res.data);
                        let type = 'error';
                        if (res.data.msg == 'Success!') {
                            this.$alert(res.data.msg, '', {
                                confirmButtonText: '确定',
                                type: 'success'
                            })
                        } else {
                            this.$alert(res.data.error, res.data.msg, {
                                confirmButtonText: '确定',
                                type: 'error'
                            })
                        }

                    })
            },
            collection() {
                console.log('collection')
                this.$http.post('http://47.102.159.98/php/personal/collection.php', qs.stringify({
                        user_id: this.user_id,
                        problem_id: this.problem_id,
                        type: 'collect'
                    }))
                    .then((res) => {
                        console.log(res.data);
                        this.ifCollect = true;
                    })
            },
            unCollection() {
                console.log('unCollection')
                this.$http.post('http://47.102.159.98/php/personal/collection.php', qs.stringify({
                        user_id: this.user_id,
                        problem_id: this.problem_id,
                        type: 'delete'
                    }))
                    .then((res) => {
                        console.log(res.data);
                        this.ifCollect = false;
                    })
            },
            checkClection() {
                this.$http.post('http://47.102.159.98/php/personal/check-collect.php', qs.stringify({
                        user_id: this.user_id,
                        problem_id: this.problem_id,
                    }))
                    .then((res) => {
                        console.log(res.data)
                        this.ifCollect = res.data.code == 1 ? true : false;
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
    .container {
        width: 960px;
        margin: 0 auto;
        background: #efefef;
    }

    .problem-oj {
        height: 100%;
        width: 100%;
        background: #fff;
    }

    .header {
        padding: 20px 2% 0 2%;
        width: 96%;
        height: 80px;
        background: #efefef;
        margin-bottom: 3px;
    }

    .problem-name {
        font-size: 26px;
    }

    .problem-txt {
        font-size: 14px;
    }

    .btn-con {
        width: 100%;
        height: 60px;
        border-top: 3px solid #fff;
    }

    .btn-con-left {
        height: 100%;
        display: inline-block;
        vertical-align: top;
        width: 49.5%;
        margin-right: 0.5%;
        background: #efefef;
    }

    .btn-con-right {
        height: 100%;
        display: inline-block;
        vertical-align: top;
        width: 49.5%;
        margin-left: 0.5%;
        background: #efefef;
    }

    .left-con {
        vertical-align: top;
        display: inline-block;
        width: 49.5%;
        margin-right: 0.5%;
        background: #efefef;
    }

    .right-con {
        vertical-align: top;
        display: inline-block;
        width: 49.5%;
        margin-left: 0.5%;
        background: #efefef;
    }

    .code-select {
        float: right;
        margin-top: 8px;
    }

    .title {
        width: 80px;
        line-height: 40px;
        border-right: 3px solid #fff;
    }

    .card {

        padding: 2%;
        border-radius: 5px;
        border: 1px solid #bfbfbf;
    }

    .codemirror-con {
        position: relative;
        width: 100%;
    }

    .block {
        flex: 1
    }
</style>