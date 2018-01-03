import React from 'react';
import NewBlog from './blogs/new-blog'
import BlogPost from './blogs/blog-post'
import Typography from 'material-ui/Typography';

import { createBlog, subscribeToBlogs } from '../../actions';
import { connect } from 'react-redux'

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
    const { blogs } = this.props;
    let blogPosts = Object.values(blogs)
    if(isAuthenticated) {
      return(<NewBlog submitNewBlog={this.submitNewBlog} handleChange={this.handleChange}/>)
    }
    if(blogPosts[0].length <= 0) {
      return(<div>Loading...</div>)
    }
    return (
      <div>
        <br/>
        <Typography type="display1" component="h1">
          Blogs
        </Typography><br/>
        {blogPosts[0].map((post, i) => {
            return(<div key={i}><BlogPost blog={post}/></div>)
          })}
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
    
function mapStateToProps({blogs}) {
  return {blogs}
}
  
export default connect(mapStateToProps, mapDispatchToProps)(BlogComponent);

