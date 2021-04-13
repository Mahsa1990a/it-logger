// Any actions
import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG } from './types';

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

// Add new log
export const addLog = (log) => async dispatch => {

  try {
    setLoading();
  
    const res = await fetch('http://localhost:5000/logs', { //changed becuase it's POST
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
  
    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.message
    });
  }

};

// Delete logs from server
export const deleteLog = (id) => async dispatch => {

  try {
    setLoading();
  
    await fetch(`http://localhost:5000/logs/${id}`, {
      method: 'DELETE'
    });
  
    dispatch({
      type: DELETE_LOG,
      payload: id
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