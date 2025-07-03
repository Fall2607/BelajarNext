"use client";
import { useState } from "react";

export function Counter({ name = "User" }: { name?: string }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <b>Counter ke - {name}</b>
      <h2>counter : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
      <br />
      <br />
    </>
  );
}
