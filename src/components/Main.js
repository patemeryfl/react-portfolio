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
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import Tabs, { Tab } from 'material-ui/Tabs';

import { signIn, signOut } from '../actions'
import { connect } from 'react-redux'

import SignInComponent from '../components/menu/auth/signin'
import SignUpComponent from '../components/menu/auth/signup'
import Navigation from './Navigation'
import Footer from './Footer'

const styles = theme => ({
  navbar: {
    width: '100%',
  },
  container: {
    height: 610,
    backgroundImage: ''
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

function TabContainer(props) {
  return <div style={{ padding: 8 * 3 }}>{props.children}</div>;
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
            <Typography type="title" color="inherit" className={styles.list}>
              Menu
            </Typography>
          </AppBar>
          <Navigation onNavigate={this.toggleDrawer} />
        </Drawer>

        <Card className={styles.container}>
          {this.props.children}
        </Card>

        <Dialog open={this.state.loginOpen} onRequestClose={this.showLogin}>
          <DialogTitle>Log In</DialogTitle>
          <DialogContent>
            <Tabs value={value} onChange={this.chooseLogin}>
              <Tab label="Email" />
              <Tab label="Google" />
              <Tab label="New" />
            </Tabs>
            {value === 0 && <TabContainer><SignInComponent/></TabContainer>}
            {value === 1 && <TabContainer>Google</TabContainer>}
            {value === 2 && <TabContainer><SignUpComponent/></TabContainer>}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.showLogin} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.signIn} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>

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
    user: state.auth
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Main));

