'use client'

import Counter from "@/app/components/Counter";
import Todo from "@/app/components/Todo";

export default function Home() {
  return (
    <main >
      <h1>Hello redux</h1>
      <Counter />
      <Todo />
    </main>
  );
}
