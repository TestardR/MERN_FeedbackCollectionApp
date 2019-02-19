import React from 'react';

function SurveyField({ input, label, meta: { error, touched } }) {
  return (
    // {touched && error} means if touched is true and the error, then show the error
    <div>
      <label>{label}</label>
      <input {...input} />
      {touched && error}
    </div>
  );
}

export default SurveyField;
