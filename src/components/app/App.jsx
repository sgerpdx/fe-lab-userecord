/**
 * @jest-environment jsdom
 */
import React from 'react';
import { useState, useEffect } from 'react';
import styles from './App.css';
//import { useRecord } from '../hooks/useRecord';

function App() {
  //const { current, undo, redo, record } = useRecord('#FF0000');
  const [loading, setLoading] = useState(true);
  const [colorRecords, setColorRecords] = useState([]);
  const [counter, setCounter] = useState(0);
  const [editCounter, setEditCounter] = useState(0);
  const [current, setCurrent] = useState('#FF0000');
  const [feedback, setFeedback] = useState('');

  const record = (value) => {
    const currentIndex = colorRecords.length - editCounter;
    setCurrent(value);
    setCounter((counter) => counter + 1);
    if (editCounter === 0) {
      setColorRecords((colorRecords) => [...colorRecords, value]);
    } else {
      colorRecords.splice(currentIndex, 0, value);
      setEditCounter((editCounter) => editCounter);
    }
  };

  const undo = () => {
    const diffCondition = counter - editCounter;
    if (diffCondition > 0) {
      setEditCounter((editCounter) => editCounter + 1);
      setCurrent(colorRecords[counter - editCounter - 1]);
    } else setFeedback('🤖 -- no previous records');
  };

  const redo = () => {
    if (editCounter !== 0) {
      setEditCounter((editCounter) => editCounter - 1);
      setCurrent(colorRecords[counter - editCounter + 1]);
    } else setFeedback('no forward records -- 🤖');
  };

  useEffect(() => {
    if (counter === 0) {
      setColorRecords((colorRecords) => [...colorRecords, current]);
    }
    setFeedback('>>>');
    setLoading(false);
  }, [current]);

  if (loading) return <h2>Loading...</h2>;

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
      </section>
      <section className={styles.feedbackArea}>
        <h4 aria-label="User Feedback">{feedback}</h4>
      </section>
    </>
  );
}

export default App;
