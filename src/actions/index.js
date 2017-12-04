import firebase, { auth, provider } from '../environments/dev'
import { FETCH_BLOGS, CHANGE_THEME, SIGN_IN } from '../actions/action_types';

const blogs = firebase.database().ref('blogs');

export function signedIn(user) {
    return {
        type: SIGN_IN,
        payload: user
    }
}

export function signedOut() {

}

export function changeTheme(theme) {
    return{
        type: CHANGE_THEME,
        payload: theme
    }
}

function receiveBlog(blogs) {
    return {
      type: FETCH_BLOGS,
      payload: blogs
    };
  }

export function signIn() {
    return function(dispatch) {
        auth.signInWithPopup(provider).then((result) => dispatch(signedIn(result.user)))
    }
}

export function signOut() {
    return function(dispatch) {
        auth.signOut().then((result) => dispatch(signedOut(result)))
    }
}

export function createBlog(blog) {
    return function() {
        blogs.push(blog);
    };
}

export function subscribeToBlogs() {
    return function(dispatch) {
        blogs.on('child_added', data => dispatch(receiveBlog(data.val())));
    }
}