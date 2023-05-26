import Link from "next/link";

import AtomCounter from '../components/client/AtomCounter';

export default function Jotai2() {
  console.log('jotai2 page rendered')
  return (
    <div>
      <div>This is a page(2) used Jotai.</div>
      <AtomCounter />
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
