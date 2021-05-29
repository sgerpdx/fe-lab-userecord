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

  console.log('>>>', colorRecords);
  console.log('//Current:', current);
  console.log('|||counter', counter);
  console.log(':::editCounter', editCounter);

  const record = (value) => {
    //current variable to record & push current into colorRecords:
    setCurrent(value);
    setCounter((counter) => counter + 1);
    //colorRecords.push(current);
    // maybe need to rework this function to fit proper hook syntax:
    setColorRecords((colorRecords) => [...colorRecords, value]);
  };

  const undoRecord = () => {
    const diffCondition = counter - editCounter - 1;
    if (diffCondition > 0) {
      setCurrent(colorRecords[counter - editCounter - 1]);
      setEditCounter((editCounter) => editCounter + 1);
      console.log('Undo>current color', current);
    } else console.log('no previous records');
  };

  useEffect(
    (current) => {
      if (counter === 0) {
        setColorRecords((colorRecords) => [...colorRecords, current]);
      }
      setLoading(false);
    },
    [current]
  );

  // useEffect(() => {
  //   // const lastValue = colorRecords[counter - editCounter];
  //   // console.log('>>>LV', lastValue);
  //   setCurrent(colorRecords[counter]);
  //   setLoading(false);
  // }, [editCounter]);

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
      <button onClick={undoRecord}>undo</button>
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
