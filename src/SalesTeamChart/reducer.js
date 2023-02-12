import * as actionTypes from "./actionTypes";
const moment = window.moment;
// 初始化图表的时间范围
const startTime = moment().date(1).hours(0).minutes(0).seconds(0); // 2022-01-31T16:00:00.000Z
const endTime = moment(startTime).endOf("month"); // 2022-02-28T15:59:59.999Z
// console.log(moment(startTime).format("YYYY-MM-DD HH:mm")); // 2022-02-01 00:00

const initialState = {
  title: "销售团队",
  unit: "amount",
  startTime: startTime,
  endTime: endTime,
  activeTab: "month",
  data: [
    {
      key: "销售团队",
      values: [
        // {
        //   name: "categoryName",
        //   amount: 243214,
        // },
      ],
    },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SWITCHUNIT:
    case actionTypes.SWITCHTAB:
      return { ...state, ...payload };

    case actionTypes.LASTMONTH:
    case actionTypes.NEXTMONTH:
      return { ...state, ...payload };
    case actionTypes.LASTYEAR:
    case actionTypes.NEXTYEAR:
      return { ...state, ...payload };

    case actionTypes.FETCHCHARTDATA:
      return { ...state, data: [{ ...state.data[0], values: payload.result }] };

    default:
      return state;
  }
};
