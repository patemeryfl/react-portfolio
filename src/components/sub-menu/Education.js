import React from 'react'
import Card from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import List, { ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';

const masters = [ 'Information Structures in Python',
                  'Data Structures & Algorithms',
                  'Advanced Java Programming',
                  'Agile Software Development',
                  'Software Designs & Patterns',
                  'Information Systems Analysis & Design',
                  'Rich Internet App Development',
                  'Server-Side Web Development']
const bachelors = [ 'Object Oriented Programming',
                    'Data Structures & Algorithms',
                    'Discrete Math',
                    'Java Programming',
                    'Software Engineering Concepts',
                    'Operating System Concepts']

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
});

function EducationComponent(props) {
  const { classes } = props;
  return(
    <div>
      <Typography type="display1" component="h1">
        Education
      </Typography>
      <br/>
      <Card className={classes.root}>
        <Typography type="title" component="h1">M.S. Software Development</Typography>
        <Typography type="subheading" component="h1">Boston University 2019</Typography>
        <Divider />
        <Grid container spacing={8}>
          <Grid item xs={12} sm={12} md={6}>
            <div>{masters.map((i) => <List key={i}><ListItemText primary={i}/></List>).splice(0,4)}</div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}> 
            <div>{masters.map((i) => <List key={i}><ListItemText primary={i}/></List>).splice(4,9)}</div>      
          </Grid>
        </Grid>
        <br/>
        <Typography type="title" component="h1">B.S. Information Technology</Typography>
        <Typography type="subheading" component="h1">University of South Florida 2017</Typography>      
        <Divider />   
        <Grid container spacing={8}> 
          <Grid item xs={12} sm={12} md={6}>
            <div>{bachelors.map((i) => <List key={i}><ListItemText primary={i}/></List>).splice(0,3)}</div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}> 
            <div>{bachelors.map((i) => <List key={i}><ListItemText primary={i}/></List>).splice(3,8)}</div>      
          </Grid>
        </Grid>
      </Card>
    </div>
  )
} 

export default withStyles(styles)(EducationComponent);