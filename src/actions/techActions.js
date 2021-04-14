// ANy action with technicians would be here
import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR } from "./types";

// Get techs from server
export const getTechs = () => async dispatch => {

  try {
    setLoading();
  
    const res = await fetch('http://localhost:5000/techs');
    const data = await res.json();
  
    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.message
    });
  }

};


// Set loading to true -> copied from logActions
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};