"use client";
import { useState } from "react";

export default function CounterForLazy() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ border: "solid 1px blue", padding: 8 }}>
      <p>This component is designed for use with lazy loading and without SSR.</p>
      <label>{count}</label>
      <button onClick={() => setCount((s) => s + 1)}>count up</button>
    </div>
  );
}
