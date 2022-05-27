import { Component } from 'react';
import Section from './Section/section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
export class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  render() {
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
          ></FeedbackOptions>
        </Section>
      </div>
    );
  }
}
