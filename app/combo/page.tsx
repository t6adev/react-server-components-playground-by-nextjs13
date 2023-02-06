import Link from "next/link";

import { getTimestamp } from "../utils";
import ClientA from "./ClientA";
import ServerX from "./ServerX";

export default function Combo() {
  return (
    <div>
      <div>This is compo page. (RSC: {getTimestamp()})</div>
      <ClientA anyServerComponent={<ServerX />} />
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
