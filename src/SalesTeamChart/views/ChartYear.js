import React, { useEffect } from "react";
import { connect } from "react-redux";
import NVD3Chart from "react-nvd3";
import { fetchChartDataOfYear } from "../actions";
const d3 = window.d3;
function ChartYear(props) {
  const { data, unit, startTime, endTime, handleFetchChartDataOfYear } = props;
  // const getMaxValue = (_data, _key) => {
  //   return window.d3.max(_data, function (d) {
  //     return d[_key];
  //   });
  // };
  // const maxValue = getMaxValue(data[0]["values"], unit);

  useEffect(() => {
    handleFetchChartDataOfYear(unit, startTime, endTime);
  }, [unit, startTime, endTime]);

  return (
    <NVD3Chart
      type="pieChart"
      showControls={false}
      showLegend={true}
      showLabels={false}
      x="name"
      y={unit}
      //格式化value数值
      valueFormat={d3.format(",.0f")}
      datum={data[0].values}
    />
  );
}

const mapStateToProps = (state) => {
  const { data, unit, startTime, endTime } = state.salesTeamChart;
  return { data, unit, startTime, endTime };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFetchChartDataOfYear: (unit, startTime, endTime) => {
      dispatch(fetchChartDataOfYear(unit, startTime, endTime));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChartYear);
