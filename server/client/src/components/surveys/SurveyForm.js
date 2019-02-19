import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
// Field component can be used to show different types of elements that will collect data from our user

class SurveyFrom extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <Field type="text" name="surveyTitle" component="input" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyFrom);
