import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ text }) => {
  return <p style={{ display: 'flex', justifyContent: 'center' }}>{text}</p>;
};

Notification.prototype = {
  text: PropTypes.string.isRequired,
};
export default Notification;
