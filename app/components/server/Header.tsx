import { getTimestamp } from "../../utils";

export default function Header() {
  return (
    <div style={{ padding: 8 }}>Logo | Nav bar (RSC: {getTimestamp()}) </div>
  );
}
