## Echart初步使用及窗口变动自适应

### 生成挂载echarts的dom结构，为自适应，挂载ref

```js
<div id="main" ref="charts"></div> 
//样式
#main {
    min-height: 40vh;
    width: 100%;
}
```

### 在methods中

```js
 myEcharts() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById("main"));
            // 指定图表的配置项和数据
            var option = {
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                    },
                },
                legend: {
                    data: [
                        "数据源",
                        "数据集",
                        "统计图表",
                        "仪表盘",
                        "数据大屏",
                    ],
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: "category",
                        data: [
                            "养老",
                            "失业",
                            "工伤",
                            "就业",
                            "劳动关系",
                            "新农保",
                            "测试项目",
                        ],
                    },
                ],
                yAxis: [
                    {
                        type: "value",
                    },
                ],
                series: [
                    {
                        name: "数据源",
                        type: "bar",
                        data: [320, 332, 301, 334, 390, 330, 320],
                        itemStyle: {
                            color: "#3fb1e3",
                        },
                    },
                    {
                        name: "数据集",
                        type: "bar",
                        data: [120, 132, 101, 134, 90, 230, 210],
                        itemStyle: {
                            color: "#6be6c1",
                        },
                    },
                    {
                        name: "统计图表",
                        type: "bar",
                        data: [220, 182, 191, 234, 290, 330, 310],
                        itemStyle: {
                            color: "#626c91",
                        },
                    },
                    {
                        name: "仪表盘",
                        type: "bar",
                        data: [150, 232, 201, 154, 190, 330, 410],
                        itemStyle: {
                            color: "#a0a7e6",
                        },
                    },
                    {
                        name: "数据大屏",
                        type: "bar",
                        data: [410, 330, 190, 154, 201, 232, 150],
                        itemStyle: {
                            color: "#c4ebad",
                        },
                    },
                ],
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },
```

### mounted里面初始化和自适应，调取echat上的方法

```js
    mounted() {
        getOverviewData().then((response) => {
            let obj = response.data;
            this.$refs["panelGroup"].initData(obj);
        });
        this.myEcharts();
        const _this = this;   //this保存，否则拿不到
        _this.chart = echarts.init(_this.$refs.charts);
        window.onresize = function () {
            _this.chart.resize();
        };
    },
```



