import firebase from '../environments/dev'
import { FETCH_BLOGS } from '../actions/action_types';

const blogs = firebase.database().ref('blogs');

function receiveBlog(blogs) {
    return {
      type: FETCH_BLOGS,
      payload: blogs
    };
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