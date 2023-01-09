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
  computed: {
    maxY() {
      return Math.max(...this.seriesData) * 1.5;
    },
  },
  mounted() {
    let myChart = echarts.init(document.getElementById("main"), 'dark');
    myChart.setOption({
      backgroundColor: "#1b1b1b",
      title: {
        text: "资产总额走势图",
      },
      xAxis: {
        data: this.xAxisData,
        name: "日期",
        nameLocation: "middle",
        nameTextStyle: {
          color: "#fafafa",
          fontWeight: "bold",
        },
        axisLabel: {
          color: "#fafafa",
          show: true,
        },
        axisPointer: {
          show: true,
        },
      },
      yAxis: {
        axisLabel: {
          color: "#fafafa",
          show: true,
        },
        name: "资产总额",
        nameTextStyle: {
          color: "#fafafa",
          fontWeight: "bold",
        },
        interval: this.maxY / 6,
        position: "left",
        show: true,
        min: 0,
        max: this.maxY,
      },
      series: [{
        name: "资产总额",
        type: "line",
        data: this.seriesData,
      }, ],
      grid: {
        left: "2%",
        right: "3%",
        bottom: "2%",
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
  width: 50vw;
  height: 35vh;
}

</style>