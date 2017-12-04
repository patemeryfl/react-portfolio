import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { connect } from 'react-redux'

import { MuiThemeProvider } from 'material-ui/styles';
import { darkTheme, lightTheme, blueTheme } from './assets/material-themes'

import App from './components/App'
import Home from './components/menu/Home'
import Projects from './components/menu/Projects'
import Blog from './components/menu/Blog'
import Contact from './components/menu/Contact'
import Settings from './components/menu/Settings'
import More from './components/sub-menu/More'
import './index.css'


const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="projects" component={Projects} />
      <Route path="blog" component={Blog} />
      <Route path="contact" component={Contact} />
      <Route path="more" component={More} />
      <Route path="settings" component={Settings} />
    </Route>
  )

class Root extends React.Component {     
    render() {
    let theme = darkTheme
    let selectedTheme = this.props.style[0]
    if(selectedTheme === 'dark') { theme = darkTheme }
    if(selectedTheme === 'light') { theme = lightTheme }
    if(selectedTheme === 'blue') { theme = blueTheme }

    return(
      <MuiThemeProvider theme={theme}>
      <Router history={hashHistory}>
        { routes }
      </Router>
    </MuiThemeProvider>
    )
  }
}

function mapStateToProps({style}) {
  return {style}
}

export default connect(mapStateToProps)(Root)