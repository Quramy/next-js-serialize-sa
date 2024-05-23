"use client";

import { useOptimistic, useActionState } from "react";
import { reduce, type Action } from "../actions";

export default function Page() {
  const [count, dispatch] = useActionState(reduce, 0);

  const [optimisicCount, updateOptimisticCount] = useOptimistic(
    count,
    (currentCount: number, { type }: Action) => {
      switch (type) {
        case "INCREMENT":
          return currentCount + 1;
        case "DECREMENT":
          return currentCount - 1;
        default:
          return currentCount;
      }
    }
  );

  const increment = async () => {
    updateOptimisticCount({ type: "INCREMENT" });
    await dispatch({ type: "INCREMENT" });
  };

  const decrement = async () => {
    updateOptimisticCount({ type: "DECREMENT" });
    await dispatch({ type: "DECREMENT" });
  };

  return (
    <>
      <h1>useActionState and useOptimistic</h1>
      <form>
        Count: {optimisicCount}
        <nav>
          <button formAction={increment}>Increment</button>
          <button formAction={decrement}>Decrement</button>
        </nav>
      </form>
    </>
  );
}
