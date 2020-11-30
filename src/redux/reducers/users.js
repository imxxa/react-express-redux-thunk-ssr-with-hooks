import {
    FETCH_USERS_SUCCESS,
  } from "../actionTypes";
  
  const INITIAL_STATE = {
    users: [],
    isFetching: false,
    lastUpdate: Date.now()
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_USERS_SUCCESS: {
        return { ...state, users: action.payload };
      }
      default:
        return state;
    }
  };