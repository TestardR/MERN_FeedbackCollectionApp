import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
// Field component can be used to show different types of elements that will collect data from our user

class SurveyFrom extends Component {
  renderField() {
    return (
      <div>
        <Field type="text" name="title" component={SurveyField} />
      </div>
    );
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderField()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyFrom);
