import { useState, useCallback } from 'react';
import './App.css';
import MyList from './List';

function App() {
  const [state, setState] = useState(false);
  const [number, setNumber] = useState(1);
  console.log("Parent Component redered");

  const handler = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number]);
  const statehanddler = () => {
    setState(!state);
  };
  const theme = {
    backgroundColor: state ? '#333' : '#FFF',
    color: state ? '#FFF' : '#333'

  }
  return (
    <div style={theme}>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))}></input>
      <button onClick={statehanddler}>Change Theme</button>
      <MyList handler={handler} />
    </div>
  );
}

export default App;
