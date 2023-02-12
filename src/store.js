import { combineReducers, createStore, compose ,applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer as salesAmountOfTodayReducer } from "./SalesAmountOfToday";
import { reducer as salesAmountOfThisMonthReducer } from "./SalesAmountOfThisMonth";
import { reducer as unshippedOrderQuantityReducer } from "./UnshippedOrderQuantity";
import { reducer as accountsReceivableReducer } from "./AccountsReceivable";
import { reducer as returnOrderQuantityReducer } from "./ReturnOrderQuantity";
import { reducer as salesOrderChartReducer } from "./SalesOrderChart";
import { reducer as salesProductCategoryChartReducer } from "./SalesProductCategoryChart";
import { reducer as salesProductChartReducer } from "./SalesProductChart";
import { reducer as salesCustomerChartReducer } from "./SalesCustomerChart";
import { reducer as salesTeamChartReducer } from "./SalesTeamChart";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  salesAmountOfToday: salesAmountOfTodayReducer,
  salesAmountOfThisMonth: salesAmountOfThisMonthReducer,
  unshippedOrderQuantity: unshippedOrderQuantityReducer,
  accountsReceivable: accountsReceivableReducer,
  returnOrderQuantity: returnOrderQuantityReducer,
  salesOrderChart: salesOrderChartReducer,
  salesProductCategoryChart: salesProductCategoryChartReducer,
  salesProductChart: salesProductChartReducer,
  salesCustomerChart: salesCustomerChartReducer,
  salesTeamChart: salesTeamChartReducer,
});

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk) /* ... ,middlewares*/)
);

//   - 创建 redux store
//   - 添加 redux 中间件
