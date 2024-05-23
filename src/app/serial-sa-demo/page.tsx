"use client";

import { useState } from "react";
import { increment } from "./actions";

export default function Page() {
  const [count, updateCount] = useState(0);

  return (
    <form action={() => increment(count).then(updateCount)}>
      Count: {count}
      <nav>
        <button>Increment</button>
      </nav>
    </form>
  );
}
