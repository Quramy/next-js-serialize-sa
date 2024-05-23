"use server";

import { setTimeout } from "node:timers/promises";

export type Action = {
  type: "INCREMENT" | "DECREMENT";
};

export async function reduce(state: number, { type }: Action) {
  await setTimeout(500);

  switch (type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
