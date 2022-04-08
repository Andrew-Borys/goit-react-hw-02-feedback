import React from 'react';
import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ text, onClick }) => {
  return (
    <Btn type="button" onClick={onClick}>
      {text}
    </Btn>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
