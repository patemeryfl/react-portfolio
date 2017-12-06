import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
  } from 'material-ui/ExpansionPanel';

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
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
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
      <div className={classes.root}>
          <Card>
            <CardContent>
                <Typography type="headline" component="h2">
                    {blog.title}                          
                </Typography>
                <Typography component="p">
                    {blog.content}
                </Typography>
            </CardContent>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Button dense color="primary">
                    Share
                </Button>
                <Button dense color="primary" onClick={this.showAddComment}>
                    Comment
                </Button>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <BlogComment comments={blog.comments}/>
                </ExpansionPanelDetails>
            </ExpansionPanel>
          </Card><br/>
      </div>
    );
  }
}
  
export default withStyles(styles)(BlogPost);

