"use client";

import { useOptimistic, useActionState } from "react";
import { reduce, type Action } from "./actions";

export default function Page() {
  const [count, dispatch] = useActionState(reduce, 0);

  const increment = dispatch.bind(null, { type: "INCREMENT" });
  const decrement = dispatch.bind(null, { type: "DECREMENT" });

  return (
    <>
      <h1>useActionState</h1>
      <form>
        Count: {count}
        <nav>
          <button type="submit" formAction={increment}>
            Increment
          </button>
          <button type="submit" formAction={decrement}>
            Decrement
          </button>
        </nav>
      </form>
    </>
  );
}
