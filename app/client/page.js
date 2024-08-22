"use client";
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-7xl text-bold mb-4">ClientPage </h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount((value) => value + 1);
        }}
      >
        Increment
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => {
          setCount((value) => value - 1);
        }}
      >
        Decrement
      </button>
      <h2>{count}</h2>
    </div>
  );
};

export default ClientPage;
