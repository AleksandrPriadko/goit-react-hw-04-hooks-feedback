import React, { Component, useState } from "react";
import Section from "../Section/Section";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification";

function FeedBack() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countFeedback = (event) => {
    const btnName = event.target.textContent.toLowerCase();
    console.log(btnName);

    this.setState((prevState) => {
      for (const key in prevState) {
        console.log(key);
        if (key === btnName) {
          return { [key]: prevState[key] + 1 };
        }
      }
    });
  };

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(
    (good * 100) / countTotalFeedback
  );

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={(good, neutral, bad)}
          onLeaveFeedback={countFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}

// class FeedBack extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countFeedback = (event) => {
//     const btnName = event.target.textContent.toLowerCase();

//     this.setState((prevState) => {
//       for (const key in prevState) {
//         if (key === btnName) {
//           return { [key]: prevState[key] + 1 };
//         }
//       }
//     });
//   };
//   render() {
//     const { good, neutral, bad } = this.state;
//     const countTotalFeedback = good + neutral + bad;
//     const countPositiveFeedbackPercentage = Math.round(
//       (good * 100) / countTotalFeedback
//     );

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.countFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {countTotalFeedback !== 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={countTotalFeedback}
//               positivePercentage={countPositiveFeedbackPercentage}
//             />
//           ) : (
//             <Notification message="No feedback given" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

export default FeedBack;
