import Link from "next/link";

import { getTimestamp } from "../utils";
import Editor from "./Editor";

export default function Refreshable() {
  return (
    <div>
      <div>This is refreshable page. (RSC: {getTimestamp()})</div>
      <Editor initial="initial" />
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
