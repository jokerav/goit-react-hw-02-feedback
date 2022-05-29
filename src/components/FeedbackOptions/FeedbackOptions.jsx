import React from 'react';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => (
    <button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
      {option}
    </button>
  ));
FeedbackOptions.propTypes = {
  option: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
