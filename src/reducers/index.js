import { FETCH_BLOGS } from '../actions/action_types';

const initialState = {
    blogs: []
}

export function reactChat(state = initialState, action) {
  switch(action.type) {
    case FETCH_BLOGS:
      return Object.assign({}, state, {
        blogs: state.blogs.concat([action.payload])
      });
    default:
      return state;
  }
}