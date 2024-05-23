"use client";

import { useState, startTransition } from "react";
import { increment, decrement } from "./actions";

export default function Page() {
  const [count, updateCount] = useState(0);

  return (
    <>
      <h1>useState and client invocation</h1>
      <div>
        Count: {count}
        <nav>
          <button
            onClick={() =>
              startTransition(() => increment(count).then(updateCount))
            }
          >
            Increment
          </button>
          <button
            onClick={() =>
              startTransition(() => decrement(count).then(updateCount))
            }
          >
            Decrement
          </button>
        </nav>
      </div>
    </>
  );
}
