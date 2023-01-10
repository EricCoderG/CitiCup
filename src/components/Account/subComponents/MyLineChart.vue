<template>
  <div id="line" class="line-chart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "LineChart",
  data() {
    return {

    };
  },
  props:["xAxisData","lineData"],
  computed: {
    maxY() {
      return Math.max(...this.lineData) * 1.5;
    },
  },
  mounted() {
    let myChart = echarts.init(document.getElementById("line"), 'dark');
    myChart.setOption({
      backgroundColor: "#1b1b1b",
      title: {
        text: "资产总额走势",
        fontWight: "bold",
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
        data: this.lineData,
        label: {
          normal: {
            show: true,
            position: "top",
            textStyle: {
              color: "#fafafa",
            },
          },
        },
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
  width: 40vw;
  height: 40vh;
}

</style>