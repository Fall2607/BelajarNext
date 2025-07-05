"use client";
import { useState } from "react";

export function Counter({ name = "User" }: { name?: string }) {
  const [count, setCount] = useState(0);
  return (
    <div className="max-w-sm mx-auto mt-8 p-6 bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
      <b className="text-lg text-gray-700">Counter ke - {name}</b>
      <h2 className="text-3xl font-bold text-blue-600">Counter: {count}</h2>
      <div className="flex space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
