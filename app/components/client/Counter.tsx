"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ border: "solid 1px blue", padding: 8 }}>
      <label>{count}</label>
      <button onClick={() => setCount((s) => s + 1)}>count up</button>
    </div>
  );
}
