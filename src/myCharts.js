import * as echarts from "echarts";
import $ from "jquery";

var chartDom = document.getElementById("main");
var myChart = echarts.init(chartDom);
var option;

myChart.showLoading();
// change the input file here
$.get("../assets/flare.json", function (data) {
  myChart.hideLoading();
  myChart.setOption(
    (option = {
      tooltip: {
        trigger: "item",
        triggerOn: "mousemove",
      },
      series: [
        {
          type: "tree",
          data: [data],
          top: "18%",
          bottom: "14%",
          layout: "radial",
          symbol: "emptyCircle",
          symbolSize: 7,
          initialTreeDepth: 3,
          animationDurationUpdate: 750,
          emphasis: {
            focus: "descendant",
          },
        },
      ],
    })
  );
});

option && myChart.setOption(option);
