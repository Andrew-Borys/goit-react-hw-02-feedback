import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ text, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
