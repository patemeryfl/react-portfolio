import firebase from '../environments/dev'
import { FETCH_BLOGS, CHANGE_THEME, SIGN_OUT, AUTH_USER, AUTH_ERROR } from '../actions/action_types';

const blogs = firebase.database().ref('blogs');
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth()


export function signUp(credentials) {
    return function(dispatch) {
        auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then(response => dispatch(authUser()))
            .catch(error => dispatch(authError(error)))
    }
}

export function signIn(credentials) {
    return function(dispatch) {
        auth.signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(response => dispatch(authUser()))
            .catch(error => dispatch(authError(error)))
    }
}

export function signInWithGoogle() {
    return function(dispatch) {
        auth.signInWithPopup(provider)
            .then(response => dispatch(authUser()))
            .catch(error => dispatch(authError(error)))
    }
}

export function signOut() {
    return function (dispatch) {
        auth.signOut()
            .then(() => dispatch({ type: SIGN_OUT }));
    }
}

export function verifyAuth() {
    return function (dispatch) {
        auth.onAuthStateChanged(user => {
            if (user) {
                dispatch(authUser());
            } else {
                dispatch(signOut());
            }
        });
    }
}

export function authUser() {
    return {
        type: AUTH_USER
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
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

export function subscribeToBlogs() {
    return function(dispatch) {
        blogs.on('child_added', data => dispatch(receiveBlog(data.val())));
    }
}

export function createBlog(blog) {
    return function() {
        blogs.push(blog);
    };
}