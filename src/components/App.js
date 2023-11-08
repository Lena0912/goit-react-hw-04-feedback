import React, { useState } from 'react';
import Feedback from './Feedback/Feedback';
import Sections from './Section/Section';
import { MainSection } from './App.styled';
import Notification from './Notification/Notification';
import Statistic from './Statistics/Statistics';

export const App = () => {
  const [statistics, setStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })
  
  const countFeedback = button => {
    if (!(button in statistics)) {
      return
    };

    setStatistics(prevStatistics => ({
      ...prevStatistics,
      [button]: prevStatistics[button] + 1
    }));
};
  
     
  const values = Object.keys(statistics);
  const isFeedback = Object.values(statistics).every(value => value === 0);
 
  
    return (
      <MainSection>
        <Sections title="Please leave feedback">
          <Feedback values={values} countFeedback={countFeedback} />
        </Sections>

        {!isFeedback ? (
          <Sections title="Statistic">
            <Statistic
              good={statistics.good}
              neutral={statistics.neutral}
              bad={statistics.bad}
            />
          </Sections>
        ) : (
          <Sections>
            <Notification message="Click the button and share your experience using this app." />
          </Sections>
        )}
      </MainSection>
    );
  }

