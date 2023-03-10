import { Suspense } from 'react';
import Link from 'next/link';

import { getTimestamp } from '../utils';
import PatternA from './PatternA';
import PatternB from './PatternB';
import PatternC from './PatternC';
import PatternD from './PatternD';

export default function PromiseProps() {
  const data = new Promise<string[]>((r) => setTimeout(() => r(['pikachu']), 5000));
  return (
    <div>
      <div style={{ marginBottom: 8 }}>This is Promise Props page. (RSC: {getTimestamp()})</div>
      <div style={{ padding: 8, marginBottom: 4 }}>
        <div>Pattern A</div>
        <PatternA data={data} />
      </div>
      <div style={{ padding: 8, marginBottom: 4 }}>
        <div>Pattern B</div>
        <Suspense fallback="loading...">
          {/* @ts-expect-error Async Server Component */}
          <PatternB data={data} />
        </Suspense>
      </div>
      <div style={{ padding: 8, marginBottom: 4 }}>
        <div>Pattern C</div>
        <PatternC data={data} />
      </div>
      <div style={{ padding: 8, marginBottom: 4 }}>
        <div>Pattern D</div>
        <Suspense fallback="loading...">
          <PatternD data={data} />
        </Suspense>
      </div>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
