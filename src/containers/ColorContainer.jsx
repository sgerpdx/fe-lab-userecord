import React from 'react';
import { useRecord } from '../components/hooks/useRecord';
import ColorControls from '../components/displays/ColorControls';
import ColorDisplay from '../components/displays/ColorDisplay';

export default function ColorContainer() {
  const { current, undo, redo, record, loading, feedback } = useRecord();

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <ColorControls
        onUndo={undo}
        onRedo={redo}
        current={current}
        onRecord={record}
      />
      <ColorDisplay feedback={feedback} current={current} />
    </>
  );
}
