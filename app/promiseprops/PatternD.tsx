'use client';

import { use } from 'react';

import { getTimestamp } from '../utils';

export default function PatternD({ data }: { data: Promise<string[]> }) {
  const list = use(data);
  return (
    <div style={{ padding: 8, margin: 8, border: 'solid 1px blue' }}>
      <div>Pattern D. (This is a client component. {getTimestamp()})</div>
      <div>Static contents here......</div>
      <div style={{ fontWeight: 'bold' }}>Ash has {list.length} pokemon</div>
    </div>
  );
}
