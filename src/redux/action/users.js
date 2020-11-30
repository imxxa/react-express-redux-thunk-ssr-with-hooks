import axios from 'axios';

import {
  ROOT,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from "../actionTypes";

export const fetchUsers = () => async dispatch => {
  dispatch({
      type: FETCH_USERS_START
  });
  try {
      const response = await axios.get(`${ROOT}/users`);
      // console.log('response', response);
      const users = response.data;
      dispatch({
          type: FETCH_USERS_SUCCESS,
          payload: users
          
      });
  } catch (error) {
      dispatch({
          type: FETCH_USERS_FAILURE,
          payload: error,
          error: true
      })
  }
}