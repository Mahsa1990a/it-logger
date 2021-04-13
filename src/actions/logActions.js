// Any actions
import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

export const getLogs = () => {
  return async (dispatch) => {
    setLoading();

    const res = await fetch('/logs');
    const data = res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};