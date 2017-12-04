import { FETCH_BLOGS, CHANGE_THEME, SIGN_IN, SIGN_OUT } from '../actions/action_types';

const initialState = {
    isSignedIn: false,
    profile: {
      username: '',
      token: ''
    },
    style: '',
    blogs: []
}

export function portfolioReducer(state = initialState, action) {
  switch(action.type) {
    case SIGN_IN:
      console.log('State', this.state)
      return Object.assign({}, state, {
        isSignedIn: true,
        profile: Object.assign({}, state.profile, {
          username: action.payload.username,
          token: action.payload.token
        })
      });
    case SIGN_OUT:
      console.log('State', this.state)
      return Object.assign({}, state, {
        isSignedIn: false,
        profile: {}
      });
    case FETCH_BLOGS:
      return Object.assign({}, state, {
        blogs: state.blogs.concat([action.payload])
      });
    case CHANGE_THEME:
      return Object.assign({}, state, {
        style: [action.payload]
      });
    default:
      return state;
  }
}