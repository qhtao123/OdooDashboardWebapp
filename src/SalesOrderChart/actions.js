import * as actionTypes from "./actionTypes";
import * as api from "./api";

const moment = window.moment;

export const switchUnit = (unit) => {
  return { type: actionTypes.SWITCHUNIT, payload: { unit: unit } };
};
export const switchTab = (tab) => {
  return { type: actionTypes.SWITCHTAB, payload: { activeTab: tab } };
};

export const fetchChartDataOfMonth =
  (unit, startTime, endTime) => async (dispatch, getState) => {
    // unit === "amount" || "quantity"
    const result = await api.getSalesOrderChartDataOfMonth(
      unit,
      startTime,
      endTime
    );
    dispatch({
      type: actionTypes.FETCHCHARTDATA,
      payload: { result: result },
    });
  };
export const fetchChartDataOfYear =
  (unit, startTime, endTime) => async (dispatch, getState) => {
    const result = await api.getSalesOrderChartDataOfYear(
      unit,
      startTime,
      endTime
    );
    dispatch({
      type: actionTypes.FETCHCHARTDATA,
      payload: { result: result },
    });
  };

// 上一月
export const lastMonth = (date) => async (dispatch, getState) => {
  let newStartTime, newEndTime;
  newStartTime = moment(date).subtract(1, "months");
  newEndTime = moment(newStartTime).endOf("month");
  dispatch({
    type: actionTypes.LASTMONTH,
    payload: { startTime: newStartTime, endTime: newEndTime },
  });
};
// 下一月
export const nextMonth = (date) => async (dispatch, getState) => {
  let newStartTime, newEndTime;
  newStartTime = moment(date).add(1, "months");
  newEndTime = moment(newStartTime).endOf("month");
  dispatch({
    type: actionTypes.NEXTMONTH,
    payload: { startTime: newStartTime, endTime: newEndTime },
  });
};

// 上一年
export const lastYear = (date) => async (dispatch, getState) => {
  let newStartTime, newEndTime;
  newStartTime = moment(date).subtract(1, "years");
  newEndTime = moment(newStartTime).endOf("year");
  dispatch({
    type: actionTypes.LASTYEAR,
    payload: { startTime: newStartTime, endTime: newEndTime },
  });
};
// 下一年
export const nextYear = (date) => async (dispatch, getState) => {
  let newStartTime, newEndTime;
  newStartTime = moment(date).add(1, "years");
  newEndTime = moment(newStartTime).endOf("year");
  dispatch({
    type: actionTypes.NEXTYEAR,
    payload: { startTime: newStartTime, endTime: newEndTime },
  });
};
