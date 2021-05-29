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
  //const [undo] = useState(null);
  //const [redo] = useState(null);

  // console.log('>>>', colorRecords);
  // console.log('//Current:', current);
  // console.log('|||counter', counter);
  // console.log(':::editCounter', editCounter);

  const record = (value) => {
    const currentIndex = colorRecords.length - editCounter;
    //current variable to record & push current into colorRecords:
    setCurrent(value);
    setCounter((counter) => counter + 1);
    if (editCounter === 0) {
      //colorRecords.push(current);
      // maybe need to rework this function to fit proper hook syntax:
      setColorRecords((colorRecords) => [...colorRecords, value]);
    } else {
      colorRecords.splice(currentIndex, 0, value);
      setEditCounter((editCounter) => editCounter);
      console.log('###nowIndex', currentIndex);
    }
  };

  const undo = () => {
    const diffCondition = counter - editCounter;
    if (diffCondition > 0) {
      //experiment with switching the order of these two calls, looks like sEC happening before sC...
      setEditCounter((editCounter) => editCounter + 1);
      setCurrent(colorRecords[counter - editCounter - 1]);
    } else setFeedback('🤖 -- no previous records');
  };

  const redo = () => {
    if (editCounter !== 0) {
      //this part is working, though maybe on a delay:
      setEditCounter((editCounter) => editCounter - 1);
      //this part is not working:
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

  // useEffect(() => {
  //   // const lastValue = colorRecords[counter - editCounter];
  //   // console.log('>>>LV', lastValue);
  //   setCurrent(colorRecords[counter]);
  //   setLoading(false);
  // }, [editCounter]);

  // useEffect(() => {
  //   redoRecord(editCounter);
  //   setLoading(false);
  // }, [redo]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <section className={styles.controlArea}>
        <h3>Select a Color to Change the Square:</h3>
        <hr></hr>
        <button onClick={undo}>undo</button>
        <button onClick={redo}>redo</button>
        <input
          type="color"
          value={current}
          style={{ margin: '10px' }}
          onChange={({ target }) => record(target.value)}
        />
        <div
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
        <h4>{feedback}</h4>
      </section>
    </>
  );
}

export default App;
