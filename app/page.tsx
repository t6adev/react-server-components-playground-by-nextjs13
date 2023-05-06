import Link from 'next/link';
import dynamic from 'next/dynamic';

import { getTimestamp } from './utils';
import Counter from './components/client/Counter';

const CounterForLazy = dynamic(() => import('./components/client/CounterForLazy'), { ssr: false });

export default function Root() {
  return (
    <div>
      <div>This is root page. (RSC: {getTimestamp()})</div>
      <Counter />
      <hr />
      <CounterForLazy />
      <ul>
        <li>
          <Link href="/refreshable">Go to Refreshable page</Link>
        </li>
        <li>
          <Link href="/combo">Go to Combo page</Link>
        </li>
        <li>
          <Link href="/streams">Go to Streams page</Link>
        </li>
        <li>
          <Link href="/promiseprops">Go to Promise Props page</Link>
        </li>
        <li>
          <Link href="/promiseprops2">Go to Promise Props 2 page</Link>
        </li>
      </ul>
    </div>
  );
}
