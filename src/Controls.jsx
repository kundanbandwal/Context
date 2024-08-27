import { useContext } from 'react';
import { Appcontext } from './App';

export function Controls() {
  const { count, setCount } = useContext(Appcontext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
