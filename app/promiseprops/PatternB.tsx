import { getTimestamp } from '../utils';

export default async function PatternB({ data }: { data: Promise<string[]> }) {
  const list = await data;
  return (
    <div style={{ padding: 8, margin: 8, border: 'solid 1px red' }}>
      <div>Pattern B. (RSC: {getTimestamp()})</div>
      <div>Static contents here......</div>
      <div style={{ fontWeight: 'bold' }}>Ash has {list.length} pokemon</div>
    </div>
  );
}
