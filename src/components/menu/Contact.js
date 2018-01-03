import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import { Field, reduxForm } from 'redux-form'

import TextField from 'material-ui/TextField'

const styles = theme => ({
  card: {
    minWidth: 275,
    padding: 20
  }
});

const validate = values => {
  const errors = {}
  const requiredFields = [ 'firstName', 'lastName', 'email', 'favoriteColor', 'notes' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const renderTextField = props => (
  <TextField hintText={props.label}
    floatingLabelText={props.label}
    errorText={props.touched && props.error}
    {...props}
  />
)

const ContactForm = props => {
  const { handleSubmit, pristine, reset, submitting, classes } = props
  return (
    <div>
    <br/>
    <Typography type="display1" component="h1">
      Contact
    </Typography>
    <br/>
    <Card className={classes.card}>
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="firstName" component={renderTextField} label="First Name"/>
      </div>
      <div>
        <Field name="lastName" component={renderTextField} label="Last Name"/>
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email"/>
      </div>
      <div>
        <Field name="notes" component={renderTextField} label="Notes" multiLine={true} rows={2}/>
      </div>
      <br/>
      <div>
        <Button type="submit" disabled={pristine || submitting}>Submit</Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
      </div>
    </form>
    </Card>
    </div>
  )
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
  reduxForm({
    form: 'ContactForm',  // a unique identifier for this form
    validate,
  })(ContactForm)
);