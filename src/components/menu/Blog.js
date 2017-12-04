import React from 'react';
import { withStyles } from 'material-ui/styles';

import NewBlog from './blogs/new-blog'
import BlogPost from './blogs/blog-post'

import { createBlog, subscribeToBlogs } from '../../actions';
import { connect } from 'react-redux'

const styles = theme => ({
  card: {}
})

const isAuthenticated = false;

class BlogComponent extends React.Component {

  componentWillMount() {
    this.props.subscribeToBlogs();
  }
    
  handleCreateBlog() {
    const { createBlog } = this.props;
    const { value } = this.blog;
    if (!value) {
      return false;
    }
  
    createBlog(value);
    this.blog.value = '';
  }

  render() {
    const { blogs } = this.props
    if(isAuthenticated) {
      return(<NewBlog submitNewBlog={this.submitNewBlog} handleChange={this.handleChange}/>)
    }
    return (
      <div>
      <h2>Blogs</h2>
        {blogs.map((post, i) => {
            return(
            <div key={i}>
              <BlogPost blog={post}/>
            </div>
          )})}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createBlog: (post) => dispatch(createBlog(post)),
    subscribeToBlogs: () => dispatch(subscribeToBlogs()),
  };
}
    
function mapStateToProps(state) {
  return {
    blogs: state.blogs
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BlogComponent));

