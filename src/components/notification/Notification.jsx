import React from 'react';
import PropTypes from 'prop-types';

const Notification = () => {
  return <p>No feedbeck given</p>;
};

Notification.prototype = {
  message: PropTypes.string.isRequired,
};
export default Notification;
