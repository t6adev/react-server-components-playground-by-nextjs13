'use client';
import { useAtom } from 'jotai';

import { countAtom } from './atoms';

export default function AtomCounter() {
  const [count, setCount] = useAtom(countAtom);
  console.log('in app-counter');
  return (
    <div style={{ border: 'solid 1px blue', padding: 8 }}>
      <label>{count}</label>
      <button onClick={() => setCount((s) => s + 1)}>count up</button>
    </div>
  );
}
