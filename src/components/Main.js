import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Dialog, { DialogContent, DialogTitle } from 'material-ui/Dialog';
import Tabs, { Tab } from 'material-ui/Tabs';

import { signIn, signOut } from '../actions'
import { connect } from 'react-redux'

import SignInComponent from '../components/menu/auth/signin'
import SignUpComponent from '../components/menu/auth/signup'
import Navigation from './Navigation'

const styles = theme => ({
  body: {
    position: 'fixed',
    width: '100vw'
  },
  spacer: {
    height: 64
  },
  flex: {
    flex: 1,
  },
  list: {
    width: 250,
    height: 44,
    flex: 1,
    paddingLeft: 20,
    paddingTop: 20,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    }
});

function TabContainer(props) {
  return <div>{props.children}</div>;
}

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false,
      loginOpen: false,
      value: 0
    }
  }

  toggleDrawer = () => this.setState({ drawerOpen: !this.state.drawerOpen })
  showLogin = () => this.setState({ loginOpen: !this.state.loginOpen })
  chooseLogin = (event, value) => { this.setState({ value });};
  
  render() {
    const styles = this.props.classes
    const { value } = this.state;
    console.log(this.props.theme)
    return (
      <div className={styles.body}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton className={styles.menuButton} color="contrast" aria-label="Menu" onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={styles.flex}>
              Pat Emery
            </Typography>
            {(() => {
              if(this.props.user.authenticated) {
                return(<Button color="contrast" onClick={this.props.signOut}>Log Out</Button>)
              } else {
                return(<Button color="contrast" onClick={this.showLogin}>Log In</Button>)
              }
            })()}
          </Toolbar>
        </AppBar>


        <Drawer open={this.state.drawerOpen} onRequestClose={this.toggleDrawer}>
          <AppBar position="static">
            <Typography type="headline" color="inherit" className={styles.list}>
              Menu
            </Typography>
          </AppBar>
          <Navigation onNavigate={this.toggleDrawer} />
        </Drawer>

        <div className='container'>
          {this.props.children}
        </div>

        <AppBar position="static" color="primary" className='footer'>
          <Toolbar>
            <Typography type="subheading" color="inherit" align="center">
              © Pat Emery - 2017
            </Typography>
          </Toolbar>
        </AppBar>

        <Dialog open={this.state.loginOpen} onRequestClose={this.showLogin}>
          <DialogTitle>Log In</DialogTitle>
          <DialogContent>
            <Tabs value={value} onChange={this.chooseLogin}>
              <Tab label="Email" color='primary'/>
              <Tab label="New" color='primary' />
            </Tabs>
            {value === 0 && <TabContainer><SignInComponent cancel={this.showLogin} /></TabContainer>}
            {value === 1 && <TabContainer><SignUpComponent cancel={this.showLogin} /></TabContainer>}
          </DialogContent>
        </Dialog>
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
    user: state.auth
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Main));

