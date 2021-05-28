# useRecord

Create a `useRecord` custom hook that returns:

- `record` - function to record a new current value
- `undo` - function that sets the current value to the previous value
- `redo` - function that sets the current value forward in history
- `current` - the current value

Take this code:

```js
const useRecord = (init) => {};

function App() {
  const { current, undo, redo, record } = useRecord('#FF0000');

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
```

## Behavior

- select a color (e.g. red), see the square change colors (to red)
- select another color (e.g. blue), see the square change to the new color (to blue)
- select another color (e.g. green), see the square change to the new color (to green)
- press undo, see the square change to the second color (to blue)
- press undo, see the square change to the first color (to red)
- press redo, see the square change to the second color (to blue)
- select another color (e.g. yellow), see the square change to the new color (to yellow)
- press undo, see the square change to the second color (to blue)
- press undo, see the square change to the first color (to red)
- press redo, see the square change to the second color (to blue)
- press redo, see the square change to the fourth color (to yellow)
- press redo, see the square change to the third color (to green)

## Test

Write a test that tests the behavior off App.

## Rubric

- behavior test 3 pts
- current 1 pts
- record 2 pts
- undo 2 pts
- redo 2 pts
