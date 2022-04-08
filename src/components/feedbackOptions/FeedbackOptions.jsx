import React from 'react';
import Button from '../button';
import { ButtonList, ButtonListItem } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ButtonList>
        {options.map(option => (
          <ButtonListItem key={option}>
            <Button text={option} onClick={() => onLeaveFeedback(option)} />
          </ButtonListItem>
        ))}
      </ButtonList>
    </div>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
