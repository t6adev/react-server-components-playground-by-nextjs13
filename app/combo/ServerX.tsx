import { getTimestamp } from "../utils";

export default function ServerX() {
  return (
    <div style={{ padding: 16, border: "solid 1px red" }}>
      <div>This is a server component. (RSC: {getTimestamp()})</div>
    </div>
  );
}
