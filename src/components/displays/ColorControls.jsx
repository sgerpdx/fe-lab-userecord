import React from 'react';

export default function ColorControls() {
  return (
    <>
      <section className={styles.controlArea}>
        <h3>Select a Color to Change the Square:</h3>
        <hr></hr>
        <button aria-label="Undo Selection" onClick={undo}>
          undo
        </button>
        <button aria-label="Redo Selection" onClick={redo}>
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
            onChange={({ target }) => record(target.value)}
          />
        </div>
      </section>
    </>
  );
}
