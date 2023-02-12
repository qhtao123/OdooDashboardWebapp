import React, { useEffect } from "react";
import { connect } from "react-redux";
import NVD3Chart from "react-nvd3";
import { fetchChartDataOfMonth } from "../actions";
const d3 = window.d3;
function ChartMonth(props) {
  const { data, unit, startTime, endTime, handleFetchChartDataOfMonth } = props;
  const getMaxValue = (_data, _key) => {
    return window.d3.max(_data, function (d) {
      return d[_key];
    });
  };
  const maxValue = getMaxValue(data[0]["values"], unit);
  useEffect(() => {
    handleFetchChartDataOfMonth(unit, startTime, endTime);
  }, [unit, startTime, endTime]);

  return (
    <NVD3Chart
      type="discreteBarChart"
      showControls={false}
      showLegend={false}
      x="name"
      // 旋转xAxis的标签
      xAxis={{
        rotateLabels: -15,
      }}
      y={unit}
      yDomain={[0, maxValue + (maxValue / 10) * 5]}
      staggerLabels={false}
      //discreteBarChart设置bar颜色
      color={["rgb(31, 119, 180)"]}
      // 显示bar的value数值
      showValues={true}
      //格式化value数值
      valueFormat={d3.format(",.0f")}
      datum={data}
    />
  );
}
const mapStateToProps = (state) => {
  const { data, unit, startTime, endTime } = state.salesProductCategoryChart;
  return { data, unit, startTime, endTime };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFetchChartDataOfMonth: (unit, startTime, endTime) => {
      dispatch(fetchChartDataOfMonth(unit, startTime, endTime));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChartMonth);
