import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
// Field component can be used to show different types of elements that will collect data from our user

class SurveyFrom extends Component {
  render() {
    return (
      <div>
        <Field type="text" name="surveyTitle" component="input" />
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyFrom);
