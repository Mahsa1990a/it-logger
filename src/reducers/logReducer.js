import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, UPDATE_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT } from '../actions/types';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
};

// eslint-disable-next-line
export default(state = initialState, action) => {
  switch(action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload),
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case LOGS_ERROR:
      console.error(action.payload)
      return {
        ...state,
        error: action.payload
      };
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };
    default:
      return state;
  }
};