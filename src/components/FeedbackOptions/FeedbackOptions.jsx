import React from 'react';
const FeedbackOptions = ({ options }) =>
  options.map(option => <button>{option}</button>);

export default FeedbackOptions;
