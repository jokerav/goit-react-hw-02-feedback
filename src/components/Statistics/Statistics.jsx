import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p>Good: {good}</p>
    <p>Neutral:{neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Posotive feedback: {positivePercentage}%</p>
  </div>
);
export default Statistics;
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
