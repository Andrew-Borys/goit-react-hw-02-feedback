import React, { Component } from 'react';
import Statistics from './statistics';
import FeedbackOptions from './feedbackOptions';
import Section from './section';
import Notification from './notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    this.setState(prevState => {
      return {
        [event]: prevState[event] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((sum, current) => sum + current, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const amount = this.state.good;
    const total = this.countTotalFeedback();

    let percentage = 0;
    amount > 0 ? (percentage = 100 / (total / amount)) : (percentage = 0);
    return percentage;
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = Math.round(
      this.countPositiveFeedbackPercentage()
    );

    return (
      <div>
        <Section title={'Please live feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
