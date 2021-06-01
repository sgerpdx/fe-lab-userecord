import React from 'react';
import styles from '../app/App.css';

export default function ColorDisplay({ feedback, current }) {
  return (
    <>
      <section className={styles.displayArea}>
        <div
          role="colorBox"
          aria-label="Color Display"
          style={{
            backgroundColor: current,
            width: '10rem',
            height: '10rem',
            border: 'solid 1px white',
            padding: '4px',
          }}
        ></div>
        <div className={styles.feedbackArea}>
          <h4 aria-label="User Feedback">{feedback}</h4>
        </div>
      </section>
    </>
  );
}
