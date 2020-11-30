import axios from 'axios';

import {
  ROOT,
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from "../actionTypes";

export const fetchPosts = () => async dispatch => {
  dispatch({
      type: FETCH_POSTS_START
  });
  try {
      const response = await axios.get(`${ROOT}/posts`);
      // console.log('response', response);
      const posts = response.data;
      dispatch({
          type: FETCH_POSTS_SUCCESS,
          payload: posts
          
      });
  } catch (error) {
      dispatch({
          type: FETCH_POSTS_FAILURE,
          payload: error,
          error: true
      })
  }
}
