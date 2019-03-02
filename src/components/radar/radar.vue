<template>
    <div id="myChart" style="height: 300px; width: 280px"></div>
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
                                name: '销售',
                                max: 6500
                            },
                            {
                                name: '管理',
                                max: 16000
                            },
                            {
                                name: '信息',
                                max: 30000
                            },
                            {
                                name: '客服',
                                max: 38000
                            },
                            {
                                name: '研发',
                                max: 52000
                            },
                            {
                                name: '市场',
                                max: 25000
                            }
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
                            value: [4300, 10000, 28000, 35000, 50000, 19000],
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