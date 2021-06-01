import React from 'react';
import styles from '../app/App.css';

export default function ColorControls({ onUndo, onRedo, current, onRecord }) {
  return (
    <>
      <section className={styles.controlArea}>
        <h3>Select a Color to Change the Square:</h3>
        <hr></hr>
        <button aria-label="Undo Selection" onClick={onUndo}>
          undo
        </button>
        <button aria-label="Redo Selection" onClick={onRedo}>
          redo
        </button>
        <div>
          <label for="color">Selector</label>
          <input
            role="colorInput"
            id="color"
            type="color"
            value={current}
            aria-label="Color Selector"
            style={{ margin: '10px' }}
            onChange={({ target }) => onRecord(target.value)}
          />
        </div>
      </section>
    </>
  );
}
