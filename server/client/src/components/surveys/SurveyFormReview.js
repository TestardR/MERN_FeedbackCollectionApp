// SurveyFormReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  const reviewFields = formFields.map(({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow white-text darken-4 btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        // We need to add an arrow function, otherwise it would be called immediately
        onClick={() => submitSurvey(formValues)}
        className="green white-text btn-flat right"
      >
        Send Survey<i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  //   console.log(state);
  return { formValues: state.form.surveyForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(SurveyFormReview);
