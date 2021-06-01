import { useState, useEffect } from 'react';

export const useRecord = () => {
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

  return {
    loading,
    colorRecords,
    counter,
    editCounter,
    current,
    feedback,
    record,
    undo,
    redo,
  };
};
