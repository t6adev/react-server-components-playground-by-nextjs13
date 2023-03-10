import { Suspense } from 'react';

import { getTimestamp } from '../utils';

async function Awaited({ data }: { data: Promise<string[]> }) {
  const list = await data;
  return <div style={{ fontWeight: 'bold' }}>Ash has {list.length} pokemon</div>;
}

export default function PatternA({ data }: { data: Promise<string[]> }) {
  return (
    <div style={{ padding: 8, margin: 8, border: 'solid 1px red' }}>
      <div>Pattern A. (RSC: {getTimestamp()})</div>
      <div>Static contents here......</div>
      <Suspense fallback={<div style={{ fontWeight: 'bold' }}>Ash has ... pokemon</div>}>
        {/* @ts-expect-error Async Server Component */}
        <Awaited data={data} />
      </Suspense>
    </div>
  );
}
