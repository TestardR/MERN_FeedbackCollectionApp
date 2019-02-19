import React from 'react';

function SurveyField({ input, label, meta: { error, touched } }) {
  return (
    // {touched && error} means if touched is true and the error, then show the error
    <div>
      <label>{label}</label>
      <input {...input} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
}

export default SurveyField;
