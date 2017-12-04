import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import BlogComment from './blog-comments'

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
    this.setState({
      showComments: false,
      addComment: false
    })
  }

  showComments = () => {
    this.setState({showComments: !this.state.showComments})
  }

  showAddComment = () => {
    this.setState({addComment: !this.state.addComment})
  }
  
  render() {
    const { blog, classes } = this.props;
    return (
      <div>
          <Card>
            <CardContent>
                <Typography type="headline" component="h2">
                    {blog.title}                          
                </Typography>
                <Typography component="p">
                    {blog.content}
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
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={this.state.showComments} transitionDuration="auto" unmountOnExit>
              <BlogComment comments={blog.comments}/>
            </Collapse>
          </Card><br/>
      </div>
    );
  }
}
  
export default withStyles(styles)(BlogPost);

