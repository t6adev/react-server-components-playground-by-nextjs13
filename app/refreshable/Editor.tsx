"use client";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export default function Editor({ initial }: { initial: string }) {
  const router = useRouter();
  const [something, setSomething] = useState(initial);
  const [, startTransition] = useTransition();
  return (
    <div style={{ border: "solid 1px blue", padding: 8 }}>
      <input
        type="text"
        value={something}
        onChange={(e) => setSomething(e.target.value)}
      />
      <button
        onClick={() =>
          startTransition(() => {
            router.refresh();
          })
        }
      >
        refresh
      </button>
    </div>
  );
}
