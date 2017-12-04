import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
//import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import BlogComment from './blog-comments'

import { createBlog, subscribeToBlogs } from '../../../actions';
import { connect } from 'react-redux'

const styles = theme => ({
    card: {
        minWidth: 275,
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
    flexGrow: {
        flex: '1 1 auto',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
})

class BlogPost extends Component {
    
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

  showComments() {
    this.setState({showComments: !this.state.showComments})
  }

  showAddComment() {
    this.setState({addComment: !this.state.addComment})
  }
    
  render() {
    const { blogs, classes } = this.props;
    return (
      <div>
        {blogs.map((post, i) => (
          <Card key={i}>
            <CardContent>
                <Typography type="headline" component="h2">
                    {post.title}       
                    <button onClick={() => this.removeBlog(post.id)}>X</button>                    
                </Typography>
                <Typography component="p">
                    {post.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button dense color="primary">
                    Share
                </Button>
                <Button dense color="primary" onClick={this.showAddComment}>
                    Comment
                </Button>
                <div className={classes.flexGrow} />
                <IconButton
                    // className={classnames(classes.expand, {
                    // [classes.expandOpen]: this.state.showComments,
                    // })}
                    onClick={this.showComments}
                    //aria-expanded={this.state.showComments}
                    aria-label="Show more">
                </IconButton>
            </CardActions>
            <BlogComment comments={post.comments}/>
          </Card>
        ))}
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

BlogPost.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BlogPost));







// const BlogPost = (props) => {
//     const { classes, blog } = props
//     return(
        // <Card>
        //     <CardContent>
        //         <Typography type="headline" component="h2">
        //             {blog.title}       
        //             <button onClick={() => this.removeBlog(blog.id)}>X</button>                    
        //         </Typography>
        //         <Typography component="p">
        //             {blog.content}
        //         </Typography>
        //     </CardContent>
        //     <CardActions>
        //         <Button dense color="primary">
        //             Share
        //         </Button>
        //         <Button dense color="primary" onClick={props.showAddComment}>
        //             Comment
        //         </Button>
        //         <div className={classes.flexGrow} />
        //         <IconButton
        //             // className={classnames(classes.expand, {
        //             // [classes.expandOpen]: this.state.showComments,
        //             // })}
        //             onClick={props.showComments}
        //             //aria-expanded={this.state.showComments}
        //             aria-label="Show more">
        //             <ExpandMoreIcon />
        //         </IconButton>
        //     </CardActions>
        // </Card>
//     )
// }

