<template>
  <div id="pie" class="pie-chart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "MyPineChart",
  props:["pieData"],
  mounted() {
    let myChart = echarts.init(document.getElementById("pie"), 'dark');
    myChart.setOption({
      backgroundColor: "#2d2d2d",
      color: ['#fc8251', '#5470c6', '#91cd77', '#ef6567', '#f9c956', '#75bedc'],
      legend: {
        textStyle: {
          color: "#fafafa",
          fontWeight: "bold",
        },
        orient: 'vertical',
        left: '0',  //图例距离左的距离
        y: 'center',  //图例上下居中
        data: this.pieData.map(item => item.name),
      },

      title: {
        text: "资产比例",
      },
      series: [{
        name: "资产总额",
        type: "pie",
        data: this.pieData,
        label: {
          normal: {
            show: true,
            position: "outside",
            textStyle: {
              color: "#fafafa",
            },
            formatter: '{b}: {c}({d}%)' //自定义显示格式(b:name, c:value, d:百分比)
          }
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
.pie-chart {
  width: 30vw;
  height: 30vh;
}

</style>