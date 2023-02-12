import React, { useEffect } from "react";
import { connect } from "react-redux";
import NVD3Chart from "react-nvd3";
import { fetchChartDataOfMonth } from "../actions";

function ChartMonth(props) {
  const { data, unit, startTime, endTime, handleFetchChartDataOfMonth } = props;
  // 获取图表数据的最大值
  const getMaxValue = (_data, _key) => {
    return window.d3.max(_data, function (d) {
      return d[_key];
    });
  };
  // 获取图表数据
  useEffect(() => {
    handleFetchChartDataOfMonth(unit, startTime, endTime);
  }, [unit, startTime, endTime]);

  const maxValue = getMaxValue(data[0]["values"], unit);

  return (
    <NVD3Chart
      type="lineChart"
      showControls={false}
      showLegend={false}
      useInteractiveGuideline={true}
      x="date"
      xScale={window.d3.time.scale()}
      xAxis={{
        tickFormat: (d) => {
          return window.d3.time.format("%d日")(new Date(d));
        },
      }}
      y={unit}
      yDomain={[0, maxValue + (maxValue / 10) * 5]}
      interpolate="cardinal"
      datum={data}
    />
  );
}

const mapStateToProps = (state) => {
  const { data, unit, startTime, endTime } = state.salesOrderChart;
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
