import * as actionTypes from "./actionTypes";
import * as api from "./api";

export const fetchPrimaryData = () => async (dispatch, getState) => {
  const result = await api.getPrimaryData();
  dispatch({
    type: actionTypes.FETCH_PRIMARY_DATA,
    payload: { data: result },
  });
};

export const fetchSecondaryData = () => async (dispatch, getState) => {
  const result = await api.getSecondaryData();
  dispatch({
    type: actionTypes.FETCH_SECONDARY_DATA,
    payload: { data: result },
  });
};
