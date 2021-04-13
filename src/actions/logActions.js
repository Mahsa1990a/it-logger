// Any actions
import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

// export const getLogs = () => {
//   return async (dispatch) => {
//     setLoading();

//     const res = await fetch('/logs');
//     const data = res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     });
//   };
// };        REFACTOR TO:

// Get logs from server
export const getLogs = () => async dispatch => {

  try {
    setLoading();
  
    const res = await fetch('http://localhost:5000/logs');
    const data = await res.json();
  
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.message
    });
  }

};


// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};