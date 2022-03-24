import React from 'react';
import Button from '../button';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul className={styles.buttonList}>
        {options.map(option => (
          <li key={option} className={styles.buttonListItem}>
            <Button text={option} onClick={() => onLeaveFeedback(option)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackOptions;
