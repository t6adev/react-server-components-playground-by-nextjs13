import Link from "next/link";

import AtomCounter from '../components/client/AtomCounter';

export default function Jotai1() {
  return (
    <div>
      <div>This is a page(1) used Jotai.</div>
      <AtomCounter />
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
