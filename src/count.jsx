import { useContext } from 'react';
import { Appcontext } from './App';

export function Count() {
  const { count } = useContext(Appcontext);
  return <div>count : {count}</div>;
}
