import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeTheme } from '../../actions/index'

import Card, { CardContent } from 'material-ui/Card';
import Input from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import Typography from 'material-ui/Typography';

class Settings extends React.Component{
  constructor(props) {
    super(props)
    this.state = { theme: 'blue' }
  }

  handleChange = theme => event => {
    this.setState({ [theme]: event.target.value });
    this.props.changeTheme(event.target.value)
  };
  
  render() {
    return(
      <div>
        <br/>
        <Typography type="display1" component="h1">
        Settings
        </Typography>
        <br/>
        <Card>
          <CardContent>
            <Typography type="title" component="p">
              Select Theme
            </Typography>
            <Select
              value={this.state.theme}
              onChange={this.handleChange('theme')}
              input={<Input/>}>
              <MenuItem value={'yellow'}>Yellow</MenuItem>
              <MenuItem value={'light'}>Light</MenuItem>
              <MenuItem value={'blue'}>Blue</MenuItem>
            </Select><br/>
            <Typography type="title" component="p">
              Blog Settings
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    theme: state.theme
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeTheme}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)