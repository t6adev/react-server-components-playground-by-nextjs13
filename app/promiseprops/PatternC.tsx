'use client';

import { use, Suspense } from 'react';

import { getTimestamp } from '../utils';

function Awaited({ data }: { data: Promise<string[]> }) {
  const list = use(data);
  return <div style={{ fontWeight: 'bold' }}>Ash has {list.length} pokemon</div>;
}

export default function PatternC({ data }: { data: Promise<string[]> }) {
  return (
    <div style={{ padding: 8, margin: 8, border: 'solid 1px blue' }}>
      <div>Pattern C. (This is a client component. {getTimestamp()})</div>
      <div>Static contents here......</div>
      <Suspense fallback={<div style={{ fontWeight: 'bold' }}>Ash has ... pokemon</div>}>
        <Awaited data={data} />
      </Suspense>
    </div>
  );
}
