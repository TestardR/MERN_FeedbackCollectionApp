import React, { Component } from 'react';
import SurveyFormReview from './SurveyFormReview';
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
  state = { formReview: false };

  renderContent() {
    if (this.state.showFormReview === true) {
      return <SurveyFormReview />;
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <>{this.renderContent()}</>;
  }
}

export default SurveyNew;
