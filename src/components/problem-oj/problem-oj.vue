<template>
    <div class="container">
        <div class="problem-oj" :style="{height:(screenHeight-60)+'px'}">
        <div class="header">
            <h2 class="problem-name">1.两数之和</h2>
            <el-tag size="small" style="margin-right: 10px">字符串</el-tag>
            <el-tag size="small" type="success" style="margin-right: 10px">2019</el-tag>
            <el-tag size="small" type="warning" style="margin-right: 10px">NOI系列</el-tag>
            <span style="font-size: 12px; color: #666">收藏</span>
        </div>
        <div class="left-con" :style="{height:(screenHeight-220)+'px'}">
            <el-container style="height: 100%">
                <el-header style="display: flex;height: 42px; border-bottom: 3px solid #fff">
                    <h3 class="title">题目描述</h3>
                    <div class="block"></div>
                </el-header>
                <el-main>
                    <div class="problem-detail">
                        <p class="problem-txt">给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和
                            为目标值的那 两个 整数，并返回他们的数组下标。
                            你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组
                            中同样的元素。
                        </p>
                        <div class="example card" style="padding: 0">
                            <h2 style="width: 100%;background: #dcdcdc;padding-left: 10px;font-size: 14px;line-height: 2">示例</h2>
                            <div style="padding: 10px;">
                                <h3 style="color: #00a080;font-size: 15px;">标准输入</h3>
                                <p class="card">nums = [2, 7, 11, 15], target = 9</p>
                                <h3 style="margin-top: 10px;color: #00a080;font-size: 15px;">标准输出</h3>
                                <p class="card">[0,1]</p>
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
                    <el-button size="medium">上一题</el-button>
                    <span> 1/902 </span>
                    <el-button size="medium">下一题</el-button>
                </div>
            </div>
            <div class="btn-con-right">
                <div style="float: right; margin: 10px 10px 0 0">
                    <el-button size="medium">执行代码</el-button>
                    <el-button size="medium">提交</el-button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
    import "codemirror/theme/duotone-light.css";
    import "codemirror/lib/codemirror.css";

    let CodeMirror = require("codemirror/lib/codemirror");
    require("codemirror/addon/edit/matchbrackets");
    require("codemirror/addon/selection/active-line");
    require("codemirror/mode/clike/clike");
    require("codemirror/addon/hint/show-hint");
    //   require("codemirror/addon/hint/");
    export default {
        name: "codeMirror",
        data() {
            return {
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
            editor.setSize('100%', this.screenHeight - 280); //设置代码框的宽高

            editor.setValue("");
            //代码自动提示功能，记住使用cursorActivity事件不要使用change事件，这是一个坑，那样页面直接会卡死
            // editor.on('cursorActivity', function () {
            //   editor.showHint()
            // })
        },
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