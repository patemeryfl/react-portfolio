import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import * as Actions from '../../../actions';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  }

  return errors;
};

class SignInComponent extends React.Component {
  handleFormSubmit = (values) => {
    this.props.signIn(values);
  };

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <TextField label={label} {...input} className={this.props.textField}/>
      {touched && error && <div className="help-block">{error}</div>}
    </div>
  );

  renderAuthenticationError() {
    if (this.props.authenticationError) {
      return <div className="alert alert-danger">{ this.props.authenticationError }</div>;
    }
    return <div></div>;
  }

  render() {
    return(
        <div>
          { this.renderAuthenticationError() }
          <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
            <Field name="email" component={this.renderField} className="form-control" type="text" label="Email"/>
            <Field name="password" component={this.renderField} className="form-control" type="password" label="Password"/>

            <button action="submit" className="btn btn-primary">Sign In</button>
          </form>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticationError: state.error
  }
}

export default withStyles(styles)(connect(mapStateToProps, Actions)(reduxForm({
  form: 'login',
  validate
})(SignInComponent)));

