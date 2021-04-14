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

// Add technicians to server
export const addTech = (tech) => async dispatch => {

  try {
    setLoading();
  
    const res = await fetch('http://localhost:5000/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
  
    dispatch({
      type: ADD_TECH,
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