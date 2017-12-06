import React from 'react'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

import Resume from './Resume'
import Education from './Education'
import About from './About'

function TabContainer(props) {
  return <div style={{ padding: 8 * 3 }}>{props.children}</div>;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
});

class More extends React.Component {
  state = {
    value: 0
  }

  changeTabs = (event, value) => this.setState({ value });
  
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <AppBar position="static">
          <Tabs value={value} onChange={this.changeTabs}>
            <Tab label="Education" />
            <Tab label="Resume" />
            <Tab label="About" />
          </Tabs>
        </AppBar>
        <div className={classes.root}>
          {value === 0 && <TabContainer><Education/></TabContainer>}
          {value === 1 && <TabContainer><Resume/></TabContainer>}
          {value === 2 && <TabContainer><About/></TabContainer>}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(More)