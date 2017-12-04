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
    this.state = { theme: 'light' }
  }

  handleChange = theme => event => {
    this.setState({ [theme]: event.target.value });
    this.props.changeTheme(event.target.value)
  };
  
  render() {
    return(
      <div>
        <Card>
          <CardContent>
            <Typography type="headline" component="h2">
              Settings
            </Typography>
            <Typography type="subheading" component="h2">
              Select Theme
            </Typography>
            <Select
              value={this.state.theme}
              onChange={this.handleChange('theme')}
              input={<Input/>}>
              <MenuItem value={'dark'}>Dark</MenuItem>
              <MenuItem value={'light'}>Light</MenuItem>
              <MenuItem value={'blue'}>Blue</MenuItem>
            </Select>
            <Typography type="subheading" component="h2">
              Blog Settings
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeTheme}, dispatch)
}

export default connect(null, mapDispatchToProps)(Settings)