import React from 'react';

function SurveyField({ input, label }) {
  return (
    <>
      <label>{label}</label>
      <input {...input} />
    </>
  );
}

export default SurveyField;
