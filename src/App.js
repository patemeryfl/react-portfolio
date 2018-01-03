import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { connect } from 'react-redux'

import { MuiThemeProvider } from 'material-ui/styles';
import { lightTheme, blueTheme, yellowTheme } from './assets/material-themes'

import Main from './components/Main'
import Home from './components/menu/Home'
import Projects from './components/menu/Projects'
import Blog from './components/menu/Blog'
import Contact from './components/menu/Contact'
import Settings from './components/menu/Settings'
import More from './components/sub-menu/More'
import './index.css'

const routes = (
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="projects" component={Projects} />
      <Route path="blog" component={Blog} />
      <Route path="contact" component={Contact} />
      <Route path="more" component={More} />
      <Route path="settings" component={Settings} />
    </Route>
  )

class Container extends React.Component {     
    render() {
    let theme = blueTheme
    let selectedTheme = this.props.theme.style[0]
    if(selectedTheme === 'light') { theme = lightTheme }
    if(selectedTheme === 'blue') { theme = blueTheme }
    if(selectedTheme === 'yellow') { theme = yellowTheme }

    return(
      <MuiThemeProvider theme={theme}>
        <Router history={hashHistory}>
          { routes }
        </Router>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps({theme}) {
  return {theme}
}

export default connect(mapStateToProps)(Container)