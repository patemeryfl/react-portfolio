import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Card from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import { signIn, signOut } from '../actions'
import { connect } from 'react-redux'

import Navigation from './Navigation'
import Footer from './Footer'

const styles = theme => ({
  navbar: {
    width: '100%',
  },
  container: {
    height: 610,
    backgroundImage: '',
    padding: 40
  },
  flex: {
    flex: 1,
  },
  list: {
    width: 250,
    height: 61,
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     open: false
  //   }
  // }

  toggleDrawer = () => this.setState({ open: !this.state.open })
  
  render() {
    const styles = this.props.classes
    console.log(this.state)
    return (
      <div className={styles.navbar}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton className={styles.menuButton} color="contrast" aria-label="Menu" onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={styles.flex}>
              Pat Emery
            </Typography>
            <Button color="contrast">Login</Button>
          </Toolbar>
        </AppBar>


        <Drawer onRequestClose={this.toggleDrawer}>
          <AppBar position="static">
            <Typography type="title" color="inherit" className={styles.list}>
              Menu
            </Typography>
          </AppBar>
          <Navigation onNavigate={this.toggleDrawer} />
        </Drawer>

        <Card className={styles.container}>
          {this.props.children}
        </Card>
        <Footer/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: () => dispatch(signIn()),
    signOut: () => dispatch(signOut()),
  };
}
    
function mapStateToProps(state) {
  return {
    user: state.profile
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));

