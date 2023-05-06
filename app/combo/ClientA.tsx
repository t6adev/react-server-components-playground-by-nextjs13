'use client';
import { ReactNode } from 'react';
import { useAutoCountUp } from './useAutoCountUp';

export default function ClientA({ anyServerComponent }: { anyServerComponent: ReactNode }) {
  const count = useAutoCountUp();
  console.log('in ClientA');
  return (
    <div style={{ border: 'solid 1px blue', padding: 8 }}>
      <div>This is a client component. {count}</div>
      {anyServerComponent}
    </div>
  );
}
