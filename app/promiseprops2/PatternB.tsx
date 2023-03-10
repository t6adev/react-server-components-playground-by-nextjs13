import { Suspense } from 'react';

import { getTimestamp } from '../utils';

async function AshC() {
  const pokemon = await new Promise<string>((r) => setTimeout(() => r('Raichu'), 1000));
  return <div style={{ fontWeight: 'bold' }}>Ash has {pokemon}.</div>;
}

async function AshB() {
  const pokemon = await new Promise<string>((r) => setTimeout(() => r('Pikachu'), 3000));
  return (
    <div>
      <div style={{ fontWeight: 'bold' }}>Ash has {pokemon}.</div>
      <Suspense fallback={<div>Ash has ...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <AshC />
      </Suspense>
    </div>
  );
}

async function AshA() {
  const pokemon = await new Promise<string>((r) => setTimeout(() => r('Pichu'), 2000));
  return (
    <div>
      <div style={{ fontWeight: 'bold' }}>Ash has {pokemon}.</div>
      <Suspense fallback={<div>Ash has ...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <AshB />
      </Suspense>
    </div>
  );
}

export default function PatternB() {
  return (
    <div style={{ padding: 8, margin: 8, border: 'solid 1px red' }}>
      <div>Pattern B. (RSC: {getTimestamp()})</div>
      <div>Static contents here.</div>
      <Suspense fallback={<div>Ash has ...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <AshA />
      </Suspense>
    </div>
  );
}



