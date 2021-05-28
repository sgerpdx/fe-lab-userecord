import React from 'react';
import { useState, useEffect } from 'react';
//import { styles } from './App.css';
//import { useRecord } from '../hooks/useRecord';

function App() {
  //const { current, undo, redo, record } = useRecord('#FF0000');
  const [loading, setLoading] = useState(true);
  const [colorRecords, setColorRecords] = useState([]);
  const [counter, setCounter] = useState(0);
  const [editCounter, setEditCounter] = useState(0);
  const [current, setCurrent] = useState('#FF0000');
  const [undo] = useState(null);
  const [redo] = useState(null);
  //const [record, setRecord] = useState('#FF0000');

  console.log('>>>', colorRecords);
  console.log('//Current:', current);
  console.log('|||counter', counter);

  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  const record = (value) => {
    //current variable to record & push current into colorRecords:
    setCurrent(value);
    colorRecords.push(current);
    // setColorRecords((current) => setColorRecords(current));
  };

  useEffect(() => {
    setCounter((counter) => counter + 1);
    setLoading(false);
  }, [current]);

  // const undoRecord = (counter, editCounter) => {
  //   if (counter - editCounter > 0) {
  //     setCurrent(
  //       (current) => (current = colorRecords[counter - editCounter - 1])
  //     );
  //     setEditCounter((editCounter) => editCounter + 1);
  //   } else return 'no previous records';
  // };

  // useEffect(() => {
  //   undoRecord(counter, editCounter);
  //   setLoading(false);
  // }, [undo]);

  // const redoRecord = (editCounter) => {
  //   if (editCounter < colorRecords.length) {
  //     setCurrent(
  //       (current) => (current = colorRecords[counter - editCounter - 1])
  //     );
  //     setEditCounter((editCounter) => editCounter - 1);
  //   } else return 'no forward records';
  // };

  // useEffect(() => {
  //   redoRecord(editCounter);
  //   setLoading(false);
  // }, [redo]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <input
        type="color"
        value={current}
        onChange={({ target }) => record(target.value)}
      />
      <div
        style={{ backgroundColor: current, width: '10rem', height: '10rem' }}
      ></div>
    </>
  );
}

export default App;

// const record = #{
//   foo: "FOO",
//   bar: "BAR"
// };
// const tuple = #["FOO", "BAR"]
