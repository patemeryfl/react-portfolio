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

    if (!values.passwordConfirmation) {
        errors.passwordConfirmation = "Please enter a password confirmation.";
    }

    if (values.password !== values.passwordConfirmation ) {
        errors.password = 'Passwords do not match';
    }

    return errors;
};

class SignUpComponent extends React.Component {
    handleFormSubmit = (values) => {
        this.props.signUp(values);
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
        return (
            <div className="container">
                <div className="col-md-6 col-md-offset-3">
                    <h2 className="text-center">Sign Up</h2>

                    { this.renderAuthenticationError() }

                    <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                        <Field name="email" type="text" component={this.renderField} label="Email" />
                        <Field name="password" type="password" component={this.renderField} label="Password" />
                        <Field name="passwordConfirmation" type="password" component={this.renderField} label="Password Confirmation" />

                        <button action="submit" className="btn btn-primary">Sign up</button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticationError: state.auth.error
    }
}

export default withStyles(styles)(connect(mapStateToProps, Actions)(reduxForm({
    form: 'signup',
    validate
})(SignUpComponent)));