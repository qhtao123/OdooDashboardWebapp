import * as actionTypes from "./actionTypes";
const initialState = {
  primary: {
    title: "当前应收账款",
    data: 0,
  },
  secondary: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_PRIMARY_DATA:
      return { ...state, primary: { ...state.primary, data: payload.data } };
    case actionTypes.FETCH_SECONDARY_DATA:
      return {
        ...state,
        secondary: { ...state.secondary, data: payload.data },
      };
    default:
      return state;
  }
};
