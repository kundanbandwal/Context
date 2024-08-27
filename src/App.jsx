import { useState, createContext } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Controls } from './Controls';
import { Count } from './count';

export const Appcontext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Appcontext.Provider value={{ count, setCount }}>
        <Count />
        <Controls />
      </Appcontext.Provider>
    </>
  );
}

export default App;
