import Link from 'next/link';

import { getTimestamp } from '../utils';
import PatternA from './PatternA';
import PatternB from './PatternB';

export default function PromiseProps2() {
  
  return (
    <div>
      <div style={{ marginBottom: 8 }}>This is Promise Props page. (RSC: {getTimestamp()})</div>
      <div style={{ padding: 8, marginBottom: 4 }}>
        <div>Pattern A</div>
        <PatternA />
      </div>
      <div style={{ padding: 8, marginBottom: 4 }}>
        <div>Pattern B</div>
        <PatternB />
      </div>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
