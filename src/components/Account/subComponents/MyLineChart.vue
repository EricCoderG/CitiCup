<template>
  <div id="main" class="line-chart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "LineChart",
  data() {
    return {
      xAxisData: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
      seriesData: [120, 132, 101, 134, 90, 230],
    };
  },
  mounted() {
    let myChart = echarts.init(document.getElementById("main"), 'dark');
    myChart.setOption({
      title: {
        text: "资产总额走势图",
      },
      tooltip: {},
      xAxis: {
        data: this.xAxisData,
      },
      yAxis: {},
      series: [{
        name: "资产总额",
        type: "line",
        data: this.seriesData,
      }, ],
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
    });
    window.onresize = function() {
      myChart.resize();
    };
  },
}
</script>

<style scoped>

.line-chart {
  width: 40vw;
  height: 40vh;
}

</style>