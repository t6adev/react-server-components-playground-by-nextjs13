import { Suspense } from 'react';

import { getTimestamp } from '../utils';

async function AshC({ data }: { data: Promise<string>[] }) {
  const pokemon = await data[2];
  return <div style={{ fontWeight: 'bold' }}>Ash has {pokemon}.</div>;
}

async function AshB({ data }: { data: Promise<string>[] }) {
  const pokemon = await data[1];
  return (
    <div>
      <div style={{ fontWeight: 'bold' }}>Ash has {pokemon}.</div>
      <Suspense fallback={<div>Ash has ...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <AshC data={data} />
      </Suspense>
    </div>
  );
}

async function AshA({ data }: { data: Promise<string>[] }) {
  const pokemon = await data[0];
  return (
    <div>
      <div style={{ fontWeight: 'bold' }}>Ash has {pokemon}.</div>
      <Suspense fallback={<div>Ash has ...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <AshB data={data} />
      </Suspense>
    </div>
  );
}

export default function PatternA() {
  const dataA = new Promise<string>((r) => setTimeout(() => r('Pichu'), 2000));
  const dataB = new Promise<string>((r) => setTimeout(() => r('Pikachu'), 3000));
  const dataC = new Promise<string>((r) => setTimeout(() => r('Raichu'), 1000));
  return (
    <div style={{ padding: 8, margin: 8, border: 'solid 1px red' }}>
      <div>Pattern A. (RSC: {getTimestamp()})</div>
      <div>Static contents here.</div>
      <Suspense fallback={<div>Ash has ...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <AshA data={[dataA, dataB, dataC]} />
      </Suspense>
    </div>
  );
}
