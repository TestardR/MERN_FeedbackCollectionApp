import React, { Component } from 'react';
import SurveyFormReview from './SurveyFormReview';
import SurveyForm from './SurveyForm';
import { reduxForm } from 'redux-form';

class SurveyNew extends Component {
  state = { formReview: false };

  renderContent() {
    if (this.state.showFormReview === true) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
