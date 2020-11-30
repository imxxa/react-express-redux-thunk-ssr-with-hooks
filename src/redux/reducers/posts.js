import {
  FETCH_POSTS_SUCCESS,
} from "../actionTypes";

const INITIAL_STATE = {
  posts: [],
  isFetching: false,
  lastUpdate: Date.now()
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS: {
      return { ...state, posts: action.payload };
    }
    default:
      return state;
  }
};