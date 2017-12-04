import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
    avatar: {
      backgroundColor: theme.palette.text.secondary
    }
  });

const BlogComment = (props) => {
  const { classes } = props
  if(props.comments === "None") {
    return(<div>Sorry, there are no comments</div>)
  } else {
    return(
      <CardHeader
      avatar={
        <Avatar aria-label="User" className={classes.avatar}>
          {props.comments.username}
        </Avatar>
      }
    />      
    )
  }
}

BlogComment.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(BlogComment);