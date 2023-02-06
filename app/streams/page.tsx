import { Suspense } from "react";
import Link from "next/link";

import { getTimestamp } from "../utils";
import Item, { ItemLoading } from "./Item";

const fetchList = (): Promise<number[]> =>
  new Promise((r) => setTimeout(() => r([0, 1, 2, 3, 4]), 1000));

// XXX not working as intended, not sure where is the issue

export default async function Streams() {
  const list = await fetchList();
  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        This is Streams page. (RSC: {getTimestamp()})
      </div>
      {list.map((id) => (
        <Suspense key={id} fallback={<ItemLoading />}>
          {/* @ts-expect-error Async Server Component */}
          <Item id={id} />
        </Suspense>
      ))}
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
