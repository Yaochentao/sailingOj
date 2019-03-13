<template>
    <div id="myChart" style="height: 300px; width: 295px"></div>
</template>
<script>
    // 引入基本模板
    let echarts = require('echarts/lib/echarts')
    require("echarts/lib/chart/radar");
    // 引入提示框组件
    require('echarts/lib/component/tooltip')
    export default {
        name: 'radar',
        data() {
            return {}
        },
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    tooltip: {},
                    textStyle: {
                        color: '#2e9d81',
                    },   
                    radar: {
                        // shape: 'circle',
                        indicator: [{
                                name: '基础算法',
                                max: 100
                            },
                            {
                                name: 'ac',
                                max: 100
                            },
                            {
                                name: '排序',
                                max: 100
                            },
                            {
                                name: '查找',
                                max: 100
                            },
                            // {
                            //     name: '提交数',
                            //     max:  2000
                            // }
                        ]
                    },
                    series: [{
                        type: 'radar',

                        itemStyle: {
                            normal: {
                                color: '#2e9d81',

                                lineStyle: {
                                    color: '#2e9d81',
                                }
                            }
                        },
                        // areaStyle: {normal: {}},
                        data: [{
                            value: [40, 100, 28, 35],
                        }, ]
                    }]
                });
            }
        }
    }
</script>

<style scoped>
    #myChart {
        margin: 0 auto;
    }
</style>