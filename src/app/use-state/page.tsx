"use client";

import { useState, startTransition } from "react";
import { increment, decrement } from "./actions";

export default function Page() {
  const [count, updateCount] = useState(0);

  return (
    <>
      <h1>useState</h1>
      <form>
        Count: {count}
        <nav>
          <button formAction={() => increment(count).then(updateCount)}>
            Increment
          </button>
          <button formAction={() => decrement(count).then(updateCount)}>
            Decrement
          </button>
        </nav>
      </form>
    </>
  );
}
