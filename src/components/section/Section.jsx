import React from 'react';
import styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};

export default Section;
