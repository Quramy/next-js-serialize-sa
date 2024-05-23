"use server";

import { setTimeout } from "node:timers/promises"

export async function increment(count: number) {
  await setTimeout(500);
  return count + 1;
}

export async function decrement(count: number) {
  await setTimeout(500);
  return count - 1;
}
