import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


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
});

function ProjectComponent(props) {
  const { classes } = props;
  let ProjectCards = [
    { title: 'Angular Projects', 
      content: 'Angular',
      documentation: '',
      github: 'https://github.com/patemeryfl?utf8=%E2%9C%93&tab=repositories&q=angular&type=&language=' },
    { title: 'React Projects', 
      content: 'React Stuff',
      documentation: '',
      github: 'https://github.com/patemeryfl?utf8=%E2%9C%93&tab=repositories&q=react&type=&language=' },
    { title: 'Python Projects', 
      content: 'CS521',
      documentation: '',
      github: 'https://github.com/patemeryfl?utf8=%E2%9C%93&tab=repositories&q=python&type=&language=' },
    { title: 'Story Friends', 
      content: 'Project for school',
      documentation: 'https://github.com/patemeryfl/StoryFriendsWebApp/blob/master/README.md',
      github: 'https://github.com/patemeryfl/StoryFriendsWebApp' },
    { title: 'BCI Record Database', 
      content: 'BCI Database Content',
      documentation: 'https://github.com/patemeryfl/BCIRecords/blob/master/README.md',
      github: 'https://github.com/patemeryfl/BCIRecords' },
    { title: 'VR Realty', 
      content: 'Realty App' ,
      documentation: 'https://github.com/patemeryfl/BlueOmenVR/blob/master/README.md',
      github: 'https://github.com/patemeryfl/BlueOmenVR' }
  ]

  let renderCards = ProjectCards.map((card) => {
    return(<Card className={classes.card} key={card.title}>
            <CardContent>
              <Typography type="headline" component="h2">
                {card.title}
              </Typography>
              <Typography component="p">
                {card.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button dense color="primary" href={card.documentation}>
                <i className="fa fa-book fa-lg"></i>&nbsp;Docs
              </Button>
              <Button dense color="primary" href={card.github}>
                <i className="fa fa-github fa-lg"></i>&nbsp;Github
              </Button>
            </CardActions>
          </Card>)
  })

  return (
    <div className='project-grid'>
      {renderCards}
    </div>
  );
}

ProjectComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectComponent);