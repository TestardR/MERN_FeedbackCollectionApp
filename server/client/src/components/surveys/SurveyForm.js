import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
// Field component can be used to show different types of elements that will collect data from our user

const FIELDS = [
  { label: 'Survey title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email body', name: 'body' },
  { label: 'Recipient List', name: 'emails' }
];

class SurveyFrom extends Component {
  renderField() {
    return FIELDS.map(({ label, name, id }) => {
      return (
        <Field
          component={SurveyField}
          type="text"
          label={label}
          name={name}
          key={name}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderField()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
            <i className="material-icons right">do_not_disturb_alt</i>
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Submit
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  // all the values coming from our form
  const errors = {};
  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must complete the field';
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyFrom);
