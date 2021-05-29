import React from 'react';
import { useState, useEffect } from 'react';

// export const useRecord = () => {
//   const [records, setRecords] = useState([]);

//   useEffect(() => {});

//   return <h3>Code Freakout!</h3>;
// };

// import { useState, useEffect } from 'react';
// import getCharacters from '../services/API';

// export const useThisList = () => {
//   const [loading, setLoading] = useState(true);
//   const [charList, setCharList] = useState([]);

//   useEffect(() => {
//     getCharacters()
//       .then(setCharList)
//       .finally(() => setLoading(false));
//   }, []);

//   return { loading, charList };
// };

// logic:

//record: push new current into [records]
//undo: return records[current-1]
//redo: return records[current] or records[undo +1]

// export const record = (current) => {
//   colorRecords.push[current];
// };

// export const undo = (counter, editCounter) => {
//   if (counter - editCounter > 0) {
//     setCurrent((counter) => colorRecords[counter - 1]);
//     setEditCounter((editCounter) => editCounter + 1);
//   } else return 'no previous records';
// };

// export const redo = (counter, editCounter, colorRecords) => {
//   if (editCounter < colorRecords.length) {
//     setCurrent(
//       (counter, editCounter) => colorRecords[counter - editCounter - 1]
//     );
//     setEditCounter((editCounter) => editCounter - 1);
//   } else return 'no forward records';
// };
